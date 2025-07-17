import React from "react";

type JobItemType = {
  image: string;
  title: string;
  companyName: string;
};

const JobItem: React.FC<JobItemType> = ({ image, title, companyName }) => {
  return (
    <div className="swiper-slide">
      <div className="w-38 flex items-center flex-col justify-center h-42.5 md:w-54 md:h-[189px] relative bg-gray-box-job rounded-3xl">
        <img
          src={image}
          className="h-32 object-cover absolute -top-13"
          alt={companyName}
        />

        <div className="flex flex-col gap-y-3 items-center justify-center">
          <p className="text-gray-7 text-base md:text-lg leading-[180%]">
            {title}
          </p>
          <p className="text-primary text-xs md:text-sm font-IRANSansX-Medium md:font-IRANSansX-Bold">
            {companyName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
