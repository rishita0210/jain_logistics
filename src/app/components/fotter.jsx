"use client";

import React, { useState } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const services = [
  { name: "Freight Services", link: "#" },
  { name: "Warehousing", link: "#" },
  { name: "Customs Clearance", link: "#" },
  { name: "Supply Chain Management", link: "#" },
  { name: "Road Transport", link: "#" },
];

const galleryImages = [
  "/gallery1.jpg",
  "/gallery1.jpg",
  "/gallery1.jpg",
  "/gallery1.jpg",
  "/gallery1.jpg",
  "/gallery1.jpg",
  "/gallery1.jpg",
  "/gallery1.jpg",
  "/gallery1.jpg",
 
];

const Footer = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <footer className="bg-[#272735] text-[#8F8783] py-16 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left - Logo & Description */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-white">Jain Logistics</h2>
          <p className="text-lg font-medium">
            India's foremost logistics partner, tailoring solutions for businesses of all sizes.
          </p>
        </div>

        {/* Center - Services */}
        <div>
          <h3 className="text-2xl text-white font-bold mb-4">Our Services</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <a
                  href={service.link}
                  className="hover:text-[#923635] transition duration-300 ease-in-out text-lg"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Photo Gallery */}
        <div>
          <h3 className="text-2xl text-white font-bold mb-4">Photo Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(src)}
              >
                <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl text-white font-bold mb-4">Subscribe to Our Newsletter</h3>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-500 bg-[#1E1E28] text-white rounded-l-md w-64 focus:outline-none"
          />
          <button className="bg-[#923635] text-white px-6 py-2 rounded-r-md hover:bg-[#772828] transition duration-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom - Social Links */}
      <div className="mt-12 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Jain Logistics. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <FaFacebook className="cursor-pointer hover:text-[#923635] transition duration-300" size={22} />
          <FaInstagram className="cursor-pointer hover:text-[#923635] transition duration-300" size={22} />
          <FaLinkedin className="cursor-pointer hover:text-[#923635] transition duration-300" size={22} />
          <FaEnvelope className="cursor-pointer hover:text-[#923635] transition duration-300" size={22} />
        </div>
      </div>

      {/* Lightbox (Magnified Image Popup) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative p-4">
            <img
              src={selectedImage}
              alt="Magnified"
              className="w-[80vw] md:w-[50vw] max-h-[80vh] object-contain rounded-lg shadow-xl"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

