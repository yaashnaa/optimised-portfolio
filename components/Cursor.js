import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../App.css"

const CustomCursor = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      controls.start({ scaleX: e.pageX, scaleY: e.pageY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [controls]);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        backgroundColor: "pink",
        scaleX: controls.scaleX,
        scaleY: controls.scaleY,
        zIndex: 999999,
      }}
    />
  );
};

export default CustomCursor;
