import { Link } from "react-router-dom";
import {BsDot} from 'react-icons/bs';

const Blogs = () => {

  document.title = 'AngelFace | News';

  const blogData = [{
    title: "Getting Started with Blockchain Development",
    description: "Blockchain technology has gained significant attention in recent years, promising decentralized and secure solutions across various industries. As a developer, diving into blockchain development opens up a world of opportunities to create innovative applications and contribute to the advancement of this groundbreaking technology. In this blog, we will walk you through the essential steps and resources needed to embark on your journey as a blockchain developer.",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-Blockchain-Matters.jpg",
    date: "29th May, 2023",
    author: "Sudhanshu Ranjan",
    authorImage: "https://avatars.githubusercontent.com/u/77230416?v=4",
    minutes: "6",
    tag: "Blockchain",
    id: "getting-started-with-blockchain-development",
  },
  {
    title: "Implementing AI in Power Systems: Revolutionizing the Future of Energy",
    description: "Artificial Intelligence (AI) has emerged as a transformative technology with the potential to revolutionize various industries. One sector that stands to benefit significantly from AI is the power system industry. The integration of AI techniques in power systems enables enhanced efficiency, reliability, and sustainability. In this blog, we will explore the applications and benefits of implementing AI in power systems, highlighting how it is shaping the future of energy.",
    image: "https://www.energy.gov/sites/default/files/styles/full_article_width/public/qtr-ch3-intro.jpg?itok=edlO53_p",
    date: "29th May, 2023",
    author: "Sudhanshu Ranjan",
    authorImage: "https://avatars.githubusercontent.com/u/77230416?v=4",
    minutes: "8",
    tag: "Electrical Engg.",
    id: "ai-in-power-systems",
  },
  {
    title: "Intro to IoT: Exploring the World of Connected Devices",
    description: "The Internet of Things (IoT) has become a buzzword in today's technological landscape. It refers to the vast network of interconnected devices that communicate and share data with each other over the internet. From smart homes and wearable devices to industrial machinery and smart cities, IoT is transforming the way we interact with the world around us. In this blog, we will provide an overview of IoT, its components, and its potential impact on various industries.",
    image: "https://www.offshore-technology.com/wp-content/uploads/sites/20/2021/10/Internet-of-Things-Technology-Trends.jpg",
    date: "29th May, 2023",
    author: "Sudhanshu Ranjan",
    authorImage: "https://avatars.githubusercontent.com/u/77230416?v=4",
    minutes: "5",
    tag: "Electronics",
    id: "intro-to-iot",
  }
  ]

  return (
    <div className="pt-20">
      <div className='bg-[#0b0b0b] lg:py-28 md:py-28 py-24 relative'>
        <img style={{
          filter: 'invert(0.2)'
        }} src="./images/wave.webp" alt="wave" className='lg:h-26 md:h-20 h-12 absolute left-0 bottom-5' />

        <div className='flex items-center justify-center text-center gap-3 flex-col mb-16'>
          <img src="./images/wave-pattern.webp" size={17} alt="wave" />
          <p className='lg:text-5xl md:text-4xl text-3xl font-medium'>Our <span className='text-purple-500'>Blogs</span></p>
        </div>

        <img style={{
          filter: 'invert(0.2)'
        }} src="./images/wave.webp" alt="wave" className='lg:h-26 md:h-20 h-12 absolute right-0 top-4' />
      </div>

      <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
        {blogData.map((data) => (
          <BlogCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}

const BlogCard = ({ data }) => {
    return (
        <Link data-aos="fade-up" style={{textDecoration:'none'}} to={`/blog/${data.id}`} className='rounded-2xl w-[20rem] p-4 hover:scale-[102%] z-0 hover:z-[5]  transition-all delay-[30ms] ease-in-out border border-gray-900 hover:border-gray-800 bg-[#0c0c0c]'>
            <div className='flex items-center gap-1 text-purple-500 text-sm'>
                <p>{data.tag}</p>
                <BsDot className='text-gray-500' />
                <p className='text-gray-500'>{data.minutes} min read</p>
            </div>
            <div className='h-[9rem] rounded flex items-center justify-center overflow-hidden bg-purple-500 my-2'>
                <img loading='lazy' className='w-auto rounded h-[12rem] bg-cover bg-center' src={data.image} alt="about" />
            </div>
            <div>
                <h3 className='text-base font-semibold text-white mt-3'>{data.title}</h3>
                <p className='text-gray-500 text-xs font-medium leading-5 mt-1'>
                    {data.description.substring(0, 100) + "..."}
                </p>
            </div>
            <div className='flex items-center gap-2 mt-2'>
                <img loading='lazy' className='w-8 h-8 rounded-full' src={data.authorImage} alt={data.author} />
                <div className='flex items-center gap-0.5 text-gray-500 text-xs'>
                    <p className='font-semibold text-gray-400 leading-5 mt-1'>{data.author}</p>
                    <BsDot />
                    <p className='font-medium leading-5 mt-1'>{data.date}</p>
                </div>
            </div>
        </Link>
    )
}

export default Blogs