"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TestimonialCard from "@/app/hero/ui/TestimonialsCards";
import { Home_Data } from "@/const/Data";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = Home_Data.google_testimonials_section.testimonials;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 mx-auto max">
      <div className="flex flex-col gap-6 m-auto text-center">
        <h2 className="text-3xl font-bold text-secondary">Testimonials</h2>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold">EXCELLENT</h3>
          <div className="text-yellow-400 text-2xl">★★★★★</div>
          <p className="mb-1">
            Based on <span className="font-medium">Multiple reviews</span>
          </p>
          <Image
            src={"https://cdn.trustindex.io/assets/platform/Google/logo.svg"}
            alt="google Trust Score"
            width={100}
            height={100}
            className="mt-2"
          />
        </div>
      </div>

      <div className="mt-8 w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="px-4" // Add padding to prevent cards from touching screen edges
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="py-12">
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
