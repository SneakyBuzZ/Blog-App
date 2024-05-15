import {
  AnalysisComp,
  BentoBoxComp,
  SearchComp,
  TestimonyComp,
} from "@/components/shared/home";

function HomePage() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <SearchComp />
        <div className="w-10/12">
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
