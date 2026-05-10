import express from "express";

const router = express.Router();

router.post("/pay", (req, res) => {
  res.send("Payment route working");
});

export default router;