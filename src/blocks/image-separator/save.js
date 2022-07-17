import classnames from "classnames";

export default function save(props) {

    const { className } = props

    const {
        blockId,
        align,
        iconType,
        imageURL,
        link,
        url,
        gutter,
        imgFilter,
        imgFilterHover,
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
    const mainClasses = classnames(className, 'premium-image-separator', blockId, {
        ' premium-desktop-hidden': hideDesktop,
        ' premium-tablet-hidden': hideTablet,
        ' premium-mobile-hidden': hideMobile,
    });

    const renderCss = (<style>
        {`
            .${blockId} .premium-image-separator-container {
                text-align: ${align[props.deviceType]};
            }
            .${blockId} .premium-image-separator-container:hover img{
                    filter:  brightness( ${imgFilterHover?.bright}% ) contrast( ${imgFilterHover?.contrast}% ) saturate( ${imgFilterHover?.saturation}% ) blur( ${imgFilterHover?.blur}px ) hue-rotate( ${imgFilterHover?.hue}deg ) !important ;
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
            className={`${mainClasses} ${blockId} `}
        >
            {renderCss}
            <div className={`premium-image-separator-container`} style={{
                transform: `translateY(${gutter}%)`,
                filter: iconType === 'image' ? `brightness( ${imgFilter?.bright}% ) contrast( ${imgFilter?.contrast}% ) saturate( ${imgFilter?.saturation}% ) blur( ${imgFilter?.blur}px ) hue-rotate( ${imgFilter?.hue}deg )` : ""
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