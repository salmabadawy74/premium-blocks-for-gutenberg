import React from "react";
import ReactDOM from "react-dom";
/* Main Compnent */
import SettingsWrap from "./tabs/dashboard";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./scss/pb-panel.scss";
import setInitialState from './store/setInitialState'
const blockStateFlag = store.getState().blockStates;
if (!blockStateFlag.blocksFlag) {
    setInitialState(store)
}
ReactDOM.render(
    <Provider store={store}>
        <SettingsWrap />
    </Provider>,
    document.getElementById("pb-dashboard")
);
