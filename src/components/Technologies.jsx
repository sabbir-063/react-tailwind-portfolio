import React from 'react'
import { RiFirebaseLine, RiFlutterLine, RiNodejsLine, RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiTensorflow } from 'react-icons/si'
import { animate, motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}
            className='my-20 text-center text-4xl'>Technologies</motion.h1>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            className='flex flex-wrap items-center justify-between gap-4'>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-neutral-800'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-neutral-800'>
                    <RiNodejsLine className='text-7xl text-green-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-neutral-800'>
                    <RiFlutterLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-neutral-800'>
                    <RiFirebaseLine className='text-7xl text-yellow-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-neutral-800'>
                    <SiMongodb className='text-7xl text-green-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-neutral-800'>
                    <SiExpress className='text-7xl text-green-600' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-neutral-800'>
                    <SiTensorflow className='text-7xl text-yellow-300' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies