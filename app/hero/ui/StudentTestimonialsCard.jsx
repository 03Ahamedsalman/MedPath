import { quote } from "@/assets/assets";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export const StudentTestimonialsCard = ({
  starRating,
  feedback,
  name,
  alt,
}) => {
  return (
    <div className="md:w-[500px]  p-4 column gap-4">
      <div className="center-between">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              <FaStar
                className={i < starRating ? "text-yellow-400" : "text-gray-300"}
              />
            </span>
          ))}
        </div>
        <Image src={quote} alt="quote-image" width={60} />
      </div>
      <p className="italic text-text">{feedback}</p>
      <div className="flex gap-2 items-center">
        <Image
          src={`https://ui-avatars.com/api/?name=${name}&size=200&rounded=true`}
          alt={alt}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="border-l-4 border-primary pl-2">
          <h3 className="font-bold text-secondary">{name}</h3>
        </div>
      </div>
    </div>
  );
};
