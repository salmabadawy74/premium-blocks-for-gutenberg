/* eslint-disable react/react-in-jsx-scope */
const { Fragment } = wp.element;
const { InnerBlocks, useBlockProps } = wp.blockEditor;
import classnames from "classnames";
import {
    gradientBackground,
    videoBackground,
    animationAttr,
    gradientValue,
    generateCss,
} from "@pbg/helpers";

const Save = (props) => {
    const {
        attributes: {
            block_id,
            shapeTop,
            shapeBottom,
            align,
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
            containerTag,
            overflow,
            blend,
            transition,
        },
    } = props;
    let wrapperClassName = "";

    if (typeof align !== "undefined") {
        if (align === "full") {
            wrapperClassName = "alignfull";
        } else if (align === "wide") {
            wrapperClassName = "alignwide";
        }
    }

    const CustomTag = `${containerTag}`;
    const loadStyles = () => {
        const styles = {};
        const containerFullWidth = "100vw";

        styles[
            `.wp-block-premium-container.premium-block-${block_id}  .premium-top-shape svg`
        ] = {
            fill: `${shapeTop["color"]}`,
        };
        styles[
            `.wp-block-premium-container.premium-block-${block_id} .premium-bottom-shape svg`
        ] = {
            fill: `${shapeBottom["color"]}`,
        };
        styles[
            `.wp-block-premium-container.premium-is-root-container.premium-block-${block_id} .premium-container-inner-blocks-wrap`
        ] = {
            display: "flex",
        };
        styles[
            `.wp-block-premium-container.premium-is-root-container.premium-block-${block_id} .premium-container-inner-blocks-wrap > div`
        ] = {
            width: "100%",
        };

        if ("boxed" === innerWidthType) {
            styles[
                `.wp-block-premium-container.premium-is-root-container.premium-block-${block_id} .premium-container-inner-blocks-wrap`
            ] = {
                "--inner-content-custom-width": `min(${containerFullWidth}, ${innerWidth}px)`,
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
            opacity: `${
                backgroundOverlayHover ? hoverOverlayOpacity / 100 : 1
            } !important`,
            filter: `brightness( ${hoverOverlayFilter["bright"]}% ) contrast( ${hoverOverlayFilter["contrast"]}% ) saturate( ${hoverOverlayFilter["saturation"]}% ) blur( ${hoverOverlayFilter["blur"]}px ) hue-rotate( ${hoverOverlayFilter["hue"]}deg ) !important`,
        };

        return generateCss(styles);
    };
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
        { "premium-shape__invert": shapeBottom["invertShapeDivider"] === true }
    );
    const blockProps = useBlockProps.save();
    return (
        <CustomTag
            id={blockProps.id}
            className={classnames(
                blockProps.className,
                "wp-block-premium-container",
                `premium-block-${block_id} `,
                `premium-blocks-${block_id} `,
                isBlockRootParent ? `${align} premium-is-root-container` : ""
            )}
            key={block_id}
            style={{
                ...gradientBackground(backgroundOptions),
                boxShadow: `${boxShadow.horizontal || 0} px ${
                    boxShadow.vertical || 0
                } px ${boxShadow.blur || 0} px ${boxShadow.color} ${
                    boxShadow.position
                } `,
                overflow: overflow,
                borderStyle: border["borderType"],
                borderColor: border["borderColor"],
            }}
            {...animationAttr(animation)}
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
                            __html: PremiumBlocksSettings.shapes[
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
                            __html: PremiumBlocksSettings.shapes[
                                shapeBottom.style
                            ],
                        }}
                    />
                )}
            <div
                className={`premium-row__block_overlay`}
                style={{
                    ...gradientBackground(backgroundOverlay),
                    opacity: `${backgroundOverlay ? overlayOpacity / 100 : 1} `,
                    filter: `brightness(${overlayFilter["bright"]} % ) contrast(${overlayFilter["contrast"]} % ) saturate(${overlayFilter["saturation"]} % ) blur(${overlayFilter["blur"]}px) hue - rotate(${overlayFilter["hue"]}deg)`,
                }}
            ></div>
            <div className="premium-container-inner-blocks-wrap">
                <InnerBlocks.Content />
            </div>
        </CustomTag>
    );
};
export default Save;
