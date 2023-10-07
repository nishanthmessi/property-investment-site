import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

const CalculatorSection = () => {
  const data = {
    labels: ['Invested amount', 'MGP investment', 'Other investments'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [500000, 900000, 100000],
        backgroundColor: ['#686BBF', '#F4F5F6', '#76FFFF'],
        cutout: '70%',
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  }

  return (
    <div className='h-[831px] sm:h-[785px] linear-bg-blue'>
      <h1 className='text-[32px] sm:text-[40px] font-[500] leading-[40px] sm:leading-normal text-white freight-font py-[66px] text-center'>
        Investment Calculator
      </h1>

      {/* Calculator card */}
      <div className='flex flex-col-reverse sm:flex-row items-center justify-center gap-[50px] sm:gap-[139px]'>
        <div className='h-[424.884px] w-[375px] sm:w-[435px]  flex-shrink-0 sm:bg-white rounded-[16px] px-[20px] sm:p-[44.96px]'>
          <div className='flex justify-between sm:mt-[32.2px]'>
            <h1 className='flex flex-col text-[17.984px] font-[500] leading-[22.481px] text-white sm:text-[#23262F] pt-[12.35px]'>
              <span>How much money can</span>
              <span>you invest?</span>
            </h1>
            <p className='bg-[#F4F5F6] h-[47.209px] w-[109.031px] flex-shrink-0 rounded-[4.496px] border-[1.124px] border-[#F1F1F1] text-center pt-[12.36px] pb-[14.85px] text-[15.736px] font-[700] leading-normal tracking-[0.039px]'>
              ₹500,000
            </p>
          </div>
          <div className='w-[324px] sm:w-[350px] h-[11.24px] bg-[#F4F5F6] rounded-[62.946px] mt-[21.32px]'></div>

          <div className='flex justify-between mt-[32.2px]'>
            <h1 className='flex flex-col text-[17.984px] font-[500] leading-[22.481px] text-white sm:text-[#23262F] pt-[12.35px]'>
              <span>Whats the tenure</span>
              <span>period?</span>
            </h1>
            <p className='bg-[#F4F5F6] h-[47.209px] w-[109.031px] flex-shrink-0 rounded-[4.496px] border-[1.124px] border-[#F1F1F1] text-center pt-[12.36px] pb-[14.85px] text-[15.736px] font-[700] leading-normal tracking-[0.039px]'>
              6 months
            </p>
          </div>
          <div className='w-[324px] sm:w-[350px] h-[11.24px] bg-[#F4F5F6] rounded-[62.946px] mt-[21.32px]'></div>

          <div className='flex justify-center mt-[61px] w-[331px] sm:w-[350px] h-[128.256px] rounded-[8.992px] bg-[#F4F5F6] py-[28px]'>
            <p className='flex flex-col justify-center items-center text-[#23262F] text-[14.27px] sm:text-[17.984px] font-[400] leading-normal tracking-[0.045px]'>
              <span>You will get</span>
              <span className='text-[21.405px] sm:text-[26.997px] font-[700] leading-normal tracking-[0.054px] sm:tracking-[0.067px]'>
                ₹900000
              </span>
              <span>in 6 months</span>
            </p>
          </div>
        </div>

        <div className='w-[258.089px] sm:w-[417px] h-[258.089px] sm:h-[417px]'>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default CalculatorSection
