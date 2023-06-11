import { ParallaxBanner } from "react-scroll-parallax"

const Video = () => {
    return (
        <ParallaxBanner
            layers={[
                { image: '/images/bg.png', speed: -20 },
            ]}
            className="lg:aspect-[2/1] md:aspect-[4/3] aspect-[5/6]"
        >
            <div className="absolute inset-0 flex items-center justify-center">
                    <iframe className="lg:h-[26rem] md:h-[24rem] h-[16rem] lg:w-[48rem] md:w-[44rem] w-[90%]" width="1520" height="545" src="https://www.youtube.com/embed/qt1equGhkQE" title="Otherside Trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </ParallaxBanner>
    )
}

export default Video