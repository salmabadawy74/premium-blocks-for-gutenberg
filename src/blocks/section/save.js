import classnames from 'classnames'
import { filterJsCss, gradientBackground } from '../../components/HelperFunction';

const { InnerBlocks } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        stretchSection,
        innerWidthType,
        height,
        innerWidth,
        minHeight,
        minHeightUnit,
        vPos,
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        boxShadow,
        background,
        border
    } = props.attributes;

    const mainClasses = classnames(className, blockId, 'premium-container',
        {
            ' premium-desktop-hidden': hideDesktop,
            ' premium-tablet-hidden': hideTablet,
            ' premium-mobile-hidden': hideMobile,
        });

    return (
        <div
            className={`${mainClasses} premium-container__stretch_${stretchSection} premium-container__${innerWidthType} `}
            style={filterJsCss({
                minHeight: "fit" === height ? "100vh" : minHeight + minHeightUnit,
                ...gradientBackground(background),
                borderColor: border?.borderColor,
                borderStyle: border?.borderType,
                boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`
            })}
        >
            <div
                className={`premium-container__content_wrap premium-container__${vPos}`}
                style={filterJsCss({
                    maxWidth:
                        "boxed" == innerWidthType && stretchSection
                            ? innerWidth
                                ? innerWidth + "px"
                                : "1140px"
                            : "100%",
                    minHeight: "fit" === height ? "100vh" : minHeight + minHeightUnit,
                })}
            >
                <div className={`premium-container__content_inner`}>
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
};

export default save;