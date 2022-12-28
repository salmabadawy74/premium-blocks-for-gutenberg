import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: PremiumBlocksPanelData.globalFeatures,
};
export const globalFeaturesSlice = createSlice({
    name: "featuresStatues",
    initialState,
    reducers: {
        updateGlobalFeatures: (state, action) => {
            state.data = action.payload;
        },
    },
});
export const { updateGlobalFeatures } = globalFeaturesSlice.actions;
export default globalFeaturesSlice.reducer;
