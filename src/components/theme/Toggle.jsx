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
                <div className="w-11 mt-[3px] h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#f6f6f6dc] dark:peer-focus:ring-[#0a0a0acf] rounded-full peer dark:bg-stone-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[6px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#191919]"></div>
            </label>
        </div>
    );
}