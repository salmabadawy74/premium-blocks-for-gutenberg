import classnames from "classnames";
import hexToRgba from "hex-to-rgba";
import { generateBlockId } from "../../components/HelperFunction";
import { generateCss, filterJsCss, gradientBackground } from "@pbg/helpers";
const { RichText, useBlockProps } = wp.blockEditor;
const { __ } = wp.i18n;
const className = "premium-button";

const attributes = {
    borderButton: {
        type: "boolean",
        default: false,
    },
    btnText: {
        type: "string",
        default: __("Premium Button"),
    },
    btnSize: {
        type: "string",
        default: "md",
    },
    btnAlign: {
        type: "string",
        default: "center",
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-button",
    },
    btnTarget: {
        type: "boolean",
        default: false,
    },
    effect: {
        type: "string",
        default: "none",
    },
    effectDir: {
        type: "string",
        default: "top",
    },
    textColor: {
        type: "string",
    },
    textHoverColor: {
        type: "string",
    },
    backColor: {
        type: "string",
    },
    backOpacity: {
        type: "number",
        default: "1",
    },
    backHoverColor: {
        type: "string",
    },
    slideColor: {
        type: "string",
    },
    textSizeUnit: {
        type: "string",
        default: "px",
    },
    textSize: {
        type: "number",
        default: "20",
    },
    textSizeTablet: {
        type: "number",
    },
    textSizeMobile: {
        type: "number",
    },
    textFontFamily: {
        type: "string",
    },
    textLetter: {
        type: "number",
    },
    textStyle: {
        type: "string",
    },
    textUpper: {
        type: "boolean",
    },
    textWeight: {
        type: "number",
        default: 500,
    },
    textLine: {
        type: "number",
    },
    borderType: {
        type: "string",
        default: "none",
    },
    borderWidth: {
        type: "number",
        default: "1",
    },
    borderTop: {
        type: "number",
    },
    borderRight: {
        type: "number",
    },
    borderBottom: {
        type: "number",
    },
    borderLeft: {
        type: "number",
    },
    borderRadius: {
        type: "number",
    },
    borderColor: {
        type: "string",
    },
    borderHoverColor: {
        type: "string",
    },
    padding: {
        type: "number",
    },
    paddingU: {
        type: "string",
    },
    shadowColor: {
        type: "string",
    },
    shadowBlur: {
        type: "number",
        default: "0",
    },
    shadowHorizontal: {
        type: "number",
        default: "0",
    },
    shadowVertical: {
        type: "number",
        default: "0",
    },
    btnShadowColor: {
        type: "string",
    },
    btnShadowBlur: {
        type: "number",
        default: "0",
    },
    btnShadowHorizontal: {
        type: "number",
        default: "0",
    },
    btnShadowVertical: {
        type: "number",
        default: "0",
    },
    btnShadowPosition: {
        type: "string",
        default: "",
    },
    block_id: {
        type: "string",
    },
    hideDesktop: {
        type: "boolean",
        default: false,
    },
    classMigrate: {
        type: "boolean",
        default: false,
    },
    hideTablet: {
        type: "boolean",
        default: false,
    },
    hideMobile: {
        type: "boolean",
        default: false,
    },
};

