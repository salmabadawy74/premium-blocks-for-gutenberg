const { SelectControl } = wp.components;
const { __ } = wp.i18n;
const { useState } = wp.element;
import React, { useLayoutEffect } from "react";
import classnames from "classnames";

const UAGPresets = (props) => {
    // Add and remove the CSS on the drop and remove of the component.

    const { setAttributes, presets, presetInputType, label, className } = props;
    console.log(presets, "PPPPPP");
    const resetAttributes = [];

    const [selectedPresetState, setPreset] = useState("");

    const updatePresets = (selectedPreset) => {
        setPreset(selectedPreset);
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
            <>
                <input
                    key={key}
                    className="uag-presets-radio-input"
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
                    className="uag-presets-radio-input-label"
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
            </>
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

UAGPresets.defaultProps = {
    presetInputType: "dropdown",
    label: __("Select Preset", "ultimate-addons-for-gutenberg"),
};

export default React.memo(UAGPresets);
