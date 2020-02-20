import classnames from "classnames"

const {
    RichText
} = wp.blockEditor

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        icons,
        multiTitleCount,
        layoutPos,
        linkTarget,
        align,
        size,
        titleSize,
        titleLetter,
        titleStyle,
        titleUpper,
        titleWeight,
        titleFont,
        borderType,
        borderWidth,
        borderRadius,
        borderColor,
        iconSpacing,
        titlePadding,
        itemMarginL,
        itemMarginR,
        itemMarginT,
        itemMarginB,
        iconPosition
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
            <div className={`premium-icon-list-${layoutPos}`}
                style={{
                    textAlign: align,
                    justifyContent: align == "right" ? "flex-end" : align
                }}>
                {
                    icons.map((icon, index) => {

                        if (multiTitleCount <= index) {
                            return
                        }
                        let image_icon_html = ""
                        if (icon.image_icon == "icon") {
                            if (icon.icon) {
                                image_icon_html = <span className="premium-icon-list__content-icon"
                                    style={{
                                        width: size,
                                        height: size,
                                    }}
                                >
                                    <i className={`${icon.icon}`} style={{
                                        width: size,
                                        height: size,
                                        fontSize: size,
                                    }} />
                                </span>
                            }
                        } else {
                            if (icon.image) {
                                image_icon_html = <img src={icon.image.url} style={{ width: size }} />
                            }
                        }

                        let target = (linkTarget) ? "_blank" : "_self"
                        let link_url = (!icon.disableLink) ? icon.link : "/"

                        if (icon.disableLink) {
                            return (
                                <div
                                    className={classnames(
                                        `premium-icon-list-content${index}`,
                                        "premium-icon-list__wrapper"
                                    )}
                                    key={index}
                                    style={{
                                        padding: titlePadding + "px"
                                    }}
                                >
                                    <div className="premium-icon-list__content-wrap" style={{
                                        flexDirection: align == "right" ? 'row-reverse' : "",
                                        justifyContent: align == "right" ? align : align,
                                        marginLeft: layoutPos == 'block' ? "" : itemMarginL / 2 + "px",
                                        marginRight: layoutPos == 'block' ? "" : itemMarginR / 2 + "px",
                                        marginTop: layoutPos == 'block' ? itemMarginT + "px" : "",
                                        marginBottom: layoutPos == 'block' ? itemMarginB + "px" : "",
                                        display: iconPosition == "left" ? "flex" : "inline-flex",
                                        flexDirection: iconPosition == "top" ? "column" : iconPosition == "right" ? "row-reverse" : ""
                                    }}>
                                        <span className="premium-icon-list__icon-wrap"
                                            style={{
                                                marginRight: iconPosition == "left" ? iconSpacing + "px" : "",
                                                marginLeft: iconPosition == "right" ? iconSpacing + "px" : "",
                                                marginBottom: iconPosition == "top" ? iconSpacing + "px" : "",
                                                borderStyle: borderType,
                                                borderWidth: borderWidth + "px",
                                                borderRadius: borderRadius || 100 + "px",
                                                borderColor: borderColor
                                            }}
                                        >{image_icon_html}</span>
                                        <div className="premium-icon-list__label-wrap">
                                            <RichText.Content
                                                tagName="span"
                                                value={icons[index].label}
                                                className='premium-icon-list__label'
                                                style={{
                                                    fontSize: titleSize + "px",
                                                    fontFamily: titleFont,
                                                    letterSpacing: titleLetter + "px",
                                                    textTransform: titleUpper ? "uppercase" : "none",
                                                    fontStyle: titleStyle,
                                                    fontWeight: titleWeight
                                                }} />

                                        </div>
                                    </div>
                                </div>
                            )
                        } else {

                            return (
                                <a
                                    className={classnames(
                                        `premium-icon-list-content${index}`,
                                        "premium-icon-list__wrapper"
                                    )}
                                    style={{
                                        padding: titlePadding + "px"
                                    }}
                                    key={index}
                                    target={target}
                                    rel="noopener noreferrer"
                                    href={link_url}
                                >
                                    <div className="premium-icon-list__content-wrap" style={{
                                        flexDirection: align == "right" ? 'row-reverse' : "",
                                        justifyContent: align == "right" ? align : align,
                                        marginLeft: layoutPos == 'block' ? "" : itemMarginL / 2 + "px",
                                        marginRight: layoutPos == 'block' ? "" : itemMarginR / 2 + "px",
                                        marginTop: layoutPos == 'block' ? itemMarginT + "px" : "",
                                        marginBottom: layoutPos == 'block' ? itemMarginB + "px" : "",
                                    }}>
                                        <span className="premium-icon-list__icon-wrap"
                                            style={{
                                                marginRight: iconSpacing + "px",
                                                borderStyle: borderType,
                                                borderWidth: borderWidth + "px",
                                                borderRadius: borderRadius || 100 + "px",
                                                borderColor: borderColor
                                            }}
                                        >{image_icon_html}</span>
                                        <div className="premium-icon-list__label-wrap">
                                            <RichText.Content
                                                tagName="span"
                                                value={icons[index].label}
                                                className='premium-icon-list__label'
                                                style={{
                                                    fontSize: titleSize + "px",
                                                    fontFamily: titleFont,
                                                    letterSpacing: titleLetter + "px",
                                                    textTransform: titleUpper ? "uppercase" : "none",
                                                    fontStyle: titleStyle,
                                                    fontWeight: titleWeight
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