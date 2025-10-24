import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const Categories: React.FC = () => {
  return (
    <>
      <section className="pb-20 xl:pb-20 2xl:!pb-0">
        {/* <!-- Title Categories Section --> */}
        <div className="flex items-center gap-x-2">
          <h4 className="text-gray-7 md:text-placeholder shrink-0 text-base md:text-2xl">
            دسته بندی ها
          </h4>
          <span className="border border-r border-gray-2 w-full max-[210px]:hidden"></span>

          <div className="lg:hidden">
            <svg className="w-6 h-6 text-placeholder">
              <use href="#left-arrow"></use>
            </svg>
          </div>
        </div>

        {/* <!-- Category Item --> */}
        <div className="hidden lg:grid [grid-template-columns:repeat(4,56px)] [grid-template-rows:repeat(2,86px)] md:[grid-template-columns:repeat(7,108px)] md:[grid-template-rows:repeat(2,141px)] justify-between gap-x-5 gap-y-5 mt-6">
          <div className="flex items-center justify-center gap-y-3 flex-col text-base">
            <img
              src="assets/images/categories/ai.png"
              alt="Ai"
              className="p-1.5 border-2 border-primary rounded-full"
            />
            <Link to={'/'}>هوش مصنوعی</Link>
          </div>

          <div className="flex items-center justify-center gap-y-3 flex-col text-base">
            <img
              src="assets/images/categories/python.png"
              alt="python"
              className="p-1.5 border-2 border-primary rounded-full"
            />
            <Link to={'/'}>برنامه نویسی</Link>
          </div>

          <div className="flex items-center justify-center gap-y-3 flex-col text-base">
            <img
              src="assets/images/categories/bitcoin.png"
              alt="bitcoin"
              className="p-1.5 border-2 border-primary rounded-full"
            />
            <Link to={'/'}>ارز دیجیتال</Link>
          </div>

          <div className="flex items-center justify-center gap-y-3 flex-col text-base">
            <img
              src="assets/images/categories/accounting.png"
              alt="accounting"
              className="p-1.5 border-2 border-primary rounded-full"
            />
            <Link to={'/'}>حسابداری</Link>
          </div>

          <div className="flex items-center justify-center gap-y-3 flex-col text-base">
            <img
              src="assets/images/categories/photoshop.png"
              alt="photoshop"
              className="p-1.5 border-2 border-primary rounded-full"
            />
            <Link to={'/'}>گرافیک</Link>
          </div>

          <div className="flex items-center justify-center gap-y-3 flex-col text-base">
            <img
              src="assets/images/categories/photography.png"
              alt="photography"
              className="p-1.5 border-2 border-primary rounded-full"
            />
            <Link to={'/'}>رسانه‌ها</Link>
          </div>

          <div className="flex items-center justify-center gap-y-3 flex-col text-base">
            <img
              src="assets/images/categories/aerospace.png"
              alt="aerospace"
              className="p-1.5 border-2 border-primary rounded-full"
            />
            <Link to={'/'}>هوافضا</Link>
          </div>

          <div className="flex items-center justify-center gap-y-3 flex-col text-base">
            <img
              src="assets/images/categories/medical.png"
              alt="medical"
              className="p-1.5 border-2 border-primary rounded-full"
            />
            <Link to={'/'}>پزشکی</Link>
          </div>

          <div className="flex items-center justify-center gap-y-3 flex-col text-base">
            <img
              src="assets/images/categories/tejarat.png"
              alt="tejarat"
              className="p-1.5 border-2 border-primary rounded-full"
            />
            <Link to={'/'}>تجارت الکترونیک</Link>
          </div>

          <div className="flex items-center justify-center gap-y-3 flex-col text-base">
            <img
              src="assets/images/categories/knowledge.png"
              alt="knowledge"
              className="p-1.5 border-2 border-primary rounded-full"
            />
            <Link to={'/'}>علمی</Link>
          </div>

          <div className="flex items-center justify-center gap-y-3 flex-col text-base">
            <img
              src="assets/images/categories/music.png"
              alt="music"
              className="p-1.5 border-2 border-primary rounded-full"
            />
            <Link to={'/'}>موسیقی</Link>
          </div>

          <div className="flex items-center justify-center gap-y-3 flex-col text-base">
            <img
              src="assets/images/categories/bio.png"
              alt="bio"
              className="p-1.5 border-2 border-primary rounded-full"
            />
            <Link to={'/'}>بیوتکنولوژی</Link>
          </div>

          <div className="flex items-center justify-center gap-y-3 flex-col text-base">
            <img
              src="assets/images/categories/movie.png"
              alt="movie"
              className="p-1.5 border-2 border-primary rounded-full"
            />
            <Link to={'/'}>فیلم و سینما</Link>
          </div>

          <div className="flex items-center justify-center gap-y-3 flex-col text-base">
            <img
              src="assets/images/categories/transportation.png"
              alt="transportation"
              className="p-1.5 border-2 border-primary rounded-full"
            />
            <Link to={'/'}>حمل و نقل</Link>
          </div>
        </div>

        {/* <!-- For Max-[lg] --> */}
        <Swiper className="mt-6 !hidden min-[520px]:!grid lg__swiper max-[530px]:!gap-x-3.5">
          <SwiperSlide>
            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/ai.png"
                alt="Ai"
                className="p-1.5 border-2 border-primary rounded-full"
              />

              <Link to={'/'}>هوش مصنوعی</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/python.png"
                alt="python"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>برنامه نویسی</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/bitcoin.png"
                alt="bitcoin"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>ارز دیجیتال</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/accounting.png"
                alt="accounting"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>حسابداری</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/photoshop.png"
                alt="photoshop"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>گرافیک</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/photography.png"
                alt="photography"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>رسانه‌ها</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/aerospace.png"
                alt="aerospace"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <p>هوافضا</p>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/medical.png"
                alt="medical"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>پزشکی</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/tejarat.png"
                alt="tejarat"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>تجارت الکترونیک</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/knowledge.png"
                alt="knowledge"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>علمی</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/music.png"
                alt="music"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>موسیقی</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/bio.png"
                alt="bio"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>بیوتکنولوژی</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/movie.png"
                alt="movie"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>فیلم و سینما</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/transportation.png"
                alt="transportation"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>حمل و نقل</Link>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <!-- For Max-[519] --> */}
        <Swiper className="five_hundred !hidden max-[520px]:!grid mt-6">
          <SwiperSlide>
            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/ai.png"
                alt="Ai"
                className="p-1.5 border-2 border-primary rounded-full"
              />

              <Link to={'/'}>هوش مصنوعی</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/python.png"
                alt="python"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>برنامه نویسی</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/bitcoin.png"
                alt="bitcoin"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>ارز دیجیتال</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/accounting.png"
                alt="accounting"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>حسابداری</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/photoshop.png"
                alt="photoshop"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>گرافیک</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/photography.png"
                alt="photography"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>رسانه‌ها</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/tejarat.png"
                alt="tejarat"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>تجارت الکترونیک</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/knowledge.png"
                alt="knowledge"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>علمی</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/music.png"
                alt="music"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>موسیقی</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/bio.png"
                alt="bio"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>بیوتکنولوژی</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/movie.png"
                alt="movie"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>فیلم و سینما</Link>
            </div>

            <div className="flex items-center justify-center gap-y-3 flex-col text-base">
              <img
                src="assets/images/categories/transportation.png"
                alt="transportation"
                className="p-1.5 border-2 border-primary rounded-full"
              />
              <Link to={'/'}>حمل و نقل</Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Categories;
