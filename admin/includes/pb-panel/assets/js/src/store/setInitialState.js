
const setInitialState = (store) => {

    const initialState = {
        blocksFlag: true,
        blocks: PremiumBlocksPanelData.values,
        blockFilter: 'all'
    };

    store.dispatch({ type: 'blockStatues/updateblockStatus', payload: initialState.blocks });

};

export default setInitialState;
