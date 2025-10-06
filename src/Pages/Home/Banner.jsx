import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        />
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ y: -50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 120 }}
            className="text-5xl font-bold mb-4"
          >
            Latest Jobs For You!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="py-6"
          >
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#2563EB" }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
