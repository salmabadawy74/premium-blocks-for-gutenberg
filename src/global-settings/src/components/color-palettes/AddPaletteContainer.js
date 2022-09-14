import React, { useState } from "react";
import { animated } from "@react-spring/web";
import classnames from "classnames";

const { __ } = wp.i18n;

export default function AddPaletteContainer({
    value,
    handleCloseModal,
    wrapperProps = {},
    handleAddPalette,
}) {
    const [data, setPaletteData] = useState({
        name: "",
        type: "light",
    });

    return (
        <animated.div
            className="premium-option-modal  premium-add-palettes-modal"
            {...wrapperProps}
        >
            <div className={`premium-add-palette-container`}>
                <button
                    className={`button-close-modal`}
                    onClick={(e) => {
                        e.preventDefault();
                        handleCloseModal();
                    }}
                >
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false"><path d="M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"></path></svg>
                </button>
                <div className={`premium-palette-info`}>
                    <div className={`premium-palette-name`}>
                        <p className={`premium-palette-type-label`}>{__("palette name", "kemet")}</p>
                        <input
                            type="text"
                            className={`premium-add-palette-title`}
                            placeholder={__("name your palette", "kemet")}
                            onChange={(e) =>
                                setPaletteData({ ...data, name: e.target.value })
                            }
                        />
                    </div>
                    <div className={`premium-Palette-type-container`}>
                        <p className={`premium-palette-type-label`}>{__("palette type", "kemet")}</p>
                        <div className={`premium-Palette-type-wrapper`}>
                            <span>
                                <input
                                    type="radio"
                                    checked={data.type === "light" ? true : false}
                                    name="type"
                                    onChange={() => setPaletteData({ ...data, type: "light" })}
                                />
                                {__('Light', "kemet")}
                            </span>
                            <span>
                                {" "}
                                <input
                                    type="radio"
                                    checked={data.type === "dark" ? true : false}
                                    name="type"
                                    onChange={() => setPaletteData({ ...data, type: "dark" })}
                                />
                                {__('Dark', "kemet")}
                            </span>
                        </div>
                    </div>
                    <button
                        className=" premium-save-palette"
                        disabled={data.name === ""}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleAddPalette(data);
                        }}
                    >
                        {__('Save Palette', "kemet")}
                    </button>
                </div>
            </div>
        </animated.div>
    );
}
