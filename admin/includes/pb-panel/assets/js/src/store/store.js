import { configureStore } from "@reduxjs/toolkit";
import blockReducer from "../features/blocks/index";
import { AlertSlice } from "../features/Alert/AlertSlice";

export const store = configureStore({
    reducer: {
        blockStates: blockReducer,
        notifications: AlertSlice.reducer
    },
});
