import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const CustomSlider = () => {
  return (
    <Slider
      trackStyle={{ backgroundColor: '#F4F5F6', height: 10 }}
      railStyle={{
        backgroundColor: 'linear-gradient(135deg, #FE9878 0%, #FF612F 100%)',
        height: 10,
      }}
      handleStyle={{
        borderColor: '#FF612F',
        height: 20,
        width: 20,
        backgroundColor: '#FF612F',
        opacity: 100,
      }}
      className='mt-[21.32px]'
    />
  )
}

export default CustomSlider
