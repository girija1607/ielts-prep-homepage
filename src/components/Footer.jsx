// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white">Apex IELTS</h3>
            <p className="mt-2 text-sm">Your path to success.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-sm hover:text-white">Home</a></li>
              <li><a href="#" className="text-sm hover:text-white">Courses</a></li>
              <li><a href="#" className="text-sm hover:text-white">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="mt-2 space-y-2">
              <li className="text-sm">support@apexielts.com</li>
              <li className="text-sm">+91 12345 67890</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Follow Us</h3>
            <div className="flex mt-2 space-x-4">
              <a href="#" className="hover:text-white"><FaFacebook size={20}/></a>
              <a href="#" className="hover:text-white"><FaTwitter size={20}/></a>
              <a href="#" className="hover:text-white"><FaInstagram size={20}/></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Apex IELTS Prep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;