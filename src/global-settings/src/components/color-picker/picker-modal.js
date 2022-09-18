import { useMemo, Fragment, useState, useEffect } from "@wordpress/element";
import { ColorPicker } from "@wordpress/components";
import classnames from "classnames";
const { __ } = wp.i18n;

const PickerModal = ({
    el,
    picker,
    onChange,
    style,
    wrapperProps = {},
    inline_modal,
    appendToBody,
    className,
    resetPalette,
    onColorReset,
    onChangeName
}) => {
    const getValueForPicker = useMemo(() => {
        if ((picker.color || "").indexOf("var") > -1) {
            return {
                key: "var" + picker.color,
                color: getComputedStyle(document.documentElement)
                    .getPropertyValue(picker.color.replace(/var\(/, "").replace(/\)/, ""))
                    .trim()
                    .replace(/\s/g, ""),
            };
        }

        return { key: "color", color: picker.color };
    }, [picker]);

    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        onChange;
    }, [picker]);
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
                {refresh && (
                    <>
                        <ColorPicker
                            color={getValueForPicker.color}
                            onChangeComplete={(color) => onChange(color)}
                        />
                        {picker.name && (
                            <div className="premium-color-title">
                                <label>{__('Name')}:</label>
                                <input type={'text'} value={picker.name} onChange={(e) => onChangeName(e.target.value)} />
                            </div>
                        )}
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
                        {picker.name && (
                            <div className="premium-color-title">
                                <label>{__('Name')}:</label>
                                <input type={'text'} value={picker.name} onChange={(e) => onChangeName(e.target.value)} />
                            </div>
                        )}
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