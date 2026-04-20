import { socialLinks } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">GET IN TOUCH</h2>
        <p className="text-lg text-gray-300 mb-12">
          I'd love to hear from you! Whether you have a project in mind or just want to connect, feel free to reach out.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a href={`mailto:${socialLinks.email}`} className="bg-gray-900 border border-gray-800 p-8 rounded-lg hover:border-cyan-500/50 transition">
            <div className="text-4xl mb-3">✉️</div>
            <h3 className="font-bold text-lg mb-2 text-white">Email</h3>
            <p className="text-cyan-400 hover:text-cyan-300 break-all">{socialLinks.email}</p>
          </a>

          {/* Phone */}
          <a href={`tel:${socialLinks.phone.replace(/\s/g, "")}`} className="bg-gray-900 border border-gray-800 p-8 rounded-lg hover:border-cyan-500/50 transition">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="font-bold text-lg mb-2 text-white">Phone</h3>
            <p className="text-cyan-400 hover:text-cyan-300">{socialLinks.phone}</p>
          </a>

          {/* LinkedIn */}
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-gray-900 border border-gray-800 p-8 rounded-lg hover:border-cyan-500/50 transition">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-bold text-lg mb-2 text-white">LinkedIn</h3>
            <p className="text-cyan-400 hover:text-cyan-300">Connect with me</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-white">SEND A MESSAGE</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-left font-semibold text-gray-300 mb-2">
                YOUR NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-left font-semibold text-gray-300 mb-2">
                YOUR EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-left font-semibold text-gray-300 mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition"
            >
              SEND MESSAGE
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Note: This form is for demonstration. Please use email or phone to reach out directly.
          </p>
        </div>
      </div>
    </section>
  );
}
