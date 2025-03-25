"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const partners = [
  { id: 1, logo: "/partner1.png" },
  { id: 2, logo: "/partner2.png" },
  { id: 3, logo: "/partner3.png" },
  { id: 4, logo: "/partner4.png" },
  { id: 5, logo: "/partner5.png" },
  { id: 6, logo: "/partner6.png" },
  { id: 7, logo: "/partner7.png" },
];

const TrustedRelationships = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    gsap.to(carouselRef.current, {
      xPercent: -50 * (partners.length / 2), // Moves carousel
      ease: "linear",
      duration: 15, // Slower movement
      repeat: -1, // Infinite loop
    });

  }, []);

  return (
    <section className="bg-[#FBF8EE] py-16 px-6 md:px-24 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        Our Trusted Relationships
      </h2>

      {/* Carousel Container */}
      <div className="relative overflow-hidden w-full">
        <div
          ref={carouselRef}
          className="flex space-x-10 w-max"
        >
          {[...partners, ...partners].map((partner, index) => ( // Duplicated for smooth loop
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center w-40 h-40"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedRelationships;

