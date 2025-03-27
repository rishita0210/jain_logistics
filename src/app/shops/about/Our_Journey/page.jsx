"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaShippingFast, FaGlobe, FaWarehouse, FaTruck, FaBuilding, FaHandshake } from "react-icons/fa";
import Navbar from "@/app/components/navbar";
import Partners from '@/app/components/partners';
// import ContactUs from "@/app/components/contactus";
// import Fotter from "@/app/components/Footer";

const journeyData = [
  { id: 1, image: "/journey1.png", icon: <FaShippingFast />, text: "Started operations with a single truck.", bg: "bg-blue-800" },
  { id: 2, image: "/journey2.png", icon: <FaGlobe />, text: "Expanded globally with new trade routes.", bg: "bg-green-700" },
  { id: 3, image: "/journey3.png", icon: <FaWarehouse />, text: "Opened state-of-the-art warehouses.", bg: "bg-pink-700" },
  { id: 4, image: "/journey4.png", icon: <FaTruck />, text: "Achieved 1M+ successful deliveries.", bg: "bg-purple-700" },
  { id: 5, image: "/journey5.png", icon: <FaBuilding />, text: "Partnered with top logistics firms.", bg: "bg-red-700" },
  { id: 6, image: "/journey6.png", icon: <FaHandshake />, text: "Built a trusted brand in logistics.", bg: "bg-yellow-600" },
];

const OurJourney = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % journeyData.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#FBF8EE]">

      

      <div className="relative w-full h-100px] md:h-[500px] flex flex-col items-center justify-center">
  <img 
    src="/service.png" 
    alt="Company Overview" 
    className="w-full h-full object-cover blur-sm opacity-90"
  />

  <div className="absolute text-center">
    <h2 className="text-2xl md:text-4xl font-bold text-[#FBF8EE] drop-shadow-lg">
      Our Journey
    </h2>
    <h2 className="text-md md:text-xl text-gray-400 drop-shadow-lg mt-4">
      Navigating Growth and Success in Six Distinct Phases
    </h2>
  </div>
</div>



      {/* Section Title */}
     

      {/* Animated Background Image */}
      <div className="relative w-full flex justify-center mt-36">
        {/* <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-full h-[500px] rounded-lg overflow-hidden"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/our_journeybackground.jpg"
            alt="Journey Background"
            className="w-full h-full object-cover blur-xs"
          />
        </motion.div> */}

        {/* Horizontal Scrolling Carousel */}
        <div className="relative w-[90%] overflow-hidden z-10">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: `-${currentIndex * 220}px` }}
            transition={{ ease: "linear", duration: 2.5 }}
          >
            {journeyData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`relative flex flex-col items-center justify-center p-6 rounded-lg shadow-xl w-52 md:w-64 transition-all ${
                  index === currentIndex ? "scale-110 z-20" : "scale-90 opacity-70"
                }`}
                style={{ backgroundColor: index === currentIndex ? item.bg : "#ffffff" }}
              >
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden shadow-lg">
                  <Image src={item.image} alt="Journey Milestone" width={200} height={200} className="object-cover w-full h-full" />
                </div>

                <div className="mt-4 text-center text-black">
                  <motion.div className="text-4xl">{item.icon}</motion.div>
                  <p className="text-base font-semibold mt-2">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Spacer to push content below */}
      <div className="h-32"></div>

      {/* Other Sections */}
      <Partners/>
      {/* <ContactUs />
      <Fotter /> */}
    </div>
  );
};

export default OurJourney;




