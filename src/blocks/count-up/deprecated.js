const className = "premium-countup";
const { __ } = wp.i18n;
import hexToRgba from 'hex-to-rgba'
import classnames from 'classnames'
import {
    gradientBackground,
    filterJsCss,
} from '@pbg/helpers';
const { RichText, useBlockProps } = wp.blockEditor;

const attributes = {
    block_id: {
        type: "string"
    },
    borderCount: {
        type: "boolean",
        default: false
    },
    increment: {
        type: "string",
        default: 500
    },
    time: {
        type: "string",
        default: 1000
    },
    delay: {
        type: "string",
        default: 10
    },
    align: {
        type: "string",
        default: "center"
    },
    flexDir: {
        type: "string",
        default: "column"
    },
    numberSizeUnit: {
        type: "string",
        default: "px"
    },
    numberSize: {
        type: "number",
        default: 30
    },
    numberSizeTablet: {
        type: "number"
    },
    numberSizeMobile: {
        type: "number"
    },
    numberColor: {
        type: "string",
        default: "#6ec1e4"
    },
    numberWeight: {
        type: "number",
        default: 900
    },
    prefix: {
        type: "boolean",
        default: true
    },
    prefixTxt: {
        type: "string",
        default: "Prefix"
    },
    prefixSize: {
        type: "number",
        default: 20
    },
    prefixSizeUnit: {
        type: 'string',
        default: 'px'
    },
    prefixSizeTablet: {
        type: "number"
    },
    prefixSizeMobile: {
        type: "number"
    },
    prefixColor: {
        type: "string"
    },
    prefixWeight: {
        type: "number"
    },
    prefixGap: {
        type: "number",
        default: 2
    },
    suffix: {
        type: "boolean",
        default: true
    },
    suffixTxt: {
        type: "string",
        default: "Suffix"
    },
    suffixSizeUnit: {
        type: "string",
        default: 'px'
    },
    suffixSize: {
        type: "number",
        default: 20
    },
    suffixSizeTablet: {
        type: "number"
    },
    suffixSizeMobile: {
        type: 'number'
    },
    suffixColor: {
        type: "string"
    },
    suffixWeight: {
        type: "number"
    },
    suffixGap: {
        type: "number",
        default: 2
    },
    icon: {
        type: "string",
        default: "icon"
    },
    iconSpacing: {
        type: "number",
        default: 10
    },
    imageID: {
        type: "string"
    },
    imageURL: {
        type: "string"
    },
    iconType: {
        type: "string",
        default: "dash"
    },
    iconCheck: {
        type: "boolean",
        default: true
    },
    iconSize: {
        type: "number",
        default: 40
    },
    iconColor: {
        type: "string",
        default: "#6ec1e4"
    },
    selfAlign: {
        type: "string",
        default: "center"
    },
    titleCheck: {
        type: "boolean",
        default: true
    },
    titleTxt: {
        type: "string",
        default: "Premium Count Up"
    },
    titleSize: {
        type: "number",
        default: 20
    },
    titleSizeUnit: {
        type: "string",
        default: "px"
    },
    titleSizeTablet: {
        type: "number"
    },
    titleSizeMobile: {
        type: "number"
    },
    titleSpacing: {
        type: "number"
    },
    titleStyle: {
        type: "string"
    },
    titleUpper: {
        type: "boolean"
    },
    titleT: {
        type: "number",
        default: 1
    },
    titleB: {
        type: "number",
        default: 1
    },
    titleColor: {
        type: "string"
    },
    titleWeight: {
        type: "number",
        default: 500
    },
    faIcon: {
        type: "string",
        default: "dashicons-clock"
    },
    containerBack: {
        type: "string"
    },
    containerOpacity: {
        type: "number",
        default: "1"
    },
    shadowColor: {
        type: "object",
        default: {}
    },
    shadowBlur: {
        type: "number",
        default: "0"
    },
    shadowHorizontal: {
        type: "number",
        default: "0"
    },
    shadowVertical: {
        type: "number",
        default: "0"
    },
    shadowPosition: {
        type: "string",
        default: ""
    },
    backgroundImageID: {
        type: "string"
    },
    backgroundImageURL: {
        type: "string"
    },
    backgroundRepeat: {
        type: "string",
        default: "no-repeat"
    },
    backgroundPosition: {
        type: "string",
        default: "top center"
    },
    backgroundSize: {
        type: "string",
        default: "auto"
    },
    fixed: {
        type: "boolean",
        default: false
    },
    borderType: {
        type: "string",
        default: "none"
    },
    borderWidth: {
        type: "number",
        default: "1"
    },
    borderTop: {
        type: "number"
    },
    borderRight: {
        type: "number"
    },
    borderBottom: {
        type: "number"
    },
    borderLeft: {
        type: "number"
    },
    borderRadius: {
        type: "number",
        default: "0"
    },
    borderColor: {
        type: "string"
    },
    titleFamily: {
        type: "string"
    },
    counterFamily: {
        type: "string"
    },
    prefixFamily: {
        type: "string"
    },
    suffixFamily: {
        type: "string"
    },
    paddingT: {
        type: "number"
    },
    paddingR: {
        type: "number"
    },
    paddingB: {
        type: "number"
    },
    paddingL: {
        type: "number"
    },
    paddingU: {
        type: "string"
    },
    hideDesktop: {
        type: 'boolean',
        default: false
    },
    hideTablet: {
        type: 'boolean',
        default: false
    },
    hideMobile: {
        type: 'boolean',
        default: false
    }
}

