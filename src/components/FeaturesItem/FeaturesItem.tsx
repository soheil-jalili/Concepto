import React from "react";

type FeaturesItemType = {
  title: string;
  image: string;
  color: string;
};

const FeaturesItem: React.FC<FeaturesItemType> = ({ title, image, color }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={`min-[234px]:${color} bg-none relative rounded-2xl w-full xl:w-full lg:rounded-4xl h-21 md:h-[137px] mb-4 flex justify-center`}
      >
        <img
          src={image}
          alt={title}
          className="absolute bottom-0 md:w-[210px] w-[173.6px] lg:w-[265px] h-auto"
        />
      </div>
      <h5>{title}</h5>
    </div>
  );
};

export default FeaturesItem;
