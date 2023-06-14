import { Parallax } from 'react-scroll-parallax'

const About = () => {
    return (
        <div id="about" className='flex lg:flex-row md:flex-row flex-col items-center justify-evenly py-16 lg:gap-5 md:gap-5 gap-16'>
            <div>
                <img src="./images/wave-pattern.webp" className='h-7' alt="wave" />
                <h3 className='text-4xl font-semibold underline-offset-8 mt-4'>
                    <span className=' text-purple-500'>Digital</span> Art
                </h3>
                <p className='text-gray-500 max-w-sm my-10'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos doloremque cum voluptate deleniti qui optio illo quod repellat ad veritatis, molestiae nisi minus, dolor a? Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
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
                    ✨ 3D Computer Graphics
                </p>
                <p>
                    ✨ Pixel Art
                </p>
                <p>
                    ✨ Digital Photography
                </p>
                <p>
                    ✨ Photo-painting.
                </p>
            </div>
        </div>
    )
}

export default About