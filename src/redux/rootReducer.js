import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slice/user/userSlice";


export const rootReducer = combineReducers({
    user: userReducer,
})
