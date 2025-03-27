"use client"
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaChartLine, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center p-8 bg-[#03346E] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center filter blur-lg opacity-50" style={{ backgroundImage: "url('/background.jpg')" }}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h1>
        <p className="text-lg text-gray-400 mb-8">We prioritize efficiency, reliability, and customer satisfaction.</p>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Box 1 */}
          <motion.div whileHover={{ scale: 1.05 }} whileInView={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center hover:bg-[#dff0ff] transition-all duration-300">
            <motion.div whileHover={{ scale: 1.2 }} className="text-4xl text-[#03346E] mb-2">
              <FaCheckCircle />
            </motion.div>
            <h2 className="text-xl font-semibold text-gray-800">Intent Fulfillment: 97%</h2>
            <p className="text-gray-600 text-sm mt-2">We ensure customer requirements are met with precision and dedication.</p>
          </motion.div>

          {/* Box 2 */}
          <motion.div whileHover={{ scale: 1.05 }} whileInView={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center hover:bg-[#dff0ff] transition-all duration-300">
            <motion.div whileHover={{ scale: 1.2 }} className="text-4xl text-[#03346E] mb-2">
              <FaClock />
            </motion.div>
            <h2 className="text-xl font-semibold text-gray-800">On-Time Deliveries: 90%</h2>
            <p className="text-gray-600 text-sm mt-2">Punctuality is our priority, ensuring timely deliveries for all shipments.</p>
          </motion.div>

          {/* Box 3 */}
          <motion.div whileHover={{ scale: 1.05 }} whileInView={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center hover:bg-[#dff0ff] transition-all duration-300">
            <motion.div whileHover={{ scale: 1.2 }} className="text-4xl text-[#03346E] mb-2">
              <FaChartLine />
            </motion.div>
            <h2 className="text-xl font-semibold text-gray-800">Daily Tracking Reports</h2>
            <p className="text-gray-600 text-sm mt-2">Stay updated with real-time tracking and detailed daily reports.</p>
          </motion.div>

          {/* Box 4 */}
          <motion.div whileHover={{ scale: 1.05 }} whileInView={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center hover:bg-[#dff0ff] transition-all duration-300">
            <motion.div whileHover={{ scale: 1.2 }} className="text-4xl text-[#03346E] mb-2">
              <FaHeadset />
            </motion.div>
            <h2 className="text-xl font-semibold text-gray-800">24/7 Customer Support</h2>
            <p className="text-gray-600 text-sm mt-2">Our dedicated support team is available round the clock to assist you.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;


