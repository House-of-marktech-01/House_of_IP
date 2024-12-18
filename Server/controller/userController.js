import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // Import as a default export
import User from "../models/userModels.js";
import nodemailer from "nodemailer";
import multer from "multer";

const JWT_SECRET = process.env.JWTSECRET;

// Signup Handler
export const signup = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ message: "Username, email and password are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWTSECRET,
      { expiresIn: "1h" }
    );

    // Set the JWT token as a cookie
    res.cookie("jwtToken", token, {
      httpOnly: false, // Ensures the cookie is not accessible via JavaScript
      secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
      sameSite: "None", // Allows the cookie to be sent cross-site (important for third-party cookies)
      maxAge: 3600000, // 1 hour in milliseconds
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in", error });
  }
};

export const sendMail = async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your email
        pass: process.env.EMAIL_PASSWORD, // App password (use App Password for Gmail)
      },
    });
    const mailOptions = {
      from: `${fullName} <${email}>`, // Must match the authenticated email
      to: process.env.EMAIL, // The client's email (your email)
      subject: `Contact Form Submission: ${subject}`,
      text: `You have a new contact form submission:\n\nName: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email, // Allows the recipient to reply directly to the user's email
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to send email. Please try again later." });
  }
};

export const sendDoc = async (req, res) => {
  try {
    const { url } = req.body; // The uploaded URL received from the frontend

    if (!url) {
      return res.status(400).json({ message: "URL is required!" });
    }

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your email
        pass: process.env.EMAIL_PASSWORD, // App password (use App Password for Gmail)
      },
    });

    // Email details
    const mailOptions = {
      from: `Document Uploader <${process.env.EMAIL}>`, // Must match the authenticated email
      to: process.env.EMAIL, // The owner's email address
      subject: "New Document Uploaded",
      html: `
        <p>A new document has been uploaded.</p>
        <p><strong>URL:</strong> <a href="${url}" target="_blank">${url}</a></p>
        <p>You can view or download the document using the above link.</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ message: "URL sent to the owner's email successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to send email. Please try again later." });
  }
};
