import React from "react";
import { motion } from "framer-motion";

export default function MoveAnimation({
  image,
  imageVariants,
  imgStyle,
  side,
  reverse,
}) {
  return (
    <motion.img
      key={image}
      src={image}
      alt={`Image`}
      variants={imageVariants}
      initial={{
        opacity: 0,
        y: side ? "0%" : reverse ? "100%" : "-100%",
        x: side ? (reverse ? "100%" : "-100%") : "0%",
      }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{
        opacity: 0,
        y: side ? "0%" : reverse ? "100%" : "-100%",
        x: side ? (reverse ? "100%" : "-100%") : "0%",
      }}
      transition={{ duration: 1 }}
      style={{
        position: "fixed",
        // visibility: showImage ? "hidden" : "visible",
        ...imgStyle,
      }}
    />
  );
}
