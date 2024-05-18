import useThemeStore from "@/lib/store/themeStore";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
function SearchComp() {
  const [bg, setBg] = useState("exwavebgblack.png");
  const { theme } = useThemeStore();
  useEffect(() => {
    if (theme === "dark") {
      setBg("exwavebgblack.png");
    } else if (theme === "light") {
      setBg("exwavebglight.png");
    }
  }, [theme]);

  return (
    <>
      <div
        className="w-full h-[20rem] bg-cover bg-no-repeat bg-center flex flex-col justify-center ex-text-white gap-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="w-full text-7xl text-center font-lobster bg-transparent text-heading">
          Search blogs of your interest
        </h1>
        <div className="flex flex-row w-full justify-center items-center border-none bg-transparent">
          <input
            type="text"
            className=" dark:bg-neutral-300 bg-white border border-neutral-300 text-black px-14 py-3 rounded-l-md h-14 w-1/3 focus:outline-none ex-text-white text-lg ex-search-shadow"
          />
          <button className="flex  items-center justify-center gap-1 bg-neutral-700 py-3 px-8 rounded-r-md border-0 h-14 active:scale-95">
            <Search color="#FFD600" className="bg-transparent" />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchComp;
