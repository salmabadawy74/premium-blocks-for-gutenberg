import React from "react";
import MainNav from "./NavMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SettingsRoute from "./SettingsRoute";
import Header from "../layout/Header";
import Notices from "../layout/Notices";

const SettingsWrap = () => {
    return (
        <Router>
            <Header />
            <Notices />
            <MainNav />
            <Switch>
                <Route path="/">
                    <SettingsRoute />
                </Route>
            </Switch>
        </Router>
    );
};

export default SettingsWrap;
