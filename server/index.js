import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/database/db.js";
import linkRoutes from "./src/routes/link.routes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", linkRoutes);

await connectDB();
try {
  app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
  });
} catch (error) {
  console.error("Failed to start the server:", err);
  process.exit(1);
}
