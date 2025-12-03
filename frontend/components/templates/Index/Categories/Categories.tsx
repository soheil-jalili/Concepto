import Link from "next/link";
import CategoryLg from "./CategoryLg/CategoryLg";
import CategoryXs from "./CategoryXs/CategoryXs";

export type CategoryType = {
  id: number;
  title: string;
  image: string;
};
type Prop = {
  categories: CategoryType[];
};
const Categories: React.FC<Prop> = ({ categories }: Prop) => {
  return (
    <>
      <section className="pb-20 xl:pb-20 2xl:pb-0!">
        {/* <!-- Title Categories Section --> */}
        <div className="flex items-center gap-x-2">
          <h4 className="text-gray-7 md:text-placeholder shrink-0 text-base md:text-2xl">
            دسته بندی ها
          </h4>
          <span className="border border-r border-gray-2 w-full max-[210px]:hidden"></span>

          <div className="lg:hidden">
            <svg className="w-6 h-6 text-placeholder">
              <use href="#left-arrow"></use>
            </svg>
          </div>
        </div>

        {/* <!-- Category Item --> */}
        <div className="hidden lg:grid grid-cols-[repeat(4,56px)] grid-rows-[repeat(2,86px)] md:grid-cols-[repeat(7,108px)] md:grid-rows-[repeat(2,141px)] justify-between gap-x-5 gap-y-5 mt-6">
          {categories.map((category: CategoryType) => {
            return (
              <div
                className="flex items-center justify-center gap-y-3 flex-col text-base"
                key={category.id}
              >
                <img
                  src={"http://127.0.0.1:8000/" + category.image}
                  alt={category.title}
                  className="p-1.5 border-2 border-primary rounded-full"
                />
                <Link href={`/category/${category.title}`}>
                  {category.title}
                </Link>
              </div>
            );
          })}
        </div>
        <CategoryLg categories={categories} />
        <CategoryXs categories={categories} />
      </section>
    </>
  );
};

export default Categories;
