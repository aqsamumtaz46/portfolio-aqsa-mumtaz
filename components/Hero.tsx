import InteractiveBackground from "./InteractiveBackground";

export default function Hero() {
  return (
    <section className="bg-black text-white py-32 relative overflow-hidden">
      {/* Interactive Background with Mouse Tracking */}
      <InteractiveBackground />

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              SEO EXECUTIVE &<br /> CONTENT WRITER
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Crafting high-impact SEO strategies and compelling content that drives measurable results. Over 3 years of proven expertise helping businesses achieve top Google rankings and sustained organic growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition inline-block text-center"
              >
                VIEW PROJECTS
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition inline-block text-center"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg hover:border-cyan-500/50 transition">
              <p className="text-4xl font-bold text-cyan-400 mb-2">3+</p>
              <p className="text-gray-400 font-medium">YEARS EXPERIENCE</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg hover:border-cyan-500/50 transition">
              <p className="text-4xl font-bold text-cyan-400 mb-2">5+</p>
              <p className="text-gray-400 font-medium">CLIENTS SERVED</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg hover:border-cyan-500/50 transition">
              <p className="text-4xl font-bold text-cyan-400 mb-2">10+</p>
              <p className="text-gray-400 font-medium">PROJECTS</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg hover:border-cyan-500/50 transition">
              <p className="text-4xl font-bold text-cyan-400 mb-2">92%</p>
              <p className="text-gray-400 font-medium">SATISFACTION</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
