"use client";
import Link from "next/link";
import { CategoryType } from "../Categories";
import { Swiper, SwiperSlide } from "swiper/react";

const CategoryXs = ({ categories }: { categories: CategoryType[] }) => {
  {
    /* <!-- For Max-[519] --> */
  }
  return (
    <Swiper className="five_hundred hidden! max-[520px]:grid! mt-6 rounded-3xl ">
      <SwiperSlide>
        {categories.slice(0, 6).map((category: CategoryType) => {
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
        {categories.slice(7, 13).map((category: CategoryType) => {
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
    </Swiper>
  );
};

export default CategoryXs;
