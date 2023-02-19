const { __ } = wp.i18n;
import classnames from "classnames"
import { filterJsCss, generateCss } from '@pbg/helpers';
const { useBlockProps } = wp.blockEditor;

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

const newAttributes_v2 = {
    "blockId": {
        "type": "string"
    },
    "iconAlign": {
        "type": "object",
        "default": {
            "Desktop": "center",
            "Tablet": "center",
            "Mobile": "center"
        }
    },
    "iconType": {
        "type": "string",
        "default": "image"
    },
    "imageID": {
        "type": "number"
    },
    "imageURL": {
        "type": "string",
        "source": "attribute",
        "attribute": "src",
        "selector": ".premium-image-separator-container img"
    },
    "link": {
        "type": "boolean"
    },
    "url": {
        "type": "string"
    },
    "gutter": {
        "type": "number",
        "default": -50
    },
    "imgFilter": {
        "type": "object",
        "default": {
            "contrast": "100",
            "blur": "0",
            "bright": "100",
            "saturation": "100",
            "hue": "0"
        }
    },
    "imgFilterHover": {
        "type": "object",
        "default": {
            "contrast": "100",
            "blur": "0",
            "bright": "100",
            "saturation": "100",
            "hue": "0"
        }
    },
    "linkTarget": {
        "type": "boolean",
        "default": false
    },
    "imgFit": {
        "type": "string",
        "value": "fill"
    },
    "imgMask": {
        "type": "boolean",
        "default": false
    },
    "imgMaskURL": {
        "type": "string"
    },
    "imgMaskID": {
        "type": "number"
    },
    "maskSize": {
        "type": "string",
        "default": "contain"
    },
    "maskPosition": {
        "type": "string",
        "default": "center center"
    },
    "iconStyles": {
        "type": "array",
        "default": [
            {
                "advancedBorder": false,
                "icon": "dashicons admin-site",
                "iconColor": "",
                "iconBGColor": "",
                "iconColorHover": "",
                "iconBGColorHover": "",
                "advancedBorderValue": "",
                "imgHeightType": "px"
            }
        ]
    },
    "icons": {
        "type": "array",
        "default": [
            {
                "iconn": "dashicons admin-site",
                "link": "",
                "target": "_self",
                "size": "200",
                "width": "2",
                "title": "",
                "style": "default"
            }
        ]
    },
    "iconSize": {
        "type": "object",
        "default": {
            "Desktop": "200",
            "Tablet": "200",
            "Mobile": "200",
            "unit": "px"
        }
    },
    "imgHeight": {
        "type": "object",
        "default": {
            "Desktop": "200",
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
    "iconPadding": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": ".1",
                "right": ".1",
                "bottom": ".1",
                "left": ".1"
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
            "unit": "em"
        }
    },
    iconShadow: {
        type: "object",
        default: {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0"
        }
    }
}

