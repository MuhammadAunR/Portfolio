'use client'
import { ArrowUpFromDot } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useState } from 'react'

const ScrollToTopBtn = () => {

    const [showButton, setShowButton] = useState(false)

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0 })
    }

    useEffect(() => {
        function handleScrollButton() {
            setShowButton(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScrollButton)
        return () => window.removeEventListener('scroll', handleScrollButton)
    }, [])

    return (
        <>
            <AnimatePresence>
                {showButton &&
                    <motion.button
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: [100, -20, 10, 0], }}
                        exit={{ opacity: 0, }}
                        transition={{ duration: 0.6, }}
                        onClick={handleScrollToTop}
                        className='fixed bottom-7 right-7 z-100 flex flex-col gap-5 overflow-hidden bg-main-color p-2 rounded-full cursor-pointer w-10 h-10 hover:h-35 transition-all duration-300 ease-in-out group'>
                        <span className='shrink-0'>
                            <ArrowUpFromDot color='white' />
                        </span>
                        <span className='text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center uppercase'>
                            <span>Go</span>
                            <span>To</span>
                            <span>Top</span>
                        </span>
                    </motion.button>
                }
            </AnimatePresence>
        </>
    )
}

export default ScrollToTopBtn