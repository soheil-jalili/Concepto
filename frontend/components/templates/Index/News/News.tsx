import NewsItem from "./NewsItem/NewsItem";

export type NewnNewsType = {
  id: number;
  company_name: string;
  main_image: string;
  short_description: string;
  author_name: string;
  title: string;
  created_at: string;
};
type Prop = {
  newNews: NewnNewsType[];
};
const News: React.FC<Prop> = ({ newNews }: Prop) => {
  return (
    <section className="bg__banner mb-20 md:mb-40">
      <div className="container 2xl:p-0 overflow-x-hidden rounded-3xl">
        {/* <!-- News Companis Header --> */}
        <div className="flex items-center justify-between text-white max-md:pb-4 pt-20 text-base gap-x-1 md:gap-x-0 gap-y-4 sm:gap-y-14 sm:text-2xl">
          <p className="font-IRANSansX-Medium sm:font-IRANSansX-Bold">
            تازه‌ترین اخبار
          </p>
          <a href="#" className="flex items-center text-lg">
            <span className="hidden sm:block">مشاهده همه</span>
            <svg className="w-6 h-6">
              <use href="#left-arrow"></use>
            </svg>
          </a>
        </div>
        {/* <!-- Popular News Body --> */}
        <div className="news mt-5 md:mt-12 min-[2370px]:mt-0!">
          <NewsItem newNews={newNews} />
        </div>
      </div>
    </section>
  );
};

export default News;
