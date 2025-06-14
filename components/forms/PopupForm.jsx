"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { hasPopupShownRecently, markPopupAsShown } from "@/utils/utils";
import Button from "../ui/Button";

const PopupForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    dob: "",
    country: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const popupRef = useRef(null);

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Other",
  ];

  useEffect(() => {
    if (showForm) {
      // Disable scroll on body
      document.body.style.overflow = "hidden";
      // Optional: Add padding to prevent layout shift
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      return () => {
        // Re-enable scroll when component unmounts
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      };
    }
  }, [showForm]);

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
        },
      });
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex =
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{3,6}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!phoneRegex.test(formData.contact)) {
      newErrors.contact = "Please enter a valid phone number";
    }
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      handleClose();
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        contact: "",
        dob: "",
        country: "",
        message: "",
      });
    }
  };

  if (!showForm) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4"
      onClick={handleOutsideClick}
    >
      <div
        ref={popupRef}
        className="bg-white p-6 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-lg relative"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl transition-colors"
          aria-label="Close form"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Study Abroad Inquiry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`w-full border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contact Number *
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="+1 234 567 8900"
              className={`w-full border ${
                errors.contact ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.contact && (
              <p className="mt-1 text-sm text-red-600">{errors.contact}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date of Birth *
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              max={new Date().toISOString().split("T")[0]}
              className={`w-full border ${
                errors.dob ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.dob && (
              <p className="mt-1 text-sm text-red-600">{errors.dob}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Preferred Country *
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full border ${
                errors.country ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="mt-1 text-sm text-red-600">{errors.country}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your study goals..."
              rows={4}
              className={`w-full border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full mt-6 py-3">
            Submit Inquiry
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
