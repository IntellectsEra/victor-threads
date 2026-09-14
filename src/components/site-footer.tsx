import { Link } from "@tanstack/react-router";

import emblemAsset from "../assets/victor-emblem.png.asset.json";
import wordmarkAsset from "../assets/victor-wordmark.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={emblemAsset.url}
              alt="Victor Threads horse emblem"
              width={48}
              height={48}
              loading="lazy"
              className="h-12 w-12 object-contain"
            />
            <img
              src={wordmarkAsset.url}
              alt="Victor Threads"
              loading="lazy"
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Sewing thread manufacturer in Tiruppur, India — polyester, cotton,
            spun polyester, core spun, nylon and industrial sewing threads for
            garment and textile manufacturers.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.25em] text-foreground">EXPLORE</h2>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="transition-colors hover:text-primary">About</Link>
            </li>
            <li>
              <Link to="/products" className="transition-colors hover:text-primary">Products</Link>
            </li>
            <li>
              <Link to="/sustainability" className="transition-colors hover:text-primary">Sustainability</Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-primary">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.25em] text-foreground">REACH US</h2>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            <li>
              <a href="tel:+919876543210" className="font-semibold text-primary transition-colors hover:text-primary/80">
                +91 98765 43210
              </a>
            </li>
            <li>
              <a href="mailto:sales@victorthreads.com" className="font-semibold text-skyblue transition-colors hover:opacity-80">
                sales@victorthreads.com
              </a>
            </li>
            <li className="text-muted-foreground">Tiruppur, Tamil Nadu, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Victor Threads. All rights reserved.</p>
          <p>Sewing thread manufacturer · Tiruppur, India</p>
        </div>
      </div>
    </footer>
  );
}
