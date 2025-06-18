import Image from "next/image";
import { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

export default function UniversityCard({ title, image, onApplyClick, description }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="overflow-hidden flex gap-4 border-transparent border-b-2 hover:border-primary py-4 transition-all duration-300 ease-in-out mr-2">
      <div className="overflow-hidden">
        <Image
          src={image.src}
          alt={title}
          className="transition-transform duration-500 ease-in-out hover:scale-110 w-10 rounded-full"
        />
      </div>
      <div className="">
        <h3 className="text-primary text-sm">{title}</h3>
        <p className="text-[10px]">{description}</p>
        <button
          onClick={() => onApplyClick({ title, image: image.src })}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-secondary flex items-center text-sm gap-2 w-fit cursor-pointer mt-2"
        >
          Apply Now
          <span
            className={`transition-all duration-300 ease-in-out inline-flex items-center ${
              isHovered
                ? "opacity-100 scale-110 rotate-6"
                : "opacity-80 scale-100 rotate-0"
            }`}
          >
            {isHovered ? <FaToggleOn /> : <FaToggleOff />}
          </span>
        </button>
      </div>
    </div>
  );
}
