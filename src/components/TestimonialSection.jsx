import { useState } from 'react'
import testimonials from '../db/testimonialData'

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const previousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentProject = testimonials[currentIndex]

  return (
    <div className='flex flex-col items-start md:items-center pt-[140px] sm:pt-[360px] md:pt-[60px] px-[29px] md:border-b-[1px]'>
      <h1 className='freight-font text-[40px] font-[500] leading-normal text-center text-[#23262F]'>
        Testimonials
      </h1>
      <div className='flex gap-[66px] xl:gap-[112px] my-[6px] sm:my-[40px]'>
        <button
          className='hidden md:flex justify-center items-center w-[40px] h-[40px] p-[10px] rounded-[35px] bg-[#E6E8EC]'
          onClick={previousProject}
        >
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
          <p className='h-auto text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-[500] leading-[24px] md:leading-[32px] tracking-[-0.003px] md:tracking-[-0.005px] text-start md:text-center mb-[19.97px] sm:mb-0 freight-font'>
            {currentProject.comment}
          </p>
          <h2 className='flex flex-col text-[12px] md:text-[10px] font-[700] leading-[9.154px] sm:leading-[16.5px] tracking-[1.11px] md:tracking-[2px] text-start md:text-center uppercase text-[#353945] py-[12px] md:py-[36px]'>
            <span>{currentProject.author}</span>
            <span className='hidden sm:block'>{currentProject.project}</span>
          </h2>
        </div>

        <button
          className='hidden md:flex justify-center items-center w-[40px] h-[40px] p-[10px] rounded-[35px] bg-[#E6E8EC]'
          onClick={nextProject}
        >
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

      {/* sm screen btns */}
      <div className='flex gap-[10px] sm:-mt-[30px] md:-mt-0'>
        <button
          className='md:hidden flex justify-center items-center w-[22.192px] h-[22.192px] p-[5.548pxpx] rounded-[19.418px] bg-[#E6E8EC]'
          onClick={previousProject}
        >
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

        <button
          className='md:hidden flex justify-center items-center w-[22.192px] h-[22.192px] p-[5.548pxpx] rounded-[19.418px] bg-[#E6E8EC]'
          onClick={nextProject}
        >
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
