import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  GALLERY_ROUTE,
  HOME_ROUTE,
  SERVICES_ROUTE,
  UNIVERSITIES_ROUTE,
} from "@/utils/routes";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-secondary shadow-md">
      <div className="font-bold text-2xl text-blue-700">MedPath</div>
      <div className="flex gap-6">
        <Link
          href={HOME_ROUTE}
          className="text-gray-800 hover:text-blue-600 transition-colors"
        >
          Home
        </Link>
        <Link
          href={ABOUT_ROUTE}
          className="text-gray-800 hover:text-blue-600 transition-colors"
        >
          About Us
        </Link>
        <Link
          href={SERVICES_ROUTE}
          className="text-gray-800 hover:text-blue-600 transition-colors"
        >
          Services
        </Link>
        <Link
          href={GALLERY_ROUTE}
          className="text-gray-800 hover:text-blue-600 transition-colors"
        >
          Gallery
        </Link>
        <Link
          href={UNIVERSITIES_ROUTE}
          className="text-gray-800 hover:text-blue-600 transition-colors"
        >
          Universities
        </Link>
        <Link
          href={CONTACT_ROUTE}
          className="text-gray-800 hover:text-blue-600 transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
