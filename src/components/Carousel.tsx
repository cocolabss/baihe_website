import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  slidesToShow: number;
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slidesToShow, images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="relative w-full flex items-end justify-end overflow-hidden">
          <img
            src={image}
            loading="lazy"
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;