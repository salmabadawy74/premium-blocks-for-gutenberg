import classnames from "classnames";
import Typed from "typed.js";
import {
    SortableContainer,
    SortableElement,
    arrayMove,
} from "react-sortable-hoc";
import {
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumTypo,
    MultiButtonsControl as ResponsiveRadioControl,
    AdvancedColorControl as AdvancedPopColorControl,
    PremiumShadow,
    Icons,
    WebfontLoader,
    BlockContent,
    AdvancedTabOptions
} from "@pbg/components";
import { typographyCss, generateBlockId, generateCss } from "@pbg/helpers";
const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { useEffect, Fragment, useRef } = wp.element;
const { InspectorControls, useBlockProps } = wp.blockEditor;
const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components;

const SortableItem = SortableElement(
    ({ edit, removeItem, newIndex, value, changeFancyValue, items }) => (
        <span className="premium-repeater-row-wrapper" key={newIndex}>
            <span className="premium-repeater-row-inner">
                <span className="premium-repeater-row-tools">
                    <span
                        className="premium-repeater-item-title"
                        onClick={() => edit(newIndex)}
                    >
                        {value.title}
                    </span>

                    {items.length != 1 ? (
                        <div className="premium-repeater-row-item-remove">
                            <button
                                className="premium-repeater-item-remove is-tertiary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    removeItem(newIndex, value);
                                }}
                            >
                                x
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </span>
                <div
                    className={`premium-repeater-row-controls premium-repeater-fancy ${value.edit ? "editable" : ""
                        }`}
                >
                    <TextControl
                        label={__(
                            "Fancy String",
                            "premium-blocks-for-gutenberg"
                        )}
                        value={value.title}
                        onChange={(newText) =>
                            changeFancyValue(newText, newIndex)
                        }
                    />
                </div>
            </span>
        </span>
    )
);

const SortableList = SortableContainer(
    ({ items, removeItem, edit, changeFancyValue }) => {
        return (
            <span className="premium-repeater-rows">
                {" "}
                {items.map((value, index) => (
                    <SortableItem
                        key={`item-${value}`}
                        index={index}
                        newIndex={index}
                        value={value}
                        removeItem={removeItem}
                        edit={edit}
                        changeFancyValue={changeFancyValue}
                        items={items}
                    />
                ))}{" "}
            </span>
        );
    }
);

