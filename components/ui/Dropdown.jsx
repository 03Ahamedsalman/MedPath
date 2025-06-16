"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
        className={`absolute z-50 bg-white shadow-xl rounded-lg w-72 p-2 space-y-1 -ml-4 transition-all duration-300 ${
          (isMobile ? controlledOpen : open)
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {items.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="dropdown-item flex items-center justify-between px-3 py-2 text-sm text-gray-700 rounded-md transition-all duration-200 ease-in-out hover:bg-blue-50 hover:text-blue-700 hover:scale-[1.03]"
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
