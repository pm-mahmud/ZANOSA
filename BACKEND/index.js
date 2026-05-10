import "dotenv/config";

import app from "./app.js";
import connectDB from "./config/db.js";

import paymentRoutes from "./routes/paymentRoutes.js";

connectDB();

const PORT = process.env.PORT || 4000;

app.use("/api/payment", paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});