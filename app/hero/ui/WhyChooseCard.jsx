import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export const WhyChooseCard = ({ title, description }) => {
  return (
    <div className="flex py-6 px-4 gap-2 bg-border rounded-lg relative overflow-hidden group">
      <div className="w-20 h-20 absolute bg-primary -left-10 -top-10 rotate-45 z-10 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:left-0 group-hover:rotate-0 transition-all ease-in-out duration-150"></div>
      <div className="w-2 h-full absolute bg-text left-0 top-0"></div>
      <div className="relative z-50">
        <FaCheckCircle className="text-secondary text-2xl" />
      </div>
      <div className="flex flex-col gap-1 z-10">
        <h2 className="font-bold text-xl text-secondary group-hover:text-background">{title}</h2>
        <p className="text-xs text-text">{description}</p>
      </div>
    </div>
  );
};
