const { __ } = wp.i18n;
import classnames from "classnames";
import ColorComponent from "../color";
import { Icon, create } from '@wordpress/icons';
import ReactTooltip from 'react-tooltip';
import { useEffect } from "@wordpress/element";

const PalettePreview = ({
    renderBefore = () => null,
    pallet,
    onChange,
    onClick,
    className,
    addNewColor,
    handleClickReset,
    onRemove,
    onChangeName,
    canAdd = true
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

    const addColor = () => {
        const lastColorIndex = pallet.custom_colors.length;
        const colorId = `custom-color${lastColorIndex + 1}`;
        const colorTitle = `${__('Custom Color ')}${lastColorIndex + 1}`;
        addNewColor({ name: colorTitle, color: '', slug: colorId });
    }

    useEffect(() => {
        ReactTooltip.rebuild();
    }, [pallet]);

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
                <div className="premium-pallet-colors">
                    {pallet.colors.map((picker) => (
                        <ColorComponent
                            picker={picker}
                            onChangeComplete={(color, id) => handleChangeColor(color, picker[`slug`])}
                            className={"premium-color-palette-modal"}
                            skipModal={picker.skipModal}
                            resetPalette={true}
                            onColorReset={(color) => handleClickReset(picker[`slug`])}
                            isDefault={picker.default}
                            onRemove={() => onRemove(picker[`slug`])}
                            onChangeName={(v) => onChangeName(v, picker[`slug`])}
                        />
                    ))}
                </div>
                {(pallet.custom_colors.length || canAdd) && <p>{__('Custom Color')}</p>}
                {(pallet.custom_colors.length || canAdd) && (
                    <div className="premium-custom-colors">
                        {pallet.custom_colors.map((picker) => (
                            <ColorComponent
                                picker={picker}
                                onChangeComplete={(color, id) => handleChangeColor(color, picker[`slug`])}
                                className={"premium-color-palette-modal"}
                                skipModal={picker.skipModal}
                                resetPalette={true}
                                onColorReset={(color) => handleClickReset(picker[`slug`])}
                                isDefault={picker.default}
                                onRemove={() => onRemove(picker[`slug`])}
                                onChangeName={(v) => onChangeName(v, picker[`slug`])}
                            />
                        ))}
                        {(canAdd && pallet.custom_colors.length || canAdd) && <div className="premium-add-new-color" onClick={() => addColor()} data-tip={__('Add Color')}>
                            <Icon icon={create} />
                        </div>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PalettePreview;
