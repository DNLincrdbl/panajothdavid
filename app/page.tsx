import { Book } from "@/components/book";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Lookbook } from "@/components/lookbook";
import { Marquee } from "@/components/marquee";
import { Practice } from "@/components/practice";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Marquee />
        <Lookbook />
        <Practice />
        <Book />
      </main>
      <Footer />
    </>
  );
}
