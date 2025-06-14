"use client";
import { FaWhatsapp } from "react-icons/fa";
import { socialmediaLinks } from "@/const/Data";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const FloatIcon = () => {
  const iconRef = useRef(null);

  useEffect(() => {
    // Initially hide the element
    gsap.set(iconRef.current, { opacity: 0, visibility: "hidden" });

    const timer = setTimeout(() => {
      // Make visible and animate in
      gsap.to(iconRef.current, {
        opacity: 1,
        visibility: "visible",
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    }, 2000); // Changed from 1000 to 2000 for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={socialmediaLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:bottom-6 bottom-20 md:right-6 right-4 z-50 p-4 rounded-full shadow-lg hover:opacity-80 transition-opacity duration-300"
      title="Chat on WhatsApp"
      ref={iconRef}
      // Initial styles (will be overridden by GSAP)
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        backgroundColor: "#25D366",
      }}
    >
      <FaWhatsapp size={28} color="#fff" />
    </a>
  );
};

export default FloatIcon;
