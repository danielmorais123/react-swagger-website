import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./slices/authSlice";


export const store = configureStore({
  reducer: {
    authUser: authUserReducer
  },
});
