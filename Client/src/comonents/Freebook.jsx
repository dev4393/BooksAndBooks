import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
const Freebook = () => {
  const filterData =list.filter((data)=>data.category==='free');
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
    <>
<div className='container px-4 mx-auto max-w-screen-2xl md:px-20'>
  <div className='mb-10'>
  <h1 className='text-xl font-semibold'>Free Courses Offered</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellat, assumenda cum consectetur modi, doloribus iste iusto, nihil quis vero neque provident eius quaerat sequi. Eius omnis in culpa odit ad animi quas assumenda.</p>
  </div>

<div className=" mb-5 flex-row slider-container w-[90vw]">
      <Slider {...settings}>
       {filterData.map((item)=>(
        <Card item={item} key={item.id} />
       ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook;