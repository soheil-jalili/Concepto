import FeaturesItem from "../FeaturesItem/FeaturesItem";

const Features = () => {
  return (
    <section className="pb-20 xl:pb-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 lg:grid-cols-3 items-center lg:gap-x-6 md:gap-x-4 md:gap-y-6 max-md:gap-y-[4rem]">
        <FeaturesItem
          title="شرکت‌های مورد علاقت رو پیدا کن"
          color="bg-Primary_tint_3"
          image="/assets/images/features/feature1.png"
        />
        <FeaturesItem
          title="کسب و کارهای مناسب رو پیدا کن"
          color="bg-Primary_tint_5"
          image="/assets/images/features/feature2.png"
        />
        <FeaturesItem
          title="با کسب و کارها ارتباط بگیر"
          color="bg-Primary_tint_8"
          image="/assets/images/features/feature1.png"
        />
      </div>
    </section>
  );
};

export default Features;
