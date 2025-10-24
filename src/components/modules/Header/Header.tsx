import { useState } from "react";
import { Link } from "react-router-dom";
import BackDrop from "../BackDrop";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openHandler = () => setIsOpen(true);
  const closeHandler = () => setIsOpen(false);

  /* <!-- Start Header --> */
  return (
    <>
      <header className="lg:pt-6 pt-3 border-b border-b-search_box md:border-none pb-4 md:pb-0">
        <div className="container">
          {/* <!-- Start Main Header Item --> */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
            <button
              className="md:hidden w-8 h-8 rounded-lg bg-search_box justify-center flex items-center cursor-pointer"
              id="btn__menu"
              onClick={openHandler}
            >
              <svg className="w-5 h-5">
                <use href="#bars"></use>
              </svg>
            </button>

            <Link to="/">
              <svg className="md:w-30.5 lg:w-49.5 lg:h-6 w-25 h-4 max-[190px]:hidden">
                <use href="#logo"></use>
              </svg>
            </Link>

            <form
              action="#"
              className="order-1 md:order-none max-[224px]:gap-x-1 lg:order-none w-full md:w-[439px] h-12 bg-search_box rounded-xl flex items-center gap-x-2.5 px-2"
            >
              <button className="cursor-pointer">
                <svg className="w-6 h-6 text-placeholder" id="search__icon">
                  <use href="#search"></use>
                </svg>
              </button>
              <input
                type="text"
                placeholder="جستجو کسب‌ و کار"
                className="w-full outline-none placeholder:text-placeholder"
                id="search__input"
              />
            </form>

            <div className="flex items-center gap-x-2 lg:gap-x-4 mr-auto max-[325px]:hidden">
              <a
                href="#"
                className="flex items-center gap-x-2 bg-primary text-white px-4 rounded-xl h-12 text-lg shrink-0"
              >
                <svg className="w-6 h-6">
                  <use href="#bolt"></use>
                </svg>
                <span className="hidden xl:inline-block">
                  {" "}
                  رایگان شروع کن!{" "}
                </span>
              </a>
              <Link
                to={"/account/"}
                className="flex items-center gap-x-2 border border-gray-8 px-4 rounded-xl h-12 text-lg shrink-0"
              >
                <svg className="w-6 h-6">
                  <use href="#login"></use>
                </svg>
                <span className="hidden xl:inline-block"> ورود/ثبت نام </span>
              </Link>
            </div>
          </div>
          {/* <!-- End Main Header Item --> */}

          {/* <!-- Start Sub Header --> */}
          <ul className="md:flex items-center gap-x-8 pt-5.5 hidden">
            <li>
              <a href="#">شرکت ها</a>
            </li>
            <li>
              <a href="#">فرصت های شغلی</a>
            </li>
            <li>
              <a href="#">اخبار و رویدادها</a>
            </li>
            <li>
              <a href="#">درباره ما</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
          </ul>
          {/* <!-- End Sub Header --> */}

          {/* <!-- Start Mobile Menu --> */}
          <div
            className={`fixed w-1/2 max-[325px]:w-full ${
              isOpen ? "right-0" : "max-[325px]:-right-full"
            } px-3 bg-white md:hidden bottom-0 top-0 h-full transition-all z-50 ${
              isOpen ? "right-0" : "-right-1/2"
            } overflow-x-hidden`}
            id="menu__items"
          >
            <div className="flex items-center border-b border-search_box pb-2 justify-between mt-2 max-[160px]:flex-wrap max-[160px]:justify-center">
              <Link to="/">
                <svg className="w-20 h-6">
                  <use href="#logo"></use>
                </svg>
              </Link>

              <button
                className="cursor-pointer"
                id="closeBtn"
                onClick={closeHandler}
              >
                <svg className="w-5 h-5">
                  <use href="#close"></use>
                </svg>
              </button>
            </div>

            <div className="flex flex-col max-[325px]:justify-between max-[325px]:h-[91%]">
              {/* <!-- Mobile Menu Item --> */}
              <ul className="flex gap-y-6 mt-5 pb-5 flex-col">
                <li>
                  <a href="#">شرکت ها</a>
                </li>
                <li>
                  <a href="#">فرصت های شغلی</a>
                </li>
                <li>
                  <a href="#">اخبار و رویدادها</a>
                </li>
                <li>
                  <a href="#">درباره ما</a>
                </li>
                <li>
                  <a href="#">تماس با ما</a>
                </li>
              </ul>

              {/* <!-- Main Btns max:[325px] --> */}
              <div className="mt-3 hidden max-[325px]:flex flex-col gap-y-6  border-t border-t-gray-1 pt-6 w-full">
                <a href="#" className="flex items-center gap-x-2 shrink-0">
                  <svg className="w-5 h-5">
                    <use href="#bolt"></use>
                  </svg>
                  <span> رایگان شروع کن! </span>
                </a>
                <Link to="/account" className="flex items-center gap-x-2 shrink-0">
                  <svg className="w-5 h-5">
                    <use href="#login"></use>
                  </svg>
                  <span> ورود/ثبت نام </span>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- End Mobile Menu --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}

      {isOpen ? (
        <BackDrop
          clickHandler={() => setIsOpen(false)}
          className={`${isOpen ? "opacity-100" : "opacity-0"}`}
        />
      ) : null}
    </>
  );
};

export default Header;
