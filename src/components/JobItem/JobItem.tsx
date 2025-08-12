import React from "react";

type JobItemType = {
  image: string;
  title: string;
  companyName: string;
};

const JobItem: React.FC<JobItemType> = ({ image, title, companyName }) => {
  return (
    <div className="flex items-center flex-col justify-center h-42.5  md:h-[189px] bg-gray-box-job rounded-3xl">
      <img src={image} className="" alt={companyName} />

      <div className="flex flex-col gap-y-3 items-center justify-center">
        <p className="text-gray-7 text-base md:text-lg leading-[180%]">
          {title}
        </p>
        <p className="text-primary text-xs md:text-sm font-IRANSansX-Medium md:font-IRANSansX-Bold">
          {companyName}
        </p>
      </div>
    </div>
  );
};

export default JobItem;
