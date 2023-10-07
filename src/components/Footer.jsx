import LogoWhite from '../assets/img/logo-white.png'

const Footer = () => {
  const routes = [
    {
      route: 'About Us',
    },
    {
      route: 'Projects',
    },
    {
      route: 'How it works',
    },
    {
      route: 'Why MGP',
    },
    {
      route: 'Insights',
    },
    {
      route: 'Support',
    },
  ]

  return (
    <>
      <div className='lg:hidden flex gap-[100px] items-start justify-center text-[14px] font-[400] leading-[18.2px] text-white w-[322px] px-[20px] pt-[25px] sm:mx-auto'>
        <div className='flex flex-col gap-[10px]'>
          <button className='flex items-center h-[24px] py-[1px] px-[6px] rounded-[50px]'>
            {routes[0].route}
          </button>
          <button className='flex items-center h-[24px] py-[1px] px-[6px] rounded-[50px]'>
            {routes[1].route}
          </button>
          <button className='flex items-center h-[24px] py-[1px] px-[6px] rounded-[50px]'>
            {routes[2].route}
          </button>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <button className='flex items-center h-[24px] py-[1px] px-[6px] rounded-[50px]'>
            {routes[3].route}
          </button>
          <button className='flex items-center h-[24px] py-[1px] px-[6px] rounded-[50px]'>
            {routes[4].route}
          </button>
          <button className='flex items-center h-[24px] py-[1px] px-[6px] rounded-[50px]'>
            {routes[5].route}
          </button>
        </div>
      </div>

      <div className='flex justify-center items-center py-[94px] lg:border-t-[1px] border-[#F4F5F6] border-opacity-[0.2] text-[#F4F5F6] 2xl:mx-[184px]'>
        <div>
          <img
            src={LogoWhite}
            alt=''
            className='h-[55.086px] sm:h-[63px] w-[52.582px] sm:w-[66px] object-cover mr-[6px] sm:mr-[122px]'
          />
          <p className='sm:hidden block text-[4.4px] font-[700] leading-normal opacity-[0.8px]'>
            © 2023 MGP INVESTMENTS
          </p>
        </div>

        <div className='hidden lg:flex gap-[25px]'>
          {routes.map((route, index) => (
            <button
              key={index}
              className='flex items-center h-[24px] py-[1px] px-[6px] text-[14px] font-[400] leading-[18.2px] rounded-[50px]'
            >
              {route.route}
            </button>
          ))}
        </div>

        <div className='flex gap-[25px] ml-[54px] sm:ml-[44px] mt-[20px] sm:mt-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='45'
            height='43'
            viewBox='0 0 45 43'
            fill='none'
            className='h-[33px] sm:h-[42.291px] w-[33px] sm:w-[45px]'
          >
            <path
              opacity='0.25'
              d='M43.875 21.1521C43.875 32.1443 34.3719 41.1726 22.5 41.1726C10.6281 41.1726 1.125 32.1443 1.125 21.1521C1.125 10.1598 10.6281 1.13159 22.5 1.13159C34.3719 1.13159 43.875 10.1598 43.875 21.1521Z'
              stroke='white'
              strokeWidth='2.25'
            />
            <path
              d='M17.6875 18.2153C18.6195 18.2153 19.375 17.5052 19.375 16.6294C19.375 15.7535 18.6195 15.0435 17.6875 15.0435C16.7555 15.0435 16 15.7535 16 16.6294C16 17.5052 16.7555 18.2153 17.6875 18.2153Z'
              fill='white'
            />
            <path
              d='M19.0938 19.2725H16.2812C16.126 19.2725 16 19.3909 16 19.5368V27.4663C16 27.6122 16.126 27.7307 16.2812 27.7307H19.0938C19.249 27.7307 19.375 27.6122 19.375 27.4663V19.5368C19.375 19.3909 19.249 19.2725 19.0938 19.2725Z'
              fill='white'
            />
            <path
              d='M27.4733 18.9083C26.2712 18.5214 24.7677 18.8613 23.866 19.4708C23.8351 19.3571 23.7248 19.2726 23.5938 19.2726H20.7812C20.626 19.2726 20.5 19.391 20.5 19.5369V27.4664C20.5 27.6123 20.626 27.7308 20.7812 27.7308H23.5938C23.749 27.7308 23.875 27.6123 23.875 27.4664V21.7677C24.3295 21.3998 24.9151 21.2824 25.3943 21.4738C25.8589 21.6583 26.125 22.1087 26.125 22.7087V27.4664C26.125 27.6123 26.251 27.7308 26.4062 27.7308H29.2188C29.374 27.7308 29.5 27.6123 29.5 27.4664V22.1764C29.4679 20.0042 28.3806 19.2001 27.4733 18.9083Z'
              fill='white'
            />
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='45'
            height='43'
            viewBox='0 0 45 43'
            fill='none'
            className='h-[33px] sm:h-[42.291px] w-[33px] sm:w-[45px]'
          >
            <path
              opacity='0.25'
              d='M44 21.1521C44 32.2205 34.4335 41.2976 22.5 41.2976C10.5665 41.2976 1 32.2205 1 21.1521C1 10.0836 10.5665 1.00659 22.5 1.00659C34.4335 1.00659 44 10.0836 44 21.1521Z'
              stroke='white'
              strokeWidth='2'
            />
            <path
              d='M20.699 27.6301L20.6786 21.7122H18V19.176H20.6786V17.4852C20.6786 15.2032 22.171 14.1035 24.3209 14.1035C25.3507 14.1035 26.2358 14.1761 26.4937 14.2086V16.5933L25.0026 16.5939C23.8334 16.5939 23.607 17.12 23.607 17.892V19.176H26.9286L26.0357 21.7122H23.607V27.6301H20.699Z'
              fill='white'
            />
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='45'
            height='43'
            viewBox='0 0 45 43'
            fill='none'
            className='h-[33px] sm:h-[42.291px] w-[33px] sm:w-[45px]'
          >
            <path
              opacity='0.25'
              d='M44 21.1521C44 32.2205 34.4335 41.2976 22.5 41.2976C10.5665 41.2976 1 32.2205 1 21.1521C1 10.0836 10.5665 1.00659 22.5 1.00659C34.4335 1.00659 44 10.0836 44 21.1521Z'
              stroke='white'
              strokeWidth='2'
            />
            <path
              d='M25.8679 18.7483C26.2987 18.7483 26.6479 18.4201 26.6479 18.0153C26.6479 17.6104 26.2987 17.2822 25.8679 17.2822C25.4371 17.2822 25.0879 17.6104 25.0879 18.0153C25.0879 18.4201 25.4371 18.7483 25.8679 18.7483Z'
              fill='white'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M19.25 21.1522C19.25 22.8367 20.7076 24.2066 22.5 24.2066C24.2924 24.2066 25.75 22.8367 25.75 21.1522C25.75 19.4678 24.2924 18.0979 22.5 18.0979C20.7076 18.0979 19.25 19.4678 19.25 21.1522ZM20.875 21.1522C20.875 20.31 21.6038 19.6251 22.5 19.6251C23.3962 19.6251 24.125 20.31 24.125 21.1522C24.125 21.9945 23.3962 22.6794 22.5 22.6794C21.6038 22.6794 20.875 21.9945 20.875 21.1522Z'
              fill='white'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M19.25 27.2608H25.75C27.4205 27.2608 29 25.7764 29 24.2065V18.0978C29 16.5279 27.4205 15.0435 25.75 15.0435H19.25C17.5795 15.0435 16 16.5279 16 18.0978V24.2065C16 25.7764 17.5795 27.2608 19.25 27.2608ZM17.625 18.0978C17.625 17.3839 18.4903 16.5706 19.25 16.5706H25.75C26.5097 16.5706 27.375 17.3839 27.375 18.0978V24.2065C27.375 24.9205 26.5097 25.7337 25.75 25.7337H19.25C18.4757 25.7337 17.625 24.9342 17.625 24.2065V18.0978Z'
              fill='white'
            />
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='45'
            height='43'
            viewBox='0 0 45 43'
            fill='none'
            className='h-[33px] sm:h-[42.291px] w-[33px] sm:w-[45px]'
          >
            <path
              opacity='0.25'
              d='M44 21.1521C44 32.2205 34.4335 41.2976 22.5 41.2976C10.5665 41.2976 1 32.2205 1 21.1521C1 10.0836 10.5665 1.00659 22.5 1.00659C34.4335 1.00659 44 10.0836 44 21.1521Z'
              stroke='white'
              strokeWidth='2'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M29.2659 16.3056C29.951 16.476 30.4906 16.9755 30.6745 17.6085C31.0159 18.7639 30.9999 21.1727 30.9999 21.1727C30.9999 21.1727 30.9975 23.5683 30.6665 24.7229C30.4803 25.3552 29.9382 25.8539 29.2539 26.0236C28.002 26.3261 22.9935 26.3209 22.9935 26.3209C22.9935 26.3209 17.9987 26.3158 16.734 25.9985C16.0481 25.8281 15.5084 25.3286 15.3246 24.6963C14.9968 23.5528 15 21.1447 15 21.1447C15 21.1447 15.0032 18.7484 15.3334 17.593C15.5188 16.9607 16.0736 16.4502 16.7452 16.2812C17.9979 15.978 23.0055 15.9832 23.0055 15.9832C23.0055 15.9832 28.014 15.9883 29.2659 16.3056ZM21.4075 18.938L21.4035 23.3647L25.5701 21.155L21.4075 18.938Z'
              fill='white'
            />
          </svg>
        </div>
      </div>
    </>
  )
}

export default Footer
