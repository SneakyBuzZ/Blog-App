import useThemeStore from "@/lib/store/themeStore";
import { Sun } from "lucide-react";
import { Eclipse } from "lucide-react";

function ThemeToggler() {
  const { toggleTheme, theme } = useThemeStore();
  return (
    <>
      <label className="flex cursor-pointer gap-2 ">
        {theme === "light" ? (
          <Sun color="gray" className="theme-controller" />
        ) : (
          <Eclipse color="gray" className="theme-controller" />
        )}
        <input
          type="checkbox"
          value=""
          className="toggle theme-controller bg-neutral-500 hover:bg-neutral-500"
          onChange={toggleTheme}
        />
      </label>
    </>
  );
}

export default ThemeToggler;
