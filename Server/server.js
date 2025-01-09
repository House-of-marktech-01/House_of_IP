import dotenv from "dotenv";
dotenv.config();
import express, { application } from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routers/userRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000 || process.env.PORT;


app.use(cors());

// Your routes here
app.get("/api", (req, res) => {
  res.send("update");
});

app.get('/fetchtrademark', async (req, res) => {
  const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLScU21_EuxVajsBpYFjK02wvYpewwwLo1-2sMsi6CQkGXTvtwQ/viewform'; // Replace with your Google Form URL
  
  try {
    const response = await axios.get(googleFormURL);
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching Google Form:', error.message);
    res.status(500).send('Failed to fetch Google Form');
  }
});

app.use(bodyParser.json());
// Connect to MongoDB
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.get("/home", (req, res) => {
  res.send("running...");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
