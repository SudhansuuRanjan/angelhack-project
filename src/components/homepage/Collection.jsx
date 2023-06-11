import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import "swiper/css";

const Collection = () => {
    const swiperRef = useRef();


    return (
        <div>
            <div className="flex lg:flex-row md:flex-row flex-col items-center justify-evenly gap-16 py-16 px-10">
                <div className="max-w-lg">
                    <img src="./images/wave-pattern.webp" className='h-7' alt="wave" />
                    <h3 className='text-4xl font-semibold underline-offset-8 mt-4'>
                       Check Out Our <br/><span className=' text-purple-500'>Ghost Art Collections</span>
                    </h3>
                    <p className="text-gray-500 mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur mollitia inventore amet!
                    </p>
                    <button className='bg-purple-600 px-8 py-2 rounded-md text-sm mt-6'>View More 😎</button>
                </div>
                <div className="max-w-lg">
                    <img src="./images/ghost1.webp" alt="ghost" className="rounded-lg"/>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <Swiper modules={[Navigation, Autoplay]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={(cur) => (console.log(cur.activeIndex))}
                    loop={true}
                    centeredSlides={true}
                    speed={800}
                    autoplay={{
                        delay: 2000,
                    }}
                    className="py-10 px-16 mySwiper w-[70rem] lg:w-[85rem] md:w[85rem] overflow-hidden"
                    watchSlidesProgress={true}
                >
                    <SwiperSlide className="">
                        <div className="bg-[url('./images/frame-16.jpg')] bg-center bg-cover bg-no-repeat rounded h-[30rem] w-full p-4">
                            <div className="p-2 opacity-0 hover:opacity-100 bg-white rounded w-full flex h-full text-black flex-col items-start justify-end gap-2 transition-all ease-in-out delay-[30ms]">
                                <img src="./images/wave-pattern.webp" className="h-7" alt="wave" />
                                <h3 className="text-2xl font-semibold text-gray-900">Hansel & Gretal</h3>
                                <p className="text-lg text-gray-800 font-medium">Meme</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="bg-[url('./images/frame-16.jpg')] bg-center bg-cover bg-no-repeat rounded h-[30rem] w-full p-4">
                            <div className="p-2 opacity-0 hover:opacity-100 bg-white rounded w-full flex h-full text-black flex-col items-start justify-end gap-2 transition-all ease-in-out delay-[30ms]">
                                <img src="./images/wave-pattern.webp" className="h-7" alt="wave" />
                                <h3 className="text-2xl font-semibold text-gray-900">Hansel & Gretal</h3>
                                <p className="text-lg text-gray-800 font-medium">Meme</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="bg-[url('./images/frame-16.jpg')] bg-center bg-cover bg-no-repeat rounded h-[30rem] w-full p-4">
                            <div className="p-2 opacity-0 hover:opacity-100 bg-white rounded w-full flex h-full text-black flex-col items-start justify-end gap-2 transition-all ease-in-out delay-[30ms]">
                                <img src="./images/wave-pattern.webp" className="h-7" alt="wave" />
                                <h3 className="text-2xl font-semibold text-gray-900">Hansel & Gretal</h3>
                                <p className="text-lg text-gray-800 font-medium">Meme</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="bg-[url('./images/frame-16.jpg')] bg-center bg-cover bg-no-repeat rounded h-[30rem] w-full p-4">
                            <div className="p-2 opacity-0 hover:opacity-100 bg-white rounded w-full flex h-full text-black flex-col items-start justify-end gap-2 transition-all ease-in-out delay-[30ms]">
                                <img src="./images/wave-pattern.webp" className="h-7" alt="wave" />
                                <h3 className="text-2xl font-semibold text-gray-900">Hansel & Gretal</h3>
                                <p className="text-lg text-gray-800 font-medium">Meme</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="bg-[url('./images/frame-16.jpg')] bg-center bg-cover bg-no-repeat rounded h-[30rem] w-full p-4">
                            <div className="p-2 opacity-0 hover:opacity-100 bg-white rounded w-full flex h-full text-black flex-col items-start justify-end gap-2 transition-all ease-in-out delay-[30ms]">
                                <img src="./images/wave-pattern.webp" className="h-7" alt="wave" />
                                <h3 className="text-2xl font-semibold text-gray-900">Hansel & Gretal</h3>
                                <p className="text-lg text-gray-800 font-medium">Meme</p>
                            </div>
                        </div>
                    </SwiperSlide>
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

export default Collection