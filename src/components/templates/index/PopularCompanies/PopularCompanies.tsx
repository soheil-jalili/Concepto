import { Swiper, SwiperSlide } from "swiper/react";
import PopularCompaniesCart from "../PopularCompaniesCart/PopularCompaniesCart";

const PopularCompanies: React.FC = () => {
  return (
    <>
      <section className="bg__banner mb-50">
        <div className="container 2xl:p-0 overflow-x-hidden">
          {/* <!-- Popular Companis Header --> */}
          <PopularCompaniesHeader />
          {/* <!-- Popular Companis Body --> */}
          <div className="popular__swiper mt-4 md:mt-12">
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
              <SwiperSlide>
                <PopularCompaniesCart
                  mainImage="assets/images/companies/snap.png"
                  mainImageAlt="Snap"
                  thumbnailImage="assets/images/companies/thumbnail/snap.png"
                  companyName="شرکت اسنپ"
                  companyDescription="تجارت الکترونیک"
                  newInventorsNumber="21.394"
                  newContact={398}
                  description="از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر،
                            مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و را میتوانید با سوپراپلیکیشن
                            اسنپ انجام دهید."
                  city="تهران"
                  country="ایران"
                  rating={5}
                />
              </SwiperSlide>

              <SwiperSlide>
                <PopularCompaniesCart
                  mainImage="assets/images/companies/digikala.png"
                  mainImageAlt="Digikala"
                  thumbnailImage="assets/images/companies/thumbnail/digikala.png"
                  companyName="شرکت دیجی کالا"
                  companyDescription="تجارت الکترونیک"
                  newInventorsNumber="25,120"
                  newContact={432}
                  description="هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید!
                        جدیدترین انواع گوشی موبایل، لپ تاپ، لباس، لوازم آرایشی و
                        بهداشتی، کتاب، لوازم خانگی، خودرو و."
                  city="تهران"
                  country="ایران"
                  rating={4}
                />
              </SwiperSlide>

              <SwiperSlide>
                <PopularCompaniesCart
                  mainImage="assets/images/companies/farabi_company.png"
                  mainImageAlt="Farabi"
                  thumbnailImage="assets/images/companies/thumbnail/farabi.png"
                  companyName="کارگزاری فارابی"
                  companyDescription="تجارت الکترونیک"
                  newInventorsNumber="29,120"
                  newContact={392}
                  description="کارگزاری بورس خدماتی شامل خرید و فروش سهام و دریافت کد
                        بورسی را ارائه می‌کند؛ همه این خدمات در کارگزاری فارابی
                        به‌صورت غیرحضوری در اختیار شماست."
                  city="تهران"
                  country="ایران"
                  rating={5}
                />
              </SwiperSlide>

              <SwiperSlide>
                <PopularCompaniesCart
                  mainImage="assets/images/companies/alibaba_company.png"
                  mainImageAlt="Alibaba"
                  thumbnailImage="assets/images/companies/thumbnail/alibaba.png"
                  companyName="شرکت علی بابا"
                  companyDescription="تجارت الکترونیک"
                  newInventorsNumber="26,750"
                  newContact={234}
                  description="علی‌بابا برندی از هلدینگ پرافتخار توشا (توسعه تجربه
                        شایسته سفر) است، سامانه‌ای که به‌واسطه پشتیبانی و حمایت
                        شما در سکوی اول گردشگری کشور ایستاده."
                  city="تهران"
                  country="ایران"
                  rating={5}
                />
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
