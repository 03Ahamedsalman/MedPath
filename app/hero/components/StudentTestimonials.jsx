"use client";
import { Home_Data } from "@/const/Data";
import { StudentTestimonialsCard } from "../ui/StudentTestimonialsCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import {
  blobImage,
  h2_about_shape01,
  star_image,
  studenttestimonials,
} from "@/assets/assets";

const StudentTestimonials = () => {
  const testimonials = Home_Data.testimonials;

  return (
    <section className="max center py-12 md:gap-20 gap-12 relative max-md:flex-col md:px-0 px-4">
      <div className="absolute -left-20 bottom-[40%] opacity-30 w-full smooth-animated-element -z-10">
        <Image src={h2_about_shape01} alt="animate-image" />
      </div>
      <div className="absolute -left-16 -z-20">
        <Image src={blobImage} alt="blobImage" />
      </div>
      <div className="absolute left-0 top-0 z-50">
        <Image src={star_image} alt="star_image" />
      </div>
      <div>
        <Image
          src={studenttestimonials}
          alt="studenttestimonials"
          className="rounded-3xl w-[500px]"
        />
      </div>
      <div>
        <div className="mb-8">
          <span className="text-sm font-semibold text-primary">
            {testimonials.title}
          </span>
          <h2 className="mt-2 md:text-4xl text-3xl font-bold text-text">
            {testimonials.description}
          </h2>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="group md:block hidden">
            <button className="custom-prev absolute 2xl:-right-14 right-0 top-[30%] z-10 -translate-y-1/2 rounded-full p-2 group-hover:bg-primary cursor-pointer transition-all group-hover:scale-105 duration-300">
              <FaChevronUp className="h-5 w-5 group-hover:text-background" />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            direction="vertical"
            className="h-[350px]"
          >
            {testimonials.entries.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <StudentTestimonialsCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="group md:block hidden">
            <button className="custom-next absolute 2xl:-right-14 right-0 top-[45%] z-10 -translate-y-1/2 rounded-full  p-2 group-hover:bg-primary cursor-pointer transition-all group-hover:scale-105 duration-300">
              <FaChevronDown className="h-5 w-5 group-hover:text-background" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
