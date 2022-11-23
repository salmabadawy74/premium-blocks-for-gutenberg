import { __ } from '@wordpress/i18n';
import ScreenHeader from "../components/header"
import { useContext } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
import { CheckboxControl } from '@wordpress/components';
import ColorPalettes from '../components/color-palette';
import ThemeColorPalette from '../components/ThemeColorPalette';
import AdvancedRadio from '../components/AdvancedRadio';

const ColorsScreen = () => {
    const { colorPalette, setColorPalette, colorPalettes, setColorPalettes, applyColorsToDefault, setApplyColorsToDefault } = useContext(SettingsContext);
    const options = {
        first: {
            label: __('Theme Defaults', "premium-blocks-for-gutenberg"),
            value: 'theme',
            help: __('Activate theme colors as the default color palette in the premium blocks color control.', "premium-blocks-for-gutenberg")
        },
        second: {
            label: __('Premium Blocks', "premium-blocks-for-gutenberg"),
            value: 'pbg',
            help: __('Activate Premium Blocks color palette as the default color palette in the premium blocks color control and apply the current color palette colors to the blocks.', "premium-blocks-for-gutenberg")
        }
    };
    return <>
        <ScreenHeader
            title={__('Colors', "premium-blocks-for-gutenberg")}
            description={__(
                'Manage your website colors based on your default theme colors or Premium Blocks color palette.'
                , "premium-blocks-for-gutenberg")}
        />
        <div className='premium-global-colors-screen'>
            <AdvancedRadio label={__('Select a default color palette', "premium-blocks-for-gutenberg")} choices={options} value={colorPalette} onChange={(newType) => setColorPalette(newType)} />
            {colorPalette === 'theme' &&
                <ThemeColorPalette />
            }
            {colorPalette === 'pbg' &&
                <ColorPalettes value={colorPalettes} onChange={setColorPalettes} />
            }
            {colorPalette === 'pbg' && (
                <CheckboxControl
                    label={__('Apply to Native Gutenberg Blocks', "premium-blocks-for-gutenberg")}
                    checked={applyColorsToDefault}
                    onChange={() => setApplyColorsToDefault(!applyColorsToDefault)}
                />
            )}
        </div>
    </>
}

export default ColorsScreen