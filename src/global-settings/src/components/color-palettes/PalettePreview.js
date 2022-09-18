const { __ } = wp.i18n;
import classnames from "classnames";
import ColorComponent from "../color";
import { Icon, create } from '@wordpress/icons';
import ReactTooltip from 'react-tooltip';
import { useContext, useEffect, useState } from "@wordpress/element";
import SettingsContext from "../../store/settings-store";

const PalettePreview = ({
    renderBefore = () => null,
    value,
    onChange,
    onClick,
    className,
    addNewColor,
    handleClickReset,
    onRemove,
    onChangeName
}) => {
    const { colorPallet } = useContext(SettingsContext);
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

    const findColor = (id) => {
        return currentPalette.find(color => color.slug === id);
    };

    const getColor = (id) => {
        return findColor(id)?.color;
    };

    // const pickers = currentPalette.map((palletColors) => {
    //     return {
    //         title: palletColors.name,
    //         id: palletColors.slug,
    //         skipModal: palletColors.skipModal,
    //         default: palletColors.default,
    //     };
    // });

    const addColor = () => {
        // const lastColorIndex = Object.keys(pickers).length;
        // const colorId = `color${lastColorIndex + 1}`;
        // const colorTitle = `${__('Custom Color ')}${lastColorIndex + 1}`;
        // addNewColor({ name: colorTitle, color: '', slug: colorId, type: colorPallet });
    }

    useEffect(() => {
        ReactTooltip.rebuild();
    }, [value]);

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
                {value.map((picker) => (
                    <ColorComponent
                        picker={picker}
                        onChangeComplete={(color, id) => handleChangeColor(color, picker[`id`])}
                        className={"premium-color-palette-modal"}
                        skipModal={picker.skipModal}
                        resetPalette={true}
                        onColorReset={(color) => handleClickReset(picker[`id`])}
                        isDefault={picker.default}
                        onRemove={() => onRemove(picker[`id`])}
                        onChangeName={(v) => onChangeName(v, picker[`id`])}
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
