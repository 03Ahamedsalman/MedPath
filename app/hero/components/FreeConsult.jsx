"use client";
import { consultImage, mailIcon } from "@/assets/assets";
import Button from "@/components/ui/Button";
import { Home_Data } from "@/const/Data";
import Image from "next/image";
import { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

const FreeConsult = () => {
  const [showVideo, setShowVideo] = useState(false);
  const consult = Home_Data.consult_section;
  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <section className=" px-5 xl:py-10 overflow-hidden relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={consultImage}
          alt="background"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="max-w-5xl m-auto flex md:flex-row flex-col items-center justify-between">
        <div className="flex md:flex-row flex-col max-md:mt-8 items-center gap-4 z-10">
          <div className="w-fit">
            <Image src={mailIcon} alt="mailIcon" />
          </div>
          <div className="flex flex-col max-md:text-center gap-2">
            <h2 className="text-2xl 2xl:text-4xl font-bold text-background ">
              {consult.title}
            </h2>
            <p className="text-background max-w-2xl text-sm mx-auto">
              {consult.description}
            </p>
          </div>
        </div>

        <Button
          href={consult.button.link}
          className="text-background mt-2 max-md:w-full"
        >
          {consult.button.label}
        </Button>
        <div className="my-8 relative inline-block">
          {/* Play button with pulse animation */}
          <button
            onClick={toggleVideo}
            className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center
                    focus:outline-none group animate-pulse hover:scale-105 cursor-pointer transition-all"
            aria-label="Play video"
          >
            {/* Play icon */}
            <div>
              <IoPlayCircleOutline className="text-4xl text-background " />
            </div>

            <span
              className="absolute inset-0 border-4 border-primary rounded-full opacity-0 group-hover:opacity-100 
                          animate-ping-slow"
            ></span>
          </button>
        </div>

        {/* Video modal */}
        {showVideo && (
          <div
            className="fixed inset-0 bg-text/50 flex items-center justify-center z-[9999] p-4"
            onClick={toggleVideo}
          >
            <div className="relative max-w-4xl">
              <div>
                <iframe
                  className="md:w-3xl md:h-[450px]"
                  src={`https://www.youtube.com/embed/${consult.youtube_id}?autoplay=1`}
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
    </section>
  );
};

export default FreeConsult;
