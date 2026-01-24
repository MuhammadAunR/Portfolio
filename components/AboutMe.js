import Image from 'next/image'
import React from 'react'
import RotatingWheel from './RotatingWheel';

const AboutMe = () => {

    return (
        <>
            <main id='about' className='h-fit py-24 flex gap-3  max-lg:gap-10 justify-between items-center max-lg:flex-wrap max-lg:justify-center' data-aos="fade-up">
                <div className='relative'>
                    <div className='overflow-hidden rounded-2xl h-90 w-150 max-sm:w-90 max-sm:h-60 max-sm:px-5 relative'>
                        <Image src={'/aboutme.jpg'} alt='About Me' fill unoptimized='false' className='object-cover object-center' />
                    </div>
                    <span className='absolute right-7 -bottom-24 max-lg:hidden'>
                    <RotatingWheel/>
                    </span>
                </div>
                <div className='lg:w-1/2 flex max-lg:gap-5 flex-col gap-1 max-lg:text-center'>
                    <h3 className='uppercase text-main-color font-bold max-lg:mt-7'>About Me</h3>
                    <h2 className="text-2xl font-semibold shine-wrapper">
                        <span className="base-text">
                            A dedicated Full Stack Developer based in Pakistan 📍
                        </span>
                        <span className="shine-text">
                            A dedicated Full Stack Developer based in Pakistan
                        </span>
                    </h2>
                    <code className='text-gray-600 text-justify text-xl cursor-pointer max-lg:text-center'>I am a web developer with hands-on experience building modern, scalable web applications using React, Next.js, Node.js, Express, and MongoDB. I focus on writing clean, maintainable code and developing user-centric interfaces backed by reliable backend systems. I have practical experience consuming REST APIs, implementing authentication flows, and integrating frontend applications with backend services. I continuously improve my skills through real-world projects and value problem-solving, performance optimization, and clear system design.</code>
                </div>
            </main>
        </>
    )
}

export default AboutMe
