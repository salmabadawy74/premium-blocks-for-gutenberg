import { configureStore } from "@reduxjs/toolkit";
import blockReducer from "../features/blocks/index";
import settingReducer from "../features/settings/index";

import { AlertSlice } from "../features/Alert/AlertSlice";

export const store = configureStore({
    reducer: {
        blockStates: blockReducer,
        settingStates: settingReducer,
        notifications: AlertSlice.reducer,
    },
});
