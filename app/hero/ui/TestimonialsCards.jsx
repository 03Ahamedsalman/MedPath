import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function TestimonialCard({
  name,
  date,
  review,
  rating,
  userimageString,
}) {
  return (
    <div className="bg-background rounded-lg p-6 shadow-md h-full hover:-translate-y-2 transition-all ease-in-out min-h-52 ">
      <div className="flex w-full justify-between mb-2">
        <div className="flex gap-2">
          <div>
            <Image
              src={userimageString}
              alt="google Trust Score"
              width={35}
              height={20}
              className="object-cover rounded-full block"
            />
          </div>
          <div>
            <h3 className="text-sm font-bold  ">{name}</h3>
            <p className="text-very-small text-text">{date}</p>
          </div>
        </div>
        <Image
          src={"https://cdn.trustindex.io/assets/platform/Google/icon.svg"}
          alt="google Trust Score"
          width={20}
          height={20}
          className="float-right"
        />
      </div>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          >
            <FaStar />
          </span>
        ))}
      </div>
      <p className="text-sm mt-2">{review}</p>
    </div>
  );
}
