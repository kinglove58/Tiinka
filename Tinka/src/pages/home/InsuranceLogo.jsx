import React, { memo } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { insuranceLogoData } from "./insuranceLogoData";
import insuranceIcon from "/images/logo/insurance_logo/insuranceLogo.webp";

const InsuranceLogo = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Increase autoplay speed to reduce frequent re-renders
    pauseOnHover: true, // Pause on hover to improve user experience
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 w-full mx-auto my-1 text-center">
      <div className="container">
        <div className="flex flex-col items-center py-4">
          <img
            width={50}
            height={50}
            src={insuranceIcon}
            alt="insurance icon logo"
            className="mb-2"
            loading="lazy" // Lazy load the image
          />
          <h2 className="font-medium text-lg text-blue-700  min-h-[30px] ">
            Insurance accepted including Medicaid and Medicare
          </h2>

          <Link
            to="/insurance-we-accept"
            className="mt-2 text-sm text-blue-700 font-semibold hover:underline"
          >
            <button className="text-sm px-2 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
              View All Accepted Insurances in Maryland, DC and Virginial
            </button>
          </Link>
        </div>
        <Slider {...settings}>
          {insuranceLogoData.map((img) => (
            <div key={img.imgUrl}>
              <div className="flex justify-center items-center">
                <img
                  src={img.imgUrl}
                  width="300"
                  height="200"
                  alt="insurance logos"
                  className="w-40 h-40 object-contain"
                  loading="lazy" // Lazy load the images
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default memo(InsuranceLogo);
