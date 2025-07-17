const Jobs = () => {
  //   <!-- Jobs -->
  return (
    <section className="container jobs pb-40 overflow-x-hidden">
      {/* <!-- Job Header --> */}
      <div className="flex items-center gap-x-2 mb-9 md:mb-10">
        <h4 className="text-gray-7 md:text-placeholder shrink-0 text-base md:text-2xl">
          فرصت های شغلی
        </h4>
        <span className="border border-r border-gray-2 w-full max-[210px]:hidden"></span>

        <div className="lg:hidden">
          <svg className="w-6 h-6 text-placeholder">
            <use href="#left-arrow"></use>
          </svg>
        </div>
      </div>

      {/* <!-- Job Body --> */}
      <div className="job__swiper relative">
        <div className="swiper-wrapper">
          {/* <!-- Job Item --> */}
          <div className="swiper-slide">
            <div className="w-38 flex items-center flex-col justify-center h-42.5 md:w-54 md:h-[189px] relative bg-gray-box-job rounded-3xl">
              <img
                src="assets/images/jobs/blu.png"
                className="h-32 object-cover absolute -top-13"
                alt="Blu"
              />

              <div className="flex flex-col gap-y-3 items-center justify-center">
                <p className="text-gray-7 text-base md:text-lg leading-[180%]">
                  12 فرصت شغلی
                </p>
                <p className="text-primary text-xs md:text-sm font-IRANSansX-Medium md:font-IRANSansX-Bold">
                  بلو بانک
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Job Item --> */}
          <div className="swiper-slide">
            <div className="w-38 flex items-center flex-col justify-center h-42.5 md:w-54 md:h-[189px] relative bg-gray-box-job rounded-3xl">
              <img
                src="assets/images/jobs/asia_teck.png"
                className="h-32 object-cover absolute -top-13"
                alt="Blu"
              />

              <div className="flex flex-col gap-y-3 items-center justify-center">
                <p className="text-gray-7 text-base md:text-lg leading-[180%]">
                  16 فرصت شغلی
                </p>
                <p className="text-primary text-xs md:text-sm font-IRANSansX-Medium md:font-IRANSansX-Bold">
                  آسیاتک
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Job Item --> */}
          <div className="swiper-slide">
            <div className="w-38 flex items-center flex-col justify-center h-42.5 md:w-54 md:h-[189px] relative bg-gray-box-job rounded-3xl">
              <img
                src="assets/images/jobs/farabi.png"
                className="h-32 object-cover absolute -top-13"
                alt="Blu"
              />

              <div className="flex flex-col gap-y-3 items-center justify-center">
                <p className="text-gray-7 text-base md:text-lg leading-[180%]">
                  11 فرصت شغلی
                </p>
                <p className="text-primary text-xs md:text-sm font-IRANSansX-Medium md:font-IRANSansX-Bold">
                  کارگزاری فارابی
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Job Item --> */}
          <div className="swiper-slide">
            <div className="w-38 flex items-center flex-col justify-center h-42.5 md:w-54 md:h-[189px] relative bg-gray-box-job rounded-3xl">
              <img
                src="assets/images/jobs/blu.png"
                className="h-32 object-cover absolute -top-13"
                alt="Blu"
              />

              <div className="flex flex-col gap-y-3 items-center justify-center">
                <p className="text-gray-7 text-base md:text-lg leading-[180%]">
                  14 فرصت شغلی
                </p>
                <p className="text-primary text-xs md:text-sm font-IRANSansX-Medium md:font-IRANSansX-Bold">
                  بیمه بازار
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Job Item --> */}
          <div className="swiper-slide">
            <div className="w-38 flex items-center flex-col justify-center h-42.5 md:w-54 md:h-[189px] relative bg-gray-box-job rounded-3xl">
              <img
                src="assets/images/jobs/alibaba.png"
                className="h-32 object-cover absolute -top-13"
                alt="Blu"
              />

              <div className="flex flex-col gap-y-3 items-center justify-center">
                <p className="text-gray-7 text-base md:text-lg leading-[180%]">
                  18 فرصت شغلی
                </p>
                <p className="text-primary text-xs md:text-sm font-IRANSansX-Medium md:font-IRANSansX-Bold">
                  گروه علی بابا
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Job Item --> */}
          <div className="swiper-slide">
            <div className="w-38 flex items-center flex-col justify-center h-42.5 md:w-54 md:h-[189px] relative bg-gray-box-job rounded-3xl">
              <img
                src="assets/images/jobs/alibaba.png"
                className="h-32 object-cover absolute -top-13"
                alt="Blu"
              />

              <div className="flex flex-col gap-y-3 items-center justify-center">
                <p className="text-gray-7 text-base md:text-lg leading-[180%]">
                  18 فرصت شغلی
                </p>
                <p className="text-primary text-xs md:text-sm font-IRANSansX-Medium md:font-IRANSansX-Bold">
                  گروه علی بابا
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-md:hidden job-button-next w-12.5 h-12.5 rounded-full flex items-center justify-center bg-white shadow-prev-next cursor-pointer">
          <svg className="w-6 h-6 text-black">
            <use href="#chevron-right"></use>
          </svg>
        </div>
        <div className="max-md:hidden job-button-prev w-12.5 h-12.5 rounded-full flex items-center justify-center bg-white shadow-2xl cursor-pointer">
          <svg className="w-6 h-6 text-black">
            <use href="#chevron-left"></use>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
