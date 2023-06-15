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

            <Marquee autoFill={true} className="lg:mb-12 md:mb-10 mb-6" pauseOnHover={true}>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chainlink_Logo_Blue.svg/2560px-Chainlink_Logo_Blue.svg.png" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div >
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://www.polkadotglobalseries.com/wp-content/uploads/2022/04/AngelHack-Logo-White-Full-1024x190.png" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://www.investopedia.com/thmb/lUK80yDMKFjr0UGTFXjpBlAmtqY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Metamask_logo-aca547fe6081482085662b03e2235f98.jpg" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://www.rainbowkit.com/rainbow.svg" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://mma.prnewswire.com/media/1055937/Alchemy_Logo.jpg?p=facebook" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://www.nitp.ac.in/static/logo512-579d034908ae89b5e0243d1274937d5d.png" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                 <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://tesla-nitp.vercel.app/images/logo.svg" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
            </Marquee>

            <Marquee direction="right" autoFill={true} pauseOnHover={true}>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chainlink_Logo_Blue.svg/2560px-Chainlink_Logo_Blue.svg.png" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div >
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://www.polkadotglobalseries.com/wp-content/uploads/2022/04/AngelHack-Logo-White-Full-1024x190.png" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://www.investopedia.com/thmb/lUK80yDMKFjr0UGTFXjpBlAmtqY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Metamask_logo-aca547fe6081482085662b03e2235f98.jpg" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://www.rainbowkit.com/rainbow.svg" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://mma.prnewswire.com/media/1055937/Alchemy_Logo.jpg?p=facebook" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://www.nitp.ac.in/static/logo512-579d034908ae89b5e0243d1274937d5d.png" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://tesla-nitp.vercel.app/images/logo.svg" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
            </Marquee>

        </div>
    )
}

export default Partners
