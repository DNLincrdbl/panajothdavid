import { ticker } from "@/lib/content";

export function Marquee() {
  const loop = [0, 1];

  return (
    <div className="ticker overflow-hidden border-y border-line" aria-hidden>
      <div className="ticker-track flex w-max">
        {loop.map((copy) => (
          <ul key={copy} className="flex">
            {ticker.map((word) => (
              <li
                key={`${copy}-${word}`}
                className="flex items-center py-4 pr-0 pl-8 font-mono text-[11px] uppercase tracking-[0.32em] text-ink/80"
              >
                {word}
                <span className="ml-8 block h-1 w-1 bg-ink/45" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
