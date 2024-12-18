import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        await connect(process.env.MONGOURI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Could not connect to MongoDB", err);
        process.exit(1);
    }
};

export default connectDB;
