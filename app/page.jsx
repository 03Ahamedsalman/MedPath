import { getMeta } from "@/utils/getMeta";
import seoData from "@/const/seoData";

export const metadata = getMeta(seoData.home);
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>Home</h1>
      <p>Welcome to the home page! </p>
      <p>This is the main landing page of our application.</p>
    </div>
  );
};

export default Home;
