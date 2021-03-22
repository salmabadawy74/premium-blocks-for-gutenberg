import classnames from 'classnames'

const { RichText } = wp.blockEditor;

const save = props => {

    const { className } = props;

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

    const mainClasses = classnames(className, 'premium-banner');

    return (
        <div
            id={`premium-banner-${block_id}`}
            className={`${mainClasses} premium-banner__responsive_${responsive} ${hideDesktop} ${hideTablet} ${hideMobile} premium-banner-${block_id}`}
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
};

export default save;
