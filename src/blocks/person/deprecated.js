const { __ } = wp.i18n;
import DefaultImage from "../../components/default-image";
import classnames from "classnames"

const attributes = {
    personSize: {
        type: "string",
        default: "md"
    },
    personAlign: {
        type: "string",
        default: "center"
    },
    imgSize: {
        type: "number"
    },
    imgBorder: {
        type: "number",
        default: "1"
    },
    imgBorderColor: {
        type: "string"
    },
    nameStyles: {
        type: "array",
        default: [
            {
                nameColor: "rgb(110, 193, 228)",
                nameLetter: 0,
                nameStyle: '',
                nameUpper: false,
                nameWeight: 500,
                nameLine: 0,
                namefontSize: 20,
                namefontSizeType: "px",
                namefontSizeMobile: 20,
                namefontSizeTablet: 20,
                nameshadowColor: '',
                nameshadowBlur: 0,
                nameshadowHorizontal: 0,
                nameshadowVertical: 0,
            }
        ]
    },
    titleStyles: {
        type: "array",
        default: [
            {
                titleColor: "",
                titleLetter: 0,
                titleStyle: '',
                titleUpper: false,
                titleWeight: 500,
                titleLine: 0,
                titleSize: 20,
                titlefontSizeType: "px",
                titlefontSizeMobile: 20,
                titlefontSizeTablet: 20,
                titleshadowColor: '',
                titleshadowBlur: 0,
                titleshadowHorizontal: 0,
                titleshadowVertical: 0,
            }
        ]
    },
    descStyles: {
        type: "array",
        default: [
            {
                descColor: "",
                descLetter: 0,
                descStyle: '',
                descUpper: false,
                descWeight: '',
                descLine: 0,
                descSize: 20,
                descfontSizeType: "px",
                descfontSizeMobile: 20,
                descfontSizeTablet: 20,
                descshadowColor: '',
                descshadowBlur: 0,
                descshadowHorizontal: 0,
                descshadowVertical: 0,
            }
        ]
    },
    socialIconStyles: {
        type: "array",
        default: [
            {
                socialIconColor: "",
                socialIconHoverColor: '',
                socialIconBackgroundColor: '',
                defaultIconColor: false,
                socialIconSize: 20,
                socialIconfontSizeType: "px",
                socialIconfontSizeMobile: 20,
                socialIconfontSizeTablet: 20,
                borderTypeIcon: 'none',
                borderWidthIcon: '1',
                borderRadiusIcon: '0',
                borderColorIcon: '',
                socialIconPaddingType: 'px',
                socialIconMarginType: 'px',
            }
        ]
    },
    socialIconBorderWidth: {
        type: "number",
        default: "1"
    },
    socialIconBorderTop: {
        type: "number"
    },
    socialIconBorderRight: {
        type: "number"
    },
    socialIconBorderBottom: {
        type: "number"
    },
    socialIconBorderLeft: {
        type: "number"
    },
    socialIconBorderUpdated: {
        type: "boolean",
        default: false
    },
    socialIconMarginT: {
        type: "number"
    },
    socialIconMarginR: {
        type: "number"
    },
    socialIconMarginB: {
        type: "number"
    },
    socialIconMarginL: {
        type: "number"
    },
    socialIconMarginTTablet: {
        type: "number"
    },
    socialIconMarginRTablet: {
        type: "number"
    },
    socialIconMarginBTablet: {
        type: "number"
    },
    socialIconMarginLTablet: {
        type: "number"
    },
    socialIconMarginTMobile: {
        type: "number"
    },
    socialIconMarginRMobile: {
        type: "number"
    },
    socialIconMarginBMobile: {
        type: "number"
    },
    socialIconMarginLMobile: {
        type: "number"
    },
    socialIconPaddingTop: {
        type: "number"
    },
    socialIconPaddingRight: {
        type: "number"
    },
    socialIconPaddingBottom: {
        type: "number"
    },
    socialIconPaddingLeft: {
        type: "number"
    },
    socialIconPaddingTTablet: {
        type: "number"
    },
    socialIconPaddingRTablet: {
        type: "number"
    },
    socialIconPaddingBTablet: {
        type: "number"
    },
    socialIconPaddingLTablet: {
        type: "number"
    },
    socialIconPaddingTMobile: {
        type: "number"
    },
    socialIconPaddingRMobile: {
        type: "number"
    },
    socialIconPaddingBMobile: {
        type: "number"
    },
    socialIconPaddingLMobile: {
        type: "number"
    },
    titleTag: {
        type: "string",
        default: "p"
    },
    contentColor: {
        type: "string",
    },
    bottomInfo: {
        type: "number",
        default: 15
    },
    effect: {
        type: "string",
        default: "none"
    },
    effectDir: {
        type: "string",
        default: "top"
    },
    descColor: {
        type: "string",
        default: "#000"
    },
    multiPersonChecked: {
        type: "number",
        default: 1
    },
    borderHoverColor: {
        type: "string"
    },
    personShadowPosition: {
        type: "string",
        default: ""
    },
    id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    hoverEffectPerson: {
        type: "string",
        default: "none"
    },
    selectedSocialMediaIcon: {
        type: "string",
    },
    effectPersonStyle: {
        type: "string",
        default: "effect1"
    },
    rowPerson: {
        type: "string",
        default: "column1"
    },
    multiPersonContent: {
        type: "array",
        default: [
            {
                id: 1,
                personImgUrl: "",
                personImgId: '',
                name: "John Doe",
                title: "Senior Developer",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla",
                socialIcon: false,
                items: [
                    { label: 'facebook', link: false, value: "#", changeinput: "#" },
                    { label: 'twitter', link: false, value: "#", changeinput: "#" },
                    { label: 'instagram', link: false, value: "#", changeinput: "#" },
                    { label: 'youtube', link: false, value: "#", changeinput: "#" }
                ]
            }
        ]
    },
    change: {
        type: "boolean",
        default: false
    },
    blur: {
        type: "number",
        default: "0"
    },
    bright: {
        type: "number",
        default: "100"
    },
    contrast: {
        type: "number",
        default: "100"
    },
    saturation: {
        type: "number",
        default: "100"
    },
    hue: {
        type: "number",
        default: "0"
    }
}
const newAttributes = {
    socialIconMargin: {
        type: "object",
        default: {
            Desktop: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            Tablet: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            Mobile: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            unit: "px"
        }
    },
    socialIconPadding: {
        type: "object",
        default: {
            Desktop: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            Tablet: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            Mobile: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            unit: "px"
        }
    }
}

