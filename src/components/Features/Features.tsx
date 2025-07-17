const Features = () => {
  return (
    <section className="pb-20 xl:pb-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 lg:grid-cols-3 items-center lg:gap-x-6 md:gap-x-4 md:gap-y-6 max-md:gap-y-[4rem]">
        <div className="flex items-center justify-center flex-col">
          <div className="min-[234px]:bg-Primary_tint_3 bg-none relative rounded-2xl w-full xl:w-full lg:rounded-4xl h-21 md:h-[137px] mb-4 flex justify-center">
            <img
              src="assets/images/features/feature1.png"
              alt=""
              className="absolute bottom-0 md:w-[210px] w-[173.6px] lg:w-[265px] h-auto"
            />
          </div>
          <h5>شرکت‌های مورد علاقت رو پیدا کن</h5>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="min-[234px]:bg-Primary_tint_5 bg-none relative rounded-2xl w-full xl:w-full lg:rounded-4xl h-21 md:h-[137px] mb-4 flex justify-center">
            <img
              src="assets/images/features/feature2.png"
              alt=""
              className="absolute bottom-0 md:w-[210px] w-[173.6px] lg:w-[265px] h-auto"
            />
          </div>
          <h5>کسب و کارهای مناسب رو پیدا کن</h5>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="min-[234px]:bg-Primary_tint_8 bg-none relative rounded-2xl w-full xl:w-full lg:rounded-4xl h-21 md:h-[137px] mb-4 flex justify-center">
            <img
              src="assets/images/features/feature1.png"
              alt=""
              className="absolute bottom-0 md:w-[210px] w-[173.6px] lg:w-[265px] h-auto"
            />
          </div>
          <h5>با کسب و کارها ارتباط بگیر</h5>
        </div>
      </div>
    </section>
  );
};

export default Features;
