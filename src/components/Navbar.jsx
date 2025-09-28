// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-slate-800">Apex IELTS</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-slate-600 hover:bg-slate-100 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-slate-600 hover:bg-slate-100 px-3 py-2 rounded-md text-sm font-medium">Courses</a>
              <a href="#" className="text-slate-600 hover:bg-slate-100 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-slate-600 hover:bg-slate-100 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-600 transition-colors">Sign Up</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-slate-100 inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-800 hover:bg-slate-200"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu button */}
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              {/* Icon for close button */}
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-slate-600 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-slate-600 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium">Courses</a>
          <a href="#" className="text-slate-600 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="text-slate-600 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          <button className="w-full text-left bg-emerald-500 text-white mt-2 px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-600">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;