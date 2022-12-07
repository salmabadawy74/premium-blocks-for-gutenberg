import classnames from "classnames"
import {
    filterJsCss,
    generateCss
} from '@pbg/helpers';
import { useBlockProps } from "@wordpress/block-editor";

const { __ } = wp.i18n;

const attributes = {
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    align: {
        type: "string",
        default: "center"
    },
    prefix: {
        type: "string",
        default: "This is"
    },
    suffix: {
        type: "string",
        default: "Text"
    },
    repeaterFancyText: {
        type: "array",
        default: [
            {
                title: __("Designer"),
                edit: false
            },
            {
                title: __("Developer"),
                edit: false
            },
            {
                title: __("Awesome"),
                edit: false
            }
        ]
    },
    effect: {
        type: "string",
        default: "typing"
    },
    fancyTextColor: {
        type: "string",
        default: "#6ec1e4"
    },
    cursorColor: {
        type: "string",
        default: "#6ec1e4"
    },
    fancyTextLetter: {
        type: "number"
    },
    fancyTextStyle: {
        type: "string"
    },
    fancyTextUpper: {
        type: "boolean",
        default: false
    },
    fancyTextWeight: {
        type: "number",
        default: 600
    },
    fancyTextfontSize: {
        type: "number",
        default: 20
    },
    fancyTextfontSizeUnit: {
        type: "string",
        default: "px"
    },
    fancyTextfontSizeMobile: {
        type: "number",
        default: 20
    },
    fancyTextfontSizeTablet: {
        type: "number",
        default: 20
    },
    fancyTextBGColor: {
        type: "string"
    },
    shadowColor: {
        type: "string"
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
    textColor: {
        type: "string",
        default: "#54595f"
    },
    textLetter: {
        type: "number"
    },
    textStyle: {
        type: "string"
    },
    textUpper: {
        type: "boolean",
        default: false
    },
    textWeight: {
        type: "number",
        default: 600
    },
    textfontSize: {
        type: "number",
        default: 20
    },
    textfontSizeUnit: {
        type: "string",
        default: "px"
    },
    textfontSizeMobile: {
        type: "number",
        default: 20
    },
    textfontSizeTablet: {
        type: "number",
        default: 20
    },
    textBGColor: {
        type: "string"
    },
    loop: {
        type: "boolean",
        default: "true"
    },
    cursorShow: {
        type: "boolean",
        default: "true"
    },
    cursorMark: {
        type: "string",
        default: "|"
    },
    typeSpeed: {
        type: "number",
        default: 100
    },
    backdelay: {
        type: "number",
        default: 30
    },
    startdelay: {
        type: "number",
        default: 30
    },
    backSpeed: {
        type: "number",
        default: 30
    },
    animationSpeed: {
        type: "number",
        default: 200
    },
    pauseTime: {
        type: "number",
        default: 3000
    },
    hoverPause: {
        type: "boolean",
        default: false
    },
    fancyalign: {
        type: "string",
        default: "center"
    },
};

const newAtrributes_1_0_1 = {
    fancyTextBGOpacity: {
        type: "number",
        default: "1"
    },
    textBGOpacity: {
        type: "number",
        default: "1"
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
};

const fancyAttributes_1_0_1 = Object.assign(
    newAtrributes_1_0_1,
    attributes
);
const new_Deprecated_Attributes = {
    fancyStyles: {
        type: "array",
        default: [
            {
                fancyTextColor: "#6ec1e4",
                fancyTextfontSize: 20,
                fancyTextfontSizeUnit: 'px',
                fancyTextfontSizeMobile: 20,
                fancyTextfontSizeTablet: 20,
                fancyTextBGColor: '',
                fancyTextBGOpacity: 1,
                fancyTextLetter: '',
                fancyTextStyle: '',
                fancyTextUpper: false,
                fancyTextWeight: 600,
                shadowColor: '',
                shadowBlur: '0',
                shadowHorizontal: '0',
                shadowVertical: '0',
                cursorColor: "#6ec1e4"
            }
        ]
    },
    PreStyles: {
        type: "array",
        default: [
            {
                textColor: "#54595f",
                textLetter: '',
                textStyle: '',
                textUpper: false,
                textWeight: 600,
                textfontSize: 20,
                textfontSizeUnit: 'px',
                textfontSizeMobile: 20,
                textfontSizeTablet: 20,
                textBGColor: '',
                textBGOpacity: 1,
            }
        ]
    }
}
const deprecated_fancyAttributes = Object.assign(fancyAttributes_1_0_1, new_Deprecated_Attributes)
const new_Deprecated_Attributes_0_1 = {
    prefixTypography: {
        type: "object",
        default: {
            "fontWeight": '400',
            'fontStyle': '',

            'letterSpacing': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'fontFamily': 'Default',
            'lineHeight': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'textDecoration': '',
            'textTransform': '',
            'fontSize': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            }
        }
    },
    fancyTextTypography: {
        type: "object",
        default: {
            "fontWeight": '400',
            'fontStyle': '',

            'letterSpacing': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'fontFamily': 'Default',
            'lineHeight': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'textDecoration': '',
            'textTransform': '',
            'fontSize': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            }
        }
    },
    fancyTextShadow: {
        type: "object",
        default: {
            'color': "undefined",
            'blur': '10',
            'horizontal': '0',
            'vertical': '0'
        }
    },
    fancyTextAlign: {
        type: "object",
        default: {
            Desktop: "center",
            Tablet: "center",
            Mobile: "center"
        }
    },
    fancyContentAlign: {
        type: "object",
        default: {
            Desktop: "center",
            Tablet: "center",
            Mobile: "center",
        }
    },
}

