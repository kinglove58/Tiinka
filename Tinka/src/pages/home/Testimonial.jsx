import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialData } from "./testimonialData";
import { FaStar } from "react-icons/fa";

function Testimonial() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 font-serif">
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))}
        </div>
        Check Out What Others Are Saying About Us
      </h1>
      <div className="max-w-2xl mx-auto mb-10">
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="text-center px-4">
              <p className="text-lg italic mb-4 font-sans">
                {testimonial.words}
              </p>
              <div className="mt-4">
                <h3 className="text-xl font-semibold font-serif">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
