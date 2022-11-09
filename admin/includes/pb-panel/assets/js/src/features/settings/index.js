import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    apiSettings: PremiumBlocksPanelData.apiData,
};
export const settingSlice = createSlice({
    name: "settingStatues",
    initialState,
    reducers: {
        updateSettings: (state, action) => {
            state.apiSettings = action.payload;
        },
    },
});
export const { updateSettings } = settingSlice.actions;
export default settingSlice.reducer;
