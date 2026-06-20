import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <p className="text-xs text-white/35">
          © {new Date().getFullYear()} {site.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
