import { Link } from 'react-router-dom'



const Footer = () => {
  const date = new Date;
  const year = date.getFullYear();
  return (
    <div className="bg-[#0b0b0b] text-sm w-[100%] mt-[10rem]">

      <div className="m-[auto] pb-3 pt-5 text-gray-600 font-medium text-sm flex flex-col md:flex-row lg:flex-row justify-between items-center w-[90%]">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" className='h-14 mb-2 w-auto' />
          </Link>

          <div className='flex gap-6 text-base text-gray-500'>
            <Link to="/team">
              <div>Our Team</div>
            </Link>
            <Link to="/blog">
              <div>Blog</div>
            </Link>
            <Link href="">
              <div>
                Contact Us
              </div>
            </Link>
          </div>
      </div>

      <div className="w-[90%] m-[auto] bg-gray-800 h-[1px]"></div>
      <div className="m-[auto] pb-8 pt-5 text-gray-600 font-medium text-sm flex flex-col md:flex-row lg:flex-row justify-between items-center w-[90%]">
        <p>
          © {year} AngelFace . All Rights Reserved.
        </p>
        <p>
          Designed & Developed by <a style={{ textDecoration: "none" }} className="font-medium text-blue-500" href="#">
            <span className='text-purple-500'>Sudhanshu Ranjan</span>
          </a>.
        </p>
      </div>
    </div>
  )
}

export default Footer
