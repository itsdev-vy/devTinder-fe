import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addFeed: (state, action) => action.payload,
        removeFeed: (state) => null
    },
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;