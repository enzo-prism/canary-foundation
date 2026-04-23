import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import fs from "fs";
import path from "path";

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
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Get contact messages (for admin use)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
