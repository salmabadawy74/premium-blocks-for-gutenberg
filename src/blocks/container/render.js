import classnames from "classnames";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import React, { forwardRef } from "react";
import { select } from "@wordpress/data";
import {
    gradientBackground,
    videoBackground,
    borderCss,
    paddingCss,
    marginCss,
    gradientValue,
    generateCss,
} from "@pbg/helpers";
import {
    BlockContent
} from "@pbg/components";
const Render = forwardRef((props, ref) => {
    props = props.parentProps;
    const { attributes, clientId, className } = props;

    const {
        block_id,
        align,
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
        containerTag,
        overflow,
        blend,
        transition,
        hideDesktop,
        hideMobile,
        hideTablet,
    } = attributes;

    const moverDirection = "row" === direction ? "horizontal" : "vertical";
    const topShapeClasses = classnames(
        "premium-shape-divider",
        "premium-top-shape",
        { "premium-top-shape-flip": shapeTop["flipShapeDivider"] === true },
        { "premium-shape-above-content": shapeTop["front"] === true },
        { "premium-shape__invert": shapeTop["invertShapeDivider"] === true }
    );
    const bottomShapeClasses = classnames(
        "premium-shape-divider",
        "premium-bottom-shape",
        { "premium-shape-flip": shapeBottom["flipShapeDivider"] === true },
        { "premium-shape-above-content": shapeBottom["front"] === true },
        {
            "premium-shape__invert": shapeBottom["invertShapeDivider"] === true,
        }
    );

    const { getBlockOrder } = select("core/block-editor");
    const hasChildBlocks = getBlockOrder(clientId).length > 0;

    const CustomTag = `${containerTag}`;

    const hasChildren =
        0 !== select("core/block-editor").getBlocks(clientId).length;
    const blockProps = useBlockProps({
        className: classnames(
            "wp-block-premium-container",
            `premium-block-${block_id}`,
            `premium-blocks-${block_id}`,
            isBlockRootParent ? `${align} premium-is-root-container` : "",
            {
                " premium-desktop-hidden": hideDesktop,
                " premium-tablet-hidden": hideTablet,
                " premium-mobile-hidden": hideMobile,
            }
        ),
        ref
    });
    const loadStyles = () => {
        const styles = {};
        const containerFullWidth = "100vw";
        let containerFlexSelector = ` .editor-styles-wrapper #block-${clientId}.wp-block-premium-container > .premium-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout`;
        styles[containerFlexSelector] = {
            "min-height": `${minHeight[props.deviceType]}${minHeight["unit"]}`,
            "flex-direction": direction[props.deviceType],
            "align-items": alignItems[props.deviceType],
            "justify-content": justifyItems[props.deviceType],
            "flex-wrap": wrapItems[props.deviceType],
            "align-content": alignContent[props.deviceType],
            "row-gap": `${rowGutter[props.deviceType]}${rowGutter["unit"]}`,
            "column-gap": `${columnGutter[props.deviceType]}${columnGutter["unit"]
                }`,
        };

        styles[
            `.is-root-container > .block-editor-block-list__block .block-editor-block-list__block#block-${clientId} `
        ] = {
            "max-width": `${colWidth[props.deviceType]}${colWidth["unit"]}`,
            width: `${colWidth[props.deviceType]}${colWidth["unit"]}`,
        };
        styles[
            `.is-root-container  #block-${clientId}  .premium-top-shape svg`
        ] = {
            width: `${shapeTop.width[props.deviceType]}${shapeTop.width["unit"]
                }`,
            height: `${shapeTop.height[props.deviceType]}${shapeTop.height["unit"]
                }`,
            fill: `${shapeTop["color"]}`,
        };

        styles[
            `.is-root-container  #block-${clientId} .premium-bottom-shape svg`
        ] = {
            width: `${shapeBottom.width[props.deviceType]}${shapeBottom.width["unit"]
                }`,
            height: `${shapeBottom.height[props.deviceType]}${shapeBottom.height["unit"]
                }`,
            fill: `${shapeBottom["color"]}`,
        };

        if ("boxed" === innerWidthType) {
            styles[
                ` .is-root-container > .wp-block-premium-container.premium-block-${block_id} > .premium-container-inner-blocks-wrap`
            ] = {
                "--inner-content-custom-width": `min(${containerFullWidth},${innerWidth}px)`,
                "max-width": "var(--inner-content-custom-width)",
                "margin-left": "auto",
                "margin-right": "auto",
            };
        }
        styles[`.premium-blocks-${block_id} .premium-row__block_overlay `] = {
            "background-color": backgroundOverlay["backgroundColor"],
            "background-image": gradientValue(backgroundOverlay),
            "background-repeat": backgroundOverlay["backgroundRepeat"],
            "background-position": backgroundOverlay["backgroundPosition"],
            "background-size": backgroundOverlay["backgroundSize"],
            "background-attachment": backgroundOverlay["fixed"]
                ? "fixed"
                : "unset",
            opacity: `${backgroundOverlay ? overlayOpacity / 100 : 1} `,
            "mix-blend-mode": `${blend} !important`,
            filter: `brightness( ${overlayFilter["bright"]}% ) contrast( ${overlayFilter["contrast"]}% ) saturate( ${overlayFilter["saturation"]}% ) blur( ${overlayFilter["blur"]}px ) hue-rotate( ${overlayFilter["hue"]}deg ) `,
            "-webkit-transition": `${transition}s`,
            "-o-transition": `${transition}s`,
            transition: `${transition}s`,
        };
        styles[
            `.premium-blocks-${block_id}:hover .premium-row__block_overlay `
        ] = {
            "background-color": backgroundOverlayHover["backgroundColor"],
            "background-image": gradientValue(backgroundOverlayHover),
            "background-repeat": backgroundOverlayHover["backgroundRepeat"],
            "background-position": backgroundOverlayHover["backgroundPosition"],
            "background-size": backgroundOverlayHover["backgroundSize"],
            "background-attachment": backgroundOverlayHover["fixed"]
                ? "fixed"
                : "unset",
            opacity: `${backgroundOverlayHover ? hoverOverlayOpacity / 100 : 1
                } !important`,
            filter: `brightness( ${hoverOverlayFilter["bright"]}% ) contrast( ${hoverOverlayFilter["contrast"]}% ) saturate( ${hoverOverlayFilter["saturation"]}% ) blur( ${hoverOverlayFilter["blur"]}px ) hue-rotate( ${hoverOverlayFilter["hue"]}deg ) !important`,
        };
        return generateCss(styles);
    };
    return (
        <CustomTag
            {...blockProps}
            style={{
                ...borderCss(border, props.deviceType),
                ...paddingCss(padding, props.deviceType),
                ...marginCss(margin, props.deviceType),
                ...gradientBackground(backgroundOptions),
                boxShadow: `${boxShadow.horizontal || 0}px ${boxShadow.vertical || 0
                    }px ${boxShadow.blur || 0}px ${boxShadow.color} ${boxShadow.position
                    }`,
                overflow: overflow,
            }}
        >
            <style
                dangerouslySetInnerHTML={{
                    __html: loadStyles(),
                }}
            />

            {Object.entries(shapeTop).length > 1 &&
                shapeTop.openShape == 1 &&
                shapeTop.style && (
                    <div
                        className={topShapeClasses}
                        dangerouslySetInnerHTML={{
                            __html:
                                PremiumBlocksSettings.shapes[shapeTop.style],
                        }}
                    />
                )}
            {videoBackground(
                backgroundOptions["backgroundType"],
                backgroundOptions.videoSource,
                backgroundOptions.videoURL,
                backgroundOptions.bgExternalVideo
            )}
            {Object.entries(shapeBottom).length > 1 &&
                shapeBottom.openShape == 1 &&
                shapeBottom.style && (
                    <div
                        className={bottomShapeClasses}
                        dangerouslySetInnerHTML={{
                            __html:
                                PremiumBlocksSettings.shapes[shapeBottom.style],
                        }}
                    />
                )}
            <div className={`premium-row__block_overlay`}></div>
            <div className="premium-container-inner-blocks-wrap">
                <BlockContent blockProps={props}>
                    <InnerBlocks
                        __experimentalMoverDirection={moverDirection}
                        renderAppender={
                            hasChildBlocks
                                ? undefined
                                : InnerBlocks.ButtonBlockAppender
                        }
                    />
                </BlockContent>
            </div>
        </CustomTag>
    );
});
export default React.memo(Render);
