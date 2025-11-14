import React from "react";

type JobItemType = {
  image: string;
  title: string;
  company_name: string;
};

const JobItem: React.FC<JobItemType> = ({ image, title, company_name }) => {
  return (
    <div className="h-42.5  md:h-[189px] bg-gray-box-job rounded-3xl">
      <img
        src={image}
        className="md:w-full mx-auto relative -translate-y-20"
        alt={company_name}
      />

      <div className="absolute right-0 left-0 bottom-8 flex flex-col gap-y-3 items-center justify-center">
        <p className="text-gray-7 text-base md:text-lg leading-[180%]">
          {title}
        </p>
        <p className="text-primary text-xs md:text-sm font-IRANSansX-Medium md:font-IRANSansX-Bold">
          {company_name}
        </p>
      </div>
    </div>
  );
};

export default JobItem;
