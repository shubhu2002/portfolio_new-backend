import express, { type Request, type Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import MongooseConnect from "./mongoose/index.js";

import projectRouter from "./routes/projectRoute.js";
import skillRouter from "./routes/skillRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the tourice server !!");
});

app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/skills", skillRouter);


app.listen(process.env.PORT || 5000, () => {
  MongooseConnect();
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

export default app;
