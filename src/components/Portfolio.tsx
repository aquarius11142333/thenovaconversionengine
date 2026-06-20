"use client";

import { useMemo, useRef, useState } from "react";
import { site } from "@/lib/content";

export default function Portfolio() {
  const [active, setActive] = useState<string>("All");
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const items = useMemo(() => {
    const list =
      active === "All"
        ? site.portfolio
        : site.portfolio.filter((p) => p.category === active);
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [active]);

  function togglePlay(id: string) {
    const el = videoRefs.current[id];
    if (!el) return;
    if (el.paused) {
      el.play();
    } else {
      el.pause();
    }
  }

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Portfolio
        </h2>

        <div className="flex flex-wrap justify-center gap-2">
          {site.portfolioCategories.map((cat) => (
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

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((project) => (
          <button
            key={project.id}
            onClick={() => togglePlay(project.id)}
            className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-graphite text-left"
            aria-label={`Play ${project.title}`}
          >
            {project.media.type === "video" ? (
              <video
                ref={(el) => {
                  videoRefs.current[project.id] = el;
                }}
                className="h-full w-full object-cover"
                src={project.media.src}
                poster={project.media.thumbnail}
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.media.src}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />

            {project.featured && (
              <span className="absolute left-3 top-3 rounded-full bg-cyan px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-navy">
                Featured
              </span>
            )}

            <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-navy/70 text-ink backdrop-blur transition group-hover:bg-cyan group-hover:text-navy">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="currentColor">
                <path d="M5 3.5v11l10-5.5-10-5.5Z" />
              </svg>
            </span>

            <span className="absolute inset-x-0 bottom-0 p-3 text-xs font-medium text-ink">
              {project.title}
            </span>
          </button>
        ))}
      </div>

      {items.length === 0 && (
        <p className="mt-12 text-center text-sm text-white/50">
          No ads in this category yet — add one to{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5">src/content/site.json</code>.
        </p>
      )}
    </section>
  );
}