const v8Attributes = {
    block_id: {
        type: "string"
    },
    borderCount: {
        type: "boolean",
        default: false
    },
    increment: {
        type: "string",
        default: 500
    },
    time: {
        type: "string",
        default: 1000
    },
    delay: {
        type: "string",
        default: 10
    },
    align: {
        type: "string",
        default: "center"
    },
    flexDir: {
        type: "string",
        default: "column"
    },
    prefix: {
        type: "boolean",
        default: true
    },
    suffix: {
        type: "boolean",
        default: true
    },
    icon: {
        type: "string",
        default: "icon"
    },
    iconSpacing: {
        type: "number",
        default: 10
    },
    imageID: {
        type: "string"
    },
    imageURL: {
        type: "string"
    },
    iconType: {
        type: "string",
        default: "dash"
    },
    iconCheck: {
        type: "boolean",
        default: true
    },
    iconSize: {
        type: "number",
        default: 40
    },
    iconColor: {
        type: "string",
        default: "#6ec1e4"
    },
    selfAlign: {
        type: "string",
        default: "center"
    },
    titleCheck: {
        type: "boolean",
        default: true
    },
    titleTxt: {
        type: "string",
        default: __("Premium Count Up", 'premium-blocks-for-gutenberg')
    },
    faIcon: {
        type: "string",
        default: "dashicons-clock"
    },
    counterFamily: {
        type: "string",
        default: __('Default', 'premium-blocks-for-gutenberg')
    },
    hideDesktop: {
        type: 'boolean',
        default: false
    },
    hideTablet: {
        type: 'boolean',
        default: false
    },
    hideMobile: {
        type: 'boolean',
        default: false
    },
    backgroundType: {
        type: "string",
        default: ""
    },
    numberStyles: {
        type: "array",
        default: [
            {
                numberSizeUnit: "px",
                numberSize: 30,
                numberSizeTablet: '',
                numberSizeMobile: '',
                numberColor: "#6ec1e4",
                numberWeight: '',
            }
        ]
    },
    titleStyles: {
        type: "array",
        default: [
            {
                titleFamily: __('Default', 'premium-blocks-for-gutenberg'),
                titleSize: 20,
                titleSizeUnit: 'px',
                titleSizeTablet: '',
                titleSizeMobile: '',
                titleSpacing: '',
                titleStyle: '',
                titleUpper: false,
                titleColor: '',
                titleT: 1,
                titleB: 1,
                titleColor: '',
                titleWeight: '',
            }
        ]
    },
    containerStyles: {
        type: "array",
        default: [
            {
                containerBack: '',
                containerOpacity: 1,
                backgroundImageID: '',
                backgroundImageURL: '',
                backgroundRepeat: 'no-reapet',
                backgroundPosition: 'top center',
                backgroundSize: 'auto',
                fixed: false,
                borderType: 'none',
                borderWidth: 1,
                borderRadius: 0,
                borderColor: '',
                shadowColor: '',
                shadowBlur: '0',
                shadowHorizontal: '0',
                shadowVertical: '0',
                shadowPosition: '',
                paddingU: '',
                gradientLocationOne: '0',
                gradientColorTwo: '',
                gradientLocationTwo: '100',
                gradientType: 'linear',
                gradientAngle: '180',
                gradientPosition: 'center center'
            }
        ]
    },
    borderTop: {
        type: 'number',
        default: '0'
    },
    borderRight: {
        type: 'number',
        default: '0'
    },
    borderBottom: {
        type: 'number',
        default: '0'
    },
    borderLeft: {
        type: 'number',
        default: '0'
    },
    paddingT: {
        type: 'number',
        default: '0'
    },
    paddingR: {
        type: 'number',
        default: '0'
    },
    paddingB: {
        type: 'number',
        default: '0'
    },
    paddingL: {
        type: 'number',
        default: '0'
    },
    suffixStyles: {
        type: 'array',
        default: [
            {
                suffixTxt: "Suffix",
                suffixSizeUnit: 'px',
                suffixSize: 20,
                suffixSizeTablet: '',
                suffixSizeMobile: '',
                suffixColor: '',
                suffixWeight: '',
                suffixGap: 2,
                suffixFamily: __('Default', 'premium-blocks-for-gutenberg'),
            }
        ]
    },
    prefixStyles: {
        type: "array",
        default: [
            {
                prefixTxt: "Prefix",
                prefixSize: 20,
                prefixSizeUnit: 'px',
                prefixSizeTablet: '',
                prefixSizeMobile: '',
                prefixColor: '',
                prefixWeight: '',
                prefixGap: 2,
                prefixFamily: __('Default', 'premium-blocks-for-gutenberg'),
            }
        ]
    },
    paddingTTablet: {
        type: 'number',
    },
    paddingRTablet: {
        type: 'number',
    },
    paddingBTablet: {
        type: 'number',
    },
    paddingLTablet: {
        type: 'number',
    },
    paddingTMobile: {
        type: 'number',
    },
    paddingRMobile: {
        type: 'number',
    },
    paddingBMobile: {
        type: 'number',
    },
    paddingLMobile: {
        type: 'number',
    }
}

