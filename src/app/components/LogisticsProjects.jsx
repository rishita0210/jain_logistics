"use client"
import React, { useEffect, useRef } from "react";
import { FaRegFileCode } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logisticsServices = [
  {
    id: 1,
    title: "Freight Management",
    description:
      "Efficient freight handling and real-time tracking for optimized logistics operations.",
    image: "/services.jpg",
    codeLink: "#",
  },
  {
    id: 2,
    title: "Supply Chain Solutions",
    description:
      "End-to-end supply chain solutions ensuring smooth and reliable transportation.",
      image: "/services.jpg",
    codeLink: "#",
  },
  {
    id: 3,
    title: "Warehousing Services",
    description:
      "Secure and efficient warehousing solutions with automated inventory management.",
      image: "/services.jpg",
    codeLink: "#",
  },
  {
    id: 4,
    title: "Last Mile Delivery",
    description:
      "Fast and reliable last-mile delivery services for businesses and consumers.",
      image: "/services.jpg",
    codeLink: "#",
  },
  {
    id: 5,
    title: "Customs Clearance",
    description: "Seamless and hassle-free customs clearance for international shipments.",
    image: "/services.jpg",
    codeLink: "#",
  },
];

const LogisticsProjects = () => {
  const projectsRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (!projectsRef.current || !sectionRef.current) return;

    const totalScrollWidth = projectsRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const maxScroll = totalScrollWidth - viewportWidth;

    gsap.to(projectsRef.current, {
      x: -maxScroll,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${maxScroll}`,
        pin: true,
        scrub: 1.5,
        invalidateOnRefresh: true,
        id: "projects-scroll",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} id="Projects" className="relative bg-[#F6F4EF] text-white h-screen overflow-hidden">
      <div className="text-center lg:text-left pt-20 pb-10 px-6 md:px-24">
        
        <h1 className="text-3xl iteam-centre justify-center font-bold text-[#923635] ">
        OUR RANGE <br/>
        OF LOGISTICS SERVICES
        </h1>
      </div>

      <div className="relative w-full h-full overflow-hidden">
        <div
          ref={projectsRef}
          className="flex space-x-6 sm:space-x-10 md:space-x-14 px-6 md:px-24 items-center snap-x snap-mandatory"
        >
          {logisticsServices.map((service) => (
            <div
              key={service.id}
              className="w-48 sm:w-64 md:w-72 flex-shrink-0 bg-beige rounded-lg shadow-lg overflow-hidden snap-center"
            >
              <div className="w-full h-40 sm:h-48 md:h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3 bg-white">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-700 text-xs sm:text-sm mt-1">{service.description}</p>
              </div>
            </div>
          ))}

          <div className="w-[40vw] sm:w-[30vw] md:w-[20vw] h-72 flex-shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsProjects;

