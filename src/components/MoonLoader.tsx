
import { motion } from "framer-motion";

const MoonLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-moonIndigo-900/50 backdrop-blur-sm z-50">
      <motion.div
        className="w-16 sm:w-32 h-16 sm:h-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <motion.path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default MoonLoader;
