import React from "react";
import { motion, AnimatePresence } from "framer-motion";
type ptPropTypes = {
  children: React.ReactNode;
  classes?: string;
};

export const PageTransition = ({ children, classes }: ptPropTypes) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className={`${classes ?? ""}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
