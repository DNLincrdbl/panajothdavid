"use client";

import Image from "next/image";
import { useState } from "react";
import { frames, services } from "@/lib/content";

export function Services() {
  const [current, setCurrent] = useState(0);
  const previews = services.map((service) => frames[service.frame]);

  return (
    <div className="mt-20 grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-mute">
          What you book
        </p>
        <ul className="mt-6 border-b border-line">
          {services.map((service, index) => (
            <li
              key={service.title}
              onMouseEnter={() => setCurrent(index)}
              onFocus={() => setCurrent(index)}
              className="border-t border-line"
            >
              <div className="group grid gap-3 py-7 md:grid-cols-[4.5rem_1fr] md:items-baseline md:gap-6 md:py-8">
                <span className="font-mono text-[11px] tracking-[0.28em] text-mute">
                  {service.index}
                </span>
                <div>
                  <h3 className="font-serif text-[clamp(2.7rem,5vw,4.4rem)] leading-none tracking-[-0.035em] transition-transform duration-500 ease-out group-hover:translate-x-2">
                    {service.title}
                  </h3>
                  <p
                    className={`mt-4 max-w-md text-sm leading-relaxed text-ink/75 transition-opacity duration-300 md:text-base ${
                      current === index ? "opacity-100" : "opacity-55"
                    }`}
                  >
                    {service.text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
        <div className="relative sticky top-24 aspect-[3/4] overflow-hidden bg-white/5">
          {previews.map((frame, index) => (
            <Image
              key={frame.src}
              src={frame.src}
              alt={index === current ? frame.alt : ""}
              fill
              sizes="28vw"
              aria-hidden={index !== current}
              className={`object-cover transition-opacity duration-700 ${frame.focus} ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
