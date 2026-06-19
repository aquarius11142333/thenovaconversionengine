"use client";

import { useState } from "react";
import { site } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan to-violet font-display text-sm font-bold text-navy">
            N
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-ink sm:text-base">
            {site.brandName}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition hover:text-cyan"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={site.hero.primaryCta.href}
            className="rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-cyan/90"
          >
            {site.hero.primaryCta.label}
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-ink lg:hidden"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 4.5H16M2 9H16M2 13.5H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-navy/95 px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.hero.primaryCta.href}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-cyan px-5 py-2.5 text-center text-sm font-semibold text-navy"
            >
              {site.hero.primaryCta.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
