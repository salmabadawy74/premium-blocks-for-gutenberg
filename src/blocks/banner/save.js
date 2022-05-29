import classnames from 'classnames'

const { RichText } = wp.blockEditor;

const save = props => {
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
        border,
        titleTypography,
        descTypography,
        titleTextShadow,
        descTextShadow,
        containerShadow
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
                    boxShadow: `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position}`,
                    borderStyle: border && border.borderType,
                    borderColor: border && border.borderColor,
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
                                fontStyle: titleTypography.fontStyle,
                                fontFamily: titleTypography.fontFamily,
                                fontWeight: titleTypography.fontWeight,
                                letterSpacing: titleTypography.letterSpacing,
                                textDecoration: titleTypography.textDecoration,
                                textTransform: titleTypography.textTransform,
                                lineHeight: `${titleTypography.lineHeight}px`,
                                textShadow: `${titleTextShadow.horizontal}px ${titleTextShadow.vertical}px ${titleTextShadow.blur}px ${titleTextShadow.color}`,
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
                                fontStyle: descTypography.fontStyle,
                                fontFamily: descTypography.fontFamily,
                                fontWeight: descTypography.fontWeight,
                                letterSpacing: descTypography.letterSpacing,
                                textDecoration: descTypography.textDecoration,
                                textTransform: descTypography.textTransform,
                                lineHeight: `${descTypography.lineHeight}px`,
                                textShadow: `${descTextShadow.horizontal}px ${descTextShadow.vertical}px ${descTextShadow.blur}px ${descTextShadow.color}`,
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
