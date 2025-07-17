import React from "react";

const Statistics: React.FC = () => {
  return (
    <>
      <section className="py-20 xl:py-40">
        <div className="flex flex-wrap md:flex-wrap gap-y-8 items-center justify-between lg:gap-x-5 xl:gap-x-6">
          <div className="flex items-center max-[420px]:flex-col gap-x-2.5 max-[420px]:mx-auto">
            <div className="max-[162px]:w-13 max-[162px]:h-13 w-[85px] h-[85px] bg-secondary_tint_3 rounded-full max-[310px]:flex-col shrink"></div>

            <div className="flex gap-x-4 items-center max-[420px]:translate-x-0 max-[640px]:translate-x-14 sm:translate-x-10 flex-wrap max-[311px]:mt-3 max-[228px]:text-center max-[363px]:justify-center max-[363px]:mt-4">
              <span className="left_to_right text-[30px] font-IRANSansX-Medium max-[190px]:text-lg">
                +112,610
              </span>
              <span className="text-xl shrink-0 line-clamp-2 max-[190px]:text-lg">
                شرکت فعال
              </span>
            </div>
          </div>

          <div className="flex items-center max-[420px]:flex-col gap-x-2.5 max-[420px]:mx-auto">
            <div className="max-[162px]:w-13 max-[162px]:h-13 w-[85px] h-[85px] bg-secondary_tint_3 rounded-full max-[310px]:flex-col shrink"></div>

            <div className="flex gap-x-4 items-center max-[420px]:translate-x-0 max-[640px]:translate-x-14 sm:translate-x-10 flex-wrap max-[311px]:mt-3 max-[228px]:text-center max-[363px]:justify-center max-[363px]:mt-4">
              <span className="left_to_right text-[30px] font-IRANSansX-Medium max-[190px]:text-lg">
                +11
              </span>
              <span className="text-xl max-[310px]:text-lg max-[190px]:text-lg">
                میلیارد تومان سرمایه گذاری
              </span>
            </div>
          </div>

          <div className="flex items-center max-[420px]:flex-col gap-x-2.5 max-[420px]:mx-auto">
            <div className="max-[162px]:w-13 max-[162px]:h-13 w-[85px] h-[85px] bg-secondary_tint_3 rounded-full max-[310px]:flex-col shrink"></div>

            <div className="flex gap-x-4 items-center max-[420px]:translate-x-0 max-[640px]:translate-x-14 sm:translate-x-10 flex-wrap max-[311px]:mt-3 max-[228px]:text-center max-[363px]:justify-center max-[363px]:mt-4">
              <span className="left_to_right text-[30px] font-IRANSansX-Medium max-[190px]:text-lg">
                +496
              </span>
              <span className="text-xl max-[310px]:text-lg line-clamp-2 max-[190px]:text-lg">
                سرمایه گذار
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics;
