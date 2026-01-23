import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between max-md:justify-center w-full px-12 py-5 bg-white shadow-xl mb-14 fixed top-0 z-10' data-aos="fade-down">
                <div className=''>
                    <h1 className="text-2xl font-semibold shine-wrapper">
                        <span className="base-text">
                            Muhammad Aun
                        </span>
                        <span className="shine-text">
                            Muhammad Aun
                        </span>
                    </h1>
                </div>
                <ul className='flex gap-15 font-semibold text-xl max-md:hidden'>
                    <Link href={'#home'}>
                        <li className='cursor-pointer hover:text-main-color transition-colors ease-in-out'>Home</li>
                    </Link>
                    <Link href={'#about'}>
                        <li className='cursor-pointer hover:text-main-color transition-colors ease-in-out'>About</li>
                    </Link>
                    <Link href={'#project'}>
                        <li className='cursor-pointer hover:text-main-color transition-colors ease-in-out'>Projects</li>
                    </Link>
                    <Link href={'#contactus'}>
                        <li className='cursor-pointer hover:text-main-color transition-colors ease-in-out'>Contacts</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
