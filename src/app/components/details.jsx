
// "use client"
// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Details = () => {
//   const sectionRef = useRef(null);
//   const bgRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.3 }
//     );

//     gsap.to(bgRef.current, {
//       backgroundColor: "#03346E", // Dark Blue when scrolled
//       duration: 1.5,
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 80%",
//         toggleActions: "play reverse play reverse",
//       },
//     });
//   }, []);

//   return (
//     <section ref={sectionRef} className="w-full py-16 flex items-center justify-center" ref={bgRef}>
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
//         {/* Left Side Image with Frame */}
//         <div className="relative w-full md:w-1/2 flex justify-center">
//           <div className="border-8 border-gray-300 rounded-lg p-2 shadow-lg">
//             <Image
//               src="/details.png" 
//               alt="Feature"
//               width={500}
//               height={400}
//               className="rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Right Side Content */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <p className="text-xl md:text-xl text-[#03346E] font-bold mb-4">WELCOME TO JAIN LOGISTICS</p>
//           <h2 className="text-gray-600 mb-6 text-xl">
//             We are a logistics company headquartered in Pantnagar, Uttarakhand, with over 20 years of experience and pan-India presence.
//           </h2>
//           <p className="text-xl md:text-2xl mt-10 text-gray-600 mb-4">
//             SIMPLIFY YOUR FREIGHT AND LOGISTICS NEEDS WITH A PERSONAL APPROACH.
//           </p>
          
//           {/* Three Boxes Below */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           <div className="p-6 bg-[#6EACDA] shadow-lg rounded-lg flex flex-col items-center justify-center">
//           <Image src="/cost.png" alt="Feature" width={50} height={50} className="mb-2"/>
//           <p className="text-black font-bold">COST OPTIMISATION</p>
//           </div>
//           <div className="p-6 bg-[#6EACDA] shadow-lg rounded-lg flex flex-col items-center justify-center">
//           <Image src="/time.png" alt="Feature" width={50} height={50} className="mb-2"/>
//           <p className="text-black font-bold">IMPROVED TRANSIT
// TIME</p>
//           </div>
//           <div className="p-6 bg-[#6EACDA] shadow-lg rounded-lg flex flex-col items-center justify-center">
//           <Image src="/fast.png" alt="Feature" width={50} height={50} className="mb-2"/>
//           <p className="text-black font-bold">TIMELY DEILIVERY</p>
//           </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Details;

"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Details = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.3 }
    );

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => gsap.to(bgRef.current, { backgroundColor: "#131842", duration: 1.5 }),
      onLeave: () => gsap.to(bgRef.current, { backgroundColor: "white", duration: 1.5 }),
      onEnterBack: () => gsap.to(bgRef.current, { backgroundColor: "#131842", duration: 1.5 }),
      onLeaveBack: () => gsap.to(bgRef.current, { backgroundColor: "white", duration: 1.5 }),
    });

    // Continuous image animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2, ease: "power3.out", repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <section ref={bgRef} className="w-full py-16 flex items-center justify-center transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10" ref={sectionRef}>
        {/* Left Side Image with Animation Effect */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="border-8 border-gray-100 rounded-lg p-2 shadow-lg overflow-hidden">
            <Image
              ref={imageRef}
              src="/details.png" 
              alt="Feature"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-xl md:text-xl text-white font-bold mb-4">WELCOME TO JAIN LOGISTICS</p>
          <h2 className="text-gray-300 mb-6 text-xl">
            We are a logistics company headquartered in Pantnagar, Uttarakhand, with over 20 years of experience and pan-India presence.
          </h2>
          <p className="text-xl md:text-2xl mt-10 text-gray-300 mb-4">
            SIMPLIFY YOUR FREIGHT AND LOGISTICS NEEDS WITH A PERSONAL APPROACH.
          </p>
          
          {/* Three Boxes Below */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[{ src: "/cost.png", text: "COST OPTIMISATION" },
              { src: "/time.png", text: "IMPROVED TRANSIT TIME" },
              { src: "/fast.png", text: "TIMELY DELIVERY" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-[#6EACDA] shadow-lg rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-[#E2E2B6]"
              >
                <Image src={item.src} alt="Feature" width={50} height={50} className="mb-2" />
                <p className="text-black font-bold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;

