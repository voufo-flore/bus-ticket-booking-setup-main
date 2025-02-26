import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaPhone, FaUserCircle, FaHome, FaTicketAlt, FaBell, FaInfoCircle, FaBusAlt } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import Logo from "../../assets/logo.png";
import Theme from "../theme/Theme";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/buses", label: "Buses", icon: <FaBusAlt /> },
    { href: "/booking", label: "Booking", icon: <FaTicketAlt /> },
    { href: "/notifications", label: "Notification", icon: <FaBell /> },
    { href: "/support", label: "Support", icon: <FaPhone /> },
    { href: "/about", label: "About Us", icon: <FaInfoCircle /> },
  ];

  return (
    <div className="w-full h-[8ch] bg-white dark:bg-gray-900 flex items-center px-6 md:px-16 fixed top-0 z-50 shadow-md">
      {/* Logo */}
      <Link to="/" className="mr-16">
        <img src={Logo} alt="logo" className="w-32 h-auto" />
      </Link>

      {/* Toggle Button for Mobile */}
      <button onClick={() => setOpen(!open)} className="lg:hidden ml-auto text-gray-700 dark:text-gray-300">
        {open ? <LiaTimesSolid className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>

      {/* Navigation Links */}
      <div className={`${open ? "flex flex-col" : "hidden"} lg:flex flex-1 lg:flex-row gap-6 lg:items-center lg:justify-between`}>
        <ul className="list-none flex flex-col lg:flex-row items-start lg:items-center gap-4 text-gray-700 dark:text-gray-300">
          {navLinks.map((link, index) => (
            <li key={index} className="flex items-center gap-2">
              <Link to={link.href} onClick={() => setOpen(false)} className="hover:text-violet-600 transition duration-300 flex items-center gap-2">
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section - Contact & User Profile */}
        <div className="flex items-center gap-6">
          {/* Contact Support */}
          <div className="flex items-center bg-violet-600 text-white px-4 py-2 rounded-md cursor-pointer">
            <FaPhone className="mr-2" />
            <span className="text-sm">+91 1234567890</span>
          </div>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center text-gray-700 dark:text-gray-300">
              <FaUserCircle className="text-2xl" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2">
                <Link to="/profile" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </Link>
                <Link to="/logout" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Logout
                </Link>
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <Theme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
