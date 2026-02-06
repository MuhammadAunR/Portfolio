import React from 'react'

const Popup = ({ type, close }) => {
    let message = ""
    if (type==='Preview'){
        message = "Sorry 😕, This website is temporarily unavailable. Please check back shortly. Thanks"
    } else{
        message = "Sorry 😕, This project was developed under private constraints, so the codebase is not open for public viewing. Thank you for your consideration."
    }
    return (
        <>
            <div className='fixed inset-0 bg-black/30 flex items-center justify-center z-50 backdrop-blur-lg'>
                <div className='bg-white w-125 h-fit py-10 px-10 rounded-2xl relative'>
                    <span onClick={close} className='absolute top-2 right-2 transform hover:rotate-180 hover:text-gray-600 transition-all cursor-pointer'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                    </span>
                    <div className='flex flex-col justify-center gap-5 items-center '>
                        <h2 className='uppercase text-red-500'>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17z"></path><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m250.26 195.39 5.74 122 5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95z"></path><path d="M256 397.25a20 20 0 1 1 20-20 20 20 0 0 1-20 20z"></path></svg>
                        </h2>
                        <p className='text-lg text-gray-600 text-center'>{message}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup
