import { useContext } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
import PalettePreview from './color-palettes/PalettePreview';
import { useSelect } from '@wordpress/data';

const ThemeColorPallet = () => {
    const { themeCustomColors, setThemeCustomColors } = useContext(SettingsContext);
    const _colors = useSelect(select => select('core/block-editor').getSettings().colors) || [];
    const themeColors = _colors.map((color) => {
        return {
            name: color.name,
            color: color.color,
            slug: color.slug,
            skipModal: true,
            default: true,
        }
    });

    const handleRemoveColor = (id) => {
        let newValue = [...themeCustomColors];
        newValue = newValue.filter(color => color.slug !== id);
        setThemeCustomColors(newValue);
    }

    const handleAddNewColor = (colorData) => {
        let newColors = [...themeCustomColors];
        newColors.push(colorData);

        setThemeCustomColors(newColors);
    }

    const handleChangeColor = (value, id) => {
        let newColors = [...themeCustomColors].map(color => color.slug === id ? { ...color, color: value } : color);

        setThemeCustomColors(newColors);
    }

    const handleColorChangeName = (name, id) => {
        let newValue = [...themeCustomColors].map(color => color.slug === id ? { ...color, name: name } : color);
        setThemeCustomColors(newValue);
    }

    return <div className={`premium-palettes-preview`}>
        <PalettePreview
            onClick={() => { }}
            pallet={{
                colors: themeColors,
                custom_colors: themeCustomColors
            }}
            onChange={(v, id) => handleChangeColor(v, id)}
            skipModal={false}
            handleClickReset={(val) => console.log(val)}
            addNewColor={handleAddNewColor}
            onRemove={handleRemoveColor}
            onChangeName={(v, id) => handleColorChangeName(v, id)}
        />
    </div>
}

export default ThemeColorPallet;