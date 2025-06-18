"use client";
import { useState } from "react";
import { Home_Data } from "@/const/Data";

const FaqSection = () => {
  const faqContent = Home_Data.Faqs.entries;
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-24 max">
      <div className="px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col justify-between">
        <div className="mb-16">
          <h6 className="text-lg text-primary font-medium text-center mb-2 w-96">
            FAQs
          </h6>
          <h2 className="text-4xl font-manrope text-center font-bold text-text leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>

        <div className="accordion-group" data-accordion="default-accordion">
          {faqContent.map((faq, index) => (
            <div
              key={index}
              className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
                activeIndex === index ? "accordion-active:bg-indigo-50" : ""
              }`}
              id={`faq-heading-${index}`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-text w-full transition duration-500 text-left hover:text-primary ${
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
                <p className="text-base text-text leading-6 mt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
