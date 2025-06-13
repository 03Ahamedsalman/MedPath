import { getMeta } from "@/utils/getMeta";
import seoData from "@/const/seoData";
import HeroSection from "./hero/components/heroSection";

export const metadata = getMeta(seoData.home);
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
    </div>
  );
};

export default Home;
