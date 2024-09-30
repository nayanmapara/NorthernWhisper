"use client";

import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#03040B] text-white py-4 shadow-md animate-fade-bottom duration-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold header-title">
            <a href="/">NW</a>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="/about" className="hover:text-blue-500">About</a>
          <a href="/contact" className="hover:text-blue-500">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Menu">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3BottomRightIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-[#1B1C24]">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="/" className="hover:text-blue-500">Home</a>
            <a href="/about" className="hover:text-blue-500">About</a>
            <a href="/contact" className="hover:text-blue-500">Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
