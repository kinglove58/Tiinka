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
    <div className="container mx-auto font-sans px-4 md:px-20 ">
      <div
        className={`flex flex-col-reverse  pb-2 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center justify-between w-full`}
      >
        {/* Left Section */}
        <div className="md:w-1/2 flex justify-center mb-4 md:mb-0 sm:mt-4">
          <img src={img} alt={imgAlt} className="w-full max-w-md shadow-md " />
        </div>
        {/* Right Section */}
        <div className="md:w-1/2 text-center md:text-left max-w-lg bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-3xl text-gray-800 font-medium mb-4 font-serif">
            {title}
          </h2>
          <p className="text-gray-600 mb-4 font-sans">{subTitle}</p>
        </div>
      </div>
      {showArrow && (
        <div className="flex justify-center md:mt-12 pb-16">
          <FaArrowDownLong className="text-blue-600 text-3xl" />
        </div>
      )}
    </div>
  );
}

export default WhyChooseUs;
