"use client";
import React from "react";
import EventItem from "../EventItem/EventItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type CategoryEventsType = {
  id: number;
  image: string;
  title: string;
  description: string;
  country: string;
  city: string;
  created_at: string;
};
type Prop = {
  categoryEvents: CategoryEventsType[];
};

const Events: React.FC<Prop> = ({ categoryEvents }: Prop) => {
  return (
    <>
      <section className="container max-md:pb-20 pb-25">
        {/* <!-- Title Events Section --> */}
        <div className="flex items-center gap-x-2  md:mb-10 max-[320px]:justify-between">
          <h4 className="max-[248px]:hidden text-gray-7 md:text-placeholder shrink-0 text-base md:text-2xl">
            دسته بندی ها
          </h4>
          <span className="max-[320px]:hidden border border-r border-gray-2 w-full max-[210px]:hidden"></span>

          <div className="flex items-center shrink-0 text-placeholder">
            <a href="#">مشاهده همه</a>
            <svg className="w-6 md:h-6">
              <use href="#left-arrow"></use>
            </svg>
          </div>
        </div>

        {/* <!-- Events Body --> */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6">
          {/* <!-- Event Card --> */}
          {categoryEvents.map((category: CategoryEventsType) => {
            return (
              <EventItem
                key={category.id}
                image={"http://127.0.0.1:8000" + category.image}
                title={category.title}
                location={`${category.city}، ${category.country}`}
                date={category.created_at}
                description={category.description}
              />
            );
          })}
        </div>
        <Swiper
          className="sm:hidden rounded-3xl"
          grabCursor
          spaceBetween={30}
          id="swiper__event"
        >
          {categoryEvents.map((category: CategoryEventsType) => {
            return (
              <SwiperSlide key={category.id}>
                <EventItem
                  image={"http://127.0.0.1:8000" + category.image}
                  title={category.title}
                  location={`${category.city}، ${category.country}`}
                  date={category.created_at}
                  description={category.description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};
export default Events;
