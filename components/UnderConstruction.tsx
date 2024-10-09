'use client'
import React from 'react'
import { Vortex } from './ui/vortex'

const UnderConstruction = () => {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
    <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
      <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
        Worth Watching
      </h2>
      <p className="text-white text-xl md:text-2xl max-w-xl mt-6 text-center">
        This site is under construction...
      </p>
      <p className="text-white text-xl md:text-xl max-w-xl mt-6 text-center">
        Check back later. Thank you
      </p>
    </Vortex>
  </div>
  )
}

export default UnderConstruction