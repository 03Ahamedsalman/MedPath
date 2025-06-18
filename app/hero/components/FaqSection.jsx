"use client";
import { useState } from "react";
import { Home_Data, socialmediaLinks } from "@/const/Data";
import { FaHeadphones } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const FaqSection = () => {
  const faqContent = Home_Data.Faqs;
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-20 max m-auto w-full">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full gap-8 md:gap-0">
        <div className="mb-8 md:mb-0 md:w-1/2 flex flex-col items-center md:items-start">
          <h6 className="text-base text-primary font-medium text-center md:text-left mb-2 w-full md:w-96">
            {faqContent.title}
          </h6>
          <h2 className="text-2xl font-manrope text-center md:text-left font-bold text-text w-full">
            {faqContent.description}
          </h2>
          <div className="flex flex-col gap-4 mt-4">
            <a
              href={socialmediaLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border w-96 p-4 rounded-full inline-flex items-center justify-between hover:bg-primary transition-all duration-300 ease-in-out"
            >
              <FaHeadphones /> +91 73057 02699
            </a>
            <a
              href={socialmediaLinks.email}
              className="border w-96 p-4 rounded-full inline-flex items-center justify-between hover:bg-primary transition-all duration-300 ease-in-out"
            >
              <MdOutlineEmail /> omedpath@gmail.com
            </a>
          </div>
        </div>

        <div
          className="accordion-group w-full md:w-1/2"
          data-accordion="default-accordion"
        >
          {faqContent.entries.map((faq, index) => (
            <div
              key={index}
              className={`accordion py-8 px-6 border-b border-solid border-border transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
                activeIndex === index ? "accordion-active:bg-indigo-50" : ""
              }`}
              id={`faq-heading-${index}`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-sm text-text w-full transition duration-500 text-left hover:text-primary ${
                  activeIndex === index ? "font-medium text-primary" : ""
                }`}
                aria-controls={`faq-collapse-${index}`}
              >
                <h5>{faq.question}</h5>
                <svg
                  className={`text-gray-500 transition duration-500 group-hover:text-primary ${
                    activeIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                id={`faq-collapse-${index}`}
                className={`accordion-content w-full px-0 overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-[300px]" : "max-h-0"
                }`}
                aria-labelledby={`faq-heading-${index}`}
              >
                <p className="text-sm text-text leading-6 mt-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
