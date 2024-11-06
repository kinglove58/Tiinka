import Hero from "./Hero";
import InsuranceLogo from "./InsuranceLogo";
import Specialization from "./Specialization";
import ChooseUs from "./ChooseUs";
import EasyStart from "./EasyStart";
import Testimonial from "./Testimonial";
import MentalHealthStats from "./MentalHealthStats";
import FAQs from "./Faqs";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

function Home() {
  return (
    <main className="md:pt-24 bg-[#f1f2f6]">
      <div>
        <ScrollAnimationWrapper>
          <Hero />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <InsuranceLogo />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Specialization />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <ChooseUs />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <EasyStart />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Testimonial />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <MentalHealthStats />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <FAQs />
        </ScrollAnimationWrapper>
      </div>
    </main>
  );
}

export default Home;
