import express from "express";
const app = express();

import cors from "cors";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

app.get("/", (req, res) => {
  res.send("Zanosa api is running successfully");
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/payment", paymentRoutes);

export default app;