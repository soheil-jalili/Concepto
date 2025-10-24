import React from "react";

const Footer: React.FC = () => {
  {
    /*  Footer  */
  }
  return (
    <>
      <footer>
        {/* Main Footer */}
        <MainFooter />
        {/* <!-- Sub Footer --> */}
        <SubFooter />
      </footer>
    </>
  );
};

export default Footer;

const MainFooter = () => {
  return (
    <>
      <div className="bg__footer max-[368px]:!h-auto" id='footer__wrapper'>
        <div className="container min-[2900px]:h-[310px]">
          <div className="grid grid-cols-1 xl:grid-cols-[664px_1fr] gap-x-20">
            {/* <!-- Right Section Footer --> */}
            <div className="mt-32 md:mt-38 md:flex md:flex-col-reverse md:gap-10 xl:block">
              <div className="flex flex-col md:hidden gap-y-4 mb-9 md:mb-0">
                <p className="text-white font-IRANSansX-Bold text-base">
                  برای کسب اطلاعات بیشتر در خبرنامه ما عضو شوید
                </p>

                {/* <!-- Email News Mobile --> */}
                <form
                  action="#"
                  className="text-sm flex bg-white h-13 rounded-lg justify-between items-center gap-x-4 pr-2 pl-2"
                  id="email__news"
                >
                  <input
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    name="email-news"
                    className="outline-0 w-full text-xs md:text-base"
                  />
                  <button
                    className="w-[93px] max-[240px]:w-[50px] h-8 bg-primary rounded-lg cursor-pointer flex items-center gap-x-1 px-3 justify-center"
                    type="submit"
                  >
                    <span className="text-sm md:text-base text-white font-IRANSansX-Medium max-[246px]:hidden">
                      عضویت
                    </span>
                    <svg className="text-white w-5 h-5">
                      <use href="#check"></use>
                    </svg>
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 mb-9 justify-between">
                <div className="text-white">
                  <h6 className="md:mb-4 mb-4.5 text-sm md:text-base font-IRANSansX-Bold">
                    کانسپتو
                  </h6>
                  <div className="inline-flex gap-y-2 flex-col text-xs *:font-IRANSansX-Medium md:*:text-sm">
                    <a href="#">درباره ما</a>
                    <a href="#">تماس با ما</a>
                    <a href="#">اتاق خبر</a>
                    <a href="#">قوانین و مقررات</a>
                  </div>
                </div>

                <div className="text-white">
                  <h6 className="md:mb-4 mb-4.5 text-sm md:text-base font-IRANSansX-Bold">
                    کانسپتو
                  </h6>
                  <div className="inline-flex gap-y-2 flex-col text-xs *:font-IRANSansX-Medium md:*:text-sm">
                    <a href="#">درباره ما</a>
                    <a href="#">تماس با ما</a>
                    <a href="#">اتاق خبر</a>
                    <a href="#">قوانین و مقررات</a>
                  </div>
                </div>

                <div className="text-white">
                  <h6 className="md:mb-4 mb-4.5 text-sm md:text-base font-IRANSansX-Bold">
                    کانسپتو
                  </h6>
                  <div className="inline-flex gap-y-2 flex-col text-xs *:font-IRANSansX-Medium md:*:text-sm">
                    <a href="#">درباره ما</a>
                    <a href="#">تماس با ما</a>
                    <a href="#">اتاق خبر</a>
                    <a href="#">قوانین و مقررات</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-y-4 mb-9 md:mb-0">
                <svg className="w-[132.52px] h-4">
                  <use href="#logo__footer"></use>
                </svg>

                <p className="text-white text-xs md:text-base leading-[180%]">
                  استارت‌آپ‌هایی که آینده را شکل می‌دهند. از ایده‌های نوآورانه
                  تا پروژه‌های پیشرفته، جهان استارت‌آپ‌ها را از اینجا کشف کنید.
                </p>
              </div>
            </div>

            {/* <!-- Right Section Footer --> */}
            <div className="md:mt-20 xl:mt-38">
              {/* <!-- New News --> */}
              <p className="text-white font-IRANSansX-Bold text-base hidden md:block">
                از جـدیدتریـن اخبار مطلع شـویـد :
              </p>

              {/* <!-- Email News --> */}
              <form
                action="#"
                className="text-sm hidden md:flex md:text-base md:mt-4 bg-white h-13 rounded-lg md:rounded-[50px] justify-between items-center gap-x-4 pr-3 pl-[6px]"
                id="email__news"
              >
                <input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  name="email-news"
                  className="outline-0 w-full text-xs md:text-base"
                />
                <button
                  className="w-[93px] h-8 md:w-[107px] md:h-10 p-3 bg-primary rounded-lg md:rounded-full cursor-pointer flex items-center gap-x-2 justify-center"
                  type="submit"
                >
                  <span className="text-base text-white font-IRANSansX-Medium">
                    عضویت
                  </span>
                  <svg className="text-white w-6 h-6">
                    <use href="#check"></use>
                  </svg>
                </button>
              </form>

              {/* <!-- Locations & Call --> */}
              <div className="flex flex-col gap-y-4 md:mt-8 mb-9 md:mb-0">
                <div className="text-white flex items-center gap-x-1">
                  <svg className="w-6 h-6">
                    <use href="#location-on"></use>
                  </svg>
                  <span className="text-sm md:text-base font-IRANSansX-Bold">
                    آدرس:
                  </span>
                  <span className="text-xs md:text-sm">
                    تهران، خیابان ولیعصر، خیابان سرو، ساختمان کانسپتو
                  </span>
                </div>
                <div className="text-white flex items-center gap-x-1">
                  <svg className="w-6 h-6">
                    <use href="#phone"></use>
                  </svg>
                  <p className="*:font-IRANSansX-Bold">
                    <span className="md:text-base text-sm">شماره تماس:</span>
                    <span className="md:text-base text-xs font-IRANSansX-Medium">
                      09123456789
                    </span>
                  </p>
                </div>
              </div>

              {/* <!-- Socials --> */}
              <div className="md:mt-8 flex justify-between items-start mb-9 md:mb-0 max-[330px]:flex-col max-[330px]:gap-9">
                <div className="flex flex-col gap-y-4">
                  <p className="font-IRANSansX-Medium md:font-IRANSansX-Bold text-white text-sm md:text-base">
                    ما را در شبکه های اجتماعی دنبال کنید:
                  </p>

                  <div className="flex items-center gap-x-8 max-[247px]:gap-x-4">
                    <a href="#">
                      <svg className="w-6 h-6">
                        <use href="#twitter"></use>
                      </svg>
                    </a>
                    <a href="#">
                      <svg className="w-6 h-6">
                        <use href="#instagram"></use>
                      </svg>
                    </a>
                    <a href="#">
                      <svg className="w-6 h-6">
                        <use href="#linkdin"></use>
                      </svg>
                    </a>

                    <a href="#">
                      <svg className="w-6 h-6">
                        <use href="#facebook"></use>
                      </svg>
                    </a>
                  </div>
                </div>

                <img
                  src="assets/images/footer/footer_en.png"
                  alt="E Namad Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SubFooter: React.FC = () => {
  return (
    <div className="w-full h-13.5 md:h-14.5 bg-Primary_shade_7 text-center text-white flex items-center justify-center">
      <p className="text-xs md:text-base">
        © ۱۴۰۲ - تمامی حقوق برای کانسپتو محفوظ است.
      </p>
    </div>
  );
};
