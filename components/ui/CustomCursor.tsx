"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "text">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch / mobile devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest("[data-cursor]") as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setCursorVariant("text");
      } else if (target?.closest("button, a, input, select, textarea, [role='button']")) {
        setCursorText("");
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 select-none"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.div
        animate={{
          scale: cursorVariant === "text" ? 1 : cursorVariant === "hover" ? 1.6 : 1,
          width: cursorVariant === "text" ? 84 : cursorVariant === "hover" ? 44 : 14,
          height: cursorVariant === "text" ? 84 : cursorVariant === "hover" ? 44 : 14,
          backgroundColor:
            cursorVariant === "text"
              ? "rgba(14, 13, 12, 0.88)"
              : cursorVariant === "hover"
              ? "rgba(197, 168, 128, 0.25)"
              : "rgba(197, 168, 128, 0.85)",
          borderColor:
            cursorVariant === "text"
              ? "rgba(197, 168, 128, 0.6)"
              : cursorVariant === "hover"
              ? "rgba(197, 168, 128, 0.8)"
              : "transparent",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
        className="flex items-center justify-center rounded-full border backdrop-blur-sm shadow-xl"
      >
        {cursorVariant === "text" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-sans text-[10px] font-semibold tracking-widest text-[#FAF8F5] uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
