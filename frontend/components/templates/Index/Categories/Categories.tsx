"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

type CategoryType = {
  id: number;
  title: string;
  image: string;
};
type Prop = {
  categories: CategoryType[];
};
const Categories: React.FC<Prop> = ({ categories }: Prop) => {
  return (
    <>
      <section className="pb-20 xl:pb-20 2xl:!pb-0">
        {/* <!-- Title Categories Section --> */}
        <div className="flex items-center gap-x-2">
          <h4 className="text-gray-7 md:text-placeholder shrink-0 text-base md:text-2xl">
            دسته بندی ها
          </h4>
          <span className="border border-r border-gray-2 w-full max-[210px]:hidden"></span>

          <div className="lg:hidden">
            <svg className="w-6 h-6 text-placeholder">
              <use href="#left-arrow"></use>
            </svg>
          </div>
        </div>

        {/* <!-- Category Item --> */}
        <div className="hidden lg:grid [grid-template-columns:repeat(4,56px)] [grid-template-rows:repeat(2,86px)] md:[grid-template-columns:repeat(7,108px)] md:[grid-template-rows:repeat(2,141px)] justify-between gap-x-5 gap-y-5 mt-6">
          {categories.map((category: CategoryType) => {
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
        </div>

        {/* <!-- For Max-[lg] --> */}
        <Swiper className="mt-6 !hidden min-[520px]:!grid lg__swiper max-[530px]:!gap-x-3.5 rounded-3xl">
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
                  <Link href={`/category/${category.title}`}>
                    {category.title}
                  </Link>
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

        {/* <!-- For Max-[519] --> */}
        <Swiper className="five_hundred !hidden max-[520px]:!grid mt-6 rounded-3xl ">
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
                  <Link href={`/category/${category.title}`}>
                    {category.title}
                  </Link>
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
                  <Link href={`/category/${category.title}`}>
                    {category.title}
                  </Link>
                </div>
              );
            })}
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Categories;
