import React from "react";
import { motion } from "framer-motion";

// Apple‑style Portfolio Template
// Replace placeholders with your actual info

export default function PortfolioAppleStyle() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-semibold"
        >
          {/* YOUR NAME */}
          YOUR NAME HERE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-gray-300 mt-4 max-w-xl"
        >
          {/* SHORT BIO */}
          Short bio about yourself goes here. Example: "I am a computer science student from ICSK - Kuwait, passionate about app development, tech consulting, and building innovative digital experiences."
        </motion.p>
      </section>

      {/* SLIDE SECTION 1 */}
      <section className="h-screen flex justify-center items-center px-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-center"
        >
          <h2 className="text-4xl font-semibold mb-4">Education</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {/* EDUCATION DETAILS */}
            <strong>School:</strong> Indian Community School Kuwait (NIOS Branch) <br />
            <strong>Grade:</strong> 12 <br />
            <strong>Stream:</strong> Computer Science (AI & ML Focus) <br />
            <strong>Goal:</strong> Admission into SRM University - CSE with AI & ML
          </p>
        </motion.div>
      </section>

      {/* SLIDE SECTION 2 */}
      <section className="h-screen flex justify-center items-center px-10 bg-neutral-900 rounded-t-[50px]">
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-center"
        >
          <h2 className="text-4xl font-semibold mb-4">Skills</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {/* SKILLS SECTION */}
            • Python (Expert) <br />
            • Swift & iOS Development <br />
            • Unity Game Development <br />
            • C, C++, Java basics <br />
            • PC Building & Tech Consulting <br />
            • Web Development Basics
          </p>
        </motion.div>
      </section>

      {/* SLIDE SECTION 3 */}
      <section className="h-screen flex justify-center items-center px-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-center"
        >
          <h2 className="text-4xl font-semibold mb-4">Projects</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {/* PROJECT LIST */}
            • Shooting Strike - FPS PC Game (Unity) <br />
            • Facial Attendance System using Python (Science Exhibition Project) <br />
            • Student Cloud - iOS App (Under Development) <br />
            • Zodiac Sign / Horoscope App (Python) <br />
            • Custom UI Projects (Various)
          </p>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="h-screen flex flex-col justify-center items-center px-6 bg-neutral-950 rounded-t-[40px]">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold mb-4"
        >
          Contact
        </motion.h2>
        <p className="text-gray-300 text-lg text-center max-w-xl">
          {/* CONTACT INFO */}
          Email: your-email@example.com <br />
          Instagram: @your_instagram <br />
          GitHub: github.com/yourname <br />
          LinkedIn: linkedin.com/in/yourname
        </p>
      </section>
    </div>
  );
}
