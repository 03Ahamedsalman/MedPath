"use client";
import { useState } from "react";
import { Home_Data } from "@/const/Data";
import UniversityCard from "../ui/UniversityCard";
import UniversitSumbitForm from "@/components/forms/UniversitSumbitForm";
import Image from "next/image";


const OurUniversity = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [images, setImages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const title = Home_Data.our_universities.title;
  const university_slide = Home_Data.our_universities.country_university;

  const handleApplyClick = (universityName) => {
    setSelectedUniversity(universityName);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedUniversity(null);
  };

  return (
    <section className="px-4 xs:px-6 sm:px-8 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-12">
          {title}
        </h2>
        <div className="relative">
          <nav
            className="relative z-0 flex border border-background rounded-xl overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            aria-label="Tabs"
            role="tablist"
            aria-orientation="horizontal"
          >
            {university_slide.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`hs-tab-active:border-b-primary hs-tab-active:text-primary relative md:w-full min-w-[120px] first:border-s-0 border-s border-b-2 border-border py-4 px-4 text-text hover:text-gray-700 text-sm font-medium text-center hover:bg-border/50 focus:z-10 focus:outline-hidden focus:text-secodnary disabled:opacity-50 disabled:pointer-events-none flex md:flex-row flex-col items-center justify-center gap-2 ${
                  activeTab === tab.id ? "border-b-primary text-text bg-primary/10" : ""
                }`}
                id={`bar-with-underline-item-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`bar-with-underline-${tab.id}`}
                role="tab"
                onClick={() => setActiveTab(tab.id)}
              >
                <Image
                  src={tab.image.src}
                  alt={tab.image.alt || tab.title}
                  className="w-6 h-6 inline-block mr-2"/>
                <span className="text-xs">{tab.title}</span>
              </button>
            ))}
          </nav>
          <div className="mt-3">
            {university_slide.map((tab) => (
              <div
                key={tab.id}
                id={`bar-with-underline-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`bar-with-underline-item-${tab.id}`}
                className={activeTab === tab.id ? "block" : "hidden"}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

                {tab.universities.map((university) => (
                  <UniversityCard
                  key={university.id}
                  title={university.title}
                  image={university.image}
                  description={university.description}
                  onApplyClick={() => handleApplyClick(university)}
                  />
                ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {showForm && (
          <UniversitSumbitForm
            university={selectedUniversity}
            image={images.find((image) => image.name === selectedUniversity)}
            onClose={closeForm}
          />
        )}
      </div>
    </section>
  );
};

export default OurUniversity;
