import classnames from "classnames";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import React from "react";
import { select } from "@wordpress/data";
import {
    gradientBackground,
    videoBackground,
    borderCss,
    paddingCss,
    marginCss,
    gradientValue,
} from "@pbg/helpers";

const Render = (props) => {
    props = props.parentProps;
    const { attributes, clientId } = props;

    const {
        blockId,
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
    console.log("welcome");
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
    // const customTagLinkAttributes = {};
    // if (htmlTag === "a") {
    //     customTagLinkAttributes.rel = "noopener";
    //     customTagLinkAttributes.onClick = (e) => e.preventDefault();
    //     if (htmlTagLink?.url) {
    //         customTagLinkAttributes.href = htmlTagLink?.url;
    //     }
    //     if (htmlTagLink?.opensInNewTab) {
    //         customTagLinkAttributes.target = "_blank";
    //     }
    //     if (htmlTagLink?.noFollow) {
    //         customTagLinkAttributes.rel = "nofollow noopener";
    //     }
    // }

    const hasChildren =
        0 !== select("core/block-editor").getBlocks(clientId).length;
    const blockProps = useBlockProps({
        className: "block-editor-block-list__block wp-block",
    });

    return (
        <>
            <CustomTag {...blockProps} key={blockId}>
                {Object.entries(shapeTop).length > 1 &&
                    shapeTop.openShape == 1 &&
                    shapeTop.style && (
                        <div
                            className={topShapeClasses}
                            dangerouslySetInnerHTML={{
                                __html:
                                    PremiumBlocksSettings.shapes[
                                        shapeTop.style
                                    ],
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
                                    PremiumBlocksSettings.shapes[
                                        shapeBottom.style
                                    ],
                            }}
                        />
                    )}
                <div className={`premium-row__block_overlay`}></div>
                <div className="premium-container-inner-blocks-wrap">
                    <InnerBlocks
                        __experimentalMoverDirection={moverDirection}
                        renderAppender={
                            hasChildBlocks
                                ? undefined
                                : InnerBlocks.ButtonBlockAppender
                        }
                    />
                </div>
            </CustomTag>
        </>
    );
};
export default React.memo(Render);
