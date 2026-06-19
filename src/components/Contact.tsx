"use client";

import { useState } from "react";
import { site } from "@/lib/content";

export default function Contact() {
  const { contact } = site;
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — fail silently
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const brand = form.get("brand");
    const message = form.get("message");
    const subject = encodeURIComponent(`New inquiry from ${name ?? "your website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nBrand: ${brand}\n\n${message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 lg:grid-cols-2 lg:gap-16 lg:p-14">
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-cyan">
            Contact
          </span>
          <h2 className="text-balance mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {contact.headline}
          </h2>
          <p className="mt-4 max-w-md text-balance text-sm leading-relaxed text-white/60">
            {contact.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-navy transition hover:bg-cyan/90"
            >
              Email {site.representative.split(" ")[0]}
            </a>
            <button
              onClick={handleCopy}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-ink transition hover:border-violet/60 hover:text-violet"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>

          <p className="mt-6 text-sm text-white/45">{contact.email}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-xs font-medium text-white/60">
              Your name
            </label>
            <input
              id="name"
              name="name"
              required
              type="text"
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink outline-none focus:border-cyan/60"
              placeholder="Jordan Lee"
            />
          </div>
          <div>
            <label htmlFor="brand" className="text-xs font-medium text-white/60">
              Brand / company
            </label>
            <input
              id="brand"
              name="brand"
              type="text"
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink outline-none focus:border-cyan/60"
              placeholder="Your Brand Co."
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-medium text-white/60">
              What do you need?
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink outline-none focus:border-cyan/60"
              placeholder="Tell us about your brand and goals..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-violet px-6 py-3.5 text-sm font-semibold text-navy transition hover:bg-violet/90"
          >
            {sent ? "Opening your email app…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
