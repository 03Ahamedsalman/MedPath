import React from "react";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  UNIVERSITIES_ROUTE,
} from "@/utils/routes";
import {
  Footerbg,
  Footershape1,
  Footershape2,
} from "../../assets/assets";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const ContactInfo = [
  {
    icon: <FaPhoneAlt className="text-white text-xl" />,
    title: "Call us any time:",
    value: "+91 96004 00499",
  },
  {
    icon: <FaEnvelope className="text-white text-xl" />,
    title: "Email us 24/7 hours:",
    value: "studydoctora4@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt className="text-white text-xl" />,
    title: "Our Office Location:",
    value: "Madurai, Chennai, Tamil Nadu",
  },
];

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden bg-[#0B0B45]">
      <div 
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${Footerbg.src})` }}
      />
    
      <div className="relative z-10">
        <div className="absolute inset-0 pointer-events-none z-0" />
        <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left border-b border-blue-900/30 pb-8">
            {ContactInfo.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 justify-center md:justify-start ${
                  index < ContactInfo.length - 1 
                    ? "md:border-r md:border-blue-900/30 md:pr-8" 
                    : ""
                }`}
              >
                <div className="relative w-16 h-16 flex-shrink-0">
                  <div className="absolute inset-0 bg-[#0d6efd]/20 rounded-full z-[1]" />
                  <div className="relative w-full h-full rounded-full bg-[#0d6efd]/10 backdrop-blur-sm flex items-center justify-center z-[3]">
                    {item.icon}
                  </div>
                  <span className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-[#0d6efd] transform -translate-x-1/12 -translate-y-1/6 z-[2]" />
                  <span className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-[#0d6efd] transform translate-x-1/12 translate-y-1/4 z-[2]" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-300 mb-1">{item.title}</p>
                  <p className="font-semibold text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="relative z-10 w-[80%] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-16 text-sm group overflow-hidden rounded-lg mt-8"
        style={{
          background: `url(${Footerbg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <img 
            src="/MedpathsloganLogo.png"
            alt="Study Doctor Logo"
            className="h-16 mb-6"
          />
          <p className="text-gray-300 mb-6 text-base">
            THE SOUTH INDIAN REPRESENTATIVE<br />
            FOR MEDICAL UNIVERSITIES ABROAD.
          </p>
          <p className="text-white font-bold mb-4">FOLLOW US ON:</p>
          <div className="flex space-x-4">
            <a href="#" className="relative w-8 h-8 group">
              <div className="absolute inset-0 bg-[#0d6efd]/20 rounded-full hover:bg-[#0d6efd] transition-colors" />
              <div className="relative w-full h-full rounded-full bg-[#0d6efd]/10 backdrop-blur-sm flex items-center justify-center">
                <FaInstagram className="text-white text-lg" />
              </div>
            </a>
            <a href="#" className="relative w-8 h-8 group">
              <div className="absolute inset-0 bg-[#0d6efd]/20 rounded-full hover:bg-[#0d6efd] transition-colors" />
              <div className="relative w-full h-full rounded-full bg-[#0d6efd]/10 backdrop-blur-sm flex items-center justify-center">
                <FaFacebookF className="text-white text-lg" />
              </div>
            </a>
            <a href="#" className="relative w-8 h-8 group">
              <div className="absolute inset-0 bg-[#0d6efd]/20 rounded-full hover:bg-[#0d6efd] transition-colors" />
              <div className="relative w-full h-full rounded-full bg-[#0d6efd]/10 backdrop-blur-sm flex items-center justify-center">
                <FaLinkedinIn className="text-white text-lg" />
              </div>
            </a>
            <a href="#" className="relative w-8 h-8 group">
              <div className="absolute inset-0 bg-[#0d6efd]/20 rounded-full hover:bg-[#0d6efd] transition-colors" />
              <div className="relative w-full h-full rounded-full bg-[#0d6efd]/10 backdrop-blur-sm flex items-center justify-center">
                <FaYoutube className="text-white text-lg" />
              </div>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-6 relative">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#0d6efd]"></span>
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="/" className="hover:text-[#0d6efd] transition-colors">Home</a></li>
            <li><a href={ABOUT_ROUTE} className="hover:text-[#0d6efd] transition-colors">About Us</a></li>
            <li><a href={UNIVERSITIES_ROUTE} className="hover:text-[#0d6efd] transition-colors">All Countries</a></li>
            <li><a href={CONTACT_ROUTE} className="hover:text-[#0d6efd] transition-colors">Contact us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-6 relative">
            Resources
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#0d6efd]"></span>
          </h3>
          <ul className="space-y-3 text-gray-300 mb-8">
            <li><a href="#" className="hover:text-[#0d6efd] transition-colors">Blogs</a></li>
            <li><a href="#" className="hover:text-[#0d6efd] transition-colors">Gallery</a></li>
          </ul>

          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Get in touch!
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#0d6efd]"></span>
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe our newsletter to get our latest Update & news
            </p>
            <form className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-[#0d6efd]"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#0d6efd]"
                >
                  <FaEnvelope className="text-xl" />
                </button>
              </div>
              <button
                type="submit"
                className="bg-[#0d6efd] text-white px-6 py-3 rounded font-semibold hover:bg-[#0b5ed7] transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
        
      <img 
        src={Footershape1.src} 
        alt="" 
        className="absolute left-10 top-20 pointer-events-none"
      />
      
      <img 
        src={Footershape2.src} 
        alt="" 
        className="absolute right-10 bottom-20 pointer-events-none"
      />

      <div className="relative z-10 text-center text-gray-400 text-sm py-4 border-t border-blue-900/30">
        Copyright © 2024 Study Doctor, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;