import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slice/user/userSlice";
import feedReducer from "./slice/feed/feedSlice";
import connectionsReducer from "./slice/connections/connectionSlice";



export const rootReducer = combineReducers({
    user: userReducer,
    feed: feedReducer,
    connections: connectionsReducer,

})
