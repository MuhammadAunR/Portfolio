import AboutMe from "@/components/AboutMe";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {

  return (
    <>

      <main className="max-w-384 mx-auto">

        <header className="bg-gray-100 h-fit w-full">
          <Navbar />
          <HeroSection />
        </header>

        <section className="max-w-384 w-10/12 mx-auto">
          <AboutMe />
        </section>

        <section id="project" className="projects bg-gray-100">
          <section className="max-w-325 w-10/12 mx-auto py-10">

            <div className="py-12">
              <h3 className='uppercase text-main-color font-bold'>Portfolio</h3>
              <h2 className="text-2xl font-semibold shine-wrapper">
                <span className="base-text">
                  Each project is a unique piece of development 🧩
                </span>
                <span className="shine-text">
                  Each project is a unique piece of development
                </span>
              </h2>
            </div>

            <ProjectCard />

            <div data-aos="zoom-in">
              <h5 className="text-center italic font-semibold cursor-pointer pt-5">More Projects Coming Soon, Stay connected 🌐</h5>
            </div>
          </section>
        </section>

        <section>
          <ContactUs />
        </section>

      </main>

    </>
  );
}
