import classnames from 'classnames'

const { RichText } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        block_id,
        borderBanner,
        imageID,
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
        classMigrate,
        borderWidth,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
        paddingT,
        paddingR,
        paddingB,
        paddingL
    } = props.attributes;

    const mainClasses = classnames(className, 'premium-banner');

    return (
        <div
            id={`premium-banner-${block_id}`}
            className={`${mainClasses} premium-banner__responsive_${responsive} ${hideDesktop} ${hideTablet} ${hideMobile} premium-banner-${block_id}`}
            style={{
                paddingTop: paddingT + containerStyles[0].paddingU,
                paddingRight: paddingR + containerStyles[0].paddingU,
                paddingBottom: paddingB + containerStyles[0].paddingU,
                paddingLeft: paddingL + containerStyles[0].paddingU
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
};

export default save;
