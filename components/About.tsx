import { socialLinks } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">ABOUT ME</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a <span className="font-semibold text-cyan-400">SEO Executive and Content Writer</span> with over 3 years of experience in creating high-quality, SEO-optimized content that drives measurable results.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My expertise spans across <span className="font-semibold text-cyan-400">on-page and off-page SEO techniques</span>, keyword research, and technical optimization. I've successfully worked with 5+ clients to boost their digital presence and achieve top Google rankings.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              My SEO strategies have resulted in consistent organic traffic growth and improved search visibility. I'm passionate about creating content that not only ranks well but also engages and converts readers.
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
                  <p className="text-gray-400">3+ years in SEO and Content Writing</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-white">Clients Served</p>
                  <p className="text-gray-400">5+ successful projects across diverse industries</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">→</span>
                <div>
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
