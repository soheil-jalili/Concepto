import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import JobItem from "../JobItem/JobItem";

const Jobs: React.FC = () => {
  //   <!-- Jobs -->
  return (
    <section className="container jobs pb-40 overflow-x-hidden">
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
          spaceBetween={24}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <JobItem
              companyName="بلو بانک"
              image="/assets/images/jobs/blu.png"
              title="12 فرصت شغلی"
            />
          </SwiperSlide>

          <SwiperSlide>
            <JobItem
              companyName="آسیاتک"
              image="assets/images/jobs/asia_teck.png"
              title="16 فرصت شغلی"
            />
          </SwiperSlide>

          <SwiperSlide>
            <JobItem
              companyName="کارگزاری فارابی"
              image="assets/images/jobs/farabi.png"
              title="11 فرصت شغلی"
            />
          </SwiperSlide>
          <SwiperSlide>
            <JobItem
              companyName="بیمه بازار"
              image="/assets/images/jobs/bimeh.png"
              title="14 فرصت شغلی"
            />
          </SwiperSlide>
          <SwiperSlide>
            <JobItem
              companyName="گروه علی بابا"
              image="assets/images/jobs/alibaba.png"
              title="18 فرصت شغلی"
            />
          </SwiperSlide>
          <SwiperSlide>
            <JobItem
              companyName="بیمه بازار"
              image="assets/images/jobs/asia_teck.png"
              title="14 فرصت شغلی"
            />
          </SwiperSlide>
        </Swiper>

        <div className="max-md:hidden job-button-next w-12.5 h-12.5 rounded-full flex items-center justify-center bg-white shadow-prev-next cursor-pointer">
          <svg className="w-6 h-6 text-black">
            <use href="#chevron-right"></use>
          </svg>
        </div>
        <div className="max-md:hidden job-button-prev w-12.5 h-12.5 rounded-full flex items-center justify-center bg-white shadow-2xl cursor-pointer">
          <svg className="w-6 h-6 text-black">
            <use href="#chevron-left"></use>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
