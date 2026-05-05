
"use client";
import React, { useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-8 py-4 bg-transparent backdrop-blur-none" style={{background: 'none', boxShadow: 'none', border: 'none'}}>
      {/* Name on the left */}
      <div className="text-2xl font-bold gradient-text select-none tracking-tight">
        &lt;Anshi/&gt;
      </div>
      {/* Desktop Nav links */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="nav-link font-medium text-base text-[#ec4899] transition-transform duration-200 transform hover:scale-110 hover:font-bold focus:scale-110 focus:font-bold outline-none focus:outline-none"
            style={{ textDecoration: 'none', textShadow: '0 2px 12px #00bbc4', WebkitTapHighlightColor: 'transparent' }}
            tabIndex={0}
            onMouseDown={e => e.preventDefault()}
          >
            {link.label}
          </a>
        ))}
      </div>
      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center z-50">
        <button
          aria-label="Open menu"
          className="focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block w-8 h-1 bg-[#ec4899] mb-1 rounded transition-all duration-200" />
          <span className="block w-8 h-1 bg-[#00bbc4] mb-1 rounded transition-all duration-200" />
          <span className="block w-8 h-1 bg-[#ec4899] rounded transition-all duration-200" />
        </button>
      </div>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="fixed top-4 right-4 w-32 max-w-xs h-auto bg-black shadow-2xl flex flex-col items-center py-4 px-2 gap-0 animate-fade-in z-40 border border-[#23272f]/60">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-bold text-base text-[#ec4899] w-full text-center py-1 rounded transition-transform duration-200 hover:scale-110 focus:scale-110 gradient-text"
              style={{ textDecoration: 'none', textShadow: '0 2px 12px #00bbc4', WebkitTapHighlightColor: 'transparent', lineHeight: '1.2' }}
              tabIndex={0}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
      {/* Overlay to close menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
