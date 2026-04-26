import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">TECHNICAL CAPABILITIES</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-cyan-500/50 transition">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="bg-cyan-500/20 text-cyan-400 text-sm px-3 py-1 rounded border border-cyan-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30 text-white p-8 rounded-lg text-center hover:border-cyan-400/50 transition">
            <p className="text-4xl font-bold text-cyan-400 mb-2">3+</p>
            <p className="text-lg text-gray-300">Years of Experience</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30 text-white p-8 rounded-lg text-center hover:border-cyan-400/50 transition">
            <p className="text-4xl font-bold text-cyan-400 mb-2">10+</p>
            <p className="text-lg text-gray-300">Successful Clients</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30 text-white p-8 rounded-lg text-center hover:border-cyan-400/50 transition">
            <p className="text-4xl font-bold text-cyan-400 mb-2">25+</p>
            <p className="text-lg text-gray-300">Tech Skills</p>
          </div>
        </div>
      </div>
    </section>
  );
}
