import { Button } from "@/components/ui/button";
import useThemeStore from "@/lib/store/themeStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  return (
    <>
      <div
        className="w-full h-[20rem] bg-cover bg-no-repeat bg-center flex flex-col justify-center ex-text-white gap-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="w-full text-7xl text-center font-lobster font-semibold bg-transparent text-heading">
          Express Wave
        </h1>
        <div className="flex flex-col w-full justify-center items-center border-none bg-transparent gap-5">
          <p className="w-2/3 text-center text-content">
            Express Wave streamlines the blogging process, allowing you to focus
            on what matters most: crafting engaging content and reaching a wider
            audience eager to learn from your expertise.
          </p>
          <Button onClick={() => navigate("/blogs")} variant={"yellow"}>
            Explore
          </Button>
        </div>
      </div>
    </>
  );
}

export default SearchComp;
