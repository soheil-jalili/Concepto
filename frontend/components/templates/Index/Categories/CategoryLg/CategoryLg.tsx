"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoryType } from "../Categories";
{
  /* <!-- For Max-[lg] --> */
}
const CategoryLg: React.FC<{ categories: CategoryType[] }> = ({
  categories,
}: {
  categories: CategoryType[];
}) => {
  return (
    <Swiper className="mt-6 hidden! min-[520px]:grid! lg__swiper max-[530px]:gap-x-3.5! rounded-3xl">
      <SwiperSlide>
        {categories.slice(0, 8).map((category: CategoryType) => {
          return (
            <div
              className="flex items-center justify-center gap-y-3 flex-col text-base"
              key={category.id}
            >
              <img
                src={"http://127.0.0.1:8000/" + category.image}
                alt={category.title}
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link href={`/category/${category.title}`}>{category.title}</Link>
            </div>
          );
        })}
      </SwiperSlide>

      <SwiperSlide>
        {categories
          .slice(9, categories.length)
          .map((category: CategoryType) => {
            return (
              <div
                className="flex items-center justify-center gap-y-3 flex-col text-base"
                key={category.id}
              >
                <img
                  src={"http://127.0.0.1:8000/" + category.image}
                  alt={category.title}
                  className="p-1.5 border-2 border-primary rounded-full"
                />
                <Link href={`/category/${category.title}`}>
                  {category.title}
                </Link>
              </div>
            );
          })}
      </SwiperSlide>
    </Swiper>
  );
};

export default CategoryLg;
