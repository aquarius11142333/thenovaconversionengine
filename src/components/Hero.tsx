import { site } from "@/lib/content";

export default function Hero() {
  const { vsl, brandName } = site;

  return (
    <section id="top" className="relative overflow-hidden pt-12 sm:pt-16">
      <div className="mx-auto max-w-xl px-6 text-center lg:px-8">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
          {brandName}
        </p>

        <div className="relative mx-auto mt-8 w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan/20 via-transparent to-violet/20 blur-2xl" />
          <div className="aspect-[9/16] overflow-hidden rounded-3xl border border-white/10 bg-graphite shadow-glow">
            <video
              className="h-full w-full object-cover"
              src={vsl.video.src}
              poster={vsl.video.poster}
              controls
              playsInline
            />
          </div>
        </div>

        <p className="text-balance mx-auto mt-7 max-w-md font-display text-lg font-semibold leading-snug text-ink sm:text-xl">
          {vsl.oneLiner}
        </p>

        <a
          href={vsl.bookCallCta.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex rounded-full bg-cyan px-8 py-3.5 text-sm font-semibold text-navy shadow-glow transition hover:bg-cyan/90"
        >
          {vsl.bookCallCta.label}
        </a>
      </div>

      <div className="section-divider mx-auto mt-16 max-w-7xl" />
    </section>
  );
}
