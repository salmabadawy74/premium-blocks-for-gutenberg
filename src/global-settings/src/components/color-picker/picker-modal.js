import { useMemo, Fragment, useState, useEffect } from "@wordpress/element";
import { ColorPicker } from "@wordpress/components";
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
                    `premium-global-color-picker-modal`,
                    {
                        "premium-option-modal": !inline_modal && appendToBody,
                    },
                    className
                )}
                style={{
                    ...(style ? style : {}),
                }}
                {...wrapperProps}
            >
                {!predefined && (
                    <div className="premium-global-color-picker-top">
                        <ul className="premium-global-color-picker-skins">
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
                                    <div className="premium-tooltip-top">
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
                            <div className={`premium-reset-palette__Wrapper`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        handleColorReset();
                                    }}
                                    className=" premium-btn-reset__color is-secondary is-small"
                                >
                                    {__("Reset", "kemet")}
                                </button>
                                <p className={`premium-reset__description`}>{__(`This will reset the current color to the default one.`, "kemet")}</p>
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
                            <div className={`premium-reset-palette__Wrapper`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        handleColorReset();
                                    }}
                                    className=" premium-btn-reset__color is-secondary is-small"
                                >
                                    {__("Reset", "kemet")}
                                </button>
                                <p className={`premium-reset__description`}>{__(`This will reset the current color to the default one.`, "kemet")}</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </Fragment >
    );
};

export default PickerModal;