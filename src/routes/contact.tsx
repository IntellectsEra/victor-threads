import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Victor Threads" },
      {
        name: "description",
        content:
          "Contact Victor Threads for samples, shade cards and bulk sewing thread enquiries — send us your count, shade and volume requirement.",
      },
      { property: "og:title", content: "Contact Us — Victor Threads" },
      {
        property: "og:description",
        content:
          "Let's talk thread — send your count, shade and volume requirement and we'll come back with a shade card and a quote.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto grid max-w-7xl gap-16 px-6 pt-40 pb-24 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-xs font-semibold tracking-[0.35em] text-muted-foreground">
            CONTACT US
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Let's talk <span className="text-primary">thread</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Send us your count, shade and volume requirement — we'll come back
            with a shade card and a quote.
          </p>

          <dl className="mt-12 flex flex-col gap-8">
            <div>
              <dt className="text-xs font-semibold tracking-[0.25em] text-muted-foreground">PHONE</dt>
              <dd className="mt-2">
                <a
                  href="tel:+919876543210"
                  className="font-[Sora] text-2xl font-bold text-primary transition-colors hover:text-primary/80"
                >
                  +91 98765 43210
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.25em] text-muted-foreground">EMAIL</dt>
              <dd className="mt-2">
                <a
                  href="mailto:sales@victorthreads.com"
                  className="font-[Sora] text-2xl font-bold text-skyblue transition-colors hover:opacity-80"
                >
                  sales@victorthreads.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.25em] text-muted-foreground">FACTORY</dt>
              <dd className="mt-2 text-lg leading-relaxed text-foreground">
                Victor Threads, Mannarai Road,
                <br />
                Tiruppur 641 607, Tamil Nadu, India
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-xl border bg-card p-8 lg:p-10">
          {sent ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-bold text-foreground">Thank you!</h2>
              <p className="mt-3 max-w-sm text-muted-foreground">
                Your enquiry has been noted. We'll come back to you with a shade
                card and a quote shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-md border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="company" className="text-sm font-semibold text-foreground">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="mt-2 w-full rounded-md border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-md border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="requirement" className="text-sm font-semibold text-foreground">
                  Requirement
                </label>
                <textarea
                  id="requirement"
                  name="requirement"
                  rows={4}
                  placeholder="Thread type, count, shade, monthly volume"
                  className="mt-2 w-full resize-y rounded-md border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send enquiry
              </button>
            </form>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
