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
const { InspectorControls, RichText, useBlockProps, InnerBlocks } = wp.blockEditor;
const { useEffect, Fragment } = wp.element;
const { withSelect } = wp.data;

function Edit({ clientId, attributes, setAttributes, deviceType }) {

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
        labelMargin,
        progressBarSize,
        showIcon,
        borderWidth,
        borderColor,
        fillColor,
        topSpacing,
        PrefixTypography,
        PrefixColor,
        PrefixMargin,
        suffixTypography,
        suffixColor,
        suffixMargin
    } = attributes;

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

    const INNER_BLOCKS_TEMPLATE = [
        [
            "premium/icon",
            {
                selectedIcon: attributes?.selectedIcon,
            },
        ],
    ];

    const blockProps = useBlockProps({
        className: classnames("premium-progress-bar", blockId, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        }),
        style: {
            textAlign: align?.[deviceType]
        }
    });

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
                            {(progressType == 'half-circle' || progressType == 'circle') && < ToggleControl
                                label={__("Show Icon")}
                                checked={showIcon}
                                onChange={newCheck => setAttributes({ showIcon: newCheck })}
                            />}
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
                            {progressType == 'line' &&
                                <Fragment>
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
                                </Fragment>
                            }
                            {progressType !== 'line' &&
                                <Fragment>
                                    <ResponsiveRangeControl
                                        label={__(
                                            "Size",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={progressBarSize}
                                        onChange={(value) =>
                                            setAttributes({
                                                progressBarSize: value,
                                            })
                                        }
                                        min={1}
                                        max={500}
                                        step={1}
                                        showUnit={false}
                                        defaultValue={200}
                                    />
                                    <ResponsiveRangeControl
                                        label={__(
                                            "Border Width",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={borderWidth}
                                        onChange={(value) =>
                                            setAttributes({
                                                borderWidth: value,
                                            })
                                        }
                                        min={1}
                                        max={100}
                                        step={1}
                                        showUnit={false}
                                        defaultValue={12}
                                    />
                                    <AdvancedPopColorControl
                                        label={__(
                                            "Border Color",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        colorValue={borderColor}
                                        colorDefault={""}
                                        onColorChange={(newValue) =>
                                            setAttributes({ borderColor: newValue })
                                        }
                                    />
                                    <AdvancedPopColorControl
                                        label={__(
                                            "Fill Color",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        colorValue={fillColor}
                                        colorDefault={""}
                                        onColorChange={(newValue) =>
                                            setAttributes({ fillColor: newValue })
                                        }
                                    />
                                </Fragment>
                            }
                            {(progressType == 'line' || progressType == 'dots') &&
                                <Fragment>
                                    <h2 className="premium-blocks-heading">
                                        {__(
                                            "Fill Background",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    </h2>
                                    <PremiumBackgroundControl
                                        value={fillBackground}
                                        onChange={(value) =>
                                            setAttributes({ fillBackground: value })
                                        }
                                    />
                                </Fragment>
                            }
                            <h2 className="premium-blocks-heading">
                                {__(
                                    "Base Background",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </h2>
                            <PremiumBackgroundControl
                                value={baseBackground}
                                onChange={(value) =>
                                    setAttributes({ baseBackground: value })
                                }
                            />
                            {(progressType == 'line' || progressType == 'dots') &&
                                <SpacingControl
                                    label={__("Margin", "premium-blocks-for-gutenberg")}
                                    value={progressBarMargin}
                                    onChange={(value) =>
                                        setAttributes({ progressBarMargin: value })
                                    }
                                    showUnits={true}
                                    responsive={true}
                                />
                            }
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
                            title={__("Percentage")}
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
                        < PanelBody
                            title={__("Prefix & Suffix")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveRangeControl
                                label={__(
                                    "Top Spacing",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={topSpacing}
                                onChange={(value) =>
                                    setAttributes({
                                        topSpacing: value,
                                    })
                                }
                                min={1}
                                max={300}
                                step={1}
                                showUnit={false}
                                defaultValue={0}
                            />
                            <h2 className="premium-blocks-heading">
                                {__(
                                    "Prefix",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </h2>
                            <PremiumTypo
                                value={PrefixTypography}
                                onChange={(newValue) =>
                                    setAttributes({
                                        PrefixTypography: newValue,
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={PrefixColor}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    setAttributes({ PrefixColor: newValue })
                                }
                            />
                            <ResponsiveRangeControl
                                label={__(
                                    "Spacing",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={PrefixMargin}
                                onChange={(value) =>
                                    setAttributes({
                                        PrefixMargin: value,
                                    })
                                }
                                min={1}
                                max={100}
                                step={1}
                                showUnit={false}
                                defaultValue={0}
                            />
                            <hr />
                            <h2 className="premium-blocks-heading">
                                {__(
                                    "Suffix",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </h2>
                            <PremiumTypo
                                value={suffixTypography}
                                onChange={(newValue) =>
                                    setAttributes({
                                        suffixTypography: newValue,
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={suffixColor}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    setAttributes({ suffixColor: newValue })
                                }
                            />
                            <ResponsiveRangeControl
                                label={__(
                                    "Spacing",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={suffixMargin}
                                onChange={(value) =>
                                    setAttributes({
                                        suffixMargin: value,
                                    })
                                }
                                min={1}
                                max={100}
                                step={1}
                                showUnit={false}
                                defaultValue={0}
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
            <div {...blockProps}
                data-score={`${progress}`}
                data-speed={`${speeds}`}
                data-type={`${progressType}`}
            >
                {progressType == 'line' &&
                    < div className="premium-progress-bar-labels-wrap" >
                        {label &&
                            <p
                                className="premium-progress-bar-left-label"
                                style={{
                                    ...typographyCss(labelTypography, deviceType),
                                    ...marginCss(labelMargin, deviceType),
                                    color: labelColor
                                }}
                            >
                                <span>{label}</span>
                            </p>
                        }
                        {percentage &&
                            < p
                                className="premium-progress-bar-right-label"
                                style={{
                                    ...typographyCss(percentageTypography, deviceType),
                                    ...marginCss(percentageMargin, deviceType),
                                    color: percentageColor
                                }}
                            >
                                <span>{percentage} </span>
                            </p>
                        }
                    </div>
                }
                <div className="premium-progress-bar-clear"></div>
                {progressType == 'line' &&
                    <div
                        className="premium-progress-bar-wrap"
                        style={{
                            ...gradientBackground(baseBackground),
                            ...marginCss(progressBarMargin, deviceType),
                            height: `${progressBarHeight[deviceType]}${progressBarHeight.unit}`,
                            "border-radius": `${progressBarRadius[deviceType]}${progressBarRadius.unit}`
                        }}
                    >
                        < div className={
                            `premium-progress-bar-bar ${styleProgress == 'stripe' ? "premium-progress-bar-progress-stripe" : ""} ${animate ? "premium-progress-bar-progress-active" : ""}`
                        }
                            style={{
                                ...gradientBackground(fillBackground),
                                transition: `width ${speeds}s ease-in-out`,
                                height: `${progressBarHeight[deviceType]}${progressBarHeight.unit}`,
                                width: `${progress}%`,
                                "border-radius": `${progressBarRadius[deviceType]}${progressBarRadius.unit}`
                            }}
                            data-score={`${progress}`}
                            data-speed={`${speeds}`}
                        > </div>
                    </div>
                }
                {progressType == 'half-circle' &&
                    <div className="premium-progressbar-hf-wrapper">
                        <div
                            className="premium-progressbar-hf-circle-wrap"
                            style={{
                                height: `calc(${progressBarSize[deviceType]} / 2 * 1px)`,
                                width: `${progressBarSize[deviceType]}px`,
                            }}
                        >
                            <div
                                className="premium-progressbar-hf-container"
                                style={{
                                    height: `${progressBarSize[deviceType]}px`,
                                    width: `${progressBarSize[deviceType]}px`,
                                }}
                            >
                                <div className="premium-progressbar-hf-circle">
                                    <div
                                        className="premium-progressbar-hf-circle-progress"
                                        style={{
                                            transform: `rotate(${progress * 1.8}deg)`,
                                            borderColor: fillColor,
                                            borderWidth: borderWidth
                                        }}
                                    ></div>
                                </div>
                                <div
                                    className="premium-progressbar-circle-inner"
                                    style={{
                                        ...gradientBackground(baseBackground),
                                        borderColor: borderColor,
                                        borderWidth: borderWidth
                                    }}
                                ></div>
                            </div>
                            <div className="premium-progressbar-circle-content">
                                {showIcon && <InnerBlocks
                                    template={INNER_BLOCKS_TEMPLATE}
                                    templateLock={false}
                                    allowedBlocks={["premium/icon"]}
                                />}
                                {label &&
                                    <p
                                        className="premium-progress-bar-left-label"
                                        style={{
                                            ...typographyCss(labelTypography, deviceType),
                                            ...marginCss(labelMargin, deviceType),
                                            color: labelColor
                                        }}
                                    >
                                        <span>{label}</span>
                                    </p>
                                }
                                {percentage &&
                                    < p
                                        className="premium-progress-bar-right-label"
                                        style={{
                                            ...typographyCss(percentageTypography, deviceType),
                                            ...marginCss(percentageMargin, deviceType),
                                            color: percentageColor
                                        }}
                                    >
                                        <span>{percentage} </span>
                                    </p>
                                }
                            </div>
                        </div>
                        <div
                            className="premium-progressbar-hf-labels"
                            style={{
                                width: `${progressBarSize[deviceType]}px`,
                                marginTop: `${topSpacing[deviceType]}px`,
                            }}
                        >
                            <span
                                className="premium-progressbar-hf-label-left"
                                style={{
                                    ...typographyCss(PrefixTypography, deviceType),
                                    marginLeft: `${PrefixMargin[deviceType]}px`,
                                    color: PrefixColor
                                }}
                            >0</span>
                            <span
                                className="premium-progressbar-hf-label-right"
                                style={{
                                    ...typographyCss(suffixTypography, deviceType),
                                    marginRight: `${suffixMargin[deviceType]}px`,
                                    color: suffixColor
                                }}
                            >100</span>
                        </div>
                    </div>
                }
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
