import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Team = () => {
  return (
    <div className="pt-20">
      <div className='bg-[#0b0b0b] lg:py-28 md:py-28 py-24 relative'>
        <img style={{
          filter: 'invert(0.2)'
        }} src="./images/wave.webp" alt="wave" className='lg:h-26 md:h-20 h-12 absolute left-0 bottom-5' />

        <div className='flex items-center justify-center text-center gap-3 flex-col mb-16'>
          <img src="./images/wave-pattern.webp" size={17} alt="wave" />
          <p className='lg:text-5xl md:text-4xl text-3xl font-medium'>Our <span className='text-purple-500'>Team</span></p>
        </div>

        <img style={{
          filter: 'invert(0.2)'
        }} src="./images/wave.webp" alt="wave" className='lg:h-26 md:h-20 h-12 absolute right-0 top-4' />
      </div>

      <div className='my-24 mb-32'>
        <div className='flex flex-wrap px-10 justify-evenly gap-10 gap-y-20 items-center py-18'>
          <div data-aos="fade-up" className='flex flex-col items-center gap-3'>
            <img src="./images/cat.jpg" className='lg:h-72 md:h-52 h-52 rounded-full' alt="team1" />
            <p className='text-3xl font-medium hover:text-purple-500'>John Doe</p>
            <p className='text-gray-400 font-medium'>CEO</p>
            <div className='flex items-center gap-3'>
              <a href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                <FaGithub size={22} />
              </a>
              <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                <FaInstagram size={22} />
              </a>
              <a href="https://twitter.com/" target='_blank' rel="noreferrer">
                <FaTwitter size={22} />
              </a>
              <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer">
                <FaLinkedinIn size={22} />
              </a>
            </div>
          </div>

          <div data-aos="fade-up" className='flex flex-col items-center gap-3'>
            <img src="./images/cat.jpg" className='lg:h-72 md:h-52 h-52 rounded-full' alt="team1" />
            <p className='text-3xl font-medium hover:text-purple-500'>John Doe</p>
            <p className='text-gray-400 font-medium'>CEO</p>
            <div className='flex items-center gap-3'>
              <a href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                <FaGithub size={22} />
              </a>
              <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                <FaInstagram size={22} />
              </a>
              <a href="https://twitter.com/" target='_blank' rel="noreferrer">
                <FaTwitter size={22} />
              </a>
              <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer">
                <FaLinkedinIn size={22} />
              </a>
            </div>
          </div>

          <div data-aos="fade-up" className='flex flex-col items-center gap-3'>
            <img src="./images/cat.jpg" className='lg:h-72 md:h-52 h-52 rounded-full' alt="team1" />
            <p className='text-3xl font-medium hover:text-purple-500'>John Doe</p>
            <p className='text-gray-400 font-medium'>CEO</p>
            <div className='flex items-center gap-3'>
              <a href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                <FaGithub size={22} />
              </a>
              <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                <FaInstagram size={22} />
              </a>
              <a href="https://twitter.com/" target='_blank' rel="noreferrer">
                <FaTwitter size={22} />
              </a>
              <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer">
                <FaLinkedinIn size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team