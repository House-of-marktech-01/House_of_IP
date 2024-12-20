// ScrollProgress.js
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      setScrollWidth(latest * 100); // Convert progress (0 to 1) to percentage
    });
  }, [scrollYProgress]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "4px",
        width: `${scrollWidth}%`,
        backgroundColor: "#00eeff", // Customize the color
        zIndex: 1000,
      }}
    />
  );
};

export default ScrollProgress;
