import { __ } from '@wordpress/i18n';
import ScreenHeader from "../components/header"
import { useContext } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
import { CheckboxControl } from '@wordpress/components';
import ColorPalettes from '../components/color-palette';
import ThemeColorPalette from '../components/ThemeColorPalette';
import PremiumToggle from '../components/premium-toggle';

const ColorsScreen = () => {
    const { colorPalette, setColorPalette, colorPalettes, setColorPalettes, applyColorsToDefault, setApplyColorsToDefault } = useContext(SettingsContext);
    const options = {
        first: {
            label: __('Theme', "premium-blocks-for-gutenberg"),
            value: 'theme',
            help: __('This choice will apply theme colors as the default color palette in the premium blocks color control.', "premium-blocks-for-gutenberg")
        },
        second: {
            label: __('Premium Blocks', "premium-blocks-for-gutenberg"),
            value: 'pbg',
            help: __('This choice will apply the current color palette as the default color palette in the premium blocks color control and apply the current color palette colors to the blocks.', "premium-blocks-for-gutenberg")
        }
    };
    return <>
        <ScreenHeader
            title={__('Colors', "premium-blocks-for-gutenberg")}
            description={__(
                'Manage palettes and the default color of different global elements on the site.'
                , "premium-blocks-for-gutenberg")}
        />
        <div className='premium-global-colors-screen'>
            <PremiumToggle options={options} value={colorPalette} onChange={(newType) => setColorPalette(newType)} />
            {colorPalette === 'theme' &&
                <ThemeColorPalette />
            }
            {colorPalette === 'pbg' &&
                <ColorPalettes value={colorPalettes} onChange={setColorPalettes} />
            }
            {colorPalette === 'pbg' && (
                <CheckboxControl
                    label={__('Apply to Native Blocks', "premium-blocks-for-gutenberg")}
                    checked={applyColorsToDefault}
                    onChange={() => setApplyColorsToDefault(!applyColorsToDefault)}
                />
            )}
        </div>
    </>
}

export default ColorsScreen