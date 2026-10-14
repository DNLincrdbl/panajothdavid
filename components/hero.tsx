import Image from "next/image";
import { HashLink } from "@/components/hash-link";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] bg-paper">
      <div className="absolute inset-0 lg:left-[36%]">
        <Image
          src="/photos/5.jpg"
          alt="Panajoth Dávid, studio portrait"
          fill
          priority
          sizes="(min-width: 1024px) 64vw, 100vw"
          className="object-cover object-[center_18%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/50 via-[32%] to-transparent lg:bg-gradient-to-r lg:from-paper lg:via-paper/40 lg:via-[24%] lg:to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-paper/75 to-transparent lg:hidden" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pt-28 pb-12 md:px-10 md:pb-16 lg:max-w-[70%]">
        <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-ink/70">
          Model <span className="px-1.5">/</span> Producer
        </p>
        <h1 className="mt-4 font-serif text-[clamp(3.35rem,17vw,11.25rem)] leading-[0.78] tracking-[-0.05em]">
          <span className="block whitespace-nowrap">Panajoth</span>
          <span className="block whitespace-nowrap italic">Dávid</span>
        </h1>
        <p className="mt-7 max-w-md text-base leading-relaxed text-ink/80 md:text-lg">
          Based in {site.location}. On camera for global brands, and on the
          other side of it — commercial film with a crew, and the marketing
          the picture has to carry.
        </p>
        <HashLink
          href="/#book"
          className="mt-8 inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em]"
        >
          Book a campaign
          <span aria-hidden className="block h-px w-12 bg-current" />
        </HashLink>
      </div>

      <div className="absolute right-10 bottom-14 z-10 hidden items-center gap-4 lg:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/70">
          Scroll
        </span>
        <span className="scroll-line block h-px w-16 bg-ink/80" />
      </div>
    </section>
  );
}
