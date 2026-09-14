import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — Victor Threads" },
      {
        name: "description",
        content:
          "Cleaner thread, cleaner Tiruppur — closed-loop water systems, restricted-substance chemistry and recycled fibre programmes at Victor Threads.",
      },
      { property: "og:title", content: "Sustainability — Victor Threads" },
      {
        property: "og:description",
        content:
          "Closed-loop water systems, OEKO-TEX compliant dye chemistry and recycled fibre programmes — cleaner thread, cleaner Tiruppur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SustainabilityPage,
});

const stats = [
  { value: "92%", label: "Water recovered through zero liquid discharge dyeing" },
  { value: "100%", label: "OEKO-TEX Standard 100 compliant dye chemistry" },
  { value: "40%", label: "Range available in recycled (rPET) polyester" },
  { value: "0", label: "Effluent discharged into the Noyyal river basin" },
];

function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-10">
        <p className="text-xs font-semibold tracking-[0.35em] text-muted-foreground">
          SUSTAINABILITY
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Cleaner thread, <span className="text-primary">cleaner Tiruppur</span>
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground">
          Tiruppur taught the industry what responsible dyeing has to look like.
          We run closed-loop water systems, restricted-substance chemistry and
          recycled fibre programmes so our customers can meet their own
          compliance targets without compromising on shade or strength.
        </p>

        <dl className="mt-20 grid gap-10 border-t pt-16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-[Sora] text-5xl font-bold text-primary sm:text-6xl">
                {stat.value}
              </dt>
              <dd className="mt-4 text-base leading-relaxed text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </main>

      <SiteFooter />
    </div>
  );
}
