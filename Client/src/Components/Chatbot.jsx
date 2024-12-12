import React, { useState,useEffect } from "react";
import axios from "axios";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/2svk9jpjikexauzwatg65zz1qhf3jdzv.js"; // Use your Tidio script URL
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup to prevent duplicate script injection
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component does not render any visible UI
};

export default Chatbot;
