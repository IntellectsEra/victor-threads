import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import sewingAsset from "@/assets/sewing-threads.png.asset.json";
import cottonAsset from "@/assets/cotton-sewing-thread.png.asset.json";
import spunAsset from "@/assets/spun-sewing-thread.png.asset.json";
import industrialAsset from "@/assets/industrial-thread.png.asset.json";

const sewing = sewingAsset.url;
const cotton = cottonAsset.url;
const spun = spunAsset.url;
const industrial = industrialAsset.url;

export const Route = createFileRoute("/products")({
  component: Products,
  head: () => ({
    meta: [
      { title: "Sewing Thread Products | Victor Threads Tiruppur" },
      {
        name: "description",
        content:
          "Polyester, cotton, spun polyester, core spun, nylon and industrial sewing threads manufactured in Tiruppur for garment and textile manufacturers.",
      },
      { property: "og:title", content: "Sewing Thread Products | Victor Threads" },
      {
        property: "og:description",
        content: "A full range of sewing threads engineered for strength, colour fastness and machine performance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
});

const products = [
  { name: "Sewing Threads", img: sewing, desc: "High-tenacity filament and textured sewing threads for knits and wovens.", counts: "Tex 21 – Tex 105" },
  { name: "Cotton Sewing Thread", img: cotton, desc: "Soft, breathable mercerised cotton for natural-fibre garments.", counts: "20s/3 – 60s/3" },
  { name: "Spun Sewing Thread", img: spun, desc: "Poly-poly and poly-cotton core spun with a smooth sewability profile.", counts: "Tex 24 – Tex 80" },
  { name: "Industrial Thread", img: industrial, desc: "Bonded nylon and heavy-duty threads for denim, bags and technical textiles.", counts: "Tex 60 – Tex 210" },
];

function Products() {
  return (
    <main className="pt-32">
      <section className="container-vt py-16">
        <Reveal>
          <p className="eyebrow">Products</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] font-semibold md:text-6xl">
            Threads for every <span className="text-primary">seam</span> you run
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Every count is dyed to shade, lubricated for machine speed and wound for snag-free
            unwinding — with lot-to-lot repeatability you can plan production around.
          </p>
        </Reveal>
      </section>

      <section className="container-vt grid gap-8 pb-24 md:grid-cols-2">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <article className="group overflow-hidden rounded-lg border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-semibold">{p.name}</h2>
                <p className="mt-3 text-muted-foreground">{p.desc}</p>
                <p className="mt-5 text-sm font-semibold text-sky">{p.counts}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </main>
  );
}