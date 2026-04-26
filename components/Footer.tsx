import { socialLinks } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">AQSA MUMTAZ</h3>
            <p className="text-gray-400">
              SEO Executive & Content Writer specializing in creating high-impact SEO strategies and compelling content.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">QUICK LINKS</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition">
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition">
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition">
                  SKILLS
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">CONNECT</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={`mailto:${socialLinks.email}`} className="hover:text-cyan-400 transition">
                  {socialLinks.email}
                </a>
              </li>
              <li>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-900 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} AQSA MUMTAZ • BUILT WITH NEXT.JS, REACT & TAILWIND CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
