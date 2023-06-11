import { Parallax } from "react-scroll-parallax"
import { useMemo, useState, useEffect } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Timer = () => {
    const selectedDate = "June, 30, 2023";
    const parsedDeadline = useMemo(
        () => Date.parse(selectedDate),
        [selectedDate]
    );
    const [time, setTime] = useState(parsedDeadline - Date.now());

    useEffect(() => {
        const interval = setInterval(
            () => setTime(parsedDeadline - Date.now()),
            1000
        );

        return () => clearInterval(interval);
    }, [parsedDeadline, selectedDate]);

    return (
        <div>
            <div className='lg:text-6xl md:text-5xl text-3xl font-medium flex flex-col -gap-10 items-center justify-center w-full'>
                <div className='flex justify-evenly w-full'>
                    <div className='text-purple-500'>
                        Minting
                    </div>
                    <Parallax
                        speed={-5}
                        easing="easeInQuad"
                    >
                        <img src="./images/robot.png" className='lg:h-32 md:h-32 h-20' alt="robot" />
                    </Parallax>
                </div>
                <div className='flex items-center'>
                    <Parallax
                        translateX={['0px', '-100px']}
                        translateY={['0px', '100px']}
                        scale={[1, 1.5]}
                        easing="easeInQuad"
                    >
                        <img src="./images/rocket.webp" className='h-32' alt="rocket" />
                    </Parallax>
                    <div>
                        Start Coming Soon
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center lg:gap-8 md:gap-7 gap-2 my-16">
                {Object.entries({
                    DAYS: time / DAY < 0 ? 0 : time / DAY,
                    HOURS: (time / HOUR) % 24 < 0 ? 0 : (time / HOUR) % 24,
                    MINUTES: (time / MINUTE) % 60 < 0 ? 0 : (time / MINUTE) % 60,
                    SECONDS: (time / SECOND) % 60 < 0 ? 0 : (time / SECOND) % 60,
                }).map(([label, value], idx) => (
                    <div key={label} className="flex lg:gap-5 md:gap-5 gap-2">
                        <div className="text-center">
                            <h2 className={`lg:text-[7rem] md:text-[5rem] text-[3rem] text-transparent font-bold  ${idx === 0 ? "font-outline-4-yellow":"font-outline-4-purple"}`}>
                                {`${Math.floor(value)}`.padStart(2, "0")}
                            </h2>
                            <div className="font-medium lg:text-xl md:text-xl text-base">
                                {label}
                            </div>
                        </div>
                        {
                            // if not last element
                            idx !== Object.keys({
                                DAYS: time / DAY,
                                HOURS: (time / HOUR) % 24,
                                MINUTES: (time / MINUTE) % 60,
                                SECONDS: (time / SECOND) % 60,
                            }).length - 1 && (
                                <div className="flex lg:gap-8 md:gap-7 gap-2 flex-col items-center justify-center">
                                    <div className="w-2 h-2 bg-gray-300"></div>
                                    <div className="w-2 h-2 bg-gray-300"></div>
                                </div>
                            )
                        }
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Timer