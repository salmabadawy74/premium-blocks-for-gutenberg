import classnames from 'classnames'
import hexToRgba from 'hex-to-rgba'

const { InnerBlocks } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        stretchSection,
        innerWidthType,
        isUpdated,
        horAlign,
        height,
        innerWidth,
        minHeight,
        minHeightUnit,
        vPos,
        block_id,
        hideDesktop,
        hideTablet,
        hideMobile,
        containerStyles
    } = props.attributes;


    const mainClasses = classnames(className, 'premium-container');

    return (
        <div
            className={`${mainClasses} premium-container__stretch_${stretchSection} premium-container__${innerWidthType} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                textAlign: horAlign,
                minHeight:
                    "fit" === height ? "100vh" : minHeight + minHeightUnit,
                backgroundColor: containerStyles[0].color
                    ? hexToRgba(containerStyles[0].color, containerStyles[0].opacity)
                    : "transparent",
                borderStyle: containerStyles[0].borderType,
                borderWidth: isUpdated
                    ? `${containerStyles[0].borderTop}px ${containerStyles[0].borderRight}px ${containerStyles[0].borderBottom}px ${containerStyles[0].borderLeft}px`
                    : containerStyles[0].borderWidth + "px",
                borderRadius: containerStyles[0].borderRadius + "px",
                borderColor: containerStyles[0].borderColor,
                backgroundImage: containerStyles[0].imageURL ? `url('${containerStyles[0].imageURL}')` : 'none',
                backgroundRepeat: containerStyles[0].backgroundRepeat,
                backgroundPosition: containerStyles[0].backgroundPosition,
                backgroundSize: containerStyles[0].backgroundSize,
                backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                marginTop: containerStyles[0].marginTop + containerStyles[0].marginUnit,
                marginBottom: containerStyles[0].marginBottom + containerStyles[0].marginUnit,
                marginLeft: containerStyles[0].marginLeft + containerStyles[0].marginUnit,
                marginRight: containerStyles[0].marginRight + containerStyles[0].marginUnit,
                paddingTop: containerStyles[0].paddingTop + containerStyles[0].paddingUnit,
                paddingBottom: containerStyles[0].paddingBottom + containerStyles[0].paddingUnit,
                paddingLeft: containerStyles[0].paddingLeft + containerStyles[0].paddingUnit,
                paddingRight: containerStyles[0].paddingRight + containerStyles[0].paddingUnit,
                boxShadow: `${containerStyles[0].shadowHorizontal}px ${containerStyles[0].shadowVertical}px ${containerStyles[0].shadowBlur}px ${containerStyles[0].shadowColor} ${containerStyles[0].shadowPosition}`
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