function Edit(props) {
    const { setAttributes, className, clientId } = props;
    const el = React.createRef();
    const typed = React.useRef(null);

    useEffect(() => {
        setAttributes({
            blockId: "premium-fancy-text-" + generateBlockId(clientId),
        });
        setAttributes({ classMigrate: true });
        renderFancyText();
    }, []);

    useEffect(() => {
        const { effect } = props.attributes;
        if (effect == "typing") {
            typed.current.destroy();
        }
        renderFancyText();
    }, [
        props.attributes.effect == "typing",
        props.attributes.repeaterFancyText,
    ]);

    const renderFancyText = () => {
        const {
            repeaterFancyText,
            loop,
            cursorShow,
            cursorMark,
            typeSpeed,
            backSpeed,
            startdelay,
            backdelay,
            effect,
        } = props.attributes;

        if (!repeaterFancyText) return null;

        let txt = repeaterFancyText.map((item) => {
            return item.title;
        });

        if (effect === "typing") {
            const options = {
                strings: txt,
                typeSpeed: typeSpeed,
                backSpeed: backSpeed,
                backDelay: backdelay,
                startDelay: startdelay,
                loop: loop,
                showCursor: cursorShow,
                cursorChar: cursorMark,
            };
            typed.current = new Typed(el.current, options);
        }
    };

    // componentDidUpdate() {
    //     const { effect } = props.attributes;
    //     if (effect == "typing" && this.typed != undefined) {
    //         this.typed.destroy();
    //     }
    //     this.renderFancyText();
    // }

    // componentWillUnmount() {
    //     const { effect } = props.attributes;
    //     effect === "typing" ? this.typed.destroy() : "";
    // }

    const {
        blockId,
        prefix,
        suffix,
        repeaterFancyText,
        effect,
        loop,
        cursorShow,
        cursorMark,
        typeSpeed,
        backdelay,
        startdelay,
        backSpeed,
        animationSpeed,
        pauseTime,
        hoverPause,
        hideDesktop,
        hideTablet,
        hideMobile,
        fancyStyles,
        PreStyles,
        prefixTypography,
        fancyTextTypography,
        fancyTextShadow,
        fancyContentAlign,
        fancyTextAlign,
    } = props.attributes;

    const EFFECT = [
        {
            label: __("Typing", "premium-blocks-for-gutenberg"),
            value: "typing",
        },
        {
            label: __("Slide", "premium-blocks-for-gutenberg"),
            value: "slide",
        },
    ];

    const changeFancyValue = (newText, newIndex) => {
        setAttributes({
            repeaterFancyText: onRepeaterChange("title", newText, newIndex),
        });
    };

    const onSortEndSingle = ({ oldIndex, newIndex }) => {
        let arrayItem = repeaterFancyText.map((cont) => cont);
        const sortedArray = arrayMove(arrayItem, oldIndex, newIndex);
        setAttributes({ repeaterFancyText: sortedArray });
    };

    const shouldCancelStart = (e) => {
        // Prevent sorting from being triggered if target is input or button
        if (
            ["button", "div", "input", "textarea", "i"].indexOf(
                e.target.tagName.toLowerCase()
            ) !== -1
        ) {
            return true; // Return true to cancel sorting
        }
    };

    const onRepeaterChange = (attr, value, index) => {
        return repeaterFancyText.map(function (item, currIndex) {
            if (index == currIndex) {
                item[attr] = value;
            }
            return item;
        });
    };

    const edit = (index) => {
        return repeaterFancyText.map((item, i) => {
            if (index == i) {
                setAttributes({
                    repeaterFancyText: onRepeaterChange(
                        "edit",
                        item.edit ? false : true,
                        index
                    ),
                });
            } else {
                setAttributes({
                    repeaterFancyText: onRepeaterChange("edit", false, i),
                });
            }
        });
    };

    const removeItem = (index) => {
        let array = repeaterFancyText
            .map((cont) => {
                return cont;
            })
            .filter((f, i) => i != index);
        setAttributes({ repeaterFancyText: array });
    };

    const addNewFancyText = () => {
        setAttributes({
            repeaterFancyText: repeaterFancyText.concat([
                {
                    title: __("Title", "premium-blocks-for-gutenberg"),
                    edit: true,
                },
            ]),
        });
    };

    const saveFancyStyle = (value) => {
        const newUpdate = fancyStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ fancyStyles: newUpdate });
    };

    const savePrefixStyle = (value) => {
        const newUpdate = PreStyles.map((item, indexx) => {
            if (0 === indexx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ PreStyles: newUpdate });
    };

    const loadStyles = () => {
        const styles = {};
        styles[` .${blockId} .premium-fancy-text-title`] = {
            color: `${fancyStyles[0].fancyTextColor} !important`,
            "background-color": `${fancyStyles[0].fancyTextBGColor} !important`,
        };
        styles[` .${blockId} .typed-cursor`] = {
            color: `${fancyStyles[0].cursorColor} !important`,
            "font-size": `${fancyTextTypography.fontSize[props.deviceType]}${fancyTextTypography.fontSize.unit
                } !important`,
        };
        styles[` .${blockId} .premium-fancy-text-suffix-prefix`] = {
            color: `${PreStyles[0].textColor} !important`,
            "background-color": `${PreStyles[0].textBGColor} !important`,
        };
        return generateCss(styles);
    };

    let loadFancyGoogleFonts;
    let loadPrefixGoogleFonts;
    if (fancyTextTypography.fontFamily !== "Default") {
        const gconfig = {
            google: {
                families: [fancyTextTypography?.fontFamily],
            },
        };
        loadFancyGoogleFonts = <WebfontLoader config={gconfig}></WebfontLoader>;
    }

    if (prefixTypography.fontFamily !== "Default") {
        const gconfig = {
            google: {
                families: [prefixTypography?.fontFamily],
            },
        };
        loadPrefixGoogleFonts = (
            <WebfontLoader config={gconfig}></WebfontLoader>
        );
    }

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__(
                                "General Settings",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <TextControl
                                label={__(
                                    "Prefix Text",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={prefix}
                                onChange={(newText) =>
                                    setAttributes({ prefix: newText })
                                }
                            />
                            <Fragment>
                                <div className="premium-fancy-text-control-content">
                                    <label>
                                        <span className="premium-fancy-text-control-title">
                                            {" "}
                                            Fancy Strings{" "}
                                        </span>
                                    </label>
                                    <SortableList
                                        items={repeaterFancyText}
                                        onSortEnd={(oldIndex, newIndex) =>
                                            onSortEndSingle(oldIndex, newIndex)
                                        }
                                        removeItem={(value) =>
                                            removeItem(value)
                                        }
                                        edit={(value) => edit(value)}
                                        shouldCancelStart={shouldCancelStart}
                                        changeFancyValue={changeFancyValue}
                                    />
                                    <div className="premium-repeater-btn__wrap">
                                        <button
                                            className={"premium-repeater-btn"}
                                            onClick={() => addNewFancyText()}
                                        >
                                            <i className="dashicons dashicons-plus premium-repeater__icon" />
                                            <span>
                                                {__(
                                                    "Add New Item",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <br />
                            </Fragment>
                            <TextControl
                                label={__(
                                    "Suffix Text",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={suffix}
                                onChange={(newText) =>
                                    setAttributes({ suffix: newText })
                                }
                            />
                            <ResponsiveRadioControl
                                label={__(
                                    "Align Content",
                                    "premium-blocks-for-gutenberg"
                                )}
                                choices={[
                                    {
                                        value: "left",
                                        label: __(
                                            "Left",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: Icons.alignLeft,
                                    },
                                    {
                                        value: "center",
                                        label: __(
                                            "Center",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: Icons.alignCenter,
                                    },
                                    {
                                        value: "right",
                                        label: __(
                                            "Right",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: Icons.alignRight,
                                    },
                                ]}
                                value={fancyContentAlign}
                                onChange={(newValue) =>
                                    setAttributes({
                                        fancyContentAlign: newValue,
                                    })
                                }
                                showIcons={true}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__(
                                "Advanced Settings",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__(
                                    "Effect",
                                    "premium-blocks-for-gutenberg"
                                )}
                                options={EFFECT}
                                value={effect}
                                onChange={(newValue) =>
                                    setAttributes({ effect: newValue })
                                }
                            />
                            {"typing" === effect ? (
                                <Fragment>
                                    <TextControl
                                        label={__(
                                            "Type Speed",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        type="Number"
                                        value={typeSpeed}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                typeSpeed: parseInt(newValue),
                                            })
                                        }
                                        help={__(
                                            "Set typing effect speed in milliseconds.",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    />
                                    <TextControl
                                        label={__(
                                            "Back Speed",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        type="Number"
                                        value={backSpeed}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                backSpeed: parseInt(newValue),
                                            })
                                        }
                                        help={__(
                                            "Set a speed for backspace effect in milliseconds.",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    />
                                    <TextControl
                                        label={__(
                                            "Start Delay",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        type="Number"
                                        value={startdelay}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                startdelay: parseInt(newValue),
                                            })
                                        }
                                        help={__(
                                            "If you set it on 5000 milliseconds, the first word/string will appear after 5 seconds.",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    />
                                    <TextControl
                                        label={__(
                                            "Back Delay",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        type="Number"
                                        value={backdelay}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                backdelay: parseInt(newValue),
                                            })
                                        }
                                        help={__(
                                            "If you set it on 5000 milliseconds, the word/string will remain visible for 5 seconds before backspace effect.",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    />
                                    <ToggleControl
                                        label={__(
                                            "Loop",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        checked={loop}
                                        onChange={(newCheck) =>
                                            setAttributes({ loop: newCheck })
                                        }
                                    />
                                    <ToggleControl
                                        label={__(
                                            "Show Cursor",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        checked={cursorShow}
                                        onChange={(newCheck) =>
                                            setAttributes({
                                                cursorShow: newCheck,
                                            })
                                        }
                                    />
                                    {cursorShow && (
                                        <TextControl
                                            label={__(
                                                "Cursor Mark",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            value={cursorMark}
                                            onChange={(newCheck) =>
                                                setAttributes({
                                                    cursorMark: newCheck,
                                                })
                                            }
                                        />
                                    )}
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <p className="premium-notice">
                                        {__(
                                            "Please note that Slide effect works only on frontend",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    </p>
                                    <TextControl
                                        label={__(
                                            "Animation Speed",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={animationSpeed}
                                        type="Number"
                                        onChange={(newValue) =>
                                            setAttributes({
                                                animationSpeed:
                                                    parseInt(newValue),
                                            })
                                        }
                                        help={__(
                                            "Set a duration value in milliseconds for slide effect.",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    />
                                    <TextControl
                                        label={__(
                                            "Pause Time",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={pauseTime}
                                        type="Number"
                                        onChange={(newValue) =>
                                            setAttributes({
                                                pauseTime: parseInt(newValue),
                                            })
                                        }
                                        help={__(
                                            "How long should the word/string stay visible? Set a value in milliseconds.",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    />
                                    <ToggleControl
                                        label={__(
                                            "Pause on Hover",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        checked={hoverPause}
                                        onChange={(newCheck) =>
                                            setAttributes({
                                                hoverPause: newCheck,
                                            })
                                        }
                                        help={__(
                                            "If you enabled this option, the slide will be paused when mouseover.",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    />
                                    <ResponsiveRadioControl
                                        label={__(
                                            "Align Content",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        choices={[
                                            {
                                                value: "left",
                                                label: __(
                                                    "Left",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                                icon: Icons.alignLeft,
                                            },
                                            {
                                                value: "center",
                                                label: __(
                                                    "Center",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                                icon: Icons.alignCenter,
                                            },
                                            {
                                                value: "right",
                                                label: __(
                                                    "Right",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                                icon: Icons.alignRight,
                                            },
                                        ]}
                                        value={fancyTextAlign}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                fancyTextAlign: newValue,
                                            })
                                        }
                                        showIcons={true}
                                    />
                                </Fragment>
                            )}
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__(
                                "Fancy Text Style",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <PremiumTypo
                                value={fancyTextTypography}
                                onChange={(newValue) =>
                                    setAttributes({
                                        fancyTextTypography: newValue,
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={fancyStyles[0].fancyTextColor}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    saveFancyStyle({ fancyTextColor: newValue })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Background Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={fancyStyles[0].fancyTextBGColor}
                                colorDefault={""}
                                onColorChange={(newvalue) =>
                                    saveFancyStyle({
                                        fancyTextBGColor: newvalue,
                                    })
                                }
                            />
                            {effect == "typing" && cursorShow && (
                                <AdvancedPopColorControl
                                    label={__(
                                        "Cursor Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={fancyStyles[0].cursorColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        saveFancyStyle({
                                            cursorColor: newValue,
                                        })
                                    }
                                />
                            )}
                            <PremiumShadow
                                label={__(
                                    "Text Shadow",
                                    "premium-blocks-for-gutenberg"
                                )}
                                boxShadow={false}
                                value={fancyTextShadow}
                                onChange={(value) =>
                                    setAttributes({ fancyTextShadow: value })
                                }
                            />
                        </PanelBody>
                        <PanelBody
                            title={__(
                                "Prefix & Suffix Style",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumTypo
                                value={prefixTypography}
                                onChange={(newValue) =>
                                    setAttributes({
                                        prefixTypography: newValue,
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={PreStyles[0].textColor}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    savePrefixStyle({ textColor: newValue })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    `Background Color`,
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={PreStyles[0].textBGColor}
                                colorDefault={``}
                                onColorChange={(newvalue) =>
                                    savePrefixStyle({ textBGColor: newvalue })
                                }
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"advance"}>
                        <PremiumResponsiveTabs
                            Desktop={hideDesktop}
                            Tablet={hideTablet}
                            Mobile={hideMobile}
                            onChangeDesktop={(value) =>
                                setAttributes({
                                    hideDesktop: value
                                        ? " premium-desktop-hidden"
                                        : "",
                                })
                            }
                            onChangeTablet={(value) =>
                                setAttributes({
                                    hideTablet: value
                                        ? " premium-tablet-hidden"
                                        : "",
                                })
                            }
                            onChangeMobile={(value) =>
                                setAttributes({
                                    hideMobile: value
                                        ? " premium-mobile-hidden"
                                        : "",
                                })
                            }
                        />
                        <AdvancedTabOptions {...props} />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>

            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-fancy-text ${blockId}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{
                    textAlign: fancyContentAlign[props.deviceType],
                }}
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: loadStyles(),
                    }}
                />
                <BlockContent blockProps={props}>
                    {effect === "typing" ? (
                        <h4
                            id={`${blockId}`}
                            className={`premium-fancy-text`}
                            data-effect={`${effect}`}
                            data-strings={`${repeaterFancyText.map((item) => {
                                return item.title;
                            })}`}
                            data-typespeed={`${typeSpeed}`}
                            data-backspeed={`${backSpeed}`}
                            data-startdelay={`${startdelay}`}
                            data-backdelay={`${backdelay}`}
                            data-loop={`${loop}`}
                            data-cursorshow={`${cursorShow}`}
                            data-cursormark={`${cursorMark}`}
                            style={{
                                textAlign: fancyContentAlign[props.deviceType],
                            }}
                        >
                            <span
                                className={`premium-fancy-text-suffix-prefix premium-fancy-text-prefix-text`}
                                style={{
                                    ...typographyCss(
                                        prefixTypography,
                                        props.deviceType
                                    ),
                                }}
                            >
                                {prefix}{" "}
                            </span>
                            <span
                                className={`premium-fancy-text-title premium-fancy-text-title-type`}
                                ref={el}
                                style={{
                                    ...typographyCss(
                                        fancyTextTypography,
                                        props.deviceType
                                    ),
                                    textShadow: `${fancyTextShadow.horizontal}px ${fancyTextShadow.vertical}px ${fancyTextShadow.blur}px ${fancyTextShadow.color}`,
                                }}
                            >
                                {" "}
                            </span>
                            <span
                                className={`premium-fancy-text-suffix-prefix premium-fancy-text-suffix-text`}
                                style={{
                                    ...typographyCss(
                                        prefixTypography,
                                        props.deviceType
                                    ),
                                }}
                            >
                                {" "}
                                {suffix}
                            </span>
                        </h4>
                    ) : (
                        <h4
                            id={`${blockId}`}
                            className={`premium-fancy-text premium-fancy-slide`}
                            data-effect={`${effect}`}
                            data-strings={`${repeaterFancyText.map((item) => {
                                return item.title;
                            })}`}
                            data-animationspeed={`${animationSpeed}`}
                            data-pausetime={`${pauseTime}`}
                            data-hoverpause={`${hoverPause}`}
                        >
                            <span
                                className={`premium-fancy-text-suffix-prefix premium-fancy-text-prefix-text`}
                                style={{
                                    ...typographyCss(
                                        prefixTypography,
                                        props.deviceType
                                    ),
                                }}
                            >
                                {prefix}{" "}
                            </span>
                            <div
                                className={`premium-fancy-text-title premium-fancy-text-title-slide`}
                                style={{
                                    textAlign: fancyTextAlign[props.deviceType],
                                }}
                            >
                                <ul
                                    className={`premium-fancy-text-title-slide-list`}
                                >
                                    {repeaterFancyText.map((item) => {
                                        return (
                                            <li
                                                style={{
                                                    ...typographyCss(
                                                        fancyTextTypography,
                                                        props.deviceType
                                                    ),
                                                    textShadow: `${fancyTextShadow.horizontal}px ${fancyTextShadow.vertical}px ${fancyTextShadow.blur}px ${fancyTextShadow.color}`,
                                                }}
                                            >
                                                {item.title}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <span
                                className={`premium-fancy-text-suffix-prefix premium-fancy-text-suffix-text`}
                                style={{
                                    ...typographyCss(
                                        prefixTypography,
                                        props.deviceType
                                    ),
                                }}
                            >
                                {" "}
                                {suffix}
                            </span>
                        </h4>
                    )}
                </BlockContent>
                {loadFancyGoogleFonts}
                {loadPrefixGoogleFonts}
            </div>
        </Fragment>
    );
}

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } =
        select("core/edit-post");
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    return {
        deviceType: deviceType,
    };
})(Edit);
