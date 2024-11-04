import Hero from "./Hero";
import InsuranceLogo from "./InsuranceLogo";
import Specialization from "./Specialization";
import ChooseUs from "./ChooseUs";
import EasyStart from "./EasyStart";
import Blog from "./Blog";
import Testimonial from "./Testimonial";
import MentalHealthStats from "./MentalHealthStats";
import FAQs from "./Faqs";

function Home() {
  return (
    <div>
      <div>
        <Hero />
        <InsuranceLogo />
        <Specialization />
        <ChooseUs />
        <EasyStart />
        <Testimonial />
        <MentalHealthStats />
        <FAQs />
      </div>
    </div>
  );
}

export default Home;
