"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const HeroSection = () => {
  const skillIcons = [
    "html,css",
    "js,react",
    "nextjs",
    "nodejs,expressjs",
    "git,github",
    "vercel,netlify",
    "mongodb",
    "cpp",
  ];

  const ASCII =
    "!@#$%^&*()[]{}|;:<>?/\\~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function useScramble(text) {
    const [display, setDisplay] = useState("");
    const timeoutRef = useRef(null);

    useEffect(() => {
      let iteration = 0;
      const totalIter = text.length * 8;

      function step() {
        const out = text
          .split("")
          .map((c, i) => {
            if (c === " ") return " ";
            if (i < Math.floor(iteration / 8)) return c;
            return ASCII[Math.floor(Math.random() * ASCII.length)];
          })
          .join("");

        setDisplay(out);
        iteration++;

        if (iteration <= totalIter) {
          timeoutRef.current = setTimeout(step, 30);
        } else {
          setDisplay(text);
        }
      }

      step();
      return () => clearTimeout(timeoutRef.current);
    }, [text]);

    return display;
  }

  const display = useScramble("MERN Stack Developer");

  return (
    <>
      <section id="home" className="w-10/12 mx-auto pt-28 lg:py-28">
        <section className="flex justify-between items-center gap-x-2 gap-y-7 max-lg:flex-wrap-reverse max-lg:justify-center lg:pt-28">
          <div className="w-1/2 max-lg:w-full flex flex-col gap-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.96, ease: "linear" }}
              viewport={{ once: true }}
              className="text-gray-800 font-bold text-5xl max-lg:text-center max-sm:text-4xl"
            >
              <h3>{display}</h3>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.96, ease: "linear" }}
              viewport={{ once: true }}
              className="text-xl max-sm:text-lg text-gray-600 lg:text-justify text-center"
            >
              Hi, I'm <strong>Muhammad Aun</strong>. I am a{" "}
              <strong>MERN Stack Developer</strong> creating user-friendly web
              applications and managing secure, scalable cloud infrastructure. I
              bridge the gap between development and operations, ensuring
              efficient, high-quality solutions 👨‍💻
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.96, ease: "linear" }}
              viewport={{ once: true }}
              className="flex gap-5 items-center max-lg:justify-center"
            >
              <Link
                href="https://www.linkedin.com/in/muhammad-aun-rasheed-45a177301/"
                target="_blank"
                className="transition-colors duration-500 hover:text-main-color"
              >
                <svg
                  className="h-12 w-12"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 11v5" />
                  <path d="M8 8v.01" />
                  <path d="M12 16v-5" />
                  <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                  <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/MuhammadAunR"
                target="_blank"
                className="transition-colors duration-500 hover:text-main-color"
              >
                <svg
                  className="h-12 w-12"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </Link>
              <Link
                href="https://wa.me/923286536520?text=Hi%20I%20want%20to%20hire%20you"
                target="_blank"
                className="transition-colors duration-500 hover:text-green-600"
              >
                <svg
                  className="h-12 w-12"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path d="M25.873,6.069c-2.619-2.623-6.103-4.067-9.814-4.069C8.411,2,2.186,8.224,2.184,15.874c-.001,2.446,.638,4.833,1.852,6.936l-1.969,7.19,7.355-1.929c2.026,1.106,4.308,1.688,6.63,1.689h.006c7.647,0,13.872-6.224,13.874-13.874,.001-3.708-1.44-7.193-4.06-9.815h0Zm-9.814,21.347h-.005c-2.069,0-4.099-.557-5.87-1.607l-.421-.25-4.365,1.145,1.165-4.256-.274-.436c-1.154-1.836-1.764-3.958-1.763-6.137,.003-6.358,5.176-11.531,11.537-11.531,3.08,.001,5.975,1.202,8.153,3.382,2.177,2.179,3.376,5.077,3.374,8.158-.003,6.359-5.176,11.532-11.532,11.532h0Zm6.325-8.636c-.347-.174-2.051-1.012-2.369-1.128-.318-.116-.549-.174-.78,.174-.231,.347-.895,1.128-1.098,1.359-.202,.232-.405,.26-.751,.086-.347-.174-1.464-.54-2.788-1.72-1.03-.919-1.726-2.054-1.929-2.402-.202-.347-.021-.535,.152-.707,.156-.156,.347-.405,.52-.607,.174-.202,.231-.347,.347-.578,.116-.232,.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.281-.676-.567-.584-.78-.595-.202-.01-.433-.012-.665-.012s-.607,.086-.925,.434c-.318,.347-1.213,1.186-1.213,2.892s1.242,3.355,1.416,3.587c.174,.232,2.445,3.733,5.922,5.235,.827,.357,1.473,.571,1.977,.73,.83,.264,1.586,.227,2.183,.138,.666-.1,2.051-.839,2.34-1.649,.289-.81,.289-1.504,.202-1.649s-.318-.232-.665-.405h0Z"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.96, ease: "linear" }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-4xl lg:mr-22 profile-blob"
          >
            <Image
              src={"/profile.webp"}
              alt="Profile Picture"
              width={400}
              height={0}
              unoptimized
              loading="lazy"
            />
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.96, ease: "linear" }}
          viewport={{ once: true }}
          className="my-15 flex gap-7 items-center max-lg:flex-wrap max-lg:justify-center"
        >
          <h4 className="text-2xl font-semibold">Tech ToolKit</h4>
          <div className="w-px h-10 bg-main-color max-lg:hidden"></div>
          <div>
            <div className="flex gap-4 flex-wrap items-center justify-center">
              {skillIcons.map((icon, index) => {
                return (
                  <div
                    key={icon}
                    className="hover:scale-110 transition-transform ease-in-out duration-300"
                  >
                    <Image
                      src={`https://skillicons.dev/icons?i=${icon}`}
                      alt="html,css"
                      width={icon.includes(",") ? 100 : 50}
                      height={50}
                      unoptimized
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>
      </section>
    </>
  );
};

export default HeroSection;
