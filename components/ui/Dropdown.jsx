"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const Dropdown = ({
  title,
  items,
  open: controlledOpen,
  onClick,
  dropdownKey,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!(isMobile ? controlledOpen : open)) return;
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, controlledOpen, isMobile]);

  useEffect(() => {
    const isOpen = isMobile ? controlledOpen : open;
    if (isOpen) {
      gsap.set(dropdownRef.current, { display: "block" });
      gsap.fromTo(
        itemsRef.current,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.1,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(itemsRef.current, {
        x: -20,
        opacity: 0,
      });
      gsap.set(dropdownRef.current, { display: "none" });
    }
  }, [open, controlledOpen, isMobile]);

  const closeDropdown = () => {
    if (isMobile) {
      onClick(false);
    } else {
      setOpen(false);
    }
  };

  const toggleDropdown = () => {
    if (isMobile) {
      onClick(!controlledOpen);
    } else {
      setOpen(!open);
    }
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={!isMobile ? () => setOpen(true) : undefined}
      onMouseLeave={!isMobile ? () => setOpen(false) : undefined}
    >
      <button
        className="text-text hover:text-primary transition-all delay-200 flex items-center gap-1 font-500 w-full justify-between"
        onClick={toggleDropdown}
        type="button"
        aria-expanded={isMobile ? controlledOpen : open}
      >
        {title}{" "}
        {(isMobile ? controlledOpen : open) ? (
          <FaChevronUp />
        ) : (
          <FaChevronDown />
        )}
        <span className="sr-only">Toggle Dropdown</span>
      </button>

      <div
        ref={dropdownRef}
        className="absolute z-50 bg-white shadow-xl rounded-lg w-72 p-2 space-y-1 -ml-4"
        style={{
          display: (isMobile ? controlledOpen : open) ? "block" : "none",
        }}
      >
        {items.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            ref={(el) => (itemsRef.current[idx] = el)}
            onMouseEnter={() =>
              gsap.to(itemsRef.current[idx], {
                scale: 1.03,
                duration: 0.2,
                ease: "power2.out",
              })
            }
            onMouseLeave={() =>
              gsap.to(itemsRef.current[idx], {
                scale: 1,
                duration: 0.2,
                ease: "power2.inOut",
              })
            }
            className="dropdown-item flex items-center justify-between px-3 py-2 text-sm text-gray-700 rounded-md transition-all duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-700"
            onClick={closeDropdown}
          >
            <span>
              {item.icon || "📘"} {item.label}
            </span>
            <span>›</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
