import { pgTable, serial, timestamp, text, boolean } from "drizzle-orm/pg-core";

export const contactRequestsTable = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  modality: text("modality"),
  message: text("message"),
  read: boolean("read").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type ContactRequest = typeof contactRequestsTable.$inferSelect;
export type InsertContactRequest = typeof contactRequestsTable.$inferInsert;
