import Marquee from "react-fast-marquee";

function Partners() {
    return (
        <div className="bg-[#0b0b0b] py-16 ">
            <img style={{
                filter: 'invert(0.2)'
            }} src="./images/wave.webp" alt="wave" className='lg:h-26 md:h-20 h-16' />

            <div className='flex items-center justify-center text-center gap-3 flex-col mb-24'>
                <img src="./images/wave-pattern.webp" size={22} alt="wave" />
                <p className='text-4xl font-medium'>Our <span className='text-purple-500'>Partners</span></p>
            </div>

            <Marquee autoFill={true} className="mb-12" pauseOnHover={true}>
                <div className="mx-10">
                    <img src="https://www.react-fast-marquee.com/static/media/lucasfilm.ef28c5a6.png" className="h-12" alt="logo" />
                </div >
                <div className="mx-10">
                    <img src="https://www.react-fast-marquee.com/static/media/dell.09332c44.png" className="h-12" alt="logo" />
                </div>
                <div className="mx-10">
                    <img src="https://www.react-fast-marquee.com/static/media/boeing.3037b0a6.png" className="h-12" alt="logo" />
                </div>
                <div className="mx-10">
                    <img src="https://www.react-fast-marquee.com/static/media/microsoft.4a9a93f0.png" className="h-12" alt="logo" />
                </div>
                <div className="mx-10">
                    <img src="https://www.react-fast-marquee.com/static/media/ibm.bcec6b9a.png" className="h-12" alt="logo" />
                </div>
            </Marquee>

            <Marquee direction="right" autoFill={true} pauseOnHover={true}>
                <div className="mx-10">
                    <img src="https://www.react-fast-marquee.com/static/media/nasa.3bf5af29.png" className="h-12" alt="logo" />
                </div >
                <div className="mx-10">
                    <img src="https://www.react-fast-marquee.com/static/media/mit.1af911d7.png" className="h-12" alt="logo" />
                </div>
                <div className="mx-10">
                    <img src="https://www.react-fast-marquee.com/static/media/us_navy.331c47b8.png" className="h-12" alt="logo" />
                </div>
                <div className="mx-10">
                    <img src="https://www.react-fast-marquee.com/static/media/pennsylvania.8c9f4108.png" className="h-12" alt="logo" />
                </div>
                <div className="mx-10">
                    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" className="h-12" alt="logo" />
                </div>
            </Marquee>

        </div>
    )
}

export default Partners
