const HeroSection = () => {
  return (
    <div className='flex flex-col sm:justify-center pt-[86px] sm:mt-0 items-start h-[92vh] w-auto  px-[20px] sm:pl-[68px] hero-bg-sm sm:hero-bg'>
      <p className='flex flex-col text-[40px] sm:text-[64px] font-[500] leading-[43px] sm:leading-[62px] freight-font text-[#23262F] sm:text-[#fff] mb-[24px] w-[315px] sm:w-[578.829px]'>
        {/* <span>Safest investment on</span>
        <span>earth with guaranteed</span>
        <span>returns of 18% p.a.</span> */}
        <span className=''>Safest investment on earth with </span>
        <span className='text-[#FF4F17] sm:text-[#fff]'>
          guaranteed returns of 18% p.a.
        </span>
      </p>
      <button className='bg-[#292C6D] text-white text-[14px] font-[700] leading-[18.2px] py-[14px] px-[20.40px] rounded-[120px] uppercase'>
        Invest Now
      </button>
    </div>
  )
}

export default HeroSection
