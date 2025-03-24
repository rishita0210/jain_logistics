// "use client";

// import React, { useEffect, useRef } from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ContactUs = () => {
//   const titleRef = useRef(null);
//   const boxesRef = useRef([]);
//   const formRef = useRef(null);

//   useEffect(() => {
//     // Title animation
//     gsap.from(titleRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: titleRef.current,
//         start: "top 80%",
//       },
//     });

//     // Contact Boxes animation
//     gsap.from(boxesRef.current, {
//       opacity: 0,
//       y: 30,
//       duration: 0.8,
//       stagger: 0.2,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: boxesRef.current[0],
//         start: "top 85%",
//       },
//     });

//     // Contact Form animation
//     gsap.from(formRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: formRef.current,
//         start: "top 85%",
//       },
//     });

//     // Jiggle Animation on Hover
//     boxesRef.current.forEach((box) => {
//       box.addEventListener("mouseenter", () => {
//         gsap.to(box, {
//           x: gsap.utils.random(-3, 3),
//           y: gsap.utils.random(-3, 3),
//           rotation: gsap.utils.random(-2, 2),
//           duration: 0.15,
//           repeat: 3,
//           yoyo: true,
//           ease: "power1.inOut",
//         });
//       });

//       box.addEventListener("mouseleave", () => {
//         gsap.to(box, { x: 0, y: 0, rotation: 0, duration: 0.3, ease: "power2.out" });
//       });
//     });

//   }, []);

//   return (
//     <div className="bg-[#F5F5F5] min-h-screen flex flex-col items-center">
      
//       {/* Hero Section with Blurred Background */}
//       <div className="relative w-full h-[60vh] flex items-center justify-center text-center">
//         <div 
//           className="absolute inset-0 bg-cover bg-center filter blur-xs brightness-75" 
//           style={{ backgroundImage: "url('/contactus.jpg')" }}
//         ></div>
 
//         <h1 ref={titleRef} className="relative text-white text-4xl md:text-5xl font-bold">LOOKING FOR THE BEST LOGISTICS <br/> SERVICE?</h1>
//         <button className="bg-[#923635] text-white font-semibold">Contact Us</button>
//       </div>

//       {/* Contact Info Section */}
//       <div className="container mx-auto px-6 md:px-16 mt-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
//           {/* Phone Box */}
//           <div 
//             ref={(el) => boxesRef.current[0] = el}
//             className="border border-gray-400 bg-[#272735] text-white text-center p-8 rounded-lg shadow-md cursor-pointer group"
//           >
//             <FaPhoneAlt className="text-white text-4xl mb-4 mx-auto transition-colors group-hover:text-[#E63946]" />
//             <h3 className="text-xl font-semibold">Phone</h3>
//             <p className="mt-2">+91 98765 43210</p>
//           </div>

//           {/* Email Box */}
//           <div 
//             ref={(el) => boxesRef.current[1] = el}
//             className="border border-gray-400 bg-[#272735] text-white text-center p-8 rounded-lg shadow-md cursor-pointer group"
//           >
//             <FaEnvelope className="text-white text-4xl mb-4 mx-auto transition-colors group-hover:text-[#E63946]" />
//             <h3 className="text-xl font-semibold">Email</h3>
//             <p className="mt-2">info@jainlogistics.com</p>
//           </div>

//           {/* Address Box */}
//           <div 
//             ref={(el) => boxesRef.current[2] = el}
//             className="border border-gray-400 bg-[#272735] text-white text-center p-8 rounded-lg shadow-md cursor-pointer group"
//           >
//             <FaMapMarkerAlt className="text-white text-4xl mb-4 mx-auto transition-colors group-hover:text-[#E63946]" />
//             <h3 className="text-xl font-semibold">Address</h3>
//             <p className="mt-2">123, Business Street, New Delhi, India</p>
//           </div>

//         </div>
//       </div>

//       {/* Contact Form */}
//       {/* <div ref={formRef} className="mt-16 w-full max-w-2xl px-6 md:px-0 opacity-0">
//         <h2 className="text-3xl font-bold text-center text-gray-900">Send Us a Message</h2>
//         <form className="bg-white shadow-md rounded-lg p-8 mt-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input type="text" placeholder="Your Name" className="p-3 border border-gray-400 rounded-md w-full focus:outline-none focus:border-gray-700"/>
//             <input type="email" placeholder="Your Email" className="p-3 border border-gray-400 rounded-md w-full focus:outline-none focus:border-gray-700"/>
//           </div>
//           <textarea placeholder="Your Message" rows="5" className="mt-4 p-3 border border-gray-400 rounded-md w-full focus:outline-none focus:border-gray-700"></textarea>
//           <button type="submit" className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-md w-full hover:bg-gray-900 transition">
//             Send Message
//           </button>
//         </form>
//       </div> */}

//     </div>
//   );
// };

// export default ContactUs;


"use client";

import React, { useEffect, useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const titleRef = useRef(null);
  const boxesRef = useRef([]);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });

    gsap.from(boxesRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: boxesRef.current[0],
        start: "top 85%",
      },
    });

    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 85%",
      },
    });

    boxesRef.current.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        gsap.to(box, {
          x: gsap.utils.random(-3, 3),
          y: gsap.utils.random(-3, 3),
          rotation: gsap.utils.random(-2, 2),
          duration: 0.15,
          repeat: 3,
          yoyo: true,
          ease: "power1.inOut",
        });
      });

      box.addEventListener("mouseleave", () => {
        gsap.to(box, { x: 0, y: 0, rotation: 0, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  return (
    <div className="bg-[#272735] min-h-screen flex flex-col items-center">
      
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-xs brightness-75" 
          style={{ backgroundImage: "url('/contactus.jpg')" }}
        ></div>

        <h1 ref={titleRef} className="relative text-white text-4xl md:text-5xl font-bold">
          LOOKING FOR THE BEST LOGISTICS <br /> SERVICE?
        </h1>
        <button className="relative mt-4 px-6 py-3 bg-[#772828] text-white font-semibold rounded-lg hover:bg-[#772828] transition">
          Contact Us
        </button>
      </div>

      {/* Contact Info Section */}
      <div className="container  mx-auto px-6 md:px-16 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Phone Box */}
          <div 
            ref={(el) => boxesRef.current[0] = el}
            className="border-[3px] border-gray-600 bg-[#1E1E28] text-white text-center p-8 rounded-lg shadow-md cursor-pointer group"
          >
            <FaPhoneAlt className="text-white text-4xl mb-4 mx-auto transition-colors group-hover:text-[#772828]" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="mt-2">+91 8237173867</p>
          </div>

          {/* Email Box */}
          <div 
            ref={(el) => boxesRef.current[1] = el}
            className="border-[3px] border-gray-600 bg-[#1E1E28] text-white text-center p-8 rounded-lg shadow-md cursor-pointer group"
          >
            <FaEnvelope className="text-white text-4xl mb-4 mx-auto transition-colors group-hover:text-[#772828]" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="mt-2"> Yash@jainlogistics.co</p>
            <p className="mt-2"> Yash@jainlogistics.co</p>
          </div>

          {/* Address Box */}
          <div 
            ref={(el) => boxesRef.current[2] = el}
            className="border-[3px] border-gray-600 bg-[#1E1E28] text-white text-center p-8 rounded-lg shadow-md cursor-pointer group"
          >
            <FaMapMarkerAlt className="text-white text-4xl mb-4 mx-auto transition-colors group-hover:text-[#772828]" />
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="mt-2"> 206, City One Complex, Rudrapur, Uttrakhand, 263153</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactUs;
