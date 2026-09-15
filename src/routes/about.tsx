import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { WordReveal } from "@/components/site/WordReveal";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us | Victor Threads — Sewing Thread Manufacturer, Tiruppur" },
      {
        name: "description",
        content:
          "Victor Threads is a Tiruppur-based sewing thread manufacturer supplying polyester, cotton, core spun and industrial threads to garment and textile makers worldwide.",
      },
      { property: "og:title", content: "About Victor Threads" },
      {
        property: "og:description",
        content: "Decades of thread-making craft, engineered consistency and dependable supply from Tiruppur, India.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const milestones = [
  { year: "1998", text: "Founded in Tiruppur as a small twisting and winding unit." },
  { year: "2007", text: "Commissioned in-house dyeing with automated colour matching." },
  { year: "2015", text: "Expanded into core spun and high-tenacity industrial threads." },
  { year: "2024", text: "Serving garment exporters across India, Bangladesh and the Gulf." },
];

function About() {
  return (
    <main className="pt-32">
      <section className="container-vt py-16">
        <Reveal>
          <p className="eyebrow">About Us</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] font-semibold md:text-6xl">
            A thread house built on <span className="text-primary">consistency</span>
          </h1>
        </Reveal>
        <WordReveal
          className="mt-10 max-w-3xl text-xl leading-relaxed md:text-2xl"
          text="Victor Threads has spent decades perfecting one thing — the thread that holds a garment together. From raw yarn selection to dyeing, finishing and winding, every stage is controlled in-house so the cone that reaches your sewing floor performs exactly like the last one did."
        />
      </section>

      <section className="container-vt border-t border-border py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 90}>
              <div className="border-t border-border pt-6">
                <p className="font-display text-4xl font-semibold text-sky">{m.year}</p>
                <p className="mt-3 text-muted-foreground">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}