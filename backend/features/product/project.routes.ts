
import type { Router } from "express";
import express from "express";
import {createProject, getAllProjects, singleProjects } from "./project.controller.ts";

const ProjectRouter:Router = express.Router()

ProjectRouter.post('/', createProject);
ProjectRouter.get('/', getAllProjects);
ProjectRouter.get('/:id', singleProjects);

export default ProjectRouter;
