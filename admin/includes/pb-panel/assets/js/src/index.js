import React from "react";
import ReactDOM from "react-dom";
/* Main Compnent */
import SettingsWrap from "./tabs/dashboard";
import { Provider } from "react-redux";
import { store } from "./store/store"
// import globalDataStore from '@Admin/store/globalDataStore';
// import setInitialState  from '@Utils/setInitialState';
import "./scss/pb-panel.scss";

ReactDOM.render(
    <Provider store={store}>
        <SettingsWrap/>
    </Provider>,
    document.getElementById("pb-dashboard")
);
