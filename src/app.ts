import express from "express";
import type { Request, Response } from "express";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Basic router",
  });
});

export default app;
