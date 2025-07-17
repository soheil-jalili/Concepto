import Categories from "../../components/Categories/Categories";
import Events from "../../components/Events/Events";
import Features from "../../components/Features/Features";
import HeroImage from "../../components/HeroImages/HeroImage";
import Jobs from "../../components/Jobs/Jobs";
import News from "../../components/News/News";
import PopularCompanies from "../../components/PopularCompanies/PopularCompanies";
import Statistics from "../../components/Statistics/Statistics";

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
