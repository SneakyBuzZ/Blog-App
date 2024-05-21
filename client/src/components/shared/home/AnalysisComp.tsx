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
      <div className="w-full px-0  md:px-20 flex flex-col items-center mt-16 lg:flex-row gap-10 justify-center">
        <p className="text-neutral-800 dark:text-neutral-400 text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque alias
        </p>
        <div className="flex rounded-xl w-full md:py-5 shadow ex-text-white justify-evenly bg-transparent border border-neutral-700">
          <div className=" flex items-center scale-50 md:scale-100 gap-3 md:gap-6">
            <div className="flex flex-col">
              <div className=" text-black dark:text-white">Downloads</div>
              <div className="font-freeman text-4xl ex-text-yellow">31K</div>
            </div>
            <div className=" text-secondary ">
              <Download color={`${color}`} />
            </div>
          </div>

          <div className=" flex items-center scale-50 md:scale-100 gap-3 md:gap-6">
            <div className="flex flex-col ">
              <div className=" text-black dark:text-white">Users</div>
              <div className="font-freeman text-4xl ex-text-yellow">4,200</div>
            </div>
            <div className=" text-secondary ">
              <Users color={`${color}`} />
            </div>
          </div>

          <div className=" flex items-center scale-50 md:scale-100 gap-3 md:gap-6">
            <div className="flex flex-col">
              <div className=" text-black dark:text-white">Registers</div>
              <div className="font-freeman text-4xl ex-text-yellow">1,200</div>
            </div>
            <div className=" text-secondary ">
              <FilePen color={`${color}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalysisComp;
