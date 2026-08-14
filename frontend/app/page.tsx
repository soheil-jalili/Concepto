import Footer from "@/components/modules/Footer/Footer";
import Header from "@/components/modules/Header/Header";
import Categories from "@/components/templates/Index/Categories/Categories";
import Events from "@/components/templates/Index/Events/Events";
import Features from "@/components/templates/Index/Features/Features";
import HeroImage from "@/components/templates/Index/HeroImages/HeroImage";
import Jobs from "@/components/templates/Index/Jobs/Jobs";
import News from "@/components/templates/Index/News/News";
import PopularCompanies from "@/components/templates/Index/PopularCompanies/PopularCompanies";
import Statistics from "@/components/templates/Index/Statistics/Statistics";
import React from "react";

const Index: React.FC = async () => {
  const response = await fetch("http://localhost:8000/api/home/");
  const {
    slogans,
    categries_home,
    popular_companies,
    job_opportunities,
    new_news,
    category_events,
  } = await response.json();

  return (
    <>
      <Header />

      <main>
        <div className="container">
          {/* <!-- Hero Images --> */}
          <HeroImage
            title={slogans.title}
            shortDescription={slogans.short_description}
          />
          {/* <!-- Statistics --> */}
          <Statistics />
          {/* <!-- Features --> */}
          <Features />
          {/* <!-- Categories --> */}
          <Categories categories={categries_home} />
        </div>

        {/* <!-- Popular Companies --> */}
        <PopularCompanies popularCompanies={popular_companies} />

        {/* <!-- Jobs --> */}
        <Jobs jobOpportunities={job_opportunities} />

        {/* <!-- News --> */}
        <News newNews={new_news} />

        {/* <!-- Events --> */}
        <Events categoryEvents={category_events} />
      </main>
      <Footer />
    </>
  );
};

export default Index;
