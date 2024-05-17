// import { StateCreator, create } from "zustand";
// import { devtools, persist } from "zustand/middleware";
// import { IUser } from "../types";

// type State = {
//   fullName: string;
//   username: string;
//   email: string;
//   avatar?: string;
//   isUserLoggedIn: boolean;
// };

// type Actions = {
//   addUser: (user: IUser) => void;
//   reset: () => void;
// };

// const initialState: State = {
//   fullName: "",
//   username: "",
//   email: "",
//   avatar: "",
//   isUserLoggedIn: false,
// };

// type StateAndActions = State & Actions;

// const userSlice: StateCreator<StateAndActions, [], [], StateAndActions> = (
//   set
// ) => ({
//   ...initialState,
//   addUser: ({ username, fullName, email, avatar }: IUser) => {
//     set((state) => ({
//       ...state,
//       username,
//       fullName,
//       email,
//       avatar,
//       isUserLoggedIn: !state.isUserLoggedIn,
//     }));
//   },
//   reset: () => {
//     set(initialState);
//   },
// });

// const useUserStore = create(
//   devtools(
//     persist(userSlice, {
//       name: "user",
//     })
//   )
// );

// export default useUserStore;

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
