// Install the required packages before running this code:
// npm install express mongoose bcrypt jsonwebtoken body-parser
import dotenv from 'dotenv';
dotenv.config();
import express, { application } from 'express';
import connectDB from './config/db.js';
import userRoutes from './routers/userRoutes.js';
import bodyParser from 'body-parser'

const app = express();
const PORT = 5000 || process.env.PORT

app.use(bodyParser.json());
// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes);
app.get("/",(req,res)=>{
    res.send("running...")
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
