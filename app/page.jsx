import { getMeta } from "@/utils/getMeta";
import seoData from "@/const/seoData";
import OurUniversity from "./hero/components/OurUniversity";
import HeroSection from "./hero/components/heroSection";
import AbouSecttion from "./hero/components/AboutSection";

export const metadata = getMeta(seoData.home);
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <OurUniversity />
      <AbouSecttion />
    </div>
  );
};

export default Home;
