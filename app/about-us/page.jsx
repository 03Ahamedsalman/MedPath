import { getMeta } from "@/utils/getMeta";
import seoData from "@/const/seoData";

export const metadata = getMeta(seoData.about);
const About = () => {
  return <div>About</div>;
};

export default About;
