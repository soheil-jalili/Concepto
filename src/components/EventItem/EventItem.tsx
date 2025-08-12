import React from "react";

type EventItemType = {
  image: string;
  title: string;
  description: string;
  location: string;
  date: string;
};
const EventItem: React.FC<EventItemType> = ({
  image,
  title,
  description,
  location,
  date,
}) => {
  return (
    <div className="rounded-3xl border border-gray-2">
      <div className="flex gap-x-3">
        <img src={image} alt={title} className="event__image" />

        <div className="pl-3 pt-8 pr-2 pb-6 flex gap-y-3 flex-col justify-between">
          <div className="flex gap-y-3 flex-col min-h-25.5">
            <a href="#">
              <h5 className="font-IRANSansX-Bold text-sm md:text-[20px] text-gray-7">
                {title}
              </h5>
            </a>
            <p className="line-clamp-2 text-sm md:text-base text-placeholder">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-1 md:gap-x-2 text-placeholder">
              <svg className="w-4 md:w-5 h-4 md:h-5">
                <use href="#location"></use>
              </svg>
              <p className="md:text-sm text-xs">{location}</p>
            </div>

            <div className="flex items-center gap-x-1 md:gap-x-2">
              <svg className="w-4 md:w-5 h-4 md:h-5">
                <use href="#calendar"></use>
              </svg>
              <span className="text-placeholder md:text-sm text-xs">
                {date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
