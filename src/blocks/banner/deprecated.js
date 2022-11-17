import { generateBlockId, filterJsCss, generateCss } from '../../components/HelperFunction';
const { useBlockProps } = wp.blockEditor;
const { __ } = wp.i18n;


import classnames from 'classnames'

const className = "premium-banner";

const { RichText } = wp.editor;

const attributes = {
    block_id: {
        type: "string"
    },
    borderBanner: {
        type: "boolean",
        default: false,
    },
    imageID: {
        type: "number"
    },
    imageURL: {
        type: "string",
        source: "attribute",
        attribute: "src",
        selector: ".premium-banner__img"
    },
    title: {
        type: "array",
        source: "children",
        selector: ".premium-banner__title",
        default: __("Awesome Title")
    },
    titleTag: {
        type: "string",
        default: "H3"
    },
    desc: {
        type: "array",
        source: "children",
        selector: ".premium-banner__desc",
        default: __("Cool Description!!")
    },
    contentAlign: {
        type: "string",
        default: "left"
    },
    effect: {
        type: "string",
        default: "effect1"
    },
    hoverEffect: {
        type: "string",
        default: "none"
    },
    height: {
        type: "string",
        default: "default"
    },
    minHeight: {
        type: "number"
    },
    verAlign: {
        type: "string",
        default: "top"
    },
    hovered: {
        type: "boolean",
        default: false
    },
    responsive: {
        type: "boolean",
        default: false
    },
    background: {
        type: "string"
    },
    opacity: {
        type: "number",
        default: 50
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
        default: "0"
    },
    borderColor: {
        type: "string"
    },
    titleColor: {
        type: "string"
    },
    titleSize: {
        type: "number",
        default: "20"
    },
    titleSizeUnit: {
        type: "string",
        default: 'px'
    },
    titleLine: {
        type: "number"
    },
    titleWeight: {
        type: "number"
    },
    titleBack: {
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
    descColor: {
        type: "string",
        default: "#000"
    },
    descSize: {
        type: "number",
        default: "20"
    },
    descSizeUnit: {
        type: "string",
        default: 'px'
    },
    descSizeTablet: {
        type: "number"
    },
    descSizeMobile: {
        type: "number"
    },
    descLine: {
        type: "number"
    },
    descWeight: {
        type: "number"
    },
    descShadowColor: {
        type: "string"
    },
    descShadowBlur: {
        type: "number",
        default: "0"
    },
    descShadowHorizontal: {
        type: "number",
        default: "0"
    },
    descShadowVertical: {
        type: "number",
        default: "0"
    },
    urlCheck: {
        type: "boolean",
        default: false
    },
    target: {
        type: "boolean",
        default: false
    },
    url: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-banner__link"
    },
    sepColor: {
        type: "string"
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
    containerShadowColor: {
        type: "string"
    },
    containerShadowBlur: {
        type: "number",
        default: "0"
    },
    containerShadowHorizontal: {
        type: "number",
        default: "0"
    },
    containerShadowVertical: {
        type: "number",
        default: "0"
    },
    containerShadowPosition: {
        type: "string",
        default: ""
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
    },
    titleSizeMobile: {
        type: "number"
    },
    titleSizeTablet: {
        type: "number"
    },
    classMigrate: {
        type: "boolean",
        default: false
    }
}

const v8Attributes = {
    block_id: {
        type: "string"
    },
    borderBanner: {
        type: "boolean",
        default: false,
    },
    imageID: {
        type: "number"
    },
    imageURL: {
        type: "string",
        source: "attribute",
        attribute: "src",
        selector: ".premium-banner__img",
    },
    titleStyles: {
        type: "array",
        default: [
            {
                titleSizeUnit: 'px',
                titleSize: '20',
                titleSizeMobile: '',
                titleSizeTablet: '',
                titleWeight: '',
                titleLine: '',
                titleColor: '',
                titleBack: '',
                shadowColor: '',
                shadowBlur: '',
                shadowHorizontal: '',
                shadowVertical: ''
            }
        ]
    },
    descStyles: {
        type: "array",
        default: [
            {
                descSizeUnit: 'px',
                descSize: '20',
                descSizeTablet: '',
                descSizeMobile: '',
                descWeight: '',
                descLine: '',
                descColor: '#000',
                descShadowColor: '',
                descShadowBlur: '',
                descShadowHorizontal: '',
                descShadowVertical: '',
            }
        ]
    },
    containerStyles: {
        type: "array",
        default: [
            {
                borderType: "none",
                borderWidth: '',
                borderRadius: '',
                borderColor: '',
                containerShadowColor: '',
                containerShadowBlur: '',
                containerShadowHorizontal: '',
                containerShadowVertical: '',
                containerShadowPosition: '',
                paddingU: 'px'
            }
        ]
    },
    title: {
        type: "array",
        source: "children",
        selector: ".premium-banner__title",
        default: __("Awesome Title")
    },
    titleTag: {
        type: "string",
        default: "H3"
    },
    desc: {
        type: "array",
        source: "children",
        selector: ".premium-banner__desc",
        default: __("Cool Description!!", 'premium-blocks-for-gutenberg')
    },
    contentAlign: {
        type: "string",
        default: "left"
    },
    effect: {
        type: "string",
        default: "effect1"
    },
    hoverEffect: {
        type: "string",
        default: "none"
    },
    height: {
        type: "string",
        default: "default"
    },
    minHeight: {
        type: "number"
    },
    verAlign: {
        type: "string",
        default: "top"
    },
    hovered: {
        type: "boolean",
        default: false
    },
    responsive: {
        type: "boolean",
        default: false
    },
    background: {
        type: "string"
    },
    opacity: {
        type: "number",
        default: 50
    },
    urlCheck: {
        type: "boolean",
        default: false
    },
    target: {
        type: "boolean",
        default: false
    },
    url: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-banner__link"
    },
    sepColor: {
        type: "string"
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
    classMigrate: {
        type: "boolean",
        default: false
    },
    borderWidth: {
        type: "number",
        default: "1"
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
    paddingTTablet: {
        type: "number"
    },
    paddingRTablet: {
        type: "number"
    },
    paddingBTablet: {
        type: "number"
    },
    paddingLTablet: {
        type: "number"
    },
    paddingTMobile: {
        type: "number"
    },
    paddingRMobile: {
        type: "number"
    },
    paddingBMobile: {
        type: "number"
    },
    paddingLMobile: {
        type: "number"
    }
}

const v9Attributes = {
    padding: {
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
    border: {
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
    titleTypography: {
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
    descTypography: {
        "type": "object",
        "default": {
            "fontWeight": "Default",
            "fontStyle": "",
            "textTransform": "",
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
            "fontSize": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            }
        }
    }
}

const deprecatedContent = [
    {
        attributes: v9Attributes,
        migrate: attributes => {
            let newAttributes = {
                hoverBackground: ''
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const { className } = props;
            const {
                imageURL,
                titleStyles,
                descStyles,
                title,
                titleTag,
                desc,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                urlCheck,
                target,
                url,
                sepColor,
                filter,
                hideDesktop,
                hideTablet,
                hideMobile,
                border,
                titleTypography,
                descTypography,
                titleTextShadow,
                descTextShadow,
                containerShadow,
                blockId
            } = props.attributes;

            const loadStyles = () => {
                const styles = {};

                styles[
                    `.${blockId} .premium-banner__effect3 .premium-banner__title_wrap::after`
                ] = {
                    background: sepColor,
                };

                return generateCss(styles);
            };

            return (
                imageURL && (
                    <div
                        {...useBlockProps.save({
                            className: classnames(
                                className,
                                `premium-banner ${blockId} premium-banner__responsive_${responsive}`,
                                {
                                    " premium-desktop-hidden": hideDesktop,
                                    " premium-tablet-hidden": hideTablet,
                                    " premium-mobile-hidden": hideMobile,
                                }
                            ),
                        })}
                    >
                        <style>{loadStyles()}</style>
                        <div
                            className={`premium-banner__inner premium-banner__min premium-banner__${effect} premium-banner__${hoverEffect} hover_${hovered}`}
                            style={filterJsCss({
                                boxShadow: `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position}`,
                                borderStyle: border && border.borderType,
                                borderColor: border && border.borderColor,
                                minHeight: height == "custom" ? minHeight : "",
                            })}
                        >
                            <div
                                className="premium-banner__bg-overlay"
                                style={filterJsCss({
                                    backgroundColor: `${background}`,
                                })}
                            ></div>
                            <div
                                className={`premium-banner__img_wrap premium-banner__${height}`}
                                style={filterJsCss({
                                    // minHeight: minHeight,
                                    alignItems: verAlign,
                                })}
                            >
                                <img
                                    className={`premium-banner__img`}
                                    alt="Banner Image"
                                    src={imageURL}
                                    style={filterJsCss({
                                        filter: `brightness( ${filter?.bright}% ) contrast( ${filter?.contrast}% ) saturate( ${filter?.saturation}% ) blur( ${filter?.blur}px ) hue-rotate( ${filter?.hue}deg )`,
                                    })}
                                />
                            </div>

                            <div
                                className={`premium-banner__content`}
                                style={filterJsCss({
                                    background:
                                        "effect2" === effect
                                            ? titleStyles[0].titleBack
                                            : "transparent",
                                })}
                            >
                                <div className={`premium-banner__title_wrap`}>
                                    <RichText.Content
                                        tagName={titleTag.toLowerCase()}
                                        className={`premium-banner__title`}
                                        value={title}
                                        style={filterJsCss({
                                            color: titleStyles[0].titleColor,
                                            fontStyle: titleTypography.fontStyle,
                                            fontFamily: titleTypography.fontFamily,
                                            fontWeight: titleTypography.fontWeight,
                                            textDecoration:
                                                titleTypography.textDecoration,
                                            textTransform:
                                                titleTypography.textTransform,
                                            textShadow: `${titleTextShadow.horizontal}px ${titleTextShadow.vertical}px ${titleTextShadow.blur}px ${titleTextShadow.color}`,
                                        })}
                                    />
                                </div>
                                <div className={`premium-banner__desc_wrap`}>
                                    <RichText.Content
                                        tagName="p"
                                        className={`premium-banner__desc`}
                                        value={desc}
                                        style={filterJsCss({
                                            color: descStyles[0].descColor,
                                            fontStyle: descTypography.fontStyle,
                                            fontFamily: descTypography.fontFamily,
                                            fontWeight: descTypography.fontWeight,
                                            textDecoration:
                                                descTypography.textDecoration,
                                            textTransform: descTypography.textTransform,
                                            textShadow: `${descTextShadow.horizontal}px ${descTextShadow.vertical}px ${descTextShadow.blur}px ${descTextShadow.color}`,
                                        })}
                                    />
                                </div>
                            </div>
                            {urlCheck && "" !== url && (
                                <a
                                    className={`premium-banner__link`}
                                    href={url}
                                    target={target && "_blank"}
                                    rel="noopener"
                                />
                            )}
                        </div>
                    </div>
                )
            );
        }
    },
    {
        attributes: v8Attributes,
        isEligible() {
            return true;
        },
        migrate: attributes => {
            let newAttributes = {
                blockId: attributes.block_id ? "premium-banner-" + generateBlockId(attributes.block_id) : '',
                contentAlign: {
                    "Desktop": attributes.contentAlign || 'left',
                    "Tablet": attributes.contentAlign || 'left',
                    "Mobile": attributes.contentAlign || 'left',
                },
                filter: {
                    'contrast': '100',
                    'blur': '0',
                    'bright': '100',
                    'saturation': '100',
                    'hue': '0'
                },
                padding: {
                    "Desktop": {
                        top: attributes?.paddingT || '',
                        right: attributes?.paddingR || '',
                        bottom: attributes?.paddingB || '',
                        left: attributes?.paddingL || ''
                    },
                    "Tablet": {
                        top: attributes?.paddingTTablet || '',
                        right: attributes?.paddingRTablet || '',
                        bottom: attributes?.paddingBTablet || '',
                        left: attributes?.paddingLTablet || ''
                    },
                    "Mobile": {
                        top: attributes?.paddingTMobile || '',
                        right: attributes?.paddingRMobile || '',
                        bottom: attributes?.paddingBMobile || '',
                        left: attributes?.paddingLMobile || ''
                    },
                    "unit": attributes.containerStyles[0].paddingU || 'px'
                },
                border: {
                    "borderType": attributes?.containerStyles?.[0].borderType || '',
                    "borderColor": attributes?.containerStyles?.[0].borderColor || '',
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
                            top: attributes?.containerStyles?.[0].borderRadius || '',
                            right: attributes?.containerStyles?.[0].borderRadius || '',
                            bottom: attributes?.containerStyles?.[0].borderRadius || '',
                            left: attributes?.containerStyles?.[0].borderRadius || ''
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
                titleTypography: {
                    "fontWeight": attributes?.titleStyles?.[0].titleWeight || 'Default',
                    'fontStyle': '',
                    'textTransform': '',
                    'letterSpacing': '',
                    'fontFamily': 'Default',
                    'lineHeight': attributes?.titleStyles?.[0].titleLine || '',
                    'textDecoration': '',
                    'fontSize': {
                        'Desktop': attributes?.titleStyles?.[0].titleSize || '',
                        "Tablet": attributes?.titleStyles?.[0].titleSizeTablet || '',
                        "Mobile": attributes?.titleStyles?.[0].titleSizeMobile || '',
                        "unit": attributes?.titleStyles?.[0].titleSizeUnit || 'px'
                    }
                },
                descTypography: {
                    "fontWeight": attributes?.descStyles?.[0].descWeight || 'Default',
                    'fontStyle': '',
                    'textTransform': '',
                    'letterSpacing': '',
                    'fontFamily': 'Default',
                    'lineHeight': attributes?.descStyles?.[0].descLine || '',
                    'textDecoration': '',
                    'fontSize': {
                        'Desktop': attributes?.descStyles?.[0].descSize || '',
                        "Tablet": attributes?.descStyles?.[0].descSizeTablet || '',
                        "Mobile": attributes?.descStyles?.[0].descSizeMobile || '',
                        "unit": attributes?.descStyles?.[0].descSizeUnit || 'px'
                    }
                },
                titleTextShadow: {
                    'color': attributes?.titleStyles?.[0].shadowColor || '',
                    'blur': attributes?.titleStyles?.[0].shadowBlur || '',
                    'horizontal': attributes?.titleStyles?.[0].shadowHorizontal || '0',
                    'vertical': attributes?.titleStyles?.[0].shadowVertical || '0',
                },
                descTextShadow: {
                    'color': attributes?.descStyles?.[0].descShadowColor || '',
                    'blur': attributes?.descStyles?.[0].descShadowBlur || '',
                    'horizontal': attributes?.descStyles?.[0].descShadowHorizontal || '0',
                    'vertical': attributes?.descStyles?.[0].descShadowVertical || '0',
                },
                containerShadow: {
                    'color': attributes?.containerStyles?.[0].containerShadowColor || '',
                    'blur': attributes?.containerStyles?.[0].containerShadowBlur || '',
                    'horizontal': attributes?.containerStyles?.[0].containerShadowHorizontal || '0',
                    'vertical': attributes?.containerStyles?.[0].containerShadowVertical || '0',
                    'position': attributes?.containerStyles?.[0].containerShadowPosition || ''
                }
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const { className } = props;
            const {
                block_id,
                borderBanner,
                imageURL,
                titleStyles,
                descStyles,
                containerStyles,
                title,
                titleTag,
                desc,
                contentAlign,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                opacity,
                urlCheck,
                target,
                url,
                sepColor,
                blur,
                bright,
                contrast,
                saturation,
                hue,
                hideDesktop,
                hideTablet,
                hideMobile,
                borderWidth,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft,
            } = props.attributes;

            const mainClasses = classnames(className, 'premium-banner');

            return (
                imageURL &&
                <div
                    id={`premium-banner-${block_id}`}
                    className={`${mainClasses} premium-banner__responsive_${responsive} ${hideDesktop} ${hideTablet} ${hideMobile} premium-banner-${block_id}`}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-banner-${block_id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                                `background: ${sepColor}`,
                                "}",
                                `#premium-banner-${block_id} .premium-banner__inner {`,
                                `background: ${background}`,
                                "}",
                                `#premium-banner-${block_id} .premium-banner__img.premium-banner__active {`,
                                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                                "}"
                            ].join("\n")
                        }}
                    />
                    <div
                        className={`premium-banner__inner premium-banner__min premium-banner__${effect} premium-banner__${hoverEffect} hover_${hovered}`}
                        style={{
                            boxShadow: `${containerStyles[0].containerShadowHorizontal}px ${containerStyles[0].containerShadowVertical}px ${containerStyles[0].containerShadowBlur}px ${containerStyles[0].containerShadowColor} ${containerStyles[0].containerShadowPosition}`,
                            borderStyle: containerStyles[0].borderType,
                            borderWidth: borderBanner
                                ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                                : borderWidth + "px",
                            borderRadius: containerStyles[0].borderRadius + "px",
                            borderColor: containerStyles[0].borderColor
                        }}
                    >
                        <div
                            className={`premium-banner__img_wrap premium-banner__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign
                            }}
                        >
                            <img
                                className={`premium-banner__img`}
                                alt="Banner Image"
                                src={imageURL}
                                style={{
                                    filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                                }}
                            />
                        </div>

                        <div
                            className={`premium-banner__content`}
                            style={{
                                background: "effect2" === effect ? titleStyles[0].titleBack : "transparent"
                            }}
                        >
                            <div
                                className={`premium-banner__title_wrap`}
                                style={{
                                    textAlign: contentAlign
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`premium-banner__title`}
                                    value={title}
                                    style={{
                                        color: titleStyles[0].titleColor,
                                        fontWeight: titleStyles[0].titleWeight,
                                        lineHeight: titleStyles[0].titleLine + "px",
                                        textShadow: `${titleStyles[0].shadowHorizontal}px ${titleStyles[0].shadowVertical}px ${titleStyles[0].shadowBlur}px ${titleStyles[0].shadowColor}`
                                    }}
                                />
                            </div>
                            <div
                                className={`premium-banner__desc_wrap`}
                                style={{
                                    textAlign: contentAlign
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`premium-banner__desc`}
                                    value={desc}
                                    style={{
                                        color: descStyles[0].descColor,
                                        fontWeight: descStyles[0].descWeight,
                                        lineHeight: descStyles[0].descLine + "px",
                                        textShadow: `${descStyles[0].descShadowHorizontal}px ${descStyles[0].descShadowVertical}px ${descStyles[0].descShadowBlur}px ${descStyles[0].descShadowColor}`
                                    }}
                                />
                            </div>
                        </div>
                        {urlCheck && "" !== url && (
                            <a
                                className={`premium-banner__link`}
                                href={url}
                                target={target && "_blank"}
                                rel="noopener"
                            />
                        )}
                    </div>
                </div>
            );
        }
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                titleStyles: [
                    {
                        titleSizeUnit: attributes.titleSizeUnit,
                        titleSize: attributes.titleSize,
                        titleSizeMobile: attributes.titleSizeMobile,
                        titleSizeTablet: attributes.titleSizeTablet,
                        titleWeight: attributes.titleWeight,
                        titleLine: attributes.titleLine,
                        titleColor: attributes.titleColor,
                        titleBack: attributes.titleBack,
                        shadowColor: attributes.shadowColor,
                        shadowBlur: attributes.shadowBlur,
                        shadowHorizontal: attributes.shadowHorizontal,
                        shadowVertical: attributes.shadowVertical
                    }
                ],
                descStyles: [
                    {
                        descSizeUnit: attributes.descSizeUnit,
                        descSize: attributes.descSize,
                        descSizeTablet: attributes.descSizeTablet,
                        descSizeMobile: attributes.descSizeMobile,
                        descWeight: attributes.descWeight,
                        descLine: attributes.descLine,
                        descColor: attributes.descColor,
                        descShadowColor: attributes.descShadowColor,
                        descShadowBlur: attributes.descShadowBlur,
                        descShadowHorizontal: attributes.descShadowHorizontal,
                        descShadowVertical: attributes.descShadowVertical,
                    }
                ],
                containerStyles: [
                    {
                        borderType: attributes.borderType,
                        borderRadius: attributes.borderRadius,
                        borderColor: attributes.borderColor,
                        containerShadowColor: attributes.containerShadowColor,
                        containerShadowBlur: attributes.containerShadowBlur,
                        containerShadowHorizontal: attributes.containerShadowHorizontal,
                        containerShadowVertical: attributes.containerShadowVertical,
                        containerShadowPosition: attributes.containerShadowPosition,
                        paddingU: attributes.paddingU,
                    }
                ],
                paddingTTablet: "",
                paddingRTablet: "",
                paddingBTablet: " ",
                paddingLTablet: "",
                paddingTMobile: "",
                paddingRMobile: "",
                paddingBMobile: "",
                paddingLMobile: ""
            }
            return Object.assign(attributes, newAttributes)

        },
        save: props => {
            const {
                block_id,
                borderBanner,
                imageURL,
                title,
                titleTag,
                desc,
                contentAlign,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                opacity,
                borderType,
                borderWidth,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft,
                borderRadius,
                borderColor,
                titleColor,
                titleBack,
                titleWeight,
                titleLine,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                descColor,
                descLine,
                descWeight,
                descShadowBlur,
                descShadowColor,
                descShadowHorizontal,
                descShadowVertical,
                urlCheck,
                url,
                target,
                sepColor,
                blur,
                bright,
                contrast,
                saturation,
                hue,
                containerShadowBlur,
                containerShadowColor,
                containerShadowHorizontal,
                containerShadowVertical,
                containerShadowPosition,
                paddingB,
                paddingT,
                paddingR,
                paddingL,
                paddingU,
                hideDesktop,
                hideTablet,
                hideMobile
            } = props.attributes;


            return (
                <div
                    id={`premium-banner-${block_id}`}
                    className={`${className} premium-banner__responsive_${responsive} ${hideDesktop} ${hideTablet} ${hideMobile} premium-banner-${block_id}`}
                    style={{
                        paddingTop: paddingT + paddingU,
                        paddingRight: paddingR + paddingU,
                        paddingBottom: paddingB + paddingU,
                        paddingLeft: paddingL + paddingU
                    }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-banner-${block_id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                                `background: ${sepColor}`,
                                "}",
                                `#premium-banner-${block_id} .premium-banner__inner {`,
                                `background: ${background}`,
                                "}",
                                `#premium-banner-${block_id} .premium-banner__img.premium-banner__active {`,
                                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                                "}"
                            ].join("\n")
                        }}
                    />
                    <div
                        className={`premium-banner__inner premium-banner__min premium-banner__${effect} premium-banner__${hoverEffect} hover_${hovered}`}
                        style={{
                            boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
                            borderStyle: borderType,
                            borderWidth: borderBanner
                                ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                                : borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor
                        }}
                    >
                        <div
                            className={`premium-banner__img_wrap premium-banner__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign
                            }}
                        >
                            <img
                                className={`premium-banner__img`}
                                alt="Banner Image"
                                src={imageURL}
                                style={{
                                    filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                                }}
                            />
                        </div>

                        <div
                            className={`premium-banner__content`}
                            style={{
                                background: "effect2" === effect ? titleBack : "transparent"
                            }}
                        >
                            <div
                                className={`premium-banner__title_wrap`}
                                style={{
                                    textAlign: contentAlign
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`premium-banner__title`}
                                    value={title}
                                    style={{
                                        color: titleColor,
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + "px",
                                        textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`
                                    }}
                                />
                            </div>
                            <div
                                className={`premium-banner__desc_wrap`}
                                style={{
                                    textAlign: contentAlign
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`premium-banner__desc`}
                                    value={desc}
                                    style={{
                                        color: descColor,
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                        textShadow: `${descShadowHorizontal}px ${descShadowVertical}px ${descShadowBlur}px ${descShadowColor}`
                                    }}
                                />
                            </div>
                        </div>
                        {urlCheck && "" !== url && (
                            <a
                                className={`premium-banner__link`}
                                href={url}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        }
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                borderBottom: "",
                borderTop: "",
                borderRight: "",
                borderLeft: "",
                borderBanner: "",
                classMigrate: false,
                titleSizeUnit: 'px',
                titleSizeMobile: '',
                titleSizeTablet: '',
                descSizeUnit: 'px',
                descSizeMobile: '',
                descSizeTablet: '',
                block_id: '',
                hideDesktop: false,
                hideTablet: false,
                hideMobile: false
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                imageURL,
                title,
                titleTag,
                desc,
                contentAlign,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                opacity,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                titleColor,
                titleBack,
                titleSize,
                titleWeight,
                titleLine,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                descColor,
                descSize,
                descLine,
                descWeight,
                descShadowBlur,
                descShadowColor,
                descShadowHorizontal,
                descShadowVertical,
                urlCheck,
                url,
                target,
                sepColor,
                blur,
                bright,
                contrast,
                saturation,
                hue,
                containerShadowBlur,
                containerShadowColor,
                containerShadowHorizontal,
                containerShadowVertical,
                containerShadowPosition,
                paddingB,
                paddingT,
                paddingR,
                paddingL,
                paddingU,
            } = props.attributes;

            return (
                <div
                    id={`premium-banner-${id}`}
                    className={`${className} premium-banner__responsive_${responsive}`}
                    style={{
                        paddingTop: paddingT + paddingU,
                        paddingRight: paddingR + paddingU,
                        paddingBottom: paddingB + paddingU,
                        paddingLeft: paddingL + paddingU,
                    }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                                `background: ${sepColor}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__inner {`,
                                `background: ${background}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <div
                        className={`premium-banner__inner premium-banner__min premium-banner__${effect} premium-banner__${hoverEffect} hover_${hovered}`}
                        style={{
                            boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    >
                        <div
                            className={`premium-banner__img_wrap premium-banner__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign,
                            }}
                        >
                            <img
                                className={`premium-banner__img`}
                                alt="Banner Image"
                                src={imageURL}
                                style={{
                                    filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                                }}
                            />
                        </div>

                        <div
                            className={`premium-banner__content`}
                            style={{
                                background: "effect2" === effect ? titleBack : "transparent",
                            }}
                        >
                            <div
                                className={`premium-banner__title_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`premium-banner__title`}
                                    value={title}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + "px",
                                        textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                                    }}
                                />
                            </div>
                            <div
                                className={`premium-banner__desc_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`premium-banner__desc`}
                                    value={desc}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                        textShadow: `${descShadowHorizontal}px ${descShadowVertical}px ${descShadowBlur}px ${descShadowColor}`,
                                    }}
                                />
                            </div>
                        </div>
                        {urlCheck && "" !== url && (
                            <a
                                className={`premium-banner__link`}
                                href={url}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                paddingT: "",
                paddingR: "",
                paddingB: "",
                paddingL: "",
                paddingU: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                imageURL,
                title,
                titleTag,
                desc,
                contentAlign,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                opacity,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                titleColor,
                titleBack,
                titleSize,
                titleWeight,
                titleLine,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                descColor,
                descSize,
                descLine,
                descWeight,
                descShadowBlur,
                descShadowColor,
                descShadowHorizontal,
                descShadowVertical,
                urlCheck,
                url,
                target,
                sepColor,
                blur,
                bright,
                contrast,
                saturation,
                hue,
                containerShadowBlur,
                containerShadowColor,
                containerShadowHorizontal,
                containerShadowVertical,
                containerShadowPosition,
            } = props.attributes;
            return (
                <div
                    id={`premium-banner-${id}`}
                    className={`${className} ${className}__responsive_${responsive}`}
                    style={{
                        boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
                    }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                                `background: ${sepColor}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__inner {`,
                                `background: ${background}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <div
                        className={`${className}__inner ${className}__min ${className}__${effect} ${className}__${hoverEffect} hover_${hovered}`}
                        style={{
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    >
                        <div
                            className={`${className}__img_wrap ${className}__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign,
                            }}
                        >
                            <img
                                className={`${className}__img`}
                                alt="Banner Image"
                                src={imageURL}
                                style={{
                                    filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                                }}
                            />
                        </div>

                        <div
                            className={`${className}__content`}
                            style={{
                                background: "effect2" === effect ? titleBack : "transparent",
                            }}
                        >
                            <div
                                className={`${className}__title_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`${className}__title`}
                                    value={title}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + "px",
                                        textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                                    }}
                                />
                            </div>
                            <div
                                className={`${className}__desc_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`${className}__desc`}
                                    value={desc}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                        textShadow: `${descShadowHorizontal}px ${descShadowVertical}px ${descShadowBlur}px ${descShadowColor}`,
                                    }}
                                />
                            </div>
                        </div>
                        {urlCheck && "" !== url && (
                            <a
                                className={`${className}__link`}
                                href={url}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                containerShadowColor: "",
                containerShadowBlur: "0",
                containerShadowHorizontal: "0",
                containerShadowVertical: "0",
                containerShadowPosition: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                imageURL,
                title,
                titleTag,
                desc,
                contentAlign,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                opacity,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                titleColor,
                titleBack,
                titleSize,
                titleWeight,
                titleLine,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                descColor,
                descSize,
                descLine,
                descWeight,
                descShadowBlur,
                descShadowColor,
                descShadowHorizontal,
                descShadowVertical,
                urlCheck,
                url,
                target,
                sepColor,
                blur,
                bright,
                contrast,
                saturation,
                hue,
            } = props.attributes;
            return (
                <div
                    id={`premium-banner-${id}`}
                    className={`${className} ${className}__responsive_${responsive}`}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                                `background: ${sepColor}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__inner {`,
                                `background: ${background}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <div
                        className={`${className}__inner ${className}__min ${className}__${effect} ${className}__${hoverEffect} hover_${hovered}`}
                        style={{
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    >
                        <div
                            className={`${className}__img_wrap ${className}__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign,
                            }}
                        >
                            <img
                                className={`${className}__img`}
                                alt="Banner Image"
                                src={imageURL}
                                style={{
                                    filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                                }}
                            />
                        </div>

                        <div
                            className={`${className}__content`}
                            style={{
                                background: "effect2" === effect ? titleBack : "transparent",
                            }}
                        >
                            <div
                                className={`${className}__title_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`${className}__title`}
                                    value={title}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + "px",
                                        textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                                    }}
                                />
                            </div>
                            <div
                                className={`${className}__desc_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`${className}__desc`}
                                    value={desc}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                        textShadow: `${descShadowHorizontal}px ${descShadowVertical}px ${descShadowBlur}px ${descShadowColor}`,
                                    }}
                                />
                            </div>
                        </div>
                        {urlCheck && "" !== url && (
                            <a
                                className={`${className}__link`}
                                href={url}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                descShadowBlur: "0",
                descShadowColor: "",
                descShadowHorizontal: "0",
                descShadowVertical: "0",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                imageURL,
                title,
                titleTag,
                desc,
                contentAlign,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                opacity,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                titleColor,
                titleBack,
                titleSize,
                titleWeight,
                titleLine,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                descColor,
                descSize,
                descWeight,
                descLine,
                urlCheck,
                url,
                target,
                sepColor,
                blur,
                bright,
                contrast,
                saturation,
                hue,
            } = props.attributes;
            return (
                <div
                    id={`premium-banner-${id}`}
                    className={`${className} ${className}__responsive_${responsive}`}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                                `background: ${sepColor}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__inner {`,
                                `background: ${background}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <div
                        className={`${className}__inner ${className}__min ${className}__${effect} ${className}__${hoverEffect} hover_${hovered}`}
                        style={{
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    >
                        <div
                            className={`${className}__img_wrap ${className}__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign,
                            }}
                        >
                            <img
                                className={`${className}__img`}
                                alt="Banner Image"
                                src={imageURL}
                                style={{
                                    filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                                }}
                            />
                        </div>

                        <div
                            className={`${className}__content`}
                            style={{
                                background: "effect2" === effect ? titleBack : "transparent",
                            }}
                        >
                            <div
                                className={`${className}__title_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`${className}__title`}
                                    value={title}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + "px",
                                        textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                                    }}
                                />
                            </div>
                            <div
                                className={`${className}__desc_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`${className}__desc`}
                                    value={desc}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                    }}
                                />
                            </div>
                        </div>
                        {urlCheck && "" !== url && (
                            <a
                                className={`${className}__link`}
                                href={url}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                blur: "0",
                bright: "100",
                contrast: "100",
                saturation: "100",
                hue: "0",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                imageURL,
                title,
                titleTag,
                desc,
                contentAlign,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                opacity,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                titleColor,
                titleBack,
                titleSize,
                titleWeight,
                titleLine,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                descColor,
                descSize,
                descWeight,
                descLine,
                urlCheck,
                url,
                target,
                sepColor,
            } = props.attributes;
            return (
                <div
                    id={`premium-banner-${id}`}
                    className={`${className} ${className}__responsive_${responsive}`}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                                `background: ${sepColor}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__inner {`,
                                `background: ${background}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <div
                        className={`${className}__inner ${className}__min ${className}__${effect} ${className}__${hoverEffect} hover_${hovered}`}
                        style={{
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    >
                        <div
                            className={`${className}__img_wrap ${className}__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign,
                            }}
                        >
                            <img
                                className={`${className}__img`}
                                alt="Banner Image"
                                src={imageURL}
                            />
                        </div>

                        <div
                            className={`${className}__content`}
                            style={{
                                background: "effect2" === effect ? titleBack : "transparent",
                            }}
                        >
                            <div
                                className={`${className}__title_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`${className}__title`}
                                    value={title}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + "px",
                                        textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                                    }}
                                />
                            </div>
                            <div
                                className={`${className}__desc_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`${className}__desc`}
                                    value={desc}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                    }}
                                />
                            </div>
                        </div>
                        {urlCheck && "" !== url && (
                            <a
                                className={`${className}__link`}
                                href={url}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                shadowBlur: "0",
                shadowColor: "",
                shadowHorizontal: "0",
                shadowVertical: "0",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                imageURL,
                title,
                titleTag,
                desc,
                contentAlign,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                opacity,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                titleColor,
                titleBack,
                titleSize,
                titleWeight,
                titleLine,
                descColor,
                descSize,
                descWeight,
                descLine,
                urlCheck,
                url,
                target,
                sepColor,
            } = props.attributes;
            return (
                <div
                    id={`premium-banner-${id}`}
                    className={`${className} ${className}__responsive_${responsive}`}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                                `background: ${sepColor}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__inner {`,
                                `background: ${background}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <div
                        className={`${className}__inner ${className}__min ${className}__${effect} ${className}__${hoverEffect} hover_${hovered}`}
                        style={{
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    >
                        <div
                            className={`${className}__img_wrap ${className}__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign,
                            }}
                        >
                            <img
                                className={`${className}__img`}
                                alt="Banner Image"
                                src={imageURL}
                            />
                        </div>

                        <div
                            className={`${className}__content`}
                            style={{
                                background: "effect2" === effect ? titleBack : "transparent",
                            }}
                        >
                            <div
                                className={`${className}__title_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`${className}__title`}
                                    value={title}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + "px",
                                    }}
                                />
                            </div>
                            <div
                                className={`${className}__desc_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`${className}__desc`}
                                    value={desc}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                    }}
                                />
                            </div>
                        </div>
                        {urlCheck && "" !== url && (
                            <a
                                className={`${className}__link`}
                                href={url}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
];

export default deprecatedContent;