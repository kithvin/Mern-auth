import "dotenv/config";
import express from "express";
import connectDB from "./configs/db.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); 

// Connect to MongoDB database
await connectDB();

app.get("/", (req, res) => {
  res.send("API is Working 🚀");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
