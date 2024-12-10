import React from 'react'
import {HERO_CONTENT} from "../constants"
import profilepic from '../assets/profile_1.jpg'
import {motion} from 'framer-motion'

const container = (delay) =>({
    hidden: {x:-100, opacity: 0},
    visible: {
        x:0, 
        opacity:1,
        transition:{duration: 0.5, delay: delay},
    },
})

const handleClick = () => {
    // Replace the URL below with the desired URL
    window.open("https://drive.google.com/file/d/1UR1QfzvJGDyHQZfdKz4wzwgtfE7GLDK6/view?usp=sharing", "_blank");
};

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 
                         variants={container(0)}
                         initial="hidden"
                         whileInView="visible"
                         className='pb-16 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-8xl'>
                            Sabbir Musfique
                        </motion.h1>
                        <motion.span 
                            variants={container(0.5)}
                            initial="hidden"
                            whileInView="visible"
                         className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                            Full Stack Developer
                        </motion.span>
                        <motion.p 
                            variants={container(1)}
                            initial="hidden"
                            whileInView="visible"
                         className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                        <button
                            onClick={handleClick}
                            
                            style={{
                                background: "linear-gradient(90deg, #9b59b6, #8e44ad)",
                                color: "#fff",
                                fontSize: "16px",
                                fontWeight: "bold",
                                padding: "12px 24px",
                                border: "none",
                                borderRadius: "25px",
                                cursor: "pointer",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                transition: "transform 0.2s, box-shadow 0.2s",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.boxShadow = "0px 6px 8px rgba(0, 0, 0, 0.2)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)")
                            }
                            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
                            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        >
                            View Resume
                        </button>
                        {/* <button type="button" onClick={}>Resume</button> */}
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-between'>
                        <motion.img 
                        initial={{x:100, opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration:1, delay:.7}}
                         className=' rounded-2xl' src={profilepic} alt="Sabbir Musfique" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hero