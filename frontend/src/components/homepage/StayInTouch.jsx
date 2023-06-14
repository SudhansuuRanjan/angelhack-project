
const StayInTouch = () => {
  return (
    <div className="flex gap-5 gap-y-16 lg:flex-row md:flex-row flex-col justify-evenly pt-32 w-full">
      <div data-aos="fade-up" className="flex flex-col font-medium gap-3 m-auto lg:w-auto md:w-auto w-[90%]">
        <h3 className="lg:text-7xl md:text-5xl text-5xl">
          Let&apos;s Stay In </h3> <h3 className="flex text-purple-500 gap-3 lg:text-7xl md:text-5xl text-5xl"><span>Touch</span><img className="lg:flex md:flex hidden" src="./images/bird.webp" alt="bird" /></h3>
        <button className='bg-purple-600 w-fit hover:bg-purple-700 font-medium px-10 py-3 rounded-xl mt-6'>Explore 😎</button>
      </div>
      <div className="lg:max-w-xl md:max-w-lg w-[90%] m-auto flex flex-col items-end lg:text-right md:text-right text-left">
        <img data-aos="fade-up" src="./images/stayintouch.png" className="rounded-lg" alt="statyintouch" />
        <h2 data-aos="fade-up" className="text-gray-300 text-2xl font-medium my-6">
          AngelFace Team, National Institute of Technology Patna, Bihar, India
        </h2>
        <h4 data-aos="fade-up" className="text-gray-500">
          contact@angelface.com
        </h4>
        <h4 data-aos="fade-up" className="text-gray-500 mt-3">
          (180) 000-0000
        </h4>
      </div>
    </div>
  )
}

export default StayInTouch