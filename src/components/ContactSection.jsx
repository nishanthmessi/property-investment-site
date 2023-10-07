const ContactSection = () => {
  return (
    <div className='flex flex-col items-start sm:items-center py-[52px] px-[28px] sm:px-0 text-white'>
      <h1 className='text-[32px] sm:text-[40px] font-[500] leading-normal freight-font'>
        Share the Joy of Smart Investments
      </h1>
      <p className='text-[12px] sm:text-[18px] font-[700] leading-normal sm:leading-[33px] pt-[20px] pb-[22px] opacity-[0.8]'>
        Invite your friends and family and earn up to 2% of their investments!{' '}
        <span className='sm:hidden'>
          Receive an immediate cash back or opt to invest more.
        </span>
      </p>
      <button className='flex justify-center items-center text-[13px] sm:text-[14px] gap-[6.797px] py-[13.595px] px-[20.392px] w-[150px] rounded-[120px] border-[0.85px] border-[#F4F5F6]'>
        CONTACT US
      </button>
      <p className='hidden sm:block text-[14px] font-[700] leading-normal pt-[75.81px] opacity-[0.8px]'>
        © 2023 MGP INVESTMENTS
      </p>
    </div>
  )
}

export default ContactSection
