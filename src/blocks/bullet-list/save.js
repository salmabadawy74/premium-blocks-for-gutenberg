import classnames from "classnames"

const {
    RichText
} = wp.blockEditor

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        layoutPos,
        iconPosition,
        align,
        repeaterBulletList,
        bulletAlign,
        bulletIconStyles,
        bulletIconBorderUpdated,
        bulletIconBorderTop,
        bulletIconBorderRight,
        bulletIconBorderBottom,
        bulletIconBorderLeft,
        bulletIconBorderWidth,
        titleStyles,
        generalStyles,
        generalBorderWidth,
        generalBorderTop,
        generalBorderRight,
        generalBorderBottom,
        generalBorderLeft,
        generalBorderUpdated,
        titleFont
    } = attributes

    return (
        <div className={classnames(
            className,
            `premium-bullet-list-${block_id}`
        )}
            id={`premium-bullet-list-${block_id}`}
            style={{
                textAlign: align,
            }}>
            <style
                dangerouslySetInnerHTML={{
                    __html: [
                        `.premium-bullet-list__content-icon i:hover {`,
                        `color: ${bulletIconStyles[0].bulletIconHoverColor} !important;`,
                        `background-color: ${bulletIconStyles[0].bulletIconHoverBackgroundColor} !important;`,
                        "}",
                        `.premium-bullet-list__label-wrap .premium-bullet-list__label:hover {`,
                        `color: ${titleStyles[0].titleHoverColor} !important;`,
                        "}",
                        `.premium-bullet-list__wrapper:hover {`,
                        `background-color: ${generalStyles[0].generalHoverBackgroundColor} !important;`,
                        `box-shadow: ${generalStyles[0].generalHoverShadowHorizontal}px ${generalStyles[0].generalHoverShadowVertical}px ${generalStyles[0].generalHoverShadowBlur}px ${generalStyles[0].generalHoverShadowColor} ${generalStyles[0].generalHoverShadowPosition} !important;`,
                        "}",
                    ].join("\n")
                }}
            />
            <ul className={`premium-bullet-list-${layoutPos} premium-bullet-list`}
                style={{
                    textAlign: align,
                    justifyContent: align == "right" ? "flex-end" : align
                }}>
                {
                    repeaterBulletList.map((icon, index) => {

                        let image_icon_html = ""
                        if (icon.showBulletIcon) {
                            if (icon.image_icon == "icon") {
                                if (icon.icon) {
                                    image_icon_html = <span className="premium-bullet-list__content-icon">
                                        <i
                                            className={`${icon.icon}`}
                                            style={{
                                                color: bulletIconStyles[0].bulletIconColor,
                                                backgroundColor: bulletIconStyles[0].bulletIconBackgroundColor,
                                                borderStyle: bulletIconStyles[0].bulletIconborderType,
                                                borderWidth: bulletIconBorderUpdated
                                                    ? `${bulletIconBorderTop}px ${bulletIconBorderRight}px ${bulletIconBorderBottom}px ${bulletIconBorderLeft}px`
                                                    : bulletIconBorderWidth + "px",
                                                borderRadius: bulletIconStyles[0].bulletIconborderRadius || 0 + "px",
                                                borderColor: bulletIconStyles[0].bulletIconborderColor,
                                            }}
                                        />
                                    </span>
                                }
                            } else {
                                if (icon.image) {
                                    image_icon_html = <img
                                        src={icon.image.url}
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            borderStyle: bulletIconStyles[0].bulletIconborderType,
                                            borderWidth: bulletIconBorderUpdated
                                                ? `${bulletIconBorderTop}px ${bulletIconBorderRight}px ${bulletIconBorderBottom}px ${bulletIconBorderLeft}px`
                                                : bulletIconBorderWidth + "px",
                                            borderRadius: bulletIconStyles[0].bulletIconborderRadius || 0 + "px",
                                            borderColor: bulletIconStyles[0].bulletIconborderColor,
                                        }}
                                    />
                                }
                            }
                        }

                        let target = (icon.linkTarget) ? "_blank" : "_self"
                        let link_url = (icon.disableLink) ? icon.link : "/"

                        if (!icon.disableLink) {
                            return (
                                <li
                                    className={classnames(
                                        `premium-bullet-list-content${index}`,
                                        "premium-bullet-list__wrapper"
                                    )}
                                    key={index}
                                    style={{
                                        textAlign: align,
                                        justifyContent: align == "right" ? "flex-end" : align,
                                        backgroundColor: generalStyles[0].generalBackgroundColor,
                                        borderStyle: generalStyles[0].generalborderType,
                                        borderWidth: generalBorderUpdated
                                            ? `${generalBorderTop}px ${generalBorderRight}px ${generalBorderBottom}px ${generalBorderLeft}px`
                                            : generalBorderWidth + "px",
                                        borderRadius: generalStyles[0].generalborderRadius || 0 + "px",
                                        borderColor: generalStyles[0].generalborderColor,
                                        boxShadow: `${generalStyles[0].generalShadowHorizontal}px ${generalStyles[0].generalShadowVertical}px ${generalStyles[0].generalShadowBlur}px ${generalStyles[0].generalShadowColor} ${generalStyles[0].generalShadowPosition}`,
                                    }}
                                >
                                    <div className={`premium-bullet-list__content-wrap premium-bullet-list__content-wrap-${bulletAlign}`} style={{
                                        justifyContent: align == "right" ? align : align,
                                        display: iconPosition == "before" ? "flex" : "inline-flex",
                                        flexDirection: iconPosition == "top" ? align == "right" ? "column" : "column" : iconPosition == "after" ? align == "right" ? "row-reverse" : "row-reverse" : align == "right" ? "row-reverse" : "",
                                    }}>
                                        <span className="premium-bullet-list__icon-wrap"
                                            style={{
                                                overflow: repeaterBulletList[index].image_icon == 'image' ? "hidden" : "",
                                                alignSelf: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                textAlign: bulletAlign,
                                                justifyContent: bulletAlign,
                                                alignItems: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                            }}
                                        >{image_icon_html}</span>
                                        <div className="premium-bullet-list__label-wrap">
                                            <RichText.Content
                                                tagName="span"
                                                value={repeaterBulletList[index].label}
                                                className='premium-bullet-list__label'
                                                style={{
                                                    fontFamily: titleFont,
                                                    fontWeight: titleStyles[0].titleWeight,
                                                    letterSpacing: titleStyles[0].titleLetter + "px",
                                                    lineHeight: titleStyles[0].titleLine + "px",
                                                    fontStyle: titleStyles[0].titleStyle,
                                                    textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                                    fontFamily: titleStyles[0].titleFontFamily,
                                                    color: titleStyles[0].titleColor,
                                                    textShadow: `${titleStyles[0].titleshadowHorizontal}px ${titleStyles[0].titleshadowVertical}px ${titleStyles[0].titleshadowBlur}px ${titleStyles[0].titleshadowColor}`,
                                                }} />
                                        </div>
                                    </div>
                                </li>
                            )
                        } else {

                            return (
                                <ul>
                                    <li>
                                        <a
                                            className={classnames(
                                                `premium-bullet-list-content${index}`,
                                                "premium-bullet-list__wrapper"
                                            )}
                                            key={index}
                                            target={target}
                                            rel="noopener noreferrer"
                                            href={link_url}
                                            style={{
                                                textAlign: align,
                                                justifyContent: align == "right" ? "flex-end" : align,
                                                backgroundColor: generalStyles[0].generalBackgroundColor,
                                                borderStyle: generalStyles[0].generalborderType,
                                                borderWidth: generalBorderUpdated
                                                    ? `${generalBorderTop}px ${generalBorderRight}px ${generalBorderBottom}px ${generalBorderLeft}px`
                                                    : generalBorderWidth + "px",
                                                borderRadius: generalStyles[0].generalborderRadius || 0 + "px",
                                                borderColor: generalStyles[0].generalborderColor,
                                                boxShadow: `${generalStyles[0].generalShadowHorizontal}px ${generalStyles[0].generalShadowVertical}px ${generalStyles[0].generalShadowBlur}px ${generalStyles[0].generalShadowColor} ${generalStyles[0].generalShadowPosition}`,
                                            }}
                                        >
                                            <div className="premium-bullet-list__content-wrap" style={{
                                                justifyContent: align == "right" ? align : align,
                                                display: iconPosition == "before" ? "flex" : "inline-flex",
                                                flexDirection: iconPosition == "top" ? align == "right" ? "column" : "column" : iconPosition == "after" ? align == "right" ? "row-reverse" : "row-reverse" : align == "right" ? "row-reverse" : ""
                                            }}>
                                                <span className="premium-bullet-list__icon-wrap"
                                                    style={{
                                                        overflow: repeaterBulletList[index].image_icon == 'image' ? "hidden" : "",
                                                        alignSelf: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                        textAlign: bulletAlign,
                                                        justifyContent: bulletAlign,
                                                        alignItems: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                    }}
                                                >{image_icon_html}</span>
                                                <div className="premium-bullet-list__label-wrap">
                                                    <RichText.Content
                                                        tagName="span"
                                                        value={repeaterBulletList[index].label}
                                                        className='premium-bullet-list__label'
                                                        style={{
                                                            fontFamily: titleFont,
                                                            fontWeight: titleStyles[0].titleWeight,
                                                            letterSpacing: titleStyles[0].titleLetter + "px",
                                                            lineHeight: titleStyles[0].titleLine + "px",
                                                            fontStyle: titleStyles[0].titleStyle,
                                                            textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                                            fontFamily: titleStyles[0].titleFontFamily,
                                                            color: titleStyles[0].titleColor,
                                                            textShadow: `${titleStyles[0].titleshadowHorizontal}px ${titleStyles[0].titleshadowVertical}px ${titleStyles[0].titleshadowBlur}px ${titleStyles[0].titleshadowColor}`,
                                                        }} />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            )
                        }

                    })
                }
            </ul>
        </div>
    )
}