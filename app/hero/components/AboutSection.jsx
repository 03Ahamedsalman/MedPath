"use client";
import Image from "next/image";
import { TiTick } from "react-icons/ti";

import Button from "@/components/ui/Button";
import {
  about_1,
  about_2,
  about_3,
  about_4,
  choose_shape,
} from "@/assets/assets";
import { Home_Data } from "@/const/Data";
import { ABOUT_ROUTE } from "@/utils/routes";

const AboutSection = () => {
  const aboutContents = Home_Data.about_section;
  const lists = aboutContents.lists;
  return (
    <div className="max md:px-32 px-4 relative">
      <div className="my-24 md:flex gap-16">
        <div className="absolute -left-10 bottom-0 opacity-30 w-full">
          <Image src={choose_shape} alt="about-section-background" />
        </div>
        {/* image  */}
        <div className="md:w-[50%] relative flex justify-center">
          <Image
            src={about_2}
            alt="about_2"
            className="md:w-[30rem] w-[11rem] md:right-0 left-0 rounded-xl absolute"
          />

          <Image
            src={about_1}
            alt="about_1"
            className="absolute md:top-72 top-40 right-0 rounded-xl border-t-8 md:border-l-8 border-white"
          />

          <div className="absolute right-0 rounded-xl overflow-hidden">
            <Image src={about_3} alt="about_3" className="rounded-xl" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col items-center justify-center rounded-xl gap-4">
              <span className="text-5xl text-primary">4k+</span>
              <p className="text-white text-center text-sm font-semibold px-4 uppercase">
                Students enrolled in study doctor
              </p>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="md:w-[50%] w-full flex flex-col gap-4 max-md:mt-[450px]">
          <div>
            <span className="text-primary">{aboutContents.span}</span>
            <h2 className="md:text-h2 text-3xl font-semibold">
              {aboutContents.title}
            </h2>
          </div>
          <p className="indent-10">{aboutContents.description_one}</p>
          <p>{aboutContents.description_two}</p>
          <div className="flex md:flex-row flex-col md:items-center gap-6">
            <Image
              src={about_4}
              alt="Boys in the class"
              className="rounded-xl md:w-96"
            />
            <div className="flex flex-col mr-2">
              {lists.map((list) => (
                <div key={list.id} className="flex items-start gap-6 relative">
                  <div className="relative">
                    <TiTick className="text-white bg-primary rounded-full w-4 h-4 mt-1 absolute" />{" "}
                  </div>
                  <ul className="list-none ">
                    <li className="font-semibold">{list.title}</li>{" "}
                    <p>{list.description}</p>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <Button href={ABOUT_ROUTE} className="w-full">About More</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
