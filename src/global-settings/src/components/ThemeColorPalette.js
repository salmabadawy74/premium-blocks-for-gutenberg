import { useContext } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
import PalettePreview from './color-palettes/PalettePreview';
import { useSelect } from '@wordpress/data';

const ThemeColorPalette = () => {
    const { setCustomColors, customColors } = useContext(SettingsContext);
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

    const handleChangeColor = (value, id) => {
        let newColors = [...customColors].map(color => color.slug === id ? { ...color, color: value } : color);

        setCustomColors(newColors);
    }

    return <div className={`premium-palettes-preview`}>
        <PalettePreview
            onClick={() => { }}
            colors={themeColors}
            customColors={customColors}
            onChange={(v, id) => handleChangeColor(v, id)}
            skipModal={false}
            handleClickReset={(id) => handleChangeColor('', id)}
        />
    </div>
}

export default ThemeColorPalette;