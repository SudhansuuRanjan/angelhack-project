import React, { useEffect, useState } from "react"


const FAQ = () => {

    const faqs = [
        {
            question: "What’s your challenge expectations?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos doloremque cum voluptate deleniti qui optio illo quod repel.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos doloremque cum voluptate deleniti qui optio illo quod repel.",
            id: "1"
        },
        {
            question: "How was your challenge experience",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos doloremque cum voluptate deleniti qui optio illo quod repel.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos doloremque cum voluptate deleniti qui optio illo quod repel.",
            id: "2"
        },
        {
            question: "What is your expected result?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos doloremque cum voluptate deleniti qui optio illo quod repel.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos doloremque cum voluptate deleniti qui optio illo quod repel.",
            id: "3"
        },
        {
            question: "What are the difficulties you faced?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos doloremque cum voluptate deleniti qui optio illo quod repel.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos doloremque cum voluptate deleniti qui optio illo quod repel.",
            id: "4"
        }
    ]

    return (
        <div className="flex lg:flex-row md:flex-row flex-col justify-evenly lg:py-32 md:py-28 py-16  gap-5 px-5">
            <div>
                <img data-aos="fade-up"  src="./images/wave-pattern.webp" className='h-7' alt="wave" />
                <h3 data-aos="fade-up"  className='lg:text-5xl md:text-4xl text-3xl font-semibold underline-offset-8 mt-4'>
                    What
                </h3>
                <h3 data-aos="fade-up"  className='lg:text-5xl md:text-4xl text-3xl font-semibold underline-offset-8 mt-4'>
                    <span className=' text-purple-500'>Frequently Asked</span>
                </h3>
                <h3 data-aos="fade-up"  className='lg:text-5xl md:text-4xl text-3xl font-semibold underline-offset-8 mt-4'>
                    Questions
                </h3>
                <p data-aos="fade-up"  className='text-gray-500 lg:max-w-sm md:max-w-xs w-[90%] my-10'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos doloremque cum voluptate deleniti qui optio illo quod repel.
                </p>
                <img data-aos="fade-up"  className="lg:max-w-sm md:max-w-xs w-[70%] m-auto" src="./images/faq.webp" alt="faqs" />
            </div>

            <div className="lg:w-[50%] md:w-[50%] w-full">
                <div className='flex flex-col items-center justify-center my-16'>
                    {
                        faqs.map((faq) => (
                            <div className="w-full" key={faq.id}>
                                <FaqCard data={faq} />
                                {
                                    faq.id < faqs.length && <hr data-aos="fade-up" className='w-full border-gray-700 my-5' />
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQ


const FaqCard = ({ data }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (data.id === "1") {
            setShow(true);
        }
    }, [])

    return (
        <div data-aos="fade-up" className='flex transition-all delay-[15ms] ease-in-out lg:py-5 md:py-5 py-3 gap-0 flex-col'>
            <div onClick={() => setShow((show) => !show)} className='flex justify-between items-center cursor-pointer'>
                <h3 className='font-semibold lg:text-2xl md:text-xl text-lg pr-5'>
                    <span className="text-purple-500 mr-5">0{data.id}</span> {data.question}
                </h3>
                <button className={`transition-all delay-75 ease-in-out ${show && '-rotate-180'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            <div className={`overflow-hidden transition-all delay-[15ms] ease-in-out ${show ? 'h-fit mt-4 my-2' : 'h-0'}`}>
                <p className='text-gray-400 lg:text-lg md:text-lg text-base w-[95%]'>
                    {
                        data.answer
                    }
                </p>
            </div>
        </div>
    )
}