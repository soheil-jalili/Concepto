"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import EventItem from "../../EventItem/EventItem";
import { CategoryEventsType } from "../Events";
const EventsItem: React.FC<{ categoryEvents: CategoryEventsType[] }> = ({
  categoryEvents,
}) => {
  return (
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
  );
};

export default EventsItem;
