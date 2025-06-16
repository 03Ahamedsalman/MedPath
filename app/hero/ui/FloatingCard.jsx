import { student_group } from "@/assets/assets";
import Image from "next/image";
import CountUp from "react-countup";

export const FloatingCard = () => {
  return (
    <div className="group">
      <div className="bg-background group-hover:bg-text group-hover:border-primary border-background border-2 w-64 h-36 p-4 rounded-2xl center-column gap-2 shadow transition-all ease-in duration-150">
        <h3 className="font-semibold text-text group-hover:text-primary">
          <span className="text-primary group-hover:text-background text-3xl">
            <CountUp end={4} duration={5} />
            k+
          </span>{" "}
          Active MBBS Students
        </h3>
        <Image
          src={student_group}
          alt="student_group_Image"
          className="w-32 "
        />
      </div>
    </div>
  );
};
