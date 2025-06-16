"use client";
import { UseIntersection } from "@/components/common/useIntersection";
import { FloatingCard } from "../ui/FloatingCard";
import { Home_Data } from "@/const/Data";
import Image from "next/image";
import { whyus } from "@/assets/assets";
import Button from "@/components/ui/Button";
import { WhyChooseCard } from "../ui/WhyChooseCard";
const WhyChooseSection = () => {
  const choose_Content = Home_Data.why_us;
  const { ref, isIntersecting } = UseIntersection({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative center-column gap-16 max-md:mt-20">
      <div className="bg-border md:h-[60%] h-[10%] md:w-[40%] w-full absolute left-0 -top-12 -z-10"></div>
      <div className="max-w-5xl m-auto flex md:flex-row flex-col items-center justify-center md:gap-12 gap-4">
        <div className="relative md:w-[50%] flex flex-col md:items-end gap-4 max-md:px-4">
          <div className="absolute smooth-animated-element md:-left-24 md:top-10 -top-30 right-4">
            {isIntersecting && <FloatingCard />}
          </div>
          <div>
            <Image
              src={whyus}
              alt="whysectionImage"
              className="rounded-2xl md:w-[600px]"
            />
          </div>
          <Button href={choose_Content.button.link}>
            {choose_Content.button.label}
          </Button>
        </div>
        <div className="md:w-[50%] px-4 flex flex-col gap-4">
          <span className="text-sm text-secondary font-semibold">
            {choose_Content.span}
          </span>
          <h2 className="text-3xl font-bold">
            Unlock Your{" "}
            <span className="text-primary">Medical Dreams Abroad:</span> Study
            Doctor, Your Trusted Companion.
          </h2>
          <p className="text-sm leading-relaxed">
            {choose_Content.description}
          </p>
        </div>
      </div>
      <div className="max-w-5xl m-auto grid xl:grid-cols-4 md:grid-cols-2 max-md:px-4 gap-8">
        {choose_Content.approved_by.map((item) => (
          <WhyChooseCard {...item} key={item.title} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
