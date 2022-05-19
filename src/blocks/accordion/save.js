import classnames from 'classnames'
const { __ } = wp.i18n;

const { RichText, InnerBlocks } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        accordionId,
        repeaterItems,
        direction,
        titleTag,
        titleStyles,
        arrowStyles,
        descStyles,
        contentType,
        textShadowColor,
        textShadowBlur,
        textShadowHorizontal,
        textShadowVertical,
        titleBorder,
        descBorder,
    } = props.attributes;
    const mainClasses = classnames(className, 'premium-accordion');

    const accordionItems = repeaterItems.map((item, index) => {
        return (
            <div
                id={`premium-accordion__layer${index}`}
                className={`premium-accordion__content_wrap`}
            >
                <div
                    className={`premium-accordion__title_wrap premium-accordion__${direction} premium-accordion__${arrowStyles[0].arrowPos}`}
                    style={{
                        backgroundColor: titleStyles[0].titleBack,
                        borderStyle: titleBorder.borderType,
                        borderTopWidth: titleBorder.borderWidth.Desktop.top,
                        borderRightWidth: titleBorder.borderWidth.Desktop.right,
                        borderBottomWidth: titleBorder.borderWidth.Desktop.bottom,
                        borderLeftWidth: titleBorder.borderWidth.Desktop.left,
                        borderRadius: `${titleBorder.borderRadius.Desktop.top || 0}px ${titleBorder.borderRadius.Desktop.right || 0}px ${titleBorder.borderRadius.Desktop.bottom || 0}px ${titleBorder.borderRadius.Desktop.left || 0}px`,
                        borderColor: titleBorder.borderColor,
                        borderTopLeftRadius: `${titleBorder.borderRadius.Desktop.top || 0}px`,
                        borderTopRightRadius: `${titleBorder.borderRadius.Desktop.right || 0}px`,
                        borderBottomLeftRadius: `${titleBorder.borderRadius.Desktop.bottom || 0}px`,
                        borderBottomRightRadius: `${titleBorder.borderRadius.Desktop.left || 0}px`,
                    }}
                >
                    <div className={`premium-accordion__title`}>
                        <RichText.Content
                            tagName={titleTag.toLowerCase()}
                            className={`premium-accordion__title_text`}
                            value={item.titleText}
                            style={{
                                color: titleStyles[0].titleColor,
                                fontSize: titleStyles[0].titleSize + "px",
                                letterSpacing: titleStyles[0].titleLetter + "px",
                                textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                fontStyle: titleStyles[0].titleStyle,
                                fontWeight: titleStyles[0].titleWeight,
                                textShadow: `${titleStyles[0].titleShadowHorizontal}px ${titleStyles[0].titleShadowVertical}px ${titleStyles[0].titleShadowBlur}px ${titleStyles[0].titleShadowColor}`,
                                lineHeight: titleStyles[0].titleLine + "px"
                            }}
                        />
                    </div>
                    <div className={`premium-accordion__icon_wrap`}>
                        <svg
                            className={`premium-accordion__icon premium-accordion__closed`}
                            role="img"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            width={arrowStyles[0].arrowSize}
                            height={arrowStyles[0].arrowSize}
                            viewBox="0 0 20 20"
                            style={{
                                fill: arrowStyles[0].arrowColor,
                                backgroundColor: arrowStyles[0].arrowBack,
                                padding: arrowStyles[0].arrowPadding + "px",
                                borderRadius: arrowStyles[0].arrowRadius + "px"
                            }}
                        >
                            <polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
                        </svg>
                    </div>
                </div>
                <div
                    className={`premium-accordion__desc_wrap premium-accordion__desc_close`}
                    style={{
                        textAlign: descStyles[0].descAlign,
                        backgroundColor: descStyles[0].descBack,
                        borderStyle: descBorder.borderType,
                        borderTopWidth: descBorder.borderWidth.Desktop.top,
                        borderRightWidth: descBorder.borderWidth.Desktop.right,
                        borderBottomWidth: descBorder.borderWidth.Desktop.bottom,
                        borderLeftWidth: descBorder.borderWidth.Desktop.left,
                        borderRadius: `${descBorder.borderRadius.Desktop.top || 0}px ${descBorder.borderRadius.Desktop.right || 0}px ${descBorder.borderRadius.Desktop.bottom || 0}px ${descBorder.borderRadius.Desktop.left || 0}px`,
                        borderColor: descBorder.borderColor,
                        borderTopLeftRadius: `${descBorder.borderRadius.Desktop.top || 0}px`,
                        borderTopRightRadius: `${descBorder.borderRadius.Desktop.right || 0}px`,
                        borderBottomLeftRadius: `${descBorder.borderRadius.Desktop.bottom || 0}px`,
                        borderBottomRightRadius: `${descBorder.borderRadius.Desktop.left || 0}px`,

                    }}
                >
                    {"text" === contentType && (
                        <RichText.Content
                            tagName="p"
                            className={`premium-accordion__desc`}
                            value={item.descText}
                            style={{
                                color: descStyles[0].descColor,
                                fontSize: descStyles[0].descSize + "px",
                                letterSpacing: descStyles[0].descLetter + "px",
                                textTransform: descStyles[0].descUpper ? "uppercase" : "none",
                                textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowBlur}px ${textShadowColor}`,
                                fontStyle: descStyles[0].descStyle,
                                fontWeight: descStyles[0].descWeight,
                                lineHeight: descStyles[0].descLine + "px"
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
};
export default save;
