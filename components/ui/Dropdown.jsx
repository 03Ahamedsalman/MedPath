"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const Dropdown = ({
  title,
  items,
  open: controlledOpen,
  onClick,
  dropdownKey,
}) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const itemsRef = useRef([]);

  // Detect mobile device by window width
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle entrance/exit animation
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

  return (
    <div
      className="relative"
      onMouseEnter={!isMobile ? () => setOpen(true) : undefined}
      onMouseLeave={!isMobile ? () => setOpen(false) : undefined}
    >
      <button
        className="font-medium text-primary hover:text-secondary transition-all delay-200"
        onClick={isMobile ? onClick : undefined}
        type="button"
      >
        {title} {(isMobile ? controlledOpen : open) ? "▲" : "▼"}
        <span className="sr-only">Toggle Dropdown</span>
      </button>

      <div
        ref={dropdownRef}
        className="absolute z-50 bg-white shadow-xl rounded-lg w-72 p-2 space-y-1"
        style={{ display: "none" }}
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
