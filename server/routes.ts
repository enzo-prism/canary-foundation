import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactRequestSchema } from "@shared/schema";
import { z } from "zod";
import fs from "fs";
import path from "path";
import { isDatabaseConfigured } from "./db";

const CONTACT_WINDOW_MS = 15 * 60 * 1000;
const CONTACT_REQUEST_LIMIT = 5;
const MAX_RATE_LIMIT_ENTRIES = 10_000;

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const contactRateLimits = new Map<string, RateLimitEntry>();

function getContactRateLimitKey(req: Request) {
  return req.ip || req.socket.remoteAddress || "unknown";
}

function consumeContactRateLimit(req: Request) {
  const now = Date.now();
  const key = getContactRateLimitKey(req);
  const existing = contactRateLimits.get(key);

  if (!existing || existing.resetAt <= now) {
    if (contactRateLimits.size >= MAX_RATE_LIMIT_ENTRIES) {
      contactRateLimits.forEach((entry, entryKey) => {
        if (entry.resetAt <= now) contactRateLimits.delete(entryKey);
      });
      if (contactRateLimits.size >= MAX_RATE_LIMIT_ENTRIES) {
        const oldestKey = contactRateLimits.keys().next().value;
        if (oldestKey) contactRateLimits.delete(oldestKey);
      }
    }

    const entry = { count: 1, resetAt: now + CONTACT_WINDOW_MS };
    contactRateLimits.set(key, entry);
    return {
      allowed: true,
      remaining: CONTACT_REQUEST_LIMIT - 1,
      resetAt: entry.resetAt,
    };
  }

  existing.count += 1;
  return {
    allowed: existing.count <= CONTACT_REQUEST_LIMIT,
    remaining: Math.max(0, CONTACT_REQUEST_LIMIT - existing.count),
    resetAt: existing.resetAt,
  };
}

export async function registerRoutes(app: Express): Promise<Server> {
  // NOTE: Legacy redirects are now handled in server/index.ts BEFORE Vite middleware
  // This ensures they work properly in development mode.
  const distPublicPath = path.join(process.cwd(), "dist", "public");
  const serveGeneratedAsset =
    (filename: string, contentType: string) =>
    (_req: Request, res: Response) => {
      const assetPath = path.join(distPublicPath, filename);
      if (!fs.existsSync(assetPath)) {
        res
          .status(503)
          .type("text/plain")
          .send(
            `${filename} not found. Run "npm run build" and "node postbuild.js" to generate production crawl assets.`,
          );
        return;
      }

      res.type(contentType);
      res.sendFile(assetPath);
    };

  app.get("/robots.txt", serveGeneratedAsset("robots.txt", "text/plain"));
  app.get("/sitemap.xml", serveGeneratedAsset("sitemap.xml", "application/xml"));
  app.get(
    "/sitemap-index.xml",
    serveGeneratedAsset("sitemap-index.xml", "application/xml"),
  );
  app.get(
    "/news-sitemap.xml",
    serveGeneratedAsset("news-sitemap.xml", "application/xml"),
  );
  app.get("/llm.xml", serveGeneratedAsset("llm.xml", "application/xml"));
  app.get("/ai.txt", serveGeneratedAsset("ai.txt", "text/plain"));

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    const rateLimit = consumeContactRateLimit(req);
    res.setHeader("RateLimit-Limit", CONTACT_REQUEST_LIMIT.toString());
    res.setHeader("RateLimit-Remaining", rateLimit.remaining.toString());
    res.setHeader(
      "RateLimit-Reset",
      Math.ceil(rateLimit.resetAt / 1000).toString(),
    );

    if (!rateLimit.allowed) {
      res.setHeader(
        "Retry-After",
        Math.max(1, Math.ceil((rateLimit.resetAt - Date.now()) / 1000)).toString(),
      );
      return res.status(429).json({
        error: "Too many messages. Please wait a few minutes and try again.",
      });
    }

    try {
      const { website, ...validatedData } = contactRequestSchema.parse(req.body);

      // Return a normal success response to bots so the honeypot cannot be
      // discovered by comparing status codes, but do not retain their input.
      if (website) {
        return res.status(202).json({
          success: true,
          status: "received",
          message: "Thank you. Your message has been received.",
        });
      }

      await storage.createContactMessage(validatedData);

      if (isDatabaseConfigured) {
        return res.status(201).json({
          success: true,
          status: "stored",
          persisted: true,
          message: "Thank you. Your message has been securely received.",
        });
      }

      return res.status(202).json({
        success: true,
        status: "stored_temporarily",
        persisted: false,
        message:
          "Your message was received by this server, but durable storage is not configured.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          error: "Invalid form data",
          details: error.errors.map(({ path, code, message }) => ({
            path,
            code,
            message,
          })),
        });
      } else {
        console.error("[contact] Failed to store a contact submission");
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Get contact messages (admin only). Guarded by CONTACT_ADMIN_TOKEN so the
  // endpoint never publicly exposes submitted names/emails/messages. When no
  // token is configured the endpoint is disabled (404) rather than open.
  app.get("/api/contact", async (req, res) => {
    const adminToken = process.env.CONTACT_ADMIN_TOKEN;
    if (!adminToken) {
      return res.status(404).json({ error: "Not found" });
    }

    if (req.headers.authorization !== `Bearer ${adminToken}`) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const messages = await storage.getContactMessages();
      res.setHeader("Cache-Control", "private, no-store");
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // API requests must never fall through to the SPA and return HTML with a
  // misleading 200 response.
  app.use("/api", (_req, res) => {
    res.status(404).json({ error: "Not found" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
