const { useMemo, Fragment, useState, useEffect } = wp.element;
const { ColorPicker } = wp.components;
import classnames from "classnames";
const { __ } = wp.i18n;

const PickerModal = ({
    el,
    value,
    picker,
    onChange,
    style,
    wrapperProps = {},
    inline_modal,
    appendToBody,
    predefined,
    className,
    resetPalette,
    onColorReset,
}) => {
    const getValueForPicker = useMemo(() => {
        if ((value || "").indexOf("var") > -1) {
            return {
                key: "var" + value,
                color: getComputedStyle(document.documentElement)
                    .getPropertyValue(value.replace(/var\(/, "").replace(/\)/, ""))
                    .trim()
                    .replace(/\s/g, ""),
            };
        }
        return { key: "color", color: value };
    }, [value, picker]);
    const [refresh, setRefresh] = useState(false);
    let valueToCheck = value;
    const handletoppart = (colorValue) => {
        if (refresh) {
            setRefresh(false);
        } else {
            setRefresh(true);
        }
        onChange(colorValue);
    };

    useEffect(() => {
        onChange;
    }, [value]);

    const handleColorReset = () => {
        if (refresh === true) {
            setRefresh(false);
        } else {
            setRefresh(true);
        }
        onColorReset();
    };
    return (
        <Fragment>
            <div
                tabIndex="0"
                className={classnames(
                    `kmt-color-picker-modal`,
                    {
                        "kmt-option-modal": !inline_modal && appendToBody,
                    },
                    className
                )}
                style={{
                    ...(style ? style : {}),
                }}
                {...wrapperProps}
            >
                {!predefined && (
                    <div className="kmt-color-picker-top">
                        <ul className="kmt-color-picker-skins">
                            {[
                                "paletteColor1",
                                "paletteColor2",
                                "paletteColor3",
                                "paletteColor4",
                                "paletteColor5",
                                "paletteColor6",
                                "paletteColor7",
                            ].map((color, index) => (
                                <li
                                    key={color}
                                    style={{
                                        background: `var(--${color})`,
                                    }}
                                    className={classnames({
                                        active: valueToCheck === `var(--${color})`,
                                    })}
                                    onClick={() => handletoppart(`var(--${color})`)}
                                >
                                    <div className="kmt-tooltip-top">
                                        {
                                            {
                                                paletteColor1: "Color 1",
                                                paletteColor2: "Color 2",
                                                paletteColor3: "Color 3",
                                                paletteColor4: "Color 4",
                                                paletteColor5: "Color 5",
                                                paletteColor6: "Color 6",
                                                paletteColor7: "Color 7",
                                            }[color]
                                        }
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {refresh && (
                    <>
                        <ColorPicker
                            color={getValueForPicker.color}
                            onChangeComplete={(color) => onChange(color)}
                        />
                        {resetPalette && (
                            <div className={`kmt-reset-palette__Wrapper`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        handleColorReset();
                                    }}
                                    className=" kmt-btn-reset__color is-secondary is-small"
                                >
                                    {__("Reset", "kemet")}
                                </button>
                                <p className={`kmt-reset__description`}>{__(`This will reset the current color to the default one.`, "kemet")}</p>
                            </div>
                        )}
                    </>
                )}
                {!refresh && (
                    <>
                        <ColorPicker
                            color={getValueForPicker.color}
                            onChangeComplete={(color) => onChange(color)}
                        />
                        {resetPalette && (
                            <div className={`kmt-reset-palette__Wrapper`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        handleColorReset();
                                    }}
                                    className=" kmt-btn-reset__color is-secondary is-small"
                                >
                                    {__("Reset", "kemet")}
                                </button>
                                <p className={`kmt-reset__description`}>{__(`This will reset the current color to the default one.`, "kemet")}</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </Fragment >
    );
};

export default PickerModal;