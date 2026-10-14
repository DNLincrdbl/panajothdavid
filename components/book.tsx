"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

export function Book() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const brand = String(data.get("brand") || "").trim();
    const note = String(data.get("note") || "").trim();
    const subject = encodeURIComponent(`Booking — ${brand || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBrand: ${brand}\n\n${note}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <section id="book" className="bg-bone text-ink-dark">
      <div className="grid gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink-dark/55">
            03 — Book
          </p>
          <h2 className="mt-4 font-serif text-[clamp(3.4rem,8vw,7.2rem)] leading-[0.84] tracking-[-0.045em]">
            Book the
            <span className="italic"> frame.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ink-dark/75 md:text-lg">
            Talent, commercial film, and campaign work. Based in China, in
            front of the camera and with the crew.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block font-serif text-2xl italic tracking-tight underline decoration-ink-dark/25 underline-offset-4 md:text-3xl"
          >
            {site.email}
          </a>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-7 lg:col-span-5 lg:col-start-8 lg:pt-16">
          <Field label="Name" name="name" autoComplete="name" />
          <Field label="Email" name="email" type="email" autoComplete="email" />
          <Field label="Brand" name="brand" autoComplete="organization" />
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-dark/55">
              What you need
            </span>
            <textarea
              name="note"
              required
              rows={4}
              className="mt-2 w-full resize-none border-b border-ink-dark/20 bg-transparent py-3 text-lg outline-none focus:border-ink-dark"
            />
          </label>
          <div className="flex flex-wrap items-center gap-6">
            <button
              type="submit"
              className="inline-flex items-center gap-8 bg-ink-dark px-7 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-bone transition-colors hover:bg-black"
            >
              Send the note
              <span aria-hidden>→</span>
            </button>
            {opened ? (
              <p className="max-w-xs text-sm leading-relaxed text-ink-dark/70">
                Your mail app should open with the note. If it does not, write
                straight to the address.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-dark/55">
        {label}
      </span>
      <input
        required
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="mt-2 w-full border-b border-ink-dark/20 bg-transparent py-3 text-lg outline-none focus:border-ink-dark"
      />
    </label>
  );
}
