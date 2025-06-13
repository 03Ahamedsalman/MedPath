"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  GALLERY_ROUTE,
  HOME_ROUTE,
} from "@/utils/routes";
import { Dropdown } from "../ui/Dropdown";
import HamburgerToggle from "./HamburgerMenu";
import Button from "../ui/Button";
import { Home_Data } from "@/const/Data";
import { FaTimes } from "react-icons/fa";
import TopBar from "./TopBar";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const iconRef = useRef(null);
  const countryItems = Home_Data.countryItems;

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

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
    <div className="w-full bg-primary top-0 sticky z-[999]">
      <nav
        className={`bg-white shadow-md px-4 py-4 md:p-10 flex flex-wrap justify-between items-center sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg rounded-none" : "rounded-t-4xl"
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
            <HamburgerToggle
              onClick={toggleMobileMenu}
              isOpen={isMobileMenuOpen}
            />
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeAll}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-[75%] bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="p-4 flex justify-between items-center border-b">
            <Link href={HOME_ROUTE} onClick={closeAll}>
              <Image
                src="/Medpath_icon.png"
                alt="Medpath Logo"
                width={180}
                height={60}
              />
            </Link>
            <button
              onClick={closeAll}
              className="text-gray-500 hover:text-primary right-0 absolute top-4 md:hidden"
            >
              <FaTimes size={44} />
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100%-120px)] p-4">
            <div className="flex flex-col gap-4 text-text font-medium">
              <Link
                href={HOME_ROUTE}
                className="hover:text-primary py-2 border-b"
                onClick={closeAll}
              >
                HOME
              </Link>
              <Link
                href={ABOUT_ROUTE}
                className="hover:text-primary py-2 border-b"
                onClick={closeAll}
              >
                ABOUT US
              </Link>
              <Dropdown
                title="ALL COUNTRIES"
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
                className="hover:text-primary py-2 border-b"
                onClick={closeAll}
              >
                GALLERY
              </Link>
              <Link
                href={CONTACT_ROUTE}
                className="hover:text-primary py-2 border-b"
                onClick={closeAll}
              >
                CONTACT
              </Link>
            </div>

            <div className="mt-8">
              <Button href="/apply" className="w-full text-center">
                APPLY NOW →
              </Button>
            </div>
            <TopBar />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-row md:items-center md:space-x-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-14 text-text font-medium">
            <Link
              href={HOME_ROUTE}
              className="hover:text-primary py-2 md:py-0"
              onClick={closeAll}
            >
              HOME
            </Link>
            <Link
              href={ABOUT_ROUTE}
              className="hover:text-primary py-2 md:py-0"
              onClick={closeAll}
            >
              ABOUT US
            </Link>
            <Dropdown
              title="ALL COUNTRIES"
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
              className="hover:text-primary py-2 md:py-0"
              onClick={closeAll}
            >
              GALLERY
            </Link>
            <Link
              href={CONTACT_ROUTE}
              className="hover:text-primary py-2 md:py-0"
              onClick={closeAll}
            >
              CONTACT
            </Link>
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
