import { Parallax } from "react-scroll-parallax"
import CountUp from 'react-countup';

const Highlights = () => {
    return (
        <div className='bg-[#0b0b0b] relative py-10'>
            <img style={{
                filter: 'invert(0.2)'
            }} src="./images/wave.webp" alt="wave" className='lg:h-22 md: h-18 h-12' />
            <div className='flex flex-wrap justify-evenly lg:gap-10 md:gap-10 gap-5 gap-y-16 py-16'>
                <div className='flex gap-2'>
                    <div className=''>
                        <Parallax
                            rotate={[-180, 0]}
                            easing="easeInQuad"
                        >
                            <img src="./images/staranim.png" className='lg:h-20 md:h-20 h-16' alt="star" />
                        </Parallax>
                    </div>
                    <div className='text-center'>
                        <p className='lg:text-5xl text-4xl font-bold lg:w-32 md:w-32 w-28'><CountUp end={4} enableScrollSpy={true} />+</p>
                        <p className='text-purple-500 lg:text-lg md:text-lg text-base pt-3'>Monthly Challenge</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div className=''>
                        <Parallax
                            rotate={[-180, 0]}
                            easing="easeInQuad"
                        >
                            <img src="./images/staranim.png" className='lg:h-20 md:h-20 h-16' alt="star" />
                        </Parallax>
                    </div>
                    <div className='text-center'>
                        <p className='lg:text-5xl text-4xl font-bold lg:w-32 md:w-32 w-28'><CountUp end={10} enableScrollSpy={true} />+</p>
                        <p className='text-purple-500 lg:text-lg md:text-lg text-base pt-3'>Exciting Themes</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div className=''>
                        <Parallax
                            rotate={[-180, 0]}
                            easing="easeInQuad"
                        >
                            <img src="./images/staranim.png" className='lg:h-20 md:h-20 h-16' alt="star" />
                        </Parallax>
                    </div>
                    <div className='text-center'>
                        <p className='lg:text-5xl text-4xl font-bold lg:w-32 md:w-32 w-28'><CountUp end={150} enableScrollSpy={true} />+</p>
                        <p className='text-purple-500 lg:text-lg md:text-lg text-base pt-3'>Hackers Participated</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div className=''>
                        <Parallax
                            rotate={[-180, 0]}
                            easing="easeInQuad"
                        >
                            <img src="./images/staranim.png" className='lg:h-20 md:h-20 h-16' alt="star" />
                        </Parallax>
                    </div>
                    <div className='text-center'>
                        <p className='lg:text-5xl text-4xl font-bold lg:w-32 md:w-32 w-28'><CountUp end={12} enableScrollSpy={true} />+</p>
                        <p className='text-purple-500 lg:text-lg md:text-lg text-base pt-3'>Challenge Winners</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights