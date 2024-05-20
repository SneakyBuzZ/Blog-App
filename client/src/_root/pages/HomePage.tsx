import {
  AnalysisComp,
  CarouselComp,
  SearchComp,
  TestimonyComp,
} from "@/components/shared/home";

function HomePage() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <SearchComp />
        <div className="w-10/12">
          <AnalysisComp />
        </div>
        <div className="w-5/6 pt-20">
          <CarouselComp />
        </div>
        <div className="w-7/12">
          <TestimonyComp />
        </div>
      </div>
    </>
  );
}

export default HomePage;
