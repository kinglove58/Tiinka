import { memo } from "react";
import WhyChooseUs from "./WhyChooseUs";
import laugh from "/images/img_mental_health/why_choose_us/laugh/laugh.webp";
import sleep from "/images/img_mental_health/why_choose_us/sleep_better/sleep.webp";
import teen from "/images/img_mental_health/why_choose_us/teen/teen.webp";
import { FaArrowRight } from "react-icons/fa";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import FastBookingButton from "../../components/FastBookingButton"; // ✅ Import faster booking

const whyChooseUsData = [
  {
    img: laugh,
    imgAlt: "people smiling",
    title: "Because you deserve more smiles every day.",
    subTitle:
      "We bring joy to your journey by creating moments that uplift you, helping you experience genuine happiness in daily life.",
  },
  {
    img: teen,
    imgAlt: "teen image",
    title: "Because growing up comes with its battles.",
    subTitle:
      "Our services support young minds through the unique struggles of childhood and adolescence, providing tools to navigate challenges with resilience.",
  },
  {
    img: sleep,
    imgAlt: "man and woman sleeping better",
    title: "Because a quiet mind sleeps better.",
    subTitle:
      "We help you achieve peace of mind, leading to restful sleep and improved well-being, so you wake up ready to take on the day.",
    showArrow: false,
  },
];

const ChooseUs = () => {
  return (
    <div className="pb-16 bg-gradient-to-b from-gray-100 via-blue-100 to-blue-50">
      <div className="text-center mb-16">
        <h1 className="font-bold text-3xl capitalize">Why Choose Us?</h1>
      </div>

      {whyChooseUsData.map((item, index) => (
        <ScrollAnimationWrapper key={index}>
          <WhyChooseUs
            img={item.img}
            imgAlt={item.imgAlt}
            title={item.title}
            subTitle={item.subTitle}
            showArrow={item.showArrow !== false}
            reverse={index % 2 !== 0}
          />
        </ScrollAnimationWrapper>
      ))}

      <div className="flex justify-around items-center mt-8 mb-10">
        <FastBookingButton className="flex hover:scale-95 transition duration-300 mt-8 md:mt-12 mb-8 md:mb-12 justify-around items-center bg-blue-700 text-white px-6 py-4 rounded-md hover:bg-blue-800">
          <FaArrowRight className="text-white-600 text-xl mr-4" />
          <span>Book an Appointment</span>
        </FastBookingButton>
      </div>
    </div>
  );
};

export default memo(ChooseUs);
