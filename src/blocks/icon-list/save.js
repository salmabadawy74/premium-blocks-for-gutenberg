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
                                image_icon_html = <span className="premium-icon-list__content-icon">
                                    <i className={`${icon.icon}`} />
                                </span>
                            }
                        } else {
                            if (icon.image) {
                                image_icon_html = <img src={icon.image.url} />
                            }
                        }

                        let target = (linkTarget) ? "_blank" : "_self"
                        let link_url = (icon.disableLink) ? icon.link : "/"

                        if (!icon.disableLink) {
                            return (
                                <div
                                    className={classnames(
                                        `premium-icon-list-content${index}`,
                                        "premium-icon-list__wrapper"
                                    )}
                                    key={index}
                                >
                                    <div className="premium-icon-list__content-wrap" style={{
                                        justifyContent: align == "right" ? align : align,
                                        display: iconPosition == "left" ? "flex" : "inline-flex",
                                        flexDirection: iconPosition == "top" ? align == "right" ? "column" : "column" : iconPosition == "right" ? align == "right" ? "row-reverse" : "row-reverse" : align == "right" ? "row-reverse" : ""
                                    }}>
                                        <span className="premium-icon-list__icon-wrap"
                                            style={{
                                                marginRight: iconPosition == "left" ? iconSpacing + "px" : "",
                                                marginLeft: iconPosition == "right" ? iconSpacing + "px" : "",
                                                marginBottom: iconPosition == "top" ? iconSpacing + "px" : "",
                                                borderStyle: borderType,
                                                borderWidth: borderWidth + "px",
                                                borderRadius: borderRadius || 0 + "px",
                                                borderColor: borderColor,
                                                overflow: icons[index].image_icon == 'image' ? "hidden" : ""
                                            }}
                                        >{image_icon_html}</span>
                                        <div className="premium-icon-list__label-wrap">
                                            <RichText.Content
                                                tagName="span"
                                                value={icons[index].label}
                                                className='premium-icon-list__label'
                                                style={{
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
                                    key={index}
                                    target={target}
                                    rel="noopener noreferrer"
                                    href={link_url}
                                >
                                    <div className="premium-icon-list__content-wrap" style={{
                                        justifyContent: align == "right" ? align : align,
                                        display: iconPosition == "left" ? "flex" : "inline-flex",
                                        flexDirection: iconPosition == "top" ? align == "right" ? "column" : "column" : iconPosition == "right" ? align == "right" ? "row-reverse" : "row-reverse" : align == "right" ? "row-reverse" : ""
                                    }}>
                                        <span className="premium-icon-list__icon-wrap"
                                            style={{
                                                marginRight: iconPosition == "left" ? iconSpacing + "px" : "",
                                                marginLeft: iconPosition == "right" ? iconSpacing + "px" : "",
                                                marginBottom: iconPosition == "top" ? iconSpacing + "px" : "",
                                                borderStyle: borderType,
                                                borderWidth: borderWidth + "px",
                                                borderRadius: borderRadius || 0 + "px",
                                                borderColor: borderColor,
                                                overflow: icons[index].image_icon == 'image' ? "hidden" : ""
                                            }}
                                        >{image_icon_html}</span>
                                        <div className="premium-icon-list__label-wrap">
                                            <RichText.Content
                                                tagName="span"
                                                value={icons[index].label}
                                                className='premium-icon-list__label'
                                                style={{
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