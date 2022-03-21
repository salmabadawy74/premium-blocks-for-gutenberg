import classnames from "classnames"

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        align,
        iconType,
        icon,
        imageURL,
        imageID,
        link,
        url,
        gutter,
        blur,
        bright,
        contrast,
        saturation,
        hue,
        blurHover,
        brightHover,
        contrastHover,
        saturationHover,
        hueHover,
        linkTarget,
        iconStyles,
        imgHeight,
        imgHeightTablet,
        imgHeightMobile,
        imgHeightType,
        imgFit,
        advancedBorder,
        advancedBorderValue

    } = attributes

    let target = (linkTarget) ? "_blank" : "_self"

    return (
        <div
            className={
                classnames(className,
                    `premium-block-${block_id}`
                )}
            style={{ textAlign: align }} >
            <div className={`premium-image-separator-container`} style={{
                textAlign: align,
                transform: `translateY(${gutter}%)`,
                filter: iconType === 'image' ? `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )` : ""
            }}
            >
                {
                    iconType === 'icon' && <i className={`${icon}`} style={{
                        color: iconStyles[0].iconColor,
                        backgroundColor: iconStyles[0].iconBGColor,
                        textShadow: `${iconStyles[0].iconShadowHorizontal}px ${iconStyles[0].iconShadowVertical}px ${iconStyles[0].iconShadowBlur}px ${iconStyles[0].iconShadowColor}`,
                    }} />
                }
                {
                    iconType === 'image' && < img src={imageURL} />
                }
                {link && <a className="premium-image-separator-link" href={`${url}`} target={target} rel="noopener noreferrer"></a>}
            </div>
        </div>
    )
}