import classnames from "classnames";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import {
    generateBlockId,
    generateCss,
    typographyCss,
    borderCss,
    paddingCss,
    marginCss,
} from "@pbg/helpers";
import {
    InspectorTabs,
    InspectorTab,
    Icons,
    PremiumBorder,
    PremiumResponsiveTabs,
    MultiButtonsControl,
    ResponsiveRangeControl,
    AdvancedColorControl as AdvancedPopColorControl,
    SpacingComponent as SpacingControl,
    PremiumShadow,
    WebfontLoader,
    PremiumTypo,
    SpacingComponent,
    InsideTabs,
    InsideTab,
    iconsList,
} from "@pbg/components";

const { __ } = wp.i18n;

const { PanelBody, SelectControl, ToggleControl } = wp.components;
const { Fragment, useEffect } = wp.element;
const { InspectorControls, RichText, URLInput, useBlockProps } = wp.blockEditor;
const { withSelect } = wp.data;

function Edit(props) {
    const { setAttributes, className, clientId } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-button-" + generateBlockId(clientId),
        });
        setAttributes({ classMigrate: true });
    }, []);

    const {
        btnText,
        btnSize,
        btnAlign,
        btnLink,
        btnTarget,
        effect,
        effectDir,
        slideColor,
        hideDesktop,
        hideTablet,
        hideMobile,
        border,
        btnStyles,
        typography,
        textShadow,
        boxShadow,
        padding,
        blockId,
        showIcon,
        icon,
        iconPosition,
        iconSize,
        iconMargin,
        iconColor,
        iconHoverColor,
        iconShadow,
    } = props.attributes;

    const SIZE = [
        {
            value: "sm",
            label: __("Small", "premium-blocks-for-gutenberg"),
        },
        {
            value: "md",
            label: __("Medium", "premium-blocks-for-gutenberg"),
        },
        {
            value: "lg",
            label: __("Large", "premium-blocks-for-gutenberg"),
        },
        {
            value: "block",
            label: __("Block", "premium-blocks-for-gutenberg"),
        },
    ];

    const DIRECTION = [
        {
            value: "top",
            label: __("Top to Bottom", "premium-blocks-for-gutenberg"),
        },
        {
            value: "bottom",
            label: __("Bottom to Top", "premium-blocks-for-gutenberg"),
        },
        {
            value: "left",
            label: __("Left to Right", "premium-blocks-for-gutenberg"),
        },
        {
            value: "right",
            label: __("Right to Left", "premium-blocks-for-gutenberg"),
        },
    ];

    const SHUTTER = [
        {
            value: "shutouthor",
            label: __("Shutter out Horizontal", "premium-blocks-for-gutenberg"),
        },
        {
            value: "shutoutver",
            label: __("Shutter out Vertical", "premium-blocks-for-gutenberg"),
        },
        {
            value: "scshutoutver",
            label: __(
                "Scaled Shutter Vertical",
                "premium-blocks-for-gutenberg"
            ),
        },
        {
            value: "scshutouthor",
            label: __(
                "Scaled Shutter Horizontal",
                "premium-blocks-for-gutenberg"
            ),
        },
        {
            value: "dshutinver",
            label: __("Tilted Left", "premium-blocks-for-gutenberg"),
        },
        {
            value: "dshutinhor",
            label: __("Tilted Right", "premium-blocks-for-gutenberg"),
        },
    ];

    const RADIAL = [
        {
            value: "radialin",
            label: __("Radial In", "premium-blocks-for-gutenberg"),
        },
        {
            value: "radialout",
            label: __("Radial Out", "premium-blocks-for-gutenberg"),
        },
        {
            value: "rectin",
            label: __("Rectangle In", "premium-blocks-for-gutenberg"),
        },
        {
            value: "rectout",
            label: __("Rectangle Out", "premium-blocks-for-gutenberg"),
        },
    ];

    const EFFECTS = [
        {
            value: "none",
            label: __("None", "premium-blocks-for-gutenberg"),
        },
        {
            value: "slide",
            label: __("Slide", "premium-blocks-for-gutenberg"),
        },
        {
            value: "shutter",
            label: __("Shutter", "premium-blocks-for-gutenberg"),
        },
        {
            value: "radial",
            label: __("Radial", "premium-blocks-for-gutenberg"),
        },
    ];

    const onChangeHover = (newValue) => {
        props.setAttributes({ effect: newValue });
        switch (newValue) {
            case "slide":
                props.setAttributes({ effectDir: "top" });
                break;
            case "shutter":
                props.setAttributes({ effectDir: "shutouthor" });
                break;
            case "radial":
                props.setAttributes({ effectDir: "radialin" });
                break;
        }
    };

    let loadBtnGoogleFonts;
    if (typography?.fontFamily !== "Default") {
        const btnconfig = {
            google: {
                families: [typography.fontFamily],
            },
        };
        loadBtnGoogleFonts = <WebfontLoader config={btnconfig}></WebfontLoader>;
    }

    const saveBtnStyles = (value) => {
        const newUpdate = btnStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            btnStyles: newUpdate,
        });
    };

    const loadStyles = () => {
        const styles = {};

        styles[`.${blockId}.premium-button__wrap:hover .premium-button-icon`] =
            {
                color: `${iconHoverColor}!important`,
            };
        styles[`.${blockId}.premium-button__wrap:hover .premium-button`] = {
            "background-color": `${btnStyles[0].backHoverColor}!important`,
            color: `${btnStyles[0].textHoverColor}!important`,
            "border-color": `${btnStyles[0].borderHoverColor}!important`,
        };
        styles[`.${blockId}.premium-button__wrap:hover .premium-button div`] = {
            color: `${btnStyles[0].textHoverColor}!important`,
        };
        styles[
            `.${blockId}.premium-button__slide .premium-button::before, .${blockId}.premium-button__shutter .premium-button::before, .${blockId}.premium-button__radial .premium-button::before`
        ] = {
            "background-color": `${slideColor}`,
        };

        return generateCss(styles);
    };

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__(
                                "General",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <SelectControl
                                options={EFFECTS}
                                label={__(
                                    "Hover Effect",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={effect}
                                onChange={onChangeHover}
                            />
                            {"slide" === effect && (
                                <SelectControl
                                    options={DIRECTION}
                                    label={__(
                                        "Direction",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={effectDir}
                                    onChange={(newValue) =>
                                        setAttributes({ effectDir: newValue })
                                    }
                                />
                            )}
                            {"shutter" === effect && (
                                <SelectControl
                                    options={SHUTTER}
                                    label={__(
                                        "Shutter Direction",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={effectDir}
                                    onChange={(newValue) =>
                                        setAttributes({ effectDir: newValue })
                                    }
                                />
                            )}
                            {"radial" === effect && (
                                <SelectControl
                                    options={RADIAL}
                                    label={__(
                                        "Style",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={effectDir}
                                    onChange={(newValue) =>
                                        setAttributes({ effectDir: newValue })
                                    }
                                />
                            )}
                            <SelectControl
                                options={SIZE}
                                label={__(
                                    "Button Size",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={btnSize}
                                onChange={(newSize) =>
                                    setAttributes({ btnSize: newSize })
                                }
                            />
                            <ToggleControl
                                label={__(
                                    "Icon",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={showIcon}
                                onChange={(newValue) =>
                                    setAttributes({ showIcon: newValue })
                                }
                            />
                            {showIcon && (
                                <Fragment>
                                    <FontIconPicker
                                        icons={iconsList}
                                        onChange={(newIcon) =>
                                            setAttributes({ icon: newIcon })
                                        }
                                        value={icon}
                                        isMulti={false}
                                        noSelectedPlaceholder={__(
                                            "Select Icon",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    />
                                    <SelectControl
                                        label={__(
                                            "Icon Position",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={iconPosition}
                                        options={[
                                            {
                                                label: __(
                                                    "Before",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                                value: "before",
                                            },
                                            {
                                                label: __(
                                                    "After",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                                value: "after",
                                            },
                                        ]}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                iconPosition: newValue,
                                            })
                                        }
                                    />
                                </Fragment>
                            )}
                            <ToggleControl
                                label={__(
                                    "Open link in new tab",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={btnTarget}
                                onChange={(newValue) =>
                                    setAttributes({ btnTarget: newValue })
                                }
                            />
                            {"block" != btnSize && (
                                <MultiButtonsControl
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
                                    value={btnAlign}
                                    onChange={(newAlign) =>
                                        setAttributes({ btnAlign: newAlign })
                                    }
                                    label={__(
                                        "Align Content",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    showIcons={true}
                                />
                            )}
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__("Button", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <PremiumTypo
                                value={typography}
                                onChange={(newValue) =>
                                    setAttributes({ typography: newValue })
                                }
                            />
                            <InsideTabs>
                                <InsideTab
                                    tabTitle={__(
                                        "Normal",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                >
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Text Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={btnStyles[0].textColor}
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                saveBtnStyles({
                                                    textColor: newValue,
                                                })
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Background Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={btnStyles[0].backColor}
                                            colorDefault={""}
                                            onColorChange={(newvalue) =>
                                                saveBtnStyles({
                                                    backColor: newvalue,
                                                })
                                            }
                                        />
                                    </Fragment>
                                </InsideTab>
                                <InsideTab
                                    tabTitle={__(
                                        "Hover",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                >
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Text Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={
                                                btnStyles[0].textHoverColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                saveBtnStyles({
                                                    textHoverColor: newValue,
                                                })
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={
                                                "radial" !== effect
                                                    ? __(
                                                          "Background Color",
                                                          "premium-blocks-for-gutenberg"
                                                      )
                                                    : __(
                                                          "Background Color",
                                                          "premium-blocks-for-gutenberg"
                                                      )
                                            }
                                            colorValue={
                                                btnStyles[0].backHoverColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(newValue) => {
                                                saveBtnStyles({
                                                    backHoverColor: newValue,
                                                });
                                                setAttributes({
                                                    slideColor: newValue,
                                                });
                                            }}
                                        />
                                        {border.borderType != "none" && (
                                            <AdvancedPopColorControl
                                                label={__(
                                                    "Border Color",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                colorValue={
                                                    btnStyles[0]
                                                        .borderHoverColor
                                                }
                                                colorDefault={""}
                                                onColorChange={(newValue) =>
                                                    saveBtnStyles({
                                                        borderHoverColor:
                                                            newValue,
                                                    })
                                                }
                                            />
                                        )}
                                    </Fragment>
                                </InsideTab>
                            </InsideTabs>
                            <PremiumShadow
                                label={__(
                                    "Text Shadow",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={textShadow}
                                onChange={(value) =>
                                    setAttributes({ textShadow: value })
                                }
                            />
                            <PremiumShadow
                                value={boxShadow}
                                boxShadow={true}
                                onChange={(value) =>
                                    setAttributes({ boxShadow: value })
                                }
                            />
                            <hr />
                            <PremiumBorder
                                label={__(
                                    "Border",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={border}
                                onChange={(value) =>
                                    setAttributes({ border: value })
                                }
                            />
                            <hr />
                            <SpacingComponent
                                value={padding}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ padding: value })
                                }
                            />
                        </PanelBody>
                        {showIcon && (
                            <PanelBody
                                title={__(
                                    "Icon",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <ResponsiveRangeControl
                                    label={__(
                                        "Size",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={iconSize}
                                    onChange={(value) =>
                                        setAttributes({ iconSize: value })
                                    }
                                    min={0}
                                    max={200}
                                    step={1}
                                    showUnit={true}
                                    units={["px", "em", "rem"]}
                                    defaultValue={30}
                                />
                                <InsideTabs>
                                    <InsideTab
                                        tabTitle={__(
                                            "Normal",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    >
                                        <Fragment>
                                            <AdvancedPopColorControl
                                                label={__(
                                                    "Color",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                colorValue={iconColor}
                                                colorDefault={""}
                                                onColorChange={(value) =>
                                                    setAttributes({
                                                        iconColor: value,
                                                    })
                                                }
                                            />
                                        </Fragment>
                                    </InsideTab>
                                    <InsideTab
                                        tabTitle={__(
                                            "Hover",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    >
                                        <Fragment>
                                            <AdvancedPopColorControl
                                                label={__(
                                                    "Hover Color",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                colorValue={iconHoverColor}
                                                colorDefault={""}
                                                onColorChange={(value) =>
                                                    setAttributes({
                                                        iconHoverColor: value,
                                                    })
                                                }
                                            />
                                        </Fragment>
                                    </InsideTab>
                                </InsideTabs>
                                <PremiumShadow
                                    label={__(
                                        "Shadow",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={iconShadow}
                                    onChange={(value) =>
                                        setAttributes({ iconShadow: value })
                                    }
                                />
                                <SpacingControl
                                    label={__(
                                        "Margin",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={iconMargin}
                                    onChange={(value) =>
                                        setAttributes({ iconMargin: value })
                                    }
                                    showUnits={true}
                                    responsive={true}
                                />
                            </PanelBody>
                        )}
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
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-button__wrap ${blockId} premium-button__${effect} premium-button__${effectDir}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{ textAlign: btnAlign[props.deviceType] }}
            >
                <style>{loadStyles()}</style>
                {React.createElement(
                    "div",
                    {
                        className: `premium-button wp-block-button__link premium-button__${btnSize} premium-button__${iconPosition}`,
                        style: {
                            backgroundColor: btnStyles[0].backColor,
                            boxShadow: `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.color} ${boxShadow.position}`,
                            ...paddingCss(padding, props.deviceType),
                            ...borderCss(border, props.deviceType),
                        },
                    },
                    [
                        <Fragment>
                            {showIcon && iconPosition == "before" && (
                                <i
                                    className={`premium-button-icon ${icon}`}
                                    style={{
                                        fontSize:
                                            iconSize[props.deviceType] +
                                            iconSize.unit,
                                        width:
                                            iconSize[props.deviceType] +
                                            iconSize.unit,
                                        height:
                                            iconSize[props.deviceType] +
                                            iconSize.unit,
                                        ...marginCss(
                                            iconMargin,
                                            props.deviceType
                                        ),
                                        color: iconColor,
                                        textShadow: `${iconShadow.horizontal}px ${iconShadow.vertical}px ${iconShadow.blur}px ${iconShadow.color}`,
                                    }}
                                ></i>
                            )}
                            <RichText
                                value={btnText}
                                onChange={(value) =>
                                    setAttributes({ btnText: value })
                                }
                                style={{
                                    color: btnStyles[0].textColor,
                                    textShadow: `${textShadow.horizontal}px ${textShadow.vertical}px ${textShadow.blur}px ${textShadow.color}`,
                                    ...typographyCss(
                                        typography,
                                        props.deviceType
                                    ),
                                    display: "inline",
                                }}
                                keepPlaceholderOnFocus
                            />
                            {showIcon && iconPosition == "after" && (
                                <i
                                    className={`premium-button-icon ${icon}`}
                                    style={{
                                        fontSize:
                                            iconSize[props.deviceType] +
                                            iconSize.unit,
                                        width:
                                            iconSize[props.deviceType] +
                                            iconSize.unit,
                                        height:
                                            iconSize[props.deviceType] +
                                            iconSize.unit,
                                        ...marginCss(
                                            iconMargin,
                                            props.deviceType
                                        ),
                                        color: iconColor,
                                        textShadow: `${iconShadow.horizontal}px ${iconShadow.vertical}px ${iconShadow.blur}px ${iconShadow.color}`,
                                    }}
                                ></i>
                            )}
                        </Fragment>,
                    ]
                )}
                <URLInput
                    value={btnLink}
                    onChange={(newLink) => setAttributes({ btnLink: newLink })}
                />
                {loadBtnGoogleFonts}
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
