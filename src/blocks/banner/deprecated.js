const { __ } = wp.i18n;

const className = "premium-banner";

const { RichText } = wp.editor;

const deprecated_attributes_1_0_1 = {
    imageID: {
        type: "number",
    },
    imageURL: {
        type: "string",
        source: "attribute",
        attribute: "src",
        selector: ".premium-banner__img",
    },
    title: {
        type: "array",
        source: "children",
        selector: ".premium-banner__title",
        default: __("Awesome Title"),
    },
    titleTag: {
        type: "string",
        default: "H3",
    },
    desc: {
        type: "array",
        source: "children",
        selector: ".premium-banner__desc",
        default: __("Cool Description!!"),
    },
    contentAlign: {
        type: "string",
        default: "left",
    },
    effect: {
        type: "string",
        default: "effect1",
    },
    hoverEffect: {
        type: "string",
        default: "none",
    },
    height: {
        type: "string",
        default: "default",
    },
    minHeight: {
        type: "number",
    },
    verAlign: {
        type: "string",
        default: "top",
    },
    hovered: {
        type: "boolean",
        default: false,
    },
    responsive: {
        type: "boolean",
        default: false,
    },
    background: {
        type: "string",
    },
    opacity: {
        type: "number",
        default: 50,
    },
    borderType: {
        type: "string",
        default: "none",
    },
    borderWidth: {
        type: "number",
        default: "1",
    },
    borderRadius: {
        type: "number",
        default: "0",
    },
    borderColor: {
        type: "string",
    },
    titleColor: {
        type: "string",
    },
    titleSize: {
        type: "number",
        default: "20",
    },
    titleLine: {
        type: "number",
    },
    titleWeight: {
        type: "number",
    },
    titleBack: {
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
    descColor: {
        type: "string",
        default: "#000",
    },
    descSize: {
        type: "number",
        default: "20",
    },
    descLine: {
        type: "number",
    },
    descWeight: {
        type: "number",
    },
    urlCheck: {
        type: "boolean",
        default: false,
    },
    target: {
        type: "boolean",
        default: false,
    },
    url: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-banner__link",
    },
    sepColor: {
        type: "string",
    },
    id: {
        type: "string",
    },
};

const newAttributes_1_4_4 = {
    blur: {
        type: "number",
        default: "0",
    },
    bright: {
        type: "number",
        default: "100",
    },
    contrast: {
        type: "number",
        default: "100",
    },
    saturation: {
        type: "number",
        default: "100",
    },
    hue: {
        type: "number",
        default: "0",
    },
};

const deprecated_attributes_1_3_8 = Object.assign(
    deprecated_attributes_1_0_1,
    newAttributes_1_4_4
);

const newAttributes_1_5_3 = {
    descShadowColor: {
        type: "string",
    },
    descShadowBlur: {
        type: "number",
        default: "0",
    },
    descShadowHorizontal: {
        type: "number",
        default: "0",
    },
    descShadowVertical: {
        type: "number",
        default: "0",
    },
};



const deprecated_attributes_1_5_3 = Object.assign(
    deprecated_attributes_1_3_8,
    newAttributes_1_5_3
);

const newAttributes_1_6_7 = {
    containerShadowColor: {
        type: "string",
    },
    containerShadowBlur: {
        type: "number",
        default: "0",
    },
    containerShadowHorizontal: {
        type: "number",
        default: "0",
    },
    containerShadowVertical: {
        type: "number",
        default: "0",
    },
    containerShadowPosition: {
        type: "string",
        default: "",
    },
};

const deprecated_attributes_1_6_7 = Object.assign(
    deprecated_attributes_1_5_3,
    newAttributes_1_6_7
);

const newAttributes_1_7_1 = {
    borderBanner: {
        type: "boolean",
        default: false,
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
    hideDesktop: {
        type: "boolean",
        default: false
    },
    hideTablet: {
        type: "boolean",
        default: false
    },
    hideMobile: {
        type: 'boolean',
        default: false
    },
    titleSizeUnit: {
        type: "string",

    },
    titleSizeUnit: {
        type: "string",
        default: 'px'
    },
    block_id: {
        type: "string"
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
};

const deprecated_attributes_1_7_1 = Object.assign(
    deprecated_attributes_1_6_7,
    newAttributes_1_7_1
);

const newAttributes_1_7_5 = {
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
    },
}
const bannerAttributes = {
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


const deprecated_attributes_1_7_5 = Object.assign(newAttributes_1_7_5, bannerAttributes)

const deprecatedContent = [
    {
        attributes: deprecated_attributes_1_7_5,
        migrate: (attributes) => {
            let newAttributes = {
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
        save: (props) => {
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
        attributes: deprecated_attributes_1_7_1,
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
        attributes: deprecated_attributes_1_6_7,
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
        attributes: deprecated_attributes_1_5_3,
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
        attributes: deprecated_attributes_1_3_8,
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
        attributes: deprecated_attributes_1_3_8,
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
        attributes: deprecated_attributes_1_0_1,
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