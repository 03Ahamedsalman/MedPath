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
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={socialmediaLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:bottom-6 bottom-20 md:right-6 right-4 z-50 p-3 rounded-full shadow-lg hover:opacity-80 transition-opacity duration-300"
      title="Chat on WhatsApp"
      ref={iconRef}
      style={{
        color: "#fff",
        cursor: "pointer",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
        animation: "pulse 2s infinite",
      }}
    >
      <FaWhatsapp
        size={34}
        color="#fff"
        className="hover:scale-110 transition-all delay-200 ease-in-out"
      />
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </a>
  );
};

export default FloatIcon;
