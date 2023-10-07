import BarChartImg from '../assets/img/invest-barchart.png'
import BarChartImgsm from '../assets/img/barchart-sm.png'

const InvestmentSection = () => {
  return (
    <div className='flex flex-col mx-auto container p-[60px]'>
      <div className='flex flex-col gap-[16px] w-[303px] sm:w-auto -mx-[30px] sm:-mx-0'>
        <h1 className='flex flex-col freight-font text-[32px] sm:text-[40px] font-[500] leading-[40px] sm:leading-[48px]'>
          <span>Why you should choose</span>
          <span className='text-[#FF4F17]'>real estate investment?</span>
        </h1>
        <p className='hidden sm:flex flex-col text-[16px] font-[400] leading-[24px]'>
          <span>
            Unlock your financial potential with real estate investment
          </span>
          <span>- a steady income stream.</span>
        </p>
        <p className='sm:hidden text-[14px] leading-normal w-[317px]'>
          Unlock your financial potential with real estate investment - a steady
          income stream, appreciation over time, and tax advantages for building
          long-term wealth.
        </p>
      </div>
      <div className='hidden sm:block ml-[48px] lg:-mt-[154px]'>
        <img src={BarChartImg} alt='' />
      </div>
      <div className='sm:hidden w-[375px] -m-[60px] mt-[90px] mb-[60px]'>
        <img src={BarChartImgsm} alt='' className='object-cover' />
      </div>

      <p className='hidden sm:block text-[15.73px] font-[500] leading-normal text-center pt-[25px]'>
        *All returns are calculated per annum
      </p>
    </div>
  )
}

export default InvestmentSection
