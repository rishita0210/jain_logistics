"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Details = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.3 }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full  py-16 bg-gray-100 flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
        {/* Left Side Image with Frame */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="border-8 border-gray-300 rounded-lg p-2 shadow-lg">
            <Image
              src="/details.png" // Replace with actual image path
              alt="Feature"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-xl md:text-2xl  text-[#923635] mb-4">WELCOME TO JAIN LOGISTICS</p>
          <h2 className="text-gray mb-6  text-xl ">We are a logistics company
headquartered in Pantnagar,
Uttarakhand, with over 20 years of
experience and pan-India
presence
</h2>
<p className="text-xl md:text-2xl mt-10  text-yellow-400 mb-4">SIMPLIFY YOUR FREIGHT AND LOGISTICS NEEDS WITH A PERSONAL APPROCH.</p>
          
          {/* Three Boxes Below */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-[#EFEAE4] shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Feature One</h3>
              <p className="text-gray-500">COST OPTIMISATION</p>
            </div>
            <div className="p-6 bg-[#EFEAE4] shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Feature Two</h3>
              <p className="text-gray-500">IMPROVED TRANSIT
              TIME</p>
            </div>
            <div className="p-6 bg-[#EFEAE4] shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Feature Three</h3>
              <p className="text-gray-500">TIMELY DELIVERIES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;