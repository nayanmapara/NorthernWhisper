import React from 'react'

function Hero() {
  return (
    <div className="space-y-1">
        <h2 className="z-10 text-3xl font-bold text-center text-transparent duration-1000 bg-white cursor-default text-stroke animate-title sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text">
          Join the waitlist for my
        </h2>
        <h1 className="z-10 text-4xl font-bold text-center text-transparent duration-1000 bg-white bg-gradient-to-r from-blue-50 to-blue-500 animate-fade-in-3 cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text">
          Newsletter
        </h1>
      </div>
  )
}

export default Hero