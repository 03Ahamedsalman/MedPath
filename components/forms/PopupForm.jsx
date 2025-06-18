"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { hasPopupShownRecently, markPopupAsShown } from "@/utils/utils";
import PhoneInput from "react-phone-number-input";
import Button from "../ui/Button";
import { validateInquiryForm } from "@/utils/validations";
import { Home_Data } from "@/const/Data";
import { popupImg } from "@/assets/assets";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoClose } from "react-icons/io5";

const PopupForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    country: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const popupRef = useRef(null);
  const countries = Home_Data.countryItems;

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
    // Handle phone input separately as it doesn't use the standard event object
    if (name === undefined) {
      setFormData((prev) => ({
        ...prev,
        mobile: value,
      }));

      // Clear mobile error if any
      if (errors.mobile) {
        setErrors((prev) => ({
          ...prev,
          mobile: "",
        }));
      }
      return;
    }

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInquiryForm(formData, setErrors)) {
      console.log("Form submitted:", formData);
      handleClose();
      setFormData({
        name: "",
        email: "",
        mobile: "",
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
        className="bg-background rounded-xl md:min-w-3xl flex overflow-y-auto shadow-lg max-w-4xl w-full items-center h-full"
      >
        <div className="w-[50%] hidden md:block">
          <Image
            src={popupImg}
            alt="popupImg"
            className="2xl:w-full 2xl:h-full object-cover"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-6 flex flex-col md:w-[50%] w-full overflow-y-auto gap-4"
        >
          <div className="bg-primary p-2 absolute top-2 right-2 rounded-full text-background hover:scale-105 cursor-pointer">
            <IoClose onClick={handleClose} className=" " />
          </div>
          <h2 className="text-2xl font-bold text-secondary">Make an Inquiry</h2>

          {/* Name & Email - Flex Row */}
          <div className="flex md:flex-row flex-col gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-text">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={`w-full border ${
                  errors.name ? "border-danger" : "border-border"
                } rounded-lg px-4 py-2 h-10 focus:ring-2 focus:ring-primary`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-danger">{errors.name}</p>
              )}
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-text">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={`w-full border ${
                  errors.email ? "border-danger" : "border-border"
                } rounded-lg px-4 py-2 h-10 focus:ring-2 focus:ring-primary`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-danger">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-4">
            <div className="md:w-48">
              <label className="block text-sm font-medium text-text">
                Contact Number *
              </label>
              <PhoneInput
                international
                defaultCountry="IN"
                value={formData.mobile}
                onChange={(value) =>
                  handleChange({ target: { name: "mobile", value } })
                }
                className={`w-full border ${
                  errors.mobile ? "border-danger" : "border-border"
                } rounded-lg px-4 py-2 h-10 focus:ring-2 focus:ring-primary`}
              />
              {errors.mobile && (
                <p className="mt-1 text-sm text-danger">{errors.mobile}</p>
              )}
            </div>
            {/* DOB (now full-width) */}
            <div className="w-48 ">
              <label className="block text-sm font-medium text-text">
                Date of Birth *
              </label>
              <DatePicker
                selected={formData.dob ? new Date(formData.dob) : null}
                onChange={(date) =>
                  handleChange({ target: { name: "dob", value: date } })
                }
                placeholderText="dd-mm-yyyy"
                dateFormat="dd-MM-yyyy"
                maxDate={new Date()}
                className={`max-md:w-[300px] w-full border ${
                  errors.dob ? "border-danger" : "border-border"
                } rounded-lg px-4 py-2 h-10 focus:ring-2 focus:ring-primary`}
              />
              {errors.dob && (
                <p className="mt-1 text-sm text-danger">{errors.dob}</p>
              )}
            </div>
          </div>

          {/* Country Dropdown */}
          <div>
            <label className="block text-sm font-medium text-text">
              Preferred Country *
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full border ${
                errors.country ? "border-danger" : "border-border"
              } rounded-lg px-4 py-2 h-10 focus:ring-2 focus:ring-primary`}
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.id} value={country.label}>
                  {country.label}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="mt-1 text-sm text-danger">{errors.country}</p>
            )}
          </div>

          {/* Message Textarea */}
          <div className="mt-2">
            <label className="block text-sm font-medium text-text">
              Your Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your study goals..."
              rows={4}
              className={`w-full border ${
                errors.message ? "border-danger" : "border-border"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-danger">{errors.message}</p>
            )}
          </div>

          <Button type="submit" className="md:w-full">
            Submit Inquiry
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
