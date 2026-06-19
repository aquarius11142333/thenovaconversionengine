import { site } from "@/lib/content";

export default function Hero() {
  const { hero } = site;

  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-cyan">
            {hero.eyebrow}
          </span>

          <h1 className="text-balance mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/65 sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-cyan px-7 py-3.5 text-center text-sm font-semibold text-navy shadow-glow transition hover:bg-cyan/90"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded-full border border-white/15 px-7 py-3.5 text-center text-sm font-semibold text-ink transition hover:border-violet/60 hover:text-violet"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs text-white/50">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan/20 via-transparent to-violet/20 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-graphite shadow-glow">
            <video
              className="aspect-[4/5] w-full object-cover sm:aspect-video lg:aspect-[4/5]"
              src={hero.featuredVideo.src}
              poster={hero.featuredVideo.poster}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
          {hero.featuredVideo.caption && (
            <p className="mt-3 text-center text-xs text-white/40">
              {hero.featuredVideo.caption}
            </p>
          )}
        </div>
      </div>

      <div className="section-divider mx-auto mt-20 max-w-7xl" />
    </section>
  );
}
