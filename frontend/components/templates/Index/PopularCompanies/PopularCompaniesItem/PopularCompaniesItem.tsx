"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularCompaniesCart from "../../PopularCompaniesCart/PopularCompaniesCart";
import { PopularCompaniesType } from "../PopularCompanies";
const PopularCompaniesItem = ({
  popularCompanies,
}: {
  popularCompanies: PopularCompaniesType[];
}) => {
  return (
    <Swiper
      className="rounded-3xl "
      id="popular__swiper"
      spaceBetween={24}
      slidesPerView={4}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        376: {
          slidesPerView: 1.2,
        },
        458: {
          slidesPerView: 1.6,
        },
        500: {
          slidesPerView: 1.9,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2.5,
        },

        900: {
          slidesPerView: 2.8,
        },

        1024: {
          slidesPerView: 4,
        },
      }}
      grabCursor
    >
      {popularCompanies.map((popularCompany: PopularCompaniesType) => {
        return (
          <SwiperSlide>
            <PopularCompaniesCart
              mainImage={"http://127.0.0.1:8000" + popularCompany.main_image}
              mainImageAlt={popularCompany.company_name}
              thumbnailImage={
                "http://127.0.0.1:8000" + popularCompany.company_logo
              }
              companyName={popularCompany.company_name}
              companyDescription={popularCompany.company_description}
              newInventorsNumber="21.394"
              newContact={popularCompany.new_contact}
              description={popularCompany.company_short_description}
              city={popularCompany.city}
              country={popularCompany.country}
              rating={popularCompany.rate}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PopularCompaniesItem;
