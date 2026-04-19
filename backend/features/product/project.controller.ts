import type{ Request, Response } from "express";
import { insertProjectSchema, projectTable } from "../../db/schema.ts";
import { db } from "../../index.ts";
import { eq } from "drizzle-orm";

// Create a new project
export const createProject = async (req: Request, res: Response) => {

  const result = insertProjectSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ error: "Invalid request data", details: result.error });
  }

  await db.insert(projectTable).values(result.data);
  return res.status(201).json({ message: "Project created successfully" });
};

// Get all projects for a specific owner
export const getAllProjects = async (req: Request, res: Response) => {

  const owner_email = req.headers.owner_email;

  if (typeof owner_email !== "string") {
    return res.status(400).json({ error: "owner_email is required" });
  }

  const projects = await db.select().from(projectTable).where(eq(projectTable.owner_email, owner_email));
  return res.status(200).json(projects);

};

// Get a single project by ID
export const singleProjects = async (req: Request, res: Response) => {

  const {id} = req.params;
  const parsedId = Number(Array.isArray(id) ? id[0] : id);

  if(!id || Number.isNaN(parsedId)){
    return res.status(400).json({ error: "Valid numeric ID is required" });
  }

  const projects = await db.select().from(projectTable).where(eq(projectTable.id, parsedId));
  return res.status(200).json(projects);

};

