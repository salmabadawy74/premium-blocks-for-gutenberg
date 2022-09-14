const { __ } = wp.i18n;
import classnames from "classnames";
import ColorComponent from "../color";
import { Icon, create } from '@wordpress/icons';
import { useEffect, useState } from "react";
import ReactTooltip from 'react-tooltip';

const PalettePreview = ({
    renderBefore = () => null,
    value,
    onChange,
    onClick,
    currentPalette,
    className,
    addNewColor,
    handleClickReset,
    onRemove
}) => {
    if (!currentPalette) {
        currentPalette = value;
    }

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

    const colorValues = {};
    const defaultPickers = Object.keys(currentPalette).map((key, index) => {
        colorValues[key] = currentPalette[key].value;
        return {
            title: currentPalette[key].title,
            id: key,
            skipModal: currentPalette[key].skipModal,
            default: currentPalette[key].default,
        };
    });

    const [pickers, setPickers] = useState(defaultPickers);
    const addColor = () => {
        const lastColorIndex = Object.keys(pickers).length;
        const colorId = `color${lastColorIndex + 1}`;
        const colorTitle = `${__('Custom Color ')}${lastColorIndex + 1}`;
        const newPickers = [...pickers];
        newPickers.push({
            title: colorTitle,
            id: colorId
        });
        addNewColor({ title: colorTitle, value: '' }, colorId);
        setPickers(newPickers);
    }

    useEffect(() => {
        ReactTooltip.rebuild();
    }, [pickers]);

    const handleRemove = (id) => {
        const newPickers = [...pickers].filter((value, index) => {
            return value.id !== id;
        });
        setPickers(newPickers);
        onRemove(id);
    };

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
            <div className={`premium-color-palette-container`}>
                <ReactTooltip place='top' effect="solid" />
                {pickers.map((picker) => (
                    <ColorComponent
                        picker={picker}
                        onChangeComplete={(color, id) => handleChangeColor(color, picker[`id`])}
                        value={colorValues}
                        predefined={true}
                        className={"premium-color-palette-modal"}
                        skipModal={picker.skipModal}
                        resetPalette={true}
                        onColorReset={(color) => handleClickReset(picker[`id`])}
                        isDefault={picker.default}
                        onRemove={handleRemove}
                    />
                ))}
                <div className="premium-add-new-color" onClick={() => addColor()} data-tip={__('Add Color')}>
                    <Icon icon={create} />
                </div>
            </div>
        </div>
    );
};

export default PalettePreview;
