import { configureStore } from "@reduxjs/toolkit";
import userReducer, { userLogoutSlice }  from "./slices/userSlice";


const store = configureStore({
  reducer: {
    user: userReducer,
    logoutUser: userLogoutSlice,
  },
});


export default store;


export const server = "https://dukanbackendcomplete-production.up.railway.app/api/v1";