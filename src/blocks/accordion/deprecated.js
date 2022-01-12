const className = "premium-accordion";
import attributes from './attributes';

const { __ } = wp.i18n;

const { RichText, InnerBlocks } = wp.editor;



const deprecated = [
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