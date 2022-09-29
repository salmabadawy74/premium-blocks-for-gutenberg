import { useContext, useEffect } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
import PalettePreview from './color-palettes/PalettePreview';
import { useSelect } from '@wordpress/data';

const ThemeColorPallet = () => {
    const { colorPallet, globalColors, themeCustomColors, setThemeCustomColors } = useContext(SettingsContext);
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

    useEffect(() => {
        globalColors.colors.map((item, index) => {
            document.documentElement.style.removeProperty(
                `--pbg-global-${item.slug}`);
            return item;
        });
    }, [globalColors, colorPallet]);

    const loadStyles = () => {
        const styles = {};

        styles[`[class*="wp-block-premium"]`] = {
            'color': `var(--pbg-global-color3)`,
        };

        styles[`[class*="wp-block-premium"] h1, [class*="wp-block-premium"] h2, [class*="wp-block-premium"] h3,[class*="wp-block-premium"] h4,[class*="wp-block-premium"] h5,[class*="wp-block-premium"] h6, [class*="wp-block-premium"] a:not([class*="button"])`] = {
            'color': `var(--pbg-global-color2)`,
        };

        styles[`[class*="wp-block-premium"] .premium-button, [class*="wp-block-premium"] .premium-pricing-table__button_link, [class*="wp-block-premium"] .premium-modal-box-modal-lower-close`] = {
            'color': `#ffffff`,
            'background-color': `var(--pbg-global-color1)`,
            'border-color': `var(--pbg-global-color4)`,
        };

        styles[`[class*="wp-block-premium"] a:not([class*="button"]):hover`] = {
            'color': `var(--pbg-global-color1)`,
        };

        return generateCss(styles);
    }

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