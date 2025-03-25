"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const navRef = useRef(null);
  const [dropdown, setDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  let timeoutId;

  useEffect(() => {
    gsap.from(navRef.current, { opacity: 0, y: -20, duration: 1, ease: "power3.out" });
  }, []);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutId);
    setDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setDropdown(null), 200);
  };

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About Us", dropdown: [
        { name: "Company Overview", link: "/about/company-overview" },
        { name: "Our Journey", link: "/about/our-journey" },
        { name: "Our Strengths", link: "/about/our-strengths" },
        { name: "Awards & Achievements", link: "/about/awards" },
        { name: "Leadership", link: "/about/leadership" }
      ] 
    },
    { title: "Services", dropdown: [
        { name: "Full Truck Load Transportation", link: "/shops/services/full_truck_load" },
        { name: "Warehouse Management", link: "/shops/services/Warehouse" },
        { name: "Part Truck Load Transportation", link: "/shops/services/part_truck_load" }
      ]
    },
    { title: "Knowledge Hub", dropdown: [
        { name: "News & Blogs", link: "/knowledge-hub/news-blogs" },
        { name: "Technology", link: "/knowledge-hub/technology" }
      ]
    },
    { title: "Careers", link: "/careers" }
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-[#03346E]">Jain Logistics</div>
        
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
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.link ? (
                <Link href={item.link} className="flex items-center space-x-1 hover:text-[#03346E]">
                  <span>{item.title}</span>
                </Link>
              ) : (
                <div className="flex items-center space-x-1 hover:text-[#03346E]">
                  <span>{item.title}</span>
                  {item.dropdown && <FaChevronDown className="text-sm" />}
                </div>
              )}
              {item.dropdown && dropdown === index && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-md border rounded-md py-2"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.link}>
                      <div className="px-4 py-2 hover:bg-gray-100 text-gray-700">{subItem.name}</div>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Us Button */}
        <Link href="/contact">
          <button className="hidden md:block px-6 py-2 bg-black text-white rounded-md hover:bg-[#03346E] transition">
            Contact Us
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
