export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-5xl font-bold mb-8">About Me</h2>

      <div className="max-w-3xl bg-white/5 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white/10">
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm an Indian NRI student studying in ICSK (NIOS). Passionate about
          creating advanced tech such as iOS apps, Python tools, and interactive
          systems. I aim to pursue CSE with AI & ML at SRM University.
        </p>

        <p className="mt-6 text-lg text-gray-400">
          Skills: Swift • React • Python • Firebase • Tailwind • Unity • Vite
        </p>
      </div>
    </div>
  );
}
  