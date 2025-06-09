import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  SERVICES_ROUTE,
  UNIVERSITIES_ROUTE,
} from "@/utils/routes";
import { getFullyear } from "@/utils/utils";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-lg">MedPath</span>
          <p className="text-sm text-gray-400">
            &copy; {getFullyear()} MedPath. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href={ABOUT_ROUTE} className="hover:text-blue-400 transition">
            About Us
          </a>
          <a href={SERVICES_ROUTE} className="hover:text-blue-400 transition">
            Services
          </a>
          <a href={CONTACT_ROUTE} className="hover:text-blue-400 transition">
            Contact
          </a>
          <a
            href={UNIVERSITIES_ROUTE}
            className="hover:text-blue-400 transition"
          >
            Universities
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
