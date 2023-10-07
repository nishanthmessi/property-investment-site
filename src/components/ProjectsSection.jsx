import { useState } from 'react'
import PropertyImg1 from '../assets/img/property-img1.png'
import projectData from '../db/projectData'

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const previousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    )
  }

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentProject = projectData[currentIndex]

  return (
    <div className='mt-[81px] sm:mt-[300px] pl-[20px] sm:px-[63px] border-b-[1px]'>
      <div className='text-[#23262F]'>
        <h1 className='text-[12px] sm:text-[14px] font-[700] leading-[15.6px] sm:leading-[18.2px] tracking-[1.96px] uppercase'>
          our investment properties
        </h1>
        <p className='freight-font text-[32px] sm:text-[40px] font-[500] leading-[40px] sm:leading-[normal]'>
          Your path to <span className='text-[#FF4F17]'>profitable</span>{' '}
          ventures
        </p>
      </div>
      <div className='hidden sm:flex gap-[56px] my-[33px] ml-[5px]'>
        <button className='text-[#353945] text-[12px] font-[500] leading-[15.6px] tracking-[1.68px] uppercase'>
          ongoing projects
        </button>
        <button className='text-[12px] font-[700] leading-[15.6px] tracking-[1.68px] underline uppercase'>
          fulfilled projects
        </button>
      </div>
      <div className='flex flex-col sm:flex-row items-center mt-[70px] sm:mt-0 -ml-[20px]'>
        <div className='w-[367px] sm:w-auto h-[256.853px] sm:h-auto'>
          <img src={PropertyImg1} alt='' className='' />
        </div>

        {/* Property details card */}

        {/* ===== add box-shadow: 0px 2.41378px 12.06891px 0px rgba(0, 0, 0, 0.12); ====== */}

        <div
          className='sm:absolute sm:right-0 sm:mr-[63px] flex flex-col justify-start h-[479px] w-[335px] sm:w-[506px] px-[20px] sm:px-[40px] py-[24px] bg-[#fff] rounded-[4.828px] sm:rounded-[8px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] -mt-[30px] sm:-mt-0'
          key={currentProject.id}
        >
          <h2 className='text-[#FF4F17] text-[12px] font-[700] leading-[15.6px] tracking-[1.68px] uppercase'>
            {currentProject.location}
          </h2>
          <h1 className='text-[40px] freight-font font-[500px] leading-[48px] mb-[24px]'>
            {currentProject.propertyName}
          </h1>
          <div className='flex flex-col gap-[22px] mb-[16px]'>
            <div className='flex gap-[8px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <path
                  d='M2.5 2.5V17.5H17.5'
                  stroke='#292C6D'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M15 14L15 4'
                  stroke='#292C6D'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M11 14L11 8'
                  stroke='#292C6D'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M6.66675 14.1667V11.6667'
                  stroke='#292C6D'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <div className='text-[14px] leading-[18px] capitalize'>
                <h1 className='font-[400]'>Returns</h1>
                <p className='font-[700]'>{currentProject.returns}%</p>
              </div>
            </div>

            <div className='flex gap-[8px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <path
                  d='M5 2.5H15'
                  stroke='#292C6D'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5 6.66666H15'
                  stroke='#292C6D'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5 10.8333L12.0833 17.5'
                  stroke='#292C6D'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5 10.8333H7.5'
                  stroke='#292C6D'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M7.5 10.8333C13.0558 10.8333 13.0558 2.5 7.5 2.5'
                  stroke='#292C6D'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <div className='text-[14px] leading-[18px] capitalize'>
                <h1 className='font-[400]'>Minimum Investment</h1>
                <p className='font-[700]'>INR {currentProject.minInvestment}</p>
              </div>
            </div>

            <div className='flex gap-[8px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <path
                  d='M17.5 6.25001V5.00001C17.5 4.55798 17.3244 4.13406 17.0118 3.8215C16.6993 3.50894 16.2754 3.33334 15.8333 3.33334H4.16667C3.72464 3.33334 3.30072 3.50894 2.98816 3.8215C2.67559 4.13406 2.5 4.55798 2.5 5.00001V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1577 3.72464 18.3333 4.16667 18.3333H7.08333'
                  stroke='#292C6D'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M13.3335 1.66666V4.99999'
                  stroke='#292C6D'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M6.6665 1.66666V4.99999'
                  stroke='#292C6D'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M2.5 8.33334H6.66667'
                  stroke='#292C6D'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M14.5835 14.5833L13.3335 13.5417V11.6667'
                  stroke='#292C6D'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M18.3335 13.3333C18.3335 14.6594 17.8067 15.9312 16.869 16.8689C15.9313 17.8066 14.6596 18.3333 13.3335 18.3333C12.0074 18.3333 10.7356 17.8066 9.79796 16.8689C8.86028 15.9312 8.3335 14.6594 8.3335 13.3333C8.3335 12.0073 8.86028 10.7355 9.79796 9.79781C10.7356 8.86013 12.0074 8.33334 13.3335 8.33334C14.6596 8.33334 15.9313 8.86013 16.869 9.79781C17.8067 10.7355 18.3335 12.0073 18.3335 13.3333Z'
                  stroke='#292C6D'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <div className='text-[14px] leading-[18px] capitalize'>
                <h1 className='font-[400]'>Investment Period</h1>
                <p className='font-[700]'>{currentProject.period}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col py-[24px]'>
            <div className='flex justify-between'>
              <p className='text-[16px] font-[500] tracking-[0.46px]'>
                ₹ <span>0</span> / ₹ <span>{currentProject.totalCost}</span>
              </p>
              <p className='pr-[20px]'>70%</p>
            </div>

            <div className='h-[9px] w-[275px] sm:w-[404px] bg-[#FF4F17] rounded-[13px] mt-[16px]'></div>
          </div>
          <button className='w-[150px] py-[13.595px] px-[20.392px] mt-[10px] rounded-[120px] bg-[#292C6D] uppercase text-[14px] font-[700] leading-[18.2px] text-white'>
            view project
          </button>
        </div>
      </div>
      <div className='flex justify-center items-center gap-[56px] text-[12px] font-[500] leading-[15.6px] tracking-[1.68px] uppercase py-[40px]'>
        <button
          className='flex gap-[11px]'
          onClick={previousProject}
          disabled={currentIndex === 0}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
          >
            <path
              d='M13.5 7H1M1 7L7 1M1 7L7 13'
              stroke='#23262F'
              strokeWidth='0.5'
            />
          </svg>
          <p
            className={currentIndex === 0 ? `text-[#91949c]` : `text-[#353945]`}
          >
            Previous Project
          </p>
        </button>
        <button
          className='flex gap-[11px]'
          onClick={nextProject}
          disabled={currentIndex === projectData.length - 1}
        >
          <p
            className={
              currentIndex === projectData.length - 1
                ? `text-[#91949c]`
                : `text-[#353945]`
            }
          >
            Next project
          </p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
          >
            <path
              d='M0.5 7H13M13 7L7 1M13 7L7 13'
              stroke='#23262F'
              strokeWidth='0.5'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ProjectsSection
