import classnames from "classnames"
const {
    Fragment,
} = wp.element

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
        bulletIconBorder,
        titleStyles,
        generalStyles,
        generalBorder,
        titleFont,
        dividerStyles,
        divider,
        dividerStyle,
        titlesTextShadow,
        boxShadow,
        hoverBoxShadow,
        titleTypography
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
                        `#premium-bullet-list-${block_id} .premium-bullet-list__content-icon i:hover {`,
                        `color: ${bulletIconStyles[0].bulletIconHoverColor} !important;`,
                        `background-color: ${bulletIconStyles[0].bulletIconHoverBackgroundColor} !important;`,
                        "}",
                        `#premium-bullet-list-${block_id} .premium-bullet-list__label-wrap .premium-bullet-list__label:hover {`,
                        `color: ${titleStyles[0].titleHoverColor} !important;`,
                        "}",
                        `#premium-bullet-list-${block_id} .premium-bullet-list__wrapper:hover {`,
                        `background-color: ${generalStyles[0].generalHoverBackgroundColor} !important;`,
                        `box-shadow: ${hoverBoxShadow.horizontal}px ${hoverBoxShadow.vertical}px ${hoverBoxShadow.blur}px ${hoverBoxShadow.color} ${hoverBoxShadow.position} !important;`,
                        "}",
                        `#premium-bullet-list-${block_id} .premium-bullet-list-divider-block:not(:last-child)::after {`,
                        `border-top-style: ${dividerStyle};`,
                        `border-top-color: ${dividerStyles[0].dividerColor};`,
                        "}",
                        `#premium-bullet-list-${block_id} .premium-bullet-list-divider-inline:not(:last-child)::after {`,
                        `border-left-style: ${dividerStyle};`,
                        `border-left-color: ${dividerStyles[0].dividerColor};`,
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
                                    image_icon_html = <span className="premium-bullet-list__content-icon" key={index}>
                                        <i
                                            className={`${icon.icon}`}
                                            style={{
                                                overflow: 'hidden',
                                                color: bulletIconStyles[0].bulletIconColor,
                                                backgroundColor: bulletIconStyles[0].bulletIconBackgroundColor,
                                                borderStyle: bulletIconBorder && bulletIconBorder.borderType,
                                                borderColor: bulletIconBorder && bulletIconBorder.borderColor,
                                                verticalAlign: bulletAlign == 'flex-start' ? 'top' : bulletAlign == 'flex-end' ? 'bottom' : 'middle'
                                            }}
                                        />
                                    </span>
                                }
                            } else {
                                if (icon.imageURL) {
                                    image_icon_html = <img
                                        src={icon.imageURL}
                                        key={index}
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            overflow: 'hidden',
                                            borderStyle: bulletIconBorder && bulletIconBorder.borderType,
                                            borderColor: bulletIconBorder && bulletIconBorder.borderColor,
                                            verticalAlign: bulletAlign == 'flex-start' ? 'top' : bulletAlign == 'flex-end' ? 'bottom' : 'middle'
                                        }}
                                    />
                                }
                            }
                        }

                        let target = (icon.linkTarget) ? "_blank" : "_self"
                        let link_url = (icon.disableLink) ? icon.link : "/"

                        if (!icon.disableLink) {
                            return (
                                <Fragment>
                                    <li
                                        className={classnames(
                                            `premium-bullet-list-content${index}`,
                                            "premium-bullet-list__wrapper"
                                        )}
                                        key={index}
                                        style={{
                                            textAlign: align,
                                            overflow: 'hidden',
                                            justifyContent: align == "right" ? "flex-end" : align,
                                            backgroundColor: generalStyles[0].generalBackgroundColor,
                                            borderStyle: generalBorder && generalBorder.borderType,
                                            borderColor: generalBorder && generalBorder.borderColor,
                                            boxShadow: `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.color} ${boxShadow.position}`,
                                        }}
                                    >
                                        <div className={`premium-bullet-list__content-wrap premium-bullet-list__content-wrap-${bulletAlign}`} style={{
                                            justifyContent: align == "right" ? align : align,
                                            display: iconPosition == "before" ? "flex" : "inline-flex",
                                            flexDirection: iconPosition == "top" ? align == "right" ? "column" : "column" : iconPosition == "after" ? 'row-reverse' : "",
                                        }}>
                                            <span className={`premium-bullet-list__icon-wrap`}
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
                                                        fontStyle: titleTypography.fontStyle,
                                                        fontFamily: titleTypography.fontFamily,
                                                        fontWeight: titleTypography.fontWeight,
                                                        letterSpacing: titleTypography.letterSpacing,
                                                        textDecoration: titleTypography.textDecoration,
                                                        textTransform: titleTypography.textTransform,
                                                        lineHeight: `${titleTypography.lineHeight}px`,
                                                        color: titleStyles[0].titleColor,
                                                        textShadow: `${titlesTextShadow.titleshadowHorizontal}px ${titlesTextShadow.titleshadowVertical}px ${titlesTextShadow.titleshadowBlur}px ${titlesTextShadow.titleshadowColor}`
                                                    }} />
                                            </div>
                                        </div>
                                    </li>
                                    {divider &&
                                        <div className={`premium-bullet-list-divider-${layoutPos}`}></div>
                                    }
                                </Fragment>
                            )
                        } else {

                            return (
                                <Fragment>
                                    <li
                                        className={classnames(
                                            `premium-bullet-list-content${index}`,
                                            "premium-bullet-list__wrapper"
                                        )}
                                        key={index}
                                        style={{
                                            listStyleType: 'none',
                                            overflow: 'hidden',
                                            textAlign: align,
                                            justifyContent: align == "right" ? "flex-end" : align,
                                            backgroundColor: generalStyles[0].generalBackgroundColor,
                                            borderStyle: generalBorder && generalBorder.borderType,
                                            borderColor: generalBorder && generalBorder.borderColor,
                                            boxShadow: `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.color} ${boxShadow.position}`,
                                        }}
                                    >
                                        <a
                                            href={link_url}
                                            target={target}
                                            rel="noopener noreferrer"
                                        >
                                            <div className={`premium-bullet-list__content-wrap premium-bullet-list__content-wrap-${bulletAlign}`} style={{
                                                justifyContent: align == "right" ? align : align,
                                                display: iconPosition == "before" ? "flex" : "inline-flex",
                                                flexDirection: iconPosition == "top" ? align == "right" ? "column" : "column" : iconPosition == "after" ? 'row-reverse' : "",
                                            }}>
                                                <span className={`premium-bullet-list__icon-wrap`}
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
                                                            textShadow: `${titlesTextShadow.titleshadowHorizontal}px ${titlesTextShadow.titleshadowVertical}px ${titlesTextShadow.titleshadowBlur}px ${titlesTextShadow.titleshadowColor}`
                                                        }} />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    {divider &&
                                        <div className={`premium-bullet-list-divider-${layoutPos}`}></div>
                                    }
                                </Fragment>
                            )
                        }

                    })
                }
            </ul>
        </div>
    )
}