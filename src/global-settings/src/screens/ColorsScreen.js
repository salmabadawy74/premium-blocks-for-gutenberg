import { __ } from '@wordpress/i18n';
import ScreenHeader from "../components/header"
import { useContext } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
import { CheckboxControl } from '@wordpress/components';
import ColorPalettes from '../components/color-pallet';
import ThemeColorPallet from '../components/ThemeColorPallet';
import PremiumToggle from '../components/premium-toggle';

const ColorsScreen = () => {
    const { colorPallet, setColorPallet, colorPallets, setColorPallets, applyColorsToDefault, setApplyColorsToDefault } = useContext(SettingsContext);
    const options = {
        first: {
            label: __('Theme'),
            value: 'theme',
            help: __('This choice will apply theme colors as the default color pallet in the premium blocks color control.')
        },
        second: {
            label: __('Premium Blocks', "premium-blocks-for-gutenberg"),
            value: 'pbg',
            help: __('This choice will apply the current color pallet as the default color pallet in the premium blocks color control and apply the current color pallet colors to the blocks.')
        }
    };
    return <>
        <ScreenHeader
            title={__('Colors')}
            description={__(
                'Manage palettes and the default color of different global elements on the site.'
                , "premium-blocks-for-gutenberg")}
        />
        <div className='premium-global-colors-screen'>
            <PremiumToggle options={options} value={colorPallet} onChange={(newType) => setColorPallet(newType)} />
            {colorPallet === 'theme' &&
                <ThemeColorPallet />
            }
            {colorPallet === 'pbg' &&
                <ColorPalettes value={colorPallets} onChange={setColorPallets} />
            }
            <CheckboxControl
                label={__('Apply to Native Blocks')}
                checked={applyColorsToDefault}
                onChange={() => setApplyColorsToDefault(!applyColorsToDefault)}
            />
        </div>
    </>
}

export default ColorsScreen