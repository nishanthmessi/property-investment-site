import React, { useState } from 'react'

const QuestionSection = () => {
  const [isActive, setIsActive] = useState(null)

  const toggleQuestion = (index) => {
    setIsActive((prevIndex) => (prevIndex === index ? null : index))
  }

  const questions = [
    {
      question: 'Who can invest on invest in properties',
      ans: 'Any individual over the age of 18 years having a valid PAN and Aadhaar card can invest.Investment options provided on Invest In offer advantages like guaranteed returns of 18% P.A',
    },
    {
      question: 'What is the investment period?',
      ans: 'Any individual over the age of 18 years having a valid PAN and Aadhaar card can invest.Investment options provided on Invest In offer advantages like guaranteed returns of 18% P.A',
    },
    {
      question: 'How do I get started as an investor with invest in properties',
      ans: 'Any individual over the age of 18 years having a valid PAN and Aadhaar card can invest.Investment options provided on Invest In offer advantages like guaranteed returns of 18% P.A',
    },
    {
      question: 'How do I get started as an investor with invest in properties',
      ans: 'Any individual over the age of 18 years having a valid PAN and Aadhaar card can invest.Investment options provided on Invest In offer advantages like guaranteed returns of 18% P.A',
    },
    {
      question: 'How do I get started as an investor with invest in properties',
      ans: 'Any individual over the age of 18 years having a valid PAN and Aadhaar card can invest.Investment options provided on Invest In offer advantages like guaranteed returns of 18% P.A',
    },
  ]

  return (
    <div className='flex flex-col items-start sm:items-center px-[25px] sm:px-0 py-[20px] sm:py-[37.5px] mt-[40px] sm:mt-0'>
      <h1 className='text-[32px] sm:text-[40px] font-[500] leading-normal freight-font mb-[28.19px] sm:mb-[68px]'>
        Frequently asked questions
      </h1>
      {questions.map((ques, index) => (
        <div
          key={index}
          className='flex items-center gap-[10px] sm:gap-[24px] border-b-[1px] cursor-pointer w-[323px] sm:w-auto'
        >
          <div className='w-[768px]' onClick={() => toggleQuestion(index)}>
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

export default QuestionSection
