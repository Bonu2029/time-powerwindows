import { pgTable, serial, text, integer, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const quotesTable = pgTable("quotes", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  projectAddress: text("project_address").notNull(),
  status: text("status", { enum: ["draft", "submitted", "confirmed", "completed"] }).notNull().default("draft"),
  estimatedTotal: decimal("estimated_total", { precision: 10, scale: 2 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at"),
});

export const quoteItemsTable = pgTable("quote_items", {
  id: serial("id").primaryKey(),
  quoteId: integer("quote_id").notNull(),
  windowType: text("window_type").notNull(),
  quantity: integer("quantity").notNull().default(1),
  size: text("size"),
  interiorColor: text("interior_color"),
  exteriorColor: text("exterior_color"),
  gridStyle: text("grid_style"),
  glassCoating: text("glass_coating"),
  trimPackage: text("trim_package"),
  addOns: text("add_ons"),
  unitPrice: decimal("unit_price", { precision: 10, scale: 2 }),
  lineTotal: decimal("line_total", { precision: 10, scale: 2 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const appointmentsTable = pgTable("appointments", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  date: text("date").notNull(),
  timeSlot: text("time_slot").notNull(),
  consultationType: text("consultation_type").notNull(),
  duration: text("duration").default("1 hour"),
  status: text("status", { enum: ["scheduled", "confirmed", "cancelled", "completed"] }).notNull().default("scheduled"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertQuoteSchema = createInsertSchema(quotesTable).omit({ id: true, createdAt: true, updatedAt: true });
export const insertQuoteItemSchema = createInsertSchema(quoteItemsTable).omit({ id: true, createdAt: true });
export const insertAppointmentSchema = createInsertSchema(appointmentsTable).omit({ id: true, createdAt: true });

export type InsertQuote = z.infer<typeof insertQuoteSchema>;
export type InsertQuoteItem = z.infer<typeof insertQuoteItemSchema>;
export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type Quote = typeof quotesTable.$inferSelect;
export type QuoteItem = typeof quoteItemsTable.$inferSelect;
export type Appointment = typeof appointmentsTable.$inferSelect;
