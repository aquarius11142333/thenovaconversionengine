import { site } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="max-w-2xl">
        <span className="text-xs font-medium uppercase tracking-wider text-violet">
          Process
        </span>
        <h2 className="text-balance mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          A simple, repeatable path to launch
        </h2>
      </div>

      <ol className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
        {site.process.map((step, i) => (
          <li key={step.step} className="relative">
            <span className="font-display text-sm font-semibold text-cyan">
              {step.step}
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-white/60">
              {step.description}
            </p>
            {i < site.process.length - 1 && (
              <div className="mt-8 hidden h-px w-full bg-gradient-to-r from-white/15 to-transparent sm:block" />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
