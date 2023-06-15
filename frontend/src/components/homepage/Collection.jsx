import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import "swiper/css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../pages/Dashboard/Dashboard.css'
import { Link } from "react-router-dom";

const Collection = () => {
    const swiperRef = useRef();
    const [nfts, setNFTs] = useState([]);

    // get nft metadata 
    const getNFTMetadata = async () => {
        const promises = [];
        for (let i = 1; i <= 50; i++) {
            promises.push(axios.get(`https://aqua-fresh-crawdad-962.mypinata.cloud/ipfs/QmWEixotADiiYCkaqqvHf6KA6cjLE9HbHsu5GaXnMXn5Py/${1}.json`))
        }
        const response = await Promise.all(promises);
        const res = response.map((res) => res.data);
        setNFTs(res);
        // console.log(res);
    }

    useEffect(() => {
        getNFTMetadata();
    }, [])

    return (
        <div>
            <div className="flex lg:flex-row md:flex-row flex-col items-center justify-evenly gap-16 py-16 px-10">
                <div className="max-w-lg">
                    <img src="./images/wave-pattern.webp" className='h-7' alt="wave" />
                    <h3 className='text-4xl font-semibold underline-offset-8 mt-4'>
                        AngelHack Past <br /><span className=' text-purple-500'>Monthly Challenge</span>
                    </h3>
                    <p className="text-gray-500 mt-5">
                        AngelHack monthly challenges run for 2 weeks every month, with the aim to equip developers with a new skill every month.
                    </p>
                    <Link to="/collection">
                        <button className='bg-purple-600 px-8 py-2 rounded-md text-sm mt-6'>View More 😎</button>
                    </Link>
                </div>
                <div className="max-w-lg">
                    <img src="./images/ghost1.webp" alt="ghost" className="rounded-lg" />
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <Swiper modules={[Navigation, Autoplay]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={(cur) => {
                        // console.log(cur.activeIndex)
                    }}
                    loop={true}
                    centeredSlides={true}
                    speed={800}
                    autoplay={{
                        delay: 2000,
                    }}
                    className="py-10 px-16 mySwiper w-[70rem] lg:w-[85rem] md:w[85rem] overflow-hidden"
                    watchSlidesProgress={true}
                >
                    {/* <SwiperSlide className="">
                        <div className="bg-[url('./images/stayintouch.png')] bg-center bg-cover bg-no-repeat rounded h-[30rem] w-full p-4">
                            <div className="p-2 opacity-0 hover:opacity-100 bg-white rounded w-full flex h-full text-black flex-col items-start justify-end gap-2 transition-all ease-in-out delay-[30ms]">
                                <img src="./images/wave-pattern.webp" className="h-7" alt="wave" />
                                <h3 className="text-2xl font-semibold text-gray-900">Hansel & Gretal</h3>
                                <p className="text-lg text-gray-800 font-medium">Meme</p>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    {nfts.length === 0 ?
                        <div className='text-2xl font-semibold text-purple-500 my-24'>Loading...</div> :
                        nfts.slice(0,10).map((nft, idx) => (
                            <SwiperSlide>
                                <NFTCard attributes={nft.attributes} image={'https://aqua-fresh-crawdad-962.mypinata.cloud/ipfs/QmWAAuJ2HyAZ4x4YNWb96Eh29zueJxJL2SuaDvBXSLCHre/' + (idx + 1) + '.png'} category="Challenge NFT" name={"#" + (idx + 1) + " AngelFace"} key={idx} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className='flex justify-between items-center  absolute w-[100%] lg:px-16
            px-6 md:px-10 z-[2] top-60'>
                    <button onClick={() => swiperRef.current?.slidePrev()} className='text-3xl text-white bg-gray-800 bg-opacity-50 items-center justify-center flex rounded-full p-4'>
                        <IoChevronBackOutline />
                    </button>
                    <button onClick={() => swiperRef.current?.slideNext()} className='text-3xl text-white bg-gray-800 bg-opacity-50 items-center justify-center flex rounded-full p-4 '>
                        <IoChevronForwardOutline />
                    </button>
                </div>
            </div>
        </div>
    )
}

const NFTCard = ({ name, category, image, attributes }) => {
    return (
        <div className={`nftcard rounded h-[23rem] bg-[#0d0d0d] lg:w-[16rem] md:w-[17rem] sm:w-[17rem] overflow-hidden w-[16rem]`}>
            <div className="p-2 rounded w-full flex h-full text-black flex-col items-start justify-end gap-2 transition-all ease-in-out delay-[30ms]">
                <img src={image} alt={name} className='rounded pt-0' />
                <img src="./images/wave-pattern.webp" className="h-3 mt-2" alt="wave" />
                <h3 className="text-xl font-semibold text-gray-400">{name}</h3>
                <p className="text-lg text-purple-500 font-medium">{category}</p>
            </div>
            <div className='bg-gray-900 attribute-cont text-center p-4'>
                <h2 className='text-lg font-semibold text-yellow-400'>Traits</h2>
                <div>
                    {
                        attributes.map((attribute, idx) => (
                            <div className='flex gap-1' key={idx}>
                                <div className='text-purple-500'>{attribute.trait_type}</div>
                                <div>:</div>
                                <div className='text-white-500'>{attribute.value}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Collection