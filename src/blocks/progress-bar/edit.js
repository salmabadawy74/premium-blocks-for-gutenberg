import classnames from "classnames";
import {
    generateBlockId,
    gradientBackground,
    typographyCss,
    paddingCss,
    marginCss,
    borderCss,
} from "@pbg/helpers";
import {
    AdvancedColorControl as AdvancedPopColorControl,
    SpacingComponent as SpacingControl,
    RadioComponent,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    SpacingComponent,
    MultiButtonsControl,
    Icons,
    PremiumBackgroundControl,
    ResponsiveSingleRangeControl,
    PremiumShadow,
    WebfontLoader,
    PremiumMediaUpload,
    PremiumUpperQuote,
    PremiumLowerQuote,
    DefaultImage,
    PremiumTypo,
    ResponsiveRangeControl
} from "@pbg/components";
const { __ } = wp.i18n;
const { PanelBody, TextControl, ToggleControl, SelectControl } = wp.components;
const { InspectorControls, RichText, useBlockProps } = wp.blockEditor;
const { useEffect, Fragment } = wp.element;
const { withSelect } = wp.data;

function Edit(props) {
    const { setAttributes, className, clientId } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-progress-bar-" + generateBlockId(clientId),
        });
        setAttributes({ classMigrate: true });
    }, []);

    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        align,
        multiStage,
        percentage,
        label,
        progressBarHeight,
        progressBarRadius,
        labelColor,
        percentageColor,
        progress,
        repeaterItems,
        editTitle,
        styleProgress,
        animate,
        speeds,
        arrowColor,
        arrow,
        arrowTablet,
        arrowMobile,
        arrowType,
        indicator,
        pinColor,
        pin,
        pinTablet,
        pinType,
        pinMobile,
        pinHeight,
        pinHeightTablet,
        pinHeightType,
        pinHeightMobile,
        progressType,
        labelTypography,
        percentageTypography,
        baseBackground,
        fillBackground,
        progressBarMargin,
        percentageMargin,
        labelMargin
    } = props.attributes;

    const STYLE = [{
        value: "solid",
        label: __("Solid")
    },
    {
        value: "stripe",
        label: __("Stripe")
    }
    ];
    const INDICATOR = [{
        value: "arrow",
        label: __("Arrow")
    },
    {
        value: "pin",
        label: __("Pin")
    },
    {
        value: "none",
        label: __("None")
    }
    ];

    const TYPE = [
        {
            value: "line",
            label: __("Line")
        },
        {
            value: "half-circle",
            label: __("Half Circle")
        },
        {
            value: "circle",
            label: __("Circle")
        },
        {
            value: "dots",
            label: __("Dots")
        }
    ]

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__("Progress Bar", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__(
                                    "Type",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={progressType}
                                onChange={(newEffect) =>
                                    setAttributes({ progressType: newEffect })
                                }
                                options={TYPE}
                            />
                            <TextControl
                                label={__("Label")}
                                value={label}
                                onChange={value => setAttributes({ label: value })}
                            />
                            <TextControl
                                label={__("Percentage")}
                                value={percentage}
                                onChange={value => setAttributes({ percentage: value })}
                            />
                            <ResponsiveSingleRangeControl
                                label={__(
                                    "Progress",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={progress}
                                onChange={value => setAttributes({ progress: value })}
                                showUnit={false}
                                defaultValue={50}
                            />
                            <ResponsiveSingleRangeControl
                                label={__(
                                    "Speed (milliseconds)",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={speeds}
                                onChange={value => setAttributes({ speeds: value })}
                                showUnit={false}
                                defaultValue={0}
                                min="0"
                                max="5"
                            />
                            < SelectControl
                                label={__("Style")}
                                value={styleProgress}
                                onChange={newEffect => setAttributes({ styleProgress: newEffect })}
                                options={STYLE}
                            />
                            {styleProgress == 'stripe' &&
                                < ToggleControl
                                    label={__("Animated")}
                                    checked={animate}
                                    onChange={newCheck => setAttributes({ animate: newCheck })}
                                />
                            }
                            {/* <MultiButtonsControl
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
                                value={align}
                                onChange={(alignn) =>
                                    setAttributes({ align: alignn })
                                }
                                label={__(
                                    "Align Content",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            /> */}

                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__("Progress Bar", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <ResponsiveRangeControl
                                label={__(
                                    "Height",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={progressBarHeight}
                                onChange={(value) =>
                                    setAttributes({
                                        progressBarHeight: value,
                                    })
                                }
                                min={1}
                                max={100}
                                step={1}
                                showUnit={true}
                                units={["px", "em", "%"]}
                                defaultValue={25}
                            />
                            <ResponsiveRangeControl
                                label={__(
                                    "Border Radius",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={progressBarRadius}
                                onChange={(value) =>
                                    setAttributes({
                                        progressBarRadius: value,
                                    })
                                }
                                min={1}
                                max={100}
                                step={1}
                                showUnit={true}
                                units={["px", "em", "%"]}
                                defaultValue={0}
                            />
                            <PremiumBackgroundControl
                                value={fillBackground}
                                onChange={(value) =>
                                    setAttributes({ fillBackground: value })
                                }
                            />
                            <PremiumBackgroundControl
                                value={baseBackground}
                                onChange={(value) =>
                                    setAttributes({ baseBackground: value })
                                }
                            />
                            <SpacingControl
                                label={__("Margin", "premium-blocks-for-gutenberg")}
                                value={progressBarMargin}
                                onChange={(value) =>
                                    setAttributes({ progressBarMargin: value })
                                }
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__("Label", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumTypo
                                value={labelTypography}
                                onChange={(newValue) =>
                                    setAttributes({
                                        labelTypography: newValue,
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={labelColor}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    setAttributes({ labelColor: newValue })
                                }
                            />
                            <SpacingControl
                                label={__("Margin", "premium-blocks-for-gutenberg")}
                                value={labelMargin}
                                onChange={(value) =>
                                    setAttributes({ labelMargin: value })
                                }
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>
                        < PanelBody
                            title={__("Percentage Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumTypo
                                value={percentageTypography}
                                onChange={(newValue) =>
                                    setAttributes({
                                        percentageTypography: newValue,
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={percentageColor}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    setAttributes({ percentageColor: newValue })
                                }
                            />
                            <SpacingControl
                                label={__("Margin", "premium-blocks-for-gutenberg")}
                                value={percentageMargin}
                                onChange={(value) =>
                                    setAttributes({ percentageMargin: value })
                                }
                                showUnits={true}
                                responsive={true}
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
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-progress-bar ${blockId}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{
                    textAlign: align[props.deviceType]
                }}
            >
                < div className="premium-progress-bar-labels-wrap" >
                    {label ? <p
                        className="premium-progress-bar-left-label"
                        style={{
                            ...typographyCss(labelTypography, props.deviceType),
                            ...marginCss(labelMargin, props.deviceType),
                            color: labelColor
                        }}
                    >
                        <span>{label}</span>
                    </p> : ""}
                    {percentage ? < p
                        className="premium-progress-bar-right-label"
                        style={{
                            ...typographyCss(percentageTypography, props.deviceType),
                            ...marginCss(percentageMargin, props.deviceType),
                            color: percentageColor
                        }}
                    >
                        <span > {
                            percentage
                        } </span>
                    </p> : ""}
                </div>
                <div className="premium-progress-bar-clear"></div>
                <div
                    className="premium-progress-bar-progress"
                    style={{
                        ...gradientBackground(baseBackground),
                        ...marginCss(progressBarMargin, props.deviceType),
                        height: `${progressBarHeight[props.deviceType]}${progressBarHeight.unit}`,
                        "border-radius": `${progressBarRadius[props.deviceType]}${progressBarRadius.unit}`,
                        // "background-color": progressBarbgColor
                    }}
                >
                    < div className={
                        `premium-progress-bar-progress-bar ${styleProgress == 'stripe' ? "premium-progress-bar-progress-stripe" : ""} ${animate ? "premium-progress-bar-progress-active" : ""}`
                    }
                        style={{
                            ...gradientBackground(fillBackground),
                            transition: `width ${speeds}s ease-in-out`,
                            height: `${progressBarHeight[props.deviceType]}${progressBarHeight.unit}`,
                            width: `${progress}%`,
                            "border-radius": `${progressBarRadius[props.deviceType]}${progressBarRadius.unit}`,
                            // "background-color": progressBarColor
                        }}
                        data-score={`${progress}`}
                        data-speed={`${speeds}`}
                    > </div>
                </div>
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
