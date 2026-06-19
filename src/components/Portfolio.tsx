"use client";

import { useMemo, useState } from "react";
import { site } from "@/lib/content";

export default function Portfolio() {
  const [active, setActive] = useState<string>("All");

  const categories = ["All", ...site.portfolioCategories];

  const items = useMemo(() => {
    const list =
      active === "All"
        ? site.portfolio
        : site.portfolio.filter((p) => p.category === active);
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [active]);

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <span className="text-xs font-medium uppercase tracking-wider text-cyan">
            Portfolio
          </span>
          <h2 className="text-balance mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Work that converted attention into sales
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                active === cat
                  ? "border-cyan bg-cyan/10 text-cyan"
                  : "border-white/10 text-white/55 hover:border-white/25 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <article
            key={project.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-graphite"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              {project.media.type === "video" ? (
                <video
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  src={project.media.src}
                  poster={project.media.thumbnail}
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.media.src}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-80" />

              {project.featured && (
                <span className="absolute left-4 top-4 rounded-full bg-cyan px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy">
                  Featured
                </span>
              )}

              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-[11px] font-medium uppercase tracking-wider text-cyan">
                  {project.category}
                </span>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-white/65">
                  {project.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-white/45">
                  <span>{project.client}</span>
                  <span aria-hidden>·</span>
                  <span>{project.industry}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {items.length === 0 && (
        <p className="mt-12 text-center text-sm text-white/50">
          No projects in this category yet — add one to{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5">src/content/site.json</code>.
        </p>
      )}
    </section>
  );
}
