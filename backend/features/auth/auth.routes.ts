import { requireAuth } from "@clerk/express";

import { assignRoleOnSignUp } from "./auth.controller.ts";
import type { Router } from "express";
import express from "express";

const router:Router = express.Router()

router.post('/assign-role', requireAuth(), assignRoleOnSignUp);

export default router;
