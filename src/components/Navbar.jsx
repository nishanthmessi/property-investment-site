import Logo from '../assets/img/logo1.png'

const Navbar = () => {
  return (
    <div className='fixed top-0 bg-white sm:w-full flex justify-between items-center px-[20px] sm:px-[56px] py-[22px] h-auto md:h-[87px] w-[100%] z-[10]'>
      <div>
        <img src={Logo} alt='' className='w-[74px] h-[71px]' />
      </div>
      <div className='hidden lg:flex items-center gap-8 text-[14px] leading-[18.2px] font-[400]'>
        <div className='flex h-[26px] py-[1px] px-[8px] items-center gap-[25px] text-[#081228]'>
          <button className='px-[8px]'>About Us</button>
          <button className='px-[8px]'>Projects</button>
          <button className='px-[8px]'>How it works</button>
          <button className='px-[8px]'>Why MGP</button>
          <button className='px-[8px]'>insights</button>
          <button className='px-[8px]'>Support</button>
        </div>

        <button className='text-[14px] text-[#3359A7] font-[700] uppercase border border-[#3359A7] px-[24px] py-[12px] rounded-[100px] w-[122px]'>
          Login
        </button>
      </div>
      <div className='lg:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M21 6H3'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M21 12H9'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M21 18H7'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </div>
  )
}

export default Navbar
