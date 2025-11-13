import React from "react";

const HeroImage: React.FC = () => {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section className="mt-8 lg:mt-20 flex flex-col gap-y-6 max-[310px]:gap-y-4 text-center">
        <h1 className="text-Primary_shade_7 font-IRANSansX-Bold text-xl md:text-[56px]">
          با سرچ کمتر نتیجه بهتر بگیر
        </h1>
        <p className="text-Primary_shade_5">
          کانسپتو اولین مرجع معتبر معرفی استارتاپ ها و شرکت های ایرانی
        </p>

        <div className="flex items-center gap-x-4 justify-center flex-wrap gap-y-2">
          <a
            href="#"
            className="flex items-center gap-x-2 bg-primary text-white px-4 rounded-xl h-12 text-lg shrink-0"
          >
            <svg className="w-6 h-6">
              <use href="#bolt"></use>
            </svg>
            <span className="max-[201px]:hidden"> رایگان شروع کن! </span>
          </a>
          <a
            href="#"
            className="flex items-center gap-x-2 border border-gray-8 px-4 rounded-xl h-12 text-lg shrink-0"
          >
            <span className="max-[201px]:hidden">درباره کانسپتو</span>
            <svg className="w-6 h-6">
              <use href="#left-arrow"></use>
            </svg>
          </a>
        </div>

        {/* <!-- Hero Images --> */}
        <div className="flex flex-col justify-center mt-5 relative mx-auto *:object-cover *:h-auto">
          <img
            src="assets/images/hero/2.png"
            alt="Hero 2"
            className="md:block w-[1016px] h-[588.26px] max-[460px]:hidden"
          />
          <img
            src="assets/images/hero/3.png"
            alt="Hero 3"
            className="hidden w-[287px] absolute right-0 top-0 lg:block lg:-right-[2rem] lg:-top-[8rem] xl:-top-[7rem] xl:-right-[7rem]"
          />
          <img
            src="assets/images/hero/1.png"
            alt="Hero 1"
            className="absolute -bottom-[8rem] hidden xl:block xl:-left-[5rem] 2xl:-left-[7rem] max-w-[447px]"
          />
          <img
            src="assets/images/hero/hero_mobile.png"
            alt="Hero 1"
            className="w-full h-auto object-cover max-[460px]:block hidden"
          />
        </div>
      </section>
    </>
  );
};

export default HeroImage;
