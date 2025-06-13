import Image from "next/image";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { daySchedules, socialmediaLinks } from "@/const/Data";

// Define schedule for each day

function getTodaySchedule() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();
  const dayName = days[today];
  return `${dayName}: ${daySchedules[dayName]}`;
}

const TopBar = () => {
  return (
    <div className="text-background bg-primary text-sm px-8 py-2 flex flex-wrap justify-between items-center ">
      <div className="flex flex-wrap items-center gap-4 md:gap-6 jus">
        <a
          href={socialmediaLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 whitespace-nowrap "
        >
          <IoCallOutline /> +91 73057 02699
        </a>
        <a
          href={socialmediaLinks.email}
          className="flex items-center gap-1 whitespace-nowrap "
        >
          <MdOutlineEmail /> omedpath@gmail.com
        </a>
        <span className="flex items-center gap-1 whitespace-nowrap">
          <FaRegClock /> {getTodaySchedule()}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden sm:inline">Follow Us:</span>
        <div className="flex items-center gap-2">
          <Link href={socialmediaLinks.instagram} target="_blank">
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
          </Link>
          <Link href={socialmediaLinks.facebook} target="_blank">
            <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
          </Link>
          <Link href={socialmediaLinks.linkedin} target="_blank">
            <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
