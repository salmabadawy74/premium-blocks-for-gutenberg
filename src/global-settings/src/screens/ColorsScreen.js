import { __ } from '@wordpress/i18n';
import ScreenHeader from "../components/header"
import { useContext } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
import defaults from '../helpers/defaults';
import { useSelect } from '@wordpress/data'
import PalettePreview from '../components/color-palettes/PalettePreview';
import { ToggleControl } from '@wordpress/components';

const ColorsScreen = props => {
    const { colors: defaultColors } = defaults;
    const { globalColors: defaultGlobalColors, setGlobalColors, colorPallet, setColorPallet } = useContext(SettingsContext);
    const globalColors = defaultGlobalColors.length ? defaultGlobalColors : defaultColors;
    const _colors = useSelect(select => select('core/block-editor').getSettings().colors) || [];
    const themeColorsFromPbg = globalColors.length ? globalColors.filter(color => color.type === 'theme') : [];
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
    const pbgColors = globalColors.length ? globalColors.filter(color => color.type !== 'theme') : [];

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

    const handleAddNewColor = (colorData) => {
        let newValue = [...globalColors];
        newValue.push(colorData);
        setGlobalColors(newValue);
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
                    value={[...themeColors, ...themeColorsFromPbg]}
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
            <div className={`premium-palettes-preview`}>
                <PalettePreview
                    onClick={() => { }}
                    value={pbgColors}
                    onChange={(v, id) => handleChange(v, id)}
                    skipModal={false}
                    handleClickReset={(val) => console.log(val)}
                    addNewColor={handleAddNewColor}
                    onRemove={handleRemove}
                    onChangeName={(v, id) => handleChangeName(v, id)}
                />
            </div>
        }
    </>
}

export default ColorsScreen