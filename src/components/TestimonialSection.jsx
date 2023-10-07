import React from 'react'

const TestimonialSection = () => {
  return (
    <div className='flex flex-col items-start sm:items-center pt-[120px] sm:pt-[60px] px-[29px] sm:border-b-[1px]'>
      <h1 className='freight-font text-[40px] font-[500] leading-normal text-center text-[#23262F]'>
        Testimonials
      </h1>
      <div className='flex gap-[112px] my-[6px] sm:my-[40px]'>
        <button className='hidden sm:flex justify-center items-center w-[40px] h-[40px] p-[10px] rounded-[35px] bg-[#E6E8EC]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
          >
            <path
              d='M9.99996 15.8334L4.16663 10.0001L9.99996 4.16675'
              stroke='black'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
            <path
              d='M15.8333 10H4.16663'
              stroke='black'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <div className='w-[319px] sm:w-[576px]'>
          <p className='h-auto text-[16px] sm:text-[20px] font-[500] leading-[24px] sm:leading-[32px] tracking-[-0.003px] sm:tracking-[-0.005px] text-start sm:text-center mb-[19.97px] sm:mb-0 freight-font'>
            I would like to thank Invest In, it made investing in real estate
            easy, user friendly and transparent. Dedicated investor support team
            clarified all my queries regarding the investment and ROI. They have
            a structured way of process for the entire investment tenure with
            additional benefits. As a happy investor, I strongly recommend
            Invest In
          </p>
          <h2 className='flex flex-col text-[12px] sm:text-[10px] font-[700] leading-[9.154px] sm:leading-[16.5px] tracking-[1.11px] sm:tracking-[2px] text-start sm:text-center uppercase text-[#353945] py-[12px] sm:py-[36px]'>
            <span>Mr. Balaji</span>
            <span className='hidden sm:block'>Raj park Medavakkam project</span>
          </h2>
        </div>

        <button className='hidden sm:flex justify-center items-center w-[40px] h-[40px] p-[10px] rounded-[35px] bg-[#E6E8EC]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
          >
            <path
              d='M9.99992 15.8334L15.8333 10.0001L9.99992 4.16675'
              stroke='black'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
            <path
              d='M4.16658 10H15.8333'
              stroke='black'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>

      {/* sm screen button */}
      <div className='flex gap-[10px]'>
        <button className='sm:hidden flex justify-center items-center w-[22.192px] h-[22.192px] p-[5.548pxpx] rounded-[19.418px] bg-[#E6E8EC]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            className='w-[11.096px] h-[11.096px]'
          >
            <path
              d='M9.99996 15.8334L4.16663 10.0001L9.99996 4.16675'
              stroke='black'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
            <path
              d='M15.8333 10H4.16663'
              stroke='black'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
          </svg>
        </button>

        <button className='sm:hidden flex justify-center items-center w-[22.192px] h-[22.192px] p-[5.548pxpx] rounded-[19.418px] bg-[#E6E8EC]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            className='w-[11.096px] h-[11.096px]'
          >
            <path
              d='M9.99992 15.8334L15.8333 10.0001L9.99992 4.16675'
              stroke='black'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
            <path
              d='M4.16658 10H15.8333'
              stroke='black'
              strokeWidth='1.25'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TestimonialSection
