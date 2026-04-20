import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">FEATURED PROJECTS</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-cyan-500/50 transition">
              <h3 className="text-xl font-bold mb-2 text-white">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-400 mb-2">KEY ACHIEVEMENTS:</p>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-gray-300 flex gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.tools && project.tools.length > 0 && (
                <div className="pt-4 border-t border-gray-800">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded border border-cyan-500/30">
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