const v9Attributes = {
    "blockId": {
        "type": "string"
    },
    "increment": {
        "type": "string",
        "default": 500
    },
    "time": {
        "type": "string",
        "default": 1000
    },
    "delay": {
        "type": "string",
        "default": 10
    },
    "align": {
        "type": "object",
        "default": {
            "Desktop": "center",
            "Tablet": "center",
            "Mobile": "center"
        }
    },
    "flexDir": {
        "type": "string",
        "default": "column"
    },
    "prefix": {
        "type": "boolean",
        "default": false
    },
    "suffix": {
        "type": "boolean",
        "default": false
    },
    "icon": {
        "type": "string",
        "default": "icon"
    },
    "imageID": {
        "type": "string"
    },
    "imageURL": {
        "type": "string"
    },
    "iconType": {
        "type": "string",
        "default": "dash"
    },
    "iconCheck": {
        "type": "boolean",
        "default": true
    },
    "iconSize": {
        "type": "number",
        "default": 40
    },
    "iconColor": {
        "type": "string"
    },
    "selfAlign": {
        "type": "object",
        "default": {
            "Desktop": "center",
            "Tablet": "center",
            "Mobile": "center"
        }
    },
    "titleCheck": {
        "type": "boolean",
        "default": true
    },
    "titleTxt": {
        "type": "string",
        "default": "Premium Count Up"
    },
    "faIcon": {
        "type": "string",
        "default": "dashicons dashicons-clock"
    },
    "counterFamily": {
        "type": "string",
        "default": "Default"
    },
    "hideDesktop": {
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
    "numberStyles": {
        "type": "array",
        "default": [
            {
                "numberColor": ""
            }
        ]
    },
    "titleStyles": {
        "type": "array",
        "default": [
            {
                "titleColor": ""
            }
        ]
    },
    "suffixStyles": {
        "type": "array",
        "default": [
            {
                "suffixTxt": "Suffix",
                "suffixColor": ""
            }
        ]
    },
    "prefixStyles": {
        "type": "array",
        "default": [
            {
                "prefixTxt": "Prefix",
                "prefixColor": ""
            }
        ]
    },
    "padding": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "20",
                "right": "20",
                "bottom": "20",
                "left": "20"
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
    "numberTypography": {
        "type": "object",
        "default": {
            "fontWeight": "Default",
            "fontStyle": "",
            "textTransform": "",
            "fontFamily": "Default",
            "textDecoration": "",
            "fontSize": {
                "Desktop": "55",
                "Tablet": "55",
                "Mobile": "55",
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            }
        }
    },
    "prefixTypography": {
        "type": "object",
        "default": {
            "fontWeight": "Default",
            "fontStyle": "",
            "textTransform": "",
            "fontFamily": "Default",
            "textDecoration": "",
            "fontSize": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            }
        }
    },
    "suffixTypography": {
        "type": "object",
        "default": {
            "fontWeight": "Default",
            "fontStyle": "",
            "textTransform": "",
            "fontFamily": "Default",
            "textDecoration": "",
            "fontSize": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            }
        }
    },
    "titleTypography": {
        "type": "object",
        "default": {
            "fontWeight": "Default",
            "fontStyle": "",
            "textTransform": "",
            "fontFamily": "Default",
            "textDecoration": "",
            "fontSize": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            }
        }
    },
    "boxShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0",
            "position": " "
        }
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
    "background": {
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
    "prefixPadding": {
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
    "prefixMargin": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "2",
                "right": "2",
                "bottom": "2",
                "left": "2"
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
    "numberPadding": {
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
    "numberMargin": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "",
                "right": "2",
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
    "suffixPadding": {
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
    "suffixMargin": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": "2"
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
                "top": "1",
                "right": "",
                "bottom": "1",
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
    "variation": {
        "type": "object",
        "default": {}
    },
    "showVariation": {
        "type": "boolean",
        "default": true
    }
}

const deprecatedContent = [
    {
        attributes: Object.assign(attributes, v9Attributes),
        migrate: (attributes) => {
            let newAttributes = {

            };
            return Object.assign(attributes, newAttributes)
        },
        save: (props) => {
            const { className } = props;

            const {
                blockId,
                increment,
                time,
                delay,
                flexDir,
                prefix,
                suffix,
                icon,
                imageURL,
                iconType,
                iconCheck,
                iconSize,
                iconColor,
                titleCheck,
                titleTxt,
                faIcon,
                hideDesktop,
                hideTablet,
                hideMobile,
                numberStyles,
                titleStyles,
                suffixStyles,
                prefixStyles,
                numberTypography,
                prefixTypography,
                suffixTypography,
                titleTypography,
                boxShadow,
                border,
                background
            } = props.attributes;

            let iconClass = "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;

            return (
                <div
                    {...useBlockProps.save({
                        className: classnames(
                            className,
                            `premium-countup__wrap ${blockId} premium-countup__${flexDir}`,
                            {
                                " premium-desktop-hidden": hideDesktop,
                                " premium-tablet-hidden": hideTablet,
                                " premium-mobile-hidden": hideMobile,
                            }
                        ),
                    })}
                    style={filterJsCss({
                        flexDirection: flexDir,
                        boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                        borderStyle: border?.borderType,
                        borderColor: border?.borderColor,
                        ...gradientBackground(background)
                    })}
                >
                    {iconCheck && (
                        <div
                            className={`premium-countup__icon_wrap`}
                        >
                            {"icon" === icon && (
                                <i
                                    className={`premium-countup__icon ${iconClass}`}
                                    style={{
                                        fontSize: iconSize + "px",
                                        color: iconColor
                                    }}
                                />
                            )}
                            {"img" === icon && imageURL && (
                                <img
                                    src={imageURL}
                                    style={filterJsCss({
                                        width: iconSize + "px",
                                        height: iconSize + "px"
                                    })}
                                />
                            )}
                        </div>
                    )}
                    <div
                        className={`premium-countup__info`}
                    >
                        <div className={`premium-countup__desc`}>
                            {prefix && (
                                <RichText.Content
                                    className={`premium-countup__prefix`}
                                    tagName="p"
                                    value={prefixStyles[0].prefixTxt}
                                    style={filterJsCss({
                                        color: prefixStyles[0].prefixColor,
                                        fontStyle: prefixTypography?.fontStyle,
                                        fontFamily: prefixTypography?.fontFamily,
                                        fontWeight: prefixTypography?.fontWeight,
                                        textDecoration: prefixTypography?.textDecoration,
                                        textTransform: prefixTypography?.textTransform,
                                    })}
                                />
                            )}
                            <RichText.Content
                                className={`premium-countup__increment`}
                                value={`${increment}`}
                                tagName="p"
                                data-interval={time}
                                data-delay={delay}
                                style={filterJsCss({
                                    color: numberStyles[0].numberColor,
                                    fontStyle: numberTypography?.fontStyle,
                                    fontFamily: numberTypography?.fontFamily,
                                    fontWeight: numberTypography?.fontWeight,
                                    textDecoration: numberTypography?.textDecoration,
                                    textTransform: numberTypography?.textTransform,
                                })}
                            />
                            {suffix && (
                                <RichText.Content
                                    className={`premium-countup__suffix`}
                                    value={suffixStyles[0].suffixTxt}
                                    tagName="p"
                                    style={filterJsCss({
                                        color: suffixStyles[0].suffixColor,
                                        fontStyle: suffixTypography?.fontStyle,
                                        fontFamily: suffixTypography?.fontFamily,
                                        fontWeight: suffixTypography?.fontWeight,
                                        textDecoration: suffixTypography?.textDecoration,
                                        textTransform: suffixTypography?.textTransform,
                                    })}
                                />
                            )}
                        </div>
                        {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                            <RichText.Content
                                className={`premium-countup__title`}
                                value={titleTxt}
                                tagName="h4"
                                style={filterJsCss({
                                    color: titleStyles[0].titleColor,
                                    fontStyle: titleTypography?.fontStyle,
                                    fontFamily: titleTypography?.fontFamily,
                                    fontWeight: titleTypography?.fontWeight,
                                    textDecoration: titleTypography?.textDecoration,
                                    textTransform: titleTypography?.textTransform,
                                })}
                            />
                        )}
                    </div>
                    {titleCheck && ("column" === flexDir || "column-reverse" === flexDir) && (
                        <RichText.Content
                            className={`premium-countup__title`}
                            tagName="h4"
                            value={titleTxt}
                            style={filterJsCss({
                                color: titleStyles[0].titleColor,
                                fontStyle: titleTypography?.fontStyle,
                                fontFamily: titleTypography?.fontFamily,
                                fontWeight: titleTypography?.fontWeight,
                                textDecoration: titleTypography?.textDecoration,
                                textTransform: titleTypography?.textTransform,
                            })}
                        />
                    )}
                </div>
            );
        },
    },
    {
        attributes: v8Attributes,
        isEligible() {
            return true;
        },
        migrate: attributes => {
            let newAttributes = {
                blockId: attributes.block_id ? "premium-countup-" + attributes.block_id : '',
                align: {
                    Desktop: attributes?.align || 'center',
                    Tablet: attributes?.align || 'center',
                    Mobile: attributes?.align || 'center',
                },
                selfAlign: {
                    Desktop: attributes?.selfAlign || 'center',
                    Tablet: attributes?.selfAlign || 'center',
                    Mobile: attributes?.selfAlign || 'center',
                },
                padding: {
                    "Desktop": {
                        top: attributes.paddingT || '',
                        right: attributes.paddingR || '',
                        bottom: attributes.paddingB || '',
                        left: attributes.paddingL || ''
                    },
                    "Tablet": {
                        top: attributes.paddingTTablet || '',
                        right: attributes.paddingRTablet || '',
                        bottom: attributes.paddingBTablet || '',
                        left: attributes.paddingLTablet || ''
                    },
                    "Mobile": {
                        top: attributes.paddingTMobile || '',
                        right: attributes.paddingRMobile || '',
                        bottom: attributes.paddingBMobile || '',
                        left: attributes.paddingLMobile || ''
                    },
                    "unit": "px"
                },
                numberTypography: {
                    "fontWeight": attributes?.numberStyles[0]?.numberWeight || "Default",
                    'fontStyle': '',
                    'textTransform': '',
                    'fontFamily': attributes?.counterFamily || "Default",
                    lineHeight: {
                        Desktop: "",
                        Tablet: "",
                        Mobile: "",
                        unit: "px",
                    },
                    letterSpacing: {
                        Desktop: "",
                        Tablet: "",
                        Mobile: "",
                        unit: "px",
                    },
                    'textDecoration': '',
                    'fontSize': {
                        'Desktop': attributes?.numberStyles[0]?.numberSize || '',
                        "Tablet": attributes?.numberStyles[0]?.numberSizeTablet || '',
                        "Mobile": attributes?.numberStyles[0]?.numberSizeMobile || '',
                        "unit": attributes?.numberStyles[0]?.numberSizeUnit || 'px'
                    }
                },
                prefixTypography: {
                    "fontWeight": attributes?.prefixStyles[0]?.prefixWeight || "Default",
                    'fontStyle': '',
                    'textTransform': '',
                    'fontFamily': attributes?.prefixStyles[0]?.prefixFamily || "Default",
                    lineHeight: {
                        Desktop: "",
                        Tablet: "",
                        Mobile: "",
                        unit: "px",
                    },
                    letterSpacing: {
                        Desktop: "",
                        Tablet: "",
                        Mobile: "",
                        unit: "px",
                    },
                    'textDecoration': '',
                    'fontSize': {
                        'Desktop': attributes?.prefixStyles[0]?.prefixSize || '',
                        "Tablet": attributes?.prefixStyles[0]?.prefixSizeTablet || '',
                        "Mobile": attributes?.prefixStyles[0]?.prefixSizeMobile || '',
                        "unit": attributes?.prefixStyles[0]?.prefixSizeUnit || 'px'
                    }
                },
                suffixTypography: {
                    "fontWeight": attributes?.suffixStyles[0]?.suffixWeight || "Default",
                    'fontStyle': '',
                    'textTransform': '',
                    'fontFamily': attributes?.suffixStyles[0]?.suffixFamily || "Default",
                    lineHeight: {
                        Desktop: "",
                        Tablet: "",
                        Mobile: "",
                        unit: "px",
                    },
                    letterSpacing: {
                        Desktop: "",
                        Tablet: "",
                        Mobile: "",
                        unit: "px",
                    },
                    'textDecoration': '',
                    'fontSize': {
                        'Desktop': attributes?.suffixStyles[0]?.suffixSize || '',
                        "Tablet": attributes?.suffixStyles[0]?.suffixSizeTablet || '',
                        "Mobile": attributes?.suffixStyles[0]?.suffixSizeMobile || '',
                        "unit": attributes?.suffixStyles[0]?.suffixSizeUnit || 'px'
                    }
                },
                titleTypography: {
                    "fontWeight": attributes?.titleStyles[0]?.titleWeight || "Default",
                    'fontStyle': attributes?.titleStyles[0]?.titleStyle || '',
                    'textTransform': attributes?.titleStyles[0]?.titleUpper || '',
                    'fontFamily': attributes?.titleStyles[0]?.titleFamily || "Default",
                    lineHeight: {
                        Desktop: "",
                        Tablet: "",
                        Mobile: "",
                        unit: "px",
                    },
                    letterSpacing: {
                        Desktop: attributes?.titleStyles[0]?.titleSpacing || '',
                        Tablet: attributes?.titleStyles[0]?.titleSpacing || '',
                        Mobile: attributes?.titleStyles[0]?.titleSpacing || '',
                        unit: "px",
                    },
                    'textDecoration': '',
                    'fontSize': {
                        'Desktop': attributes?.titleStyles[0]?.titleSize || '',
                        "Tablet": attributes?.titleStyles[0]?.titleSizeTablet || '',
                        "Mobile": attributes?.titleStyles[0]?.titleSizeMobile || '',
                        "unit": attributes?.titleStyles[0]?.titleSizeUnit || 'px'
                    }
                },
                boxShadow: {
                    'color': attributes?.containerStyles[0]?.shadowColor || '',
                    'blur': attributes?.containerStyles[0]?.shadowBlur || '',
                    'horizontal': attributes?.containerStyles[0]?.shadowHorizontal || '',
                    'vertical': attributes?.containerStyles[0]?.shadowVertical || '',
                    'position': attributes?.containerStyles[0]?.shadowPosition || ''
                },
                border: {
                    "borderType": attributes?.containerStyles[0]?.borderType || 'none',
                    "borderColor": attributes?.containerStyles[0]?.borderColor || '',
                    "borderWidth": {
                        Desktop: {
                            top: attributes?.borderTop || '',
                            right: attributes?.borderRight || '',
                            bottom: attributes?.borderBottom || '',
                            left: attributes?.borderLeft || ''
                        },
                        Tablet: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        },
                        Mobile: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        }
                    },
                    "borderRadius": {
                        Desktop: {
                            top: attributes?.containerStyles[0]?.borderRadius || '',
                            right: attributes?.containerStyles[0]?.borderRadius || '',
                            bottom: attributes?.containerStyles[0]?.borderRadius || '',
                            left: attributes?.containerStyles[0]?.borderRadius || ''
                        },
                        Tablet: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        },
                        Mobile: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        }
                    }
                },
                background: {
                    'backgroundType': '',
                    'backgroundColor': attributes?.containerStyles[0]?.containerBack || '',
                    'backgroundImageID': attributes?.containerStyles[0]?.backgroundImageID || '',
                    'backgroundImageURL': attributes?.containerStyles[0]?.backgroundImageURL || '',
                    'backgroundPosition': attributes?.containerStyles[0]?.backgroundPosition || 'top center',
                    'backgroundRepeat': attributes?.containerStyles[0]?.backgroundRepeat || 'no-reapet',
                    'backgroundSize': attributes?.containerStyles[0]?.backgroundSize || 'auto',
                    'fixed': attributes?.containerStyles[0]?.fixed || false,
                    'gradientLocationOne': attributes?.containerStyles[0]?.gradientLocationOne || '0',
                    'gradientColorTwo': attributes?.containerStyles[0]?.gradientColorTwo || '',
                    'gradientLocationTwo': attributes?.containerStyles[0]?.gradientLocationTwo || '100',
                    'gradientAngle': attributes?.containerStyles[0]?.gradientAngle || '180',
                    'gradientPosition': attributes?.containerStyles[0]?.gradientPosition || 'center center',
                    'gradientType': attributes?.containerStyles[0]?.gradientType || 'linear'
                },
                prefixMargin: {
                    "Desktop": {
                        top: '',
                        right: attributes.prefixStyles[0].prefixGap || '',
                        bottom: '',
                        left: ''
                    },
                    "Tablet": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Mobile": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "unit": "px"
                },
                prefixPadding: {
                    "Desktop": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Tablet": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Mobile": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "unit": "px"
                },
                suffixMargin: {
                    "Desktop": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: attributes.suffixStyles[0].suffixGap || ''
                    },
                    "Tablet": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Mobile": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "unit": "px"
                },
                suffixPadding: {
                    "Desktop": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Tablet": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Mobile": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "unit": "px"
                },
                titleMargin: {
                    "Desktop": {
                        top: attributes.titleStyles[0].titleT || '',
                        right: '',
                        bottom: attributes.titleStyles[0].titleB || '',
                        left: ''
                    },
                    "Tablet": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Mobile": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "unit": "px"
                },
                titlePadding: {
                    "Desktop": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Tablet": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Mobile": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "unit": "px"
                },
                numberPadding: {
                    "Desktop": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Tablet": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Mobile": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "unit": "px"
                },
                numberMargin: {
                    "Desktop": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Tablet": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Mobile": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "unit": "px"
                },
                iconMargin: {
                    "Desktop": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Tablet": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "Mobile": {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    },
                    "unit": "px"
                },
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const { className } = props;
            const {
                block_id,
                borderCount,
                increment,
                time,
                delay,
                align,
                flexDir,
                prefix,
                suffix,
                icon,
                iconSpacing,
                imageID,
                imageURL,
                iconType,
                iconCheck,
                iconSize,
                iconColor,
                selfAlign,
                titleCheck,
                titleTxt,
                faIcon,
                counterFamily,
                hideDesktop,
                hideTablet,
                hideMobile,
                numberStyles,
                titleStyles,
                containerStyles,
                suffixStyles,
                prefixStyles,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                backgroundType
            } = props.attributes;

            let iconClass = "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;

            const mainClasses = classnames(className, 'premium-countup');

            let btnGrad, btnGrad2, btnbg;
            if (undefined !== backgroundType && 'gradient' === backgroundType) {
                btnGrad = ('transparent' === containerStyles[0].containerBack || undefined === containerStyles[0].containerBack ? 'rgba(255,255,255,0)' : containerStyles[0].containerBack);
                btnGrad2 = (undefined !== containerStyles[0].gradientColorTwo && '' !== containerStyles[0].gradientColorTwo ? containerStyles[0].gradientColorTwo : '#777');
                if ('radial' === containerStyles[0].gradientType) {
                    btnbg = `radial-gradient(at ${containerStyles[0].gradientPosition}, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
                } else if ('radial' !== containerStyles[0].gradientType) {
                    btnbg = `linear-gradient(${containerStyles[0].gradientAngle}deg, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
                }
            } else {
                btnbg = containerStyles[0].backgroundImageURL ? `url('${containerStyles[0].backgroundImageURL}')` : ''
            }


            return (
                <div
                    id={`premium-countup-${block_id}`}
                    className={`${mainClasses}__wrap premium-countup-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        justifyContent: align,
                        flexDirection: flexDir,
                        backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
                        boxShadow: `${containerStyles[0].shadowHorizontal}px ${containerStyles[0].shadowVertical}px ${containerStyles[0].shadowBlur}px rgba(${containerStyles[0].shadowColor.r},${containerStyles[0].shadowColor.g},${containerStyles[0].shadowColor.b}, ${containerStyles[0].shadowColor.a}) ${containerStyles[0].shadowPosition}`,
                        backgroundImage: btnbg,
                        backgroundRepeat: containerStyles[0].backgroundRepeat,
                        backgroundPosition: containerStyles[0].backgroundPosition,
                        backgroundSize: containerStyles[0].backgroundSize,
                        backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                        borderStyle: containerStyles[0].borderType,
                        borderWidth: borderCount
                            ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                            : containerStyles[0].borderWidth + "px",
                        borderRadius: containerStyles[0].borderRadius + "px",
                        borderColor: containerStyles[0].borderColor,
                    }}
                >
                    {iconCheck && (
                        <div
                            className={`premium-countup__icon_wrap`}
                            style={{
                                marginRight:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                marginLeft:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                alignSelf:
                                    "row-reverse" === flexDir || "row" === flexDir
                                        ? "center"
                                        : selfAlign
                            }}
                        >
                            {"icon" === icon && (
                                <i
                                    className={`premium-countup__icon ${iconClass}`}
                                    style={{
                                        fontSize: iconSize + "px",
                                        color: iconColor
                                    }}
                                />
                            )}
                            {"img" === icon && imageURL && (
                                <img
                                    src={imageURL}
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px"
                                    }}
                                />
                            )}
                        </div>
                    )}
                    <div
                        className={`premium-countup__info`}
                        style={{
                            alignSelf:
                                "row-reverse" === flexDir || "row" === flexDir
                                    ? "center"
                                    : selfAlign,
                        }}
                    >
                        <div className={`premium-countup__desc`}>
                            {prefix && (
                                <p
                                    className={`premium-countup__prefix`}
                                    style={{
                                        fontFamily: prefixStyles[0].prefixFamily,
                                        color: prefixStyles[0].prefixColor,
                                        fontWeight: prefixStyles[0].prefixWeight,
                                        marginRight: prefixStyles[0].prefixGap + "px"
                                    }}
                                >
                                    {prefixStyles[0].prefixTxt}
                                </p>
                            )}
                            <p
                                className={`premium-countup__increment`}
                                data-interval={time}
                                data-delay={delay}
                                style={{
                                    fontFamily: counterFamily,
                                    color: numberStyles[0].numberColor,
                                    fontWeight: numberStyles[0].numberWeight
                                }}
                            >
                                {increment}
                            </p>
                            {suffix && (
                                <p
                                    className={`premium-countup__suffix`}
                                    style={{
                                        fontFamily: suffixStyles[0].suffixFamily,
                                        color: suffixStyles[0].suffixColor,
                                        fontWeight: suffixStyles[0].suffixWeight,
                                        marginLeft: suffixStyles[0].suffixGap + "px"
                                    }}
                                >
                                    {suffixStyles[0].suffixTxt}
                                </p>
                            )}
                        </div>
                        {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                            <h3
                                className={`premium-countup__title`}
                                style={{
                                    fontFamily: titleStyles[0].titleFamily,
                                    marginTop: titleStyles[0].titleT + "px",
                                    marginBottom: titleStyles[0].titleB + "px",
                                    color: titleStyles[0].titleColor,
                                    letterSpacing: titleStyles[0].titleSpacing + "px",
                                    fontWeight: titleStyles[0].titleWeight,
                                    textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyles[0].titleStyle
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                    </div>
                    {titleCheck && ("column" === flexDir || "column-reverse" === flexDir) && (
                        <h3
                            className={`premium-countup__title`}
                            style={{
                                fontFamily: titleStyles[0].titleFamily,
                                marginTop: titleStyles[0].titleT + "px",
                                marginBottom: titleStyles[0].titleB + "px",
                                color: titleStyles[0].titleColor,
                                letterSpacing: titleStyles[0].titleSpacing + "px",
                                fontWeight: titleStyles[0].titleWeight,
                                textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                fontStyle: titleStyles[0].titleStyle,
                                alignSelf: selfAlign
                            }}
                        >
                            {titleTxt}
                        </h3>
                    )}
                </div>
            );
        }
    },
    {
        attributes: attributes,
        migrate: attributes => {
            let newAttributes = {
                numberStyles: [
                    {
                        numberSizeUnit: attributes.numberSizeUnit,
                        numberSize: attributes.numberSize,
                        numberSizeTablet: attributes.numberSizeTablet,
                        numberSizeMobile: attributes.numberSizeMobile,
                        numberColor: attributes.numberColor,
                        numberWeight: attributes.numberWeight,
                    }
                ],
                titleStyles: [
                    {
                        titleFamily: attributes.titleFamily,
                        titleSize: attributes.titleSize,
                        titleSizeUnit: attributes.titleSizeUnit,
                        titleSizeTablet: attributes.titleSizeTablet,
                        titleSizeMobile: attributes.titleSizeMobile,
                        titleSpacing: attributes.titleSpacing,
                        titleStyle: attributes.titleStyle,
                        titleUpper: attributes.titleUpper,
                        titleColor: attributes.titleColor,
                        titleT: attributes.titleT,
                        titleB: attributes.titleB,
                        titleColor: attributes.titleColor,
                        titleWeight: attributes.titleWeight,
                    }
                ],
                containerStyles: [
                    {
                        containerBack: attributes.containerBack,
                        containerOpacity: attributes.containerOpacity,
                        backgroundImageID: attributes.imageID,
                        backgroundImageURL: attributes.imageURL,
                        backgroundRepeat: attributes.backgroundRepeat,
                        backgroundPosition: attributes.backgroundPosition,
                        backgroundSize: attributes.backgroundSize,
                        fixed: attributes.fixed,
                        borderType: attributes.borderType,
                        borderWidth: attributes.borderWidth,
                        borderRadius: attributes.borderRadius,
                        borderColor: attributes.borderColor,
                        shadowColor: attributes.shadowColor,
                        shadowBlur: attributes.shadowBlur,
                        shadowHorizontal: attributes.shadowHorizontal,
                        shadowVertical: attributes.shadowVertical,
                        shadowPosition: attributes.shadowPosition,
                        paddingU: attributes.paddingU,
                        gradientLocationOne: '',
                        gradientColorTwo: '',
                        gradientLocationTwo: '100',
                        gradientType: 'linear',
                        gradientAngle: '180',
                        gradientPosition: 'center center'
                    }
                ],
                suffixStyles: [
                    {
                        suffixTxt: attributes.suffixTxt,
                        suffixSizeUnit: attributes.suffixSizeUnit,
                        suffixSize: attributes.suffixSize,
                        suffixSizeTablet: attributes.suffixSizeTablet,
                        suffixSizeMobile: attributes.suffixSizeMobile,
                        suffixColor: attributes.suffixColor,
                        suffixWeight: attributes.suffixWeight,
                        suffixGap: attributes.suffixGap,
                        suffixFamily: attributes.suffixFamily,
                    }
                ],
                prefixStyles: [
                    {
                        prefixTxt: attributes.prefixTxt,
                        prefixSize: attributes.prefixSize,
                        prefixSizeUnit: attributes.prefixSizeUnit,
                        prefixSizeTablet: attributes.prefixSizeTablet,
                        prefixSizeMobile: attributes.prefixSizeMobile,
                        prefixColor: attributes.prefixColor,
                        prefixWeight: attributes.prefixWeight,
                        prefixGap: attributes.prefixGap,
                        prefixFamily: attributes.prefixFamily,
                    }
                ],
                backgroundType: 'solid',
                paddingTTablet: '',
                paddingRTablet: '',
                paddingBTablet: '',
                paddingLTablet: '',
                paddingTMobile: '',
                paddingRMobile: '',
                paddingBMobile: '',
                paddingLMobile: '',
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const {
                block_id,
                borderCount,
                increment,
                time,
                delay,
                align,
                flexDir,
                numberColor,
                numberWeight,
                prefix,
                prefixTxt,
                prefixColor,
                prefixWeight,
                prefixGap,
                suffix,
                suffixTxt,
                suffixColor,
                suffixWeight,
                suffixGap,
                iconCheck,
                icon,
                iconSpacing,
                iconType,
                imageURL,
                iconSize,
                iconColor,
                selfAlign,
                titleCheck,
                titleTxt,
                titleColor,
                titleSpacing,
                titleStyle,
                titleUpper,
                titleT,
                titleB,
                titleWeight,
                faIcon,
                containerBack,
                containerOpacity,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                backgroundImageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderColor,
                borderRadius,
                borderWidth,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft,
                titleFamily,
                counterFamily,
                prefixFamily,
                suffixFamily,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                paddingU,
                hideDesktop,
                hideTablet,
                hideMobile
            } = props.attributes;
            let iconClass = "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
            return (
                <div
                    id={`premium-countup-${block_id}`}
                    className={`${className}__wrap premium-countup-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        justifyContent: align,
                        flexDirection: flexDir,
                        backgroundColor: containerBack
                            ? hexToRgba(containerBack, containerOpacity)
                            : "transparent",
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px rgba(${shadowColor.r},${shadowColor.g},${shadowColor.b}, ${shadowColor.a}) ${shadowPosition}`,
                        backgroundImage: `url('${backgroundImageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        borderStyle: borderType,
                        borderWidth: borderCount
                            ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                            : borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        paddingTop: paddingT + paddingU,
                        paddingRight: paddingR + paddingU,
                        paddingBottom: paddingB + paddingU,
                        paddingLeft: paddingL + paddingU,
                    }}
                >
                    {iconCheck && (
                        <div
                            className={`premium-countup__icon_wrap`}
                            style={{
                                marginRight:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                marginLeft:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                alignSelf:
                                    "row-reverse" === flexDir || "row" === flexDir
                                        ? "center"
                                        : selfAlign
                            }}
                        >
                            {"icon" === icon && (
                                <i
                                    className={`premium-countup__icon ${iconClass}`}
                                    style={{
                                        fontSize: iconSize + "px",
                                        color: iconColor
                                    }}
                                />
                            )}
                            {"img" === icon && imageURL && (
                                <img
                                    src={imageURL}
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px"
                                    }}
                                />
                            )}
                        </div>
                    )}

                    <div
                        className={`premium-countup__info`}
                        style={{
                            alignSelf:
                                "row-reverse" === flexDir || "row" === flexDir
                                    ? "center"
                                    : selfAlign
                        }}
                    >
                        <div className={`premium-countup__desc`}>
                            {prefix && (
                                <p
                                    className={`premium-countup__prefix`}
                                    style={{
                                        fontFamily: prefixFamily,
                                        color: prefixColor,
                                        fontWeight: prefixWeight,
                                        marginRight: prefixGap + "px"
                                    }}
                                >
                                    {prefixTxt}
                                </p>
                            )}
                            <p
                                className={`premium-countup__increment`}
                                data-interval={time}
                                data-delay={delay}
                                style={{
                                    fontFamily: counterFamily,
                                    color: numberColor,
                                    fontWeight: numberWeight
                                }}
                            >
                                {increment}
                            </p>
                            {suffix && (
                                <p
                                    className={`premium-countup__suffix`}
                                    style={{
                                        fontFamily: suffixFamily,
                                        color: suffixColor,
                                        fontWeight: suffixWeight,
                                        marginLeft: suffixGap + "px"
                                    }}
                                >
                                    {suffixTxt}
                                </p>
                            )}
                        </div>
                        {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                            <h3
                                className={`premium-countup__title`}
                                style={{
                                    fontFamily: titleFamily,
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                    </div>
                    {titleCheck && ("column" === flexDir || "column-reverse" === flexDir) && (
                        <h3
                            className={`premium-countup__title`}
                            style={{
                                fontFamily: titleFamily,
                                marginTop: titleT + "px",
                                marginBottom: titleB + "px",
                                color: titleColor,
                                letterSpacing: titleSpacing + "px",
                                fontWeight: titleWeight,
                                textTransform: titleUpper ? "uppercase" : "none",
                                fontStyle: titleStyle,
                                alignSelf: selfAlign
                            }}
                        >
                            {titleTxt}
                        </h3>
                    )}
                </div>
            );
        }
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                borderTop: "",
                borderRight: "",
                borderBottom: "",
                borderLeft: "",
                borderCount: "",
                block_id: '',
                numberSizeUnit: 'px',
                numberSizeTablet: '',
                numberSizeMobile: '',
                prefixSizeUnit: 'px',
                prefixSizeTablet: '',
                prefixSizeMobile: '',
                suffixSizeUnit: 'px',
                suffixSizeTablet: '',
                suffixSizeMobile: '',
                titleSizeUnit: 'px',
                titleSizeTablet: '',
                titleSizeMobile: '',
                containerOpacity: "",
                hideDesktop: false,
                hideTablet: false,
                hideMobile: false
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                increment,
                time,
                delay,
                align,
                flexDir,
                numberSize,
                numberColor,
                numberWeight,
                prefix,
                prefixTxt,
                prefixSize,
                prefixColor,
                prefixWeight,
                prefixGap,
                suffix,
                suffixTxt,
                suffixSize,
                suffixColor,
                suffixWeight,
                suffixGap,
                iconCheck,
                icon,
                iconSpacing,
                iconType,
                imageURL,
                iconSize,
                iconColor,
                selfAlign,
                titleCheck,
                titleTxt,
                titleColor,
                titleSize,
                titleSpacing,
                titleStyle,
                titleUpper,
                titleT,
                titleB,
                titleWeight,
                faIcon,
                containerBack,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                backgroundImageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderColor,
                borderRadius,
                borderWidth,
                titleFamily,
                counterFamily,
                prefixFamily,
                suffixFamily,
            } = props.attributes;
            let iconClass =
                "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        justifyContent: align,
                        flexDirection: flexDir,
                        backgroundColor: containerBack,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundImage: `url('${backgroundImageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                    }}
                >
                    {iconCheck && (
                        <div
                            className={`premium-countup__icon_wrap`}
                            style={{
                                marginRight:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                marginLeft:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                alignSelf:
                                    "row-reverse" === flexDir || "row" === flexDir
                                        ? "center"
                                        : selfAlign,
                            }}
                        >
                            {"icon" === icon && (
                                <i
                                    className={`premium-countup__icon ${iconClass}`}
                                    style={{
                                        fontSize: iconSize + "px",
                                        color: iconColor,
                                    }}
                                />
                            )}
                            {"img" === icon && imageURL && (
                                <img
                                    src={imageURL}
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}

                    <div
                        className={`premium-countup__info`}
                        style={{
                            alignSelf:
                                "row-reverse" === flexDir || "row" === flexDir
                                    ? "center"
                                    : selfAlign,
                        }}
                    >
                        <div className={`premium-countup__desc`}>
                            {prefix && (
                                <p
                                    className={`premium-countup__prefix`}
                                    style={{
                                        fontSize: prefixSize + "px",
                                        fontFamily: prefixFamily,
                                        color: prefixColor,
                                        fontWeight: prefixWeight,
                                        marginRight: prefixGap + "px",
                                    }}
                                >
                                    {prefixTxt}
                                </p>
                            )}
                            <p
                                className={`premium-countup__increment`}
                                data-interval={time}
                                data-delay={delay}
                                style={{
                                    fontSize: numberSize + "px",
                                    fontFamily: counterFamily,
                                    color: numberColor,
                                    fontWeight: numberWeight,
                                }}
                            >
                                {increment}
                            </p>
                            {suffix && (
                                <p
                                    className={`premium-countup__suffix`}
                                    style={{
                                        fontSize: suffixSize + "px",
                                        fontFamily: suffixFamily,
                                        color: suffixColor,
                                        fontWeight: suffixWeight,
                                        marginLeft: suffixGap + "px",
                                    }}
                                >
                                    {suffixTxt}
                                </p>
                            )}
                        </div>
                        {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                            <h3
                                className={`premium-countup__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    fontFamily: titleFamily,
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir || "column-reverse" === flexDir) && (
                            <h3
                                className={`premium-countup__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    fontFamily: titleFamily,
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    alignSelf: selfAlign,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                borderType: "",
                borderColor: "",
                borderRadius: "",
                borderWidth: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                increment,
                time,
                delay,
                align,
                flexDir,
                numberSize,
                numberColor,
                numberWeight,
                prefix,
                prefixTxt,
                prefixSize,
                prefixColor,
                prefixWeight,
                prefixGap,
                suffix,
                suffixTxt,
                suffixSize,
                suffixColor,
                suffixWeight,
                suffixGap,
                iconCheck,
                icon,
                iconSpacing,
                iconType,
                imageURL,
                iconSize,
                iconColor,
                selfAlign,
                titleCheck,
                titleTxt,
                titleColor,
                titleSize,
                titleSpacing,
                titleStyle,
                titleUpper,
                titleT,
                titleB,
                titleWeight,
                faIcon,
                containerBack,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                backgroundImageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                titleFamily,
                counterFamily,
                prefixFamily,
                suffixFamily,
            } = props.attributes;
            let iconClass =
                "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        justifyContent: align,
                        flexDirection: flexDir,
                        backgroundColor: containerBack,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundImage: `url('${backgroundImageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {iconCheck && (
                        <div
                            className={`${className}__icon_wrap`}
                            style={{
                                marginRight:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                marginLeft:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                alignSelf:
                                    "row-reverse" === flexDir || "row" === flexDir
                                        ? "center"
                                        : selfAlign,
                            }}
                        >
                            {"icon" === icon && (
                                <i
                                    className={`${className}__icon ${iconClass}`}
                                    style={{
                                        fontSize: iconSize + "px",
                                        color: iconColor,
                                    }}
                                />
                            )}
                            {"img" === icon && imageURL && (
                                <img
                                    src={imageURL}
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}

                    <div
                        className={`${className}__info`}
                        style={{
                            alignSelf:
                                "row-reverse" === flexDir || "row" === flexDir
                                    ? "center"
                                    : selfAlign,
                        }}
                    >
                        <div className={`${className}__desc`}>
                            {prefix && (
                                <p
                                    className={`${className}__prefix`}
                                    style={{
                                        fontSize: prefixSize + "px",
                                        fontFamily: prefixFamily,
                                        color: prefixColor,
                                        fontWeight: prefixWeight,
                                        marginRight: prefixGap + "px",
                                    }}
                                >
                                    {prefixTxt}
                                </p>
                            )}
                            <p
                                className={`${className}__increment`}
                                data-interval={time}
                                data-delay={delay}
                                style={{
                                    fontSize: numberSize + "px",
                                    fontFamily: counterFamily,
                                    color: numberColor,
                                    fontWeight: numberWeight,
                                }}
                            >
                                {increment}
                            </p>
                            {suffix && (
                                <p
                                    className={`${className}__suffix`}
                                    style={{
                                        fontSize: suffixSize + "px",
                                        fontFamily: suffixFamily,
                                        color: suffixColor,
                                        fontWeight: suffixWeight,
                                        marginLeft: suffixGap + "px",
                                    }}
                                >
                                    {suffixTxt}
                                </p>
                            )}
                        </div>
                        {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    fontFamily: titleFamily,
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir || "column-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    fontFamily: titleFamily,
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    alignSelf: selfAlign,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                titleFamily: "",
                counterFamily: "",
                prefixFamily: "",
                suffixFamily: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                increment,
                time,
                delay,
                align,
                flexDir,
                numberSize,
                numberColor,
                numberWeight,
                prefix,
                prefixTxt,
                prefixSize,
                prefixColor,
                prefixWeight,
                prefixGap,
                suffix,
                suffixTxt,
                suffixSize,
                suffixColor,
                suffixWeight,
                suffixGap,
                iconCheck,
                icon,
                iconSpacing,
                iconType,
                imageURL,
                iconSize,
                iconColor,
                selfAlign,
                titleCheck,
                titleTxt,
                titleColor,
                titleSize,
                titleSpacing,
                titleStyle,
                titleUpper,
                titleT,
                titleB,
                titleWeight,
                faIcon,
                containerBack,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                backgroundImageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
            } = props.attributes;
            let iconClass =
                "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        justifyContent: align,
                        flexDirection: flexDir,
                        backgroundColor: containerBack,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundImage: `url('${backgroundImageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {iconCheck && (
                        <div
                            className={`${className}__icon_wrap`}
                            style={{
                                marginRight:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                marginLeft:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                alignSelf:
                                    "row-reverse" === flexDir || "row" === flexDir
                                        ? "center"
                                        : selfAlign,
                            }}
                        >
                            {"icon" === icon && (
                                <i
                                    className={`${className}__icon ${iconClass}`}
                                    style={{
                                        fontSize: iconSize + "px",
                                        color: iconColor,
                                    }}
                                />
                            )}
                            {"img" === icon && imageURL && (
                                <img
                                    src={imageURL}
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}

                    <div
                        className={`${className}__info`}
                        style={{
                            alignSelf:
                                "row-reverse" === flexDir || "row" === flexDir
                                    ? "center"
                                    : selfAlign,
                        }}
                    >
                        <div className={`${className}__desc`}>
                            {prefix && (
                                <p
                                    style={{
                                        fontSize: prefixSize + "px",
                                        color: prefixColor,
                                        fontWeight: prefixWeight,
                                        marginRight: prefixGap + "px",
                                    }}
                                >
                                    {prefixTxt}
                                </p>
                            )}
                            <p
                                className={`${className}__increment`}
                                data-interval={time}
                                data-delay={delay}
                                style={{
                                    fontSize: numberSize + "px",
                                    color: numberColor,
                                    fontWeight: numberWeight,
                                }}
                            >
                                {increment}
                            </p>
                            {suffix && (
                                <p
                                    style={{
                                        fontSize: suffixSize + "px",
                                        color: suffixColor,
                                        fontWeight: suffixWeight,
                                        marginLeft: suffixGap + "px",
                                    }}
                                >
                                    {suffixTxt}
                                </p>
                            )}
                        </div>
                        {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir || "column-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    alignSelf: selfAlign,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                shadowColor: "",
                shadowBlur: "0",
                shadowHorizontal: "0",
                shadowVertical: "0",
                shadowPosition: "",
                backgroundImageID: "",
                backgroundImageURL: "",
                fixed: false,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "auto",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                increment,
                time,
                delay,
                align,
                flexDir,
                numberSize,
                numberColor,
                numberWeight,
                prefix,
                prefixTxt,
                prefixSize,
                prefixColor,
                prefixWeight,
                prefixGap,
                suffix,
                suffixTxt,
                suffixSize,
                suffixColor,
                suffixWeight,
                suffixGap,
                iconCheck,
                icon,
                iconSpacing,
                iconType,
                imageURL,
                iconSize,
                iconColor,
                selfAlign,
                titleCheck,
                titleTxt,
                titleColor,
                titleSize,
                titleSpacing,
                titleStyle,
                titleUpper,
                titleT,
                titleB,
                titleWeight,
                faIcon,
                containerBack,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
            } = props.attributes;
            let iconClass =
                "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        justifyContent: align,
                        flexDirection: flexDir,
                        backgroundColor: containerBack,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    }}
                >
                    {iconCheck && (
                        <div
                            className={`${className}__icon_wrap`}
                            style={{
                                marginRight:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                marginLeft:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                alignSelf:
                                    "row-reverse" === flexDir || "row" === flexDir
                                        ? "center"
                                        : selfAlign,
                            }}
                        >
                            {"icon" === icon && (
                                <i
                                    className={`${className}__icon ${iconClass}`}
                                    style={{
                                        fontSize: iconSize + "px",
                                        color: iconColor,
                                    }}
                                />
                            )}
                            {"img" === icon && imageURL && (
                                <img
                                    src={imageURL}
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}

                    <div
                        className={`${className}__info`}
                        style={{
                            alignSelf:
                                "row-reverse" === flexDir || "row" === flexDir
                                    ? "center"
                                    : selfAlign,
                        }}
                    >
                        <div className={`${className}__desc`}>
                            {prefix && (
                                <p
                                    style={{
                                        fontSize: prefixSize + "px",
                                        color: prefixColor,
                                        fontWeight: prefixWeight,
                                        marginRight: prefixGap + "px",
                                    }}
                                >
                                    {prefixTxt}
                                </p>
                            )}
                            <p
                                className={`${className}__increment`}
                                data-interval={time}
                                data-delay={delay}
                                style={{
                                    fontSize: numberSize + "px",
                                    color: numberColor,
                                    fontWeight: numberWeight,
                                }}
                            >
                                {increment}
                            </p>
                            {suffix && (
                                <p
                                    style={{
                                        fontSize: suffixSize + "px",
                                        color: suffixColor,
                                        fontWeight: suffixWeight,
                                        marginLeft: suffixGap + "px",
                                    }}
                                >
                                    {suffixTxt}
                                </p>
                            )}
                        </div>
                        {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir || "column-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    alignSelf: selfAlign,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                shadowColor: "",
                shadowBlur: "0",
                shadowHorizontal: "0",
                shadowVertical: "0",
                shadowPosition: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                increment,
                time,
                delay,
                align,
                flexDir,
                numberSize,
                numberColor,
                numberWeight,
                prefix,
                prefixTxt,
                prefixSize,
                prefixColor,
                prefixWeight,
                prefixGap,
                suffix,
                suffixTxt,
                suffixSize,
                suffixColor,
                suffixWeight,
                suffixGap,
                iconCheck,
                icon,
                iconSpacing,
                iconType,
                imageURL,
                iconSize,
                iconColor,
                selfAlign,
                titleCheck,
                titleTxt,
                titleColor,
                titleSize,
                titleSpacing,
                titleStyle,
                titleUpper,
                titleT,
                titleB,
                titleWeight,
                faIcon,
                containerBack,
            } = props.attributes;
            let iconClass =
                "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        justifyContent: align,
                        flexDirection: flexDir,
                        backgroundColor: containerBack,
                    }}
                >
                    {iconCheck && (
                        <div
                            className={`${className}__icon_wrap`}
                            style={{
                                marginRight:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                marginLeft:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                alignSelf:
                                    "row-reverse" === flexDir || "row" === flexDir
                                        ? "center"
                                        : selfAlign,
                            }}
                        >
                            {"icon" === icon && (
                                <i
                                    className={`${className}__icon ${iconClass}`}
                                    style={{
                                        fontSize: iconSize + "px",
                                        color: iconColor,
                                    }}
                                />
                            )}
                            {"img" === icon && imageURL && (
                                <img
                                    src={imageURL}
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}

                    <div
                        className={`${className}__info`}
                        style={{
                            alignSelf:
                                "row-reverse" === flexDir || "row" === flexDir
                                    ? "center"
                                    : selfAlign,
                        }}
                    >
                        <div className={`${className}__desc`}>
                            {prefix && (
                                <p
                                    style={{
                                        fontSize: prefixSize + "px",
                                        color: prefixColor,
                                        fontWeight: prefixWeight,
                                        marginRight: prefixGap + "px",
                                    }}
                                >
                                    {prefixTxt}
                                </p>
                            )}
                            <p
                                className={`${className}__increment`}
                                data-interval={time}
                                data-delay={delay}
                                style={{
                                    fontSize: numberSize + "px",
                                    color: numberColor,
                                    fontWeight: numberWeight,
                                }}
                            >
                                {increment}
                            </p>
                            {suffix && (
                                <p
                                    style={{
                                        fontSize: suffixSize + "px",
                                        color: suffixColor,
                                        fontWeight: suffixWeight,
                                        marginLeft: suffixGap + "px",
                                    }}
                                >
                                    {suffixTxt}
                                </p>
                            )}
                        </div>
                        {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir || "column-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    alignSelf: selfAlign,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                </div>
            );
        },
    },
    {
        attributes: attributes,
        save: (props) => {
            const {
                increment,
                time,
                delay,
                align,
                flexDir,
                numberSize,
                numberColor,
                numberWeight,
                prefix,
                prefixTxt,
                prefixSize,
                prefixColor,
                prefixWeight,
                prefixGap,
                suffix,
                suffixTxt,
                suffixSize,
                suffixColor,
                suffixWeight,
                suffixGap,
                iconCheck,
                icon,
                iconSpacing,
                iconType,
                imageURL,
                iconSize,
                iconColor,
                selfAlign,
                titleCheck,
                titleTxt,
                titleColor,
                titleSize,
                titleSpacing,
                titleStyle,
                titleUpper,
                titleT,
                titleB,
                titleWeight,
                faIcon,
            } = props.attributes;
            let iconClass =
                "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        justifyContent: align,
                        flexDirection: flexDir,
                    }}
                >
                    {iconCheck && (
                        <div
                            className={`${className}__icon_wrap`}
                            style={{
                                marginRight:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                marginLeft:
                                    "row" === flexDir || "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                alignSelf:
                                    "row-reverse" === flexDir || "row" === flexDir
                                        ? "center"
                                        : selfAlign,
                            }}
                        >
                            {"icon" === icon && (
                                <i
                                    className={`${className}__icon ${iconClass}`}
                                    style={{
                                        fontSize: iconSize + "px",
                                        color: iconColor,
                                    }}
                                />
                            )}
                            {"img" === icon && imageURL && (
                                <img
                                    src={imageURL}
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}

                    <div
                        className={`${className}__info`}
                        style={{
                            alignSelf:
                                "row-reverse" === flexDir || "row" === flexDir
                                    ? "center"
                                    : selfAlign,
                        }}
                    >
                        <div className={`${className}__desc`}>
                            {prefix && (
                                <p
                                    style={{
                                        fontSize: prefixSize + "px",
                                        color: prefixColor,
                                        fontWeight: prefixWeight,
                                        marginRight: prefixGap + "px",
                                    }}
                                >
                                    {prefixTxt}
                                </p>
                            )}
                            <p
                                className={`${className}__increment`}
                                data-interval={time}
                                data-delay={delay}
                                style={{
                                    fontSize: numberSize + "px",
                                    color: numberColor,
                                    fontWeight: numberWeight,
                                }}
                            >
                                {increment}
                            </p>
                            {suffix && (
                                <p
                                    style={{
                                        fontSize: suffixSize + "px",
                                        color: suffixColor,
                                        fontWeight: suffixWeight,
                                        marginLeft: suffixGap + "px",
                                    }}
                                >
                                    {suffixTxt}
                                </p>
                            )}
                        </div>
                        {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir || "column-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    alignSelf: selfAlign,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                </div>
            );
        },
    },
];

export default deprecatedContent;