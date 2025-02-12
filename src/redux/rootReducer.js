import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slice/user/userSlice";
import feedReducer from "./slice/feed/feedSlice";


export const rootReducer = combineReducers({
    user: userReducer,
    feed: feedReducer
})
