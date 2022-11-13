const { __ } = wp.i18n;
import classnames from "classnames";
import ColorComponent from "../color";
import { Icon, create } from '@wordpress/icons';
import ReactTooltip from 'react-tooltip';
import { useEffect, useContext } from "@wordpress/element";
import SettingsContext from "../../store/settings-store";

const PalettePreview = ({
    renderBefore = () => null,
    colors,
    onChange,
    onClick,
    className,
    handleClickReset,
    canAdd = true,
}) => {

    const handleChangeColor = (color, optionId) => {
        let newColor;
        if (typeof color === "string") {
            newColor = color;
        } else if (
            undefined !== color.rgb &&
            undefined !== color.rgb.a &&
            1 !== color.rgb.a
        ) {
            newColor = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`;
        } else {
            newColor = color.hex;
        }
        onChange(newColor, optionId);
    };

    const { customColors, setCustomColors } = useContext(SettingsContext);

    const handleRemoveColor = (id) => {
        let newValue = [...customColors];
        newValue = newValue.filter(color => color.slug !== id);
        setCustomColors(newValue);
    }

    const handleAddNewColor = () => {
        const lastColorIndex = customColors.length;
        const colorId = `custom-color${lastColorIndex + Math.floor(Math.random() * 100)}`;
        const colorTitle = `${__('Custom Color ')}${lastColorIndex + 1}`;
        let newColors = [...customColors];
        newColors.push({ name: colorTitle, color: '', slug: colorId });

        setCustomColors(newColors);
    }

    const handleColorChangeName = (name, id) => {
        let newValue = [...customColors].map(color => color.slug === id ? { ...color, name: name } : color);
        setCustomColors(newValue);
    }

    useEffect(() => {
        ReactTooltip.rebuild();
    }, [colors]);

    return (
        <div
            className={classnames("premium-single-palette", className)}
            onClick={(e) => {
                if (
                    e.target.closest(".premium-global-color-picker-modal") ||
                    e.target.classList.contains("premium-global-color-picker-modal")
                ) {
                    return;
                }

                onClick();
            }}
        >
            {renderBefore()}
            <div className={`premium-global-color-palette-container`}>
                <ReactTooltip place='top' effect="solid" />
                <div className="premium-pallet-colors">
                    {colors.map((picker) => (
                        <ColorComponent
                            picker={picker}
                            onChangeComplete={(color, id) => handleChangeColor(color, picker[`slug`])}
                            className={"premium-global-color-palette-modal"}
                            skipModal={picker.skipModal}
                            resetPalette={true}
                            onColorReset={(color) => handleClickReset(picker[`slug`])}
                            isDefault={picker.default}
                            onRemove={() => handleRemoveColor(picker[`slug`])}
                            onChangeName={false}
                        />
                    ))}
                </div>
                {(customColors.length && canAdd) && <p>{__('Custom Color', "premium-blocks-for-gutenberg")}</p>}
                {(customColors.length && canAdd) && (
                    <div className="premium-custom-colors">
                        {customColors.map((picker) => (
                            <ColorComponent
                                picker={picker}
                                onChangeComplete={(color, id) => handleChangeColor(color, picker[`slug`])}
                                className={"premium-global-color-palette-modal"}
                                skipModal={picker.skipModal}
                                resetPalette={true}
                                onColorReset={(color) => handleClickReset(picker[`slug`])}
                                isDefault={picker.default}
                                onRemove={() => handleRemoveColor(picker[`slug`])}
                                onChangeName={(v) => handleColorChangeName(v, picker[`slug`])}
                            />
                        ))}
                        {(canAdd && customColors.length) && <div className="premium-add-new-color" onClick={() => handleAddNewColor()} data-tip={__('Add Color', "premium-blocks-for-gutenberg")}>
                            <Icon icon={create} />
                        </div>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PalettePreview;
