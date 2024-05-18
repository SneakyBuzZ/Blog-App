import useThemeStore from "@/lib/store/themeStore";
import { Download } from "lucide-react";
import { Users } from "lucide-react";
import { FilePen } from "lucide-react";
import { useEffect, useState } from "react";

function AnalysisComp() {
  const [color, setColor] = useState("#DFDFDF");
  const { theme } = useThemeStore();
  useEffect(() => {
    if (theme === "dark") {
      setColor("#DFDFDF");
    } else if (theme === "light") {
      setColor("#212121");
    }
  }, [theme]);
  return (
    <>
      <div className="w-full px-20 flex flex-col items-center mt-16 lg:flex-row gap-10 justify-center">
        <p className="text-neutral-800 dark:text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque alias
        </p>
        <div className="stats w-full shadow ex-text-white justify-center bg-transparent border border-neutral-700">
          <div className="stat flex items-center">
            <div className="flex flex-col">
              <div className="stat-title text-black dark:text-white">
                Downloads
              </div>
              <div className="stat-value text-4xl ex-text-yellow">31K</div>
            </div>
            <div className="stat-figure text-secondary ">
              <Download color={`${color}`} />
            </div>
          </div>

          <div className="stat flex items-center">
            <div className="flex flex-col ">
              <div className="stat-title text-black dark:text-white">Users</div>
              <div className="stat-value text-4xl ex-text-yellow">4,200</div>
            </div>
            <div className="stat-figure text-secondary ">
              <Users color={`${color}`} />
            </div>
          </div>

          <div className="stat flex items-center">
            <div className="flex flex-col">
              <div className="stat-title text-black dark:text-white">
                Registers
              </div>
              <div className="stat-value text-4xl ex-text-yellow">1,200</div>
            </div>
            <div className="stat-figure text-secondary ">
              <FilePen color={`${color}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalysisComp;
