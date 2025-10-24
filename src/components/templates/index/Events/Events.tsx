import React from "react";
import EventItem from "../EventItem/EventItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Events: React.FC = () => {
  return (
    <>
      <section className="container max-md:pb-20 pb-25">
        {/* <!-- Title Events Section --> */}
        <div className="flex items-center gap-x-2  md:mb-10 max-[320px]:justify-between">
          <h4 className="max-[248px]:hidden text-gray-7 md:text-placeholder shrink-0 text-base md:text-2xl">
            دسته بندی ها
          </h4>
          <span className="max-[320px]:hidden border border-r border-gray-2 w-full max-[210px]:hidden"></span>

          <div className="flex items-center shrink-0 text-placeholder">
            <a href="#">مشاهده همه</a>
            <svg className="w-6 md:h-6">
              <use href="#left-arrow"></use>
            </svg>
          </div>
        </div>

        {/* <!-- Events Body --> */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6">
          {/* <!-- Event Card --> */}
          <EventItem
            image="/assets/images/events/digikala.png"
            title="بوت کمپ برنامه نویسی دیجی کالا"
            location="تهران، ایران"
            date="29 بهمن"
            description="در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید منتخب دیجی‌کالا، بوژان و کوئرا آموزش می‌بینید و در نهایت امکان استخدام در دیجی‌کالا را خواهید داشت"
          />
          <EventItem
            image="/assets/images/events/qazal.png"
            title="سکوی پرتاب غزال"
            location="تهران، ایران"
            date="27 دی"
            description="سکوی پرتاب غزال، 27 دی ماه سال جاری با هدف شناسایی تیم‌ها و سرمایه‌گذاری بر استارتاپ‌های سازنده بازی های رایانه ای برگزار خواهد شد."
          />
          <EventItem
            image="/assets/images/events/sako.png"
            title="سکوی پرتاب قزوین"
            location="قزوین، ایران"
            date="24 آبان"
            description="ویداد تخصصی سرمایه‌گذاری سکوی پرتاب قزوین با هدف شناسایی تیم‌ها و سرمایه‌گذاری بر استارتاپ‌های این استان ۲۴ آبان ماه سال جاری در پارک علم و فناوری قزوین برگزار می‌شود."
          />
          <EventItem
            image="/assets/images/events/job.png"
            title="فراخوان جذب ایده و استارتاپ"
            location="تهران، ایران"
            date="22 شهریور"
            description="در حاشیه همایش معدن‌کاری دیجیتال 1401، خانه خلاق و نوآوری دنیای اقتصاد با همکاری مجموعه 100استارت‌آپ، برای ایده‌ها و استارتاپ‌های حوزه معدن جذب سرمایه می‌کند."
          />
        </div>
        <Swiper className="sm:hidden" grabCursor spaceBetween={30} id='swiper__event'>
          <SwiperSlide>
            <EventItem
              image="/assets/images/events/digikala.png"
              title="بوت کمپ برنامه نویسی دیجی کالا"
              location="تهران، ایران"
              date="29 بهمن"
              description="در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید منتخب دیجی‌کالا، بوژان و کوئرا آموزش می‌بینید و در نهایت امکان استخدام در دیجی‌کالا را خواهید داشت"
            />
          </SwiperSlide>
          <SwiperSlide>
            <EventItem
              image="/assets/images/events/checkbox.png"
              title="سکوی پرتاب غزال"
              location="تهران، ایران"
              date="27 دی"
              description="سکوی پرتاب غزال، 27 دی ماه سال جاری با هدف شناسایی تیم‌ها و سرمایه‌گذاری بر استارتاپ‌های سازنده بازی های رایانه ای برگزار خواهد شد."
            />
          </SwiperSlide>

          <SwiperSlide>
            <EventItem
              image="/assets/images/events/sako.png"
              title="سکوی پرتاب قزوین"
              location="قزوین، ایران"
              date="24 آبان"
              description="ویداد تخصصی سرمایه‌گذاری سکوی پرتاب قزوین با هدف شناسایی تیم‌ها و سرمایه‌گذاری بر استارتاپ‌های این استان ۲۴ آبان ماه سال جاری در پارک علم و فناوری قزوین برگزار می‌شود."
            />
          </SwiperSlide>

          <SwiperSlide>
            <EventItem
              image="/assets/images/events/job.png"
              title="فراخوان جذب ایده و استارتاپ"
              location="تهران، ایران"
              date="22 شهریور"
              description="در حاشیه همایش معدن‌کاری دیجیتال 1401، خانه خلاق و نوآوری دنیای اقتصاد با همکاری مجموعه 100استارت‌آپ، برای ایده‌ها و استارتاپ‌های حوزه معدن جذب سرمایه می‌کند."
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
export default Events;
