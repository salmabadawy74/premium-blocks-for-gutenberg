import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blocks: PremiumBlocksPanelData.values,
};
export const blockSlice = createSlice({
    name: "blockStatues",
    initialState,
    reducers: {
        updateblockStatus: (state, action) => {
            state.blocks = action.payload;
        },
    },
});
export const updateblockStatus = blockSlice.actions;
export default blockSlice.reducer;
