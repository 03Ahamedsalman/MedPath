"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { hasPopupShownRecently, markPopupAsShown } from "@/utils/utils";

const PopupForm = () => {
  const [showForm, setShowForm] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    if (hasPopupShownRecently()) return;

    const timer = setTimeout(() => {
      setShowForm(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showForm && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
      document.body.style.overflow = "hidden";
    }
  }, [showForm]);

  const handleClose = () => {
    if (popupRef.current) {
      gsap.to(popupRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setShowForm(false);
          markPopupAsShown();
          document.body.style.overflow = "auto";
        },
      });
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!showForm) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]"
      onClick={handleOutsideClick}
    >
      <div
        ref={popupRef}
        className="bg-background p-6 rounded-xl w-full max-w-md shadow-lg relative"
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 text-2xl"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleClose();
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            placeholder="Message"
            required
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
