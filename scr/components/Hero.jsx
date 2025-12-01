import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold"
      >
        YOUR NAME HERE
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-xl text-gray-300 max-w-xl mt-4"
      >
        A brief intro about who you are, what you study, and what you build.
      </motion.p>
    </div>
  );
}
