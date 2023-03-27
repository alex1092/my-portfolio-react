import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, type, onClick }) => {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        className="mob:text-sm md:text-base p-2 mob:p-1 md:p-2 m-2 mob:m-1 md:m-2 rounded-lg text-white bg-sky-400 hover:bg-sky-600 first:ml-0"
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className="sm:text-sm md:text-base p-2 sm:p-1 md:p-2 m-2 sm:m-1 md:m-2 rounded-lg first:ml-0"
    >
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 1.1 }}>
        {children}
      </motion.div>
    </button>
  );
};

export default Button;
