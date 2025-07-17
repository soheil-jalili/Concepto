import React from "react";
import StatisticsItem from "../StatisticsItem/StatisticsItem";

const Statistics: React.FC = () => {
  return (
    <>
      <section className="py-20 xl:py-40">
        <div className="flex flex-wrap md:flex-wrap gap-y-8 items-center justify-between lg:gap-x-5 xl:gap-x-6">
          <StatisticsItem statisticsNumber="+112,610" title="شرکت فعال" />
          <StatisticsItem
            statisticsNumber="+11"
            title="میلیارد تومان سرمایه گذاری"
          />
          <StatisticsItem statisticsNumber="+496" title="سرمایه گذار" />
        </div>
      </section>
    </>
  );
};

export default Statistics;
