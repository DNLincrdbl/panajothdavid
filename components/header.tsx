"use client";

import { useEffect, useState } from "react";
import { HashLink } from "@/components/hash-link";
import { nav, site } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    const book = document.getElementById("book");
    if (!book) return;

    const onScroll = () => {
      const rect = book.getBoundingClientRect();
      setOnLight(rect.top < 64 && rect.bottom > 64);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const tone = onLight && !open ? "text-ink-dark" : "text-ink";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-6 transition-colors duration-300 md:px-10 ${tone}`}
      >
        <HashLink href="/#top" className="font-serif text-[1.65rem] leading-none tracking-tight">
          {site.wordmark}
        </HashLink>
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <HashLink
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.28em]"
            >
              {item.label}
            </HashLink>
          ))}
        </nav>
        <button
          type="button"
          className="font-mono text-[11px] uppercase tracking-[0.28em] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>

      <div
        id="mobile-nav"
        inert={!open}
        className={`fixed inset-0 z-40 bg-paper transition duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col justify-end gap-3 px-6 pb-16">
          {nav.map((item) => (
            <HashLink
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-serif text-[18vw] leading-[0.9] tracking-tight"
            >
              {item.label}
            </HashLink>
          ))}
        </nav>
      </div>
    </>
  );
}
