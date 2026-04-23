import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const projectTable = pgTable("projects", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  owner_email: varchar({ length: 255 }).notNull(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  category: varchar({ length: 255 }).notNull(),
  status: varchar({ length: 255 }).notNull().default("not started"),
  
});

export const selectProjectSchema = createSelectSchema(projectTable);

// For INSERT (API requests) — id & createdAt auto-excluded
export const insertProjectSchema = createInsertSchema(projectTable);
