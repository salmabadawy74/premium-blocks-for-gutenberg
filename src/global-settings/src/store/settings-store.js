/**
 * WordPress dependencies
 */
import { useEntityProp } from '@wordpress/core-data';
import { __ } from "@wordpress/i18n";

const SettingsContext = React.createContext({
    typographySettings: {},
    colorSettings: {},
    setTypographySettings: () => { },
    setColorsSettings: () => { },
})

export const SettingsProvider = (props) => {
    const [typographySettings, setTypographySettings] = useEntityProp('root', 'site', 'pbg_global_typography');
    const [colorsSettings, setColorsSettings] = useEntityProp('root', 'site', 'pbg_global_colors');
    const [settings, setSettings] = useEntityProp('root', 'site', 'pbg_global_settings');
    // const changeHandler = (element, value) => {
    //     const updatedSettings = { ...settings };
    //     updatedSettings[element] = value;
    //     setSettings(updatedSettings);
    // };
    console.log(typographySettings, colorsSettings, 'test');
    const settingsContext = {
        typographySettings,
        setTypographySettings,
        colorsSettings,
        setColorsSettings
    };
    return <SettingsContext.Provider value={settingsContext}>
        {props.children}
    </SettingsContext.Provider>
}

export default SettingsContext