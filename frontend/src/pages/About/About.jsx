import { Parallax } from 'react-scroll-parallax'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Dashboard/Dashboard.css'

const About = () => {

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
    <div className="pt-20">
      <div className='bg-[#0b0b0b] lg:py-28 md:py-28 py-24 relative'>
        <img style={{
          filter: 'invert(0.2)'
        }} src="./images/wave.webp" alt="wave" className='lg:h-26 md:h-20 h-12 absolute left-0 bottom-5' />

        <div className='flex items-center justify-center text-center gap-3 flex-col mb-16'>
          <img src="./images/wave-pattern.webp" size={17} alt="wave" />
          <p className='lg:text-5xl md:text-4xl text-3xl font-medium'><span className='text-purple-500'>About</span> Us</p>
        </div>

        <img style={{
          filter: 'invert(0.2)'
        }} src="./images/wave.webp" alt="wave" className='lg:h-26 md:h-20 h-12 absolute right-0 top-4' />
      </div>


      <div className=' relative py-28'>
        <div className='flex items-center justify-evenly'>
          <Parallax
            translateX={['100px', '-50px']}
            translateY={['0px', '50px']}
            scale={[0.75, 1]}
            easing="easeInQuad"
          >
            <div>
              <img src="./images/rocket.webp" alt="rocket" className='w-44' />
            </div>
          </Parallax>
          <div className='max-w-lg text-center flex items-center justify-center flex-col gap-5'>
            <img src="./images/wave-pattern.webp" className='h-7' alt="wave" />
            <h3 className='text-5xl  font-medium'>
              <span className='text-purple-500'>We</span> are Launching our June Challenge
            </h3>
            <p className='text-gray-500 mt-3'>
              AngelFace, a combination of words AngelHack and Interface, is our submitted solution for AngelHack June Monthly Challenge. AngelFace is a beautiful web3 interface built on React - Vite
            </p>

            <button className='bg-purple-600 hover:bg-purple-700 font-medium px-10 py-3 rounded-xl mt-6'>Explore 😎</button>
          </div>
          <Parallax
            translateX={['-100px', '0px']}
            translateY={['0px', '50px']}
            scale={[0.75, 1]}
            easing="easeInQuad"
          >
            <div>
              <img className='w-44 -rotate-90' src="https://wordpress.iqonic.design/product/wp/ealain/wp-content/uploads/2022/07/shooting-star.webp" alt="meteor" />
            </div>
          </Parallax>
        </div>
      </div>

      <div className='bg-[#0b0b0b] flex lg:flex-row md:flex-row flex-col items-center justify-evenly py-16 lg:gap-5 md:gap-5 gap-16'>
        <div>
          <img src="./images/wave-pattern.webp" className='h-7' alt="wave" />
          <h3 className='text-4xl font-semibold underline-offset-8 mt-4'>
            <span className=' text-purple-500'>June</span> Challenge
          </h3>
          <p className='text-gray-500 max-w-sm my-10'>
            The theme for this month is “Web3 Application Interface / Front-end”. It's time to showcase your skills in building intuitive, interactive, and visually stunning interfaces for web3 applications. The challenge has two tracks - Design & Code
          </p>
          <button className='bg-purple-600 px-8 py-2 rounded-md text-sm'>Explore 😎</button>
        </div>
        <Parallax speed={-5}>
          <div>
            <img src="/images/letter-d.png" className='px-5' alt="profile pic" />
          </div>
        </Parallax>
        <div className='flex flex-col gap-5 font-medium text-lg'>
          <p className='text-yellow-200'>
            ✨ 3D Web3 Interfaces
          </p>
          <p>
            ✨ Web3 Integration
          </p>
          <p>
            ✨ User Experience
          </p>
          <p>
            ✨ Code-elegance.
          </p>
        </div>
      </div>


      <div>
        <div className='lg:py-28 md:py-28 py-24 relative'>
          <img style={{
            filter: 'invert(0.2)'
          }} src="./images/wave.webp" alt="wave" className='lg:h-26 md:h-20 h-12 absolute left-0 bottom-5' />

          <div className='flex items-center justify-center text-center gap-3 flex-col mb-16'>
            <img src="./images/wave-pattern.webp" size={17} alt="wave" />
            <p className='lg:text-5xl md:text-4xl text-3xl font-medium'>Check Out Our <span className='text-purple-500'>Latest NFTs</span></p>
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-evenly px-16 gap-6 gap-y-10 my-16'>
          {nfts.length === 0 ? <div className='text-2xl font-semibold text-purple-500 my-24'>Loading...</div> :
            nfts.slice(0, 10).map((nft, idx) => (
              <NFTCard attributes={nft.attributes} image={'https://aqua-fresh-crawdad-962.mypinata.cloud/ipfs/QmWAAuJ2HyAZ4x4YNWb96Eh29zueJxJL2SuaDvBXSLCHre/' + (idx + 1) + '.png'} category="Face Art" name={"#" + (idx + 1) + " AngelFace"} key={idx} />
            ))
          }
        </div>

        <div className='flex items-center'>
          <Link className='m-auto' to="/collection"><button className='bg-purple-600 px-8 py-2 rounded-md text-sm'>Explore NFT Collection 😎</button></Link>
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

export default About