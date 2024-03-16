import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        status: false,
        userData: 526,
        showModal: false
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
        modalToggle: (state) => {
            state.user.showModal = !(state.user.showModal);
        }
    }
})

const authReducer = authSlice.reducer;
export default authReducer;

export const { login, logout, modalToggle } = authSlice.actions;