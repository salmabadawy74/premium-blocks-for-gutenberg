/* eslint-disable react/react-in-jsx-scope */
const { Component } = wp.element
const { InnerBlocks } = wp.blockEditor
import { animationAttr } from '../../components/HelperFunction'
import classnames from "classnames"


class Save extends Component {

    getClassName = () => {
        const {
            attributes: {
                align,
                childRow,
                rowContainerWidth
            }
        } = this.props;
        let wrapperClassName = '';

        if (typeof align !== 'undefined') {
            if (align === 'full' && rowContainerWidth === 'boxed') {
                wrapperClassName = 'qubely-container';
            } else {
                wrapperClassName = 'qubely-container-fluid';
            }
        } else {
            if (childRow) {
                wrapperClassName = 'qubely-container-fluid';
            } else {
                wrapperClassName = 'qubely-container';
            }
        }

        return wrapperClassName;
    }

    render() {
        const { attributes: { uniqueId,
            className,
            variationSelected,
            padding,
            margin,
            direction,
            alignItems,
            justifyItems,
            wrapItems,
            alignContent,
            shapeTop,
            shapeBottom,
            minHeight,
            colWidth,
            heightOptions,
            border,
            //animation
            animation,
            //global
            innerWidthType,
            innerWidth,
            columnGutter,
            rowGutter,
            backgroundOverlay,
            backgroundOverlayHover,
            overlayOpacity,
            overlayFilter,
            hoverOverlayOpacity,
            hoverOverlayFilter,
            backgroundOptions,
            boxShadow,
            isBlockRootParent,
            blockDescendants,
            containerTag,
            overflow,
            blend } } = this.props
        const CustomTag = `${containerTag}`;

        return (
            <CustomTag
                className={classnames(
                    'wp-block-uagb-container',
                    `uagb-block-${clientId}`,
                    `premium-blocks-${clientId}`
                )}
                key={uniqueId}
                style={{
                    ...borderCss(border, props.deviceType),
                    ...padddingCss(padding, props.deviceType),
                    ...marginCss(margin, props.deviceType),
                    ...gradientBackground(backgroundOptions),
                    boxShadow: `${boxShadow.horizontal || 0}px ${boxShadow.vertical || 0}px ${boxShadow.blur || 0}px ${boxShadow.color} ${boxShadow.position}`,
                    overflow: overflow
                }}
            >
                {(Object.entries(shapeTop).length > 1 && shapeTop.openShape == 1 && shapeTop.style) &&
                    <div className={topShapeClasses} dangerouslySetInnerHTML={{ __html: PremiumBlocksSettings.shapes[shapeTop.style] }} />
                }
                {videoBackground(backgroundOptions['backgroundType'], backgroundOptions.videoSource, backgroundOptions.videoURL, backgroundOptions.bgExternalVideo)}
                {(Object.entries(shapeBottom).length > 1 && shapeBottom.openShape == 1 && shapeBottom.style) &&
                    <div className={bottomShapeClasses} dangerouslySetInnerHTML={{ __html: PremiumBlocksSettings.shapes[shapeBottom.style] }} />
                }
                <div className={`premium-row__block_overlay`} style={{
                    ...gradientBackground(backgroundOverlay),
                    opacity: `${backgroundOverlay ? overlayOpacity / 100 : 1}`,
                    mixBlendMode: `${blend} !important`,
                    // filter: `brightness( ${overlayFilter['bright']}% ) contrast( ${overlayFilter['contrast']}% ) saturate( ${overlayFilter['saturation']}% ) blur( ${overlayFilter['blur']}px ) hue-rotate( ${overlayFilter['hue']}deg )`
                }}></div>
                <div className='uagb-container-inner-blocks-wrap'>
                    <InnerBlocks.Content
                    />
                </div>

            </CustomTag>
        )
    }
}
export default Save