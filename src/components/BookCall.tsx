import { site } from "@/lib/content";

export default function BookCall() {
  const { contact } = site;

  return (
    <section id="book-a-call" className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <div className="text-center">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Book a Call
        </h2>
        <p className="mt-3 text-sm text-white/60">
          Pick a time that works for you — calendar below.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
        <iframe
          src={contact.calendlyUrl}
          title="Schedule a call"
          className="h-[700px] w-full"
          loading="lazy"
        />
      </div>

      <p className="mt-6 text-center text-xs text-white/40">
        Calendar not loading?{" "}
        <a
          href={contact.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan hover:underline"
        >
          Open it in a new tab
        </a>{" "}
        or email{" "}
        <a href={`mailto:${contact.email}`} className="text-cyan hover:underline">
          {contact.email}
        </a>
        .
      </p>
    </section>
  );
}
