import { site } from "@/lib/content";

export default function Footer() {
  const { footer, contact } = site;

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-base font-semibold text-ink">
              {footer.brandName}
            </p>
            <p className="mt-1 text-sm text-white/45">{footer.tagline}</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-3 inline-block text-sm text-cyan hover:underline"
            >
              {contact.email}
            </a>
          </div>

          <div className="flex gap-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                Menu
              </p>
              <ul className="mt-3 space-y-2">
                {footer.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-cyan"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                Social
              </p>
              <ul className="mt-3 space-y-2">
                {footer.socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/60 hover:text-violet"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {footer.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
