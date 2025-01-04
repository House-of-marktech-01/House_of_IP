import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Welcome.css";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const hasSpoken = useRef(false); // Tracks if the message has already been spoken

  useEffect(() => {
    if (!hasSpoken.current) {
      // Trigger Text-to-Speech
      const speak = () => {
        const msg = new SpeechSynthesisUtterance(
          "Welcome to House of IP, where you can protect your creativity and secure your success."
        );
        window.speechSynthesis.speak(msg);
      };
      speak();
      hasSpoken.current = true; // Mark as spoken to prevent repeats
    }

    // Navigate to the home page after 5 seconds
    const timer = setTimeout(() => {
      navigate("/home"); // Replace '/home' with your actual home page route
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigate]);

  return (
    <motion.div
      className="welcome-screen bg-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="welcome-message">
        <h1>Welcome to House of IP</h1>
        <p>Where you can protect your creativity and secure your success</p>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
