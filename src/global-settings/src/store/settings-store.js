/**
 * WordPress dependencies
 */
import { useEntityProp } from '@wordpress/core-data';
import { __ } from "@wordpress/i18n";

const SettingsContext = React.createContext({
    globalTypography: {},
    globalColors: {},
    colorPallet: '',
    setGlobalTypography: () => { },
    setGlobalColors: () => { },
    setColorPallet: () => { },
    colorPallets: [],
    setColorPallets: [],
    layoutSettings: {},
    setLayoutSettings: () => { }
})

export const SettingsProvider = (props) => {
    const [globalTypography, setGlobalTypography] = useEntityProp('root', 'site', 'pbg_global_typography');
    const [globalColors, setGlobalColors] = useEntityProp('root', 'site', 'pbg_global_colors');
    const [colorPallet, setColorPallet] = useEntityProp('root', 'site', 'pbg_global_color_pallet');
    const [colorPallets, setColorPallets] = useEntityProp('root', 'site', 'pbg_global_color_pallets');
    const [themeCustomColors, setThemeCustomColors] = useEntityProp('root', 'site', 'pbg_theme_custom_colors');
    const [layoutSettings, setLayoutSettings] = useEntityProp('root', 'site', 'pbg_global_layout');

    const settingsContext = {
        globalTypography,
        setGlobalTypography,
        globalColors,
        setGlobalColors,
        colorPallet,
        setColorPallet,
        colorPallets,
        setColorPallets,
        themeCustomColors,
        setThemeCustomColors,
        layoutSettings,
        setLayoutSettings
    };
    return <SettingsContext.Provider value={settingsContext}>
        {props.children}
    </SettingsContext.Provider>
}

export default SettingsContext