const HeroSection = () => {
  return (
    <div className='flex flex-col sm:justify-center pt-[76px] md:pt-[60px] sm:mt-0 items-start h-auto w-auto  px-[20px] sm:pl-[68px] hero-bg-sm sm:hero-bg'>
      <p className='flex sm:block flex-col text-[40px] sm:text-[64px] font-[500] leading-[43px] sm:leading-[62px] freight-font text-[#23262F] sm:text-[#fff] mb-[24px] w-[315px] sm:w-[578.829px]'>
        Safest investment on earth with
        <span className='text-[#FF4F17] sm:text-[#fff]'>
          guaranteed returns of 18% p.a.
        </span>
      </p>
      <button className='bg-[#292C6D] text-white text-[14px] font-[700] leading-[18.2px] py-[14px] px-[24.40px] rounded-[120px] uppercase'>
        Invest Now
      </button>
    </div>
  )
}

export default HeroSection
