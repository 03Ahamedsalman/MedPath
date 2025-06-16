"use client";
import { ctabg } from "@/assets/assets";
import { UseIntersection } from "@/components/common/useIntersection";
import Image from "next/image";
import CountUp from "react-countup";

const MilestoneSection = () => {
  const { ref, isIntersecting } = UseIntersection({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className="max-w-5xl center-between m-auto md:py-12 py-8 px-14 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 ">
        <Image
          src={ctabg}
          alt="ctabg"
          fill
          className="object-cover  rounded-2xl"
          quality={100}
        />
      </div>
      {isIntersecting && (
        <div className="flex md:flex-row flex-col gap-8 justify-center w-full">
          <div className="center-column md:border-r max-md:border-b max-md:pb-12 border-white md:pr-12 gap-2">
            <span className="text-4xl text-background font-bold">
              <CountUp end={3.9} duration={5} />k +
            </span>
            <h4 className="text-sm text-background">Successfully Graduated</h4>
          </div>
          <div className="center-column md:border-r max-md:border-b max-md:pb-12 border-white md:pr-12 gap-2">
            <span className="text-4xl text-background font-bold">
              <CountUp end={15.8} duration={5} />
              k+
            </span>
            <h4 className="text-sm text-background">Applications Completed</h4>
          </div>
          <div className="center-column md:border-r max-md:border-b max-md:pb-12 border-white md:pr-12 gap-2">
            <span className="text-4xl text-background font-bold">
              <CountUp end={97.5} duration={5} />+
            </span>
            <h4 className="text-sm text-background">Satisfaction Rate</h4>
          </div>
          <div className="center-column md:border-r max-md:border-b max-md:pb-12 border-white md:pr-12 gap-2">
            <span className="text-4xl text-background font-bold">
              <CountUp end={100.2} duration={5} />
              k+
            </span>
            <h4 className="text-sm text-background">Students Community</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default MilestoneSection;
