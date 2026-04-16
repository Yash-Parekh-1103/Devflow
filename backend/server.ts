// server.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { configDotenv } from 'dotenv';

import authRouter from './features/auth/auth.routes.ts';

const app = express();
const PORT = 5000;
configDotenv()
// Middleware
app.use(cors());
app.use(express.json());

// Apply Clerk middleware to all routes
app.get("/",async (req,res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});