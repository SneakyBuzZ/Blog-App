import analyticsItems from "../../../lib/constants/analyticstems";

function AnalysisComp() {
  return (
    <>
      <section className="ex-text-white">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap -mx-4 -my-8">
            {analyticsItems.map((eachItem) => (
              <div className="py-8 px-4 lg:w-1/3" key={eachItem.category}>
                <div className="h-full flex items-start">
                  <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                      {eachItem.month}
                    </span>
                    <span className="font-medium text-lg text-gray-800 title-font leading-none">
                      {eachItem.day}
                    </span>
                  </div>
                  <div className="flex-grow pl-6">
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3 ex-text-yellow">
                      {eachItem.category}
                    </h1>
                    <p className="leading-relaxed mb-5 ex-text-gray">
                      {eachItem.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AnalysisComp;
