import classnames from "classnames";
import {
    generateBlockId,
    gradientBackground,
    typographyCss,
    marginCss,
    generateCss
} from "@pbg/helpers";
import {
    AdvancedColorControl as AdvancedPopColorControl,
    SpacingComponent as SpacingControl,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBackgroundControl,
    ResponsiveSingleRangeControl,
    PremiumTypo,
    ResponsiveRangeControl
} from "@pbg/components";
const { __ } = wp.i18n;
const { PanelBody, TextControl, ToggleControl, SelectControl } = wp.components;
const { InspectorControls, RichText, useBlockProps, InnerBlocks } = wp.blockEditor;
const { useEffect, Fragment, useRef } = wp.element;
const { withSelect } = wp.data;

function Edit({ clientId, attributes, setAttributes, deviceType }) {

    const contentRef = useRef(null);
    const line = useRef(null);
    const circle_half_left = useRef(null);
    const circle_half_right = useRef(null);
    const circle_pie = useRef(null);
    const circle_half = useRef(null);

    useEffect(() => {
        setAttributes({
            blockId: "premium-progress-bar-" + generateBlockId(clientId),
        });
        setAttributes({ classMigrate: true });
    }, []);

    useEffect(() => {
        const {
            progressType,
            progress
        } = attributes

        if (progressType == "line") {
            line.current.style.width = "unset";
        }
        else if (progressType === "circle") {
            circle_half_left.current.style.transform = "rotate(0deg)";
            circle_pie.current.style.clipPath = "";
            circle_half_right.current.style.visibility = "";
        } else if (progressType === "half-circle") {
            circle_half.current.style.transform = "rotate(0deg)";
            circle_half.current.style.transition = "none";
        }
        else if (progressType === "dots") {
            setAttributes({
                numberOfTotalFill: 0,
                fillPercent: 0
            });
        }
        let id = "";
        const changeWidthEffect = () => {
            var i = 0;
            if (i == 0) {
                i = 1;
                var width = 0;
                var value = progress;
                if (progressType === "circle") {
                    value = progress * 3.6;
                } else if (progressType === "half-circle") {
                    value = progress * 1.8;
                }

                id = setInterval(ebChangeframe, 10);
                function ebChangeframe() {
                    if (progressType === "circle") {
                        if (width > 180) {
                            circle_pie.current.style.clipPath = "inset(0)";
                            circle_half_right.current.style.visibility = "visible";
                        } else {
                            circle_pie.current.style.clipPath = "";
                            circle_half_right.current.style.visibility = "";
                        }
                    }
                    if (width >= value) {
                        clearInterval(id);
                        i = 0;
                    } else {
                        width++;
                        // console.log('width', width)
                        if (progressType == "line") {
                            line.current.style.width = width + "%";
                        }
                        if (progressType === "circle") {
                            circle_half_left.current.style.transform =
                                "rotate(" + width + "deg)";
                        } else if (progressType === "half-circle") {
                            circle_half.current.style.transform = "rotate(" + width + "deg)";
                        }
                        else if (progressType == "dots") {
                            let dots = []
                            var offsetWidth = contentRef.current.offsetWidth,
                                dotsSize = attributes.dotSize[deviceType] || 25,
                                dotsSpacing = attributes.dotSpacing[deviceType] || 10,
                                length = width,
                                numberOfCircles = Math.ceil(offsetWidth / (dotsSize + dotsSpacing)),
                                circlesToFill = numberOfCircles * (length / 100),
                                numberOfTotalFill = Math.floor(circlesToFill),
                                fillPercent = 100 * (circlesToFill - numberOfTotalFill);
                            for (var dot = 0; dot < numberOfCircles; dot++) {
                                dots.push(dot)
                            }
                            // console.log(offsetWidth, dotsSize, dotsSpacing, numberOfCircles, circlesToFill, numberOfTotalFill, fillPercent, dots)
                            setAttributes({
                                numberOfCircles: dots,
                                numberOfTotalFill: numberOfTotalFill,
                                fillPercent: fillPercent
                            });
                        }
                    }
                }
            }
        };
        const progressSetTimeout = setTimeout(changeWidthEffect, 500);

        return () => {
            clearInterval(id);
            clearTimeout(progressSetTimeout);
        };
    }, [attributes.progressType, attributes.progress, attributes.speeds, attributes.dotSize, attributes.dotSpacing]);

    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        align,
        label,
        progressBarHeight,
        progressBarRadius,
        labelColor,
        percentageColor,
        progress,
        styleProgress,
        animate,
        speeds,
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
        suffixMargin,
        showPercentage,
        dotSpacing,
        dotSize,
        fillPercent,
        numberOfTotalFill,
        numberOfCircles
    } = attributes;
    console.log(numberOfCircles)
    const STYLE = [{
        value: "solid",
        label: __("Solid")
    },
    {
        value: "stripe",
        label: __("Stripe")
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
                iconSize: {
                    Desktop: "30",
                    Tablet: "30",
                    Mobile: "30",
                    unit: 'px'
                }
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

    const loadStyles = () => {
        const styles = {};
        styles[` .${blockId} .progress-segment:first-child`] = {
            "margin-right": `calc( ${dotSpacing[deviceType]}${dotSpacing.unit}/2 ) !important`,
        };
        styles[` .${blockId} .progress-segment:not(:first-child):not(:last-child)`] = {
            "margin-right": `calc( ${dotSpacing[deviceType]}${dotSpacing.unit}/2 ) !important`,
            "margin-left": `calc( ${dotSpacing[deviceType]}${dotSpacing.unit}/2 ) !important`,
        };
        styles[` .${blockId} .progress-segment:last-child`] = {
            "margin-left": `calc( ${dotSpacing[deviceType]}${dotSpacing.unit}/2 ) !important`,
        };
        return generateCss(styles);
    };

    const renderContent = () => {
        return <div className="premium-progressbar-circle-content">
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
            {showPercentage &&
                < p
                    className="premium-progress-bar-right-label"
                    style={{
                        ...typographyCss(percentageTypography, deviceType),
                        ...marginCss(percentageMargin, deviceType),
                        color: percentageColor
                    }}
                >
                    <span>{progress}% </span>
                </p>
            }
        </div>
    }

    const renderDots = (numberOfCircles || []).map((item, index) => {
        return <div
            className="progress-segment"
            style={{
                height: `${dotSize[deviceType]}${dotSize.unit}`,
                width: `${dotSize[deviceType]}${dotSize.unit}`,
                "border-radius": `${progressBarRadius[deviceType]}${progressBarRadius.unit}`,
                ...gradientBackground(baseBackground),
            }}
        >
            {
                index < numberOfTotalFill &&
                <div
                    className="segment-inner"
                    style={{
                        ...gradientBackground(fillBackground),
                    }}
                ></div>
            }
            {
                index == numberOfTotalFill && fillPercent != 0 &&
                <div
                    className="segment-inner"
                    style={{
                        width: fillPercent != 0 ? `${fillPercent}%` : '',
                        ...gradientBackground(fillBackground),
                    }}
                ></div>
            }
        </div>
    })

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
                            {(progressType == 'half-circle' || progressType == 'circle') &&
                                <Fragment>
                                    < ToggleControl
                                        label={__("Show Percentage Value")}
                                        checked={showPercentage}
                                        onChange={newCheck => setAttributes({ showPercentage: newCheck })}
                                    />
                                    < ToggleControl
                                        label={__("Show Icon")}
                                        checked={showIcon}
                                        onChange={newCheck => setAttributes({ showIcon: newCheck })}
                                    />
                                </Fragment>
                            }
                            <TextControl
                                label={__("Label")}
                                value={label}
                                onChange={value => setAttributes({ label: value })}
                            />
                            {/* <TextControl
                                label={__("Percentage")}
                                value={percentage}
                                onChange={value => setAttributes({ percentage: value })}
                            /> */}
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
                            {progressType == 'line' &&
                                <Fragment>
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
                                </Fragment>
                            }
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__("Progress Bar", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            {progressType == 'line' &&
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
                            }
                            {progressType == 'dots' &&
                                <Fragment>
                                    <ResponsiveRangeControl
                                        label={__(
                                            "Dot Size",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={dotSize}
                                        onChange={(value) =>
                                            setAttributes({
                                                dotSize: value,
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
                                            "Spacing",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={dotSpacing}
                                        onChange={(value) =>
                                            setAttributes({
                                                dotSpacing: value,
                                            })
                                        }
                                        min={1}
                                        max={10}
                                        step={1}
                                        showUnit={true}
                                        units={["px", "%"]}
                                        defaultValue={8}
                                    />
                                </Fragment>
                            }
                            {(progressType == 'line' || progressType == 'dots') &&
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
                                    units={["px", "%"]}
                                    defaultValue={0}
                                />
                            }
                            {(progressType == 'half-circle' || progressType == 'circle') &&
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
                        {progressType == 'half-circle' &&
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
                        }
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
                data-progress={`${progress}`}
                data-speed={`${speeds}`}
                data-type={`${progressType}`}
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: loadStyles(),
                    }}
                />
                <div ref={contentRef}>
                    {(progressType == 'line' || progressType == 'dots') &&
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
                            {progress &&
                                < p
                                    className="premium-progress-bar-right-label"
                                    style={{
                                        ...typographyCss(percentageTypography, deviceType),
                                        ...marginCss(percentageMargin, deviceType),
                                        color: percentageColor
                                    }}
                                >
                                    <span>{progress}% </span>
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
                                ref={line}
                                style={{
                                    ...gradientBackground(fillBackground),
                                    transition: `${progress} ${speeds}s ease-in-out`,
                                    height: `${progressBarHeight[deviceType]}${progressBarHeight.unit}`,
                                    width: `${progress}%`,
                                    "border-radius": `${progressBarRadius[deviceType]}${progressBarRadius.unit}`
                                }}
                                data-progress_bar={`${progress}`}
                                data-speed={`${speeds}`}
                            > </div>
                        </div>
                    }
                    {
                        progressType == 'dots' &&
                        <div
                            className="premium-progressbar-bar-wrap premium-progressbar-dots"
                            data-circles={`${numberOfCircles}`}
                            data-total-fill={`${numberOfTotalFill}`}
                            data-partial-fill={`${fillPercent}`}
                            style={{
                                "border-radius": `${progressBarRadius[deviceType]}${progressBarRadius.unit}`,
                                ...marginCss(progressBarMargin, deviceType),
                            }}
                        >
                            {renderDots}
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
                                            ref={circle_half}
                                            style={{
                                                transform: `rotate(${progress * 1.8}deg)`,
                                                borderColor: fillColor,
                                                borderWidth: `${borderWidth[deviceType]}px`,
                                            }}
                                        ></div>
                                    </div>
                                    <div
                                        className="premium-progressbar-circle-inner"
                                        style={{
                                            ...gradientBackground(baseBackground),
                                            borderColor: borderColor,
                                            borderWidth: `${borderWidth[deviceType]}px`,
                                        }}
                                    ></div>
                                </div>
                                {renderContent()}
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
                    {progressType == 'circle' &&
                        <div className="premium-progressbar-hf-wrapper">
                            <div
                                className="premium-progressbar-circle-wrap"
                                style={{
                                    height: `${progressBarSize[deviceType]}px`,
                                    width: `${progressBarSize[deviceType]}px`,
                                }}
                            >
                                <div
                                    className="premium-progressbar-circle-base"
                                    style={{
                                        borderColor: borderColor,
                                        ...gradientBackground(baseBackground),
                                        borderWidth: `${borderWidth[deviceType]}px`,
                                    }}
                                ></div>
                                <div
                                    className="premium-progressbar-circle"
                                    ref={circle_pie}
                                    style={{
                                        clipPath: `${progress > '50' ? 'inset(0px)' : 'inset(0 0 0 50%)'}`
                                    }}
                                >
                                    <div
                                        className="premium-progressbar-circle-left"
                                        ref={circle_half_left}
                                        style={{
                                            transform: `rotate(${progress * 3.6}deg)`,
                                            borderColor: fillColor,
                                            borderWidth: `${borderWidth[deviceType]}px`,
                                        }}
                                    ></div>
                                    <div
                                        className="premium-progressbar-circle-right"
                                        ref={circle_half_right}
                                        style={{
                                            borderColor: fillColor,
                                            visibility: `${progress > '50' ? 'visible' : 'hidden'}`,
                                            borderWidth: `${borderWidth[deviceType]}px`,
                                        }}
                                    ></div>
                                </div>
                                {renderContent()}
                            </div>
                        </div>
                    }
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
