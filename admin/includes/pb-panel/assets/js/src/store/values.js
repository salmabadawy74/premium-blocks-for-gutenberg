import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
const BlocksContext = React.createContext({});

export const BlocksProvider = (props) => {
    return (
        <BlocksContext.Provider value={PremiumBlocksPanelData.values}>
            {props.children}
        </BlocksContext.Provider>
    );
};

export default PanelContext;
