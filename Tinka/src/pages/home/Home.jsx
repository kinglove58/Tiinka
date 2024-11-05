import Hero from "./Hero";
import InsuranceLogo from "./InsuranceLogo";
import Specialization from "./Specialization";
import ChooseUs from "./ChooseUs";
import EasyStart from "./EasyStart";
import Testimonial from "./Testimonial";
import MentalHealthStats from "./MentalHealthStats";
import FAQs from "./Faqs";
import StepGuide from "./StepGuide";

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
        <StepGuide />
      </div>
    </div>
  );
}

export default Home;
