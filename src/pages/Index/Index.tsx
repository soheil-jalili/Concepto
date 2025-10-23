import Categories from "../../components/templates/index/Categories/Categories";
import Events from "../../components/templates/index/Events/Events";
import Features from "../../components/templates/index/Features/Features";
import HeroImage from "../../components/templates/index/HeroImages/HeroImage";
import Jobs from "../../components/templates/index/Jobs/Jobs";
import News from "../../components/templates/index/News/News";
import PopularCompanies from "../../components/templates/index/PopularCompanies/PopularCompanies";
import Statistics from "../../components/templates/index/Statistics/Statistics";

const Index = () => {
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

// <!-- // TODO:fix slider popular & news slider responsive & jobs -->
// <!-- // TODO:fix gap projects -->
// <!-- // TODO:fix styles event -->
// <!-- // TODO:fix event data -->
// <!-- // TODO:fix event image -->
// <!-- // TODO:check style of jobs -->
// <!-- // TODO:finish footer and responsive it for other devices -->
// <!-- // TODO:check sizes and gap footer -->
// <!-- // TODO:HEIGHT BG__FOOTER MAX-1200  -->
// <!-- // TODO:check all project styles , font, size .... -->
