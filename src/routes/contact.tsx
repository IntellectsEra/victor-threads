import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Victor Threads | Sewing Thread Supplier, Tiruppur" },
      {
        name: "description",
        content:
          "Talk to Victor Threads in Tiruppur for sewing thread samples, shade cards, bulk pricing and export enquiries.",
      },
      { property: "og:title", content: "Contact Victor Threads" },
      {
        property: "og:description",
        content: "Request shade cards, samples and bulk quotes from our Tiruppur team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  return (
    <main className="pt-32">
      <section className="container-vt grid gap-16 py-16 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Contact Us</p>
          <h1 className="mt-5 text-4xl leading-[1.05] font-semibold md:text-6xl">
            Let's talk <span className="text-primary">thread</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Send us your count, shade and volume requirement — we'll come back with a shade card
            and a quote.
          </p>
          <div className="mt-10 space-y-6">
            <div>
              <p className="eyebrow">Phone</p>
              <a href="tel:+919876543210" className="font-display text-3xl font-semibold text-primary">
                +91 98765 43210
              </a>
            </div>
            <div>
              <p className="eyebrow">Email</p>
              <a href="mailto:sales@victorthreads.com" className="font-display text-2xl font-semibold text-sky">
                sales@victorthreads.com
              </a>
            </div>
            <div>
              <p className="eyebrow">Factory</p>
              <p className="mt-2 text-muted-foreground">
                Victor Threads, Mannarai Road,
                <br />
                Tiruppur 641 607, Tamil Nadu, India
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            className="rounded-lg border border-border bg-card p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5">
              <label className="text-sm font-medium">
                Name
                <input
                  required
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm font-medium">
                Company
                <input
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary"
                  placeholder="Company name"
                />
              </label>
              <label className="text-sm font-medium">
                Email
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary"
                  placeholder="you@company.com"
                />
              </label>
              <label className="text-sm font-medium">
                Requirement
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary"
                  placeholder="Thread type, count, shade, monthly volume"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
              >
                Send enquiry
              </button>
            </div>
          </form>
        </Reveal>
      </section>
    </main>
  );
}