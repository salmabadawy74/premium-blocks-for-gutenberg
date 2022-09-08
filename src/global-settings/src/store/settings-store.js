/**
 * WordPress dependencies
 */
import { useEntityProp } from '@wordpress/core-data';
import { __ } from "@wordpress/i18n";

const SettingsContext = React.createContext({
    settings: {},
    setSettings: () => { }
})

export const SettingsProvider = (props) => {
    const [settings, setSettings] = useEntityProp('root', 'site', 'pbg_global_settings');
    const changeHandler = (element, value) => {
        const updatedSettings = { ...settings };
        updatedSettings[element] = value;
        setSettings(updatedSettings);
    };
    const settingsContext = {
        settings,
        setSettings: changeHandler,
    };
    return <SettingsContext.Provider value={settingsContext}>
        {props.children}
    </SettingsContext.Provider>
}

export default SettingsContext