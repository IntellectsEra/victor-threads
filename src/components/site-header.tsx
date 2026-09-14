import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import emblemAsset from "../assets/victor-emblem.png.asset.json";
import wordmarkAsset from "../assets/victor-wordmark.png.asset.json";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/sustainability", label: "Sustainability" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/30 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={emblemAsset.url}
            alt="Victor Threads horse emblem"
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
          />
          <img
            src={wordmarkAsset.url}
            alt="Victor Threads"
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-bold text-white transition-colors hover:text-primary"
              activeProps={{ className: "text-sm font-bold text-primary" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-md border border-white px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black md:inline-flex"
          >
            Contact Us
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="bg-white/30 backdrop-blur-md px-6 py-4 md:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-base font-bold text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="inline-flex rounded-md border border-white px-6 py-2.5 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
