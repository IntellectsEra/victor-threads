import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { WordReveal } from "@/components/site/WordReveal";
import heroAsset from "@/assets/hero-factory.png.asset.json";
import sewingAsset from "@/assets/sewing-threads.png.asset.json";
import cottonAsset from "@/assets/cotton-sewing-thread.png.asset.json";
import spunAsset from "@/assets/spun-sewing-thread.png.asset.json";
import industrialAsset from "@/assets/industrial-thread.png.asset.json";

const hero = heroAsset.url;
const sewing = sewingAsset.url;
const cotton = cottonAsset.url;
const spun = spunAsset.url;
const industrial = industrialAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Victor Threads | Sewing Thread Manufacturer in Tiruppur, India" },
      {
        name: "description",
        content:
          "Victor Threads is a trusted sewing thread manufacturer in Tiruppur, India, offering polyester, cotton, spun polyester, core spun, nylon and industrial sewing threads for garment and textile manufacturers.",
      },
      { property: "og:title", content: "Victor Threads | Where Every Stitch Begins With Trust" },
      {
        property: "og:description",
        content:
          "Polyester, cotton, spun polyester, core spun, nylon and industrial sewing threads manufactured in Tiruppur, India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Victor Threads",
          description:
            "Sewing thread manufacturer in Tiruppur, India offering polyester, cotton, spun polyester, core spun, nylon and industrial sewing threads.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tiruppur",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          telephone: "+91-98765-43210",
        }),
      },
    ],
  }),
});

const capabilities = [
  "Yarn Selection",
  "Twisting",
  "Dyeing",
  "Lubrication",
  "Winding",
  "Colour Matching",
  "Lab Testing",
  "Packing & Export",
];

const products = [
  { name: "Sewing Threads", img: sewing, note: "Full shade range" },
  { name: "Cotton Sewing Thread", img: cotton, note: "Mercerised, soft hand" },
  { name: "Spun Sewing Thread", img: spun, note: "Poly-poly & core spun" },
  { name: "Industrial Thread", img: industrial, note: "High tenacity" },
];

const stats = [
  { value: "25+ Years", label: "Of thread-making experience in Tiruppur", tone: "primary" },
  { value: "3,500+", label: "Shades matched from our in-house lab", tone: "sky" },
  { value: "120 T", label: "Monthly production capacity", tone: "primary" },
  { value: "14", label: "Countries served through garment exporters", tone: "sky" },
  { value: "99.4%", label: "On-time despatch across the last 12 months", tone: "primary" },
];

function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img
          src={hero}
          alt="Aerial view of the Victor Threads sewing thread manufacturing facility at sunrise"
          width={1832}
          height={848}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
        <div className="container-vt relative pb-20">
          <p className="rise text-xs font-medium tracking-[0.22em] text-white/75 uppercase">
            Sewing Thread Manufacturer · Tiruppur, India
          </p>
          <h1 className="rise mt-6 max-w-5xl text-[clamp(2.6rem,7vw,6rem)] leading-[0.98] font-semibold text-white">
            Where Every Stitch
            <br />
            Begins With <span className="text-primary">Trust</span>
          </h1>
          <div
            className="rise mt-10 flex flex-wrap items-center gap-5"
            style={{ animationDelay: "180ms" }}
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
            >
              Explore Our Threads
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capability marquee */}
      <section className="overflow-hidden border-y border-border py-6">
        <div className="flex w-max marquee-track gap-12 pr-12">
          {[...capabilities, ...capabilities].map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="flex items-center gap-12 text-sm font-medium tracking-wide whitespace-nowrap uppercase"
            >
              {c}
              <span className="size-1.5 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </section>

      {/* Reading statement */}
      <section className="container-vt py-28 md:py-40">
        <WordReveal
          className="max-w-5xl text-[clamp(1.5rem,3.4vw,3rem)] leading-[1.25] font-medium"
          text="Driven by decades of thread-making craft, precision dyeing and an obsession with lot-to-lot consistency, Victor Threads supplies polyester, cotton, spun, core spun, nylon and industrial sewing threads to garment and textile manufacturers who cannot afford a broken seam."
        />
      </section>

      {/* Products */}
      <section className="container-vt pb-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-semibold md:text-5xl">Our Thread Range</h2>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            View all products <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <Link to="/products" className="group block">
                <div className="aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={900}
                    height={1100}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
                  </div>
                  <ArrowUpRight className="size-5 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Excellence + stats */}
      <section className="border-t border-border py-28">
        <div className="container-vt grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h2 className="text-3xl leading-tight font-semibold md:text-5xl">
              Operational excellence, stitched into every cone
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Controlled twisting, computerised colour matching and full in-house testing mean the
              thread you approve is the thread you receive — order after order.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
              >
                About Victor Threads
              </Link>
              <Link
                to="/sustainability"
                className="rounded-full border border-foreground px-6 py-3.5 text-sm font-semibold"
              >
                Sustainability
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2">
            {stats.map((s, i) => (
              <Reveal key={s.value} delay={i * 90}>
                <div className="border-t border-border pt-5">
                  <p
                    className={`font-display text-4xl font-semibold ${
                      s.tone === "sky" ? "text-sky" : "text-primary"
                    }`}
                  >
                    {s.value}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-vt border-t border-border py-28">
        <Reveal>
          <h2 className="max-w-3xl text-3xl leading-tight font-semibold md:text-5xl">
            Trusted on the sewing floor
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              quote:
                "Shade repeats are spot on. We stopped keeping buffer stock because their despatch is that predictable.",
              name: "Production Head",
              role: "Knitwear exporter, Tiruppur",
            },
            {
              quote:
                "Their core spun holds up on our high-speed lines with far fewer thread breaks than what we used before.",
              name: "Factory Manager",
              role: "Denim manufacturer, Bengaluru",
            },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <blockquote className="h-full rounded-lg border border-border bg-card p-8">
                <p className="text-xl leading-relaxed">“{t.quote}”</p>
                <footer className="mt-8 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="block text-muted-foreground">{t.role}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-28">
        <div className="container-vt text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-3xl leading-tight font-semibold md:text-5xl">
              Contact Victor Threads for samples, shade cards and bulk enquiries
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
              >
                Contact Us
              </Link>
              <Link
                to="/products"
                className="rounded-full border border-foreground px-7 py-4 text-sm font-semibold"
              >
                Our Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