const v7Attrinutes = {
    borderButton: {
        type: "boolean",
        default: false,
    },
    btnText: {
        type: "string",
        default: __("Premium Button", "premium-blocks-for-gutenberg"),
    },
    btnSize: {
        type: "string",
        default: "md",
    },
    btnAlign: {
        type: "string",
        default: "center",
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-button",
    },
    btnTarget: {
        type: "boolean",
        default: false,
    },
    effect: {
        type: "string",
        default: "none",
    },
    effectDir: {
        type: "string",
        default: "top",
    },
    slideColor: {
        type: "string",
    },
    block_id: {
        type: "string",
    },
    hideDesktop: {
        type: "boolean",
        default: false,
    },
    classMigrate: {
        type: "boolean",
        default: false,
    },
    hideTablet: {
        type: "boolean",
        default: false,
    },
    hideMobile: {
        type: "boolean",
        default: false,
    },
    borderWidth: {
        type: "number",
        default: "1",
    },
    borderTop: {
        type: "number",
    },
    borderRight: {
        type: "number",
    },
    borderBottom: {
        type: "number",
    },
    borderLeft: {
        type: "number",
    },
    textStyles: {
        type: "array",
        default: [
            {
                textSizeUnit: "px",
                textSize: 20,
                textSizeTablet: "",
                textSizeMobile: "",
                textFontFamily: __("Default", "premium-blocks-for-gutenberg"),
                textLetter: "",
                textStyle: "",
                textUpper: false,
                textWeight: "",
                textLine: "",
                shadowColor: "",
                shadowBlur: "0",
                shadowHorizontal: "0",
                shadowVertical: "0",
            },
        ],
    },
    btnStyles: {
        type: "array",
        default: [
            {
                textColor: "",
                textHoverColor: "",
                backColor: "",
                backOpacity: 1,
                backHoverColor: "",
                borderType: "none",
                borderRadius: "",
                borderColor: "",
                borderHoverColor: "",
                btnShadowColor: "",
                btnShadowBlur: 0,
                btnShadowHorizontal: 0,
                btnShadowVertical: 0,
                btnShadowPosition: "",
                padding: "",
                paddingU: "px",
            },
        ],
    },
};
const new_Attributes = {
    showIcon: {
        type: "boolean",
        default: false,
    },
    icon: {
        type: "string",
        default: "dashicons dashicons-admin-site",
    },
    iconPosition: {
        type: "string",
        default: "before",
    },
    iconSize: {
        type: "object",
        default: {
            Desktop: "30",
            Tablet: "30",
            Mobile: "30",
            unit: "px",
        },
    },
    iconSpacing: {
        type: "object",
        default: {
            Desktop: {
                top: "15",
                right: "15",
                bottom: "15",
                left: "15",
            },
            Tablet: {
                top: "",
                right: "",
                bottom: "",
                left: "",
            },
            Mobile: {
                top: "",
                right: "",
                bottom: "",
                left: "",
            },
            unit: "px",
        },
    },
    iconColor: {
        type: "string",
        default: "",
    },
    iconHoverColor: {
        type: "string",
        default: "",
    },
    iconShadow: {
        type: "object",
        default: {
            color: "undefined",
            blur: "10",
            horizontal: "0",
            vertical: "0",
        },
    },
};

