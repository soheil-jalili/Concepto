"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import JobItem from "../JobItem/JobItem";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export type JobOpportunityType = {
  id: number;
  company_name: string;
  image: string;
  opportunity: number;
};
type Prop = {
  jobOpportunities: JobOpportunityType[];
};
const Jobs: React.FC<Prop> = ({ jobOpportunities }: Prop) => {
  //   <!-- Jobs -->
  return (
    <section className="container jobs pb-20 overflow-x-hidden">
      {/* <!-- Job Header --> */}
      <div className="flex items-center gap-x-2 mb-9 md:mb-10">
        <h4 className="text-gray-7 md:text-placeholder shrink-0 text-base md:text-2xl">
          فرصت های شغلی
        </h4>
        <span className="border border-r border-gray-2 w-full max-[210px]:hidden"></span>

        <div className="lg:hidden">
          <svg className="w-6 h-6 text-placeholder">
            <use href="#left-arrow"></use>
          </svg>
        </div>
      </div>

      {/* <!-- Job Body --> */}
      <div className="job__swiper relative">
        <Swiper
          className="rounded-3xl"
          id="job__swiper"
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".slide__next",
            prevEl: ".slide__prev",
          }}
          breakpoints={{
            450: {
              spaceBetween: 45,
              slidesPerView: 2,
            },

            600: {
              spaceBetween: 25,
              slidesPerView: 2.5,
            },
            750: {
              spaceBetween: 25,
              slidesPerView: 3,
            },
            900: {
              spaceBetween: 25,
              slidesPerView: 3.5,
            },
            1250: {
              spaceBetween: 25,
              slidesPerView: 5,
            },
          }}
        >
          {jobOpportunities.map((jobOpportunity: JobOpportunityType) => {
            return (
              <SwiperSlide key={jobOpportunity.id}>
                <JobItem
                  company_name={jobOpportunity.company_name}
                  image={"http://127.0.0.1:8000" + jobOpportunity.image}
                  title={`${jobOpportunity.opportunity} فرصت شغلی`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="slide__prev max-md:hidden job-button-next w-12.5 h-12.5 rounded-full flex items-center justify-center bg-white shadow-prev-next cursor-pointer">
          <svg className="w-6 h-6 text-black">
            <use href="#chevron-right"></use>
          </svg>
        </div>
        <div className="slide__next max-md:hidden job-button-prev w-12.5 h-12.5 rounded-full flex items-center justify-center bg-white shadow-2xl cursor-pointer">
          <svg className="w-6 h-6 text-black">
            <use href="#chevron-left"></use>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
