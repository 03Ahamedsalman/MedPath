"use client";
import { socialmediaLinks } from "@/const/Data";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const socialLinks = [
  {
    href: socialmediaLinks.facebook,
    icon: <FaFacebook size={24} color="#fff" />,
    alt: "Facebook",
    bg: "#1877F2",
  },
  {
    href: socialmediaLinks.instagram,
    icon: <FaInstagram size={24} color="#fff" />,
    alt: "Instagram",
    bg: "#E1306C",
  },
  {
    href: socialmediaLinks.linkedin,
    icon: <FaLinkedin size={24} color="#fff" />,
    alt: "LinkedIn",
    bg: "#0A66C2",
  },
  {
    href: socialmediaLinks.whatsapp,
    icon: <FaXTwitter size={24} color="#fff" />,
    alt: "X",
    bg: "#000000",
  },
  {
    href: socialmediaLinks.youtube,
    icon: <FaYoutube size={24} color="#fff" />,
    alt: "YouTube",
    bg: "#FF0000",
  },
];

const FixedIcons = () => {
  const iconsRef = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.fromTo(
        iconsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
        }
      );
    }, 1000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="fixed md:top-[20%] max-md:bottom-0 max-md:w-full justify-between right-0 z-[1000] flex md:flex-col max-md:bg-background max-md:px-6 max-md:py-2">
      {socialLinks.map((link, idx) => (
        <a
          key={link.alt}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: link.bg,
            opacity: 0, // Initially hidden
          }}
          className="p-3 flex items-center justify-center md:hover:ml-[-12px] transition-all duration-300"
          title={link.alt}
          ref={(el) => (iconsRef.current[idx] = el)}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default FixedIcons;
