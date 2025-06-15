"use client";
import { useEffect, useRef } from "react";
import { Home_Data } from "@/const/Data";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import gsap from "gsap";

const ServiceSection = () => {
  const serviceData = Home_Data.our_services;
  const splitIndex = Math.ceil(serviceData.services.length / 2);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const currentRefs = serviceRefs.current;

    currentRefs.forEach((ref) => {
      if (!ref) return;
      const icon = ref.querySelector("svg");

      // Set initial state
      gsap.set(icon, {
        transformOrigin: "center",
        scale: 1,
        color: "#00A7A3",
      });

      const handleMouseEnter = () => {
        gsap.to(icon, {
          scale: 1.2,
          color: "#004B87",
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(ref.querySelector("h3"), {
          x: 5,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(icon, {
          scale: 1,
          color: "#00A7A3",
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(ref.querySelector("h3"), {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      ref.addEventListener("mouseenter", handleMouseEnter);
      ref.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup function for each ref
      return () => {
        ref.removeEventListener("mouseenter", handleMouseEnter);
        ref.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    // Main cleanup function
    return () => {
      currentRefs.forEach((ref) => {
        if (!ref) return;
        // GSAP animations are automatically killed when elements are removed
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="max">
      <div className="mx-auto py-16 flex flex-col items-center gap-5">
        <h2 className="text-4xl text-secondary font-bold uppercase">
          {serviceData.title}
        </h2>
        <div className="flex md:flex-row flex-col justify-between md:gap-60 gap-8 bg-background p-8 rounded-xl">
          <div className="flex flex-col gap-8">
            {serviceData.services.slice(0, splitIndex).map((service, index) => (
              <div
                className="flex flex-col gap-4 cursor-pointer group"
                key={service.title}
                ref={(el) => (serviceRefs.current[index] = el)}
              >
                <h3 className="inline-flex text-sm items-center gap-4 transition-all duration-300 group-hover:text-secondary">
                  <FaRegFaceSmileBeam className="text-primary" />{" "}
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {serviceData.services.slice(splitIndex).map((service, index) => (
              <div
                className="flex flex-col gap-4 cursor-pointer group"
                key={service.title}
                ref={(el) => (serviceRefs.current[index + splitIndex] = el)}
              >
                <h3 className="inline-flex text-sm items-center gap-4 transition-all duration-300 group-hover:text-secondary">
                  <FaRegFaceSmileBeam className="text-primary" />{" "}
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
