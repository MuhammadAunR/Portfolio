import AboutMe from "@/components/AboutMe";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>

      <header className="bg-main-color/10 hover:bg-main-color/5 transition-colors ease-in duration-500 h-fit">
        <Navbar />
        <HeroSection />
      </header>

      <section className="max-w-325 w-10/12 mx-auto">
        <AboutMe />
      </section>

      <section id="project" className="projects bg-main-color/10 hover:bg-main-color/5 transition-colors ease-in duration-500 ">
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

          <ProjectCard
            title="Portfolio Website"
            description="A modern portfolio built with Next.js and Tailwind CSS."
            stack={['Next.js', 'Tailwind', 'Framer Motion']}
            previewLink="https://example.com"
            sourceLink="https://github.com/you/project"
            images={[
              '/project/1.png',
              '/project/2.png',
              '/project/3.png',
            ]}
          />

        </section>
      </section>

      <section>
        <ContactUs />
      </section>


    </>
  );
}
