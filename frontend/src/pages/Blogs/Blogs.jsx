import React from 'react'

const Blogs = () => {
  return (
    <div className="pt-20">
      <div className='bg-[#0b0b0b] lg:py-28 md:py-28 py-24 relative'>
        <img style={{
          filter: 'invert(0.2)'
        }} src="./images/wave.webp" alt="wave" className='lg:h-26 md:h-20 h-12 absolute left-0 bottom-5' />

        <div className='flex items-center justify-center text-center gap-3 flex-col mb-16'>
          <img src="./images/wave-pattern.webp" size={17} alt="wave" />
          <p className='lg:text-5xl md:text-4xl text-3xl font-medium'>Our <span className='text-purple-500'>Blogs</span></p>
        </div>

        <img style={{
          filter: 'invert(0.2)'
        }} src="./images/wave.webp" alt="wave" className='lg:h-26 md:h-20 h-12 absolute right-0 top-4' />
      </div>
    </div>
  )
}

export default Blogs