const v8Attrinutes = {
    "blockId": {
        "type": "string"
    },
    "borderButton": {
        "type": "boolean",
        "default": false
    },
    "btnText": {
        "type": "string",
        "default": "Premium Button"
    },
    "btnSize": {
        "type": "string",
        "default": "md"
    },
    "btnAlign": {
        "type": "object",
        "default": {
            "Desktop": "center",
            "Tablet": "center",
            "Mobile": "center"
        }
    },
    "btnLink": {
        "type": "string",
        "source": "attribute",
        "attribute": "href",
        "selector": ".premium-button"
    },
    "btnTarget": {
        "type": "boolean",
        "default": false
    },
    "showIcon": {
        "type": "boolean",
        "default": false
    },
    "icon": {
        "type": "string",
        "default": "dashicons admin-site"
    },
    "iconType": {
        "type": "string",
        "default": "fe"
    },
    "icons": {
        "type": "array",
        "default": [
            {
                "iconn": "dashicons admin-site",
                "link": "",
                "target": "_self",
                "size": "25",
                "width": "2",
                "title": "",
                "style": "default"
            }
        ]
    },
    "iconPosition": {
        "type": "string",
        "default": "before"
    },
    "effect": {
        "type": "string",
        "default": "none"
    },
    "effectDir": {
        "type": "string",
        "default": "top"
    },
    "slideColor": {
        "type": "string"
    },
    "block_id": {
        "type": "string"
    },
    "hideDesktop": {
        "type": "boolean",
        "default": false
    },
    "classMigrate": {
        "type": "boolean",
        "default": false
    },
    "hideTablet": {
        "type": "boolean",
        "default": false
    },
    "hideMobile": {
        "type": "boolean",
        "default": false
    },
    "btnStyles": {
        "type": "array",
        "default": [
            {
                "textColor": "",
                "textHoverColor": "",
                "backColor": "",
                "backOpacity": 1,
                "backHoverColor": "",
                "borderHoverColor": ""
            }
        ]
    },
    "border": {
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
    "typography": {
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
    "textShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0"
        }
    },
    "boxShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0",
            "position": ""
        }
    },
    "padding": {
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
    "iconSize": {
        "type": "object",
        "default": {
            "Desktop": "25",
            "Tablet": "25",
            "Mobile": "25",
            "unit": "px"
        }
    },
    "iconSpacing": {
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
    "iconColor": {
        "type": "string",
        "default": ""
    },
    "iconHoverColor": {
        "type": "string",
        "default": ""
    },
    "backgroundOptions": {
        "type": "object",
        "default": {
            "backgroundType": "",
            "backgroundColor": "",
            "backgroundImageID": "",
            "backgroundImageURL": "",
            "backgroundPosition": "center center",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "cover",
            "fixed": false,
            "gradientLocationOne": "0",
            "gradientColorTwo": "",
            "gradientLocationTwo": "100",
            "gradientType": "linear",
            "gradientAngle": "180",
            "gradientPosition": "center center"
        }
    },
    "backgroundPresets": {
        "type": "string",
        "default": ""
    }
}

const deprecatedContent = [
    {
        attributes: Object.assign(new_Attributes, v8Attrinutes),
        migrate: (attributes) => {
            let newAttributes = {
                icon: attributes.icon ? attributes.icon : "dashicons admin-site",
                icons: [
                    {
                        "iconn": attributes.icon ? attributes.icon : "dashicons admin-site",
                        "link": "",
                        "target": "_self",
                        "size": attributes.iconSize['Desktop'] ? attributes.iconSize['Desktop'] : "25",
                        "width": "2",
                        "title": "",
                        "style": "default"
                    }
                ],
                iconType: "fe"
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const { className } = props;
            const {
                btnText,
                btnSize,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                slideColor,
                block_id,
                hideDesktop,
                hideTablet,
                hideMobile,
                btnStyles,
                border,
                typography,
                textShadow,
                boxShadow,
                blockId,
                showIcon,
                icon,
                iconPosition,
                iconColor,
                iconHoverColor,
                iconShadow,
                backgroundOptions,
            } = props.attributes;
            const loadStyles = () => {
                const styles = {};

                styles[`.${blockId} .premium-button-icon:hover`] = {
                    color: `${iconHoverColor}!important`,
                };
                styles[`.${blockId}.premium-button__wrap .premium-button:hover`] = {
                    "background-color": `${btnStyles[0].backHoverColor}!important`,
                    color: `${btnStyles[0].textHoverColor}!important`,
                    "border-color": `${btnStyles[0].borderHoverColor}!important`,
                };
                styles[`.${blockId}.premium-button__wrap .premium-button:hover a`] = {
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
                <div
                    {...useBlockProps.save({
                        className: classnames(
                            className,
                            `premium-button__wrap ${blockId} premium-button__${effect} premium-button__${effectDir} `,
                            {
                                " premium-desktop-hidden": hideDesktop,
                                " premium-tablet-hidden": hideTablet,
                                " premium-mobile-hidden": hideMobile,
                            }
                        ),
                    })}
                >
                    <style>{loadStyles()}</style>
                    {React.createElement(
                        "div",
                        {
                            className: `premium-button wp-block-button__link premium-button__${btnSize} premium-button__${iconPosition}`,
                            style: {
                                boxShadow: `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.color} ${boxShadow.position}`,
                                borderStyle: border?.borderType,
                                borderColor: border?.borderColor,
                                ...gradientBackground(backgroundOptions),
                            },
                        },
                        [
                            <Fragment>
                                {showIcon && iconPosition == "before" && (
                                    <i
                                        className={`premium-button-icon ${icon}`}
                                        style={filterJsCss({
                                            color: iconColor,
                                            textShadow: `${iconShadow.horizontal}px ${iconShadow.vertical}px ${iconShadow.blur}px ${iconShadow.color}`,
                                        })}
                                    ></i>
                                )}
                                <RichText.Content
                                    tagName="a"
                                    value={btnText}
                                    href={btnLink}
                                    rel="noopener noreferrer"
                                    target={btnTarget ? "_blank" : "_self"}
                                    style={filterJsCss({
                                        color: btnStyles[0].textColor,
                                        fontStyle: typography?.fontStyle,
                                        fontFamily: typography?.fontFamily,
                                        fontWeight: typography?.fontWeight,
                                        textDecoration: typography?.textDecoration,
                                        textTransform: typography?.textTransform,
                                        textShadow: `${textShadow?.horizontal}px ${textShadow?.vertical}px ${textShadow?.blur}px ${textShadow?.color}`,
                                    })}
                                />
                                {showIcon && iconPosition == "after" && (
                                    <i
                                        className={`premium-button-icon ${icon}`}
                                        style={filterJsCss({
                                            color: iconColor,
                                            textShadow: `${iconShadow.horizontal}px ${iconShadow.vertical}px ${iconShadow.blur}px ${iconShadow.color}`,
                                        })}
                                    ></i>
                                )}
                            </Fragment>,
                        ]
                    )}
                </div>
            );
        },
    },
    {
        attributes: Object.assign(v7Attrinutes, new_Attributes),
        save: (props) => {
            const {
                btnText,
                btnSize,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                slideColor,
                block_id,
                hideDesktop,
                hideTablet,
                hideMobile,
                btnStyles,
                border,
                typography,
                textShadow,
                boxShadow,
                blockId,
                showIcon,
                icon,
                iconPosition,
                iconColor,
                iconHoverColor,
                iconShadow,
                backgroundOptions,
            } = props.attributes;

            const loadStyles = () => {
                const styles = {};

                styles[`.${blockId} .premium-button-icon:hover`] = {
                    color: `${iconHoverColor}!important`,
                };
                styles[
                    `.${blockId}.premium-button__wrap:hover .premium-button`
                ] = {
                    "background-color": `${btnStyles[0].backHoverColor}!important`,
                    color: `${btnStyles[0].textHoverColor}!important`,
                    "border-color": `${btnStyles[0].borderHoverColor}!important`,
                };
                styles[
                    `.${blockId}.premium-button__wrap:hover .premium-button a`
                ] = {
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
                <div
                    {...useBlockProps.save({
                        className: classnames(
                            className,
                            `premium-button__wrap ${blockId} premium-button__${effect} premium-button__${effectDir} `,
                            {
                                " premium-desktop-hidden": hideDesktop,
                                " premium-tablet-hidden": hideTablet,
                                " premium-mobile-hidden": hideMobile,
                            }
                        ),
                    })}
                >
                    <style>{loadStyles()}</style>
                    {React.createElement(
                        "div",
                        {
                            className: `premium-button wp-block-button__link premium-button__${btnSize} premium-button__${iconPosition}`,
                            style: {
                                boxShadow: `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.color} ${boxShadow.position}`,
                                borderStyle: border?.borderType,
                                borderColor: border?.borderColor,
                                ...gradientBackground(backgroundOptions),
                            },
                        },
                        [
                            <Fragment>
                                {showIcon && iconPosition == "before" && (
                                    <i
                                        className={`premium-button-icon ${icon}`}
                                        style={filterJsCss({
                                            color: iconColor,
                                            textShadow: `${iconShadow.horizontal}px ${iconShadow.vertical}px ${iconShadow.blur}px ${iconShadow.color}`,
                                        })}
                                    ></i>
                                )}
                                <RichText.Content
                                    tagName="a"
                                    value={btnText}
                                    href={btnLink}
                                    rel="noopener noreferrer"
                                    target={btnTarget ? "_blank" : "_self"}
                                    style={filterJsCss({
                                        color: btnStyles[0].textColor,
                                        fontStyle: typography?.fontStyle,
                                        fontFamily: typography?.fontFamily,
                                        fontWeight: typography?.fontWeight,
                                        textDecoration:
                                            typography?.textDecoration,
                                        textTransform:
                                            typography?.textTransform,
                                        textShadow: `${textShadow?.horizontal}px ${textShadow?.vertical}px ${textShadow?.blur}px ${textShadow?.color}`,
                                    })}
                                />
                                {showIcon && iconPosition == "after" && (
                                    <i
                                        className={`premium-button-icon ${icon}`}
                                        style={filterJsCss({
                                            color: iconColor,
                                            textShadow: `${iconShadow.horizontal}px ${iconShadow.vertical}px ${iconShadow.blur}px ${iconShadow.color}`,
                                        })}
                                    ></i>
                                )}
                            </Fragment>,
                        ]
                    )}
                </div>
            );
        },
    },
    {
        attributes: Object.assign(v7Attrinutes, new_Attributes),
        migrate: (attributes) => {
            let newAttributes = {
                blockId: attributes.block_id
                    ? "premium-button-" + generateBlockId(attributes.block_id)
                    : "",
                btnAlign: {
                    Desktop: attributes?.btnAlign || "center",
                    Tablet: attributes?.btnAlign || "center",
                    Mobile: attributes?.btnAlign || "center",
                },
                border: {
                    borderType: attributes.btnStyles[0].borderType || "none",
                    borderColor: attributes.btnStyles[0].borderColor || "",
                    borderWidth: {
                        Desktop: {
                            top: attributes.borderTop || "",
                            right: attributes.borderRight || "",
                            bottom: attributes.borderBottom || "",
                            left: attributes.borderLeft || "",
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                    borderRadius: {
                        Desktop: {
                            top: attributes.btnStyles[0].borderRadius || "",
                            right: attributes.btnStyles[0].borderRadius || "",
                            bottom: attributes.btnStyles[0].borderRadius || "",
                            left: attributes.btnStyles[0].borderRadius || "",
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                },
                typography: {
                    fontWeight:
                        attributes?.textStyles[0]?.textWeight || "Default",
                    fontStyle: attributes?.textStyles[0]?.textStyle || "",
                    textTransform: attributes?.textStyles[0]?.textUpper || "",
                    letterSpacing: attributes?.textStyles[0]?.textLetter || "",
                    fontFamily:
                        attributes?.textStyles[0]?.textFontFamily || "Default",
                    lineHeight: attributes?.textStyles[0]?.textLine || "",
                    textDecoration: "",
                    letterSpacing: {
                        Desktop: attributes?.textStyles[0]?.textLetter || "",
                        Tablet: attributes?.textStyles[0]?.textLetter || "",
                        Mobile: attributes?.textStyles[0]?.textLetter || "",
                        unit: "px",
                    },
                    lineHeight: {
                        Desktop: attributes?.textStyles[0]?.textLine || "",
                        Tablet: attributes?.textStyles[0]?.textLine || "",
                        Mobile: attributes?.textStyles[0]?.textLine || "",
                        unit: "px",
                    },
                    fontSize: {
                        Desktop: attributes?.textStyles[0]?.textSize || "",
                        Tablet: attributes?.textStyles[0]?.textSizeTablet || "",
                        Mobile: attributes?.textStyles[0]?.textSizeMobile || "",
                        unit: attributes?.textStyles[0]?.textSizeUnit || "px",
                    },
                },
                textShadow: {
                    color: attributes?.textStyles[0]?.shadowColor || "",
                    blur: attributes?.textStyles[0]?.shadowBlur || "",
                    horizontal:
                        attributes?.textStyles[0]?.shadowHorizontal || "",
                    vertical: attributes?.textStyles[0]?.shadowVertical || "",
                },
                boxShadow: {
                    color: attributes?.btnStyles[0]?.btnShadowColor || "",
                    blur: attributes?.btnStyles[0]?.btnShadowBlur || "",
                    horizontal:
                        attributes?.btnStyles[0]?.btnShadowHorizontal || "",
                    vertical: attributes?.btnStyles[0]?.btnShadowVertical || "",
                    position: attributes?.btnStyles[0]?.btnShadowPosition || "",
                },
                padding: {
                    Desktop: {
                        top: attributes?.btnStyles[0]?.padding || "",
                        right: attributes?.btnStyles[0]?.padding || "",
                        bottom: attributes?.btnStyles[0]?.padding || "",
                        left: attributes?.btnStyles[0]?.padding || "",
                    },
                    Tablet: {
                        top: "",
                        right: "",
                        bottom: "",
                        left: "",
                    },
                    Mobile: {
                        top: "",
                        right: "",
                        bottom: "",
                        left: "",
                    },
                    unit: attributes?.btnStyles[0]?.paddingU || "px",
                },
                showIcon: false,
                icon: "",
                iconPosition: "before",
                iconSize: {
                    Desktop: "30",
                    Tablet: "30",
                    Mobile: "30",
                    unit: "px",
                },
                iconSpacing: {
                    Desktop: {
                        top: "",
                        right: "",
                        bottom: "",
                        left: "",
                    },
                    Tablet: {
                        top: "",
                        right: "",
                        bottom: "",
                        left: "",
                    },
                    Mobile: {
                        top: "",
                        right: "",
                        bottom: "",
                        left: "",
                    },
                    unit: "px",
                },
                iconColor: "",
                iconHoverColor: "",
                iconShadow: {
                    color: "",
                    blur: "",
                    horizontal: "",
                    vertical: "",
                    position: "",
                },
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                borderButton,
                btnText,
                btnSize,
                btnAlign,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                slideColor,
                block_id,
                hideDesktop,
                hideTablet,
                hideMobile,
                textStyles,
                btnStyles,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft,
                borderWidth,
            } = props.attributes;
            const mainClasses = classnames(className, "premium-button");

            return (
                <div
                    id={`${mainClasses}-wrap-${block_id}`}
                    className={`${mainClasses}__wrap premium-button__${effect} premium-button__${effectDir} premium-button-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{ textAlign: btnAlign }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-button-wrap-${block_id} .premium-button:hover {`,
                                `color: ${btnStyles[0].textHoverColor} !important;`,
                                `border-color: ${btnStyles[0].borderHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${block_id}.premium-button__none .premium-button:hover {`,
                                `background-color: ${btnStyles[0].backHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${block_id}.premium-button__slide .premium-button::before,`,
                                `#premium-button-wrap-${block_id}.premium-button__shutter .premium-button::before,`,
                                `#premium-button-wrap-${block_id}.premium-button__radial .premium-button::before {`,
                                `background-color: ${slideColor}`,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <RichText.Content
                        tagName="a"
                        value={btnText}
                        className={`premium-button premium-button__${btnSize}`}
                        href={btnLink}
                        rel="noopener noreferrer"
                        target={btnTarget ? "_blank" : "_self"}
                        style={{
                            color: btnStyles[0].textColor,
                            backgroundColor: btnStyles[0].backColor,
                            fontFamily: textStyles[0].textFontFamily,
                            letterSpacing: textStyles[0].textLetter + "px",
                            textTransform: textStyles[0].textUpper
                                ? "uppercase"
                                : "none",
                            fontStyle: textStyles[0].textStyle,
                            lineHeight: textStyles[0].textLine + "px",
                            fontWeight: textStyles[0].textWeight,
                            textShadow: `${textStyles[0].shadowHorizontal}px ${textStyles[0].shadowVertical}px ${textStyles[0].shadowBlur}px ${textStyles[0].shadowColor}`,
                            boxShadow: `${btnStyles[0].btnShadowHorizontal}px ${btnStyles[0].btnShadowVertical}px ${btnStyles[0].btnShadowBlur}px ${btnStyles[0].btnShadowColor} ${btnStyles[0].btnShadowPosition}`,
                            padding:
                                btnStyles[0].padding + btnStyles[0].paddingU,
                            borderStyle: btnStyles[0].borderType,
                            borderWidth: borderButton
                                ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                                : borderWidth + "px",
                            borderRadius: btnStyles[0].borderRadius + "px",
                            borderColor: btnStyles[0].borderColor,
                        }}
                    />
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                textStyles: [
                    {
                        textSizeUnit: attributes.textSizeUnit,
                        textSize: attributes.textSize,
                        textSizeTablet: attributes.textSizeTablet,
                        textSizeMobile: attributes.textSizeMobile,
                        textFontFamily: attributes.textFontFamily,
                        textLetter: attributes.textLetter,
                        textStyle: attributes.textStyle,
                        textUpper: attributes.textUpper,
                        textWeight: attributes.textWeight,
                        textLine: attributes.textLine,
                        shadowColor: attributes.shadowColor,
                        shadowBlur: attributes.shadowBlur,
                        shadowHorizontal: attributes.shadowHorizontal,
                        shadowVertical: attributes.shadowVertical,
                    },
                ],
                btnStyles: [
                    {
                        textColor: attributes.textColor,
                        textHoverColor: attributes.textHoverColor,
                        backColor: attributes.backColor,
                        backOpacity: attributes.backOpacity,
                        backHoverColor: attributes.backHoverColor,
                        borderType: attributes.borderType,
                        borderRadius: attributes.borderRadius,
                        borderColor: attributes.borderColor,
                        borderHoverColor: attributes.borderHoverColor,
                        btnShadowColor: attributes.btnShadowColor,
                        btnShadowBlur: attributes.btnShadowBlur,
                        btnShadowHorizontal: attributes.btnShadowHorizontal,
                        btnShadowVertical: attributes.btnShadowVertical,
                        btnShadowPosition: attributes.btnShadowPosition,
                        padding: attributes.padding,
                        paddingU: attributes.paddingU,
                    },
                ],
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                block_id,
                borderButton,
                btnText,
                btnSize,
                btnAlign,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                textColor,
                textHoverColor,
                backColor,
                backHoverColor,
                slideColor,
                textFontFamily,
                textWeight,
                textLine,
                textLetter,
                textStyle,
                backOpacity,
                textUpper,
                borderType,
                borderWidth,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft,
                borderRadius,
                borderColor,
                borderHoverColor,
                padding,
                paddingU,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                hideDesktop,
                hideTablet,
                hideMobile,
            } = props.attributes;
            return (
                <div
                    id={`${className}-wrap-${block_id}`}
                    className={`${className}__wrap premium-button__${effect} premium-button__${effectDir} premium-button-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{ textAlign: btnAlign }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-button-wrap-${block_id} .premium-button:hover {`,
                                `color: ${textHoverColor} !important;`,
                                `border-color: ${borderHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${block_id}.premium-button__none .premium-button:hover {`,
                                `background-color: ${backHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${block_id}.premium-button__slide .premium-button::before,`,
                                `#premium-button-wrap-${block_id}.premium-button__shutter .premium-button::before,`,
                                `#premium-button-wrap-${block_id}.premium-button__radial .premium-button::before {`,
                                `background-color: ${slideColor}`,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <RichText.Content
                        tagName="a"
                        value={btnText}
                        className={`premium-button premium-button__${btnSize}`}
                        href={btnLink}
                        rel="noopener noreferrer"
                        target={btnTarget ? "_blank" : "_self"}
                        style={{
                            color: textColor,
                            backgroundColor: backColor
                                ? hexToRgba(backColor, backOpacity)
                                : "transparent",
                            fontFamily: textFontFamily,
                            letterSpacing: textLetter + "px",
                            textTransform: textUpper ? "uppercase" : "none",
                            fontStyle: textStyle,
                            lineHeight: textLine + "px",
                            fontWeight: textWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                            boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                            padding: padding + paddingU,
                            borderStyle: borderType,
                            borderWidth: borderButton
                                ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                                : borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    />
                </div>
            );
        },
    },
    {
        attributes: attributes,

        save: (props) => {
            const {
                id,
                btnText,
                btnSize,
                btnAlign,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                textColor,
                textHoverColor,
                backColor,
                backHoverColor,
                slideColor,
                textSize,
                textFontFamily,
                textWeight,
                textLine,
                textLetter,
                textStyle,
                textUpper,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                borderHoverColor,
                padding,
                paddingU,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
            } = props.attributes;
            return (
                <div
                    id={`${className}-wrap-${id}`}
                    className={`${className}__wrap premium-button__${effect} premium-button__${effectDir}`}
                    style={{ textAlign: btnAlign }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-button-wrap-${id} .premium-button:hover {`,
                                `color: ${textHoverColor} !important;`,
                                `border-color: ${borderHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
                                `background-color: ${backHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
                                `background-color: ${slideColor}`,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <RichText.Content
                        tagName="a"
                        value={btnText}
                        className={`premium-button premium-button__${btnSize}`}
                        href={btnLink}
                        rel="noopener noreferrer"
                        target={btnTarget ? "_blank" : "_self"}
                        style={{
                            color: textColor,
                            backgroundColor: backColor,
                            fontSize: textSize + "px",
                            fontFamily: textFontFamily,
                            letterSpacing: textLetter + "px",
                            textTransform: textUpper ? "uppercase" : "none",
                            fontStyle: textStyle,
                            lineHeight: textLine + "px",
                            fontWeight: textWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                            boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                            padding: padding + paddingU,
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    />
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            return Object.assign(attributes, { paddingU: "" });
        },
        save: (props) => {
            const {
                id,
                btnText,
                btnSize,
                btnAlign,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                textColor,
                textHoverColor,
                backColor,
                backHoverColor,
                slideColor,
                textSize,
                textFontFamily,
                textWeight,
                textLine,
                textLetter,
                textStyle,
                textUpper,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                borderHoverColor,
                padding,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
            } = props.attributes;
            return (
                <div
                    id={`${className}-wrap-${id}`}
                    className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
                    style={{ textAlign: btnAlign }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-button-wrap-${id} .premium-button:hover {`,
                                `color: ${textHoverColor} !important;`,
                                `border-color: ${borderHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
                                `background-color: ${backHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
                                `background-color: ${slideColor}`,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <RichText.Content
                        tagName="a"
                        value={btnText}
                        className={`${className} ${className}__${btnSize}`}
                        href={btnLink}
                        rel="noopener noreferrer"
                        target={btnTarget ? "_blank" : "_self"}
                        style={{
                            color: textColor,
                            backgroundColor: backColor,
                            fontSize: textSize + "px",
                            fontFamily: textFontFamily,
                            letterSpacing: textLetter + "px",
                            textTransform: textUpper ? "uppercase" : "none",
                            fontStyle: textStyle,
                            lineHeight: textLine + "px",
                            fontWeight: textWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                            boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                            padding: padding + "px",
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    />
                </div>
            );
        },
    },
    {
        attributes: attributes,
        save: (props) => {
            const {
                id,
                btnText,
                btnSize,
                btnAlign,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                textColor,
                textHoverColor,
                backColor,
                backHoverColor,
                slideColor,
                textSize,
                textFontFamily,
                textWeight,
                textLine,
                textLetter,
                textStyle,
                textUpper,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                borderHoverColor,
                padding,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
            } = props.attributes;
            return (
                <div
                    id={`${className}-wrap-${id}`}
                    className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
                    style={{ textAlign: btnAlign }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-button-wrap-${id} .premium-button:hover {`,
                                `color: ${textHoverColor} !important;`,
                                `border-color: ${borderHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
                                `background-color: ${backHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
                                `background-color: ${slideColor}`,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <RichText.Content
                        tagName="a"
                        value={btnText}
                        className={`${className} ${className}__${btnSize}`}
                        href={btnLink}
                        target={btnTarget ? "_blank" : "_self"}
                        style={{
                            color: textColor,
                            backgroundColor: backColor,
                            fontSize: textSize + "px",
                            fontFamily: textFontFamily,
                            letterSpacing: textLetter + "px",
                            textTransform: textUpper ? "uppercase" : "none",
                            fontStyle: textStyle,
                            lineHeight: textLine + "px",
                            fontWeight: textWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                            boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                            padding: padding + "px",
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    />
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            return Object.assign(attributes, { textFontFamily: "" });
        },
        save: (props) => {
            const {
                id,
                btnText,
                btnSize,
                btnAlign,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                textColor,
                textHoverColor,
                backColor,
                backHoverColor,
                slideColor,
                textSize,
                textWeight,
                textLine,
                textLetter,
                textStyle,
                textUpper,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                borderHoverColor,
                padding,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
            } = props.attributes;
            return (
                <div
                    id={`${className}-wrap-${id}`}
                    className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
                    style={{ textAlign: btnAlign }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-button-wrap-${id} .premium-button:hover {`,
                                `color: ${textHoverColor} !important;`,
                                `border-color: ${borderHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
                                `background-color: ${backHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
                                `background-color: ${slideColor}`,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <RichText.Content
                        tagName="a"
                        value={btnText}
                        className={`${className} ${className}__${btnSize}`}
                        href={btnLink}
                        target={btnTarget ? "_blank" : "_self"}
                        style={{
                            color: textColor,
                            backgroundColor: backColor,
                            fontSize: textSize + "px",
                            letterSpacing: textLetter + "px",
                            textTransform: textUpper ? "uppercase" : "none",
                            fontStyle: textStyle,
                            lineHeight: textLine + "px",
                            fontWeight: textWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                            boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                            padding: padding + "px",
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    />
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            return Object.assign(attributes, { borderHoverColor: "" });
        },
        save: (props) => {
            const {
                id,
                btnText,
                btnSize,
                btnAlign,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                textColor,
                textHoverColor,
                backColor,
                backHoverColor,
                slideColor,
                textSize,
                textWeight,
                textLine,
                textLetter,
                textStyle,
                textUpper,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                padding,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
            } = props.attributes;
            return (
                <div
                    id={`${className}-wrap-${id}`}
                    className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
                    style={{ textAlign: btnAlign }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-button-wrap-${id} .premium-button:hover {`,
                                `color: ${textHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
                                `background-color: ${backHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
                                `background-color: ${slideColor}`,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <RichText.Content
                        tagName="a"
                        value={btnText}
                        className={`${className} ${className}__${btnSize}`}
                        href={btnLink}
                        target={btnTarget ? "_blank" : "_self"}
                        style={{
                            color: textColor,
                            backgroundColor: backColor,
                            fontSize: textSize + "px",
                            letterSpacing: textLetter + "px",
                            textTransform: textUpper ? "uppercase" : "none",
                            fontStyle: textStyle,
                            lineHeight: textLine + "px",
                            fontWeight: textWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                            boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                            padding: padding + "px",
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    />
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                btnShadowColor: "",
                btnShadowBlur: "0",
                btnShadowHorizontal: "0",
                btnShadowVertical: "0",
                btnShadowPosition: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                btnText,
                btnSize,
                btnAlign,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                textColor,
                textHoverColor,
                backColor,
                backHoverColor,
                slideColor,
                textSize,
                textWeight,
                textLine,
                textLetter,
                textStyle,
                textUpper,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                padding,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
            } = props.attributes;
            return (
                <div
                    id={`${className}-wrap-${id}`}
                    className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
                    style={{ textAlign: btnAlign }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-button-wrap-${id} .premium-button:hover {`,
                                `color: ${textHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
                                `background-color: ${backHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
                                `background-color: ${slideColor}`,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <RichText.Content
                        tagName="a"
                        value={btnText}
                        className={`${className} ${className}__${btnSize}`}
                        href={btnLink}
                        target={btnTarget ? "_blank" : "_self"}
                        style={{
                            color: textColor,
                            backgroundColor: backColor,
                            fontSize: textSize + "px",
                            letterSpacing: textLetter + "px",
                            textTransform: textUpper ? "uppercase" : "none",
                            fontStyle: textStyle,
                            lineHeight: textLine + "px",
                            fontWeight: textWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                            padding: padding + "px",
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    />
                </div>
            );
        },
    },
];

export default deprecatedContent;
