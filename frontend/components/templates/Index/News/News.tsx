"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type NewnNewsType = {
  id: number;
  company_name: string;
  main_image: string;
  short_description: string;
  author_name: string;
  title: string;
  created_at: string;
};
type Prop = {
  newNews: NewnNewsType[];
};
const News: React.FC<Prop> = ({ newNews }: Prop) => {
  return (
    <section className="bg__banner mb-20 md:mb-40">
      <div className="container 2xl:p-0 overflow-x-hidden rounded-3xl">
        {/* <!-- News Companis Header --> */}
        <div className="flex items-center justify-between text-white max-md:pb-4 pt-20 text-base gap-x-1 md:gap-x-0 gap-y-4 sm:gap-y-14 sm:text-2xl">
          <p className="font-IRANSansX-Medium sm:font-IRANSansX-Bold">
            تازه‌ترین اخبار
          </p>
          <a href="#" className="flex items-center text-lg">
            <span className="hidden sm:block">مشاهده همه</span>
            <svg className="w-6 h-6">
              <use href="#left-arrow"></use>
            </svg>
          </a>
        </div>
        {/* <!-- Popular News Body --> */}
        <div className="news mt-5 md:mt-12 min-[2370px]:!mt-0">
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
            {newNews.map((news) => {
              return (
                <SwiperSlide key={news.id}>
                  <div className="swiper-slide">
                    <div className="h-auto md:w-98  md:h-[418.2px] rounded-3xl bg-white shadow-1 overflow-hidden">
                      <img
                        src={"http://127.0.0.1:8000" + news.main_image}
                        alt="Snap Record"
                        className="w-full"
                      />

                      <div className="px-4 flex flex-col gap-y-4 mt-4">
                        <p className="text-xs text-placeholder">
                          {news.company_name}
                        </p>

                        <h6 className="text-gray-7 line-clamp-2 max-h-12.5 font-IRANSansX-Bold text-sm md:text-base">
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
        </div>
      </div>
    </section>
  );
};

export default News;
