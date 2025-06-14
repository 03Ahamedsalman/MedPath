"use client";
import { Home_Data } from "@/const/Data";
import UniversityCard from "../ui/UniversityCard";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import UniversitSumbitForm from "@/components/forms/UniversitSumbitForm";
import { useState } from "react";

const OurUniversity = () => {
  const title = Home_Data.our_universities.title;
  const university_slide = Home_Data.our_universities.universities;

  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [showForm, setShowForm] = useState(false);

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
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 1.2, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2.3, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="px-2 sm:px-0"
          >
            {university_slide.map((university, index) => (
              <SwiperSlide key={index} className="pb-2">
                <UniversityCard
                  title={university.title}
                  image={university.image}
                  onApplyClick={handleApplyClick}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button
            className="custom-prev hidden sm:flex absolute -left-3 md:-left-8 lg:-left-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow-md hover:bg-gray-100 active:scale-95 transition-all duration-200"
            aria-label="Previous slide"
          >
            <FaArrowLeft className="text-gray-600 text-sm md:text-base" />
          </button>
          <button
            className="custom-next hidden sm:flex absolute -right-3 md:-right-8 lg:-right-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow-md hover:bg-gray-100 active:scale-95 transition-all duration-200"
            aria-label="Next slide"
          >
            <FaArrowRight className="text-gray-600 text-sm md:text-base" />
          </button>
        </div>
        {showForm && (
          <UniversitSumbitForm
            university={selectedUniversity}
            onClose={closeForm}
          />
        )}
      </div>
    </section>
  );
};

export default OurUniversity;
