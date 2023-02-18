import classnames from "classnames";
import { generateCss, filterJsCss } from '@pbg/helpers';
const { Fragment } = wp.element;
const { RichText, useBlockProps } = wp.blockEditor;

const attributes = {
    "blockId": {
        "type": "string"
    },
    "classMigrate": {
        "type": "boolean",
        "default": false
    },
    "align": {
        "type": "object",
        "default": {
            "Desktop": "",
            "Tablet": "",
            "Mobile": ""
        }
    },
    "style": {
        "type": "string",
        "default": "default"
    },
    "title": {
        "type": "string",
        "default": "Premium Title"
    },
    "iconValue": {
        "type": "boolean",
        "default": false
    },
    "iconType": {
        "type": "string",
        "default": "icon"
    },
    "icons": {
        "type": "array",
        "default": [
            {
                "iconn": "dashicons admin-site",
                "link": "",
                "target": "_self",
                "size": "40",
                "width": "2",
                "title": "",
                "style": "default"
            }
        ]
    },
    "icon": {
        "type": "string",
        "default": "dashicons admin-site"
    },
    "iconPosition": {
        "type": "string",
        "default": "before"
    },
    "imageID": {
        "type": "number"
    },
    "imageURL": {
        "type": "string",
        "source": "attribute",
        "attribute": "src",
        "selector": ".premium-title-icon"
    },
    "link": {
        "type": "boolean",
        "default": false
    },
    "backgroundText": {
        "type": "boolean",
        "default": false
    },
    "BackText": {
        "type": "string",
        "default": "Awesome Title"
    },
    "textWidth": {
        "type": "number"
    },
    "url": {
        "type": "string",
        "default": "#"
    },
    "iconAlign": {
        "type": "object",
        "default": {
            "Desktop": "center",
            "Tablet": "center",
            "Mobile": "center"
        }
    },
    "stripePosition": {
        "type": "string",
        "default": "top"
    },
    "titleStyles": {
        "type": "array",
        "default": [
            {
                "titleColor": "",
                "shinyColor": "#fff",
                "blurColor": "#000",
                "BGColor": "#DDD0EF",
                "lineColor": "var(--pbg-global-color1,#0085BA)",
                "triangleColor": "var(--pbg-global-color1,#0085BA)",
                "stripeColor": "var(--pbg-global-color1,#0085BA)",
                "blurShadow": "120",
                "animateDelay": "2",
                "animateduration": "1"
            }
        ]
    },
    "titlePadding": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Tablet": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Mobile": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "unit": "px"
        }
    },
    "titleMargin": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Tablet": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Mobile": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "unit": "px"
        }
    },
    "titleBorder": {
        "type": "object",
        "default": {
            "borderType": "none",
            "borderColor": "",
            "borderWidth": {
                "Desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                }
            },
            "borderRadius": {
                "Desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                }
            }
        }
    },
    "titleShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0"
        }
    },
    "titleTypography": {
        "type": "object",
        "default": {
            "fontWeight": "Default",
            "fontStyle": "",
            "letterSpacing": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "fontFamily": "Default",
            "lineHeight": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "textDecoration": "",
            "textTransform": "",
            "fontSize": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            }
        }
    },
    "stripeAlign": {
        "type": "object",
        "default": {
            "Desktop": "center",
            "Tablet": "center",
            "Mobile": "center"
        }
    },
    "stripeWidth": {
        "type": "object",
        "default": {
            "Desktop": 120,
            "Tablet": 120,
            "Mobile": 120,
            "unit": "px"
        }
    },
    "stripeHeight": {
        "type": "object",
        "default": {
            "Desktop": 5,
            "Tablet": 5,
            "Mobile": 5,
            "unit": "px"
        }
    },
    "stripeTopSpacing": {
        "type": "object",
        "default": {
            "Desktop": 0,
            "Tablet": 0,
            "Mobile": 0,
            "unit": "px"
        }
    },
    "stripeBottomSpacing": {
        "type": "object",
        "default": {
            "Desktop": 0,
            "Tablet": 0,
            "Mobile": 0,
            "unit": "px"
        }
    },
    "textStyles": {
        "type": "array",
        "default": [
            {
                "textBackColor": "",
                "rotateText": 0,
                "rotateTextTablet": 0,
                "rotateTextMobile": 0
            }
        ]
    },
    "textTypography": {
        "type": "object",
        "default": {
            "fontWeight": "Default",
            "fontStyle": "",
            "letterSpacing": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "fontFamily": "Default",
            "lineHeight": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "textDecoration": "",
            "textTransform": "",
            "fontSize": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            }
        }
    },
    "textBackshadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0"
        }
    },
    "horizontalText": {
        "type": "object",
        "default": {
            "Desktop": 0,
            "Tablet": 0,
            "Mobile": 0,
            "unit": "px"
        }
    },
    "verticalText": {
        "type": "object",
        "default": {
            "Desktop": 0,
            "Tablet": 0,
            "Mobile": 0,
            "unit": "px"
        }
    },
    "rotateText": {
        "type": "object",
        "default": {
            "Desktop": 0,
            "Tablet": 0,
            "Mobile": 0,
            "unit": "deg"
        }
    },
    "iconStyles": {
        "type": "array",
        "default": [
            {
                "iconColor": ""
            }
        ]
    },
    "iconPadding": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Tablet": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Mobile": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "unit": "px"
        }
    },
    "iconMargin": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Tablet": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Mobile": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "unit": "px"
        }
    },
    "iconBackground": {
        "type": "object",
        "default": {
            "backgroundType": "",
            "backgroundColor": "",
            "backgroundImageID": "",
            "backgroundImageURL": "",
            "backgroundPosition": "",
            "backgroundRepeat": "",
            "backgroundSize": "",
            "fixed": false,
            "gradientLocationOne": "0",
            "gradientColorTwo": "",
            "gradientLocationTwo": "100",
            "gradientAngle": "180",
            "gradientPosition": "center center",
            "gradientType": "linear"
        }
    },
    "iconSize": {
        "type": "object",
        "default": {
            "Desktop": 40,
            "Tablet": 40,
            "Mobile": 40,
            "unit": "px"
        }
    },
    "iconBorder": {
        "type": "object",
        "default": {
            "borderType": "none",
            "borderColor": "",
            "borderWidth": {
                "Desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                }
            },
            "borderRadius": {
                "Desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                }
            }
        }
    },
    "strokeStyles": {
        "type": "array",
        "default": [
            {
                "stroke": false,
                "strokeColor": ""
            }
        ]
    },
    "strokeFull": {
        "type": "object",
        "default": {
            "Desktop": "",
            "Tablet": "",
            "Mobile": ""
        }
    },
    "iconBGColor": {
        "type": "string"
    },
    "hideDesktop": {
        "type": "boolean",
        "default": ""
    },
    "hideTablet": {
        "type": "boolean",
        "default": ""
    },
    "hideMobile": {
        "type": "boolean",
        "default": ""
    },
    "z_index": {
        "type": "number"
    },
    "blend": {
        "type": "string"
    },
    "lottieURl": {
        "type": "string"
    },
    "loop": {
        "type": "boolean",
        "default": true
    },
    "reversedir": {
        "type": "boolean",
        "default": false
    },
    "target": {
        "type": "boolean",
        "default": false
    },
    "zIndex": {
        "type": "number"
    },
    "titleTag": {
        "type": "string",
        "default": "h2"
    },
    "iconshadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0"
        }
    },
}

