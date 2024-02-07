import React from 'react';
import { motion } from 'framer-motion';

const Round = () => {
  return (
    <div className="fixed right-0 p-10  -1/4 h-auto backdrop-blur-3xl rounded-full bg-opacity-90 bg-black flex flex-col justify-center items-center z-50">
      <motion.div
        className="w-20 h-20 rounded-full bg-blue-500"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          loop: Infinity,
          ease: "linear",
        }}
      ></motion.div>
    </div>
  );
};

export default Round;
