import { __ } from '@wordpress/i18n';
import ScreenHeader from "../components/header"
import { useContext } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
import { CheckboxControl } from '@wordpress/components';
import ColorPalettes from '../components/color-pallet';
import ThemeColorPallet from '../components/ThemeColorPallet';
import PremiumToggle from '../../../components/premium-toggle';

const ColorsScreen = () => {
    const { colorPallet, setColorPallet, colorPallets, setColorPallets, applyColorsToDefault, setApplyColorsToDefault } = useContext(SettingsContext);

    return <>
        <ScreenHeader
            title={__('Colors')}
            description={__(
                'Manage palettes and the default color of different global elements on the site.'
                , "premium-blocks-for-gutenberg")}
        />
        <div className='premium-global-colors-screen'>
            <PremiumToggle options={{ first: { label: __('Theme'), value: 'theme' }, second: { label: __('Premium Blocks', "premium-blocks-for-gutenberg"), value: 'pbg' } }} value={colorPallet} onChange={(newType) => setColorPallet(newType)} />
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