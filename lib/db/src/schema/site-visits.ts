import { pgTable, serial, timestamp, text } from "drizzle-orm/pg-core";

export const siteVisitsTable = pgTable("site_visits", {
  id: serial("id").primaryKey(),
  visitorHash: text("visitor_hash").notNull(),
  path: text("path"),
  userAgent: text("user_agent"),
  referrer: text("referrer"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type SiteVisit = typeof siteVisitsTable.$inferSelect;
export type InsertSiteVisit = typeof siteVisitsTable.$inferInsert;
