import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
    slides: number;
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slides, images }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        adaptiveHeight: true,
    };

    return (
        <Slider {...settings}>
            {images.slice(0, slides).map((image, index) => (
                <div
                    key={index}
                    className="relative w-full flex items-end justify-end overflow-hidden"
                >
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