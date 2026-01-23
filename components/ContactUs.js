import { Mail, MapPinned } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ContactUs = () => {
    return (
        <>
            <section className='w-10/12 mx-auto h-fit py-7'>
                <div className="py-12">
                    <h3 className='uppercase text-main-color font-bold'>Portfolio</h3>
                    <h2 className="text-2xl font-semibold shine-wrapper">
                        <span className="base-text">
                            Have an idea? Let&apos;s talk. 🔔
                        </span>
                        <span className="shine-text">
                            Have an idea? Let&apos;s talk.
                        </span>
                    </h2>
                </div>

                <div className='flex gap-10 items-center max-sm:flex-wrap'>
                    <div className='flex items-center gap-5'>
                        <div className='bg-white p-2 rounded-full shadow-[5px_5px_7px_rgba(0,0,0,0.35)]'><MapPinned /></div>
                        <div>
                            <h4 className='uppercase text-xl font-semibold'>Location</h4>
                            <p>Faisalabad, Pakistan </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='bg-white p-2 rounded-full shadow-[5px_5px_7px_rgba(0,0,0,0.35)]'><Mail /></div>
                        <div>
                            <h4 className='uppercase text-xl font-semibold'>Email</h4>
                            <Link href={'#home'} className='hover:text-main-color'>maunrasheed.dev@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </section>

            <footer className='bg-gray-700 text-white py-7 mt-5'>
                <div className='w-10/12 mx-auto flex justify-between max-md:flex-wrap-reverse max-md:justify-center gap-7'>
                    <p className='text-xl max-sm:text-center'>
                        Copyright &copy; 2026. All rights are reserved.
                    </p>
                    <div className='flex gap-3'>
                        <Link
                            href="https://www.linkedin.com/in/muhammad-aun-rasheed-45a177301/"
                            target="_blank"
                            className="transition-colors duration-500 hover:text-main-color">
                            <svg
                                className="h-8 w-8"
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg">
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
                            className="transition-colors duration-500 hover:text-main-color">
                            <svg
                                className="h-8 w-8"
                                fill="currentColor"
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                            </svg>
                        </Link>
                        <Link
                            href={"https://www.instagram.com/muhammadaun_000?igsh=MXdkczRqc3ZsOTZ0Nw=="}
                            target='_blank'
                            className="transition-colors duration-500 hover:text-main-color">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                        </Link>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default ContactUs
