"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import { NewnNewsType } from "../News";

const NewsItem: React.FC<{ newNews: NewnNewsType[] }> = ({ newNews }) => {
  return (
    <Swiper
      className="rounded-3xl "
      id="news__swiper"
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        450: {
          slidesPerView: 1.3,
        },

        768: {
          slidesPerView: 1.8,
        },

        1024: {
          slidesPerView: 2.3,
        },

        1279: {
          slidesPerView: 3,
        },
      }}
    >
      {newNews.map((news: NewnNewsType) => {
        return (
          <SwiperSlide key={news.id}>
            <div className="swiper-slide">
              <div className="h-auto md:w-98  md:h-[418.2px] rounded-3xl bg-white shadow-1 overflow-hidden">
                <img
                  src={"http://127.0.0.1:8000" + news.main_image}
                  alt="Snap Record"
                  className="w-full"
                />

                <div className="px-4 flex flex-col mt-2 gap-y-2 md:gap-y-4 md:mt-4">
                  <p className="text-xs text-placeholder">
                    {news.company_name}
                  </p>

                  <h6 className="text-gray-7 line-clamp-2 h-10 font-IRANSansX-Bold text-sm md:text-base">
                    {news.title}
                  </h6>

                  <div className="min-h-12.5">
                    <p className="line-clamp-2 text-gray-6 text-xs md:text-sm">
                      {news.short_description}
                    </p>
                  </div>

                  <div className="flex items-center text-gray-4 justify-between mt-2 pb-5 max-[282px]:flex-col max-[282px]:gap-3">
                    <div className="flex items-center gap-x-3">
                      <div className="w-7 h-7 rounded-full">
                        <img
                          src="assets/images/profiles/farhad1.png"
                          alt="Farhad"
                        />
                      </div>
                      <p className="text-sm">
                        {news.author_name !== null
                          ? news.author_name
                          : "ناشناس"}
                      </p>
                    </div>

                    <div className="flex items-center gap-x-2">
                      <svg className="w-5 h-5">
                        <use href="#calendar"></use>
                      </svg>
                      <span className="text-placeholder text-sm">
                        {
                          new Date(news.created_at)
                            .toLocaleString("fa-IR")
                            .split(",")[0]
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NewsItem;
