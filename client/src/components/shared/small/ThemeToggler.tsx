import useThemeStore from "@/lib/store/themeStore";
import { Sun } from "lucide-react";
import { Eclipse } from "lucide-react";

function ThemeToggler() {
  const { toggleTheme, theme } = useThemeStore();
  return (
    <>
      <label className="flex cursor-pointer">
        {theme === "light" ? (
          <Sun
            color="black"
            className="theme-controller scale-75 md:scale-90"
          />
        ) : (
          <Eclipse
            color="white"
            className="theme-controller scale-75 md:scale-90"
          />
        )}
        <input
          type="checkbox"
          value=""
          className="toggle theme-controller scale-75 md:scale-90 bg-neutral-100 hover:bg-neutral-200"
          onChange={toggleTheme}
        />
      </label>
    </>
  );
}

export default ThemeToggler;
