import classnames from "classnames";
import hexToRgba from "hex-to-rgba";

const { RichText, InnerBlocks } = wp.blockEditor;

const save = (props) => {
    const { className } = props;

    const { block_id,
        accordionId,
        repeaterItems,
        direction,
        titleTag,
        titleLine,
        titleLetter,
        titleStyle,
        titleUpper,
        titleWeight,
        titleColor,
        titleOpacity,
        arrowOpacity,
        descOpacity,
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
        hideDesktop,
		hideTablet,
		hideMobile
    } = props.attributes;

    const mainClasses = classnames( className, 'premium-accordion' );

    const accordionItems = repeaterItems.map( ( item, index ) => {
        return (
            <div
                id={`premium-accordion__layer${ index }`}
                className={`premium-accordion__content_wrap`}
            >
                <div
                    className={`premium-accordion__title_wrap premium-accordion__${ direction } premium-accordion__${ arrowPos }`}
                    style={{
                        backgroundColor: titleBack
                            ? hexToRgba(titleBack, titleOpacity)
                            : "transparent",
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
                                letterSpacing: titleLetter + "px",
                                textTransform: titleUpper
                                    ? "uppercase"
                                    : "none",
                                fontStyle: titleStyle,
                                fontWeight: titleWeight,
                                textShadow: `${ titleShadowHorizontal }px ${ titleShadowVertical }px ${ titleShadowBlur }px ${ titleShadowColor }`,
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
                                backgroundColor: arrowBack
                                    ? hexToRgba(arrowBack, arrowOpacity)
                                    : "transparent",
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
                        backgroundColor: descBack
                            ? hexToRgba(descBack, descOpacity)
                            : "transparent",
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
                                letterSpacing: descLetter + "px",
                                textTransform: descUpper ? "uppercase" : "none",
                                textShadow: `${ textShadowHorizontal }px ${ textShadowVertical }px ${ textShadowBlur }px ${ textShadowColor }`,
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
    } );
    return (
        <div id={  accordionId} className={`${ mainClasses } ${hideDesktop} ${hideTablet} ${hideMobile} premium-accordion-${block_id}`}>
            {accordionItems}
        </div>
    );
};
export default save;
