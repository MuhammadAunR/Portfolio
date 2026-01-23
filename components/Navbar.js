import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between px-12 py-5 bg-white shadow-xl mb-14'>
                <div>
                    <h1 className='font-semibold text-3xl'>Muhammad Aun</h1>
                </div>
                <ul className='flex gap-15 font-semibold text-xl'>
                    <li className='cursor-pointer hover:text-main-color transition-colors ease-in-out'>Home</li>
                    <li className='cursor-pointer hover:text-main-color transition-colors ease-in-out'>About</li>
                    <li className='cursor-pointer hover:text-main-color transition-colors ease-in-out'>Projects</li>
                    <li className='cursor-pointer hover:text-main-color transition-colors ease-in-out'>Contacts</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
