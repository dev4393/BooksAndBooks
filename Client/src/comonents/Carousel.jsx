import banner1 from '../assets/banner1.webp'
import banner2 from '../assets/banner2.webp'
import banner3 from '../assets/banner3.webp'
const Carousel = () => {
  return (
    <>
    <div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
    <img src={banner1} alt="Drink" className='w-[100vw]' />
  </div> 
  <div className="carousel-item">
    <img src={banner2} alt="Drink" className='w-[100vw]'/>
  </div> 
  <div className="carousel-item">
    <img src={banner3} alt="Drink" className='w-[100vw]' />
  </div> 
  
</div>
    </>
  )
}

export default Carousel