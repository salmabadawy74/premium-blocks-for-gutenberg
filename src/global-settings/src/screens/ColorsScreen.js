import { __ } from '@wordpress/i18n';
import ScreenHeader from "../components/header"
import { useContext } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
import { ToggleControl } from '@wordpress/components';
import ColorPalettes from '../components/color-pallet';
import ThemeColorPallet from '../components/ThemeColorPallet';

const ColorsScreen = () => {
    const { colorPallet, setColorPallet, colorPallets, setColorPallets } = useContext(SettingsContext);

    const handleToggleChange = () => {
        setColorPallet(colorPallet === 'theme' ? 'pbg' : 'theme');
    }

    return <>
        <ScreenHeader
            title={__('Colors')}
            description={__(
                'Manage palettes and the default color of different global elements on the site.'
                , "premium-blocks-for-gutenberg")}
        />
        <div className='premium-global-colors-screen'>
            <div className='premium-global-colors-type'>
                <label>{__('Theme')}</label>
                <ToggleControl
                    checked={colorPallet !== 'theme'}
                    onChange={handleToggleChange}
                />
                <label>{__('Premium Block', "premium-blocks-for-gutenberg")}</label>
            </div>
            <ToggleControl
                checked={false}
                onChange={() => { }}
                label={__('Apply Colors to Native Blocks')}
            />
            {colorPallet === 'theme' &&
                <ThemeColorPallet />
            }
            {colorPallet === 'pbg' &&
                <ColorPalettes value={colorPallets} onChange={setColorPallets} />
            }
        </div>
    </>
}

export default ColorsScreen