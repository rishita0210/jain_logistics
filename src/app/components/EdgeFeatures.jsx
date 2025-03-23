"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EdgeFeatures = () => {
  const boxesRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      boxesRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FBF8EE] mt-20 py-20 px-6 md:px-24 flex flex-col md:flex-row items-center"
    >
  
      <div className="w-full md:w-1/3 text-center md:text-left mb-10 md:mb-0">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Cutting-Edge Features <br /> Defining JAIN Logistics
        </h2>
      </div>

      <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-center gap-6">
        {[
          { title: "TAILORED LOGISTICS SOLUTIONS", desc: "Our personalized approach optimizes efficiency to meet your unique business needs.." },
          { title: "DEDICATED CUSTOMER SUPPORT", desc: "We prioritize responsive assistance and issue resolution for a trusted partnership." },
          { title: "NATIONWIDE NETWORK", desc: "With an extensive presence, we ensure your logistics needs are met PAN India." }
        ].map((item, index) => (
          <div
            key={index}
            ref={(el) => (boxesRef.current[index] = el)}
            className="bg-white text-gray-900 p-6 w-full md:w-[30%] h-[200px] flex flex-col justify-center items-center text-center shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EdgeFeatures;


