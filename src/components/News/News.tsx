import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const News: React.FC = () => {
  return (
    <section className="bg__banner mb-50">
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
        <div className="news mt-5 md:mt-14">
          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 1.8,
              },
              996: {
                slidesPerView: 1.8,  
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="h-86 md:w-98 md:h-[418.2px] rounded-3xl bg-white shadow-1 overflow-hidden">
                  <img src="assets/images/news/car.png" alt="Snap Record" />

                  <div className="px-4 flex flex-col gap-y-4 mt-4">
                    <p className="text-xs text-placeholder">تجارت الکترونیک</p>

                    <h6 className="text-gray-7 line-clamp-2 max-h-12.5 font-IRANSansX-Bold text-sm md:text-base">
                      اسنپ رکورد خود را با بیش از ۵ میلیون سفر روزانه شکست
                    </h6>

                    <div className="min-h-12.5">
                      <p className="line-clamp-2 text-gray-6 text-xs md:text-sm">
                        در ماه پایانی سال ۱۴۰۲، اسنپ رکورد ۵ میلیون و ۱۳۹ هزار و
                        ۶۵ سفر روزانه در سرویس خودرو و باکس را زد. این رکورد در
                        روز چهارشنبه، دوم اسفند، ثبت شد.
                      </p>
                    </div>

                    <div className="flex items-center text-gray-4 justify-between mt-2">
                      <div className="flex items-center gap-x-3">
                        <div className="w-7 h-7 rounded-full">
                          <img
                            src="assets/images/profiles/farhad1.png"
                            alt="Farhad"
                          />
                        </div>
                        <p className="text-sm">فرهاد رئوفی</p>
                      </div>

                      <div className="flex items-center gap-x-2">
                        <svg className="w-5 h-5">
                          <use href="#calendar"></use>
                        </svg>
                        <span className="text-placeholder text-sm">
                          1402/12/11
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="h-86 md:w-98 md:h-[418.2px] rounded-3xl bg-white shadow-1 overflow-hidden">
                  <img src="assets/images/news/phone.png" alt="Digikala" />

                  <div className="px-4 flex flex-col gap-y-4 mt-4">
                    <p className="text-xs text-placeholder">تجارت الکترونیک</p>

                    <h6 className="text-gray-7 line-clamp-2 max-h-12.5 font-IRANSansX-Bold text-sm md:text-base">
                      بار دیگر اسنپ فود به دلیل مشکل فنی از دسترس خارج شد
                    </h6>

                    <div className="min-h-12.5">
                      <p className="line-clamp-2 text-gray-6 text-xs md:text-sm">
                        بار دیگر اسنپ‌فود به‌دلیل مشکل فنی از دسترس کاربران خارج
                        شد. این مشکل اوایل بهمن هم تکرار شده بود و رفع آن
                        ساعت‌ها طول کشید.
                      </p>
                    </div>

                    <div className="flex items-center text-gray-4 justify-between mt-2">
                      <div className="flex items-center gap-x-3">
                        <div className="w-7 h-7 rounded-full">
                          <img
                            src="assets/images/profiles/amir2.png"
                            alt="Farhad"
                          />
                        </div>
                        <p className="text-sm">امیر بختیاری</p>
                      </div>

                      <div className="flex items-center gap-x-2">
                        <svg className="w-5 h-5">
                          <use href="#calendar"></use>
                        </svg>
                        <span className="text-placeholder text-sm">
                          1402/12/15
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="h-86 md:w-98 md:h-[418.2px] rounded-3xl bg-white shadow-1 overflow-hidden">
                  <img src="assets/images/news/alibaba.png" alt="Alibaba" />

                  <div className="px-4 flex flex-col gap-y-4 mt-4">
                    <p className="text-xs text-placeholder">تجارت الکترونیک</p>

                    <h6 className="text-gray-7 line-clamp-2 max-h-12.5 font-IRANSansX-Bold text-sm md:text-base">
                      رکورد ثبت سفارش آنلاین خدمات گردشگری شکسته شد: ثبت 2 خدمت
                      در هر ثانیه
                    </h6>

                    <div className="min-h-12.5">
                      <p className="line-clamp-2 text-gray-6 text-xs md:text-sm leading-[180%]">
                        با نزدیکی به سال نو و افزایش سفرهای بین شهری، رکورد ثبت
                        سفارش آنلاین خدمات گردشگری شکسته شد.
                      </p>
                    </div>

                    <div className="flex items-center text-gray-4 justify-between mt-2">
                      <div className="flex items-center gap-x-3">
                        <div className="w-7 h-7 rounded-full">
                          <img
                            src="assets/images/profiles/atosa3.png"
                            alt="Farhad"
                          />
                        </div>
                        <p className="text-sm">آتوسا صفوی زاده</p>
                      </div>

                      <div className="flex items-center gap-x-2">
                        <svg className="w-5 h-5">
                          <use href="#calendar"></use>
                        </svg>
                        <span className="text-placeholder text-sm">
                          1402/12/3
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default News;
