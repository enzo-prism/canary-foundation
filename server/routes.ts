import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import fs from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // NOTE: Legacy redirects are now handled in server/index.ts BEFORE Vite middleware
  // This ensures they work properly in development mode
  
  // Serve crawl assets for development
  app.get("/robots.txt", (req, res) => {
    const robotsPath = path.join(process.cwd(), "dist", "public", "robots.txt");
    if (fs.existsSync(robotsPath)) {
      res.type("text/plain");
      res.sendFile(robotsPath);
    } else {
      // Generate and save robots.txt if it doesn't exist
      const robotsTxt = `User-agent: *
Allow: /
Sitemap: https://canaryfoundation.org/sitemap.xml
Sitemap: https://www.canaryfoundation.org/sitemap.xml

# Search engine crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# AI/LLM crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /`;
      
      // Try to create the directory and save for future use
      const distPublicPath = path.join(process.cwd(), "dist", "public");
      if (!fs.existsSync(distPublicPath)) {
        fs.mkdirSync(distPublicPath, { recursive: true });
      }
      fs.writeFileSync(robotsPath, robotsTxt, 'utf-8');
      
      res.type("text/plain");
      res.send(robotsTxt);
    }
  });

  app.get("/sitemap.xml", (req, res) => {
    const sitemapPath = path.join(process.cwd(), "dist", "public", "sitemap.xml");
    if (fs.existsSync(sitemapPath)) {
      res.type("application/xml");
      res.sendFile(sitemapPath);
    } else {
      // Generate a minimal sitemap on-the-fly if it doesn't exist
      const minimalSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://canaryfoundation.org/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/about/our-mission</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/about/founders-story</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/about/impact-success</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/about/staff</loc>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/about/board-of-directors</loc>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/science</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/science/programs</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/science/centers</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/approach</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/blog/don-listwin-award-2024-antonis-antoniou</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/blog/edx24-conference-stanford-cancer-research</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/blog/oral-history-caltech</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/contact</loc>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;
      
      // Try to create the directory and save the sitemap for future use
      const distPublicPath = path.join(process.cwd(), "dist", "public");
      if (!fs.existsSync(distPublicPath)) {
        fs.mkdirSync(distPublicPath, { recursive: true });
      }
      fs.writeFileSync(sitemapPath, minimalSitemap, 'utf-8');
      
      // Serve the generated sitemap
      res.type("application/xml");
      res.send(minimalSitemap);
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
