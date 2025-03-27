"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaChartLine, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Intent Fulfillment: 97%",
      description: "We ensure customer requirements are met with precision and dedication.",
      icon: <FaCheckCircle />,
    },
    {
      id: 2,
      title: "On-Time Deliveries: 90%",
      description: "Punctuality is our priority, ensuring timely deliveries for all shipments.",
      icon: <FaClock />,
    },
    {
      id: 3,
      title: "Daily Tracking Reports",
      description: "Stay updated with real-time tracking and detailed daily reports.",
      icon: <FaChartLine />,
    },
    {
      id: 4,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available round the clock to assist you.",
      icon: <FaHeadset />,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center p-8 bg-[#03346E] relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg opacity-50"
        style={{ backgroundImage: "url('/background.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h1>
        <p className="text-lg text-gray-400 mb-8">
          We prioritize efficiency, reliability, and customer satisfaction.
        </p>

        {/* Feature Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              whileHover={{ scale: 1.1 }} // Scale up effect on hover
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center 
                         hover:bg-[#dff0ff] transition-all duration-300 cursor-pointer"
            >
              <motion.div
                // whileHover={{ scale: 1.3 }} // Icon grows on hover
                transition={{ duration: 0.3 }}
                className="text-4xl text-[#03346E] mb-2 hover:scale-130"
              >
                {feature.icon}
              </motion.div>
              <h2 className="text-xl font-semibold text-gray-800">{feature.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
