import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Welcome from "./welcome";
import Blocks from "./options";
import Settings from "./setting";
import RollBack from "./rollback";
import System from "./system";
function SettingsRoute() {
    const query = new URLSearchParams(useLocation().search);
    const page = query.get("page");
    const path = query.get("path");
    const currentEvent = query.get("event");

    let routePage = <p>Default route fallback</p>;

    if (PremiumBlocksPanelData.home_slug === page) {
        switch (path) {
            case "blocks":
                routePage = (
                    <Blocks
                        options={PremiumBlocksPanelData.options}
                        values={PremiumBlocksPanelData.values}
                    />
                );
                break;
            case "settings":
                routePage = <Settings />;
                break;
            case "rollback":
                routePage = <RollBack />;
                break;
            case "system":
                routePage = <System />;
                break;
            default:
                routePage = <Welcome />;
                break;
        }
    }

    return <Fragment>{routePage}</Fragment>;
}

export default SettingsRoute;
