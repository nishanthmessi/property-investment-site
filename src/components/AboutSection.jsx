import InteriorImg from '../assets/img/unsplash-img1.png'
import InteriorImg2 from '../assets/img/interior-sm.png'

const AboutSection = () => {
  return (
    <div className='h-[1424px] about-style'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='760'
        height='920'
        viewBox='0 0 760 920'
        fill='none'
        className='hidden sm:block absolute right-0 custom-svg-fill'
      >
        <path
          d='M765.265 0H352.391L0.852844 920H413.727L765.265 0Z'
          fill='url(#paint0_linear_0_1397)'
          fillOpacity='0.2'
        />
        <defs>
          <linearGradient
            id='paint0_linear_0_1397'
            x1='852.234'
            y1='241.431'
            x2='383.735'
            y2='522.235'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FFD1D4' />
            <stop offset='1' stopColor='#FFD1D4' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>

      <div className='flex flex-col md:flex-row items-center 2xl:justify-center md:items-start px-[26px] sm:px-[86px] md:pl-[56px] md:pt-[115px] gap-[47px] md:gap-[90px] h-[794px] '>
        <div className='lg:relative lg:w-[700px]'>
          <div className='hidden lg:flex flex-col items-center justify-center bg-white h-[137px] w-[137px] rounded-full absolute top-[40px] -right-[20px]'>
            <h1 className='freight-font text-[52.843px] font-sans font-[500]'>
              18%
            </h1>
            <p className='text-[12.535px] font-[700] uppercase'>Returns</p>
          </div>
          <img
            src={InteriorImg}
            alt=''
            className='hidden lg:block h-[339px] sm:h-[585px] w-[572.949px] sm:w-[655px] rounded-[8.135px] object-cover'
          />
          <div className='sm:hidden relative flex flex-col items-center justify-center bg-white h-[61px] w-[61px] rounded-full top-[90px] -right-[280px]'>
            <h1 className='freight-font text-[23.529px] font-sans font-[500]'>
              18%
            </h1>
            <p className='text-[5.581px] font-[700] uppercase'>Returns</p>
          </div>
          <img
            src={InteriorImg2}
            alt=''
            className='sm:hidden h-[280px] sm:h-[585px] w-[324px] sm:w-[655px] rounded-[8.135px] object-cover'
          />
        </div>
        <div className='flex flex-col items-start text-[#F4F5F6] mt-[30px] sm:mt-[120px] gap-[8px] sm:gap-[16px]'>
          <h1 className='text-[12px] sm:[text-14px] uppercase text-[#FF4F17] leading-[15.6px] sm:leading-[18.2px] tracking-[1.68px] sm:tracking-[1.96px]'>
            why MGP
          </h1>
          <p className='flex flex-col freight-font text-[30px] sm:text-[48px] font-[500] leading-normal sm:leading-[48px]'>
            <span>Easy real estate </span>
            <span>investments within reach</span>
          </p>
          <p className='flex flex-col text-[16px] font-[400] leading-[24px] w-[316px] sm:w-[426px]'>
            Discover the ease of real estate investments within reach - steady
            income, long-term appreciation, and tax advantages await.
          </p>
          <button className='text-[14px] font-[700] leading-[18.2px] px-[19.46px] sm:px-[20px] py-[12.97px] sm:py-[14px] border-[0.811px] border-[#F4F5F6] rounded-[114.504px] uppercase mt-[10px] sm:mt-0'>
            know more
          </button>
        </div>
      </div>

      {/* Key Points */}
      <div className='grid grid-cols-2 xl:grid-cols-5 md:justify-items-center px-[40px] gap-[88px] sm:gap-[60px] xl:gap-[112px] text-[#F4F5F6] text-[20px] sm:text-[24px] font-[500] leading-normal freight-font xl:w-[1190px] w-auto mx-auto'>
        <div className='flex flex-col items-start sm:items-center gap-[4px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='41'
            height='40'
            viewBox='0 0 41 40'
            fill='none'
            className='h-[40px] w-[40px]'
          >
            <path
              d='M35.5 10L26.6785 18.8215C26.0276 19.4724 24.9724 19.4724 24.3215 18.8215L21.6785 16.1785C21.0276 15.5276 19.9724 15.5276 19.3215 16.1785L12.1667 23.3333'
              stroke='white'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
            <path
              d='M5.5 5V29.6667C5.5 31.5335 5.5 32.4669 5.86331 33.18C6.18289 33.8072 6.69282 34.3171 7.32003 34.6367C8.03307 35 8.96649 35 10.8333 35H35.5'
              stroke='white'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
            <circle cx='20.5' cy='15' r='1.66667' fill='white' />
            <circle cx='35.5' cy='9.99998' r='1.66667' fill='white' />
          </svg>
          <p>High returns</p>
        </div>
        <div className='flex flex-col items-start sm:items-center gap-[4px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
          >
            <path
              d='M30.8334 14.375V12.5C30.8334 11.837 30.57 11.2011 30.1011 10.7322C29.6323 10.2634 28.9964 10 28.3334 10H10.8334C10.1703 10 9.53445 10.2634 9.06561 10.7322C8.59677 11.2011 8.33337 11.837 8.33337 12.5V30C8.33337 30.663 8.59677 31.2989 9.06561 31.7678C9.53445 32.2366 10.1703 32.5 10.8334 32.5H15.2084'
              stroke='white'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
            <path
              d='M24.5834 7.5V12.5'
              stroke='white'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
            <path
              d='M14.5834 7.5V12.5'
              stroke='white'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
            <path
              d='M8.33337 17.5H14.5834'
              stroke='white'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
            <path
              d='M26.4584 26.875L24.5834 25.3125V22.5'
              stroke='white'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
            <path
              d='M32.0834 25C32.0834 26.9891 31.2932 28.8968 29.8867 30.3033C28.4802 31.7098 26.5725 32.5 24.5834 32.5C22.5943 32.5 20.6866 31.7098 19.2801 30.3033C17.8736 28.8968 17.0834 26.9891 17.0834 25C17.0834 23.0109 17.8736 21.1032 19.2801 19.6967C20.6866 18.2902 22.5943 17.5 24.5834 17.5C26.5725 17.5 28.4802 18.2902 29.8867 19.6967C31.2932 21.1032 32.0834 23.0109 32.0834 25Z'
              stroke='white'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
          </svg>
          <p>Short Term</p>
        </div>
        <div className='flex flex-col items-start sm:items-center gap-[4px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
          >
            <path
              d='M3.33325 20C3.33325 20 8.33325 8.33331 19.9999 8.33331C31.6666 8.33331 36.6666 20 36.6666 20C36.6666 20 31.6666 31.6666 19.9999 31.6666C8.33325 31.6666 3.33325 20 3.33325 20Z'
              stroke='white'
              strokeWidth='1.5'
              strokeLinejoin='round'
            />
            <path
              d='M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z'
              stroke='white'
              strokeWidth='1.5'
              strokeLinejoin='round'
            />
          </svg>
          <p>Transparency</p>
        </div>
        <div className='flex flex-col items-start sm:items-center gap-[4px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
          >
            <path
              d='M20 21.25V23.3333'
              stroke='white'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
            <path
              d='M20.6396 5.16934L32.7131 8.36527C33.0786 8.46203 33.3332 8.79275 33.3332 9.17086V23.4896C33.3332 25.1674 32.4917 26.7333 31.0925 27.6593L20.4597 34.6957C20.1809 34.8802 19.8188 34.8802 19.5399 34.6957L8.90717 27.6593C7.508 26.7333 6.6665 25.1674 6.6665 23.4896V9.17086C6.6665 8.79275 6.92107 8.46203 7.28659 8.36527L19.3601 5.16934C19.7794 5.05836 20.2203 5.05836 20.6396 5.16934Z'
              stroke='white'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
            <path
              d='M13.3333 17.9167C13.3333 17.131 13.3333 16.7382 13.5773 16.4941C13.8214 16.25 14.2142 16.25 14.9999 16.25H24.9999C25.7856 16.25 26.1784 16.25 26.4225 16.4941C26.6666 16.7382 26.6666 17.131 26.6666 17.9167V22.9479C26.6666 23.2655 26.6666 23.4242 26.6425 23.5643C26.5479 24.1151 26.1835 24.5817 25.6722 24.8071C25.5421 24.8645 25.3881 24.903 25.08 24.98V24.98C24.049 25.2377 23.5335 25.3666 23.0179 25.4615C21.0227 25.8289 18.9772 25.8289 16.982 25.4615C16.4663 25.3666 15.9508 25.2377 14.9198 24.98V24.98C14.6118 24.903 14.4578 24.8645 14.3277 24.8071C13.8163 24.5817 13.452 24.1151 13.3573 23.5643C13.3333 23.4242 13.3333 23.2655 13.3333 22.9479V17.9167Z'
              stroke='white'
              strokeWidth='1.25'
            />
            <path
              d='M23.75 16.25V15.4167C23.75 13.3456 22.0711 11.6667 20 11.6667V11.6667C17.9289 11.6667 16.25 13.3456 16.25 15.4167V16.25'
              stroke='white'
              strokeWidth='1.25'
            />
            <circle cx='19.9999' cy='20.4167' r='1.66667' fill='white' />
          </svg>
          <p>Safe income</p>
        </div>
        <div className='flex flex-col items-start sm:items-center gap-[4px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='41'
            height='40'
            viewBox='0 0 41 40'
            fill='none'
          >
            <path
              d='M13.8333 31.547C15.8602 32.7173 18.1594 33.3334 20.4999 33.3334C22.8404 33.3334 25.1397 32.7173 27.1666 31.547C29.1935 30.3768 30.8767 28.6936 32.0469 26.6667C33.2172 24.6398 33.8333 22.3405 33.8333 20C33.8333 17.6595 33.2172 15.3603 32.0469 13.3334C30.8767 11.3064 29.1935 9.62326 27.1666 8.45302C25.1397 7.28277 22.8404 6.66669 20.4999 6.66669C18.1594 6.66669 15.8602 7.28277 13.8333 8.45301'
              stroke='white'
              strokeWidth='1.25'
            />
            <path
              d='M3.83325 20L3.34521 19.6096L3.03286 20L3.34521 20.3905L3.83325 20ZM18.8333 20.625C19.1784 20.625 19.4583 20.3452 19.4583 20C19.4583 19.6548 19.1784 19.375 18.8333 19.375V20.625ZM10.0119 11.2763L3.34521 19.6096L4.32129 20.3905L10.988 12.0571L10.0119 11.2763ZM3.34521 20.3905L10.0119 28.7238L10.988 27.9429L4.32129 19.6096L3.34521 20.3905ZM3.83325 20.625H18.8333V19.375H3.83325V20.625Z'
              fill='white'
            />
          </svg>
          <p>Easy exit</p>
        </div>
      </div>

      {/* Embeded Video */}
      <div className='flex justify-center mt-[81.34px] sm:mt-[63px] xl:mt-[113px]'>
        <iframe
          src='https://www.youtube.com/embed/kxJsCrkvtWo'
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='h-[189px] sm:h-[496px] xl:h-[596px] w-[377.557px] sm:w-[796px] xl:w-[1096px] rounded-[5.074px] sm:rounded-[16px]'
        ></iframe>
      </div>
    </div>
  )
}

export default AboutSection
