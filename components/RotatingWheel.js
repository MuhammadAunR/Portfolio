import React from 'react'

const RotatingWheel = () => {

    const text = "MERN STACK • CODE • FULL STACK • ";
    return (
        <>
            <div className=" w-52 h-52 rounded-full bg-white flex items-center justify-center">

                <div className='w-52 h-52 bg-white rounded-full text-6xl flex justify-center items-center'>👨‍💻
                    <div className="absolute inset-0 animate-spin-slow">
                        {text.split("").map((char, i) => (
                            <span
                                key={i}
                                className="absolute left-1/2 top-1/2 text-lg font-medium"
                                style={{
                                    transform: `
                                        rotate(${(360 / text.length) * i}deg)
                                        translateY(-96px)
                                        `,
                                    transformOrigin: "0 0",
                                }}>
                                {char}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RotatingWheel
