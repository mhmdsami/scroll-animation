import * as React from "react";
import { motion } from "framer-motion";

interface ScrollProps {
  children: React.ReactNode;
  reverse?: boolean;
}

export default function Scroll({ children, reverse = false }: ScrollProps) {
  return (
    <motion.div
      animate={{ y: reverse ? ["-25%", "0%"] : ["0%", "-25%"] }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "linear",
        repeatType: "mirror",
      }}
      className="flex flex-col gap-5"
    >
      {children}
    </motion.div>
  );
}
