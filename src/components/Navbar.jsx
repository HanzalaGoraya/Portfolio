import React, { useState, useEffect } from "react";

// List of sections
const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 80) current = link.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click (for mobile)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-brand">Hanzala</span>
        <button
          className="navbar-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
        </button>
        <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? "active" : ""}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;