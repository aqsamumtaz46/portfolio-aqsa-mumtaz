"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "ABOUT" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#skills", label: "SKILLS" },
    { href: "#contact", label: "CONTACT" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg text-white hover:text-cyan-400 transition">
          AQSA MUMTAZ
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-gray-400 hover:text-cyan-400 transition text-sm font-medium">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-400 transition ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-400 transition ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-400 transition ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black/95 border-b border-gray-900 md:hidden">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="text-gray-400 hover:text-cyan-400 text-sm" onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
