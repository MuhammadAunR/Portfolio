import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>

      <Navbar />
      <main className="max-w-325 w-10/12 mx-auto">
        <section className="hero-section">
          <HeroSection /> 
        </section>

      </main>
    </>
  );
}
