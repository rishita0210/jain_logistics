import Image from "next/image";
import { FaShieldAlt, FaUsers, FaGlobe, FaClock, FaRocket, FaHandshake } from "react-icons/fa";
import Navbar from "@/app/components/navbar";
// import Fotter from "@/app/components/Footer";
import EdgeFeatures from "@/app/components/EdgeFeatures";
// import ContactUs from "@/app/components/contactus";
import WhyChooseUs from "@/app/components/whychooseus";

const strengths = [
  { id: 1, icon: <FaShieldAlt />, title: "Reliability", description: "Ensuring secure and dependable services." },
  { id: 2, icon: <FaUsers />, title: "Expert Team", description: "A skilled workforce dedicated to excellence." },
  { id: 3, icon: <FaGlobe />, title: "Global Reach", description: "Expanding operations across multiple regions." },
  { id: 4, icon: <FaClock />, title: "Timely Delivery", description: "Commitment to punctual and efficient service." },
  { id: 5, icon: <FaRocket />, title: "Innovation", description: "Constantly improving with cutting-edge technology." },
  { id: 6, icon: <FaHandshake />, title: "Strong Partnerships", description: "Building lasting relationships with clients." },
];

const OurStrength = () => {
  return (
    <div className="w-full min-h-screen bg-[#011D33] text-white">
      <Navbar />
      <div className="relative w-full h-100px] md:h-[500px] flex flex-col items-center justify-center">
  <img 
    src="/service.png" 
    alt="Company Overview" 
    className="w-full h-full object-cover blur-sm opacity-90"
  />

  <div className="absolute text-center">
    <h2 className="text-2xl md:text-4xl font-bold text-[#FBF8EE] drop-shadow-lg">
    Our Strength
    </h2>
    <h2 className="text-md md:text-xl text-gray-400 drop-shadow-lg mt-4">
    The pillars that drive our success and excellence.
    </h2>
  </div>
</div>

     

      <div>
        <EdgeFeatures/>
      </div>
      <div>
        <WhyChooseUs/>
      </div>
      {/* <div>
        <ContactUs/>
      </div> */}

      {/* <Fotter /> */}
    </div>
  );
};

export default OurStrength;
