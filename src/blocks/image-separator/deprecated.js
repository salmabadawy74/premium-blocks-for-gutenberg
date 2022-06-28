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

const deprecated = [
    {
        attributes: attributes,
        isEligible() {
            return true;
        },
        migrate: (attributes) => {
            let newAttributes = {
                hideDesktop: '',
                hideTablet: '',
                hideMobile: '',
                blockId: attributes.block_id ? `premium-image-separator-${attributes.block_id.split('-')[6]}` : '',
                align: {
                    "Desktop": attributes.align,
                    "Tablet": attributes.align,
                    "Mobile": attributes.align,
                },
                iconSize: {
                    unit: attributes.iconStyles[0].iconSizeType,
                    "Desktop": attributes.iconStyles[0].iconSize,
                    "Tablet": attributes.iconStyles[0].iconSizeTablet,
                    "Mobile": attributes.iconStyles[0].iconSizeMobile
                },
                imgHeight: {
                    unit: 'px',
                    "Desktop": attributes.imgHeight,
                    "Tablet": attributes.imgHeightTablet,
                    "Mobile": attributes.imgHeightMobile
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
                            iconType === 'icon' && <i className={`${icon}`} style={{
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