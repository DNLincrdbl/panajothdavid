import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col justify-end px-5 pt-28 pb-12 md:px-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-mute">
        404
      </p>
      <h1 className="mt-4 max-w-3xl font-serif text-[clamp(3.2rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.04em]">
        This frame is empty.
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em]"
      >
        Back to the book
        <span aria-hidden className="block h-px w-12 bg-current" />
      </Link>
    </main>
  );
}
