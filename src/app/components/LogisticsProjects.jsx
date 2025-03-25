"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const skills = [
  { title: "Full Truck Load Transportation  ", bgColor: "bg-[#6EACDA]", direction: "left", description: " Fast, secure, and cost-effective bulk shipping." },
  { title: "Warehouse Management  ", bgColor: "bg-[#E2E2B6]", direction: "right", description: "Smart storage, seamless dispatch." },
  { title: "Part Truck Load Transportation  ", bgColor: "bg-[#6EACDA]", direction: "top", description: "Pay only for the space you use." },
  
];



const LogisticsProjects = () => {
  const containerRef = useRef(null);
  const skillRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=250%", 
        scrub: 2, 
        pin: true,
      },
    });

    skills.forEach((skill, index) => {
      let xValue = "0%", yValue = "0%";

      if (skill.direction === "left") xValue = "-100%";
      if (skill.direction === "right") xValue = "100%";
      if (skill.direction === "top") yValue = "-100%";
      if (skill.direction === "bottom") yValue = "100%";

      tl.fromTo(
        skillRefs.current[index],
        { x: xValue, y: yValue, opacity: 0 },
        {
          x: "0%",
          y: "0%",
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        index * 0.4 
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen h-[90vh] w-full overflow-hidden">
      {skills.map((skill, index) => (
        <div
          key={index}
          ref={(el) => (skillRefs.current[index] = el)}
          className={`absolute inset-0 flex items-center justify-center ${skill.bgColor} text-white text-2xl sm:text-3xl md:text-4xl font-bold px-4 text-center`}
        >
          <div className="font-bold lilita-one sm:text-xs md:text-xl lg:text-2xl text-black">
          {skill.title}<br/>
          {skill.description}
            </div>
          
        </div>
      ))}
    </div>
  );
};

export default LogisticsProjects;



