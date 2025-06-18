import { backgroundImage2 } from "@/assets/assets";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

export function Modal({
  isOpen,
  onClose,
  children,
  closeOnOutsideClick = true,
}) {
  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center overflow-y-auto overflow-x-hidden z-[9999] p-4"
      onClick={closeOnOutsideClick ? onClose : undefined}
    >
      <div
        className="relative rounded-2xl overflow-auto bg-cover bg-center bg-no-repeat min-w-[50vw] h-full"
        style={{
          backgroundImage: `url(${backgroundImage2.src || backgroundImage2})`,
          backdropFilter: "blur(2px)", // Optional: adds blur effect to background
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-white text-xs leading-none hover:text-gray-300 z-50 bg-primary p-2 rounded-full cursor-pointer"
          aria-label="Close modal"
        >
          <IoClose className="text-2xl" />
        </button>

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
