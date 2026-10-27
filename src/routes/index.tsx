import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check, FileAudio, Sparkles, Share2 } from "lucide-react";

import heroImage from "@/assets/hero-murmur.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Murmur — Every customer interview, distilled" },
      {
        name: "description",
        content:
          "Drop in a customer call and get the key quotes, pain points and themes in minutes. Join the Murmur waitlist.",
      },
      { property: "og:title", content: "Murmur — Every customer interview, distilled" },
      {
        property: "og:description",
        content: "Turn customer calls into insights your whole team can use. Join the waitlist.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  {
    icon: FileAudio,
    title: "Drop in a call",
    body: "Upload a recording or paste a transcript from Zoom, Meet or your phone.",
  },
  {
    icon: Sparkles,
    title: "Get the gist",
    body: "Murmur pulls out pain points, feature requests and the quotes worth repeating.",
  },
  {
    icon: Share2,
    title: "Share the story",
    body: "Send a one-page summary to your team, or roll themes up across dozens of calls.",
  },
];

function Index() {
  return (
    <div className="paper-grain min-h-screen overflow-hidden">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-accent" aria-hidden />
          <span className="font-display text-2xl">Murmur</span>
        </a>
        <a href="#waitlist" className="btn-quiet">
          Join the waitlist
        </a>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-[1.05fr_1fr] md:pt-16">
          <div className="animate-rise">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Coming this winter
            </p>
            <h1 className="text-5xl leading-[1.02] md:text-7xl">
              Every customer interview,{" "}
              <em className="underline-swash">distilled.</em>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Stop re-watching hour-long calls. Murmur turns customer conversations into the
              quotes, pain points and themes your team actually needs.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#waitlist" className="btn-hero">
                Get early access <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-sm text-muted-foreground">Free for early teams.</span>
            </div>
          </div>
          <div className="animate-rise [animation-delay:150ms]">
            <img
              src={heroImage}
              alt="A vintage microphone with speech flowing into tidy note cards"
              width={1408}
              height={1024}
              className="shadow-paper w-full rounded-3xl border-2 border-border"
            />
          </div>
        </section>

        {/* How it works */}
        <section className="border-y border-border bg-card/60">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="max-w-xl text-4xl md:text-5xl">From hour-long call to one clear page.</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step, i) => (
                <article
                  key={step.title}
                  className="shadow-paper rounded-2xl border-2 border-border bg-background p-7"
                >
                  <div className="flex items-center justify-between">
                    <step.icon className="h-6 w-6 text-primary" />
                    <span className="font-display text-3xl text-accent">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-2xl">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="font-display text-3xl leading-snug md:text-4xl">
            “I used to spend Fridays re-listening to calls. Now I spend them deciding what to
            build.”
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.14em] text-muted-foreground">
            Beta tester, Head of Product
          </p>
        </section>

        <WaitlistSection />
      </main>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground">
        <span className="font-display text-xl text-foreground">Murmur</span>
        <span>© {new Date().getFullYear()} Murmur. Made for people who listen.</span>
      </footer>
    </div>
  );
}

function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [joined, setJoined] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setJoined(true);
  }

  return (
    <section id="waitlist" className="px-6 pb-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-ink px-8 py-16 text-ink-foreground md:px-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-4xl md:text-5xl">Be first to hear what your customers mean.</h2>
            <p className="mt-4 text-ink-foreground/85">
              We're letting in a small group of product teams each month. Leave your email and
              we'll save you a seat.
            </p>
          </div>

          {joined ? (
            <div className="rounded-2xl border border-ink-foreground/20 p-8" role="status">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Check className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-3xl">You're on the list.</p>
              <p className="mt-2 text-ink-foreground/85">
                We'll write to <strong className="text-ink-foreground">{email.trim()}</strong> when
                your spot opens up.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
              <label htmlFor="email" className="text-sm font-medium">
                Work email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!error}
                className="h-13 rounded-full border border-ink-foreground/25 bg-ink-foreground/5 px-5 py-3.5 text-ink-foreground placeholder:text-ink-foreground/45 focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {error && <p className="text-sm text-accent">{error}</p>}
              <button type="submit" className="btn-hero mt-2">
                Join the waitlist <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
