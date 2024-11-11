import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { insuranceLogoData } from "./insuranceLogoData";
import insuranceIcon from "../../assets/images/logo/insurance logo/insuranceLogo.png";

const InsuranceLogo = () => {
  const settings = {
    arrows: false, // Changed from 'arrow' to 'arrows'
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false, // Ensure arrows are false here as well
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false, // Ensure arrows are false here as well
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false, // Ensure arrows are false here as well
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 w-full mx-auto my-1 text-center">
      <div className="container ">
        <div className="flex flex-col items-center py-4">
          <img
            width={50}
            height={50}
            src={insuranceIcon}
            alt="insurance icon logo"
            className="mb-2"
          />
          <h2 className="font-medium text-lg text-blue-700">
            156+ insurance plans accepted
          </h2>
        </div>
        <Slider {...settings}>
          {insuranceLogoData.map((img, index) => (
            <div key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={img.imgUrl}
                  alt="insurance logos"
                  className="w-40 h-40 object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default InsuranceLogo;
