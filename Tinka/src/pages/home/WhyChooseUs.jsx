import { FaArrowDownLong } from "react-icons/fa6";

function WhyChooseUs({
  img,
  imgAlt,
  title,
  subTitle,
  showArrow = true,
  reverse = false,
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className={`flex flex-col-reverse ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center justify-between w-full`}
      >
        {/* Left Section */}
        <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
          <img src={img} alt={imgAlt} className="w-full max-w-md" />
        </div>
        {/* Right Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-medium mb-4">{title}</h2>
          <p className="text-gray-700 mb-4">{subTitle}</p>
        </div>
      </div>
      {showArrow && (
        <div className="flex justify-center mt-8 mb-10">
          <FaArrowDownLong className="text-blue-600 text-3xl" />
        </div>
      )}
    </div>
  );
}

export default WhyChooseUs;
