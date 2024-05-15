import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IUser } from "../types";

type State = {
  user: IUser;
  isUserLoggedIn: boolean;
  addUser?: (user: IUser) => void;
  reset?: () => void;
};

const initialState: State = {
  user: {
    fullName: "",
    username: "",
    email: "",
    avatar: "",
  },
  isUserLoggedIn: false,
};

type userSliceType = (set: (state: State) => void) => State;

// create store
const userSlice: userSliceType = (set) => ({
  ...initialState,
  addUser: (user: IUser) => {
    set({
      user: user,
      isUserLoggedIn: true,
    });
  },
  reset: () => {
    set(initialState);
  },
});

const useUserStore = create(
  devtools(
    persist(userSlice, {
      name: "user",
    })
  )
);

export default useUserStore;
