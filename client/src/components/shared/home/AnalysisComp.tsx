import { Download } from "lucide-react";
import { Users } from "lucide-react";
import { FilePen } from "lucide-react";

function AnalysisComp() {
  return (
    <>
      <div className="w-full px-20 flex flex-col items-center mt-16 lg:flex-row gap-10 justify-center">
        <p className="ex-text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque alias
        </p>
        <div className="stats w-full shadow ex-text-white justify-center bg-transparent border border-neutral-700">
          <div className="stat flex items-center">
            <div className="flex flex-col">
              <div className="stat-title ">Downloads</div>
              <div className="stat-value text-4xl ex-text-yellow">31K</div>
            </div>
            <div className="stat-figure text-secondary ">
              <Download color="#DFDFDF" />
            </div>
          </div>

          <div className="stat flex items-center">
            <div className="flex flex-col ">
              <div className="stat-title ">Users</div>
              <div className="stat-value text-4xl ex-text-yellow">4,200</div>
            </div>
            <div className="stat-figure text-secondary ">
              <Users color="#DFDFDF" />
            </div>
          </div>

          <div className="stat flex items-center">
            <div className="flex flex-col">
              <div className="stat-title">Registers</div>
              <div className="stat-value text-4xl ex-text-yellow">1,200</div>
            </div>
            <div className="stat-figure text-secondary ">
              <FilePen color="#C4C4C4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalysisComp;
