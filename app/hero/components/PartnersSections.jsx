"use client"
import { UseIntersection } from "@/components/common/useIntersection";
import { Home_Data } from "@/const/Data";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const PartnersSections = () => {
  const partnersContent = Home_Data.trusted_logo;
   const { ref, isIntersecting } = UseIntersection({
      threshold: 0.1,
      triggerOnce: true,
    });
  return (
    <section ref={ref} className="max center max-md:flex-col py-24 gap-16 md:px-0 px-4">
      <div className="column gap-1">
        <span className="text-secondary font-semibold">
          Our Trusted Partners
        </span>
        {isIntersecting && <h2 className="md:text-4xl text-3xl font-bold">
          We Have More Than <br /> <span className="text-primary"><CountUp end={226} duration={5}/>+</span>{" "}
          Global Universities
        </h2>}
      </div>
      <div>
        <div className="md:gap-10 gap-5 grid grid-cols-4">
          {partnersContent.map((item) => (
            <Image
              key={item.id}
              src={item.image}
              alt={item.alt}
              className="object-cover md:w-26 w-20 opacity-50 hover:opacity-100 transition-all hover:scale-105 ease-in-out duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSections;
