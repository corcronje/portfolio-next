"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        height: 8,
        backgroundColor: "rgba(99, 102, 241, 0.7    )",
        transformOrigin: "0",
        scaleX: scrollYProgress,
      }}
    />
  );
}

export default ScrollProgress;
