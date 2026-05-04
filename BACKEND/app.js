import express from "express";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());

import authRoutes from "./routes/authRoutes.js";

app.get("/", (req, res) => {
  res.send("Zanosa api is running successfully");
});

app.use("/api", authRoutes);

export default app;
