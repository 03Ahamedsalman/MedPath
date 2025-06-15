"use client";
import { ctabg, h2_about_shape03, mailIcon } from "@/assets/assets";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

const FreeConsult = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className=" px-5 overflow-hidden relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={ctabg} // Replace with your imported image
          alt="background"
          fill
          className="object-cover"
          quality={100}
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="max-w-5xl m-auto flex md:flex-row flex-col items-center justify-between ">
        <div className="flex md:flex-row flex-col max-md:mt-8 items-center gap-4 z-10">
          <div>
            <Image src={mailIcon} alt="mailIcon" />
          </div>
          <div className="flex flex-col max-md:text-center gap-2">
            <h2 className="text-2xl md:text-4xl font-bold text-background ">
              Get Free Consultation
            </h2>
            <p className="text-background max-w-2xl text-sm mx-auto">
              Personalized guidance for your medical journey. Choose Study
              Doctor now
            </p>
          </div>
        </div>

        <Button className="text-background mt-2 w-full">CONTACT US</Button>
        <div className="my-8 relative inline-block">
          {/* Play button with pulse animation */}
          <button
            onClick={toggleVideo}
            className="relative w-20 h-20 bg-primary rounded-full flex items-center justify-center
                    focus:outline-none group animate-pulse hover:animate-none"
            aria-label="Play video"
          >
            {/* Play icon */}
            <div>
              <IoPlayCircleOutline className="text-4xl text-background" />
            </div>

            {/* Pulsing ring effect */}
            <span
              className="absolute inset-0 border-4 border-primary rounded-full opacity-0 group-hover:opacity-100 
                          animate-ping-slow"
            ></span>
          </button>
        </div>

        {/* Video modal */}
        {showVideo && (
          <div
            className="fixed inset-0 bg-text/30 flex items-center justify-center z-[9999] p-4"
            onClick={toggleVideo}
          >
            <div className="relative max-w-4xl">
              <div>
                <iframe
                  className="md:w-3xl md:h-[450px]"
                  src="https://www.youtube.com/embed/NBDLr7I8eZM?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FreeConsult;
