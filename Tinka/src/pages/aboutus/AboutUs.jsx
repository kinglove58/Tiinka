import { GoGoal } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import Testimonial from "../home/Testimonial";
import { Link } from "react-router-dom";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";
import aboutImage from "../../assets/images/img mental health/aboutUs/about.png";

const supportData = [
  {
    support: "Overcoming depression",
  },
  {
    support: "Handling grief and loss",
  },
  {
    support: "Building self-esteem",
  },
  {
    support: "Managing anger",
  },
  {
    support: "Recovering from emotional abuse",
  },
  {
    support: "Facing relationship challenges",
  },
  {
    support: "Improving Sleep Health",
  },
  {
    support: "Improving Focus and Productivity",
  },
  {
    support: "and much more...",
  },
];

const aboutUsData = [
  {
    icon: GoGoal,
    title: "Our mission",
    description:
      "We make quality mental health care an integral part of people’s lives. We believe it has to be easily accessible and cost-efficient.",
  },
  {
    icon: FaEye,
    title: "Our vision",
    description:
      "We envision a world where everyone, everywhere, can get the unique support to live a better life.",
  },
  {
    icon: GiLovers,
    title: "Our values",
    description:
      "Empathy at every step. Uncompromised quality. Personalized, individual care. Embracing inclusivity and diversity. Innovation that elevates the therapeutic experience.",
  },
];

function AboutUs() {
  return (
    <main className=" mx-auto py-16 bg-white">
      <div>
        <ScrollAnimationWrapper>
          <div className="py-16 bg-gradient-to-b from-white to-blue-50">
            <h1 className="lg:text-5xl md:text-4xl text-3xl text-center font-bold md:py-12 py-8  text-[#005ab0] ">
              We Help You to Reclaim Your Mental Health Stability
            </h1>
            <div>
              <img
                className="w-full rounded-xl"
                src={aboutImage}
                alt="about us image"
              />
            </div>
          </div>
        </ScrollAnimationWrapper>

        <div className="py-10 flex flex-col items-center bg-gradient-to-b from-blue-50 via-blue-50 to-blue-100 px-4 lg:px-0">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-semibold text-[#005ab0] mb-8 text-center">
              What we support people with:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 w-full max-w-4xl">
              {supportData.map((data, index) => (
                <div key={index} className="text-lg">
                  {data.support}
                </div>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-b from-blue-100 via-blue-200 to-blue-50 py-10 px-4 lg:px-0">
          <ScrollAnimationWrapper>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl">
              {aboutUsData.map((about, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md"
                >
                  <div className="flex justify-center mb-4">
                    <about.icon className="text-4xl text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{about.title}</h3>
                  <p className="text-lg">{about.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/contact">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                  Book an Appointment now
                </button>
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>

        <ScrollAnimationWrapper>
          <Testimonial />
          <div className="text-center">
            <Link to="/contact">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 hover:scale-95 transition duration-300">
                Book an Appointment now
              </button>
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </main>
  );
}

export default AboutUs;
