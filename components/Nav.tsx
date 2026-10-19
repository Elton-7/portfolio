"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";

const links = ["about", "skills", "projects", "experience", "contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo">
          {profile.name}
          <span className="accent">.</span>
        </a>
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map((l) => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
