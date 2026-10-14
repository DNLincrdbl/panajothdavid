import { HashLink } from "@/components/hash-link";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-paper px-5 pt-16 md:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6 font-mono text-[10px] uppercase tracking-[0.28em] text-mute">
        <span>{site.location}</span>
        <span>Model · Film · Marketing</span>
        <a href={`mailto:${site.email}`} className="normal-case tracking-normal">
          {site.email}
        </a>
      </div>
      <div className="flex items-center justify-between py-6 text-xs text-mute">
        <span>© 2026 {site.name}</span>
        <HashLink href="/#top" className="font-mono text-[10px] uppercase tracking-[0.28em]">
          Top
        </HashLink>
      </div>
      <p
        aria-hidden
        className="-mb-[0.22em] font-serif text-[22vw] leading-[0.74] tracking-[-0.055em]"
      >
        {site.wordmark}
      </p>
    </footer>
  );
}
