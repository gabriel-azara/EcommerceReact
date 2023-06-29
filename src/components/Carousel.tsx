import Slider from 'react-slick';
import Image from 'next/image';

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <Slider {...settings}>
      <div>
        <Image src="../assets/images/slide-1.jpeg" alt="Slide 1" />
      </div>
      <div>
        <Image src="../assets/images/slide-22.png" alt="Slide 2" />
      </div>
      {/* <div>
        <Image src="../assets/images/slide3.jpg" alt="Slide 3" />
      </div> */}
    </Slider>
  );
}
