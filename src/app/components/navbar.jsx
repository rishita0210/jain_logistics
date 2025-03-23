"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef(null);
  const [dropdown, setDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, { opacity: 0, y: -20, duration: 1, ease: "power3.out" });
  }, []);

  const menuItems = [
    { title: "Home" },
    { title: "About Us", dropdown: ["Our Team", "Our Vision", "History"] },
    { title: "Services", dropdown: ["Web Development", "SEO", "Marketing"] },
    { title: "Knowledge Hub", dropdown: ["Blogs", "Case Studies", "Resources"] },
    { title: "Locations", dropdown: ["India", "USA", "UK"] },
    { title: "Careers", dropdown: ["Open Positions", "Internships", "Culture"] },
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-[#923635]">Jain Logisitcs
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Menu Items */}
        <ul className={`md:flex space-x-6 absolute md:relative bg-white md:bg-transparent top-16 md:top-0 left-0 w-full md:w-auto shadow-md md:shadow-none transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"}`}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer px-4 py-2 md:p-0"
              onMouseEnter={() => setDropdown(item.dropdown ? index : null)}
              onMouseLeave={() => setDropdown(null)}
            >
              <div className="flex items-center space-x-1 hover:text-red-600">
                <span>{item.title}</span>
                {item.dropdown && <FaChevronDown className="text-sm" />}
              </div>
              {item.dropdown && dropdown === index && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md border rounded-md py-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Us Button */}
        <button className="hidden md:block px-6 py-2 bg-black text-white rounded-md hover:bg-[#923635] transition">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
