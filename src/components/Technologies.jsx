import React from 'react'
import { RiFirebaseLine, RiFlutterLine, RiNodejsLine, RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiTensorflow } from 'react-icons/si'

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-between gap-4'>
            <div className='rounded-2xl border-neutral-800'>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </div>
            <div className='rounded-2xl border-neutral-800'>
                <RiNodejsLine className='text-7xl text-green-500' />
            </div>
            <div className='rounded-2xl border-neutral-800'>
                <RiFlutterLine className='text-7xl text-cyan-400' />
            </div>
            <div className='rounded-2xl border-neutral-800'>
                <RiFirebaseLine className='text-7xl text-yellow-500' />
            </div>
            <div className='rounded-2xl border-neutral-800'>
                <SiMongodb className='text-7xl text-green-400' />
            </div>
            <div className='rounded-2xl border-neutral-800'>
                <SiExpress className='text-7xl text-green-600' />
            </div>
            <div className='rounded-2xl border-neutral-800'>
                <SiTensorflow className='text-7xl text-yellow-300' />
            </div>
        </div>
    </div>
  )
}

export default Technologies