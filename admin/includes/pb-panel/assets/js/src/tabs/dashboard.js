import React from "react";
import MainNav from "./NavMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SettingsRoute from "./SettingsRoute";
import Header from "../layout/Header";
import Alert from "../features/Alert/Alert";

const SettingsWrap = ({ store }) => {
    return (
        <Router>
            <Header />
            <Alert />
            <MainNav />
            <Switch>
                <Route path="/">
                    <SettingsRoute store={store} />
                </Route>
            </Switch>
        </Router>
    );
};

export default SettingsWrap;
