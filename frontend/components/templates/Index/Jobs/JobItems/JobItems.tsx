"use client";
import React from "react";
import { JobOpportunityType } from "../Jobs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import JobItem from "../../JobItem/JobItem";

const JobItems: React.FC<{ jobOpportunities: JobOpportunityType[] }> = ({
  jobOpportunities,
}) => {
  return (
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
  );
};

export default JobItems;
