// import analyticsItems from "../../../lib/constants/analyticstems";

function AnalysisComp() {
  return (
    <>
      <div className="w-full px-20 flex flex-col items-center mt-16 lg:flex-row gap-10">
        <p className="ex-text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque alias
        </p>
        <div className="stats shadow flex flex-col lg:flex-row ex-text-white  justify-center gap-20 lg:ml-20">
          <div className="stat flex items-center">
            <div className="flex flex-col">
              <div className="stat-title ">Downloads</div>
              <div className="stat-value text-4xl ex-text-yellow">31K</div>
            </div>
            <div className="stat-figure text-secondary ml-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
                stroke="ex-bg-yellow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="stat flex items-center">
            <div className="flex flex-col ">
              <div className="stat-title ">Users</div>
              <div className="stat-value text-4xl ex-text-yellow">4,200</div>
            </div>
            <div className="stat-figure text-secondary ml-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
          </div>

          <div className="stat flex items-center">
            <div className="flex flex-col">
              <div className="stat-title">Registers</div>
              <div className="stat-value text-4xl ex-text-yellow">1,200</div>
            </div>
            <div className="stat-figure text-secondary ml-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalysisComp;
