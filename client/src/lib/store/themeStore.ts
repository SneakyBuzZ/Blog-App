import { StateCreator, create } from "zustand";

type State = {
  theme: string;
};

type Actions = {
  toggleTheme: () => void;
};

const initialState: State = {
  theme: "dark",
};

type themeSliceType = State & Actions;

const themeSlice: StateCreator<themeSliceType, [], [], themeSliceType> = (
  set
) => ({
  ...initialState,
  toggleTheme: () => {
    set((state) => ({
      ...state,
      theme: state.theme === "dark" ? "light" : "dark",
    }));
  },
});

const useThemeStore = create(themeSlice);

export default useThemeStore;
