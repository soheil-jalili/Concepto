import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const PopularCompanies: React.FC = () => {
  return (
    <>
      <section className="bg__banner mb-50">
        <div className="container 2xl:p-0 overflow-x-hidden">
          {/* <!-- Popular Companis Header --> */}
          <PopularCompaniesHeader />
          {/* <!-- Popular Companis Body --> */}
          <div className="popular__swiper rounded-3xl mt-4 md:mt-14">
            <Swiper spaceBetween={50} slidesPerView={4} grabCursor>
              <SwiperSlide>
                <div className="w-60.5 h-90 md:w-72 md:h-99.5 rounded-3xl bg-white shadow-1 overflow-hidden">
                  <img src="assets/images/companies/snap.png" alt="Snap" />
                  <div className="px-4 -translate-y-4 flex flex-col gap-y-3.5">
                    <div className="flex items-end gap-x-4">
                      <a href="#">
                        <img
                          src="assets/images/companies/thumbnail/snap.png"
                          alt="Snap"
                        />
                      </a>
                      <div className="flex flex-col mb-2 gap-y-1">
                        <p className="text-gray-7 text-sm md:text-xs font-IRANSansX-Bold">
                          شرکت اسنپ
                        </p>
                        <p className="text-placeholder text-xs">
                          تجارت الکترونیک
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-x-2.5 *:p-2 *:shrink-0">
                      <div className="rounded-[8px] border border-gray-1 flex gap-y-2 flex-col">
                        <p className="text-xs">سرمایه گذاران جدید</p>
                        <p className="text-primary font-IRANSansX-Bold text-sm">
                          21,394
                        </p>
                      </div>
                      <div className="rounded-[8px] border border-gray-1 flex gap-y-2 flex-col">
                        <p className="text-xs">مخاطبین جدید</p>
                        <p className="text-primary font-IRANSansX-Bold text-sm">
                          398
                        </p>
                      </div>
                    </div>

                    <div className="min-h-11">
                      <p className="text-gray-6 line-clamp-2 text-xs leading-[180%] font-IRANSansX-Medium">
                        از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی،
                        خرید بلیط سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و را
                        میتوانید با سوپراپلیکیشن اسنپ انجام دهید.
                      </p>
                    </div>

                    <div className="flex items-center md:pt-4 text-gray-4 justify-between">
                      <div className="flex items-center gap-x-2">
                        <svg className="w-5 h-5">
                          <use href="#location"></use>
                        </svg>
                        <p className="text-sm">تهران، ایران</p>
                      </div>

                      <div className="flex items-center gap-x-2">
                        <svg className="w-3.5 h-3.5 text-secondary_tint_2">
                          <use href="#star"></use>
                        </svg>
                        <span className="text-placeholder text-base font-IRANSansX-Medium">
                          5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-60.5 h-90 md:w-72 md:h-99.5 rounded-3xl bg-white shadow-1 overflow-hidden">
                  <img
                    src="assets/images/companies/digikala.png"
                    alt="Digikala"
                  />

                  <div className="px-4 -translate-y-4 flex flex-col gap-y-3.5">
                    <div className="flex items-end gap-x-4">
                      <a href="#">
                        <img
                          src="assets/images/companies/thumbnail/digikala.png"
                          alt="Snap"
                        />
                      </a>
                      <div className="flex flex-col mb-2 gap-y-1">
                        <p className="text-gray-7 text-sm md:text-xs font-IRANSansX-Bold">
                          شرکت دیجی کالا
                        </p>
                        <p className="text-placeholder text-xs">
                          تجارت الکترونیک
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-x-2.5 *:p-2 *:shrink-0">
                      <div className="rounded-[8px] border border-gray-1 flex gap-y-2 flex-col">
                        <p className="text-xs">سرمایه گذاران جدید</p>
                        <p className="text-primary font-IRANSansX-Bold text-sm">
                          25,120
                        </p>
                      </div>
                      <div className="rounded-[8px] border border-gray-1 flex gap-y-2 flex-col">
                        <p className="text-xs">مخاطبین جدید</p>
                        <p className="text-primary font-IRANSansX-Bold text-sm">
                          432
                        </p>
                      </div>
                    </div>

                    <div className="min-h-11">
                      <p className="text-gray-6 line-clamp-2 text-xs leading-[180%] font-IRANSansX-Medium">
                        هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید!
                        جدیدترین انواع گوشی موبایل، لپ تاپ، لباس، لوازم آرایشی و
                        بهداشتی، کتاب، لوازم خانگی، خودرو و.
                      </p>
                    </div>
                    <div className="flex items-center md:pt-4 text-gray-4 justify-between">
                      <div className="flex items-center gap-x-2">
                        <svg className="w-5 h-5">
                          <use href="#location"></use>
                        </svg>
                        <p className="text-sm">تهران، ایران</p>
                      </div>

                      <div className="flex items-center gap-x-2">
                        <svg className="w-3.5 h-3.5 text-secondary_tint_2">
                          <use href="#star"></use>
                        </svg>
                        <span className="text-placeholder text-base font-IRANSansX-Medium">
                          4
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-60.5 h-90 md:w-72 md:h-99.5 rounded-3xl bg-white shadow-1 overflow-hidden">
                  <img
                    src="assets/images/companies/farabi_company.png"
                    alt="Farabi"
                  />

                  <div className="px-4 -translate-y-4 flex flex-col gap-y-3.5">
                    <div className="flex items-end gap-x-4">
                      <a href="#">
                        <img
                          src="assets/images/companies/thumbnail/farabi.png"
                          alt="Snap"
                        />
                      </a>
                      <div className="flex flex-col mb-2 gap-y-1">
                        <p className="text-gray-7 text-sm md:text-xs font-IRANSansX-Bold">
                          کارگزاری فارابی
                        </p>
                        <p className="text-placeholder text-xs">
                          تجارت الکترونیک
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-x-2.5 *:p-2 *:shrink-0">
                      <div className="rounded-[8px] border border-gray-1 flex gap-y-2 flex-col">
                        <p className="text-xs">سرمایه گذاران جدید</p>
                        <p className="text-primary font-IRANSansX-Bold text-sm">
                          29,120
                        </p>
                      </div>
                      <div className="rounded-[8px] border border-gray-1 flex gap-y-2 flex-col">
                        <p className="text-xs">مخاطبین جدید</p>
                        <p className="text-primary font-IRANSansX-Bold text-sm">
                          392
                        </p>
                      </div>
                    </div>

                    <div className="min-h-11">
                      <p className="text-gray-6 line-clamp-2 font-IRANSansX-Medium text-xs leading-[180%]">
                        کارگزاری بورس خدماتی شامل خرید و فروش سهام و دریافت کد
                        بورسی را ارائه می‌کند؛ همه این خدمات در کارگزاری فارابی
                        به‌صورت غیرحضوری در اختیار شماست.
                      </p>
                    </div>

                    <div className="flex items-center md:pt-4 text-gray-4 justify-between">
                      <div className="flex items-center gap-x-2">
                        <svg className="w-5 h-5">
                          <use href="#location"></use>
                        </svg>
                        <p className="text-sm">تهران، ایران</p>
                      </div>

                      <div className="flex items-center gap-x-2">
                        <svg className="w-3.5 h-3.5 text-secondary_tint_2">
                          <use href="#star"></use>
                        </svg>
                        <span className="text-placeholder text-base font-IRANSansX-Medium">
                          5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-60.5 h-90 md:w-72 md:h-99.5 rounded-3xl bg-white shadow-1 overflow-hidden">
                  <img
                    src="assets/images/companies/alibaba_company.png"
                    alt="Snap"
                  />

                  <div className="px-4 -translate-y-4 flex mb-2 flex-col gap-y-3.5">
                    <div className="flex items-end gap-x-4">
                      <a href="#">
                        <img
                          src="assets/images/companies/thumbnail/alibaba.png"
                          alt="Snap"
                        />
                      </a>
                      <div className="flex flex-col mb-2 gap-y-1">
                        <p className="text-gray-7 text-sm md:text-xs font-IRANSansX-Bold">
                          شرکت علی بابا
                        </p>
                        <p className="text-placeholder text-xs">
                          تجارت الکترونیک
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-x-2.5 *:p-2 *:shrink-0">
                      <div className="rounded-[8px] border border-gray-1 flex gap-y-2 flex-col">
                        <p className="text-xs">سرمایه گذاران جدید</p>
                        <p className="text-primary font-IRANSansX-Bold text-sm">
                          26,750
                        </p>
                      </div>
                      <div className="rounded-[8px] border border-gray-1 flex gap-y-2 flex-col">
                        <p className="text-xs">مخاطبین جدید</p>
                        <p className="text-primary font-IRANSansX-Bold text-sm">
                          234
                        </p>
                      </div>
                    </div>

                    <div className="min-h-11">
                      <p className="text-gray-6 line-clamp-2 text-xs leading-[180%] font-IRANSansX-Medium">
                        علی‌بابا برندی از هلدینگ پرافتخار توشا (توسعه تجربه
                        شایسته سفر) است، سامانه‌ای که به‌واسطه پشتیبانی و حمایت
                        شما در سکوی اول گردشگری کشور ایستاده.
                      </p>
                    </div>
                    <div className="flex items-center md:pt-4 text-gray-4 justify-between">
                      <div className="flex items-center gap-x-2">
                        <svg className="w-5 h-5">
                          <use href="#location"></use>
                        </svg>
                        <p className="text-sm">تهران، ایران</p>
                      </div>

                      <div className="flex items-center gap-x-2">
                        <svg className="w-3.5 h-3.5 text-secondary_tint_2">
                          <use href="#star"></use>
                        </svg>
                        <span className="text-placeholder text-base font-IRANSansX-Medium">
                          5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCompanies;

const PopularCompaniesHeader = () => {
  {
    /* <!-- Popular Companis Header --> */
  }
  return (
    <div className="flex items-center max-md:pb-4 justify-between font-IRANSansX-Medium sm:font-IRANSansX-Bold text-white pt-20 text-base gap-x-1 md:gap-x-0 gap-y-4 sm:gap-y-14 sm:text-2xl">
      <p className="font-IRANSansX-Regular">شرکت‌های محبوب</p>
      <a href="#" className="flex items-center text-lg">
        <span className="hidden sm:block">مشاهده همه</span>
        <svg className="w-6 h-6">
          <use href="#left-arrow"></use>
        </svg>
      </a>
    </div>
  );
};
