import React from "react";

const Events: React.FC = () => {
  return (
    <>
      <section className="container pb-20 xl:pb-40">
        {/* <!-- Title Events Section --> */}
        <div className="flex items-center gap-x-2 mb-9 md:mb-10">
          <h4 className="text-gray-7 md:text-placeholder shrink-0 text-base md:text-2xl">
            دسته بندی ها
          </h4>
          <span className="border border-r border-gray-2 w-full max-[210px]:hidden"></span>

          <div className="flex items-center shrink-0 text-placeholder">
            <a href="#">مشاهده همه</a>
            <svg className="w-6 h-6">
              <use href="#left-arrow"></use>
            </svg>
          </div>
        </div>

        {/* <!-- Events Body --> */}
        <div className="grid grid-cols-2 max-sm:hidden gap-x-6 gap-y-6">
          {/* <!-- Event Card --> */}

          <div className="rounded-3xl border border-gray-2">
            <div className="flex gap-x-3">
              <img
                src="assets/images/events/digikala.png"
                alt="DigiKala"
                className="event__image"
              />

              <div className="pl-3 pt-8 pr-2 pb-6 flex gap-y-3 flex-col">
                <div className="flex gap-y-3 flex-col min-h-25.5">
                  <a href="#">
                    <h5 className="font-IRANSansX-Bold text-sm md:text-[20px] text-gray-7">
                      بوت کمپ برنامه نویسی دیجی کالا
                    </h5>
                  </a>
                  <p className="line-clamp-2 text-sm md:text-base text-placeholder">
                    در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید
                    منتخب دیجی‌کالا، بوژان و کوئرا آموزش می‌بینید و در نهایت
                    امکان استخدام در دیجی‌کالا را خواهید داشت
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-1 md:gap-x-2 text-placeholder">
                    <svg className="w-4 md:w-5 h-4 md:h-5">
                      <use href="#location"></use>
                    </svg>
                    <p className="md:text-sm text-xs">تهران، ایران</p>
                  </div>

                  <div className="flex items-center gap-x-1 md:gap-x-2">
                    <svg className="w-4 md:w-5 h-4 md:h-5">
                      <use href="#calendar"></use>
                    </svg>
                    <span className="text-placeholder md:text-sm text-xs">
                      29 بهمن
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-2">
            <div className="flex gap-x-3">
              <img
                src="assets/images/events/digikala.png"
                alt="DigiKala"
                className="event__image"
              />

              <div className="pl-3 pt-8 pr-2 pb-6 flex gap-y-3 flex-col">
                <div className="flex gap-y-3 flex-col min-h-25.5">
                  <a href="#">
                    <h5 className="font-IRANSansX-Bold text-sm md:text-[20px] text-gray-7">
                      بوت کمپ برنامه نویسی دیجی کالا
                    </h5>
                  </a>
                  <p className="line-clamp-2 text-sm md:text-base text-placeholder">
                    در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید
                    منتخب دیجی‌کالا، بوژان و کوئرا آموزش می‌بینید و در نهایت
                    امکان استخدام در دیجی‌کالا را خواهید داشت
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-1 md:gap-x-2 text-placeholder">
                    <svg className="w-4 md:w-5 h-4 md:h-5">
                      <use href="#location"></use>
                    </svg>
                    <p className="md:text-sm text-xs">تهران، ایران</p>
                  </div>

                  <div className="flex items-center gap-x-1 md:gap-x-2">
                    <svg className="w-4 md:w-5 h-4 md:h-5">
                      <use href="#calendar"></use>
                    </svg>
                    <span className="text-placeholder md:text-sm text-xs">
                      29 بهمن
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-2">
            <div className="flex gap-x-3">
              <img
                src="assets/images/events/digikala.png"
                alt="DigiKala"
                className="event__image"
              />

              <div className="pl-3 pt-8 pr-2 pb-6 flex gap-y-3 flex-col">
                <div className="flex gap-y-3 flex-col min-h-25.5">
                  <a href="#">
                    <h5 className="font-IRANSansX-Bold text-sm md:text-[20px] text-gray-7">
                      بوت کمپ برنامه نویسی دیجی کالا
                    </h5>
                  </a>
                  <p className="line-clamp-2 text-sm md:text-base text-placeholder">
                    در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید
                    منتخب دیجی‌کالا، بوژان و کوئرا آموزش می‌بینید و در نهایت
                    امکان استخدام در دیجی‌کالا را خواهید داشت
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-1 md:gap-x-2 text-placeholder">
                    <svg className="w-4 md:w-5 h-4 md:h-5">
                      <use href="#location"></use>
                    </svg>
                    <p className="md:text-sm text-xs">تهران، ایران</p>
                  </div>

                  <div className="flex items-center gap-x-1 md:gap-x-2">
                    <svg className="w-4 md:w-5 h-4 md:h-5">
                      <use href="#calendar"></use>
                    </svg>
                    <span className="text-placeholder md:text-sm text-xs">
                      29 بهمن
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-2">
            <div className="flex gap-x-3">
              <img
                src="assets/images/events/digikala.png"
                alt="DigiKala"
                className="event__image"
              />

              <div className="pl-3 pt-8 pr-2 pb-6 flex gap-y-3 flex-col">
                <div className="flex gap-y-3 flex-col min-h-25.5">
                  <a href="#">
                    <h5 className="font-IRANSansX-Bold text-sm md:text-[20px] text-gray-7">
                      بوت کمپ برنامه نویسی دیجی کالا
                    </h5>
                  </a>
                  <p className="line-clamp-2 text-sm md:text-base text-placeholder">
                    در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید
                    منتخب دیجی‌کالا، بوژان و کوئرا آموزش می‌بینید و در نهایت
                    امکان استخدام در دیجی‌کالا را خواهید داشت
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-1 md:gap-x-2 text-placeholder">
                    <svg className="w-4 md:w-5 h-4 md:h-5">
                      <use href="#location"></use>
                    </svg>
                    <p className="md:text-sm text-xs">تهران، ایران</p>
                  </div>

                  <div className="flex items-center gap-x-1 md:gap-x-2">
                    <svg className="w-4 md:w-5 h-4 md:h-5">
                      <use href="#calendar"></use>
                    </svg>
                    <span className="text-placeholder md:text-sm text-xs">
                      29 بهمن
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
