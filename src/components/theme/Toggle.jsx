import useTheme from "../../contexts/themeContext";

export default function Toggle() {

    const { theme, darkmode, lightmode } = useTheme();

    const themeChange = (e) => {
        const isDark = e.currentTarget.checked;
        if (isDark) {
            darkmode();
        } else {
            lightmode();
        }
    }

    return (
        <div className="button flex justify-center mx-auto h-full items-center sm:mx-5 md:mx-0">
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={themeChange}
                    checked={theme === "dark"}
                />
                <div className="w-9 mt-[3px] h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#f6f6f6dc] dark:peer-focus:ring-[#0a0a0acf] rounded-full peer dark:bg-stone-700 peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[4px] after:left-[-1px] dark:after:bg-blue-500 after:bg-sky-400 after:border-white after:border after:rounded-full after:h-4 after:w-4 after:mb-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#191919]"></div>
            </label>
        </div>
    );
}