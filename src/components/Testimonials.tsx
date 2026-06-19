import { site } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="border-y border-white/5 bg-white/[0.015] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-violet">
            Testimonials
          </span>
          <h2 className="text-balance mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What brands say after launch
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {site.testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-7"
            >
              <blockquote className="text-balance text-sm leading-relaxed text-white/75">
                “{t.testimonial}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.photo}
                  alt={t.clientName}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-ink">{t.clientName}</p>
                  <p className="text-xs text-white/45">{t.company}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
