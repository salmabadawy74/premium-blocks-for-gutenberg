const { __ } = wp.i18n;
import classnames from "classnames"

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
    iconType: {
        type: "string",
        default: "image"
    },

    imageID: {
        type: "number"
    },
    imageURL: {
        type: "string",
        source: "attribute",
        attribute: "src",
        selector: ".premium-image-separator-container img"
    },
    link: {
        type: "boolean",
        default: false
    },
    url: {
        type: "string",
        default: "#"
    },
    gutter: {
        type: "number",
        default: -50
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
    },
    blurHover: {
        type: "number",
        default: "0"
    },
    brightHover: {
        type: "number",
        default: "100"
    },
    contrastHover: {
        type: "number",
        default: "100"
    },
    saturationHover: {
        type: "number",
        default: "100"
    },
    hueHover: {
        type: "number",
        default: "0"
    },

    linkTarget: {
        type: "boolean",
        default: false
    },
    imgHeight: {
        type: "number",
        default: "200"
    },
    imgHeightTablet: {
        type: "number",
        default: "200"
    },
    imgHeightMobile: {
        type: "number",
        default: "200"
    },
    imgFit: {
        type: "string",
        value: 'fill'
    },
    imgMask: {
        type: 'boolean',
        default: false
    },
    imgMaskURL: {
        type: "string",

    },
    imgMaskID: {
        type: "number"
    },
    maskSize: {
        type: "string",
        default: "contain"
    },
    maskPosition: {
        type: "string",
        default: "center center"
    },
    iconStyles: {
        type: "array",
        default: [
            {
                iconSize: "200",
                iconSizeType: "px",
                iconSizeMobile: "200",
                iconSizeTablet: "200",
                icon: "fa fa-bars",
                iconBorderRadius: "0",
                iconBorderRadiusType: "px",
                iconBorderRadiusMobile: "0",
                iconBorderRadiusTablet: "0",
                iconColor: "#6ec1e4",
                iconBGColor: "#54595f",
                iconColorHover: '',
                iconBGColorHover: '',
                iconShadowColor: '',
                iconShadowBlur: "0",
                iconShadowHorizontal: "0",
                iconShadowVertical: "0",
                iconPadding: ".1",
                iconPaddingTablet: ".1",
                iconPaddingType: "em",
                iconPaddingMobile: ".1",
                advancedBorder: false,
                advancedBorderValue: '',
                imgHeightType: "px",
            }
        ]
    }
}
let newAttributes = {
    iconAlign: {
        type: "object",
        default: {
            Desktop: "center",
            Tablet: "center",
            Mobile: "center"
        }
    },
    imgFilter: {
        type: "object",
        default: {
            'contrast': '100',
            'blur': '0',
            'bright': '100',
            'saturation': '100',
            'hue': '0'
        }
    },
    imgFilterHover: {
        type: "object",
        default: {
            'contrast': '100',
            'blur': '0',
            'bright': '100',
            'saturation': '100',
            'hue': '0'
        }
    },
    iconBorder: {
        type: "object",
        default: {
            "borderType": "none",
            "borderColor": "",
            "borderWidth": {
                Desktop: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
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
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
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
        }
    },
    iconPadding: {
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
    iconShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': ''
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
                blockId: attributes.block_id ? `premium-image-separator-${attributes.block_id.split('-')[6]}` : '',
                iconAlign: {
                    "Desktop": attributes.align || 'center',
                    "Tablet": attributes.align || 'center',
                    "Mobile": attributes.align || 'center',
                },
                iconSize: {
                    unit: attributes.iconStyles[0].iconSizeType || 'px',
                    "Desktop": attributes.iconStyles[0].iconSize || '200',
                    "Tablet": attributes.iconStyles[0].iconSizeTablet || '200',
                    "Mobile": attributes.iconStyles[0].iconSizeMobile || '200'
                },
                imgHeight: {
                    unit: 'px',
                    "Desktop": attributes.imgHeight || '200',
                    "Tablet": attributes.imgHeightTablet || '200',
                    "Mobile": attributes.imgHeightMobile || '200'
                },
                iconBorder: {
                    borderColor: '',
                    borderType: '',
                    borderRadius: {
                        "Desktop": {
                            top: attributes.iconStyles[0].iconBorderRadius,
                            right: attributes.iconStyles[0].iconBorderRadius,
                            bottom: attributes.iconStyles[0].iconBorderRadius,
                            left: attributes.iconStyles[0].iconBorderRadius
                        },
                        "Tablet": {
                            top: attributes.iconStyles[0].iconBorderRadiusTablet,
                            right: attributes.iconStyles[0].iconBorderRadiusTablet,
                            bottom: attributes.iconStyles[0].iconBorderRadiusTablet,
                            left: attributes.iconStyles[0].iconBorderRadiusTablet
                        },
                        "Mobile": {
                            top: attributes.iconStyles[0].iconBorderRadiusMobile,
                            right: attributes.iconStyles[0].iconBorderRadiusMobile,
                            bottom: attributes.iconStyles[0].iconBorderRadiusMobile,
                            left: attributes.iconStyles[0].iconBorderRadiusMobile
                        },
                    },
                    borderWidth: {
                        "Desktop": {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
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
                },
                iconPadding: {
                    "Desktop": {
                        top: attributes.iconStyles[0].iconPadding,
                        right: attributes.iconStyles[0].iconPadding,
                        bottom: attributes.iconStyles[0].iconPadding,
                        left: attributes.iconStyles[0].iconPadding,
                    },
                    "Tablet": {
                        top: attributes.iconStyles[0].iconPaddingTablet,
                        right: attributes.iconStyles[0].iconPaddingTablet,
                        bottom: attributes.iconStyles[0].iconPaddingTablet,
                        left: attributes.iconStyles[0].iconPaddingTablet,
                    },
                    "Mobile": {
                        top: attributes.iconStyles[0].iconPaddingMobile,
                        right: attributes.iconStyles[0].iconPaddingMobile,
                        bottom: attributes.iconStyles[0].iconPaddingMobile,
                        left: attributes.iconStyles[0].iconPaddingMobile,
                    },
                    unit: attributes.iconStyles[0].iconPaddingType,
                },
                iconShadow: {
                    'color': attributes.iconStyles[0].iconShadowColor,
                    'blur': attributes.iconStyles[0].iconShadowBlur,
                    'horizontal': attributes.iconStyles[0].iconShadowHorizontal,
                    'vertical': attributes.iconStyles[0].iconShadowVertical
                },
                imgFilter: {
                    'contrast': attributes.contrast,
                    'blur': attributes.blur,
                    'bright': attributes.bright,
                    'saturation': attributes.saturation,
                    'hue': attributes.hue
                },
                imgFilterHover: {
                    'contrast': attributes.contrastHover,
                    'blur': attributes.blurHover,
                    'bright': attributes.brightHover,
                    'saturation': attributes.saturationHover,
                    'hue': attributes.hueHover
                }
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const { attributes, className } = props

            const {
                block_id,
                align,
                iconType,
                icon,
                imageURL,
                link,
                url,
                gutter,
                blur,
                bright,
                contrast,
                saturation,
                hue,
                linkTarget,
                iconStyles,
                imgFit,
                imgMaskURL,
                maskSize,
                maskPosition,
            } = attributes;

            let target = (linkTarget) ? "_blank" : "_self"

            return (
                <div
                    className={
                        classnames(className,
                            `premium-block-${block_id}`
                        )}
                    style={{ textAlign: align }} >
                    <div className={`premium-image-separator-container`} style={{
                        textAlign: align,
                        transform: `translateY(${gutter}%)`,
                        filter: iconType === 'image' ? `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )` : ""
                    }}
                    >
                        {
                            iconType === 'icon' && <i className={`${iconStyles[0].icon}`} style={{
                                color: iconStyles[0].iconColor,
                                backgroundColor: iconStyles[0].iconBGColor,
                                textShadow: `${iconStyles[0].iconShadowHorizontal}px ${iconStyles[0].iconShadowVertical}px ${iconStyles[0].iconShadowBlur}px ${iconStyles[0].iconShadowColor}`,
                            }} />
                        }
                        {
                            iconType === 'image' && < img
                                src={imageURL}
                                style={{
                                    maskSize: `${maskSize}`,
                                    maskPosition: `${maskPosition}`,
                                    maskImage: imgMaskURL ? `url("${imgMaskURL}")` : '',
                                    WebkitMaskImage: imgMaskURL ? `url("${imgMaskURL}")` : '',
                                    WebkitMaskSize: `${maskSize}`,
                                    WebkitMaskPosition: `${maskPosition}`,
                                    objectFit: `${imgFit}`,
                                }} />
                        }
                        {link && <a className="premium-image-separator-link" href={`${url}`} target={target} rel="noopener noreferrer"></a>}
                    </div>
                </div>
            );
        }
    }
];
export default deprecated;