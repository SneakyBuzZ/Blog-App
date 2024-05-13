import AnalysisComp from "../../components/shared/AnalysisComp";
import BentoBoxComp from "../../components/shared/BentoBoxComp";
import SearchComp from "../../components/shared/SearchComp";
import TestimonyComp from "../../components/shared/TestimonyComp";

function HomePage() {
  return (
    <>
      <SearchComp />
      <AnalysisComp />
      <BentoBoxComp />
      <TestimonyComp />
    </>
  );
}

export default HomePage;