const v4Attributes = {
    "blockId": {
        "type": "string"
    },
    "classMigrate": {
        "type": "boolean",
        "default": ""
    },
    "fancyContentAlign": {
        "type": "object",
        "default": {
            "Desktop": "center",
            "Tablet": "center",
            "Mobile": "center"
        }
    },
    "prefix": {
        "type": "string",
        "default": "This is"
    },
    "suffix": {
        "type": "string",
        "default": "Text"
    },
    "repeaterFancyText": {
        "type": "array",
        "default": [
            {
                "title": "Designer",
                "edit": false
            },
            {
                "title": "Awesome",
                "edit": false
            },
            {
                "title": "Developer",
                "edit": false
            }
        ]
    },
    "effect": {
        "type": "string",
        "default": "typing"
    },
    "loop": {
        "type": "boolean",
        "default": "true"
    },
    "cursorShow": {
        "type": "boolean",
        "default": "true"
    },
    "cursorMark": {
        "type": "string",
        "default": "|"
    },
    "typeSpeed": {
        "type": "number",
        "default": 100
    },
    "backdelay": {
        "type": "number",
        "default": 30
    },
    "startdelay": {
        "type": "number",
        "default": 30
    },
    "backSpeed": {
        "type": "number",
        "default": 30
    },
    "animationSpeed": {
        "type": "number",
        "default": 200
    },
    "pauseTime": {
        "type": "number",
        "default": 3000
    },
    "hoverPause": {
        "type": "boolean",
        "default": false
    },
    "fancyTextAlign": {
        "type": "object",
        "default": {
            "Desktop": "center",
            "Tablet": "center",
            "Mobile": "center"
        }
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
    "fancyStyles": {
        "type": "array",
        "default": [
            {
                "fancyTextColor": "#0085BA",
                "fancyTextBGColor": "",
                "fancyTextBGOpacity": 1,
                "cursorColor": ""
            }
        ]
    },
    "PreStyles": {
        "type": "array",
        "default": [
            {
                "textColor": "",
                "textBGColor": "",
                "textBGOpacity": 1
            }
        ]
    },
    "prefixTypography": {
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
    "fancyTextTypography": {
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
    "fancyTextShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0"
        }
    }
}

const deprecated = [
    {
        attributes: v4Attributes,
        isEligible(attributes) {
            return attributes?.fancyStyles?.fancyTextColor;
        },
        migrate: (attributes) => {
            let newAttributes = {
                secondColor: attributes?.fancyStyles || [{
                    "fancyTextColor": "var(--pbg-global-color1,#0085BA)",
                    "fancyTextBGColor": "",
                    "fancyTextBGOpacity": 1,
                    "cursorColor": ""
                }],
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const { attributes, className } = props

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
                fancyTextShadow
            } = attributes;

            const loadStyles = () => {
                const styles = {};
                styles[` .${blockId} .premium-fancy-text-title`] = {
                    'color': `${fancyStyles[0].fancyTextColor} !important`,
                    'background-color': `${fancyStyles[0].fancyTextBGColor} !important`
                };
                styles[` .${blockId} .typed-cursor`] = {
                    'color': `${fancyStyles[0].cursorColor} !important`
                };
                styles[` .${blockId} .premium-fancy-text-suffix-prefix`] = {
                    'color': `${PreStyles[0].textColor} !important`,
                    'background-color': `${PreStyles[0].textBGColor} !important`
                };
                return generateCss(styles);
            }

            return (
                <div
                    {...useBlockProps.save({
                        className: classnames(
                            className,
                            `${blockId}`,
                            {
                                " premium-desktop-hidden": hideDesktop,
                                " premium-tablet-hidden": hideTablet,
                                " premium-mobile-hidden": hideMobile,
                            }
                        ),
                    })}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: loadStyles()
                        }}
                    />

                    {effect === "typing" ? (
                        <div
                            id={`premium-fancy-text-${blockId}`}
                            className={`premium-fancy-text`}
                            data-effect={`${effect}`}
                            data-strings={`${repeaterFancyText.map(
                                (item, index) => {
                                    return item.title;
                                }
                            )}`}
                            data-typespeed={`${typeSpeed}`}
                            data-backspeed={`${backSpeed}`}
                            data-startdelay={`${startdelay}`}
                            data-backdelay={`${backdelay}`}
                            data-loop={`${loop}`}
                            data-cursorshow={`${cursorShow}`}
                            data-cursormark={`${cursorMark}`}
                        >
                            <span className={`premium-fancy-text-suffix-prefix premium-fancy-text-prefix-text`}
                                style={filterJsCss({
                                    color: PreStyles[0].textColor,
                                    backgroundColor: PreStyles[0].textBGColor,
                                    fontStyle: prefixTypography.fontStyle,
                                    fontFamily: prefixTypography.fontFamily,
                                    fontWeight: prefixTypography.fontWeight,
                                    textDecoration: prefixTypography.textDecoration,
                                    textTransform: prefixTypography.textTransform,
                                })}
                            >
                                {prefix}{" "}
                            </span>
                            <span
                                className={`premium-fancy-text-title premium-fancy-text-title-type`}
                                style={filterJsCss({
                                    color: fancyStyles[0].fancyTextColor,
                                    backgroundColor: fancyStyles[0].fancyTextBGColor,
                                    fontStyle: fancyTextTypography.fontStyle,
                                    fontFamily: fancyTextTypography.fontFamily,
                                    fontWeight: fancyTextTypography.fontWeight,
                                    textDecoration: fancyTextTypography.textDecoration,
                                    textTransform: fancyTextTypography.textTransform,
                                    textShadow: `${fancyTextShadow.horizontal}px ${fancyTextShadow.vertical}px ${fancyTextShadow.blur}px ${fancyTextShadow.color}`,

                                })}
                                ref={(el) => {
                                    this.el = el;
                                }}
                            >
                                {" "}
                            </span>
                            <span className={`premium-fancy-text-suffix-prefix premium-fancy-text-suffix-text`}
                                style={filterJsCss({
                                    color: PreStyles[0].textColor,
                                    backgroundColor: PreStyles[0].textBGColor,
                                    fontStyle: prefixTypography.fontStyle,
                                    fontFamily: prefixTypography.fontFamily,
                                    fontWeight: prefixTypography.fontWeight,
                                    textDecoration: prefixTypography.textDecoration,
                                    textTransform: prefixTypography.textTransform,
                                })}
                            >
                                {" "}
                                {suffix}
                            </span>
                        </div>
                    ) : (
                        <div
                            id={`premium-fancy-text-${blockId}`}
                            className={`premium-fancy-text premium-fancy-slide`}
                            data-effect={`${effect}`}
                            data-strings={`${repeaterFancyText.map(
                                (item, index) => {
                                    return item.title;
                                }
                            )}`}
                            data-animationspeed={`${animationSpeed}`}
                            data-pausetime={`${pauseTime}`}
                            data-hoverpause={`${hoverPause}`}
                        >
                            <span className={`premium-fancy-text-suffix-prefix premium-fancy-text-prefix-text`}
                                style={filterJsCss({
                                    color: PreStyles[0].textColor,
                                    backgroundColor: PreStyles[0].textBGColor,
                                    fontStyle: prefixTypography.fontStyle,
                                    fontFamily: prefixTypography.fontFamily,
                                    fontWeight: prefixTypography.fontWeight,
                                    textDecoration: prefixTypography.textDecoration,
                                    textTransform: prefixTypography.textTransform,
                                })}
                            >
                                {prefix}{" "}
                            </span>
                            <div
                                className={`premium-fancy-text-title premium-fancy-text-title-slide`}
                                style={{
                                    color: fancyStyles[0].fancyTextColor,
                                    backgroundColor: `${fancyStyles[0].fancyTextBGColor}`,
                                    fontStyle: fancyTextTypography.fontStyle,
                                    fontFamily: fancyTextTypography.fontFamily,
                                    fontWeight: fancyTextTypography.fontWeight,
                                    textDecoration: fancyTextTypography.textDecoration,
                                    textTransform: fancyTextTypography.textTransform,
                                    textShadow: `${fancyTextShadow.horizontal}px ${fancyTextShadow.vertical}px ${fancyTextShadow.blur}px ${fancyTextShadow.color}`,

                                }}
                            >
                                <ul
                                    className={`premium-fancy-text-title-slide-list`}
                                >
                                    {repeaterFancyText.map((item, index) => {
                                        return <li>{item.title}</li>;
                                    })}
                                </ul>
                            </div>
                            <span className={`premium-fancy-text-suffix-prefix premium-fancy-text-suffix-text`}
                                style={filterJsCss({
                                    color: PreStyles[0].textColor,
                                    backgroundColor: PreStyles[0].textBGColor,
                                    fontStyle: prefixTypography.fontStyle,
                                    fontFamily: prefixTypography.fontFamily,
                                    fontWeight: prefixTypography.fontWeight,
                                    textDecoration: prefixTypography.textDecoration,
                                    textTransform: prefixTypography.textTransform,
                                })}
                            >
                                {" "}
                                {suffix}
                            </span>
                        </div>
                    )
                    }
                </div >
            )
        }
    },
    {
        attributes: Object.assign(deprecated_fancyAttributes, new_Deprecated_Attributes_0_1),
        migrate: attributes => {
            let new_Attributes = {
                blockId: attributes.block_id ? `premium-block-${attributes.block_id.split('-')[6]}` : '',
                fancyContentAlign: {
                    "Desktop": attributes.align || 'center',
                    "Tablet": attributes.align || 'center',
                    "Mobile": attributes.align || 'center',
                },
                fancyTextAlign: {
                    "Desktop": attributes.fancyalign || 'center',
                    "Tablet": attributes.fancyalign || 'center',
                    "Mobile": attributes.fancyalign || 'center',
                },
                prefixTypography: {
                    "fontWeight": attributes.PreStyles[0].textWeight || 'Default',
                    'fontStyle': attributes.PreStyles[0].textStyle,
                    'letterSpacing': {
                        'Desktop': attributes.PreStyles[0].textLetter,
                        "Tablet": attributes.PreStyles[0].textLetter,
                        "Mobile": attributes.PreStyles[0].textLetter,
                        "unit": 'px'
                    },
                    'fontFamily': 'Default',
                    'lineHeight': {
                        'Desktop': '',
                        "Tablet": '',
                        "Mobile": '',
                        "unit": 'px'
                    },
                    'textDecoration': '',
                    'textTransform': '',
                    'fontSize': {
                        'Desktop': attributes.PreStyles[0].textfontSize,
                        "Tablet": attributes.PreStyles[0].textfontSizeTablet,
                        "Mobile": attributes.PreStyles[0].textfontSizeMobile,
                        "unit": attributes.PreStyles[0].textfontSizeUnit
                    }
                },
                fancyTextTypography: {
                    "fontWeight": attributes.fancyStyles[0].fancyTextWeight || 'Default',
                    'fontStyle': attributes.fancyStyles[0].fancyTextStyle,
                    'letterSpacing': {
                        'Desktop': attributes.fancyStyles[0].fancyTextLetter,
                        "Tablet": attributes.fancyStyles[0].fancyTextLetter,
                        "Mobile": attributes.fancyStyles[0].fancyTextLetter,
                        "unit": 'px'
                    },
                    'fontFamily': 'Default',
                    'lineHeight': {
                        'Desktop': '',
                        "Tablet": '',
                        "Mobile": '',
                        "unit": 'px'
                    },
                    'textDecoration': '',
                    'textTransform': '',
                    'fontSize': {
                        'Desktop': attributes.fancyStyles[0].fancyTextfontSize,
                        "Tablet": attributes.fancyStyles[0].fancyTextfontSizeTablet,
                        "Mobile": attributes.fancyStyles[0].fancyTextfontSizeMobile,
                        "unit": attributes.fancyStyles[0].fancyTextfontSizeUnit
                    }
                },
                fancyTextShadow: {
                    'color': attributes.fancyStyles[0].shadowColor,
                    'blur': attributes.fancyStyles[0].shadowBlur,
                    'horizontal': attributes.fancyStyles[0].shadowHorizontal,
                    'vertical': attributes.fancyStyles[0].shadowVertical
                }
            }
            return Object.assign(attributes, new_Attributes)
        },
        save: props => {
            const { attributes, className } = props

            const {
                block_id,
                align,
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
                fancyalign,
                hideDesktop,
                hideTablet,
                hideMobile,
                fancyStyles,
                PreStyles
            } = attributes;


            return (
                <div
                    className={classnames(className, `premium-block-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`)}
                    style={{
                        textAlign: align,
                    }}
                >

                    {effect === "typing" ? (
                        <div
                            id={`premium-fancy-text-${block_id}`}
                            className={`premium-fancy-text`}
                            style={{
                                textAlign: align,
                            }}
                            data-effect={`${effect}`}
                            data-strings={`${repeaterFancyText.map(
                                (item, index) => {
                                    return item.title;
                                }
                            )}`}
                            data-typespeed={`${typeSpeed}`}
                            data-backspeed={`${backSpeed}`}
                            data-startdelay={`${startdelay}`}
                            data-backdelay={`${backdelay}`}
                            data-loop={`${loop}`}
                            data-cursorshow={`${cursorShow}`}
                            data-cursormark={`${cursorMark}`}
                        >
                            <span className={`premium-fancy-text-prefix-text`}
                                style={{
                                    color: PreStyles[0].textColor,
                                    fontWeight: PreStyles[0].textWeight,
                                    letterSpacing: `${PreStyles[0].textLetter}px`,
                                    textTransform: `${PreStyles[0].textUpper ? "uppercase" : "none"}`,
                                    fontStyle: PreStyles[0].textStyle,
                                    backgroundColor: PreStyles[0].textBGColor
                                }}
                            >
                                {prefix}{" "}
                            </span>
                            <span
                                className={`premium-fancy-text-title`}
                                style={{
                                    color: fancyStyles[0].fancyTextColor,
                                    fontWeight: fancyStyles[0].fancyTextWeight,
                                    letterSpacing: `${fancyStyles[0].fancyTextLetter}px`,
                                    textTransform: `${fancyStyles[0].fancyTextUpper ? "uppercase" : "none"}`,
                                    fontStyle: `${fancyStyles[0].fancyTextStyle}`,
                                    backgroundColor: `${fancyStyles[0].fancyTextBGColor}`,
                                    textShadow: `${fancyStyles[0].shadowHorizontal}px ${fancyStyles[0].shadowVertical}px ${fancyStyles[0].shadowBlur}px ${fancyStyles[0].shadowColor}`
                                }}
                                ref={(el) => {
                                    this.el = el;
                                }}
                            >
                                {" "}
                            </span>
                            <span className={`premium-fancy-text-suffix-text`}
                                style={{
                                    color: PreStyles[0].textColor,
                                    fontWeight: PreStyles[0].textWeight,
                                    letterSpacing: `${PreStyles[0].textLetter}px`,
                                    textTransform: `${PreStyles[0].textUpper ? "uppercase" : "none"}`,
                                    fontStyle: PreStyles[0].textStyle,
                                    backgroundColor: PreStyles[0].textBGColor
                                }}
                            >
                                {" "}
                                {suffix}
                            </span>
                        </div>
                    ) : (
                        <div
                            id={`premium-fancy-text-${block_id}`}
                            className={`premium-fancy-text premium-fancy-slide`}
                            style={{
                                textAlign: align,

                            }}
                            data-effect={`${effect}`}
                            data-strings={`${repeaterFancyText.map(
                                (item, index) => {
                                    return item.title;
                                }
                            )}`}
                            data-animationspeed={`${animationSpeed}`}
                            data-pausetime={`${pauseTime}`}
                            data-hoverpause={`${hoverPause}`}
                        >
                            <span className={`premium-fancy-text-prefix-text`}
                                style={{
                                    color: PreStyles[0].textColor,
                                    fontWeight: PreStyles[0].textWeight,
                                    letterSpacing: `${PreStyles[0].textLetter}px`,
                                    textTransform: `${PreStyles[0].textUpper ? "uppercase" : "none"}`,
                                    fontStyle: PreStyles[0].textStyle,
                                    backgroundColor: PreStyles[0].textBGColor
                                }}
                            >
                                {prefix}{" "}
                            </span>
                            <div
                                className={`premium-fancy-text-title-slide`}
                                style={{
                                    textAlign: fancyalign,
                                    color: fancyStyles[0].fancyTextColor,
                                    fontWeight: fancyStyles[0].fancyTextWeight,
                                    letterSpacing: `${fancyStyles[0].fancyTextLetter}px`,
                                    textTransform: `${fancyStyles[0].fancyTextUpper ? "uppercase" : "none"}`,
                                    fontStyle: `${fancyStyles[0].fancyTextStyle}`,
                                    backgroundColor: `${fancyStyles[0].fancyTextBGColor}`,
                                    textShadow: `${fancyStyles[0].shadowHorizontal}px ${fancyStyles[0].shadowVertical}px ${fancyStyles[0].shadowBlur}px ${fancyStyles[0].shadowColor}`
                                }}
                            >
                                <ul
                                    className={`premium-fancy-text-title-slide-list`}
                                >
                                    {repeaterFancyText.map((item, index) => {
                                        return <li>{item.title}</li>;
                                    })}
                                </ul>
                            </div>
                            <span className={`premium-fancy-text-suffix-text`}
                                style={{
                                    color: PreStyles[0].textColor,
                                    fontWeight: PreStyles[0].textWeight,
                                    letterSpacing: `${PreStyles[0].textLetter}px`,
                                    textTransform: `${PreStyles[0].textUpper ? "uppercase" : "none"}`,
                                    fontStyle: PreStyles[0].textStyle,
                                    backgroundColor: PreStyles[0].textBGColor
                                }}
                            >
                                {" "}
                                {suffix}
                            </span>
                        </div>
                    )
                    }
                </div >
            )
        }
    },
    {
        attributes: deprecated_fancyAttributes,
        migrate: attributes => {
            let newAttributes = {
                fancyStyles: [
                    {
                        fancyTextColor: attributes.fancyTextColor,
                        fancyTextfontSize: attributes.fancyTextfontSize,
                        fancyTextfontSizeUnit: attributes.fancyTextfontSizeUnit,
                        fancyTextfontSizeMobile: attributes.fancyTextfontSizeMobile,
                        fancyTextfontSizeTablet: attributes.fancyTextfontSizeTablet,
                        fancyTextBGColor: attributes.fancyTextBGColor,
                        fancyTextBGOpacity: attributes.fancyTextBGOpacity,
                        fancyTextLetter: attributes.fancyTextLetter,
                        fancyTextStyle: attributes.fancyTextStyle,
                        fancyTextUpper: attributes.fancyTextUpper,
                        fancyTextWeight: attributes.fancyTextWeight,
                        shadowColor: attributes.shadowColor,
                        shadowBlur: attributes.shadowBlur,
                        shadowHorizontal: attributes.shadowHorizontal,
                        shadowVertical: attributes.shadowVertical,
                        cursorColor: attributes.cursorColor
                    }
                ],
                PreStyles: [
                    {
                        textColor: attributes.textColor,
                        textLetter: attributes.textLetter,
                        textStyle: attributes.textStyle,
                        textUpper: attributes.textUpper,
                        textWeight: attributes.textWeight,
                        textfontSize: attributes.textFontSize,
                        textfontSizeUnit: attributes.textFontSizeUnit,
                        textfontSizeMobile: attributes.textFontSizeMobile,
                        textfontSizeTablet: attributes.textfontSizeTablet,
                        textBGColor: attributes.textBGColor,
                        textBGOpacity: attributes.textBGOpacity,
                    }
                ]

            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const { attributes, className } = props

            const {
                block_id,
                align,
                prefix,
                suffix,
                repeaterFancyText,
                effect,
                loop,
                cursorShow,
                cursorMark,
                typeSpeed,
                backSpeed,
                startdelay,
                backdelay,
                animationSpeed,
                pauseTime,
                hoverPause,
                fancyalign,
                hideDesktop,
                hideTablet,
                hideMobile
            } = attributes;
            return (
                <div
                    className={classnames(className, `premium-block-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`)}
                    style={{
                        textAlign: align,
                    }}>
                    {effect == 'typing' ? <div
                        id={`premium-fancy-text-${block_id}`}
                        className={`premium-fancy-text`} style={{
                            textAlign: align,
                        }}
                        data-effect={`${effect}`}
                        data-strings={`${repeaterFancyText.map((item, index) => { return item.title })}`}
                        data-typespeed={`${typeSpeed}`}
                        data-backspeed={`${backSpeed}`}
                        data-startdelay={`${startdelay}`}
                        data-backdelay={`${backdelay}`}
                        data-loop={`${loop}`}
                        data-cursorshow={`${cursorShow}`}
                        data-cursormark={`${cursorMark}`}
                    >
                        <span className={`premium-fancy-text-prefix-text`}>{prefix} </span>
                        <span className={`premium-fancy-text-title`}> </span>
                        <span className={`premium-fancy-text-suffix-text`}> {suffix}</span>
                    </div>
                        : <div className={`premium-fancy-text premium-fancy-slide`} style={{
                            textAlign: align
                        }}
                            data-effect={`${effect}`}
                            data-strings={`${repeaterFancyText.map((item, index) => { return item.title })}`}
                            data-animationspeed={`${animationSpeed}`}
                            data-pausetime={`${pauseTime}`}
                            data-hoverpause={`${hoverPause}`}
                        >
                            <span className={`premium-fancy-text-prefix-text`}>{prefix} </span>
                            <div className={`premium-fancy-text-title-slide`} style={{
                                textAlign: fancyalign
                            }}>
                                <ul className={`premium-fancy-text-title-slide-list`}>
                                    {repeaterFancyText.map((item, index) => { return <li>{item.title}</li> })}
                                </ul>
                            </div>
                            <span className={`premium-fancy-text-suffix-text`}> {suffix}</span>
                        </div>
                    }
                </div>
            )
        }
    },
    {
        attributes: fancyAttributes_1_0_1,
        migrate: (attributes) => {
            let newAttributes = {
                fancyTextBGOpacity: "",
                textBGOpacity: "",
                hideDesktop: false,
                hideTablet: false,
                hideMobile: false

            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const { attributes, className } = props;
            const {
                block_id,
                align,
                prefix,
                suffix,
                repeaterFancyText,
                effect,
                loop,
                cursorShow,
                cursorMark,
                typeSpeed,
                backSpeed,
                startdelay,
                backdelay,
                animationSpeed,
                pauseTime,
                hoverPause,
                fancyalign
            } = attributes;

            return (
                <div
                    className={classnames(
                        className,
                        `premium-block-${block_id}`
                    )}
                    style={{
                        textAlign: align,
                    }}
                >
                    {effect == "typing" ? (
                        <div
                            id={`premium-fancy-text-${block_id}`}
                            className={`premium-fancy-text`}
                            style={{
                                textAlign: align,
                            }}
                            data-effect={`${effect}`}
                            data-strings={`${repeaterFancyText.map(
                                (item, index) => {
                                    return item.title;
                                }
                            )}`}
                            data-typespeed={`${typeSpeed}`}
                            data-backspeed={`${backSpeed}`}
                            data-startdelay={`${startdelay}`}
                            data-backdelay={`${backdelay}`}
                            data-loop={`${loop}`}
                            data-cursorshow={`${cursorShow}`}
                            data-cursormark={`${cursorMark}`}
                        >
                            <span className={`premium-fancy-text-prefix-text`}>
                                {prefix}
                            </span>
                            <span className={`premium-fancy-text-title`}>
                            </span>
                            <span className={`premium-fancy-text-suffix-text`}>
                                {suffix}
                            </span>
                        </div>
                    ) : (
                        <div
                            className={`premium-fancy-text premium-fancy-slide`}
                            style={{
                                textAlign: align,
                            }}
                            data-effect={`${effect}`}
                            data-strings={`${repeaterFancyText.map(
                                (item, index) => {
                                    return item.title;
                                }
                            )}`}
                            data-animationspeed={`${animationSpeed}`}
                            data-pausetime={`${pauseTime}`}
                            data-hoverpause={`${hoverPause}`}
                        >
                            <span className={`premium-fancy-text-prefix-text`}>
                                {prefix}
                            </span>
                            <div
                                className={`premium-fancy-text-title-slide`}
                                style={{
                                    textAlign: fancyalign,
                                }}
                            >
                                <ul
                                    className={`premium-fancy-text-title-slide-list`}
                                >
                                    {repeaterFancyText.map((item, index) => {
                                        return <li>{item.title}</li>;
                                    })}
                                </ul>
                            </div>
                            <span className={`premium-fancy-text-suffix-text`}>

                                {suffix}
                            </span>
                        </div>
                    )}
                </div>
            );
        },
    },
];
export default deprecated;