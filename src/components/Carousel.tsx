'use client';
import slide1 from '../assets/images/slide-1.jpeg';
import slide2 from '../assets/images/slide-2.png';
import Image from 'next/image';

import React from 'react';
import Slider from 'react-slick';

// Importe os estilos do react-slick (opcional)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Carousel() {
  const settings = {
    dots: true, // Exibir pontos de navegação
    infinite: true, // Navegação infinita
    speed: 1500, // Velocidade de transição em milissegundos
    slidesToShow: 1, // Quantidade de slides exibidos por vez
    slidesToScroll: 1, // Quantidade de slides a serem percorridos ao navegar
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      // Configurações responsivas para diferentes tamanhos de tela
      {
        breakpoint: 1024, // Tamanho de tela abaixo do qual as configurações serão aplicadas
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className="container max-w-4xl ml-auto mr-auto pt-3">
      <div className="container max-w-4xl ml-auto mr-auto pt-3">
        <Image src={slide1} alt={`Slide`} className="rounded-lg" />
      </div>
      <div className="container max-w-4xl ml-auto mr-auto pt-3">
        <Image src={slide2} alt={`Slide`} className="rounded-lg" />
      </div>
    </Slider>
  );
}
