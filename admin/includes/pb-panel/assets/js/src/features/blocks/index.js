import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blocksFlag: false,
    blocks: {},
    blockFilter: "all",
};
export const blockSlice = createSlice({
    name: "blockStatues",
    initialState,
    reducers: {
        updateblockStatus: (state, action) => {
            state.blocksFlag = true;
            state.blocks = action.payload;
        },
        updateBlocksFilter: (state, action) => {
            state.blocksFlag = true;
            state.blockFilter = action.payload;
        },
    },
});
export const { updateblockStatus } = blockSlice.actions;
export default blockSlice.reducer;
