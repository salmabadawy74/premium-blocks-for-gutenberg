import classnames from "classnames";

export default function save(props) {

    const { className } = props

    const {
        blockId,
        align,
        iconType,
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
        imgFit,
        imgMaskURL,
        maskSize,
        maskPosition,
        iconBorder,
        iconShadow,
        hideDesktop,
        hideTablet,
        hideMobile
    } = props.attributes

    let target = (linkTarget) ? "_blank" : "_self"
    const mainClasses = classnames(className, 'premium-image-separator', blockId);

    const renderCss = (<style>
        {`
            .${blockId} .premium-image-separator-container {
                text-align: ${align[props.deviceType]};
            }
            .${blockId} .premium-image-separator-container:hover img{
                filter:  brightness( ${brightHover}% ) contrast( ${contrastHover}% ) saturate( ${saturationHover}% ) blur( ${blurHover}px ) hue-rotate( ${hueHover}deg ) !important ;
            }
            .${blockId} .premium-image-separator-container i:hover {
                color: ${iconStyles[0].iconColorHover} !important;
                background-color: ${iconStyles[0].iconBGColorHover} !important;
            }
        `}
    </style>
    )

    return (
        <div
            className={`${mainClasses} ${blockId} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{ textAlign: align[props.deviceType] || 'center' }}
        >
            {renderCss}
            <div className={`premium-image-separator-container`} style={{
                textAlign: align[props.deviceType] || 'center',
                transform: `translateY(${gutter}%)`,
                filter: iconType === 'image' ? `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )` : ""
            }}
            >
                <a className="premium-image-separator-link" href={link && url} target={target} rel="noopener noreferrer">
                    {
                        iconType === 'icon' && <i className={`${iconStyles[0].icon}`} style={{
                            color: iconStyles[0].iconColor,
                            backgroundColor: iconStyles[0].iconBGColor,
                            borderColor: iconBorder.borderColor,
                            borderStyle: iconBorder.borderType,
                            textShadow: `${iconShadow.horizontal || 0}px ${iconShadow.vertical ||
                                0}px ${iconShadow.blur || 0}px ${iconShadow.color}`,
                        }} />
                    }
                    {
                        iconType === 'image' && < img
                            src={imageURL}
                            style={{
                                borderColor: iconBorder.borderColor,
                                borderStyle: iconBorder.borderType,
                                maskSize: `${maskSize}`,
                                maskPosition: `${maskPosition}`,
                                maskImage: imgMaskURL ? `url("${imgMaskURL}")` : '',
                                WebkitMaskImage: imgMaskURL ? `url("${imgMaskURL}")` : '',
                                WebkitMaskSize: `${maskSize}`,
                                WebkitMaskPosition: `${maskPosition}`,
                                objectFit: `${imgFit}`,
                            }} />
                    }
                </a>
            </div>
        </div>
    )
}