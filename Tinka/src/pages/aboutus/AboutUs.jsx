import { GoGoal } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import Tinka from "../../assets/images/img mental health/last image/tinka-health2.png";
import aboutImg from "../../assets/images/img mental health/aboutUs/about-us.png";
import Testimonial from "../home/Testimonial";
import { Link } from "react-router-dom";

const supportData = [
  {
    support: "Overcoming depression and anxiety",
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
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-3xl font-bold mb-4">
            We Help You to Reclaim Your Mental Health Stability
          </h1>
          <p className="text-lg">
            At Tinka Health Care Services we are dedicated to providing you and
            your loved ones with the highest level of healthcare, tailored to
            your unique needs. We accept Virtual appointments only and we've
            Care teams that collaborate with all your providers.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={aboutImg} alt="Tinka Health Services" className="w-full" />
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          What we support people with:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {supportData.map((data, index) => (
            <div key={index} className="text-lg">
              {data.support}
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {aboutUsData.map((about, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
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
      </div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Leadership</h2>
        <img
          src={Tinka}
          alt="founder picture"
          className="w-1/2 mx-auto rounded-lg shadow-md"
        />
      </div>
      <Testimonial />
      <div className="text-center mt-8">
        <Link to="/contact">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Book an Appointment now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
