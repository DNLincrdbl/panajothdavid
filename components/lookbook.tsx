"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { frames, type Frame } from "@/lib/content";

const grid = [
  "aspect-[2/3] lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-auto",
  "aspect-[4/5] lg:col-span-4 lg:col-start-6 lg:row-start-1 lg:aspect-auto",
  "aspect-[2/3] lg:col-span-3 lg:col-start-10 lg:row-span-2 lg:row-start-1 lg:aspect-auto",
  "aspect-[4/5] lg:col-span-4 lg:col-start-6 lg:row-start-2 lg:aspect-auto",
];

function indexLabel(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function Lookbook() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const ignoreClose = useRef(false);
  const touchX = useRef(0);
  const open = active !== null;
  const frame = active !== null ? frames[active] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;
    ignoreClose.current = false;
    dialog.showModal();
    return () => {
      ignoreClose.current = true;
      if (dialog.open) dialog.close();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") shift(1);
      if (event.key === "ArrowLeft") shift(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, active]);

  function shift(direction: number) {
    setActive((current) => {
      if (current === null) return current;
      return (current + direction + frames.length) % frames.length;
    });
  }

  return (
    <section id="frames" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mb-8 flex items-end justify-between gap-8 md:mb-10">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-mute">
            01 — Frames
          </p>
          <h2 className="mt-3 font-serif text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[-0.04em]">
            Selected
          </h2>
        </div>
        <p className="max-w-[13rem] text-right text-sm leading-relaxed text-mute">
          Five stills. The commercials sit around them.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:grid-rows-[minmax(280px,46vh)_minmax(240px,38vh)]">
        {frames.slice(0, 4).map((item, index) => (
          <FrameButton
            key={item.src}
            frame={item}
            index={index}
            className={grid[index]}
            onOpen={() => setActive(index)}
          />
        ))}
      </div>

      <div className="mt-3 grid items-end gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-8">
        <FrameButton
          frame={frames[4]}
          index={4}
          className="mx-auto aspect-[2/3] w-full max-w-[460px] lg:col-span-5 lg:mx-0"
          onOpen={() => setActive(4)}
        />
        <div className="lg:col-span-6 lg:col-start-7 lg:pb-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-mute">
            05 — Studio
          </p>
          <p className="mt-4 max-w-xl font-serif text-[clamp(2rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.03em]">
            The still is the proof. The job is the film, the crew, and the
            brand around it.
          </p>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="viewer"
        aria-label="Selected frame"
        onClose={() => {
          if (ignoreClose.current) return;
          setActive(null);
        }}
      >
        {frame ? (
          <div className="relative flex h-full w-full items-center justify-center px-4 py-16 md:px-16">
            <button
              type="button"
              aria-label="Close viewer"
              className="absolute inset-0"
              onClick={() => setActive(null)}
            />
            <div
              className="relative z-10 flex w-full max-w-5xl flex-col items-center"
              onTouchStart={(event) => {
                touchX.current = event.changedTouches[0].clientX;
              }}
              onTouchEnd={(event) => {
                const delta = event.changedTouches[0].clientX - touchX.current;
                if (delta > 48) shift(-1);
                if (delta < -48) shift(1);
              }}
            >
              <div className="relative h-[min(74vh,860px)] w-[min(88vw,calc(74vh*0.72))]">
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  sizes="88vw"
                  className={`object-contain ${frame.focus}`}
                />
              </div>
              <div className="mt-5 flex w-full max-w-md items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-ink/80">
                <span>
                  {indexLabel(active ?? 0)} / {indexLabel(frames.length - 1)}
                </span>
                <span>
                  {frame.title}
                  <span className="px-2 text-ink/40">—</span>
                  {frame.meta}
                </span>
              </div>
            </div>

            <button
              type="button"
              aria-label="Previous frame"
              onClick={() => shift(-1)}
              className="absolute top-1/2 left-3 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center md:left-8"
            >
              <Arrow dir="left" />
            </button>
            <button
              type="button"
              aria-label="Next frame"
              onClick={() => shift(1)}
              className="absolute top-1/2 right-3 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center md:right-8"
            >
              <Arrow dir="right" />
            </button>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute top-6 right-5 z-10 font-mono text-[11px] uppercase tracking-[0.28em] md:right-10"
            >
              Close
            </button>
            <p className="sr-only" aria-live="polite">
              {frame.title}, {frame.meta}
            </p>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}

function FrameButton({
  frame,
  index,
  className,
  onOpen,
}: {
  frame: Frame;
  index: number;
  className: string;
  onOpen: () => void;
}) {
  return (
    <figure className={`relative min-h-0 ${className}`}>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open ${frame.title}`}
        className="group absolute inset-0 block cursor-zoom-in overflow-hidden bg-white/5 text-left"
      >
        <Image
          src={frame.src}
          alt={frame.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className={`frame-zoom object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] ${frame.focus}`}
        />
      </button>
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-between bg-gradient-to-t from-black/75 via-black/15 to-transparent px-4 pt-16 pb-4 font-mono text-[10px] uppercase tracking-[0.26em] text-white">
        <span>{indexLabel(index)}</span>
        <span>{frame.title}</span>
      </figcaption>
    </figure>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path
        d={dir === "left" ? "M17 6 L9 14 L17 22" : "M11 6 L19 14 L11 22"}
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}
