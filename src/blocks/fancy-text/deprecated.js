import classnames from "classnames";
import { generateBlockId } from '../../components/HelperFunction';	

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

const new_Deprecated_Attributes2 = {
    block_id: {
        type: "string"
    },

    fancyalign: {
        type: "object",
        default: {
            Desktop: "center",
            Tablet: "center",
            Mobile: "center"
        }
    },
    align: {
        type: "object",
        default: {
            Desktop: "center",
            Tablet: "center",
            Mobile: "center",
        }
    },
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
const deprecated_fancyAttributes2 = Object.assign(deprecated_fancyAttributes, new_Deprecated_Attributes2);

const deprecated = [
    {
        attributes: deprecated_fancyAttributes2,
        isEligible() {
            return true;
        },

        migrate: (attributes) => {
            let newAttributes = {
                blockId: attributes.block_id ? "premium-fancy-text-" + generateBlockId(attributes.block_id) : '',	
                fancyalign: {
                    Desktop: attributes.fancyalign,
                    Tablet: attributes.fancyalign,
                    Mobile: attributes.fancyalign,
                },
                align: {
                    Desktop: attributes.align,
                    Tablet: attributes.align,
                    Mobile: attributes.align,
                },
                prefixTypography: {
                        // 'fontWeight': '',
                        // 'fontStyle': '',
                        // 'textTransform': '',
                        // 'letterSpacing': '',
                        // 'fontFamily': '',
                        // 'lineHeight': '',
                        // 'textDecoration': '',
                        'fontSize': {
                            "Desktop": '100',
                            //"Desktop": attributes?.PreStyles[0]?.textfontSize || '',
                            "Tablet": attributes?.PreStyles[0]?.textfontSizeTablet || '',
                            "Mobile": attributes?.PreStyles[0]?.textfontSizeMobile || '',
                            "unit": 'px'
                        }

                    },
                fancyTextTypography: {
                        'fontWeight': '',
                        'fontStyle': '',
                        'textTransform': '',
                        'letterSpacing': '',
                        'fontFamily': '',
                        'lineHeight': '',
                        'textDecoration': '',
                        'fontSize': {
                            "Desktop": attributes?.fancyStyles?.[0].fancyTextfontSize || '',
                            "Tablet": attributes?.fancyStyles?.[0].fancyTextfontSizeTablet || '',
                            "Mobile": attributes?.fancyStyles?.[0].fancyTextfontSizeMobile || '',
                            "unit": 'px'
                        }
                }
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
                    className={`${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
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
                                (item) => {
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
                                (item) => {
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
                                    {repeaterFancyText.map((item) => {
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
                        data-strings={`${repeaterFancyText.map((item) => { return item.title })}`}
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
                            data-strings={`${repeaterFancyText.map((item) => { return item.title })}`}
                            data-animationspeed={`${animationSpeed}`}
                            data-pausetime={`${pauseTime}`}
                            data-hoverpause={`${hoverPause}`}
                        >
                            <span className={`premium-fancy-text-prefix-text`}>{prefix} </span>
                            <div className={`premium-fancy-text-title-slide`} style={{
                                textAlign: fancyalign
                            }}>
                                <ul className={`premium-fancy-text-title-slide-list`}>
                                    {repeaterFancyText.map((item) => { return <li>{item.title}</li> })}
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
                                (item) => {
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
                                (item) => {
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
                                    {repeaterFancyText.map((item) => {
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