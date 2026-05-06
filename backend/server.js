const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend + MongoDB Connected 🚀");
});

app.post("/add-user", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.json({
      message: "User Saved Successfully ✅",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error saving user",
    });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});