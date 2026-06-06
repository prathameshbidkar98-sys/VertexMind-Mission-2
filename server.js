require("dotenv").config();
console.log("MONGO_URI =", process.env.MONGO_URI);

const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/userRoutes"));

// Home Route
app.get("/", (req, res) => {
  res.send("Mission 2 CRUD API Running");
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});