import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold hover:text-gray-200">
              MyLogo
            </a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a href="/home" className="hover:text-gray-200">
              Home
            </a>
            <a href="/about" className="hover:text-gray-200">
              About
            </a>
            <a href="/lazyload" className="hover:text-gray-200">
              Lazy Load
            </a>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="hover:text-gray-200 focus:outline-none"
              >
                Services
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 bg-white text-black rounded shadow-lg">
                  <a href="/services/boxapp" className="block px-4 py-2 hover:bg-gray-100">
                    Box App
                  </a>
                  <a href="/services/todoapp" className="block px-4 py-2 hover:bg-gray-100">
                    Todo App
                  </a>
                  <a href="/services/timer" className="block px-4 py-2 hover:bg-gray-100">
                    Timer
                  </a>
                </div>
              )}
            </div>
            <a href="/contact" className="hover:text-gray-200">
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
