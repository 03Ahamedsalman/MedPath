"use client";
import { Home_Data } from "@/const/Data";
import MilestoneSection from "../ui/MilestoneSection";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { areyouready, mbbsAbroadStudents } from "@/assets/assets";

const AreYouReadySection = () => {
  const areYouReadyContent = Home_Data.Are_You_Ready;
  return (
    <section className="mt-28 relative">
      <div className="md:absolute z-10 w-full -mt-16 max-md:px-4">
        <MilestoneSection />
      </div>
      <div className="relative md:h-[500px] max-md:py-8 max-md:mt-4">
        <div className="absolute inset-0 -z-10">
          <Image
            src={mbbsAbroadStudents}
            alt="background"
            fill
            className="object-cover w-full"
            quality={100}
          />
          <div className="absolute inset-0 bg-blue-950/90"></div>
        </div>
        <div className="absolute inset-0 -z-10">
          <Image
            src={areyouready}
            alt="background"
            fill
            className="object-cover w-full"
            quality={100}
          />
        </div>
        <div className="center-column m-auto h-full md:max-w-4xl w-full gap-4 mt-6 max-md:px-4">
          <span className="text-background font-bold tracking-wide max-md:text-center max-md:text-sm">
            {areYouReadyContent.title.toUpperCase()}
          </span>
          <div className="center-column max-md:text-center">
            <h2 className="md:text-4xl text-2xl text-background font-bold">
              Get Free <span className="text-primary">MBBS Consultation</span>{" "}
              For Featured
            </h2>
            <h3 className="md:text-4xl text-2xl text-background">
              Top Universities in Abroad
            </h3>
          </div>
          <p className="max-w-2xl text-center text-background text-sm mb-6">
            {areYouReadyContent.description}
          </p>
          <Button className="border rounded-lg text-background ">
            CONTACT US NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AreYouReadySection;
