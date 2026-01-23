import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
    return (
        <>
            <main id='about' className='h-fit py-24 flex gap-3 max-lg:gap-10 justify-between items-center max-lg:flex-wrap max-lg:justify-center'>
                <div className='overflow-hidden rounded-2xl h-90 w-150 relative' data-aos="fade-right">
                    <Image src={'/aboutme.jpg'} alt='About Me' fill unoptimized className='object-cover object-center' />
                </div>
                <div className='lg:w-1/2 flex max-lg:gap-5 flex-col gap-1 max-lg:text-center' data-aos="fade-left">
                    <h3 className='uppercase text-main-color font-bold'>About Me</h3>
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
