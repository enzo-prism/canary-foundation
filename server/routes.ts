import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import fs from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve crawl assets for development
  app.get("/robots.txt", (req, res) => {
    const robotsPath = path.join(process.cwd(), "dist", "public", "robots.txt");
    if (fs.existsSync(robotsPath)) {
      res.type("text/plain");
      res.sendFile(robotsPath);
    } else {
      // Fallback robots.txt for development
      res.type("text/plain");
      res.send(`User-agent: *
Allow: /
Sitemap: https://canaryfoundation.org/sitemap.xml
Sitemap: https://canaryfoundation.org/llm.xml`);
    }
  });

  app.get("/sitemap.xml", (req, res) => {
    const sitemapPath = path.join(process.cwd(), "dist", "public", "sitemap.xml");
    if (fs.existsSync(sitemapPath)) {
      res.type("application/xml");
      res.sendFile(sitemapPath);
    } else {
      res.status(404).send("Sitemap not found. Run 'npm run build && node postbuild.js' to generate.");
    }
  });

  app.get("/llm.xml", (req, res) => {
    const llmPath = path.join(process.cwd(), "dist", "public", "llm.xml");
    if (fs.existsSync(llmPath)) {
      res.type("application/xml");
      res.sendFile(llmPath);
    } else {
      res.status(404).send("LLM sitemap not found. Run 'npm run build && node postbuild.js' to generate.");
    }
  });

  app.get("/ai.txt", (req, res) => {
    const aiPath = path.join(process.cwd(), "dist", "public", "ai.txt");
    if (fs.existsSync(aiPath)) {
      res.type("text/plain");
      res.sendFile(aiPath);
    } else {
      // Fallback ai.txt for development
      res.type("text/plain");
      res.send(`User-agent: *
Allow: /
Sitemap: https://canaryfoundation.org/llm.xml`);
    }
  });
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
