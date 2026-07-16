import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages)
  .pick({
    name: true,
    email: true,
    subject: true,
    message: true,
  })
  .extend({
    name: z.string().trim().min(1, "Name is required").max(120),
    email: z.string().trim().email("Enter a valid email address").max(254),
    subject: z.string().trim().min(1, "Subject is required").max(160),
    message: z
      .string()
      .trim()
      .min(10, "Message must be at least 10 characters")
      .max(5000),
  });

// The optional `website` field is a honeypot. Real users never see or fill it;
// automated submissions that populate it are accepted without being stored.
export const contactRequestSchema = insertContactMessageSchema.extend({
  website: z.string().max(200).optional().default(""),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
