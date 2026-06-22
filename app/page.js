"use client";
import AboutMe from "@/components/AboutMe";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <main className="max-w-384 mx-auto overflow-x-hidden">
        <header className="bg-linear-to-b from-main-color/20 to-white h-fit w-fit">
          <Navbar />
          <HeroSection />
        </header>

        <section className="max-w-384 w-10/12 mx-auto">
          <AboutMe />
        </section>

        <section id="project" className="projects bg-gray-100">
          <section className="max-w-325 w-10/12 mx-auto py-10">
            <div className="py-12">
              <h3 className="uppercase text-main-color font-bold">Portfolio</h3>
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

            <div>
              <motion.h5
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.96, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-center italic font-semibold cursor-pointer pt-5"
              >
                More Projects Coming Soon, Stay connected 🌐
              </motion.h5>
            </div>
          </section>
        </section>

        <section className="">
          <ContactUs />
        </section>
      </main>
    </>
  );
}