const deprecated = {
    attributes: attributes,
    isEligible(attributes) {
        return !attributes?.fancyStyles;
    },
    migrate: (attributes) => {
        let newAttributes = {
            "icons": [
                {
                    "iconn": attributes.icon ? attributes.icon : "dashicons admin-site",
                    "link": "",
                    "target": "_self",
                    "size": "40",
                    "width": "2",
                    "title": "",
                    "style": "default"
                }
            ],
            icon: attributes.icon ? attributes.icon : "dashicons admin-site"
        }
        return Object.assign(attributes, newAttributes)
    },
    save: props => {
        const { attributes, className } = props
        const {
            blockId,
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
            link,
            url,
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
            backgroundText,
            BackText,
            textWidth,
            blend,
            zIndex,
            hideDesktop,
            hideTablet,
            hideMobile,
            iconshadow,
            textBackshadow,
            textTypography,
            titleTypography,
            titleShadow,
        } = attributes;

        const styleContainer = title.split("").map((letter) => {
            return (
                <RichText.Content
                    tagName="span"
                    className={`premium-title-style9-letter`}
                    value={letter}
                    style={filterJsCss({
                        color: titleStyles[0].titleColor,
                    })}
                />
            );
        });

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
                "--shadow-value": `${titleStyles[0].blurShadow}px!important`
            };
            styles[`.${blockId} .premium-title .default .premium-title-header`] = {
                "border-color": `${titleBorder.borderColor}!important`,
                "border-style": `${titleBorder.borderType == "none"
                    ? "none"
                    : `${titleBorder.borderType} !important`
                    }`
            };
            styles[`.${blockId} .premium-title .style1 .premium-title-header`] = {
                "border-color": `${titleBorder.borderColor}!important`,
                "border-style": `${titleBorder.borderType == "none"
                    ? "none"
                    : `${titleBorder.borderType} !important`
                    }`,
                "border-left-style": `${titleBorder.borderType == "none"
                    ? "solid"
                    : titleBorder.borderType
                    }`,
                "border-left-width": `${titleBorder.borderType == "none" ? "3px" : ""
                    }`,
                "border-left-color":
                    titleBorder.borderType == "none"
                        ? "var(--pbg-global-color1,#0085BA)"
                        : titleBorder.borderColor,
            };

            styles[`.${blockId} .premium-title .style2`] = {
                "border-color": `${titleBorder.borderColor}!important`,
                "border-style": `${titleBorder.borderType}`,
                "border-bottom-style": `${titleBorder.borderType == "none"
                    ? "solid"
                    : titleBorder.borderType
                    }`,
                "border-bottom-width": `${titleBorder.borderType == "none" ? "3px" : ""
                    }`,
                "border-bottom-color":
                    titleBorder.borderType == "none"
                        ? "var(--pbg-global-color1,#0085BA)"
                        : titleBorder.borderColor,
            };

            styles[`.${blockId} .premium-title .style4`] = {
                "border-color": `${titleBorder.borderColor}!important`,
                "border-style": `${titleBorder.borderType}`,
                "border-bottom-style": `${titleBorder.borderType == "none"
                    ? "solid"
                    : titleBorder.borderType
                    }`,
                "border-bottom-width": `${titleBorder.borderType == "none" ? "3px" : ""
                    }`,
                "border-bottom-color":
                    titleBorder.borderType == "none"
                        ? "var(--pbg-global-color1,#0085BA)"
                        : titleBorder.borderColor,
            };

            styles[`.${blockId} .premium-title .style5`] = {
                "border-color": `${titleBorder.borderColor}!important`,
                "border-style": `${titleBorder.borderType}`,
                "border-bottom-style": `${titleBorder.borderType == "none"
                    ? "solid"
                    : titleBorder.borderType
                    }`,
                "border-bottom-width": `${titleBorder.borderType == "none" ? "3px" : ""
                    }`,
                "border-bottom-color":
                    titleBorder.borderType == "none"
                        ? "var(--pbg-global-color1,#0085BA)"
                        : titleBorder.borderColor,
            };

            styles[`.${blockId} .premium-title .style6`] = {
                "border-color": `${titleBorder.borderColor}!important`,
                "border-style": `${titleBorder.borderType}`,
                "border-bottom-style": `${titleBorder.borderType == "none"
                    ? "solid"
                    : titleBorder.borderType
                    }`,
                "border-bottom-width": `${titleBorder.borderType == "none" ? "3px" : ""
                    }`,
                "border-bottom-color":
                    titleBorder.borderType == "none"
                        ? "var(--pbg-global-color1,#0085BA)"
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
                "background-color": `${iconBackground.backgroundType === "solid"
                    ? iconBackground.backgroundColor
                    : "transparent"
                    } !important`,
                "background-image": `${btnbg} !important`,
                "background-repeat": `${iconBackground.backgroundRepeat} !important`,
                "background-position": `${iconBackground.backgroundPosition} !important`,
                "background-size": `${iconBackground.backgroundSize} !important`,
                "background-attachment": `${iconBackground.fixed ? "fixed" : "unset"
                    } !important`,
                "border-color": `${iconBorder.borderColor}!important`,
                "border-style": `${iconBorder.borderType}!important`,
                "text-shadow": `${iconshadow.horizontal}px ${iconshadow.vertical}px ${iconshadow.blur}px ${iconshadow.color} !important`,
            };

            styles[`.${blockId} .premium-title-bg-text:before`] = {
                content: `${BackText}`,
                width: `${textWidth}`,
                color: `${textStyles[0].textBackColor}`,
                "font-family": `${textTypography?.fontFamily}`,
                "font-weight": `${textTypography?.fontWeight}`,
                "font-style": `${textTypography?.fontStyle}`,
                "text-transform": `${textTypography?.textTransform}`,
                "text-decoration": `${textTypography?.textDecoration}`,
                "mix-blend-mode": `${blend} !important`,
                "text-shadow": `${textBackshadow.horizontal}px ${textBackshadow.vertical}px ${textBackshadow.blur}px ${textBackshadow.color} !important`,
                "z-index": `${zIndex} !important`,
                "-webkit-text-stroke-color": `${strokeStyles[0].strokeColor} !important`,
            };

            styles[`.${blockId} .premium-title-style7-stripe-span`] = {
                "background-color": `${titleStyles[0].stripeColor}!important`,
            };

            styles[
                `.${blockId} .premium-title-style9__wrap .premium-letters-container`
            ] = {
                "font-family": `${titleTypography?.fontFamily}`,
                "font-weight": `${titleTypography?.fontWeight}`,
                "letter-spacing": `${titleTypography?.letterSpacing}`,
                "line-height": `${titleTypography?.lineHeight}`,
                "font-style": `${titleTypography?.fontStyle}`,
                "text-shadow": `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color} !important`,
            };

            styles[
                `.${blockId} .premium-title-text-title`
            ] = {
                "font-family": `${titleTypography?.fontFamily}`,
                "font-weight": `${titleTypography?.fontWeight}`,
                "letter-spacing": `${titleTypography?.letterSpacing}`,
                "line-height": `${titleTypography?.lineHeight}`,
                "font-style": `${titleTypography?.fontStyle}`,
                "text-shadow": `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color} !important`,
            };

            return generateCss(styles);
        };

        return (
            <div
                {...useBlockProps.save({
                    className: classnames(className, `premium-heading ${blockId}`, {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }),
                })}
            >
                <style>{loadStyles()}</style>
                <div
                    className={`premium-title   ${backgroundText ? "premium-title-bg-text" : ""
                        }`}
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
                                className: `premium-title-header premium-title-${style}__wrap ${iconValue ? iconPosition : ""
                                    } ${iconPosition == "top"
                                        ? `premium-title-${iconAlign?.["Desktop"]} premium-title-tablet-${iconAlign?.["Tablet"]} premium-title-mobile-${iconAlign?.["Mobile"]}`
                                        : ""
                                    }`,
                                "data-blur-delay": `${titleStyles[0].animateDelay}`,
                                "data-shiny-dur": `${titleStyles[0].animateduration}`
                            },
                            [
                                <Fragment>
                                    {style === "style7" ? (
                                        <Fragment>
                                            {iconPosition != "top" && iconValue && (
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
                                                    iconType == "lottie" && (
                                                        <div
                                                            className="premium-title-icon premium-lottie-animation"
                                                            data-loop={loop}
                                                            data-lottieurl={`${lottieURl}`}
                                                            data-reverse={
                                                                reversedir
                                                            }
                                                            data-trigger={"none"}
                                                        ></div>
                                                    )}

                                                {iconPosition === "top" && (
                                                    <span
                                                        className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign?.["Desktop"]} premium-stripe-tablet-${stripeAlign?.["Tablet"]} premium-stripe-mobile-${stripeAlign?.["Mobile"]}`}
                                                    >
                                                        <span
                                                            className={`premium-title-style7-stripe-span`}
                                                        ></span>
                                                    </span>
                                                )}
                                                <RichText.Content
                                                    tagName="span"
                                                    className={`premium-title-text-title`}
                                                    value={title}
                                                    style={filterJsCss({
                                                        color: titleStyles[0].titleColor,
                                                        textShadow: `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color}`,
                                                    })}
                                                />
                                            </div>
                                        </Fragment>
                                    ) : style === "style9" ? (
                                        <Fragment>
                                            {iconValue && iconType == "icon" && (
                                                <i
                                                    className={`premium-title-icon ${icon}`}
                                                />
                                            )}
                                            {iconValue && iconType == "image" && (
                                                <img
                                                    className={`premium-title-icon`}
                                                    src={imageURL}
                                                />
                                            )}
                                            {iconValue && iconType == "lottie" && (
                                                <div
                                                    className="premium-title-icon premium-lottie-animation"
                                                    data-loop={loop}
                                                    data-lottieurl={`${lottieURl}`}
                                                    data-reverse={reversedir}
                                                    data-trigger={"none"}
                                                ></div>
                                            )}
                                            <span
                                                className={`premium-letters-container`}
                                                style={filterJsCss({
                                                    color: titleStyles[0].titleColor,
                                                    textShadow: `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color}`,
                                                })}
                                            >
                                                {styleContainer}
                                            </span>
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            {iconValue && iconType == "icon" && (
                                                <i
                                                    className={`premium-title-icon ${icon}`}
                                                />
                                            )}
                                            {iconValue && iconType == "image" && (
                                                <img
                                                    className={`premium-title-icon`}
                                                    src={imageURL}
                                                />
                                            )}
                                            {iconValue && iconType == "lottie" && (
                                                <div
                                                    className="premium-title-icon premium-lottie-animation"
                                                    data-loop={loop}
                                                    data-lottieurl={`${lottieURl}`}
                                                    data-reverse={reversedir}
                                                    data-trigger={"none"}
                                                ></div>
                                            )}
                                            <RichText.Content
                                                tagName="span"
                                                className={`premium-title-text-title`}
                                                value={title}
                                                style={filterJsCss({
                                                    minHeight: "15px",
                                                    color: titleStyles[0].titleColor,
                                                    textShadow: `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color}`,
                                                })}
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
            </div>
        )
    }
};

export default deprecated