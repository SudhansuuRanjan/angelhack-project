import { ParallaxBanner} from "react-scroll-parallax"

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
                            }} className="lg:text-[10rem] md:text-[8rem] text-[0rem] text-transparent font-bold font-outline-2 lg:rotate-180 md:rotate-180 -rotate-90">
                                ELOQUI
                            </h1>
                            <h1 className="lg:text-[0rem] md:text-[0rem] text-[5rem] text-transparent font-bold font-outline-2">
                                ELOQUI
                            </h1>
                        </div>
                        <div className='z-20'>
                            <img src="/images/stars.png" alt="start" className='h-32' />
                            <img src="/images/astro2.png" alt="space ship" className='lg:h-[13rem] h-[10rem] absolute lg:right-[16rem] md:right-[12rem] right-2 top-5 z-0' />
                            <h1 className='lg:text-8xl md:text-6xl text-5xl font-medium mt-4'>ELOQUI</h1>
                            <h1 className='lg:text-8xl md:text-6xl text-5xl mt-2 text-purple-500 font-medium'>Brilliant Creativity</h1>
                            <p className='text-lg my-5'>NEW JOURNEY WITH <span className='text-purple-500'>$2.99</span> NFTs</p>

                            <p className='text-lg my-10 max-w-md'>
                                First NFT utility project for Developers and Creators
                                based on the FileCoin Smart Chain.
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
                            <img src="/images/ship.png" alt="space ship" className=' lg:h-44 md:h-32 h-28 absolute right-5 lg:top-[55%] md:top-[55%] z-0' />
                        </div>
                    </div>
                </div>
            </ParallaxBanner>
    )
}

export default Hero