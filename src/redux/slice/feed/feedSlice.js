import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addFeed: (state, action) => action.payload,
        emptyFeed: (state) => null,
        removeFeed: (state, action) => {
            const newFeed = state.filter((usr) => usr._id !== action.payload);
            return newFeed;
        }
    },
});

export const { addFeed, removeFeed, emptyFeed } = feedSlice.actions;
export default feedSlice.reducer;