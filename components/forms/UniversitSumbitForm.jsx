import { useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { validateUniversitySubmitForm } from "@/utils/validations";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Modal } from "../ui/Modal";

export default function UniversitySubmitForm({ university, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    mobile: "",
    email: "",
    city: "",
  });

  const university_name = university?.title;

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    mobile: "",
    email: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e?.target || {};

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateUniversitySubmitForm(formData, setErrors)) {
      const payload = {
        ...formData,
        university_name,
      };
      console.log("Form submitted:", payload);
      onClose();
    }
  };

  return (
    <Modal isOpen={true} onClose={onClose} closeOnOutsideClick={true}>
      <div className="relative flex md:flex-row flex-col md:p-8 p-5 rounded-2xl gap-8 items-center">
        <div className="md:w-[50%] w-full">
          <h2 className="text-2xl font-bold max-md:mt-6 md:mb-6 text-secondary">
            Apply for {university?.title}
          </h2>
          <div>
            <Image
              src={university?.image?.src}
              alt={university?.image?.src}
              width={100}
              height={100}
              className="w-full object-cover rounded-2xl hidden md:block"
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:w-[50%] w-full max-h-[30rem] overflow-y-scroll scroll-hidden md:px-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-secondary mb-1"
              >
                First Name *
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full border ${
                  errors.firstName ? "border-danger" : "border-border"
                } rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-danger">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-secondary mb-1"
              >
                Last Name *
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full border ${
                  errors.lastName ? "border-danger" : "border-border"
                } rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent`}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-danger">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-secondary mb-1"
            >
              Date of Birth *
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              max={new Date().toISOString().split("T")[0]}
              className={`w-full border ${
                errors.dob ? "border-danger" : "border-border"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent`}
            />
            {errors.dob && (
              <p className="mt-1 text-sm text-danger">{errors.dob}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-secondary mb-1"
            >
              Mobile Number *
            </label>
            <PhoneInput
              international
              defaultCountry="IN"
              value={formData.mobile}
              onChange={(value) => {
                handleChange({ target: { name: "mobile", value } });
              }}
              className={`w-full border ${
                errors.mobile ? "border-danger" : "border-border"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent`}
            />
            {errors.mobile && (
              <p className="mt-1 text-sm text-danger">{errors.mobile}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-secondary mb-1"
            >
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? "border-danger" : "border-border"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-danger">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-secondary mb-1"
            >
              City *
            </label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="New York"
              value={formData.city}
              onChange={handleChange}
              className={`w-full border ${
                errors.city ? "border-danger" : "border-border"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent`}
            />
            {errors.city && (
              <p className="mt-1 text-sm text-danger">{errors.city}</p>
            )}
          </div>

          <Button type="submit" className="w-full py-3">
            Submit Application
          </Button>
        </form>
      </div>
    </Modal>
  );
}
