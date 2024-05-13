import AnalysisComp from "../../components/shared/home/AnalysisComp";
import BentoBoxComp from "../../components/shared/home/BentoBoxComp";
import SearchComp from "../../components/shared/home/SearchComp";
import TestimonyComp from "../../components/shared/home/TestimonyComp";

function HomePage() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <SearchComp />
        <div className="w-2/3">
          <AnalysisComp />
        </div>
        <div className="w-5/6">
          <BentoBoxComp />
        </div>
        <div className="w-7/12">
          <TestimonyComp />
        </div>
      </div>
    </>
  );
}

export default HomePage;
