import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Changed from 'email' to 'String'
  password: { type: String, required: true },
});

export default model("User", userSchema);
