/* eslint-disable react/react-in-jsx-scope */
const { Component, Fragment } = wp.element
const { InnerBlocks } = wp.blockEditor
import { animationAttr } from '../../components/HelperFunction'
import classnames from "classnames"
import { gradientBackground, videoBackground, borderCss, padddingCss, marginCss } from '../../components/HelperFunction'


const Save = (props) => {





    const { attributes: { block_id,
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
        blend },
    } = props
    const CustomTag = `${containerTag}`;
    const loadStyles = () => {
        const styles = {};
        const containerFullWidth = '100vw';

        styles[`.wp-block-uagb-container.uagb-block-${block_id}  .premium-top-shape svg`] = {
            'fill': `${shapeTop['color']}`,
        };
        styles[`.wp-block-uagb-container.uagb-block-${block_id} .premium-bottom-shape svg`] = {
            'fill': `${shapeBottom['color']}`,
        };
        if ('boxed' === innerWidthType) {
            styles[`.wp-block-uagb-container.uagb-is-root-container.uagb-block-${block_id}`] = {
                '--inner-content-custom-width': `min(${containerFullWidth}, ${innerWidth}px)`,
                'max-width': 'var(--inner-content-custom-width)',
                'margin-left': 'auto',
                'margin-right': 'auto'
            }

        }
        let styleCss = '';
        for (const selector in styles) {
            const selectorStyles = styles[selector];
            const filteredStyles = Object.keys(selectorStyles).map(property => {
                const value = selectorStyles[property];
                const valueWithoutUnits = value ? value.toString().replaceAll('px', '').replaceAll(/\s/g, '') : '';
                if (value && !value.toString().includes('undefined')) {
                    return `${property}: ${value}; `;
                }
            }).filter(style => !!style).join('\n');
            styleCss += `${selector} {
                ${filteredStyles}
            } \n`;
        }
        return styleCss;
    }
    const topShapeClasses = classnames(
        'premium-shape-divider',
        'premium-top-shape',
        { 'premium-top-shape-flip': shapeTop['flipShapeDivider'] === true },
        { 'premium-shape-above-content': shapeTop['front'] === true },
        { 'premium-shape__invert': shapeTop['invertShapeDivider'] === true }
    )
    const bottomShapeClasses = classnames(
        'premium-shape-divider',
        'premium-bottom-shape',
        { 'premium-shape-flip': shapeBottom['flipShapeDivider'] === true },
        { 'premium-shape-above-content': shapeBottom['front'] === true },
        { 'premium-shape__invert': shapeBottom['invertShapeDivider'] === true }
    )
    console.log(shapeTop)
    return (
        <Fragment>
            <style
                dangerouslySetInnerHTML={{
                    __html: loadStyles()
                }}
            />

            <CustomTag
                className={classnames(
                    'wp-block-uagb-container',
                    `uagb - block - ${block_id} `,
                    `premium - blocks - ${block_id} `,
                    isBlockRootParent ? 'uagb-is-root-container' : ''
                )}
                key={block_id}
                style={{
                    ...gradientBackground(backgroundOptions),
                    boxShadow: `${boxShadow.horizontal || 0} px ${boxShadow.vertical || 0} px ${boxShadow.blur || 0} px ${boxShadow.color} ${boxShadow.position} `,
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
                <div className={`premium - row__block_overlay`} style={{
                    ...gradientBackground(backgroundOverlay),
                    opacity: `${backgroundOverlay ? overlayOpacity / 100 : 1} `,
                    mixBlendMode: `${blend} !important`,
                    // filter: `brightness(${ overlayFilter['bright']} % ) contrast(${ overlayFilter['contrast']} % ) saturate(${ overlayFilter['saturation']} % ) blur(${ overlayFilter['blur']}px) hue - rotate(${ overlayFilter['hue']}deg)`
                }}></div>

                <InnerBlocks.Content
                />


            </CustomTag>
        </Fragment>
    )

}
export default Save