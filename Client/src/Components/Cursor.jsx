import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 w-5 h-5 bg-slate-800 rounded-full pointer-events-none z-50"
      style={{ x: cursorPosition.x, y: cursorPosition.y }}
      transition={{
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

export default CustomCursor;
