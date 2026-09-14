import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Victor Threads" },
      {
        name: "description",
        content:
          "A thread house built on consistency — Victor Threads has spent decades perfecting the thread that holds a garment together, from yarn selection to dyeing and winding.",
      },
      { property: "og:title", content: "About Us — Victor Threads" },
      {
        property: "og:description",
        content:
          "A thread house built on consistency — decades of thread-making craft in Tiruppur, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "1998", text: "Founded in Tiruppur as a small twisting and winding unit." },
  { year: "2007", text: "Commissioned in-house dyeing with automated colour matching." },
  { year: "2015", text: "Expanded into core spun and high-tenacity industrial threads." },
  { year: "2024", text: "Serving garment exporters across India, Bangladesh and the Gulf." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-10">
        <p className="text-xs font-semibold tracking-[0.35em] text-muted-foreground">ABOUT US</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          A thread house built on <span className="text-primary">consistency</span>
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground">
          Victor Threads has spent decades perfecting one thing — the thread
          that holds a garment together. From raw yarn selection to dyeing,
          finishing and winding, every stage is controlled in-house so the cone
          that reaches your sewing floor performs exactly like the last one did.
        </p>

        <div className="mt-20 grid gap-x-12 gap-y-14 border-t pt-16 md:grid-cols-2">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="border-t pt-8">
              <p className="font-[Sora] text-4xl font-bold text-skyblue sm:text-5xl">
                {milestone.year}
              </p>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
                {milestone.text}
              </p>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
