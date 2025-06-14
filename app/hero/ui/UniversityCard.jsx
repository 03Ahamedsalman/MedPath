import Image from "next/image";
import { FaToggleOn } from "react-icons/fa";

export default function UniversityCard({ title, image, onApplyClick }) {
  return (
    <div className="rounded-xl overflow-hidden ">
      <Image src={image.src} alt={title} />
      <div className="p-6 bg-primary/5 flex flex-col gap-4 min-h-36 justify-between">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <button
          onClick={() => onApplyClick(title)}
          className="text-secondary hover:text-secondary/60 flex items-center text-sm gap-2 w-fit"
        >
          Apply Now <FaToggleOn />
        </button>
      </div>
    </div>
  );
}
