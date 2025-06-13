"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  GALLERY_ROUTE,
  HOME_ROUTE,
  SERVICES_ROUTE,
  UNIVERSITIES_ROUTE,
} from "@/utils/routes";
import { Dropdown } from "../ui/Dropdown";
import { FiMenu, FiX } from "react-icons/fi";
import HamburgerToggle from "./HamburgerMenu";
import Button from "../ui/Button";

const Navbar = () => {
  const universityItems = [
    { label: "AIIMS Delhi", href: "/universities/aiims-delhi" },
    { label: "JIPMER Puducherry", href: "/universities/jipmer" },
    { label: "CMC Vellore", href: "/universities/cmc-vellore" },
    { label: "KMC Manipal", href: "/universities/kmc" },
  ];

  const countryItems = [
    { label: "MBBS in Russia", href: "/countries/russia" },
    { label: "MBBS in Kyrgyzstan", href: "/countries/kyrgyzstan" },
    { label: "MBBS in Kazakhstan", href: "/countries/kazakhstan" },
    { label: "PG in UK", href: "/countries/uk" },
    { label: "PG in USA", href: "/countries/usa" },
    { label: "PG in Canada", href: "/countries/canada" },
    { label: "PG in Australia", href: "/countries/australia" },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef.current) {
      gsap.fromTo(
        iconRef.current,
        { rotate: -90, scale: 0, opacity: 0 },
        {
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [isMobileMenuOpen]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full bg-primary">
      {/* Top info bar */}
      <div className="text-background text-sm px-4 py-2 flex flex-wrap justify-between items-center">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <span className="flex items-center gap-1 whitespace-nowrap">
            📞 +91 96009 02959
          </span>
          <span className="flex items-center gap-1 whitespace-nowrap">
            📧 studydoctora4@gamil.com
          </span>
          <span className="flex items-center gap-1 whitespace-nowrap">
            🕒 Mon-Sat: 9:30AM - 6:30PM
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline">Follow Us:</span>
          <div className="flex items-center gap-2">
            <Link
              href="https://www.instagram.com/medpathconsultancy"
              target="_blank"
            >
              <Image
                src="/instagramlogo.jpg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://www.facebook.com/medpathconsultancy"
              target="_blank"
            >
              <Image
                src="/facebook_log.png"
                alt="Facebook"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/medpathconsultancy"
              target="_blank"
            >
              <Image
                src="/LinkedIn_icon.svg.png"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`bg-white shadow-md px-4 py-4 md:px-6 md:py-4 flex flex-wrap justify-between items-center rounded-t-4xl sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href={HOME_ROUTE} onClick={closeAll}>
            <Image
              src="/MedpathsloganLogo.png"
              alt="Medpath Logo"
              width={180}
              height={60}
              className="w-auto h-10 md:h-12 object-contain"
            />
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <HamburgerToggle onClick={toggleMobileMenu} />
          </div>
        </div>

        {/* Navigation links */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex md:flex-row md:items-center md:space-x-6 mt-4 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-primary font-medium">
            <Link
              href={HOME_ROUTE}
              className="hover:text-secondary py-2 md:py-0"
              onClick={closeAll}
            >
              Home
            </Link>
            <Link
              href={ABOUT_ROUTE}
              className="hover:text-secondary py-2 md:py-0"
              onClick={closeAll}
            >
              About Us
            </Link>
            <Dropdown
              title="Universities"
              items={universityItems}
              open={openDropdown === "universities"}
              onClick={() =>
                setOpenDropdown(
                  openDropdown === "universities" ? null : "universities"
                )
              }
              dropdownKey="universities"
              onClose={closeAll}
              mobile={isMobileMenuOpen}
            />
            <Dropdown
              title="All Countries"
              items={countryItems}
              open={openDropdown === "countries"}
              onClick={() =>
                setOpenDropdown(
                  openDropdown === "countries" ? null : "countries"
                )
              }
              dropdownKey="countries"
              onClose={closeAll}
              mobile={isMobileMenuOpen}
            />
            <Link
              href={GALLERY_ROUTE}
              className="hover:text-secondary py-2 md:py-0"
              onClick={closeAll}
            >
              Gallery
            </Link>
            <Link
              href={CONTACT_ROUTE}
              className="hover:text-secondary py-2 md:py-0"
              onClick={closeAll}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button - shown in mobile menu */}
          <div className="mt-4 md:hidden">
            <Button href="/apply">APPLY NOW →</Button>
          </div>
        </div>

        {/* CTA Button - desktop */}
        <div className="hidden md:flex items-center">
          <Button href="/apply">APPLY NOW →</Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
