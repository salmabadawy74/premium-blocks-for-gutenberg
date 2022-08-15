import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
const PanelContext = React.createContext({
    tabs: [],
})

export const PanelProvider = (props) => {
    const tabs = [];
    const event = new CustomEvent('pb:dashboard:customtabs', { detail: tabs });
    document.dispatchEvent(event);

    const pluginsContext = {
        tabs,
    };

    return <PanelContext.Provider value={pluginsContext}>
        {props.children}
    </PanelContext.Provider>
}

export default PanelContext