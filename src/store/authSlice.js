import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        status: false,
        userData: 526,
        showLoginModal: false,
        showSigninModal: false
    }
}


const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user.status = true;
            state.user.userData = action.payload.userData;
        },
        logout: (state) => {
            state.user.status = false;
            state.user.userData = null;
        },
        loginModalToggle: (state) => {
            state.user.showLoginModal = !(state.user.showLoginModal);
        },
        signinModalToggle: (state) => {
            state.user.showSigninModal = !(state.user.showSigninModal);
        }
    }
})

const authReducer = authSlice.reducer;
export default authReducer;

export const { login, logout, loginModalToggle, signinModalToggle } = authSlice.actions;