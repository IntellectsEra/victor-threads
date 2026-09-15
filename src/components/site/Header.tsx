import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/victor-threads-logo.jpg.asset.json";

const nav = [
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/sustainability", label: "Sustainability" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/92 border-b border-border backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-vt flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Victor Threads logo"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover ring-1 ring-black/10 shadow-md"
          />
          <span className={`font-display text-xl font-semibold tracking-tight transition-colors duration-500 ${scrolled ? "text-foreground" : "text-white"}`}>
            Victor <span className="text-primary">Threads</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`relative text-sm font-medium transition-colors duration-500 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${scrolled ? "text-foreground" : "text-white"}`}
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04] sm:inline-flex"
          >
            Contact Us
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden transition-colors duration-500 ${scrolled ? "text-foreground" : "text-white"}`}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-vt flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}