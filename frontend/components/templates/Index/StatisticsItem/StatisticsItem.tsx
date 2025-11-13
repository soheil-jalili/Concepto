import React from "react";

type StatisticsItemType = {
  statisticsNumber: string;
  title: string;
};

const StatisticsItem: React.FC<StatisticsItemType> = ({
  statisticsNumber,
  title,
}) => {
  return (
    <div className="flex items-center max-[420px]:flex-col gap-x-2.5 max-[420px]:mx-auto">
      <div className="max-[162px]:w-13 max-[162px]:h-13 w-[85px] h-[85px] bg-secondary_tint_3 rounded-full max-[310px]:flex-col shrink"></div>

      <div className="flex gap-x-4 items-center max-[420px]:translate-x-0 max-[640px]:translate-x-14 sm:translate-x-10 flex-wrap max-[311px]:mt-3 max-[228px]:text-center max-[363px]:justify-center max-[363px]:mt-4 max-[318px]:flex-col">
        <span className="left_to_right text-[30px] font-IRANSansX-Medium max-[190px]:text-lg">
          {statisticsNumber}
        </span>
        <span className=" max-[240px]:text-base max-[206px]:text-xs text-xl shrink-0 line-clamp-2 max-[190px]:text-lg">
          {title}
        </span>
      </div>
    </div>
  );
};

export default StatisticsItem;
