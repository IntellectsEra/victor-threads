import { Link } from "@tanstack/react-router";
import logo from "@/assets/victor-threads-logo.jpg.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-vt grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Victor Threads logo"
              width={56}
              height={56}
              loading="lazy"
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="font-display text-lg font-semibold">
              Victor <span className="text-primary">Threads</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Sewing thread manufacturer in Tiruppur, India — polyester, cotton, spun polyester,
            core spun, nylon and industrial sewing threads for garment and textile manufacturers.
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/sustainability" className="hover:text-primary">Sustainability</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Reach us</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="tel:+919876543210" className="font-semibold text-primary">
                +91 98765 43210
              </a>
            </li>
            <li>
              <a href="mailto:sales@victorthreads.com" className="font-semibold text-sky">
                sales@victorthreads.com
              </a>
            </li>
            <li className="text-muted-foreground">Tiruppur, Tamil Nadu, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-vt flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Victor Threads. All rights reserved.</p>
          <p>Where every stitch begins with trust.</p>
        </div>
      </div>
    </footer>
  );
}