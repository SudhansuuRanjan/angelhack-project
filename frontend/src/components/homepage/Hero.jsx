import { Parallax, ParallaxBanner } from "react-scroll-parallax"

const Hero = () => {
    return (
        <ParallaxBanner
            layers={[
                { image: '/images/bg.png', speed: -20 },
            ]}
            className="lg:aspect-[2/1] md:aspect-[4/3] aspect-[2/3]"
        >
            <div className="absolute inset-0">
                <div className='min-h-screen  flex lg:flex-row md:flex-row flex-col pt-10 relative px-6'>
                    <div className='flex flex-col justify-center'>
                        <h1 style={{
                            writingMode: "vertical-rl", textOrientation: "mixed"
                        }} className="lg:text-[7rem] md:text-[6rem] text-[0rem] text-transparent font-bold font-outline-2 lg:rotate-180 md:rotate-180 -rotate-90">
                            ANGELFACE
                        </h1>
                        <h1 className="lg:text-[0rem] md:text-[0rem] text-[4rem] text-transparent font-bold font-outline-2">
                            ANGELFACE
                        </h1>
                    </div>
                    <div className='z-20'>
                        <img src="/images/stars.png" alt="start" className='h-32' />
                        <Parallax speed={-15}>
                            <img src="/images/astro2.png" alt="space ship" className='lg:h-[13rem] h-[10rem] absolute lg:right-[10rem] md:right-[5rem] right-2 top-[-12rem] z-0' />
                        </Parallax>
                        <h1 className='lg:text-8xl md:text-6xl text-5xl font-medium mt-4'>AngelFace</h1>
                        <h1 className='lg:text-8xl md:text-6xl text-5xl mt-2 text-purple-500 font-medium'>Monthly Challenge</h1>
                        <p className='text-lg my-5'>NEW WAY TO <span className='text-purple-500'>LEARN</span> SKILLS</p>

                        <p className='text-lg my-10 max-w-md'>
                            Fun Filled Competitions to tickle your Coding brain and win exclusive prizes by AngelHack.
                        </p>

                        <div className='flex gap-5'>
                            <button className='bg-purple-600 px-4 py-1.5 rounded-md text-sm'>MINT NOW 😎</button>
                            <button className='border px-4 py-1.5 text-sm rounded-md'>JOIN US 👁️</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <img style={{
                            filter: 'invert(0.1)'
                        }} src="./images/wave.webp" alt="wave" className='h-24 absolute right-0 top-36' />
                        <Parallax
                            translateX={['-100px', '50px']}
                            translateY={['-0px', '-150px']}
                            easing="easeInQuad">
                            <img src="/images/ship.png" alt="space ship" className=' lg:h-40 md:h-32 h-28 lg:top-[55%] md:top-[55%] z-0' />
                        </Parallax>
                    </div>
                </div>
            </div>
        </ParallaxBanner>
    )
}

export default Hero