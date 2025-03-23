
import Navbar from "@/app/components/navbar"
import Hero from "./components/hero";
import Details from "./components/details";
import LogisticsProjects from "./components/LogisticsProjects"
import EdgeFeatures from "./components/EdgeFeatures";
import Partners from "./components/partners"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Details/>
      <LogisticsProjects/>
      <EdgeFeatures/>
      <Partners/>
     
    </div>
  );
}