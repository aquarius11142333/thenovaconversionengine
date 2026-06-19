import { site } from "@/lib/content";

export default function Brands() {
  return (
    <section id="brands" className="border-y border-white/5 bg-white/[0.015] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-white/45">
          Trusted by {site.brands.length}+ ecommerce &amp; DTC brands
        </p>

        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {site.brands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center gap-3 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-9 w-auto max-w-[120px] object-contain"
              />
              <span className="text-center text-xs text-white/50">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
