import React from "react";
import style from "./accordion.module.css";
import { motion } from "framer-motion";

interface AccordionBodyProps {
  children: React.ReactNode;
}

export const AccordionBody = ({ children }: AccordionBodyProps) => {
  return (
    <motion.div
      className={style.accordion_body}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