const deprecated = [
    {
        attributes: newAttributes_v2,
        isEligible() {
            return true;
        },
        migrate: (attributes) => {
            let newAttributes = {
                "icons": [
                    {
                        "iconn": "dashicons admin-site",
                        "link": "",
                        "target": "_self",
                        "size": attributes.iconSize['Desktop'] ? attributes.iconSize['Desktop'] : "200",
                        "width": "2",
                        "title": "",
                        "style": "default"
                    }
                ],
                "iconStyles": [
                    {
                        "advancedBorder": attributes.iconStyles[0].advancedBorder ? attributes.iconStyles[0].advancedBorder : false,
                        "icon": "dashicons admin-site",
                        "iconColor": attributes.iconStyles[0].iconColor ? attributes.iconStyles[0].iconColor : "",
                        "iconBGColor": attributes.iconStyles[0].iconBGColor ? attributes.iconStyles[0].iconBGColor : "",
                        "iconColorHover": attributes.iconStyles[0].iconColorHover ? attributes.iconStyles[0].iconColorHover : "",
                        "iconBGColorHover": attributes.iconStyles[0].iconBGColorHover ? attributes.iconStyles[0].iconBGColorHover : "",
                        "advancedBorderValue": attributes.iconStyles[0].advancedBorderValue ? attributes.iconStyles[0].advancedBorderValue : "",
                        "imgHeightType": attributes.iconStyles[0].imgHeightType ? attributes.iconStyles[0].imgHeightType : "px"
                    }
                ]
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const { attributes, className } = props

            const {
                blockId,
                iconType,
                imageURL,
                link,
                url,
                gutter,
                imgFilter,
                imgFilterHover,
                linkTarget,
                iconStyles,
                imgFit,
                imgMaskURL,
                maskSize,
                maskPosition,
                iconBorder,
                iconShadow,
                hideDesktop,
                hideTablet,
                hideMobile
            } = attributes;

            let target = (linkTarget) ? "_blank" : "_self";

            const loadStyles = () => {
                const styles = {};
                styles[`.${blockId} .premium-image-separator-container:hover img`] = {
                    'filter': `brightness(${imgFilterHover?.bright}% ) contrast(${imgFilterHover?.contrast}% ) saturate(${imgFilterHover?.saturation}%) blur(${imgFilterHover?.blur}px) hue - rotate(${imgFilterHover?.hue}deg)!important`
                };
                styles[` .${blockId} .premium-image-separator-container i:hover`] = {
                    'color': `${iconStyles[0].iconColorHover} !important`,
                    'background-color': `${iconStyles[0].iconBGColorHover} !important`
                };
                return generateCss(styles);
            }

            return (
                <div
                    {...useBlockProps.save({
                        className: classnames(
                            className,
                            `premium-image-separator ${blockId}`,
                            {
                                " premium-desktop-hidden": hideDesktop,
                                " premium-tablet-hidden": hideTablet,
                                " premium-mobile-hidden": hideMobile,
                            }
                        ),
                    })}
                >
                    <style dangerouslySetInnerHTML={{ __html: loadStyles() }} />
                    <div
                        className={`premium-image-separator-container`}
                        style={filterJsCss({
                            transform: `translateY(${gutter}%)`,
                            filter: iconType === 'image' ? `brightness( ${imgFilter?.bright}% ) contrast( ${imgFilter?.contrast}% ) saturate( ${imgFilter?.saturation}% ) blur( ${imgFilter?.blur}px ) hue-rotate( ${imgFilter?.hue}deg )` : ""
                        })}
                    >
                        <a className="premium-image-separator-link" href={link && url} target={target} rel="noopener noreferrer">
                            {iconType === 'icon' &&
                                <i
                                    className={`${iconStyles[0].icon}`}
                                    style={filterJsCss({
                                        color: iconStyles[0].iconColor,
                                        backgroundColor: iconStyles[0].iconBGColor,
                                        borderColor: iconBorder.borderColor,
                                        borderStyle: iconBorder.borderType,
                                        textShadow: `${iconShadow.horizontal || 0}px ${iconShadow.vertical || 0}px ${iconShadow.blur || 0}px ${iconShadow.color}`,
                                    })} />
                            }
                            {iconType === 'image' && imageURL && < img
                                src={imageURL}
                                style={filterJsCss({
                                    borderColor: iconStyles[0].advancedBorder ? "" : iconBorder.borderColor,
                                    borderStyle: iconStyles[0].advancedBorder ? "" : iconBorder.borderType,
                                    maskSize: `${maskSize}`,
                                    maskPosition: `${maskPosition}`,
                                    maskImage: imgMaskURL ? `url("${imgMaskURL}")` : '',
                                    WebkitMaskImage: imgMaskURL ? `url("${imgMaskURL}")` : '',
                                    WebkitMaskSize: `${maskSize}`,
                                    WebkitMaskPosition: `${maskPosition}`,
                                    objectFit: `${imgFit}`,
                                })} />
                            }
                        </a>
                    </div>
                </div>
            );
        }
    },
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