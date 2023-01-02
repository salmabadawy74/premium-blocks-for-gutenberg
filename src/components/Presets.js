const { SelectControl } = wp.components;
const { __ } = wp.i18n;
const { useState } = wp.element;
import React from "react";
import classnames from "classnames";

const PBGPresets = (props) => {
    const {
        setAttributes,
        presets,
        presetInputType,
        label,
        className,
        value,
    } = props;

    const [selectedPresetState, setPreset] = useState(value.value);

    const updatePresets = (selectedPreset) => {
        setPreset(selectedPreset);
        setAttributes({ [value.label]: selectedPreset });
        console.log(selectedPreset, "valu", value, "PPPPPP");

        if (presets) {
            presets.map((preset) => {
                if (preset.value) {
                    if (
                        "default" !== selectedPreset &&
                        "default" === preset.value &&
                        preset.attributes
                    ) {
                        preset.attributes.map((presetItem) => {
                            setAttributes({
                                [presetItem.label]: presetItem.value,
                            });
                            return presetItem;
                        });
                    }
                    if (
                        preset.value &&
                        preset.value === selectedPreset &&
                        preset.attributes
                    ) {
                        presets[1]?.attributes?.map((presetItem) => {
                            setAttributes({
                                [presetItem.label]:
                                    presets[0]?.defaultAttributes[
                                        presetItem.label
                                    ]?.default,
                            });
                            return presetItem;
                        });
                        preset.attributes.map((presetItem) => {
                            setAttributes({
                                [presetItem.label]: presetItem.value,
                            });
                            return presetItem;
                        });
                    }
                }
                return preset;
            });
        }
    };

    const presetRadioImageOptions = presets.map((preset) => {
        if (!preset.value) {
            return "";
        }

        const key = preset.value;
        const checked = selectedPresetState === key ? true : false;
        return (
            <div className="premium-presets__wrapper">
                <input
                    key={key}
                    className={classnames("premium-presets-radio-input", {
                        checked: selectedPresetState === key,
                    })}
                    type="radio"
                    value={key}
                    checked={checked}
                    onChange={() => updatePresets(key)}
                    onClick={() => updatePresets(key)}
                    style={{
                        display: "none",
                    }}
                />
                <label
                    htmlFor={key}
                    className="premium-presets-radio-input-label"
                    dangerouslySetInnerHTML={{
                        // eslint-disable-line
                        __html: preset.icon,
                    }}
                    style={{
                        position: "relative",
                        display: "inline-block",
                    }}
                    onClick={() => updatePresets(key)}
                ></label>
                <div className="premium_label__wrapper">
                    <span className="premium_presets__label">
                        {preset.label}
                    </span>
                </div>
            </div>
        );
    });

    const presetDropdown = (
        <SelectControl
            className="premium-presets-dropdown"
            onChange={updatePresets}
            options={presets}
            label={label}
        />
    );

    const presetRadioImage = (
        <>
            <div
                className="premium-presets-radio-image-wrap"
                style={{
                    display: "grid",
                    gridColumnGap: "16px",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridRowGap: "14px",
                }}
            >
                {presetRadioImageOptions}
            </div>
        </>
    );

    return (
        <div
            className={classnames(
                className,
                "premium-presets-main-wrap",
                "components-base-control"
            )}
        >
            {"dropdown" === presetInputType && presetDropdown}
            {"radioImage" === presetInputType && presetRadioImage}
        </div>
    );
};

export default React.memo(PBGPresets);
