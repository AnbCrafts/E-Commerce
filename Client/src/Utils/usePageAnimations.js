import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const usePageAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    });
  }, [controls]);

  return controls;
};
