import { site } from "@/lib/content";

const icons: Record<string, React.ReactNode> = {
  play: (
    <path d="M8 5v14l11-7L8 5Z" />
  ),
  spark: (
    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" />
  ),
  layers: (
    <path d="M12 2 2 7l10 5 10-5-10-5Zm0 9L2 16l10 5 10-5-10-5Z" />
  ),
};

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="max-w-2xl">
        <span className="text-xs font-medium uppercase tracking-wider text-violet">
          Services
        </span>
        <h2 className="text-balance mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Creative built to perform
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.services.map((service) => (
          <div
            key={service.id}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-cyan/30 hover:bg-white/[0.04]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/15 to-violet/15 text-cyan">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                {icons[service.icon] ?? icons.spark}
              </svg>
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">
              {service.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-white/60">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
