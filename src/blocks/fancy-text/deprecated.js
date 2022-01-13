import classnames from "classnames";
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
        default: [{
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
        },
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
    fancyTextBGOpacity: {
        type: "number",
        default: "1"
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
    textBGOpacity: {
        type: "number",
        default: "1"
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

const new_attributes = {
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
                cursorColor: ''
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

const new_deprecated_attributes = Object.assign(attributes, new_attributes)

const deprecated = [
    {
        attributes: new_deprecated_attributes,
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
        attributes: attributes,
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