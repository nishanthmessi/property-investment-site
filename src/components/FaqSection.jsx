import { useState } from 'react'
import questions from '../db/faqData'

const FaqSection = () => {
  const [isActive, setIsActive] = useState(null)

  const toggleQuestion = (index) => {
    setIsActive((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className='flex flex-col items-start sm:items-center px-[25px] sm:px-0 py-[20px] sm:py-[37.5px] mt-[40px] sm:mt-0'>
      <h1 className='text-[32px] sm:text-[40px] font-[500] leading-normal freight-font mb-[28.19px] sm:mb-[68px]'>
        Frequently asked questions
      </h1>
      {questions.map((ques, index) => (
        <div
          key={index}
          className='flex items-center gap-[10px] sm:gap-[24px] border-b-[1px] cursor-pointer w-[354px] sm:w-auto'
        >
          <div
            className='w-[534px] xl:w-[768px]'
            onClick={() => toggleQuestion(index)}
          >
            <h1 className='text-[14px] sm:text-[22px] font-[400] sm:font-[700] leading-normal sm:leading-[28px] freight-font mt-[24px] mb-[32px] w-[303px] sm:w-auto'>
              {ques.question}
            </h1>

            {isActive === index && (
              <p className='text-[10px] sm:text-[16px] font-[400] leading-[24px] text-[#667085] mb-[24px] -mt-[24px]'>
                {ques.ans}
              </p>
            )}
          </div>

          {isActive === index ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M5 12H19'
                stroke='#292C6D'
                strokeWidth='2'
                strokeLinejoin='round'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M5 12H19'
                stroke='#292C6D'
                strokeWidth='2'
                strokeLinejoin='round'
              />
              <path
                d='M12 5V19'
                stroke='#292C6D'
                strokeWidth='2'
                strokeLinejoin='round'
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}

export default FaqSection
