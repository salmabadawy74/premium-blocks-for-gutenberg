import classnames from 'classnames'
import hexToRgba from 'hex-to-rgba'

const { InnerBlocks } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        block_id,
        isUpdated,
        stretchSection,
        horAlign,
        innerWidthType,
        innerWidth,
        height,
        vPos,
        minHeight,
        minHeightUnit,
        color,
        opacity,
        imageURL,
        fixed,
        backgroundRepeat,
        backgroundPosition,
        backgroundSize,
        borderType,
        borderWidth,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
        borderColor,
        borderRadius,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowPosition,
        hideDesktop,
        hideTablet,
        hideMobile
    } = props.attributes;


    const mainClasses = classnames(className, 'premium-container');

    return (
        <div id={`premium-container-${block_id}`}
            className={`${mainClasses} premium-container-${block_id} premium-container__stretch_${stretchSection} premium-container__${innerWidthType} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                textAlign: horAlign,
                minHeight:
                    "fit" === height ? "100vh" : minHeight + minHeightUnit,
                backgroundColor: color
                    ? hexToRgba(color, opacity)
                    : "transparent",
                borderStyle: borderType,
                borderWidth: isUpdated
                    ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                    : borderWidth + "px",
                borderRadius: borderRadius + "px",
                borderColor: borderColor,
                backgroundImage: `url('${imageURL}')`,
                backgroundRepeat: backgroundRepeat,
                backgroundPosition: backgroundPosition,
                backgroundSize: backgroundSize,
                backgroundAttachment: fixed ? "fixed" : "unset",
                boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
            }}
        >
            <div
                className={`premium-container__content_wrap premium-container__${vPos}`}
                style={{
                    maxWidth:
                        "boxed" == innerWidthType && stretchSection
                            ? innerWidth
                                ? innerWidth + "px"
                                : "1140px"
                            : "100%"
                }}
            >
                <div className={`premium-container__content_inner`}>
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
};

export default save;
