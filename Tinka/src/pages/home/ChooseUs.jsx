import { memo } from "react";
import { Link } from "react-router-dom";
import WhyChooseUs from "./WhyChooseUs";
import laugh from "/images/img_mental_health/why_choose_us/laugh/laugh.webp";
import sleep from "/images/img_mental_health/why_choose_us/sleep_better/sleep.webp";
import teen from "/images/img_mental_health/why_choose_us/teen/teen.webp";
import { FaArrowRight } from "react-icons/fa";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import FastBookingButton from "../../components/FastBookingButton"; // ✅ Import faster booking
import BookingLink from "../../components/BookingLink";

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

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 mb-10">
        <Link
          to="/contact"
          className="bg-white-600 text-blue-700 font-bold px-10 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 border bottom-3 border-blue-600 hover:text-white"
        >
          <span>Contact Us</span>
        </Link>

        <BookingLink className="flex hover:scale-95 transition duration-300 justify-center items-center bg-blue-700 text-white px-6 py-4 rounded-md hover:bg-blue-800">
          <FaArrowRight className="text-white text-xl mr-4" />
          <span>Book an Appointment</span>
        </BookingLink>
      </div>
    </div>
  );
};

export default memo(ChooseUs);
