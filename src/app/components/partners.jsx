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
      xPercent: -50 * (partners.length / 2),
      ease: "linear",
      duration: 15,
      repeat: -1,
    });
  }, []);

  return (
    <section className="bg-[#FBF8EE] py-16 px-4 md:px-12 lg:px-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Our Trusted Relationships
      </h2>

      {/* Carousel Container */}
      <div className="relative overflow-hidden w-full max-w-6xl mx-auto">
        <div
          ref={carouselRef}
          className="flex space-x-6 md:space-x-10 w-max"
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center w-28 h-28 md:w-40 md:h-40"
            >
              <img
                src={partner.logo}
                alt={`Partner ${partner.id}`}
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


