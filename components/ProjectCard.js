import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const ProjectCard = () => {

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio built with Next.js and Tailwind CSS.",
      stack: ["Next.js", "Tailwind"],
      previewLink: "https://coffeeshop-7ad9.vercel.app/",
      sourceLink: "https://github.com/MuhammadAunR/Coffee-Shop",
      image: "/p1-coffeeshop.webp",
    },
  ];

  return (
    <>
      {projects.map((proj, i) => {

        return <section key={i} className='flex gap-3 justify-between items-center max-lg:flex-wrap h-fit  px-4 py-6 bg-white shadow-[5px_5px_7px_rgba(0,0,0,0.35)] rounded-2xl my-7'
          data-aos="fade-up">

          <div className='w-1/2 max-lg:w-full flex flex-col items-center gap-7'>
            <h2 className='text-xl font-semibold uppercase max-lg:pt-5'>{proj.title}</h2>
            <p className='text-center text-lg text-gray-600'>{proj.description}</p>
            <div className='stack flex gap-5'>
              {proj.stack.map((item, i) => {
                return (
                  <div key={i} className='bg-white text-lg shadow-[5px_5px_7px_rgba(0,0,0,0.35)] px-4 py-2'>{item}</div>
                )
              })}
            </div>
            <div className="Links flex gap-10 py-5 max-sm:flex-wrap-reverse max-sm:gap-5 max-sm:justify-center">
              <div className='flex items-center gap-2 text-xl hover:text-main-color transition-colors ease-in-out'>
                <Link href={proj.previewLink} target='_blank' className='font-semibold'>Preview</Link>
                <ExternalLink />
              </div>
              <div className='flex items-center gap-2 text-xl hover:text-main-color transition-colors ease-in-out'>
                <Link href={proj.sourceLink} target='_blank' className='font-semibold'>Source_Code</Link>
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </div>
            </div>
          </div>

          <div className='relative w-1/2 max-lg:w-full h-95 overflow-hidden rounded-2xl shadow-[0_5px_5px_rgba(0,0,0,0.35)]'>
            <Image src={proj.image} width={1000} height={3000} alt='Preview' className='object-cover w-full h-auto object-top cursor-pointer transition-transform ease-linear duration-[15s] hover:animate-[vertical-scroll-animation_15s_linear_infinite] ' />
          </div>
        </section>
      })}
    </>
  )
}

export default ProjectCard
