import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        count: 1,
        items: []
    },
    reducers: {
        incr: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes.
            // Also, no return statement is required from these functions.
            const { msg, error } = action.payload;
            state.items.push({ msg, error });
            let tempItems = state.items.map((value, index) => {
                return {
                    id: index,
                    msg: value.msg,
                    error: value.error,
                    moment: ''
                };
            });
            state.items = tempItems;
            state.count = state.items.length;
        },
        decr: (state) => {
            state.count -= 1;
            state.items.pop();
        },
        reset: (state) => {
            state.count = 0;
            state.items = [];
        },
        remove: (state, action) => {
            state.items = state.items.filter((val, idx) => idx !== action.payload);
            state.count = state.items.length;
        }
    }
});

export const { incr, decr, reset, remove } = notificationSlice.actions;

const notificationReducer = notificationSlice.reducer;
export default notificationReducer;