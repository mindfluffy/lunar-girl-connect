
import { motion } from "framer-motion";

const MoonLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-moonIndigo-900/80 backdrop-blur-sm z-50">
      <div className="relative w-16 h-16">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-16 h-16"
        >
          <motion.path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-moonIndigo-200"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              transition: {
                pathLength: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                opacity: { duration: 0.2 }
              }
            }}
          />
        </motion.svg>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.4, 1, 0.4],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="w-2 h-2 bg-moonIndigo-200 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default MoonLoader;
