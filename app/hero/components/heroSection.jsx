"use client";

import { useEffect, useRef, useState } from "react";
import { Home_Data } from "@/const/Data";
import Image from "next/image";
import { gsap } from "gsap";
import Button from "@/components/ui/Button";
import { Maskgroup } from "@/assets/assets";

const HeroSection = () => {
  const heroData = Home_Data.hero_section;
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const bgImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const spanRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const blobRef = useRef(null);

  useEffect(() => {
    const textTl = gsap.timeline();
    const bgTl = gsap.timeline();
    const blobTl = gsap.timeline();
    textTl.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
    textTl.from(
      [spanRef.current, titleRef.current, descRef.current, btnRef.current],
      {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        ease: "power1.out",
      },
      "-=0.3"
    );

    bgTl
      .fromTo(
        bgImageRef.current,
        { scale: 1.2, opacity: 0.3 },
        { scale: 1.1, opacity: 1, duration: 1.2, ease: "power2.out" }
      )
      .to(
        bgImageRef.current,
        {
          scale: 1,
          duration: 10,
          ease: "power1.out",
        },
        "+=0.2"
      );

    gsap.fromTo(
      rightImageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.4 }
    );

    blobTl.fromTo(
      blobRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1.2, opacity: 1, duration: 1, ease: "power2.out" }
    );
    blobTl.to(blobRef.current, {
      scale: 1.2,
      duration: 10,
      ease: "power1.out",
    });

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const item = heroData[activeIndex];

  return (
    <section className="overflow-hidden">
      <div
        ref={sectionRef}
        className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 py-12 transition-opacity duration-700"
        key={activeIndex}
      >
        <div ref={bgImageRef} className="absolute inset-0 -z-10">
          <Image
            src={item.images[0].src}
            alt={item.images[0].alt}
            fill
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="flex md:flex-row flex-col gap-12 max items-center justify-around">
          {/* Text Content */}
          <div ref={textRef} className="md:w-[50%] w-full flex flex-col gap-6">
            <span
              className="inline-block bg-primary text-sm text-background px-4 py-2 rounded-full font-medium w-fit"
              ref={spanRef}
            >
              {item.span.toUpperCase()}
            </span>
            <h1 className="text-5xl font-bold text-background" ref={titleRef}>
              {activeIndex === 0 ? (
                <>
                  WELCOME TO{" "}
                  <span className="text-primary">MEDPATH OVERSEAS PVT LTD</span>
                </>
              ) : activeIndex === 1 ? (
                <>
                  MBBS | <span className="text-primary">GLOBAL</span> | FUTURE
                </>
              ) : (
                item.title
              )}
            </h1>
            <p
              className="md:text-lg text-base leading-tight text-background"
              ref={descRef}
            >
              {item.description}
            </p>
            <div ref={btnRef}>
              <Button className="text-background max-md:w-full max-md:text-center">
                {item.button.label}
              </Button>
            </div>
          </div>
          {/* Right Image */}
          <div
            ref={rightImageRef}
            className="md:w-[40%] w-full rounded-full z-10"
          >
            <Image
              src={item.images[1].src}
              alt={item.images[1].alt}
              className="w-full h-auto rounded-full shadow-lg"
            />
          </div>
          <Image
            src={Maskgroup}
            ref={blobRef}
            alt="group image"
            className="absolute bottom-0 right-0 -z-10"
          />
        </div>
        <div className="absolute right-[35%] bottom-10 z-20 flex gap-4 md:gap-2">
          <button
            aria-label="Previous"
            onClick={() =>
              setActiveIndex(
                (prev) => (prev - 1 + heroData.length) % heroData.length
              )
            }
            className="bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md transition-colors cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            aria-label="Next"
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % heroData.length)
            }
            className="bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md transition-colors cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
