import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroAsset from "../assets/hero-factory.png.asset.json";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { products, processSteps } from "../lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Victor Threads — Sewing Thread Manufacturer, Tiruppur" },
      {
        name: "description",
        content:
          "Victor Threads manufactures polyester, cotton, spun, corespun, nylon and industrial sewing threads in Tiruppur, India — dyed to shade with lot-to-lot consistency.",
      },
      { property: "og:title", content: "Victor Threads — Sewing Thread Manufacturer, Tiruppur" },
      {
        property: "og:description",
        content:
          "Polyester, cotton, spun, corespun, nylon and industrial sewing threads from Tiruppur, India — where every stitch begins with trust.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center">
        <img
          src={heroAsset.url}
          alt="Aerial view of the Victor Threads sewing thread manufacturing facility at sunrise"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-24 lg:px-10">
          <p className="text-xs font-semibold tracking-[0.35em] text-white/85">
            SEWING THREAD MANUFACTURER · TIRUPPUR, INDIA
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Where Every Stitch
            <br />
            Begins With <span className="text-primary">Trust</span>
          </h1>
          <div className="mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Our Threads <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process marquee */}
      <section className="overflow-hidden border-y bg-card py-5" aria-label="Our process">
        <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
          {[...processSteps, ...processSteps].map((step, i) => (
            <span key={i} className="flex items-center gap-8 text-sm font-semibold tracking-wide text-muted-foreground">
              {step}
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            </span>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <p className="max-w-4xl text-2xl font-medium leading-snug text-foreground sm:text-3xl lg:text-4xl">
          Driven by decades of thread-making craft, precision dyeing and an
          obsession with lot-to-lot consistency, Victor Threads supplies
          polyester, cotton, spun, corespun, nylon and industrial sewing threads
          to garment and textile manufacturers who{" "}
          <span className="text-primary">cannot afford a broken seam.</span>
        </p>
      </section>

      {/* Thread range */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Thread Range
          </h2>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.name}
              to="/products"
              className="group overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Operational excellence + stats */}
      <section className="border-y bg-card">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Operational excellence, stitched into every cone
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Controlled twisting, computerised colour matching and full in-house
              testing mean the thread you approve is the thread you receive —
              order after order.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                About Victor Threads
              </Link>
              <Link
                to="/sustainability"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Sustainability
              </Link>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { value: "25+ Years", label: "Of thread-making experience in Tiruppur" },
              { value: "3,500+", label: "Shades matched from our in-house lab" },
              { value: "120 T", label: "Monthly production capacity" },
              { value: "14", label: "Countries served through garment exporters" },
              { value: "99.4%", label: "On-time despatch across the last 12 months" },
            ].map((stat) => (
              <div key={stat.value}>
                <dt className="font-[Sora] text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Trusted on the sewing floor
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Shade repeats are spot on. We stopped keeping buffer stock because their despatch is that predictable.",
            "Their core spun holds up on our high-speed lines with far fewer thread breaks than what we used before.",
          ].map((quote) => (
            <figure key={quote} className="rounded-xl border bg-card p-8">
              <blockquote className="text-lg leading-relaxed text-foreground">
                “{quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-card">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contact Victor Threads for samples, shade cards and bulk enquiries
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Our Products
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
