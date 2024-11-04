import WhyChooseUs from "./WhyChooseUs";
import coupleTherapy from "../../assets/images/img mental health/why choose us/couples/coupleTherapy.png";
import laugh from "../../assets/images/img mental health/why choose us/laugh/laugh.png";
import sleep from "../../assets/images/img mental health/why choose us/sleep better/sleep.png";
import teen from "../../assets/images/img mental health/why choose us/teen/teen.png";

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
    img: coupleTherapy,
    imgAlt: "couple happy together",
    title: "Because you could be better together.",
    subTitle:
      "We help couples strengthen their bond, fostering deeper connection and mutual growth so you can face life’s challenges side-by-side.",
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

const PickUs = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h1 className="font-bold text-3xl capitalize">Why Choose Us?</h1>
      </div>
      {whyChooseUsData.map((item, index) => (
        <WhyChooseUs
          key={index}
          img={item.img}
          imgAlt={item.imgAlt}
          title={item.title}
          subTitle={item.subTitle}
          showArrow={item.showArrow !== false} // Default to true if not specified
        />
      ))}
    </div>
  );
};

export default PickUs;
