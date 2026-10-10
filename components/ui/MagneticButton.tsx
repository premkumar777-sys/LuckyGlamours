"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface MagneticButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  cursorText?: string;
}

export function MagneticButton({
  children,
  variant = "primary",
  className = "",
  cursorText,
  onClick,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    };
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.22, y: middleY * 0.22 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      "bg-noir text-canvas-light hover:bg-noir-light border border-champagne/40 shadow-xl",
    secondary:
      "bg-champagne/15 text-noir hover:bg-champagne/30 border border-champagne/50 backdrop-blur-sm",
    outline:
      "border border-noir/30 text-noir hover:border-noir hover:bg-noir hover:text-canvas-light",
    ghost:
      "text-noir hover:text-champagne-dark border border-transparent",
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      whileTap={{ scale: 0.97 }}
      data-cursor={cursorText}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-sans text-xs font-semibold tracking-ultra-wide uppercase transition-colors duration-300 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>
      <span className="absolute inset-0 z-0 scale-x-0 rounded-full bg-champagne/20 transition-transform duration-500 ease-out group-hover:scale-x-100" />
    </motion.button>
  );
}
