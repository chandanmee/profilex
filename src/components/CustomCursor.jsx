// CustomCursor.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Liquid Filter */}
      <svg className="absolute w-0 h-0">
        <filter id="liquid">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
        </filter>
      </svg>

      {/* Cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{ x: pos.x - 20, y: pos.y - 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div
          className="w-10 h-10 rounded-full bg-cyan-400/70 shadow-xl"
          style={{ filter: "url(#liquid)" }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
