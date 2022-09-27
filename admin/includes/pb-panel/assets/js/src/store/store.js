import { configureStore } from "@reduxjs/toolkit";
import blockReducer from "../features/blocks/index";

export const store = configureStore({
    reducer: {
        blockStates: blockReducer,
    },
});
