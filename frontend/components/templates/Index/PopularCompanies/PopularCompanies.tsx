import PopularCompaniesItem from "./PopularCompaniesItem/PopularCompaniesItem";

export type PopularCompaniesType = {
  main_image: string;
  company_logo: string;
  company_name: string;
  company_description: string;
  company_short_description: string;
  new_inventors: number;
  new_contact: number;
  country: string;
  city: string;
  rate: number;
};
type Prop = {
  popularCompanies: PopularCompaniesType[];
};
const PopularCompanies: React.FC<Prop> = ({ popularCompanies }: Prop) => {
  return (
    <>
      <section className="bg__banner mb-50">
        <div className="container 2xl:p-0 overflow-x-hidden">
          {/* <!-- Popular Companis Header --> */}
          <PopularCompaniesHeader />
          {/* <!-- Popular Companis Body --> */}
          <div className="popular__swiper mt-4 md:mt-12">
            <PopularCompaniesItem popularCompanies={popularCompanies} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCompanies;

const PopularCompaniesHeader = () => {
  {
    /* <!-- Popular Companis Header --> */
  }
  return (
    <div className="flex items-center max-md:pb-4 justify-between font-IRANSansX-Medium sm:font-IRANSansX-Bold text-white pt-20 text-base gap-x-1 md:gap-x-0 gap-y-4 sm:gap-y-14 sm:text-2xl">
      <p className="font-IRANSansX-Regular">شرکت‌های محبوب</p>
      <a href="#" className="flex items-center text-lg">
        <span className="hidden sm:block">مشاهده همه</span>
        <svg className="w-6 h-6">
          <use href="#left-arrow"></use>
        </svg>
      </a>
    </div>
  );
};
