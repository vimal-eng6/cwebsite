"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface Interactive3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotate?: number; // Maximum rotation in degrees
}

export default function Interactive3DCard({
  children,
  className = "",
  maxRotate = 10,
}: Interactive3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Set up motion values for x and y rotation
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Set up smooth spring configs
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Width and height of the card
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to the card's center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Map coordinates to target rotation degree
    // Moving mouse left (negative mouseX) -> rotate card right (positive rotateY)
    const targetRotateY = (mouseX / (width / 2)) * maxRotate;
    // Moving mouse up (negative mouseY) -> rotate card down/up (negative/positive rotateX)
    const targetRotateX = -(mouseY / (height / 2)) * maxRotate;

    rotateX.set(targetRotateX);
    rotateY.set(targetRotateY);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`perspective-container cursor-pointer select-none ${className}`}
    >
      <motion.div
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: hovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="w-full h-full preserve-3d"
      >
        {children}
      </motion.div>
    </div>
  );
}
