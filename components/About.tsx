import { socialLinks } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">ABOUT ME</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a <span className="font-semibold text-cyan-400">SEO Executive & Content Writer</span> with 3+ years of proven expertise in scaling organic growth and building high-authority digital presence. I specialize in turning data-driven insights into measurable business outcomes.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I deliver results through <span className="font-semibold text-cyan-400">comprehensive SEO strategies, E-E-A-T optimization, and content marketing</span>. My track record includes scaling one client from 41.1 → 8.3 ranking position, growing another's clicks 16 → 2,210/month (+13,706%), and building 30+ high-quality backlinks.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I combine technical SEO expertise with strategic content creation to drive sustainable organic growth. Every project I execute is backed by data analysis, competitor research, and a commitment to delivering measurable ROI for my clients.
            </p>

            <div className="flex gap-4">
              <a
                href={`mailto:${socialLinks.email}`}
                className="px-6 py-3 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition font-bold"
              >
                Get in Touch
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition font-bold"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-white">QUICK FACTS</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-white">Experience</p>
                  <p className="text-gray-400">3+ years of proven SEO & Content expertise</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-white">Track Record</p>
                  <p className="text-gray-400">411,000+ impressions | 13,706% CTR growth</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-white">Clients Served</p>
                  <p className="text-gray-400">6+ high-impact projects across industries</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-white">Content Created</p>
                  <p className="text-gray-400">80+ SEO-optimized pages & blog articles</p>
                </div>
              </li>
                  <p className="font-semibold text-white">Education</p>
                  <p className="text-gray-400">B.S. Physics, University of Lahore</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-white">Specialization</p>
                  <p className="text-gray-400">Full-spectrum SEO & Strategic Content</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
