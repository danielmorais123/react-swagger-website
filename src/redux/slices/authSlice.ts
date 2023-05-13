import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/typing";

interface InitialState {
    user: User | null;
}

const initialState: InitialState = {
    user: null,
};

export const authSlice = createSlice({
    name: "authUser",
    initialState,
    reducers: {
        setUser: (state, action) => {
            if (action.payload === null) {
                state.user = null;
            }
            else {
                state.user = { ...action.payload };
            }

        },
    },
});

export const { setUser } = authSlice.actions;

/* @ts-ignore */
export const selectUser = (state) => state.authUser.user;

export default authSlice.reducer;
