import hero from '../assets/2.png'

const Hero = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row items-start lg:justify-between px-10 gap-10 lg:gap-20 xl:gap-60'>
        <div className='mt-10 lg:mt-20 w-full'>
            <div className="flex flex-col items-start justify-center">
            <h3 className='text-4xl lg:text-7xl font-semibold'>Sustain Your</h3>
            <h3 className='text-4xl lg:text-8xl font-extrabold text-green-900'>Banana Plantations</h3>
            <span className='mt-2 text-xs text-gray-500'>Keep your banana plants disease-free with our innovative detection tool. Ensure your crops grow strong and healthy year-round</span>
            </div>
            <button className='w-30 py-3 rounded-xl text-xs text-white bg-green-950 mt-5 cursor-pointer justify-self-start'>Explore more</button>
        </div>
        <div className='lg:mt-20 w-full'>
                <img src={hero} alt="hero-image" className='xl:w-96 2xl:w-[60%]  rounded-2xl' />
        </div>
    </div>
  )
}

export default Hero