import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { WordReveal } from "@/components/site/WordReveal";

export const Route = createFileRoute("/sustainability")({
  component: Sustainability,
  head: () => ({
    meta: [
      { title: "Sustainability | Victor Threads, Tiruppur" },
      {
        name: "description",
        content:
          "Recycled polyester threads, zero liquid discharge dyeing, OEKO-TEX compliant chemistry and responsible water use at Victor Threads, Tiruppur.",
      },
      { property: "og:title", content: "Sustainability at Victor Threads" },
      {
        property: "og:description",
        content: "Responsible thread manufacturing: recycled fibre, ZLD dyeing and safer chemistry.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/sustainability" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sustainability" }],
  }),
});

const pillars = [
  { stat: "92%", label: "Water recovered through zero liquid discharge dyeing" },
  { stat: "100%", label: "OEKO-TEX Standard 100 compliant dye chemistry" },
  { stat: "40%", label: "Range available in recycled (rPET) polyester" },
  { stat: "0", label: "Effluent discharged into the Noyyal river basin" },
];

function Sustainability() {
  return (
    <main className="pt-32">
      <section className="container-vt py-16">
        <Reveal>
          <p className="eyebrow">Sustainability</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] font-semibold md:text-6xl">
            Cleaner thread, <span className="text-primary">cleaner Tiruppur</span>
          </h1>
        </Reveal>
        <WordReveal
          className="mt-10 max-w-3xl text-xl leading-relaxed md:text-2xl"
          text="Tiruppur taught the industry what responsible dyeing has to look like. We run closed-loop water systems, restricted-substance chemistry and recycled fibre programmes so our customers can meet their own compliance targets without compromising on shade or strength."
        />
      </section>

      <section className="container-vt grid gap-10 border-t border-border py-16 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal key={p.label} delay={i * 90}>
            <div className="border-t border-border pt-6">
              <p className="font-display text-5xl font-semibold text-primary">{p.stat}</p>
              <p className="mt-4 text-sm text-muted-foreground">{p.label}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </main>
  );
}