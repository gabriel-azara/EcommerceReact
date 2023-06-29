import slide1 from '../assets/images/slide-1.jpeg';
import slide2 from '../assets/images/slide-2.png';

import Image from 'next/image';

export default function Carousel() {
  const slides = [slide1, slide2];

  return (
    <div className="container max-w-4xl ml-auto mr-auto pt-3">
      <Image src={slide1} alt={`Slide`} className='rounded-lg'/>
    </div>
  );
}
