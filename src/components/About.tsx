import { site } from "@/lib/content";

export default function About() {
  const { about, representative } = site;

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-violet/20 via-transparent to-cyan/20 blur-2xl" />
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-graphite">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={about.image}
              alt={representative}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-medium uppercase tracking-wider text-cyan">
            About
          </span>
          <h2 className="text-balance mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {about.headline}
          </h2>
          <p className="mt-5 max-w-lg text-balance text-base leading-relaxed text-white/65">
            {about.description}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-ink transition hover:border-violet/60 hover:text-violet"
          >
            Work with {representative.split(" ")[0]}
          </a>
        </div>
      </div>
    </section>
  );
}