const deprecated = [
    {
        attributes: Object.assign(attributes, newAttributes),
        isEligible() {
            return true;
        },
        migrate: (attributes) => {
            let newAttributes = {
                socialIconSize: {
                    unit: attributes.socialIconStyles[0].socialIconfontSizeType,
                    "Desktop": attributes.socialIconStyles[0].socialIconSize
                },
                socialIconMargin: {
                    "Desktop": {
                        top: attributes.socialIconMarginT,
                        right: attributes.socialIconMarginR,
                        bottom: attributes.socialIconMarginB,
                        left: attributes.socialIconMarginL
                    },
                    "Tablet": {
                        top: attributes.socialIconMarginTTablet,
                        right: attributes.socialIconMarginRTablet,
                        bottom: attributes.socialIconMarginBTablet,
                        left: attributes.socialIconMarginLTablet
                    },
                    "Mobile": {
                        top: attributes.socialIconMarginTMobile,
                        right: attributes.socialIconMarginRMobile,
                        bottom: attributes.socialIconMarginBMobile,
                        left: attributes.socialIconMarginLMobile
                    },
                },
                socialIconPadding: {
                    "Desktop": {
                        top: attributes.socialIconPaddingTop,
                        right: attributes.socialIconPaddingRight,
                        bottom: attributes.socialIconPaddingBottom,
                        left: attributes.socialIconPaddingLeft
                    },
                    "Tablet": {
                        top: attributes.socialIconPaddingTTablet,
                        right: attributes.socialIconPaddingRTablet,
                        bottom: attributes.socialIconPaddingBTablet,
                        left: attributes.socialIconPaddingLTablet
                    },
                    "Mobile": {
                        top: attributes.socialIconPaddingTMobile,
                        right: attributes.socialIconPaddingRMobile,
                        bottom: attributes.socialIconPaddingBMobile,
                        left: attributes.socialIconPaddingLMobile
                    },
                },
                socialIconBorder: {
                    borderColor: attributes.socialIconStyles[0].borderColorIcon,
                    borderType: attributes.socialIconStyles[0].borderTypeIcon,
                    borderRadius: {
                        "Desktop": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Tablet": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Mobile": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                    },
                    borderWidth: {
                        "Desktop": {
                            top: attributes.socialIconBorderTop,
                            right: attributes.socialIconBorderRight,
                            bottom: attributes.socialIconBorderBottom,
                            left: attributes.socialIconBorderLeft
                        },
                        "Tablet": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Mobile": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                    }
                }
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const { attributes, className } = props

            const {
                id,
                personAlign,
                imgBorder,
                imgBorderColor,
                imgSize,
                nameV,
                titleStyles,
                socialIconStyles,
                nameStyles,
                descStyles,
                titleV,
                descV,
                socialIconHoverColor,
                effect,
                effectDir,
                multiPersonChecked,
                borderHoverColor,
                hoverEffectPerson,
                effectPersonStyle,
                multiPersonContent,
                rowPerson,
                change,
                blur,
                bright,
                contrast,
                saturation,
                hue,
                contentColor,
                bottomInfo,
                socialIconBorder
            } = attributes;

            const mainClasses = classnames(className, 'premium-person');

            const socialIconfn = (v) => {
                return <ul className="premium-person__social-List">{(v).map((value) => (
                    <li>
                        <a className={`premium-person__socialIcon__link_content ${socialIconStyles[0].defaultIconColor ? value.label : ""}`} href={`${value.value}`} style={{
                            // borderStyle: socialIconBorder.borderType,
                            // borderColor: socialIconBorder.borderColor,
                            background: socialIconStyles[0].socialIconBackgroundColor,
                        }}>
                            <i className={`premium-person__socialIcon ${value.label == "youtube" ? "fa fa-youtube-play" : `fa fa-${value.label}`} premium-person__${socialIconHoverColor}`}
                                style={{
                                    color: socialIconStyles[0].socialIconColor
                                }}
                            />
                        </a>
                    </li>
                ))}
                </ul>
            }
            const content = () => {
                return <div className={`premium-person-content ${id} ${multiPersonChecked > 1 ? `premium-person__${rowPerson}` : ""}`}
                > {multiPersonContent.map((value) => (
                    <div key={value.id} className={`premium-person__inner premium-persson__min premium-person__${effectPersonStyle} premium-person__${hoverEffectPerson}`}>
                        <div className={`premium-person__img__container`}>
                            <div
                                className={`premium-person__img_wrap`}
                            >
                                {value.personImgUrl && (
                                    <img
                                        className={`premium-person__img`}
                                        src={`${value.personImgUrl}`}
                                        alt="Person"
                                        style={{
                                            borderWidth: imgBorder + "px",
                                            borderColor: imgBorderColor,
                                            width: imgSize + "px",
                                            height: imgSize + "px",
                                            filter: `${change ? `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )` : ""}`
                                        }}
                                    />
                                )}
                                {!value.personImgUrl && <DefaultImage className={className} />}
                            </div>
                            {effectPersonStyle === 'effect2' ? <div className={`premium-person__socialEffect2`}>{value.socialIcon && (
                                socialIconfn(value.items)
                            )}</div> : ""}
                        </div>
                        <div
                            className={`premium-person__info`}
                            style={{
                                background: contentColor ? contentColor : "#f2f2f2",
                                bottom: effectPersonStyle === 'effect1' ? bottomInfo + "px" : ""
                            }}
                        >
                            <div className={`premium-person__name_wrap`}>
                                {value.name && (
                                    <span
                                        className={`premium-person__name`}
                                        style={{
                                            color: nameStyles[0].nameColor,
                                            fontWeight: nameStyles[0].nameWeight,
                                            alignSelf: nameV,
                                            letterSpacing: nameStyles[0].nameLetter + "px",
                                            lineHeight: nameStyles[0].nameLine + "px",
                                            fontStyle: nameStyles[0].nameStyle,
                                            textTransform: nameStyles[0].nameUpper ? "uppercase" : "none",
                                            textShadow: `${nameStyles[0].nameshadowHorizontal}px ${nameStyles[0].nameshadowVertical}px ${nameStyles[0].nameshadowBlur}px ${nameStyles[0].nameshadowColor}`
                                        }}
                                    >
                                        {value.name}
                                    </span>
                                )}
                            </div>
                            <div className={`premium-person__title_wrap`}>
                                {value.title && (
                                    <span
                                        className={`premium-person__title`}
                                        style={{
                                            color: titleStyles[0].titleColor,
                                            fontWeight: titleStyles[0].titleWeight,
                                            alignSelf: titleV,
                                            letterSpacing: titleStyles[0].titleLetter + "px",
                                            lineHeight: titleStyles[0].titleLine + "px",
                                            fontStyle: titleStyles[0].titleStyle,
                                            textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                            textShadow: `${titleStyles[0].titleshadowHorizontal}px ${titleStyles[0].titleshadowVertical}px ${titleStyles[0].titleshadowBlur}px ${titleStyles[0].titleshadowColor}`,
                                        }}
                                    >
                                        {value.title}
                                    </span>
                                )}
                            </div>
                            <div className={`premium-person__desc_wrap`}>
                                {value.desc && (
                                    <span
                                        className={`premium-person__desc`}
                                        style={{
                                            color: descStyles[0].descColor,
                                            fontWeight: descStyles[0].descWeight,
                                            alignSelf: descV,
                                            letterSpacing: descStyles[0].descLetter + "px",
                                            lineHeight: descStyles[0].descLine + "px",
                                            fontStyle: descStyles[0].descStyle,
                                            textTransform: descStyles[0].descUpper ? "uppercase" : "none",
                                            textShadow: `${descStyles[0].descshadowHorizontal}px ${descStyles[0].descshadowVertical}px ${descStyles[0].descshadowBlur}px ${descStyles[0].descshadowColor}`,
                                        }}
                                    >
                                        {value.desc}
                                    </span>
                                )}
                            </div>
                            {effectPersonStyle == 'effect1' ? <div>{value.socialIcon && (
                                socialIconfn(value.items)
                            )}</div> : ""}
                        </div>
                    </div>
                ))}
                </div>
            }

            return (
                <div
                    id={`premium-person-${id}`}
                    className={`${mainClasses} premium-person__${effect} premium-person__${effectDir}`}
                    style={{ textAlign: personAlign }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-person-${id} .premium-person:hover {`,
                                `border-color: ${borderHoverColor} !important;`,
                                "}",
                                `#premium-person-${id} .premium-person__social-List li:hover i{`,
                                `color: ${socialIconStyles[0].socialIconHoverColor} !important;`,
                                `-webkit-transition: all .2s ease-in-out;`,
                                `transition: all .2s ease-in-out;`,
                                "}"
                            ].join("\n")
                        }}
                    />
                    {content()}
                </div>
            );
        }
    }
];
export default deprecated;