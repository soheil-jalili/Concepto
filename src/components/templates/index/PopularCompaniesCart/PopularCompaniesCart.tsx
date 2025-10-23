import React from "react";

export type PopularCompaniesCartProps = {
  mainImage: string;
  mainImageAlt: string;
  thumbnailImage: string;
  companyName: string;
  companyDescription: string;
  newInventorsNumber: string;
  newContact: number;
  description: string;
  country: string;
  city: string;
  rating: number;
};

const PopularCompaniesCart: React.FC<PopularCompaniesCartProps> = ({
  mainImage,
  mainImageAlt,
  thumbnailImage,
  companyName,
  companyDescription,
  newInventorsNumber,
  newContact,
  description,
  country,
  city,
  rating,
}: PopularCompaniesCartProps) => {
  return (
    <div className="w-full max-w-full max-[350px]:h-92 h-99.5 rounded-3xl bg-white flex flex-col justify-between shadow-box">
      <div>
        <img
          src={mainImage}
          alt={mainImageAlt}
          className="w-full object-cover"
        />
        <div className="flex -translate-y-4 items-end gap-x-4 px-4">
          <a href="#">
            <img src={thumbnailImage} alt={mainImageAlt} />
          </a>
          <div className="flex flex-col mb-2 gap-y-1">
            <p className="text-gray-7 text-sm md:text-xs font-IRANSansX-Bold">
              {companyName}
            </p>
            <p className="text-placeholder text-xs">{companyDescription}</p>
          </div>
        </div>
      </div>
      <div className="px-4 flex flex-col gap-y-3.5">
        <div className="flex items-center gap-x-2.5 *:p-2">
          <div className="rounded-[8px] border border-gray-1 flex gap-y-2 flex-col">
            <p className="text-xs">سرمایه گذاران جدید</p>
            <p className="text-primary font-IRANSansX-Bold text-sm">
              {newInventorsNumber}
            </p>
          </div>
          <div className="rounded-[8px] border border-gray-1 flex gap-y-2 flex-col">
            <p className="text-xs">مخاطبین جدید</p>
            <p className="text-primary font-IRANSansX-Bold text-sm">
              {newContact}
            </p>
          </div>
        </div>

        <div className="min-h-11">
          <p className="text-gray-6 line-clamp-2 text-xs leading-[180%] font-IRANSansX-Medium">
            {description}
          </p>
        </div>

        <div className="flex items-center md:pt-4 pb-4 text-gray-4 justify-between">
          <div className="flex items-center gap-x-2">
            <svg className="w-5 h-5">
              <use href="#location"></use>
            </svg>
            <p className="text-sm">
              {city}، {country}
            </p>
          </div>

          <div className="flex items-center gap-x-2">
            <svg className="w-3.5 h-3.5 text-secondary_tint_2">
              <use href="#star"></use>
            </svg>
            <span className="text-placeholder text-base font-IRANSansX-Medium">
              {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCompaniesCart;
