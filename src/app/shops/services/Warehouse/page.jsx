// "use client"
// import Link from "next/link";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import ContactUs from "@/app/components/contactus";
// import Fotter from "@/app/components/fotter";

// const Warehouse = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="w-full flex flex-col items-center text-center p-8">
//       <div className="w-full h-96 relative overflow-hidden group">
//         <img 
//           src="/service.png" 
//           alt="Full Truck Load Transportation" 
//           className="w-full h-full object-cover transition-all duration-500 blur-sm opacity-90 "
//         />
//         <motion.div 
          
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 2 }} 
//           className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold  bg-opacity-30"
//         >
//           Reliable & Efficient Warehouse Services
//         </motion.div>
//         <img 
//           src="/service-hover.jpg" 
//           alt="Alternate Image" 
//           className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//         />
//       </div>
    
//       <div className="w-full flex flex-col md:flex-row justify-center items-start text-left mt-8 gap-8 max-w-6xl">
//         {/* Left Content */}
//         <div className="md:w-1/2">
//           <h1 className="text-4xl font-bold text-[#03346E]">Warehouse Services</h1>
//           <p className="mt-4 text-lg text-gray-700">
//           Our warehouse storage solutions provide secure, scalable, and efficient storage for businesses of all sizes. Whether you need short-term storage or long-term inventory management, we offer flexible solutions to meet your needs.
//         </p>
//         <p className="mt-4 text-lg text-gray-700">
//           With our state-of-the-art facilities, your goods are stored in a safe and organized environment, reducing risks of damage and loss. Our solutions are ideal for businesses requiring streamlined logistics and optimized supply chain management.
//         </p>
//         <p className="mt-4 text-lg text-gray-700">
//           We provide real-time inventory tracking, climate-controlled storage, and customized warehouse management services. Our goal is to enhance efficiency and minimize storage costs while ensuring your products are readily available when needed.
//         </p>
//           <div className="mt-6">
//             <Link href="/contact">
//               <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-[#03346E] transition">
//                 Contact Us
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Right Form */}
//         <div className="md:w-1/2 p-6 bg-gray-100 rounded-xl shadow-lg">
//           <h2 className="text-2xl font-bold text-[#03346E] mb-4">Request Our Service</h2>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-md"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-md"
//               required
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Your Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-md"
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Describe your transportation needs"
//               value={formData.message}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-md h-24"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               className="px-6 py-2 bg-[#03346E] text-white rounded-md hover:bg-black transition"
//             >
//               Submit Request
//             </button>
//           </form>
//         </div>
//       </div>

//       <div>
//         <ContactUs/>
//         <Fotter/>
//       </div>
//     </div>

    
//   );
// };

// export default Warehouse;
  
"use client"
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactUs from "@/app/components/contactus";
import Fotter from "@/app/components/fotter";
import Navbar from "@/app/components/navbar";

const Warehouse = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    
    <div className="w-full flex flex-col items-center text-center ">
        <div>
            <Navbar/>
        </div>
      <div className="w-full h-[400px] relative overflow-hidden group">
        <img 
          src="/service.png" 
          alt="Warehouse Services" 
          className="w-full h-full object-cover transition-all duration-500 blur-sm opacity-90 "
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 2 }} 
          className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold  bg-opacity-30"
        >
          Reliable & Efficient Warehouse Services
        </motion.div>
        <img 
          src="/service-hover.jpg" 
          alt="Alternate Image" 
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
    
      <div className="w-full p-5 flex flex-col md:flex-row justify-center items-start text-left mt-8 gap-8 max-w-7xl">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold text-[#03346E]">Warehouse Services</h1>
          <p className="mt-6 text-lg text-gray-700">
            Our warehouse storage solutions provide secure, scalable, and efficient storage for businesses of all sizes. Whether you need short-term storage or long-term inventory management, we offer flexible solutions to meet your needs.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            With our state-of-the-art facilities, your goods are stored in a safe and organized environment, reducing risks of damage and loss. Our solutions are ideal for businesses requiring streamlined logistics and optimized supply chain management.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            We provide real-time inventory tracking, climate-controlled storage, and customized warehouse management services. Our goal is to enhance efficiency and minimize storage costs while ensuring your products are readily available when needed.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <button className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-md hover:bg-[#03346E] transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8 bg-gray-100 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#03346E] mb-6">Request Our Service</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Describe your transportation needs"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full h-28"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#03346E] text-white rounded-md hover:bg-black transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>

      <div className="w-full mt-12">
        <ContactUs />
        <Fotter />
      </div>
    </div>
  );
};

export default Warehouse;
