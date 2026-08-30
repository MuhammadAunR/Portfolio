"use client";
import Image from "next/image";
import React from "react";
import RotatingWheel from "./RotatingWheel";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <>
      <main
        id="about"
        className="h-fit pb-24 flex gap-3  max-lg:gap-10 justify-between items-center max-lg:flex-wrap max-lg:justify-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.96, ease: "linear" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl h-90 w-150 max-sm:w-90 max-sm:h-60 max-sm:px-5 relative">
            <Image
              src={"/aboutme.webp"}
              alt="About Me"
              fill
              unoptimized="false"
              className="object-cover object-center"
            />
          </div>
          <span
            data-aos="zoom-in"
            className="absolute right-7 -bottom-24 max-lg:hidden"
          >
            <RotatingWheel />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.96, ease: "linear" }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex max-lg:gap-5 flex-col gap-1 max-lg:text-center"
        >
          <h3 className="uppercase text-main-color font-bold max-lg:mt-7">
            About Me
          </h3>
          <h2 className="text-2xl font-semibold shine-wrapper">
            <span className="base-text">
              A dedicated MERN Stack Developer based in Pakistan
            </span>
            <span className="shine-text">
              A dedicated MERN Stack Developer based in Pakistan
            </span>
          </h2>
          <code className="text-gray-600 text-justify text-xl cursor-pointer lg:leading-6">
            I help businesses turn ideas into fast, reliable, and great-looking websites and web apps. As a MERN Stack Developer (React, Next.js, Node.js, MongoDB), I handle everything from the first line of code to a fully deployed product — clean UI, smooth animations, secure authentication, and a backend that doesn't break when your business grows. I've built e-commerce stores, real estate platforms, restaurant and booking sites, and admin dashboards for real-world use cases. Whether you need a landing page that converts, a full online store, or a custom web app for your business, I focus on shipping something that actually works — not just something that looks good in a screenshot. Let's talk about what you're trying to build.
          </code>
        </motion.div>
      </main>
    </>
  );
};

export default AboutMe;
