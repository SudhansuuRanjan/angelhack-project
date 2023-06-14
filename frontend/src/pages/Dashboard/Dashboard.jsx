import { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'

const Dashboard = () => {

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
          <p className='lg:text-5xl md:text-4xl text-3xl font-medium'>Our NFT <span className='text-purple-500'>Collection</span></p>
        </div>

        <img style={{
          filter: 'invert(0.2)'
        }} src="./images/wave.webp" alt="wave" className='lg:h-26 md:h-20 h-12 absolute right-0 top-4' />
      </div>

      <div className='flex flex-wrap items-center justify-evenly px-16 gap-6 gap-y-10 my-16'>
        {nfts.length === 0 ? <div className='text-2xl font-semibold text-purple-500 my-24'>Loading...</div> :
          nfts.map((nft, idx) => (
            <NFTCard attributes={nft.attributes} image={'https://aqua-fresh-crawdad-962.mypinata.cloud/ipfs/QmWAAuJ2HyAZ4x4YNWb96Eh29zueJxJL2SuaDvBXSLCHre/' + (idx + 1) + '.png'} category="Face Art" name={"#" + (idx + 1) + " AngelFace"} key={idx} />
          ))
        }
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

export default Dashboard