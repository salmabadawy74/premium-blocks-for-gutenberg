const className = "premium-accordion";

import classnames from 'classnames'


const { __ } = wp.i18n;

const { RichText, InnerBlocks } = wp.editor;

const attributes = {
    accordionId: {
        type: "string"
    },
    repeaterItems: {
        type: "array",
        default: [
            {
                titleText: __("Awesome Title"),
                descText:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    direction: {
        type: "string",
        default: "ltr"
    },
    titleTag: {
        type: "string",
        default: "H4"
    },
    titleColor: {
        type: "string"
    },
    titleSize: {
        type: "number"
    },
    titleLine: {
        type: "number"
    },
    titleLetter: {
        type: "number"
    },
    titleStyle: {
        type: "string"
    },
    titleUpper: {
        type: "boolean"
    },
    titleWeight: {
        type: "number",
        default: 500
    },
    titleBorder: {
        type: "string",
        default: "none"
    },
    titleBorderWidth: {
        type: "number",
        default: "1"
    },
    titleBorderTop: {
        type: "number"
    },
    titleBorderRight: {
        type: "number"
    },
    titleBorderBottom: {
        type: "number"
    },
    titleBorderLeft: {
        type: "number"
    },
    titleBorderUpdated: {
        type: "boolean",
        default: false
    },
    titleBorderRadius: {
        type: "number",
        default: "0"
    },
    titleBorderColor: {
        type: "string"
    },
    titleBack: {
        type: "string"
    },
    titleShadowColor: {
        type: "string"
    },
    titleShadowBlur: {
        type: "number",
        default: "0"
    },
    titleShadowHorizontal: {
        type: "number",
        default: "0"
    },
    titleShadowVertical: {
        type: "number",
        default: "0"
    },
    titlePaddingT: {
        type: "number"
    },
    titlePaddingR: {
        type: "number"
    },
    titlePaddingB: {
        type: "number"
    },
    titlePaddingL: {
        type: "number"
    },
    arrowColor: {
        type: "string"
    },
    arrowBack: {
        type: "string"
    },
    arrowPos: {
        type: "string",
        default: "out"
    },
    arrowPadding: {
        type: "number"
    },
    arrowRadius: {
        type: "number"
    },
    arrowSize: {
        type: "number",
        default: 20
    },
    contentType: {
        type: "string",
        default: "text"
    },
    descAlign: {
        type: "string",
        default: "left"
    },
    descColor: {
        type: "string"
    },
    descBack: {
        type: "string"
    },
    descBorder: {
        type: "string",
        default: "none"
    },
    descBorderWidth: {
        type: "number",
        default: "1"
    },
    descBorderUpdated: {
        type: "boolean",
        default: false
    },
    descBorderTop: {
        type: "number"
    },
    descBorderRight: {
        type: "number"
    },
    descBorderBottom: {
        type: "number"
    },
    descBorderLeft: {
        type: "number"
    },
    titleEditBorder: {
        type: "boolean"
    },
    descBorderRadius: {
        type: "number",
        default: "0"
    },
    descBorderColor: {
        type: "string"
    },
    descSize: {
        type: "number"
    },
    descLine: {
        type: "number"
    },
    descLetter: {
        type: "number"
    },
    descStyle: {
        type: "string"
    },
    descUpper: {
        type: "boolean"
    },
    descWeight: {
        type: "number",
        default: 500
    },
    textShadowColor: {
        type: "string"
    },
    textShadowBlur: {
        type: "number",
        default: "0"
    },
    textShadowHorizontal: {
        type: "number",
        default: "0"
    },
    textShadowVertical: {
        type: "number",
        default: "0"
    },
    descPaddingT: {
        type: "number"
    },
    descPaddingR: {
        type: "number"
    },
    descPaddingB: {
        type: "number"
    },
    descPaddingL: {
        type: "number",
        default: 10
    }
}


const deprecated = [
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                titleStyles: [
                    {
                        titleColor: attributes.titleColor,
                        titleSize: attributes.titleSize,
                        titleLine: attributes.titleLine,
                        titleLetter: attributes.titleLetter,
                        titleStyle: attributes.titleStyle,
                        titleUpper: attributes.titleUpper,
                        titleWeight: attributes.titleWeight,
                        titleBorder: attributes.titleBorder,
                        titleBorderRadius: attributes.titleBorderRadius,
                        titleBorderColor: attributes.titleBorderColor,
                        titleBack: attributes.titleBack,
                        titleShadowColor: attributes.titleShadowColor,
                        titleShadowBlur: attributes.titleShadowBlur,
                        titleShadowHorizontal: attributes.titleShadowHorizontal,
                        titleShadowVertical: attributes.titleShadowVertical,
                    }
                ]
                ,
                arrowStyles: [
                    {
                        arrowColor: attributes.arrowColor,
                        arrowBack: attributes.arrowBack,
                        arrowPos: attributes.arrowPos,
                        arrowPadding: attributes.arrowPadding,
                        arrowRadius: attributes.arrowRadius,
                        arrowSize: attributes.arrowSize
                    }]
                ,
                descStyles: [
                    {
                        descAlign: attributes.descAlign,
                        descColor: attributes.descColor,
                        descBack: attributes.descBack,
                        descBorder: attributes.descBorder,
                        descBorderWidth: attributes.descBorderWidth,
                        descBorderUpdated: attributes.descBorderUpdated,
                        descBorderTop: attributes.descBorderTop,
                        descBorderRight: attributes.descBorderRight,
                        descBorderBottom: attributes.descBorderBottom,
                        descBorderLeft: attributes.descBorderLeft,
                        descBorderRadius: attributes.descBorderRadius,
                        descBorderColor: attributes.descBorderColor,
                        descSize: attributes.descSize,
                        descLine: attributes.descLine,
                        descLetter: attributes.descLetter,
                        descStyle: attributes.descStyle,
                        descUpper: attributes.descUpper,
                        descWeight: attributes.descWeight,
                        descPaddingT: attributes.descPaddingT,
                        descPaddingR: attributes.descPaddingR,
                        descPaddingB: attributes.descPaddingB,
                        descPaddingL: attributes.descPaddingL
                    }

                ],
                titlePaddingTTablet: "0",
                titlePaddingRTablet: "0",
                titlePaddingBTablet: "0",
                titlePaddingLTablet: "0",
                titlePaddingTMobile: "0",
                titlePaddingRMobile: "0",
                titlePaddingBMobile: "0",
                titlePaddingLMobile: "0",
                arrowPaddingTTablet: "0",
                arrowPaddingRTablet: "0",
                arrowPaddingBTablet: "0",
                arrowPaddingLTablet: "0",
                arrowPaddingTMobile: "0",
                arrowPaddingRMobile: "0",
                arrowPaddingBMobile: "0",
                arrowPaddingLMobile: "0",
                descPaddingTTablet: "0",
                descPaddingRTablet: "0",
                descPaddingBTablet: "0",
                descPaddingLTablet: "0",
                descPaddingTMobile: "0",
                descPaddingRMobile: "0",
                descPaddingBMobile: "0",
                descPaddingLMobile: "0",


            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const {
                accordionId,
                repeaterItems,
                direction,
                titleTag,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleColor,
                titleBorder,
                titleBorderWidth,
                titleBorderColor,
                titleBorderTop,
                titleBorderRight,
                titleBorderBottom,
                titleBorderLeft,
                titleBorderRadius,
                titleBack,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titlePaddingT,
                titlePaddingR,
                titlePaddingB,
                titlePaddingL,
                arrowColor,
                arrowBack,
                arrowPos,
                arrowPadding,
                arrowSize,
                arrowRadius,
                contentType,
                descAlign,
                descSize,
                descLine,
                descLetter,
                descStyle,
                descUpper,
                descWeight,
                descColor,
                descBack,
                descBorder,
                descBorderColor,
                descBorderRadius,
                descBorderWidth,
                descBorderTop,
                descBorderRight,
                descBorderBottom,
                descBorderLeft,
                textShadowBlur,
                textShadowColor,
                textShadowHorizontal,
                textShadowVertical,
                descPaddingT,
                descPaddingR,
                descPaddingB,
                descPaddingL,
                titleBorderUpdated,
                descBorderUpdated,
            } = props.attributes;

            const mainClasses = classnames(className, 'premium-accordion');

            const accordionItems = repeaterItems.map((item, index) => {
                return (
                    <div
                        id={`premium-accordion__layer${index}`}
                        className={`premium-accordion__content_wrap`}
                    >
                        <div
                            className={`premium-accordion__title_wrap premium-accordion__${direction} premium-accordion__${arrowPos}`}
                            style={{
                                backgroundColor: titleBack,
                                borderStyle: titleBorder,
                                borderWidth: titleBorderUpdated
                                    ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                                    : titleBorderWidth + "px",
                                borderRadius: titleBorderRadius + "px",
                                borderColor: titleBorderColor,
                                paddingTop: titlePaddingT,
                                paddingRight: titlePaddingR,
                                paddingBottom: titlePaddingB,
                                paddingLeft: titlePaddingL
                            }}
                        >
                            <div className={`premium-accordion__title`}>
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`premium-accordion__title_text`}
                                    value={item.titleText}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        letterSpacing: titleLetter + "px",
                                        textTransform: titleUpper ? "uppercase" : "none",
                                        fontStyle: titleStyle,
                                        fontWeight: titleWeight,
                                        textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                        lineHeight: titleLine + "px"
                                    }}
                                />
                            </div>
                            <div className={`premium-accordion__icon_wrap`}>
                                <svg
                                    className={`premium-accordion__icon premium-accordion__closed`}
                                    role="img"
                                    focusable="false"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={arrowSize}
                                    height={arrowSize}
                                    viewBox="0 0 20 20"
                                    style={{
                                        fill: arrowColor,
                                        backgroundColor: arrowBack,
                                        padding: arrowPadding + "px",
                                        borderRadius: arrowRadius + "px"
                                    }}
                                >
                                    <polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
                                </svg>
                            </div>
                        </div>
                        <div
                            className={`premium-accordion__desc_wrap premium-accordion__desc_close`}
                            style={{
                                textAlign: descAlign,
                                backgroundColor: descBack,
                                borderStyle: descBorder,
                                borderWidth: descBorderUpdated
                                    ? `${descBorderTop}px ${descBorderRight}px ${descBorderBottom}px ${descBorderLeft}px`
                                    : descBorderWidth + "px",
                                borderRadius: descBorderRadius + "px",
                                borderColor: descBorderColor,
                                paddingTop: descPaddingT,
                                paddingRight: descPaddingR,
                                paddingBottom: descPaddingB,
                                paddingLeft: descPaddingL
                            }}
                        >
                            {"text" === contentType && (
                                <RichText.Content
                                    tagName="p"
                                    className={`premium-accordion__desc`}
                                    value={item.descText}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        letterSpacing: descLetter + "px",
                                        textTransform: descUpper ? "uppercase" : "none",
                                        textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowBlur}px ${textShadowColor}`,
                                        fontStyle: descStyle,
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px"
                                    }}
                                />
                            )}
                            {"block" === contentType && <InnerBlocks.Content />}
                        </div>
                    </div>
                );
            });
            return (
                <div id={accordionId} className={`${mainClasses}`}>
                    {accordionItems}
                </div>
            );
        }
    },
    {
        attributes: attributes,

        save: (props) => {
            const {
                accordionId,
                repeaterItems,
                direction,
                titleTag,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleColor,
                titleBorder,
                titleBorderColor,
                titleBorderWidth,
                titleBorderRadius,
                titleBack,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titlePaddingT,
                titlePaddingR,
                titlePaddingB,
                titlePaddingL,
                arrowColor,
                arrowBack,
                arrowPos,
                arrowPadding,
                arrowSize,
                arrowRadius,
                contentType,
                descAlign,
                descSize,
                descLine,
                descLetter,
                descStyle,
                descUpper,
                descWeight,
                descColor,
                descBack,
                descBorder,
                descBorderColor,
                descBorderRadius,
                descBorderWidth,
                textShadowBlur,
                textShadowColor,
                textShadowHorizontal,
                textShadowVertical,
                descPaddingT,
                descPaddingR,
                descPaddingB,
                descPaddingL,
            } = props.attributes;
            const accordionItems = repeaterItems.map((item, index) => {
                return (
                    <div
                        id={`premium-accordion__layer${index}`}
                        className={`premium-accordion__content_wrap`}
                    >
                        <div
                            className={`premium-accordion__title_wrap premium-accordion__${direction} premium-accordion__${arrowPos}`}
                            style={{
                                backgroundColor: titleBack,
                                border: titleBorder,
                                borderWidth: titleBorderWidth + "px",
                                borderRadius: titleBorderRadius + "px",
                                borderColor: titleBorderColor,
                                paddingTop: titlePaddingT,
                                paddingRight: titlePaddingR,
                                paddingBottom: titlePaddingB,
                                paddingLeft: titlePaddingL,
                            }}
                        >
                            <div className={`premium-accordion__title`}>
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`premium-accordion__title_text`}
                                    value={item.titleText}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        letterSpacing: titleLetter + "px",
                                        textTransform: titleUpper ? "uppercase" : "none",
                                        fontStyle: titleStyle,
                                        fontWeight: titleWeight,
                                        textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                        lineHeight: titleLine + "px",
                                    }}
                                />
                            </div>
                            <div className={`premium-accordion__icon_wrap`}>
                                <svg
                                    className={`premium-accordion__icon premium-accordion__closed`}
                                    role="img"
                                    focusable="false"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={arrowSize}
                                    height={arrowSize}
                                    viewBox="0 0 20 20"
                                    style={{
                                        fill: arrowColor,
                                        backgroundColor: arrowBack,
                                        padding: arrowPadding + "px",
                                        borderRadius: arrowRadius + "px",
                                    }}
                                >
                                    <polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
                                </svg>
                            </div>
                        </div>
                        <div
                            className={`premium-accordion__desc_wrap premium-accordion__desc_close`}
                            style={{
                                textAlign: descAlign,
                                backgroundColor: descBack,
                                border: descBorder,
                                borderWidth: descBorderWidth + "px",
                                borderRadius: descBorderRadius + "px",
                                borderColor: descBorderColor,
                                paddingTop: descPaddingT,
                                paddingRight: descPaddingR,
                                paddingBottom: descPaddingB,
                                paddingLeft: descPaddingL,
                            }}
                        >
                            {"text" === contentType && (
                                <RichText.Content
                                    tagName="p"
                                    className={`premium-accordion__desc`}
                                    value={item.descText}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        letterSpacing: descLetter + "px",
                                        textTransform: descUpper ? "uppercase" : "none",
                                        textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowBlur}px ${textShadowColor}`,
                                        fontStyle: descStyle,
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                    }}
                                />
                            )}
                            {"block" === contentType && <InnerBlocks.Content />}
                        </div>
                    </div>
                );
            });
            return (
                <div id={accordionId} className={`${className}`}>
                    {accordionItems}
                </div>
            );
        },
    },

    {
        attributes: attributes,
        save: (props) => {
            const {
                accordionId,
                repeaterItems,
                direction,
                titleTag,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleColor,
                titleBorder,
                titleBorderColor,
                titleBorderWidth,
                titleBorderRadius,
                titleBack,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titlePaddingT,
                titlePaddingR,
                titlePaddingB,
                titlePaddingL,
                arrowColor,
                arrowBack,
                arrowPos,
                arrowPadding,
                arrowSize,
                arrowRadius,
                contentType,
                descAlign,
                descSize,
                descLine,
                descLetter,
                descStyle,
                descUpper,
                descWeight,
                descColor,
                descBack,
                descBorder,
                descBorderColor,
                descBorderRadius,
                descBorderWidth,
                descPaddingT,
                descPaddingR,
                descPaddingB,
                descPaddingL,
            } = props.attributes;

            const accordionItems = repeaterItems.map((item, index) => {
                return (
                    <div
                        id={`${className}__layer${index}`}
                        className={`${className}__content_wrap`}
                    >
                        <div
                            className={`${className}__title_wrap ${className}__${direction} ${className}__${arrowPos}`}
                            style={{
                                backgroundColor: titleBack,
                                border: titleBorder,
                                borderWidth: titleBorderWidth + "px",
                                borderRadius: titleBorderRadius + "px",
                                borderColor: titleBorderColor,
                                paddingTop: titlePaddingT,
                                paddingRight: titlePaddingR,
                                paddingBottom: titlePaddingB,
                                paddingLeft: titlePaddingL,
                            }}
                        >
                            <div className={`${className}__title`}>
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`${className}__title_text`}
                                    value={item.titleText}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        letterSpacing: titleLetter + "px",
                                        textTransform: titleUpper ? "uppercase" : "none",
                                        fontStyle: titleStyle,
                                        fontWeight: titleWeight,
                                        textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                        lineHeight: titleLine + "px",
                                    }}
                                />
                            </div>
                            <div className={`${className}__icon_wrap`}>
                                <svg
                                    className={`${className}__icon premium-accordion__closed`}
                                    role="img"
                                    focusable="false"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={arrowSize}
                                    height={arrowSize}
                                    viewBox="0 0 20 20"
                                    style={{
                                        fill: arrowColor,
                                        backgroundColor: arrowBack,
                                        padding: arrowPadding + "px",
                                        borderRadius: arrowRadius + "px",
                                    }}
                                >
                                    <polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
                                </svg>
                            </div>
                        </div>
                        <div
                            className={`${className}__desc_wrap premium-accordion__desc_close`}
                            style={{
                                textAlign: descAlign,
                                backgroundColor: descBack,
                                border: descBorder,
                                borderWidth: descBorderWidth + "px",
                                borderRadius: descBorderRadius + "px",
                                borderColor: descBorderColor,
                                paddingTop: descPaddingT,
                                paddingRight: descPaddingR,
                                paddingBottom: descPaddingB,
                                paddingLeft: descPaddingL,
                            }}
                        >
                            {"text" === contentType && (
                                <RichText.Content
                                    tagName="p"
                                    className={`${className}__desc`}
                                    value={item.descText}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        letterSpacing: descLetter + "px",
                                        textTransform: descUpper ? "uppercase" : "none",
                                        fontStyle: descStyle,
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                    }}
                                />
                            )}
                            {"block" === contentType && <InnerBlocks.Content />}
                        </div>
                    </div>
                );
            });
            return (
                <div id={accordionId} className={`${className}`}>
                    {accordionItems}
                </div>
            );
        },
    },
];
export default deprecated;