import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IUser } from "../types";

type State = {
  user: IUser;
  isUserLoggedIn: boolean;
};

type Actions = {
  addUser: (user: IUser) => void;
  reset: () => void;
  updateUser: (user: IUser) => void;
  updateAvatar: (avatar: string) => void;
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

type userSliceType = State & Actions;

const userSlice: StateCreator<userSliceType, [], [], userSliceType> = (
  set
) => ({
  ...initialState,
  addUser: (user: IUser) => {
    set((state) => ({
      ...state,
      user: {
        ...state.user,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
      },
      isUserLoggedIn: true,
    }));
  },
  updateUser: (user: IUser) => {
    set((state) => ({
      ...state,
      user: {
        ...state.user,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
      },
    }));
  },
  updateAvatar: (avatar: string) => {
    set((state) => ({
      ...state,
      user: {
        ...state.user,
        avatar,
      },
    }));
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
