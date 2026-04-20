import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">EXPERIENCE</h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 p-8 rounded-lg hover:border-cyan-500/50 transition">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-cyan-400 font-semibold">{exp.company}</p>
                </div>
                <span className="text-sm bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">{exp.duration}</span>
              </div>

              <p className="text-gray-400 mb-4">{exp.location}</p>

              <ul className="space-y-2 mb-4">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-300 flex gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {exp.tools && exp.tools.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-sm font-semibold text-gray-400 mb-2">TOOLS & TECHNOLOGIES:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool, i) => (
                      <span key={i} className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded border border-cyan-500/30">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
