import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import BookCall from "@/components/BookCall";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Portfolio />
        <BookCall />
      </main>
      <Footer />
    </>
  );
}
