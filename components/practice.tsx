import { facts } from "@/lib/content";
import { Services } from "@/components/services";

export function Practice() {
  return (
    <section id="practice" className="px-5 py-8 pb-24 md:px-10 md:pb-32">
      <div className="grid gap-8 border-t border-line pt-16 lg:grid-cols-12 lg:gap-6 lg:pt-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-mute lg:col-span-12">
          02 — Practice
        </p>
        <h2 className="font-serif text-[clamp(2.6rem,5.5vw,5.1rem)] leading-[0.94] tracking-[-0.04em] lg:col-span-8">
          In the frame, and running the set.
        </h2>
        <p className="max-w-md text-base leading-relaxed text-ink/75 lg:col-span-4 lg:pt-3 lg:text-lg">
          Panajoth Dávid works in China with global brands. He models, he
          shoots commercial films with a crew, and he builds the marketing
          that has to land with the picture.
        </p>
      </div>

      <dl className="mt-14 grid border-t border-line sm:grid-cols-3">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="border-b border-line py-6 sm:border-r sm:border-b-0 sm:px-6 sm:py-8 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
          >
            <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-mute">
              {fact.label}
            </dt>
            <dd className="mt-3 font-serif text-[clamp(1.8rem,3vw,2.5rem)] leading-none tracking-tight">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>

      <Services />
    </section>
  );
}
