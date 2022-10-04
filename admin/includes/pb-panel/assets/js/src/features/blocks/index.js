import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blocksFlag: false,
    blocks: PremiumBlocksPanelData.values,
};
export const blockSlice = createSlice({
    name: "blockStatues",
    initialState,
    reducers: {
        updateblockStatus: (state, action) => {
            state.blocksFlag = true;
            state.blocks = action.payload;
        },
        ActivateBlocks: (state, action) => {
            console.log(state, action);
            state.blocks = action.payload;
        },
    },
});
export const selectAllBlocks = (state) => state.blocks;
export const { updateblockStatus, ActivateBlocks } = blockSlice.actions;
export default blockSlice.reducer;
