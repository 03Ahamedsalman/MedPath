import { getMeta } from "@/utils/getMeta";
import seoData from "@/const/seoData";
import OurUniversity from "./hero/components/OurUniversity";
import HeroSection from "./hero/components/heroSection";
import AbouSecttion from "./hero/components/AboutSection";
import Testimonials from "./hero/components/Testimonials";
import FreeConsult from "./hero/components/FreeConsult";
import ServiceSection from "./hero/components/ServiceSection";
import WhyChooseSection from "./hero/components/WhyChooseSection";
import AreYouReadySection from "./hero/components/AreYouReadySection";

export const metadata = getMeta(seoData.home);
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <OurUniversity />
      <AbouSecttion />
      <Testimonials />
      <FreeConsult />
      <ServiceSection />
      <WhyChooseSection />
      <AreYouReadySection />
    </div>
  );
};

export default Home;
