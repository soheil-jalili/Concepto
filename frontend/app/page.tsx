import Categories from "@/components/templates/Index/Categories/Categories";
import Events from "@/components/templates/Index/Events/Events";
import Features from "@/components/templates/Index/Features/Features";
import HeroImage from "@/components/templates/Index/HeroImages/HeroImage";
import Jobs from "@/components/templates/Index/Jobs/Jobs";
import News from "@/components/templates/Index/News/News";
import PopularCompanies from "@/components/templates/Index/PopularCompanies/PopularCompanies";
import Statistics from "@/components/templates/Index/Statistics/Statistics";
import React from "react";

const Index: React.FC = () => {
  return (
    <main>
      <div className="container">
        {/* <!-- Hero Images --> */}
        <HeroImage />
        {/* <!-- Statistics --> */}
        <Statistics />
        {/* <!-- Features --> */}
        <Features />
        {/* <!-- Categories --> */}
        <Categories />
      </div>
      
      {/* <!-- Popular Companies --> */}
      <PopularCompanies />

      {/* <!-- Jobs --> */}
      <Jobs />

      {/* <!-- News --> */}
      <News />

      {/* <!-- Events --> */}
      <Events />
    </main>
  );
};

export default Index;
