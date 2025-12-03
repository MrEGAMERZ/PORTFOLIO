import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl font-extrabold leading-tight"
      >
        Hi, I'm <span className="text-blue-400">Your Name</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="text-xl text-gray-300 max-w-2xl mt-6"
      >
        NRI | Future CSE AI/ML Student | iOS App Developer | Python & React
        Enthusiast | Building smart systems and beautiful apps.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-10 px-8 py-4 bg-white text-black rounded-xl text-lg font-bold hover:scale-110 transition"
      >
        View My Work
      </motion.a>
    </div>
  );
}
