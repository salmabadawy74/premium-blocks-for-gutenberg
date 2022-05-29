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
        titleTypography,
        descTypography
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
                        borderStyle: titleBorder && titleBorder.borderType,
                        borderColor: titleBorder && titleBorder.borderColor,
                    }}
                >
                    <div className={`premium-accordion__title`}>
                        <RichText.Content
                            tagName={titleTag.toLowerCase()}
                            className={`premium-accordion__title_text`}
                            value={item.titleText}
                            style={{
                                color: titleStyles[0].titleColor,
                                fontStyle: titleTypography.fontStyle,
                                fontFamily: titleTypography.fontFamily,
                                fontWeight: titleTypography.fontWeight,
                                letterSpacing: titleTypography.letterSpacing,
                                textDecoration: titleTypography.textDecoration,
                                textTransform: titleTypography.textTransform,
                                lineHeight: `${titleTypography.lineHeight}px`,
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
                        borderStyle: descBorder && descBorder.borderType,
                        borderColor: descBorder && descBorder.borderColor,

                    }}
                >
                    {"text" === contentType && (
                        <RichText.Content
                            tagName="p"
                            className={`premium-accordion__desc`}
                            value={item.descText}
                            style={{
                                color: descStyles[0].descColor,
                                fontStyle: descTypography.fontStyle,
                                fontFamily: descTypography.fontFamily,
                                fontWeight: descTypography.fontWeight,
                                letterSpacing: descTypography.letterSpacing,
                                textDecoration: descTypography.textDecoration,
                                textTransform: descTypography.textTransform,
                                lineHeight: `${descTypography.lineHeight}px`,
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
