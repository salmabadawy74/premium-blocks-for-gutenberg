import { __ } from '@wordpress/i18n';
import ScreenHeader from "../components/header"
import { useContext } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
import defaults from '../helpers/defaults';
import { useSelect } from '@wordpress/data'
import PalettePreview from '../components/color-palettes/PalettePreview';
import { ToggleControl } from '@wordpress/components';
import ColorPalettes from '../components/color-pallet';

const ColorsScreen = props => {
    const { colors: defaultColors } = defaults;
    const { globalColors: defaultGlobalColors, setGlobalColors, colorPallet, setColorPallet, colorPallets, setColorPallets } = useContext(SettingsContext);
    const globalColors = defaultGlobalColors.length ? defaultGlobalColors : defaultColors;
    const _colors = useSelect(select => select('core/block-editor').getSettings().colors) || [];
    const themeCustomColors = colorPallets.length ? colorPallets.find(pallet => pallet.id === 'theme') : [];
    const themeColors = _colors.map((color) => {
        return {
            name: color.name,
            color: color.color,
            slug: color.slug,
            skipModal: true,
            default: true,
            type: 'theme'
        }
    });

    const handleRemove = (id) => {
        let newValue = [...globalColors];
        newValue = newValue.filter(color => color.slug !== id);
        setGlobalColors(newValue);
    }

    const handleToggleChange = () => {
        setColorPallet(colorPallet === 'theme' ? 'pbg' : 'theme');
    }

    const handleChange = (value, id) => {
        let newValue = [...globalColors].map(color => color.slug === id ? { ...color, color: value } : color);
        setGlobalColors(newValue);
    }

    const handleAddThemeNewColor = (colorData) => {
        let newThemePallet = [...themeCustomColors];
        newThemePallet.custom_colors.push(colorData);
        const newPallets = [...state].map(pallet => pallet.id === 'theme' ? newThemePallet : pallet);

        setColorPallets(newPallets);
    }

    const handleChangeName = (name, id) => {
        let newValue = [...globalColors].map(color => color.slug === id ? { ...color, name: name } : color);
        setGlobalColors(newValue);
    }

    return <>
        <ScreenHeader
            title={__('Colors')}
            description={__(
                'Manage palettes and the default color of different global elements on the site.'
            )}
        />
        <div className='premium-global-colors-type'>
            <label>{__('Theme')}</label>
            <ToggleControl
                checked={colorPallet !== 'theme'}
                onChange={handleToggleChange}
            />
            <label>{__('Premium Block')}</label>
        </div>
        {colorPallet === 'theme' &&
            <div className={`premium-palettes-preview`}>
                <PalettePreview
                    onClick={() => { }}
                    pallet={{
                        colors: themeColors,
                        custom_colors: themeCustomColors.custom_colors
                    }}
                    onChange={(v, id) => handleChange(v, id)}
                    skipModal={false}
                    handleClickReset={(val) => console.log(val)}
                    addNewColor={handleAddNewColor}
                    onRemove={handleRemove}
                    onChangeName={(v, id) => handleChangeName(v, id)}
                />
            </div>
        }
        {colorPallet === 'pbg' &&
            <ColorPalettes value={colorPallets} onChange={setColorPallets} />
        }
    </>
}

export default ColorsScreen