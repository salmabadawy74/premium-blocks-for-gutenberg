import classnames from "classnames";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import Lottie from "react-lottie-with-segments";
import {
    generateBlockId,
    generateCss,
    typographyCss,
    paddingCss,
    marginCss,
} from "@pbg/helpers";
import {
    ResponsiveRangeControl,
    ResponsiveSingleRangeControl,
    PremiumMediaUpload,
    RadioComponent,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    PremiumTypo,
    SpacingComponent,
    AdvancedColorControl as AdvancedPopColorControl,
    PremiumShadow,
    MultiButtonsControl,
    PremiumBackgroundControl,
    Icons,
    WebfontLoader,
    iconsList,
} from "@pbg/components";

const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { useEffect, Fragment } = wp.element;
const { InspectorControls, useBlockProps, RichText } = wp.blockEditor;
const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components;
let istitleUpdated = null;

function Edit(props) {
    const { setAttributes, className } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-heading-" + generateBlockId(props.clientId),
        });
        setAttributes({ classMigrate: true });
        // Pushing Style tag for this block css.
        const $style = document.createElement("style");
        $style.setAttribute("id", "premium-style-title-" + props.clientId);
        document.head.appendChild($style);
        handleStyle();
    }, []);

    useEffect(() => {
        clearTimeout(istitleUpdated);
        istitleUpdated = setTimeout(handleStyle, 400);
    }, [istitleUpdated]);

    const handleStyle = () => {
        const { titleStyles } = props.attributes;
        if (blockId) {
            let container = document.querySelectorAll(`.${blockId}`);
            if (!container.length) {
                return;
            }
            let titleContainers = container[0].querySelector(
                ".premium-title-container"
            );

            // titleContainers.forEach(function (titleContainer) {
            if (titleContainers.classList.contains("style8")) {
                let titleElement = titleContainers.querySelector(
                        ".premium-title-text-title"
                    ),
                    holdTime = titleStyles[0].animateDelay * 1000,
                    duration = titleStyles[0].animateduration * 1000;

                function shinyEffect() {
                    titleElement.setAttribute("data-animation", "shiny");
                    setTimeout(function () {
                        titleElement.removeAttribute("data-animation");
                    }, duration);
                }

                (function repeat() {
                    shinyEffect();
                    setTimeout(repeat, holdTime);
                })();
            }

            if (titleContainers.classList.contains("style9")) {
                let style9 = document.querySelectorAll(
                    ".premium-title-style9__wrap"
                );
                style9.forEach(function (style) {
                    let holdTime = titleStyles[0].animateDelay * 1000;

                    style.setAttribute("data-animation-blur", "process");
                    style
                        .querySelectorAll(".premium-title-style9-letter")
                        .forEach(function (letter, index) {
                            index += 1;
                            let delayTime;
                            if (
                                document
                                    .getElementsByTagName("BODY")[0]
                                    .classList.contains(".rtl")
                            ) {
                                delayTime = 0.2 / index + "s";
                            } else {
                                delayTime = index / 20 + "s";
                            }
                            letter.style.animationDelay = delayTime;
                        });
                    setInterval(function () {
                        style.setAttribute("data-animation-blur", "done");
                        setTimeout(function () {
                            style.setAttribute(
                                "data-animation-blur",
                                "process"
                            );
                        }, 150);
                    }, holdTime);
                });
            }
            // });
        }
    };

    const {
        blockId,
        align,
        titleTag,
        style,
        title,
        iconValue,
        iconType,
        icon,
        lottieURl,
        loop,
        reversedir,
        iconPosition,
        imageURL,
        imageID,
        link,
        url,
        target,
        iconAlign,
        stripePosition,
        strokeStyles,
        titleStyles,
        titleBorder,
        iconStyles,
        iconBackground,
        iconBorder,
        textStyles,
        stripeAlign,
        titleMargin,
        titlePadding,
        iconPadding,
        iconMargin,
        backgroundText,
        BackText,
        textWidth,
        blend,
        zIndex,
        hideDesktop,
        hideTablet,
        hideMobile,
        strokeFull,
        iconSize,
        iconshadow,
        rotateText,
        verticalText,
        horizontalText,
        textBackshadow,
        textTypography,
        stripeBottomSpacing,
        stripeTopSpacing,
        stripeHeight,
        stripeWidth,
        titleTypography,
        titleShadow,
    } = props.attributes;

    let loadTitleGoogleFonts;
    let loadTextGoogleFonts;

    if (titleTypography?.fontFamily !== "Default") {
        const titleConfig = {
            google: {
                families: [titleTypography.fontFamily],
            },
        };
        loadTitleGoogleFonts = (
            <WebfontLoader config={titleConfig}></WebfontLoader>
        );
    }

    if (textTypography?.fontFamily !== "Default") {
        const textConfig = {
            google: {
                families: [textTypography.fontFamily],
            },
        };
        loadTextGoogleFonts = (
            <WebfontLoader config={textConfig}></WebfontLoader>
        );
    }

    const STYLE = [
        {
            value: "default",
            label: __("Default", "premium-blocks-for-gutenberg"),
        },
        {
            value: "style1",
            label: __("Style 1", "premium-blocks-for-gutenberg"),
        },
        {
            value: "style2",
            label: __("Style 2", "premium-blocks-for-gutenberg"),
        },
        {
            value: "style3",
            label: __("Style 3", "premium-blocks-for-gutenberg"),
        },
        {
            value: "style4",
            label: __("Style 4", "premium-blocks-for-gutenberg"),
        },
        {
            value: "style5",
            label: __("Style 5", "premium-blocks-for-gutenberg"),
        },
        {
            value: "style6",
            label: __("Style 6", "premium-blocks-for-gutenberg"),
        },
        {
            value: "style7",
            label: __("Style 7", "premium-blocks-for-gutenberg"),
        },
        {
            value: "style8",
            label: __("Style 8", "premium-blocks-for-gutenberg"),
        },
        {
            value: "style9",
            label: __("Style 9", "premium-blocks-for-gutenberg"),
        },
    ];

    const ICON = [
        {
            value: "icon",
            label: __("Icon", "premium-blocks-for-gutenberg"),
        },
        {
            value: "image",
            label: __("Image", "premium-blocks-for-gutenberg"),
        },
        {
            value: "lottie",
            label: __("Lottie Animation", "premium-blocks-for-gutenberg"),
        },
    ];

    const POSITION = [
        {
            value: "before",
            label: __("Before", "premium-blocks-for-gutenberg"),
        },
        {
            value: "after",
            label: __("After", "premium-blocks-for-gutenberg"),
        },
        {
            value: "top",
            label: __("Top", "premium-blocks-for-gutenberg"),
        },
    ];

    const STRIPEPOSITION = [
        {
            value: "top",
            label: __("Top", "premium-blocks-for-gutenberg"),
        },
        {
            value: "bottom",
            label: __("Bottom", "premium-blocks-for-gutenberg"),
        },
    ];

    const BLEND = [
        {
            label: __("Normal", "premium-blocks-for-gutenberg"),
            value: "normal",
        },
        {
            label: __("Multiply", "premium-blocks-for-gutenberg"),
            value: "multiply",
        },
        {
            label: __("Screen", "premium-blocks-for-gutenberg"),
            value: "screen",
        },
        {
            label: __("Overlay", "premium-blocks-for-gutenberg"),
            value: "overlay",
        },
        {
            label: __("Darken", "premium-blocks-for-gutenberg"),
            value: "darken",
        },
        {
            label: __("Lighten", "premium-blocks-for-gutenberg"),
            value: "lighten",
        },
        {
            label: __("Color Dodge", "premium-blocks-for-gutenberg"),
            value: "color-dodge",
        },
        {
            label: __("Saturation", "premium-blocks-for-gutenberg"),
            value: "saturation",
        },
        {
            label: __("Color", "premium-blocks-for-gutenberg"),
            value: "color",
        },
        {
            label: __("Luminosity", "premium-blocks-for-gutenberg"),
            value: "luminosity",
        },
    ];

    const IconMarginTop = iconMargin?.[props.deviceType]?.top;
    const IconMarginRight = iconMargin?.[props.deviceType]?.right;
    const IconMarginBottom = iconMargin?.[props.deviceType]?.bottom;
    const IconMarginLeft = iconMargin?.[props.deviceType]?.left;
    const IconPaddingTop = iconPadding?.[props.deviceType]?.top;
    const IconPaddingRight = iconPadding?.[props.deviceType]?.right;
    const IconPaddingBottom = iconPadding?.[props.deviceType]?.bottom;
    const IconPaddingLeft = iconPadding?.[props.deviceType]?.left;

    let btnGrad, btnGrad2, btnbg;

    if (
        undefined !== iconBackground.backgroundType &&
        "gradient" === iconBackground.backgroundType
    ) {
        btnGrad =
            "transparent" === iconBackground.backgroundColor ||
            undefined === iconBackground.backgroundColor
                ? "rgba(255,255,255,0)"
                : iconBackground.backgroundColor;
        btnGrad2 =
            undefined !== iconBackground.gradientColorTwo &&
            undefined !== iconBackground.gradientColorTwo &&
            "" !== iconBackground.gradientColorTwo
                ? iconBackground.gradientColorTwo
                : "#777";
        if ("radial" === iconBackground.gradientType) {
            btnbg = `radial-gradient(at ${iconBackground.gradientPosition}, ${btnGrad} ${iconBackground.gradientLocationOne}%, ${btnGrad2} ${iconBackground.gradientLocationTwo}%)`;
        } else if ("radial" !== iconBackground.gradientType) {
            btnbg = `linear-gradient(${iconBackground.gradientAngle}deg, ${btnGrad} ${iconBackground.gradientLocationOne}%, ${btnGrad2} ${iconBackground.gradientLocationTwo}%)`;
        }
    } else {
        btnbg = iconBackground.backgroundImageURL
            ? `url('${iconBackground.backgroundImageURL}')`
            : "";
    }

    const loadStyles = () => {
        const styles = {};

        styles[
            `.${blockId} .premium-title-style8__wrap .premium-title-text-title[data-animation='shiny']`
        ] = {
            "--base-color": `${titleStyles[0].titleColor}!important`,
            "--shiny-color": `${titleStyles[0].shinyColor}!important`,
            "--animation-speed": `${titleStyles[0].animateduration}s!important`,
        };
        styles[`.${blockId} .premium-title-header`] = {
            "--shadow-color": `${titleStyles[0].blurColor}!important`,
            "--shadow-value": `${titleStyles[0].blurShadow}px!important`,
            color: `${titleStyles[0].titleColor}!important`,
        };
        styles[`.${blockId} .premium-title .default .premium-title-header`] = {
            "border-color": `${titleBorder.borderColor}!important`,
            "border-style": `${
                titleBorder.borderType == "none"
                    ? "none"
                    : `${titleBorder.borderType} !important`
            }`,
            "border-top-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.top
            }px!important`,
            "border-right-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.right
            }px!important`,
            "border-bottom-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.bottom
            }px!important`,
            "border-left-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.left
            }px!important`,
            "border-top-left-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.top
            }px!important`,
            "border-top-right-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.right
            }px!important`,
            "border-bottom-left-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.bottom
            }px!important`,
            "border-bottom-right-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.left
            }px!important`,
        };
        styles[`.${blockId} .premium-title .style1 .premium-title-header`] = {
            "border-color": `${titleBorder.borderColor}!important`,
            "border-style": `${
                titleBorder.borderType == "none"
                    ? "none"
                    : `${titleBorder.borderType} !important`
            }`,
            "border-top-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.top
            }px!important`,
            "border-right-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.right
            }px!important`,
            "border-bottom-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.bottom
            }px!important`,
            "border-left-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.left
            }px!important`,
            "border-top-left-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.top
            }px!important`,
            "border-top-right-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.right
            }px!important`,
            "border-bottom-left-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.bottom
            }px!important`,
            "border-bottom-right-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.left
            }px!important`,
            "border-left":
                titleBorder?.borderWidth?.[props.deviceType]?.left >= "1"
                    ? `${
                          titleBorder?.borderWidth?.[props.deviceType]?.left
                      }px ${titleBorder.borderType} ${
                          titleBorder.borderColor
                      }!important`
                    : "",
            "border-left-style": `${
                titleBorder.borderType == "none"
                    ? "solid"
                    : titleBorder.borderType
            }`,
            "border-left-width": `${
                titleBorder.borderType == "none" ? "3px" : ""
            }`,
            "border-left-color":
                titleBorder.borderType == "none"
                    ? "#793DC4"
                    : titleBorder.borderColor,
        };

        styles[`.${blockId} .premium-title .style2`] = {
            "border-color": `${titleBorder.borderColor}!important`,
            "border-style": `${titleBorder.borderType}`,
            "border-top-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.top
            }px!important`,
            "border-right-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.right
            }px!important`,
            "border-bottom-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.bottom
            }px!important`,
            "border-left-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.left
            }px!important`,
            "border-top-left-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.top
            }px!important`,
            "border-top-right-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.right
            }px!important`,
            "border-bottom-left-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.bottom
            }px!important`,
            "border-bottom-right-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.left
            }px!important`,
            "border-bottom":
                titleBorder?.borderWidth?.[props.deviceType]?.bottom >= "0"
                    ? `${
                          titleBorder?.borderWidth?.[props.deviceType]?.bottom
                      }px ${titleBorder.borderType} ${
                          titleBorder.borderColor
                      }!important`
                    : "",
            "border-bottom-style": `${
                titleBorder.borderType == "none"
                    ? "solid"
                    : titleBorder.borderType
            }`,
            "border-bottom-width": `${
                titleBorder.borderType == "none" ? "3px" : ""
            }`,
            "border-bottom-color":
                titleBorder.borderType == "none"
                    ? "#793DC4"
                    : titleBorder.borderColor,
        };

        styles[`.${blockId} .premium-title .style4`] = {
            "border-color": `${titleBorder.borderColor}!important`,
            "border-style": `${titleBorder.borderType}`,
            "border-top-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.top
            }px!important`,
            "border-right-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.right
            }px!important`,
            "border-bottom-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.bottom
            }px!important`,
            "border-left-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.left
            }px!important`,
            "border-top-left-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.top
            }px!important`,
            "border-top-right-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.right
            }px!important`,
            "border-bottom-left-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.bottom
            }px!important`,
            "border-bottom-right-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.left
            }px!important`,
            "border-bottom":
                titleBorder?.borderWidth?.[props.deviceType]?.bottom >= "0"
                    ? `${
                          titleBorder?.borderWidth?.[props.deviceType]?.bottom
                      }px ${titleBorder.borderType} ${
                          titleBorder.borderColor
                      }!important`
                    : "",
            "border-bottom-style": `${
                titleBorder.borderType == "none"
                    ? "solid"
                    : titleBorder.borderType
            }`,
            "border-bottom-width": `${
                titleBorder.borderType == "none" ? "3px" : ""
            }`,
            "border-bottom-color":
                titleBorder.borderType == "none"
                    ? "#793DC4"
                    : titleBorder.borderColor,
        };

        styles[`.${blockId} .premium-title .style5`] = {
            "border-color": `${titleBorder.borderColor}!important`,
            "border-style": `${titleBorder.borderType}`,
            "border-top-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.top
            }px!important`,
            "border-right-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.right
            }px!important`,
            "border-bottom-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.bottom
            }px!important`,
            "border-left-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.left
            }px!important`,
            "border-top-left-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.top
            }px!important`,
            "border-top-right-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.right
            }px!important`,
            "border-bottom-left-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.bottom
            }px!important`,
            "border-bottom-right-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.left
            }px!important`,
            "border-bottom":
                titleBorder?.borderWidth?.[props.deviceType]?.bottom >= "0"
                    ? `${
                          titleBorder?.borderWidth?.[props.deviceType]?.bottom
                      }px ${titleBorder.borderType} ${
                          titleBorder.borderColor
                      }!important`
                    : "",
            "border-bottom-style": `${
                titleBorder.borderType == "none"
                    ? "solid"
                    : titleBorder.borderType
            }`,
            "border-bottom-width": `${
                titleBorder.borderType == "none" ? "3px" : ""
            }`,
            "border-bottom-color":
                titleBorder.borderType == "none"
                    ? "#793DC4"
                    : titleBorder.borderColor,
        };

        styles[`.${blockId} .premium-title .style6`] = {
            "border-color": `${titleBorder.borderColor}!important`,
            "border-style": `${titleBorder.borderType}`,
            "border-top-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.top
            }px!important`,
            "border-right-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.right
            }px!important`,
            "border-bottom-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.bottom
            }px!important`,
            "border-left-width": `${
                titleBorder?.borderWidth?.[props.deviceType]?.left
            }px!important`,
            "border-top-left-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.top
            }px!important`,
            "border-top-right-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.right
            }px!important`,
            "border-bottom-left-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.bottom
            }px!important`,
            "border-bottom-right-radius": `${
                titleBorder?.borderRadius?.[props.deviceType]?.left
            }px!important`,
            "border-bottom":
                titleBorder?.borderWidth?.[props.deviceType]?.bottom >= "0"
                    ? `${
                          titleBorder?.borderWidth?.[props.deviceType]?.bottom
                      }px ${titleBorder.borderType} ${
                          titleBorder.borderColor
                      }!important`
                    : "",
            "border-bottom-style": `${
                titleBorder.borderType == "none"
                    ? "solid"
                    : titleBorder.borderType
            }`,
            "border-bottom-width": `${
                titleBorder.borderType == "none" ? "3px" : ""
            }`,
            "border-bottom-color":
                titleBorder.borderType == "none"
                    ? "#793DC4"
                    : titleBorder.borderColor,
        };

        styles[`.${blockId} .premium-title-style2__wrap`] = {
            "background-color": `${titleStyles[0].BGColor}!important`,
        };

        styles[`.${blockId} .premium-title-style3__wrap`] = {
            "background-color": `${titleStyles[0].BGColor}!important`,
        };

        styles[`.${blockId} .premium-title-style5__wrap`] = {
            "border-bottom": `2px solid ${titleStyles[0].lineColor}!important`,
        };

        styles[`.${blockId} .premium-title-style6__wrap`] = {
            "border-bottom": `2px solid ${titleStyles[0].lineColor}!important`,
        };

        styles[`.${blockId} .premium-title-style6__wrap:before`] = {
            "border-bottom-color": `${titleStyles[0].triangleColor}!important`,
        };

        styles[`.${blockId} .premium-title-icon`] = {
            color: `${iconStyles[0].iconColor} !important`,
            "background-color": `${
                iconBackground.backgroundType === "solid"
                    ? iconBackground.backgroundColor
                    : "transparent"
            } !important`,
            "background-image": `${btnbg} !important`,
            "background-repeat": `${iconBackground.backgroundRepeat} !important`,
            "background-position": `${iconBackground.backgroundPosition} !important`,
            "background-size": `${iconBackground.backgroundSize} !important`,
            "background-attachment": `${
                iconBackground.fixed ? "fixed" : "unset"
            } !important`,
            "font-size": `${iconSize?.[props.deviceType]}${
                iconSize?.unit
            } !important`,
            "border-color": `${iconBorder.borderColor}!important`,
            "border-style": `${iconBorder.borderType}`,
            "border-top-width": `${
                iconBorder?.borderWidth?.[props.deviceType]?.top
            }px!important`,
            "border-right-width": `${
                iconBorder?.borderWidth?.[props.deviceType]?.right
            }px!important`,
            "border-bottom-width": `${
                iconBorder?.borderWidth?.[props.deviceType]?.bottom
            }px!important`,
            "border-left-width": `${
                iconBorder?.borderWidth?.[props.deviceType]?.left
            }px!important`,
            "border-top-left-radius": `${
                iconBorder?.borderRadius?.[props.deviceType]?.top
            }px!important`,
            "border-top-right-radius": `${
                iconBorder?.borderRadius?.[props.deviceType]?.right
            }px!important`,
            "border-bottom-left-radius": `${
                iconBorder?.borderRadius?.[props.deviceType]?.bottom
            }px!important`,
            "border-bottom-right-radius": `${
                iconBorder?.borderRadius?.[props.deviceType]?.left
            }px!important`,
            "padding-top": `${IconPaddingTop}${iconPadding.unit} !important`,
            "padding-right": `${IconPaddingRight}${iconPadding.unit} !important`,
            "padding-bottom": `${IconPaddingBottom}${iconPadding.unit} !important`,
            "padding-left": `${IconPaddingLeft}${iconPadding.unit} !important`,
            "margin-top": `${IconMarginTop}${iconPadding.unit} !important`,
            "margin-right": `${IconMarginRight}${iconPadding.unit} !important`,
            "margin-bottom": `${IconMarginBottom}${iconPadding.unit} !important`,
            "margin-left": `${IconMarginLeft}${iconPadding.unit} !important`,
            "text-shadow": `${iconshadow.horizontal}px ${iconshadow.vertical}px ${iconshadow.blur}px ${iconshadow.color} !important`,
        };

        styles[`.${blockId} .premium-lottie-animation svg`] = {
            width: `${iconSize?.[props.deviceType]}${iconSize?.unit}!important`,
            height: `${iconSize?.[props.deviceType]}${
                iconSize?.unit
            }!important`,
        };

        styles[`.${blockId} .premium-title-header img`] = {
            width: `${iconSize?.[props.deviceType]}${iconSize?.unit}!important`,
            height: `${iconSize?.[props.deviceType]}${
                iconSize?.unit
            }!important`,
        };

        styles[`.${blockId} .premium-title-bg-text:before`] = {
            content: `${BackText}`,
            width: `${textWidth}`,
            color: `${textStyles[0].textBackColor}`,
            "font-family": `${textTypography?.fontFamily}`,
            "font-size": `${textTypography?.fontSize?.[props.deviceType]}${
                textTypography?.fontSize?.unit
            }`,
            "font-weight": `${textTypography?.fontWeight}`,
            "letter-spacing": `${
                textTypography?.letterSpacing?.[props.deviceType]
            }${textTypography?.letterSpacing?.unit}`,
            "line-height": `${textTypography?.lineHeight?.[props.deviceType]}${
                textTypography?.lineHeight?.unit
            }`,
            "font-style": `${textTypography?.fontStyle}`,
            "text-transform": `${textTypography?.textTransform}`,
            "text-decoration": `${textTypography?.textDecoration}`,
            "mix-blend-mode": `${blend} !important`,
            "text-shadow": `${textBackshadow.horizontal}px ${textBackshadow.vertical}px ${textBackshadow.blur}px ${textBackshadow.color} !important`,
            "z-index": `${zIndex} !important`,
            top: `${verticalText?.[props.deviceType]}${
                verticalText?.unit
            } !important`,
            left: `${horizontalText?.[props.deviceType]}${
                horizontalText?.unit
            } !important`,
            transform: `rotate(${
                rotateText?.[props.deviceType]
            }deg) !important`,
            "-webkit-text-stroke-color": `${strokeStyles[0].strokeColor} !important`,
            "-webkit-text-stroke-width": `${
                strokeFull?.[props.deviceType]
            }px !important`,
        };

        styles[`.${blockId} .premium-title-style7-stripe-span`] = {
            width: `${stripeWidth?.[props.deviceType]}${
                stripeWidth?.unit
            }!important`,
            height: `${stripeHeight?.[props.deviceType]}${
                stripeHeight?.unit
            }!important`,
            "background-color": `${titleStyles[0].stripeColor}!important`,
        };

        styles[`.${blockId} .premium-title-style7-stripe__wrap`] = {
            "margin-top": `${stripeTopSpacing?.[props.deviceType]}${
                stripeTopSpacing?.unit
            }!important`,
            "margin-bottom": `${stripeBottomSpacing?.[props.deviceType]}${
                stripeBottomSpacing?.unit
            }!important`,
        };

        styles[
            `.${blockId} .premium-title-style9__wrap .premium-letters-container .premium-title-style9-letter`
        ] = {
            "font-family": `${titleTypography?.fontFamily}`,
            "font-size": `${titleTypography?.fontSize?.[props.deviceType]}${
                titleTypography?.fontSize?.unit
            }`,
            "font-weight": `${titleTypography?.fontWeight}`,
            "letter-spacing": `${
                titleTypography?.letterSpacing?.[props.deviceType]
            }${titleTypography?.letterSpacing?.unit}`,
            "line-height": `${titleTypography?.lineHeight?.[props.deviceType]}${
                titleTypography?.lineHeight?.unit
            }`,
            "font-style": `${titleTypography?.fontStyle}`,
            "text-shadow": `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color} !important`,
        };

        return generateCss(styles);
    };

    const saveTitleStyles = (value) => {
        const newUpdate = titleStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            titleStyles: newUpdate,
        });
    };

    const saveIconStyles = (value) => {
        const newUpdate = iconStyles.map((item, indexx) => {
            if (0 === indexx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            iconStyles: newUpdate,
        });
    };

    const saveTextStyles = (value) => {
        const newUpdate = textStyles.map((item, indx) => {
            if (0 === indx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            textStyles: newUpdate,
        });
    };

    const saveStrokeStyles = (value) => {
        const newUpdate = strokeStyles.map((item, i) => {
            if (0 === i) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            strokeStyles: newUpdate,
        });
    };

    const styleContainer = title.split("").map((letter) => {
        return (
            <RichText
                tagName="span"
                className={`premium-title-style9-letter`}
                value={letter}
                style={{
                    color: titleStyles[0].titleColor,
                }}
            />
        );
    });

    const reverse = reversedir ? -1 : 1;

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__("Title", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__(
                                    "Style",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={style}
                                onChange={(newSelect) =>
                                    setAttributes({ style: newSelect })
                                }
                                options={STYLE}
                            />
                            <ToggleControl
                                label={__(
                                    "Icon",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={iconValue}
                                onChange={(value) =>
                                    setAttributes({ iconValue: value })
                                }
                            />
                            {iconValue && (
                                <Fragment>
                                    <SelectControl
                                        label={__(
                                            "Icon Type",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={iconType}
                                        onChange={(newSelect) =>
                                            setAttributes({
                                                iconType: newSelect,
                                            })
                                        }
                                        options={ICON}
                                    />
                                    {iconType === "icon" && (
                                        <Fragment>
                                            <p>
                                                {__(
                                                    "Icon",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                            </p>
                                            <FontIconPicker
                                                icons={iconsList}
                                                value={icon}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        icon: value,
                                                    })
                                                }
                                                isMulti={false}
                                                noSelectedPlaceholder={__(
                                                    "Select Icon",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                            />
                                        </Fragment>
                                    )}
                                    {iconType === "lottie" && (
                                        <Fragment>
                                            <TextControl
                                                value={lottieURl}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        lottieURl: value,
                                                    })
                                                }
                                                label={__(
                                                    "Lottie Url",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                            />
                                            <ToggleControl
                                                label={__(
                                                    "Loop",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                checked={loop}
                                                onChange={(newValue) =>
                                                    setAttributes({
                                                        loop: newValue,
                                                    })
                                                }
                                                help={
                                                    loop
                                                        ? __(
                                                              "This option works only on the preview page",
                                                              "premium-blocks-for-gutenberg"
                                                          )
                                                        : ""
                                                }
                                            />
                                            <ToggleControl
                                                label={__(
                                                    "Reverse",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                checked={reversedir}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        reversedir: value,
                                                    })
                                                }
                                            />
                                        </Fragment>
                                    )}
                                    {iconType === "image" && (
                                        <Fragment>
                                            <PremiumMediaUpload
                                                type="image"
                                                imageID={imageID}
                                                imageURL={imageURL}
                                                onSelectMedia={(media) => {
                                                    setAttributes({
                                                        imageID: media.id,
                                                        imageURL: media.url,
                                                    });
                                                }}
                                                onRemoveImage={() =>
                                                    setAttributes({
                                                        imageID: "",
                                                        imageURL: "",
                                                    })
                                                }
                                            />
                                        </Fragment>
                                    )}
                                    <SelectControl
                                        label={__(
                                            "Icon Position",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={iconPosition}
                                        onChange={(newSelect) =>
                                            setAttributes({
                                                iconPosition: newSelect,
                                            })
                                        }
                                        options={POSITION}
                                    />
                                    {iconPosition === "top" &&
                                        style != "style3" &&
                                        style != "style4" && (
                                            <Fragment>
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
                                                    value={iconAlign}
                                                    onChange={(aligns) =>
                                                        setAttributes({
                                                            iconAlign: aligns,
                                                        })
                                                    }
                                                    label={__(
                                                        "Icon Alignment",
                                                        "premium-blocks-for-gutenberg"
                                                    )}
                                                    showIcons={true}
                                                />
                                            </Fragment>
                                        )}
                                </Fragment>
                            )}
                            {style === "style7" && (
                                <Fragment>
                                    <SelectControl
                                        label={__(
                                            "Stripe Position",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={stripePosition}
                                        onChange={(newSelect) =>
                                            setAttributes({
                                                stripePosition: newSelect,
                                            })
                                        }
                                        options={STRIPEPOSITION}
                                    />
                                    <ResponsiveRangeControl
                                        label={__(
                                            "Stripe Width",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={stripeWidth}
                                        units={["px", "em", "%"]}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                stripeWidth: newValue,
                                            })
                                        }
                                        showUnit={true}
                                        min={1}
                                        max={1000}
                                    />
                                    <ResponsiveRangeControl
                                        label={__(
                                            "Stripe Height",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={stripeHeight}
                                        units={["px", "em", "%"]}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                stripeHeight: newValue,
                                            })
                                        }
                                        showUnit={true}
                                        min={1}
                                        max={1000}
                                    />
                                    <ResponsiveRangeControl
                                        label={__(
                                            "Stripe Top Spacing",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={stripeTopSpacing}
                                        units={["px", "em", "%"]}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                stripeTopSpacing: newValue,
                                            })
                                        }
                                        showUnit={true}
                                        min={1}
                                        max={1000}
                                    />
                                    <ResponsiveRangeControl
                                        label={__(
                                            "Stripe Bottom Spacing",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={stripeBottomSpacing}
                                        units={["px", "em", "%"]}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                stripeBottomSpacing: newValue,
                                            })
                                        }
                                        showUnit={true}
                                        min={1}
                                        max={1000}
                                    />
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
                                        value={stripeAlign}
                                        onChange={(alignStripe) =>
                                            setAttributes({
                                                stripeAlign: alignStripe,
                                            })
                                        }
                                        label={__(
                                            "Stripe Alignment",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        showIcons={true}
                                    />
                                </Fragment>
                            )}
                            <RadioComponent
                                choices={[
                                    {
                                        value: "h1",
                                        label: __(
                                            "H1",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "h2",
                                        label: __(
                                            "H2",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "h3",
                                        label: __(
                                            "H3",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "h4",
                                        label: __(
                                            "H4",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "h5",
                                        label: __(
                                            "H5",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "h6",
                                        label: __(
                                            "H6",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "div",
                                        label: __(
                                            "Div",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                ]}
                                value={titleTag}
                                onChange={(newValue) =>
                                    setAttributes({ titleTag: newValue })
                                }
                                label={__(
                                    "Title Tag",
                                    "premium-blocks-for-gutenberg"
                                )}
                            />
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
                                value={align}
                                onChange={(alignn) =>
                                    setAttributes({ align: alignn })
                                }
                                label={__(
                                    "Alignment",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                            <ToggleControl
                                label={__(
                                    "Link",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={link}
                                onChange={(value) =>
                                    setAttributes({ link: value })
                                }
                            />
                            {link && (
                                <Fragment>
                                    <p>
                                        {__(
                                            "URL",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    </p>
                                    <TextControl
                                        value={url}
                                        onChange={(value) =>
                                            setAttributes({ url: value })
                                        }
                                        placeholder={__(
                                            "Enter URL",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    />
                                    <ToggleControl
                                        checked={target}
                                        label={__(
                                            "Open Link in new Tab",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        onChange={(value) =>
                                            setAttributes({ target: value })
                                        }
                                    />
                                </Fragment>
                            )}
                            <hr />
                            <ToggleControl
                                label={__(
                                    "background Text",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={backgroundText}
                                onChange={(value) =>
                                    setAttributes({ backgroundText: value })
                                }
                            />
                            {backgroundText && (
                                <Fragment>
                                    <TextControl
                                        label={__(
                                            "Text",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={BackText}
                                        onChange={(value) =>
                                            setAttributes({
                                                BackText: value,
                                            })
                                        }
                                    />
                                    <SelectControl
                                        label={__(
                                            "Width",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={textWidth}
                                        onChange={(newSelect) =>
                                            setAttributes({
                                                textWidth: newSelect,
                                            })
                                        }
                                        options={[
                                            {
                                                label: __(
                                                    "Auto",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                                value: "auto",
                                            },
                                            {
                                                label: __(
                                                    "Full Width",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                                value: "100%",
                                            },
                                        ]}
                                    />
                                </Fragment>
                            )}
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__("Title", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            {(style === "style8" || style === "style9") && (
                                <Fragment>
                                    <ResponsiveSingleRangeControl
                                        label={__(
                                            "Animation Delay",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={titleStyles[0].animateDelay}
                                        onChange={(value) =>
                                            saveTitleStyles({
                                                animateDelay: value,
                                            })
                                        }
                                        showUnit={false}
                                        defaultValue={2}
                                        min={1}
                                        max={30}
                                        step={0.5}
                                    />
                                </Fragment>
                            )}
                            {style === "style8" && (
                                <Fragment>
                                    <ResponsiveSingleRangeControl
                                        label={__(
                                            "Animation Duration",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={titleStyles[0].animateduration}
                                        onChange={(value) =>
                                            saveTitleStyles({
                                                animateduration: value,
                                            })
                                        }
                                        showUnit={false}
                                        defaultValue={1}
                                        step={0.5}
                                    />
                                </Fragment>
                            )}
                            <PremiumTypo
                                value={titleTypography}
                                onChange={(newValue) =>
                                    setAttributes({ titleTypography: newValue })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={titleStyles[0].titleColor}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    saveTitleStyles({ titleColor: newValue })
                                }
                            />
                            {style === "style8" && (
                                <AdvancedPopColorControl
                                    label={__(
                                        "Shiny Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={titleStyles[0].shinyColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        saveTitleStyles({
                                            shinyColor: newValue,
                                        })
                                    }
                                />
                            )}
                            {style === "style9" && (
                                <AdvancedPopColorControl
                                    label={__(
                                        "Blur Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={titleStyles[0].blurColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        saveTitleStyles({ blurColor: newValue })
                                    }
                                />
                            )}
                            {style === "style2" && (
                                <AdvancedPopColorControl
                                    label={__(
                                        "Background Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={titleStyles[0].BGColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        saveTitleStyles({ BGColor: newValue })
                                    }
                                />
                            )}
                            {style === "style3" && (
                                <AdvancedPopColorControl
                                    label={__(
                                        "Background Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={titleStyles[0].BGColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        saveTitleStyles({ BGColor: newValue })
                                    }
                                />
                            )}
                            {style === "style5" && (
                                <AdvancedPopColorControl
                                    label={__(
                                        "Line Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={titleStyles[0].lineColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        saveTitleStyles({ lineColor: newValue })
                                    }
                                />
                            )}
                            {style === "style6" && (
                                <AdvancedPopColorControl
                                    label={__(
                                        "Line Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={titleStyles[0].lineColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        saveTitleStyles({ lineColor: newValue })
                                    }
                                />
                            )}
                            {style === "style6" && (
                                <AdvancedPopColorControl
                                    label={__(
                                        "Triangle Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={titleStyles[0].triangleColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        saveTitleStyles({
                                            triangleColor: newValue,
                                        })
                                    }
                                />
                            )}
                            {style === "style7" && (
                                <AdvancedPopColorControl
                                    label={__(
                                        "Stripe Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={titleStyles[0].stripeColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        saveTitleStyles({
                                            stripeColor: newValue,
                                        })
                                    }
                                />
                            )}
                            <PremiumShadow
                                label={__(
                                    "Shadow",
                                    "premium-blocks-for-gutenberg"
                                )}
                                boxShadow={false}
                                value={titleShadow}
                                onChange={(value) =>
                                    setAttributes({ titleShadow: value })
                                }
                            />
                            {style === "style9" && (
                                <ResponsiveSingleRangeControl
                                    label={__(
                                        "Blur Shadow Value (px)",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={titleStyles[0].blurShadow}
                                    onChange={(value) =>
                                        saveTitleStyles({ blurShadow: value })
                                    }
                                    showUnit={false}
                                    defaultValue={120}
                                    min={10}
                                    max={500}
                                    step={10}
                                />
                            )}
                            {style != "style3" &&
                                style !== "style7" &&
                                style !== "style8" &&
                                style !== "style9" && (
                                    <Fragment>
                                        <PremiumBorder
                                            label={__(
                                                "Border",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            value={titleBorder}
                                            onChange={(value) =>
                                                setAttributes({
                                                    titleBorder: value,
                                                })
                                            }
                                        />
                                        <hr />
                                    </Fragment>
                                )}
                            <SpacingComponent
                                value={titleMargin}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Margin",
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ titleMargin: value })
                                }
                            />
                            <SpacingComponent
                                value={titlePadding}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ titlePadding: value })
                                }
                            />
                        </PanelBody>
                        {iconValue && (
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
                                    onChange={(newValue) =>
                                        setAttributes({ iconSize: newValue })
                                    }
                                    units={["px", "em", "%"]}
                                    showUnit={true}
                                    min={0}
                                    max={360}
                                    step={1}
                                />
                                {iconType === "icon" && (
                                    <AdvancedPopColorControl
                                        label={__(
                                            "Color",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        colorValue={iconStyles[0].iconColor}
                                        colorDefault={""}
                                        onColorChange={(newValue) =>
                                            saveIconStyles({
                                                iconColor: newValue,
                                            })
                                        }
                                    />
                                )}
                                <PremiumBackgroundControl
                                    value={iconBackground}
                                    onChange={(value) =>
                                        setAttributes({ iconBackground: value })
                                    }
                                />
                                {iconType === "icon" && (
                                    <PremiumShadow
                                        label={__(
                                            "Icon Shadow",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        boxShadow={false}
                                        value={iconshadow}
                                        onChange={(value) =>
                                            setAttributes({ iconshadow: value })
                                        }
                                    />
                                )}
                                <PremiumBorder
                                    label={__(
                                        "Border",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={iconBorder}
                                    onChange={(value) =>
                                        setAttributes({ iconBorder: value })
                                    }
                                />
                                <hr />
                                <SpacingComponent
                                    value={iconMargin}
                                    responsive={true}
                                    showUnits={true}
                                    label={__(
                                        "Margin",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    onChange={(value) =>
                                        setAttributes({ iconMargin: value })
                                    }
                                />
                                <SpacingComponent
                                    value={iconPadding}
                                    responsive={true}
                                    showUnits={true}
                                    label={__(
                                        "Padding",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    onChange={(value) =>
                                        setAttributes({
                                            iconPadding: value,
                                        })
                                    }
                                />
                            </PanelBody>
                        )}
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        {backgroundText && (
                            <PanelBody
                                title={__(
                                    "Background Text",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    value={textTypography}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            textTypography: newValue,
                                        })
                                    }
                                />
                                <ResponsiveRangeControl
                                    label={__(
                                        "Horizontal Offset",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={horizontalText}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            horizontalText: newValue,
                                        })
                                    }
                                    units={["px", "em", "%"]}
                                    showUnit={true}
                                    min={-500}
                                    max={500}
                                />
                                <ResponsiveRangeControl
                                    label={__(
                                        "Vertical Offset",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={verticalText}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            verticalText: newValue,
                                        })
                                    }
                                    units={["px", "em", "%"]}
                                    showUnit={true}
                                    min={-500}
                                    max={500}
                                    step={1}
                                />
                                <ResponsiveRangeControl
                                    label={__(
                                        "Rotate (degrees)",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={rotateText}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            rotateText: newValue,
                                        })
                                    }
                                    showUnit={false}
                                    min={0}
                                    max={360}
                                    step={1}
                                />
                                <AdvancedPopColorControl
                                    label={__(
                                        "Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={textStyles[0].textBackColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        saveTextStyles({
                                            textBackColor: newValue,
                                        })
                                    }
                                />
                                <PremiumShadow
                                    label={__(
                                        "Text Shadow",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    boxShadow={false}
                                    value={textBackshadow}
                                    onChange={(value) =>
                                        setAttributes({ textBackshadow: value })
                                    }
                                />
                                <ToggleControl
                                    label={__(
                                        "Stroke",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    checked={strokeStyles[0].stroke}
                                    onChange={(newValue) =>
                                        saveStrokeStyles({ stroke: newValue })
                                    }
                                />
                                <hr />
                                {strokeStyles[0].stroke && (
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Stroke Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={
                                                strokeStyles[0].strokeColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                saveStrokeStyles({
                                                    strokeColor: newValue,
                                                })
                                            }
                                        />
                                        <ResponsiveRangeControl
                                            label={__(
                                                "Stroke Full Width",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            value={strokeFull}
                                            onChange={(newValue) =>
                                                setAttributes({
                                                    strokeFull: newValue,
                                                })
                                            }
                                            showUnit={false}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                        <hr />
                                    </Fragment>
                                )}
                                <SelectControl
                                    label={__(
                                        "Blend Mode",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={blend}
                                    onChange={(newSelect) =>
                                        setAttributes({ blend: newSelect })
                                    }
                                    options={BLEND}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__(
                                        "z-index",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={zIndex}
                                    onChange={(value) =>
                                        setAttributes({ zIndex: value })
                                    }
                                    showUnit={false}
                                    defaultValue={0}
                                    min={0}
                                    max={100}
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
            <style>{loadStyles()}</style>
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-heading ${blockId}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{
                    textAlign: align?.[props.deviceType],
                }}
            >
                <div
                    className={`premium-title  ${
                        backgroundText ? "premium-title-bg-text" : ""
                    }`}
                    style={{
                        textAlign: align?.[props.deviceType],
                    }}
                    data-backgroundText={BackText}
                >
                    <div
                        className={`premium-title-container ${style}`}
                        data-blur-delay={titleStyles[0].animateDelay}
                        data-shiny-dur={titleStyles[0].animateduration}
                    >
                        {React.createElement(
                            titleTag,
                            {
                                className: `premium-title-header premium-title-${style}__wrap ${
                                    iconValue ? iconPosition : ""
                                } ${
                                    iconPosition == "top"
                                        ? `premium-title-${iconAlign?.["Desktop"]} premium-title-tablet-${iconAlign?.["Tablet"]} premium-title-mobile-${iconAlign?.["Mobile"]}`
                                        : ""
                                }`,
                                "data-blur-delay": `${titleStyles[0].animateDelay}`,
                                "data-shiny-dur": `${titleStyles[0].animateduration}`,
                                style: {
                                    ...paddingCss(
                                        titlePadding,
                                        props.deviceType
                                    ),
                                    ...marginCss(titleMargin, props.deviceType),
                                    ...typographyCss(
                                        titleTypography,
                                        props.deviceType
                                    ),
                                    color: titleStyles[0].titleColor,
                                    textShadow: `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color}`,
                                },
                            },
                            [
                                <Fragment>
                                    {style === "style7" ? (
                                        <Fragment>
                                            {iconPosition != "top" &&
                                                iconValue && (
                                                    <span
                                                        className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign?.["Desktop"]} premium-stripe-tablet-${stripeAlign?.["Tablet"]} premium-stripe-mobile-${stripeAlign?.["Mobile"]}`}
                                                    >
                                                        <span
                                                            className={`premium-title-style7-stripe-span`}
                                                        ></span>
                                                    </span>
                                                )}
                                            {!iconValue && (
                                                <span
                                                    className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign?.["Desktop"]} premium-stripe-tablet-${stripeAlign?.["Tablet"]} premium-stripe-mobile-${stripeAlign?.["Mobile"]}`}
                                                >
                                                    <span
                                                        className={`premium-title-style7-stripe-span`}
                                                    ></span>
                                                </span>
                                            )}
                                            <div
                                                className={`premium-title-style7-inner-title`}
                                            >
                                                {iconValue &&
                                                    iconType == "icon" && (
                                                        <i
                                                            className={`premium-title-icon ${icon}`}
                                                        />
                                                    )}
                                                {iconValue &&
                                                    iconType == "image" && (
                                                        <img
                                                            className={`premium-title-icon`}
                                                            src={imageURL}
                                                        />
                                                    )}
                                                {iconValue &&
                                                    iconType == "lottie" &&
                                                    lottieURl && (
                                                        <div className=" premium-title-icon premium-lottie-animation">
                                                            <Lottie
                                                                options={{
                                                                    loop: loop,
                                                                    path: lottieURl,
                                                                    rendererSettings:
                                                                        {
                                                                            preserveAspectRatio:
                                                                                "xMidYMid",
                                                                        },
                                                                }}
                                                                direction={
                                                                    reverse
                                                                }
                                                            />
                                                        </div>
                                                    )}
                                                {iconValue &&
                                                    iconPosition === "top" && (
                                                        <span
                                                            className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}
                                                        >
                                                            <span
                                                                className={`premium-title-style7-stripe-span`}
                                                            ></span>
                                                        </span>
                                                    )}
                                                <RichText
                                                    tagName="span"
                                                    className={`premium-title-text-title`}
                                                    value={title}
                                                    onChange={(newText) =>
                                                        setAttributes({
                                                            title: newText,
                                                        })
                                                    }
                                                    style={{
                                                        minHeight: "15px",
                                                    }}
                                                />
                                            </div>
                                        </Fragment>
                                    ) : style === "style9" ? (
                                        <Fragment>
                                            {iconValue &&
                                                iconType == "icon" && (
                                                    <i
                                                        className={`premium-title-icon ${icon}`}
                                                    />
                                                )}
                                            {iconValue &&
                                                iconType == "image" && (
                                                    <img
                                                        className={`premium-title-icon`}
                                                        src={imageURL}
                                                    />
                                                )}
                                            {iconValue &&
                                                iconType == "lottie" &&
                                                lottieURl && (
                                                    <div className=" premium-title-icon premium-lottie-animation">
                                                        <Lottie
                                                            options={{
                                                                loop: loop,
                                                                path: lottieURl,
                                                                rendererSettings:
                                                                    {
                                                                        preserveAspectRatio:
                                                                            "xMidYMid",
                                                                    },
                                                            }}
                                                            direction={reverse}
                                                        />
                                                    </div>
                                                )}

                                            <span
                                                className={`premium-letters-container`}
                                                style={{
                                                    ...paddingCss(
                                                        titlePadding,
                                                        props.deviceType
                                                    ),
                                                    ...marginCss(
                                                        titleMargin,
                                                        props.deviceType
                                                    ),
                                                    color: titleStyles[0]
                                                        .titleColor,
                                                }}
                                            >
                                                {styleContainer}
                                            </span>
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            {iconValue &&
                                                iconType == "icon" && (
                                                    <i
                                                        className={`premium-title-icon ${icon}`}
                                                    />
                                                )}
                                            {iconValue &&
                                                iconType == "image" && (
                                                    <img
                                                        className={`premium-title-icon`}
                                                        src={imageURL}
                                                    />
                                                )}
                                            {iconValue &&
                                                iconType == "lottie" &&
                                                lottieURl && (
                                                    <div className=" premium-title-icon premium-lottie-animation">
                                                        <Lottie
                                                            options={{
                                                                loop: loop,
                                                                path: lottieURl,
                                                                rendererSettings:
                                                                    {
                                                                        preserveAspectRatio:
                                                                            "xMidYMid",
                                                                    },
                                                            }}
                                                            direction={reverse}
                                                        />
                                                    </div>
                                                )}
                                            <RichText
                                                tagName="span"
                                                className={`premium-title-text-title`}
                                                onChange={(newValue) =>
                                                    setAttributes({
                                                        title: newValue,
                                                    })
                                                }
                                                value={title}
                                                style={{
                                                    minHeight: "15px",
                                                }}
                                            />
                                        </Fragment>
                                    )}
                                    {link && url !== " " && (
                                        <a
                                            rel="noopener noreferrer"
                                            target={"_self"}
                                            href={`${url}`}
                                        ></a>
                                    )}
                                </Fragment>,
                            ]
                        )}
                    </div>
                </div>
                {loadTextGoogleFonts}
                {loadTitleGoogleFonts}
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
