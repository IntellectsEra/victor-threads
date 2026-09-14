import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { products } from "../lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Victor Threads" },
      {
        name: "description",
        content:
          "Sewing threads, cotton sewing thread, spun sewing thread and industrial thread — dyed to shade, lubricated for machine speed and wound for snag-free unwinding.",
      },
      { property: "og:title", content: "Products — Victor Threads" },
      {
        property: "og:description",
        content:
          "Sewing threads, cotton sewing thread, spun sewing thread and industrial thread — threads for every seam you run.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-10">
        <p className="text-xs font-semibold tracking-[0.35em] text-muted-foreground">PRODUCTS</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Threads for every <span className="text-primary">seam</span> you run
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Every count is dyed to shade, lubricated for machine speed and wound
          for snag-free unwinding — with lot-to-lot repeatability you can plan
          production around.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-xl border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-bold text-foreground">{product.name}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{product.description}</p>
                <p className="mt-5 text-sm font-semibold text-skyblue">{product.spec}</p>
              </div>
            </article>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
