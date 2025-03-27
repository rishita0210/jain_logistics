
import Navbar from "@/app/components/navbar"
import Hero from "./components/hero";
import Details from "./components/details";
import LogisticsProjects from "./components/LogisticsProjects"
import EdgeFeatures from "./components/EdgeFeatures";
import Partners from "./components/partners"
import Footer from './components/Footer'
import ContactUs from "./components/contactus";
import WhyChooseUs from "./components/whychooseus";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Details/>
      <LogisticsProjects/>
      <EdgeFeatures/>
      <Partners/>

     
      
     
    </div>
  );
}