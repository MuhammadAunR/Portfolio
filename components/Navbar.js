import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between items-center max-md:justify-center w-full 2xl:max-w-384 px-12 mb-14 fixed top-5 z-10' data-aos="fade-down">
                <div className='bg-white/20 shadow-[2px_2px_10px_rgba(0,0,0,0.8)] backdrop-blur-lg rounded-full px-10 py-2.5'>
                    <h1 className="text-2xl font-semibold shine-wrapper">
                        <span className="base-text">
                            Muhammad Aun
                        </span>
                        <span className="shine-text">
                            Muhammad Aun
                        </span>
                    </h1>
                </div>
                <ul className='flex gap-10 max-lg:gap-10 font-semibold text-lg bg-white/50 shadow-[2px_2px_10px_rgba(0,0,0,0.8)] backdrop-blur-lg rounded-full px-7 py-3 max-md:hidden'>
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
                        <li className='cursor-pointer hover:text-main-color transition-colors ease-in-out'>Contact</li>
                    </Link>
                </ul>
            </nav>
    </>
  );
};

export default Navbar;
