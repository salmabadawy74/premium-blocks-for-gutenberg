import React, { Fragment } from "react";
import ReactDOM from "react-dom";
/* Main Compnent */
import SettingsWrap from "./tabs/dashboard";

ReactDOM.render(
    <Fragment>
        <SettingsWrap />
    </Fragment>,
    document.getElementById("pb-dashboard")
);
