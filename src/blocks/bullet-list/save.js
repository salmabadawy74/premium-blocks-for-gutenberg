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
        bulletIconmarginT,
        bulletIconmarginR,
        bulletIconmarginB,
        bulletIconmarginL,
        bulletIconmarginTTablet,
        bulletIconmarginRTablet,
        bulletIconmarginBTablet,
        bulletIconmarginLTablet,
        bulletIconmarginTMobile,
        bulletIconmarginRMobile,
        bulletIconmarginBMobile,
        bulletIconmarginLMobile,
        bulletIconmarginType,
        bulletIconpaddingUnit,
        bulletIconpaddingTop,
        bulletIconpaddingRight,
        bulletIconpaddingBottom,
        bulletIconpaddingLeft,
        bulletIconpaddingTTablet,
        bulletIconpaddingRTablet,
        bulletIconpaddingBTablet,
        bulletIconpaddingLTablet,
        bulletIconpaddingTMobile,
        bulletIconpaddingRMobile,
        bulletIconpaddingBMobile,
        bulletIconpaddingLMobile,
        titleStyles,
        titlemarginT,
        titlemarginR,
        titlemarginB,
        titlemarginL,
        titlemarginTTablet,
        titlemarginRTablet,
        titlemarginBTablet,
        titlemarginLTablet,
        titlemarginTMobile,
        titlemarginRMobile,
        titlemarginBMobile,
        titlemarginLMobile,
        titlemarginType,
        generalStyles,
        generalBorderWidth,
        generalBorderTop,
        generalBorderRight,
        generalBorderBottom,
        generalBorderLeft,
        generalBorderUpdated,
        generalmarginT,
        generalmarginR,
        generalmarginB,
        generalmarginL,
        generalmarginTTablet,
        generalmarginRTablet,
        generalmarginBTablet,
        generalmarginLTablet,
        generalmarginTMobile,
        generalmarginRMobile,
        generalmarginBMobile,
        generalmarginLMobile,
        generalmarginType,
        generalpaddingUnit,
        generalpaddingTop,
        generalpaddingRight,
        generalpaddingBottom,
        generalpaddingLeft,
        generalpaddingTTablet,
        generalpaddingRTablet,
        generalpaddingBTablet,
        generalpaddingLTablet,
        generalpaddingTMobile,
        generalpaddingRMobile,
        generalpaddingBMobile,
        generalpaddingLMobile,
        titleFont
    } = attributes

    return (
        <div className={classnames(
            className,
            `premium-block-${block_id}`
        )}
            id={`premium-block-${block_id}`}
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
            <div className={`premium-bullet-list-${layoutPos}`}
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
                                                // fontSize: BulletIconSize + bulletIconStyles[0].bulletListfontSizeType,
                                                color: bulletIconStyles[0].bulletIconColor,
                                                backgroundColor: bulletIconStyles[0].bulletIconBackgroundColor,
                                                // paddingTop: BulletIconPaddingTop + bulletIconpaddingUnit,
                                                // paddingBottom: BulletIconPaddingBottom + bulletIconpaddingUnit,
                                                // paddingLeft: BulletIconPaddingLeft + bulletIconpaddingUnit,
                                                // paddingRight: BulletIconPaddingRight + bulletIconpaddingUnit,
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
                                            // width: BulletIconSize + bulletIconStyles[0].bulletListfontSizeType,
                                            // height: BulletIconSize + bulletIconStyles[0].bulletListfontSizeType,
                                            // paddingTop: BulletIconPaddingTop + bulletIconpaddingUnit,
                                            // paddingBottom: BulletIconPaddingBottom + bulletIconpaddingUnit,
                                            // paddingLeft: BulletIconPaddingLeft + bulletIconpaddingUnit,
                                            // paddingRight: BulletIconPaddingRight + bulletIconpaddingUnit,
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
                                <div
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
                                        // paddingTop: GeneralPaddingTop + generalpaddingUnit,
                                        // paddingBottom: GeneralPaddingBottom + generalpaddingUnit,
                                        // paddingLeft: GeneralPaddingLeft + generalpaddingUnit,
                                        // paddingRight: GeneralPaddingRight + generalpaddingUnit,
                                        // marginTop: GeneralMarginTop + generalmarginType,
                                        // marginBottom: GeneralMarginBottom + generalmarginType,
                                        // marginLeft: GeneralMarginLeft + generalmarginType,
                                        // marginRight: GeneralMarginRight + generalmarginType,
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
                                                // borderStyle: borderType,
                                                // borderWidth: borderWidth + "px",
                                                // borderRadius: borderRadius || 0 + "px",
                                                // borderColor: borderColor,
                                                overflow: repeaterBulletList[index].image_icon == 'image' ? "hidden" : "",
                                                alignSelf: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                // marginTop: BulletIconMarginTop + bulletIconmarginType,
                                                // marginBottom: BulletIconMarginBottom + bulletIconmarginType,
                                                // marginLeft: BulletIconMarginLeft + bulletIconmarginType,
                                                // marginRight: BulletIconMarginRight + bulletIconmarginType,
                                                textAlign: bulletAlign,
                                                justifyContent: bulletAlign,
                                            }}
                                        >{image_icon_html}</span>
                                        <div className="premium-bullet-list__label-wrap">
                                            <RichText.Content
                                                tagName="span"
                                                value={repeaterBulletList[index].label}
                                                className='premium-bullet-list__label'
                                                style={{
                                                    fontFamily: titleFont,
                                                    // fontSize: TitleSize + titleStyles[0].titlefontSizeType,
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
                                </div>
                            )
                        } else {

                            return (
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
                                        // paddingTop: GeneralPaddingTop + generalpaddingUnit,
                                        // paddingBottom: GeneralPaddingBottom + generalpaddingUnit,
                                        // paddingLeft: GeneralPaddingLeft + generalpaddingUnit,
                                        // paddingRight: GeneralPaddingRight + generalpaddingUnit,
                                        // marginTop: GeneralMarginTop + generalmarginType,
                                        // marginBottom: GeneralMarginBottom + generalmarginType,
                                        // marginLeft: GeneralMarginLeft + generalmarginType,
                                        // marginRight: GeneralMarginRight + generalmarginType,
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
                                                // borderStyle: borderType,
                                                // borderWidth: borderWidth + "px",
                                                // borderRadius: borderRadius || 0 + "px",
                                                // borderColor: borderColor,
                                                overflow: repeaterBulletList[index].image_icon == 'image' ? "hidden" : "",
                                                alignSelf: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                // marginTop: BulletIconMarginTop + bulletIconmarginType,
                                                // marginBottom: BulletIconMarginBottom + bulletIconmarginType,
                                                // marginLeft: BulletIconMarginLeft + bulletIconmarginType,
                                                // marginRight: BulletIconMarginRight + bulletIconmarginType,
                                                textAlign: bulletAlign,
                                                justifyContent: bulletAlign,
                                            }}
                                        >{image_icon_html}</span>
                                        <div className="premium-bullet-list__label-wrap">
                                            <RichText.Content
                                                tagName="span"
                                                value={repeaterBulletList[index].label}
                                                className='premium-bullet-list__label'
                                                style={{
                                                    fontFamily: titleFont,
                                                    // fontSize: TitleSize + titleStyles[0].titlefontSizeType,
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
                            )
                        }

                    })
                }
            </div>
        </div>
    )
}