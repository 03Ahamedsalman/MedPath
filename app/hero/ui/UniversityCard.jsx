import Image from "next/image";
import { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

export default function UniversityCard({ title, image, onApplyClick }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="rounded-xl overflow-hidden ">
      <div className="overflow-hidden">
        <Image
          src={image.src}
          alt={title}
          className="transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-6 bg-primary/5 flex flex-col gap-4 min-h-36 justify-between">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <button
          onClick={() => onApplyClick({ title, image: image.src })}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-secondary flex items-center text-sm gap-2 w-fit cursor-pointer"
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
