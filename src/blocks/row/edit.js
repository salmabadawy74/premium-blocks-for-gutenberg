import classnames from "classnames";
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { select, useDispatch, withSelect } = wp.data;
const {
    PanelBody,
    SelectControl,
    Tooltip,
    Button,
    ToggleControl,
} = wp.components;
const { useEffect, Fragment } = wp.element;
import variations from "./variations";
const { createBlock } = wp.blocks;
const { InspectorControls, InnerBlocks } = wp.blockEditor;
import InspectorTabs from "../../components/inspectorTabs";
import InspectorTab from "../../components/inspectorTab";
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import SpacingControl from "../../components/premium-responsive-spacing";
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import PremiumBackgroundControl from "../../components/Premium-Background-Control";
import PremiumBorder from "../../components/premium-border";
import PremiumShadow from "../../components/PremiumShadow";
import InsideTabs from "../../components/InsideTabs";
import InsideTab from "../../components/InsideTab";
import Shape from "../../components/premium-shape";
import Animation from "../../components/Animation";
import ResponsiveRadio from "../../components/responsive-radio";
import renderCustomIcon from "../../../blocks-config/renderIcon";
import {
    gradientBackground,
    videoBackground,
    borderCss,
    paddingCss,
    marginCss,
    gradientValue,
} from "../../components/HelperFunction";
import PremiumFilters from "../../components/premium-filters";
import RadioComponent from "../../components/radio-control";

let defaultLayout = { Desktop: [100], Tablet: [100], Mobile: [100] };

const edit = (props) => {
    if (props.isParentOfSelectedBlock) {
        const emptyBlockInserter = document.querySelector(
            ".block-editor-block-list__empty-block-inserter"
        );
        if (emptyBlockInserter) {
            emptyBlockInserter.style.display = "none";
        }
    }

    useEffect(() => {
        const isBlockRootParent =
            0 ===
            select("core/block-editor").getBlockParents(props.clientId).length;
        if (isBlockRootParent) {
            props.setAttributes({ isBlockRootParent: true });
        }
        // Assigning block_id in the attribute.
        props.setAttributes({ block_id: props.clientId });
        const descendants = select("core/block-editor").getBlocks(
            props.clientId
        );
        if (descendants.length !== props.attributes.blockDescendants.length) {
            props.setAttributes({ blockDescendants: descendants });
        }
    }, []);

    useEffect(() => {
        const descendants = select("core/block-editor").getBlocks(
            props.clientId
        );
        if (descendants.length !== props.attributes.blockDescendants.length) {
            props.setAttributes({ blockDescendants: descendants });
        }
        const iframeEl = document.querySelector(`iframe[name='editor-canvas']`);
        const hasChildren =
            0 !== select("core/block-editor").getBlocks(props.clientId).length;

        let element;
        if (iframeEl) {
            element = iframeEl.contentDocument.getElementById(
                "block-" + props.clientId
            );
        } else {
            element = document.getElementById("block-" + props.clientId);
        }
        if (element) {
            if (props.attributes.isBlockRootParent || isBlockRootParent) {
                element.classList.remove("alignfull");
                element.classList.remove("alignwide");
                element.classList.add(props.attributes.align);
            }
        }
    }, [props]);

    const removeRowBlock = () => {
        const { clientId, removeBlock } = props;
        removeBlock(clientId);
    };
    const {
        attributes: {
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
            blend,
            transition,
        },
        clientId,
        setAttributes,
    } = props;

    const blockVariationPickerOnSelect = (
        nextVariation = props.defaultVariation
    ) => {
        if (nextVariation.attributes) {
            props.setAttributes(nextVariation.attributes);
        }
        if (nextVariation.innerBlocks && "one-column" !== nextVariation.name) {
            props.replaceInnerBlocks(
                props.clientId,
                createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks)
            );
        }
    };

    const createBlocksFromInnerBlocksTemplate = (innerBlocksTemplate) => {
        return innerBlocksTemplate.map(([name, attributes, innerBlocks = []]) =>
            createBlock(
                name,
                attributes,
                createBlocksFromInnerBlocksTemplate(innerBlocks)
            )
        );
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
    const currentOffset =
        "row" === direction[props.deviceType] ? "column" : "row";

    if (
        !variationSelected &&
        0 === select("core/block-editor").getBlockParents(props.clientId).length
    ) {
        return (
            <Fragment>
                <div className="premium-blocks__row_container">
                    <button
                        onClick={() => removeRowBlock()}
                        className="premium-blocks-remove-button"
                    >
                        <span class="dashicons dashicons-no"></span>
                    </button>
                    <div className="premium-blocks__placeholder_title">
                        {__(
                            "Select Column Layout",
                            "premium-blocks-for-gutenberg"
                        )}
                    </div>
                    <div className="premium-blocks__placeholder-group">
                        {variations.map((data) => (
                            <i
                                onClick={(e) => {
                                    e.preventDefault();
                                    setAttributes({
                                        columns: data.innerBlocks,
                                    });
                                    blockVariationPickerOnSelect(data);
                                }}
                            >
                                {data.icon}
                            </i>
                        ))}
                    </div>
                </div>
            </Fragment>
        );
    }
    const { getBlockOrder } = select("core/block-editor");
    const hasChildBlocks = getBlockOrder(clientId).length > 0;
    const moverDirection = "row" === direction ? "horizontal" : "vertical";

    const loadStyles = () => {
        const styles = {};
        const containerFullWidth = "100vw";
        styles[
            `.editor-styles-wrapper #block-${clientId}  > .wp-block-premium-container > .premium-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout`
        ] = {
            "min-height": `${minHeight[props.deviceType]}${minHeight["unit"]}`,
            "flex-direction": direction[props.deviceType],
            "align-items": alignItems[props.deviceType],
            "justify-content": justifyItems[props.deviceType],
            "flex-wrap": wrapItems[props.deviceType],
            "align-content": alignContent[props.deviceType],
            "row-gap": `${rowGutter[props.deviceType]}${rowGutter["unit"]}`,
            "column-gap": `${columnGutter[props.deviceType]}${
                columnGutter["unit"]
            }`,
        };
        styles[
            ` .editor-styles-wrapper #block-${clientId}.block-editor-block-list__block`
        ] = {
            "min-height": `${minHeight[props.deviceType]}${minHeight["unit"]}`,
            "flex-direction": direction[props.deviceType],
            "align-items": alignItems[props.deviceType],
            "justify-content": justifyItems[props.deviceType],
            "flex-wrap": wrapItems[props.deviceType],
            "align-content": alignContent[props.deviceType],
        };

        styles[
            ` .editor-styles-wrapper .is-root-container > .block-editor-block-list__block .block-editor-block-list__block#block-${clientId}`
        ] = {
            "max-width": `${colWidth[props.deviceType]}${colWidth["unit"]}`,
            width: `${colWidth[props.deviceType]}${colWidth["unit"]}`,
        };
        styles[
            `.editor-styles-wrapper #block-${clientId}  .premium-top-shape svg`
        ] = {
            width: `${shapeTop.width[props.deviceType]}${
                shapeTop.width["unit"]
            }`,
            height: `${shapeTop.height[props.deviceType]}${
                shapeTop.height["unit"]
            }`,
            fill: `${shapeTop["color"]}`,
        };

        styles[
            `.editor-styles-wrapper #block-${clientId} .premium-bottom-shape svg`
        ] = {
            width: `${shapeBottom.width[props.deviceType]}${
                shapeBottom.width["unit"]
            }`,
            height: `${shapeBottom.height[props.deviceType]}${
                shapeBottom.height["unit"]
            }`,
            fill: `${shapeBottom["color"]}`,
        };

        if ("boxed" === innerWidthType) {
            styles[
                `.editor-styles-wrapper  .is-root-container > .block-editor-block-list__block > .wp-block-premium-container.premium-block-${block_id} > .premium-container-inner-blocks-wrap`
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
            opacity: `${
                backgroundOverlayHover ? hoverOverlayOpacity / 100 : 1
            } !important`,
            filter: `brightness( ${hoverOverlayFilter["bright"]}% ) contrast( ${hoverOverlayFilter["contrast"]}% ) saturate( ${hoverOverlayFilter["saturation"]}% ) blur( ${hoverOverlayFilter["blur"]}px ) hue-rotate( ${hoverOverlayFilter["hue"]}deg ) !important`,
        };
        let styleCss = "";

        for (const selector in styles) {
            const selectorStyles = styles[selector];
            const filteredStyles = Object.keys(selectorStyles)
                .map((property) => {
                    const value = selectorStyles[property];
                    const valueWithoutUnits = value
                        ? value
                              .toString()
                              .replaceAll("px", "")
                              .replaceAll(/\s/g, "")
                        : "";
                    if (value && !value.toString().includes("undefined")) {
                        return `${property}: ${value};`;
                    }
                })
                .filter((style) => !!style)
                .join("\n");
            styleCss += `${selector}{
                    ${filteredStyles}
                }\n`;
        }
        return styleCss;
    };
    const CustomTag = `${containerTag}`;
    const BLEND = [
        {
            label: "Normal",
            value: "normal",
        },
        {
            label: "Multiply",
            value: "multiply",
        },
        {
            label: "Screen",
            value: "screen",
        },
        {
            label: "Overlay",
            value: "overlay",
        },
        {
            label: "Darken",
            value: "darken",
        },
        {
            label: "Lighten",
            value: "lighten",
        },
        {
            label: "Color Dodge",
            value: "color-dodge",
        },
        {
            label: "Saturation",
            value: "saturation",
        },
        {
            label: "Color",
            value: "color",
        },
        {
            label: "Luminosity",
            value: "luminosity",
        },
    ];

    return (
        <Fragment>
            <InspectorControls>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            initialOpen={true}
                            title={__(
                                "General",
                                "premium-blocks-for-gutenberg"
                            )}
                        >
                            {isBlockRootParent && (
                                <Fragment>
                                    <RadioComponent
                                        choices={[
                                            {
                                                value: "alignfull",
                                                label: __(
                                                    "Full Width",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                            },
                                            {
                                                value: "alignwide",
                                                label: __(
                                                    "boxed",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                            },
                                        ]}
                                        value={align}
                                        onChange={(newValue) =>
                                            setAttributes({ align: newValue })
                                        }
                                        label={__(
                                            "Container Width",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        showIcons={false}
                                    />
                                    <SelectControl
                                        label={__(
                                            "Content Width",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        options={[
                                            {
                                                value: "boxed",
                                                label: __(
                                                    "Boxed",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                            },
                                            {
                                                value: "full",
                                                label: __(
                                                    "Full Width",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                            },
                                        ]}
                                        value={innerWidthType}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                innerWidthType: newValue,
                                            })
                                        }
                                    />
                                </Fragment>
                            )}
                            {"boxed" === innerWidthType && isBlockRootParent && (
                                <ResponsiveSingleRangeControl
                                    label={__(
                                        "Max Width",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={innerWidth}
                                    min="1"
                                    max="1600"
                                    onChange={(newValue) =>
                                        setAttributes({
                                            innerWidth: newValue,
                                        })
                                    }
                                    defaultValue={0}
                                    showUnit={false}
                                />
                            )}
                            {!isBlockRootParent && (
                                <ResponsiveRangeControl
                                    label={__(
                                        "Custom Width",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={colWidth}
                                    min="0"
                                    max="160"
                                    onChange={(newValue) =>
                                        setAttributes({ colWidth: newValue })
                                    }
                                    defaultValue={0}
                                    showUnit={true}
                                    units={["px", "%", "vw"]}
                                />
                            )}
                            <ResponsiveRangeControl
                                label={__(
                                    "Min Height",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={minHeight}
                                min="40"
                                max="1200"
                                onChange={(newValue) =>
                                    setAttributes({ minHeight: newValue })
                                }
                                defaultValue={0}
                                showUnit={true}
                                units={["px", "vh"]}
                            />
                            <SelectControl
                                label={__(
                                    "Overflow",
                                    "premium-blocks-for-gutenberg"
                                )}
                                options={[
                                    {
                                        value: "default",
                                        label: __(
                                            "Default",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "hidden",
                                        label: __(
                                            "Hidden",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                ]}
                                value={overflow}
                                onChange={(newValue) =>
                                    setAttributes({ overflow: newValue })
                                }
                            />
                            <SelectControl
                                label={__(
                                    "HTML Tag",
                                    "premium-blocks-for-gutenberg"
                                )}
                                options={[
                                    { value: "div", label: "div" },
                                    { value: "header", label: "header" },
                                    { value: "footer", label: "footer" },
                                    { value: "main", label: "main" },
                                    { value: "article", label: "article" },
                                    { value: "section", label: "section" },
                                    { value: "aside", label: "aside" },
                                    { value: "nav", label: "nav" },
                                ]}
                                value={containerTag}
                                onChange={(newValue) =>
                                    setAttributes({ containerTag: newValue })
                                }
                            />
                        </PanelBody>
                        <PanelBody
                            initialOpen={false}
                            title={__(
                                "Flex Properties",
                                "premium-blocks-for-gutenberg"
                            )}
                        >
                            <ResponsiveRadio
                                choices={[
                                    {
                                        value: "row",
                                        label: __(
                                            "Row",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: renderCustomIcon(
                                            "flex-direction-row"
                                        ),
                                    },
                                    {
                                        value: "column",
                                        label: __(
                                            "Column",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: renderCustomIcon(
                                            "flex-direction-column"
                                        ),
                                    },
                                    {
                                        value: "row-reverse",
                                        label: __(
                                            "Row Reverse",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: renderCustomIcon(
                                            "flex-direction-row-reverse"
                                        ),
                                    },
                                    {
                                        value: "column-reverse",
                                        label: __(
                                            "Column Reverse",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: renderCustomIcon(
                                            "flex-direction-column-reverse"
                                        ),
                                    },
                                ]}
                                value={direction}
                                onChange={(newValue) =>
                                    setAttributes({ direction: newValue })
                                }
                                label={__(
                                    "Direction",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                            <ResponsiveRadio
                                choices={[
                                    {
                                        value: "flex-start",
                                        label: __(
                                            "Flex Start",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: renderCustomIcon(
                                            `flex-${currentOffset}-start`
                                        ),
                                    },
                                    {
                                        value: "center",
                                        label: __(
                                            "Center",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: renderCustomIcon(
                                            `flex-${currentOffset}-center`
                                        ),
                                    },
                                    {
                                        value: "flex-end",
                                        label: __(
                                            "Flex End",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: renderCustomIcon(
                                            `flex-${currentOffset}-end`
                                        ),
                                    },
                                    {
                                        value: "stretch",
                                        label: __(
                                            "Stretch",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: renderCustomIcon(
                                            `flex-${currentOffset}-strech`
                                        ),
                                    },
                                ]}
                                value={alignItems}
                                onChange={(newValue) =>
                                    setAttributes({ alignItems: newValue })
                                }
                                label={__(
                                    "Align Items",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                            <ResponsiveRadio
                                choices={[
                                    {
                                        value: "flex-start",
                                        tooltip: __(
                                            "Flex Start",
                                            "ultimate-addons-for-gutenberg"
                                        ),
                                        icon: renderCustomIcon(
                                            `flex-${currentOffset}-start`
                                        ),
                                    },
                                    {
                                        value: "center",
                                        tooltip: __(
                                            "Center",
                                            "ultimate-addons-for-gutenberg"
                                        ),
                                        icon: renderCustomIcon(
                                            `flex-${currentOffset}-center`
                                        ),
                                    },
                                    {
                                        value: "flex-end",
                                        tooltip: __(
                                            "Flex End",
                                            "ultimate-addons-for-gutenberg"
                                        ),
                                        icon: renderCustomIcon(
                                            `flex-${currentOffset}-end`
                                        ),
                                    },
                                    {
                                        value: "space-between",
                                        tooltip: __(
                                            "Space Between",
                                            "ultimate-addons-for-gutenberg"
                                        ),
                                        icon: renderCustomIcon(
                                            `flex-${currentOffset}-space-between`
                                        ),
                                    },
                                    {
                                        value: "space-around",
                                        tooltip: __(
                                            "Space Around",
                                            "ultimate-addons-for-gutenberg"
                                        ),
                                        icon: renderCustomIcon(
                                            `flex-${currentOffset}-space-around`
                                        ),
                                    },
                                    {
                                        value: "space-evenly",
                                        tooltip: __(
                                            "Space Evenly",
                                            "ultimate-addons-for-gutenberg"
                                        ),
                                        icon: renderCustomIcon(
                                            `flex-${currentOffset}-space-evenly`
                                        ),
                                    },
                                ]}
                                value={justifyItems}
                                onChange={(newValue) =>
                                    setAttributes({ justifyItems: newValue })
                                }
                                label={__(
                                    "Justify Items",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                            <ResponsiveRadio
                                choices={[
                                    {
                                        value: "wrap",
                                        tooltip: __(
                                            "Wrap",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: (
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                            >
                                                <title>Wrap</title>
                                                <path d="M1.344 0c0.736 0 1.344 0.608 1.344 1.344v29.312c0 0.704-0.512 1.28-1.184 1.344h-0.16c-0.736 0-1.344-0.608-1.344-1.344v-29.312c0-0.704 0.512-1.28 1.184-1.344h0.16zM13.344 8c0.32 0.032 0.576 0.16 0.864 0.416 0.224 0.224 0.32 0.512 0.32 0.864v4.064h15.552c0.992 0 1.792 0.736 1.888 1.696v1.76c0 0.96-0.736 1.76-1.696 1.856h-15.744v4.192c-0.064 0.352-0.224 0.64-0.48 0.864-0.288 0.192-0.576 0.288-0.896 0.288s-0.608-0.16-0.864-0.416l-6.72-6.784c-0.192-0.256-0.256-0.576-0.224-0.896s0.16-0.64 0.384-0.864l6.688-6.72c0.256-0.256 0.576-0.352 0.928-0.32z"></path>
                                            </svg>
                                        ),
                                    },
                                    {
                                        value: "nowrap",
                                        tooltip: __(
                                            "No Wrap",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: (
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 33 32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                focusable="false"
                                            >
                                                <path d="M1.33984 0C1.89213 0 2.33984 0.447715 2.33984 1V30.5C2.33984 31.0523 1.89213 31.5 1.33984 31.5C0.787559 31.5 0.339844 31.0523 0.339844 30.5V1C0.339844 0.447715 0.787559 0 1.33984 0Z"></path>
                                                <path d="M31.3398 0C31.8921 0 32.3398 0.447715 32.3398 1V30.5C32.3398 31.0523 31.8921 31.5 31.3398 31.5C30.7876 31.5 30.3398 31.0523 30.3398 30.5V1C30.3398 0.447715 30.7876 0 31.3398 0Z"></path>
                                                <path d="M24.3754 11.2929L27.9612 14.8786C28.3517 15.2692 28.3517 15.9023 27.9612 16.2929L24.3754 19.8786C23.9848 20.2691 23.3517 20.2691 22.9611 19.8786C22.5706 19.4881 22.5706 18.8549 22.9611 18.4644L24.8398 16.5857L5.33984 16.5857C4.78756 16.5857 4.33984 16.138 4.33984 15.5857C4.33984 15.0334 4.78756 14.5857 5.33984 14.5857L24.8398 14.5857L22.9611 12.7071C22.5706 12.3166 22.5706 11.6834 22.9611 11.2929C23.3517 10.9024 23.9848 10.9024 24.3754 11.2929Z"></path>
                                            </svg>
                                        ),
                                    },
                                    {
                                        value: "wrap-reverse",
                                        tooltip: __(
                                            "Wrap Reverse",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: (
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 33 32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                focusable="false"
                                            >
                                                <path d="M1.33984 32C1.89213 32 2.33984 31.5452 2.33984 30.9841V1.01587C2.33984 0.454821 1.89213 0 1.33984 0C0.787559 0 0.339844 0.454821 0.339844 1.01587V30.9841C0.339844 31.5452 0.787559 32 1.33984 32Z"></path>
                                                <path d="M31.3398 32C31.8921 32 32.3398 31.5452 32.3398 30.9841V1.01587C32.3398 0.454821 31.8921 0 31.3398 0C30.7876 0 30.3398 0.454821 30.3398 1.01587V30.9841C30.3398 31.5452 30.7876 32 31.3398 32Z"></path>
                                                <path d="M27.3398 26.5C27.8921 26.5 28.3398 26.0523 28.3398 25.5V9.5C28.3398 9.49784 28.3398 9.49569 28.3398 9.49353C28.3363 8.94422 27.89 8.5 27.3398 8.5L10.8398 8.5L12.7185 6.62136C13.1091 6.23084 13.1091 5.59767 12.7185 5.20715C12.328 4.81663 11.6949 4.81663 11.3043 5.20715L7.71852 8.79289C7.328 9.18342 7.328 9.81658 7.71852 10.2071L11.3043 13.7929C11.6949 14.1834 12.328 14.1834 12.7185 13.7929C13.1091 13.4023 13.1091 12.7692 12.7185 12.3787L10.8398 10.5L26.3398 10.5V24.5H5.33984C4.78756 24.5 4.33984 24.9477 4.33984 25.5C4.33984 26.0523 4.78756 26.5 5.33984 26.5H27.3398Z"></path>
                                            </svg>
                                        ),
                                    },
                                ]}
                                value={wrapItems}
                                onChange={(newValue) =>
                                    setAttributes({ wrapItems: newValue })
                                }
                                label={__(
                                    "Wrap Items",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                            {("wrap" === wrapItems[props.deviceType] ||
                                "wrap-reverse" ===
                                    wrapItems[props.deviceType]) && (
                                <ResponsiveRadio
                                    choices={[
                                        {
                                            value: "flex-start",
                                            tooltip: __(
                                                "Flex Start",
                                                "ultimate-addons-for-gutenberg"
                                            ),
                                            icon: renderCustomIcon(
                                                `flex-${currentOffset}-start`
                                            ),
                                        },
                                        {
                                            value: "center",
                                            tooltip: __(
                                                "Center",
                                                "ultimate-addons-for-gutenberg"
                                            ),
                                            icon: renderCustomIcon(
                                                `flex-${currentOffset}-center`
                                            ),
                                        },
                                        {
                                            value: "flex-end",
                                            tooltip: __(
                                                "Flex End",
                                                "ultimate-addons-for-gutenberg"
                                            ),
                                            icon: renderCustomIcon(
                                                `flex-${currentOffset}-end`
                                            ),
                                        },
                                        {
                                            value: "space-between",
                                            tooltip: __(
                                                "Space Between",
                                                "ultimate-addons-for-gutenberg"
                                            ),
                                            icon: renderCustomIcon(
                                                `flex-${currentOffset}-space-between`
                                            ),
                                        },
                                        {
                                            value: "space-around",
                                            tooltip: __(
                                                "Space Around",
                                                "ultimate-addons-for-gutenberg"
                                            ),
                                            icon: renderCustomIcon(
                                                `flex-${currentOffset}-space-around`
                                            ),
                                        },
                                        {
                                            value: "space-evenly",
                                            tooltip: __(
                                                "Space Evenly",
                                                "ultimate-addons-for-gutenberg"
                                            ),
                                            icon: renderCustomIcon(
                                                `flex-${currentOffset}-space-evenly`
                                            ),
                                        },
                                    ]}
                                    value={alignContent}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            alignContent: newValue,
                                        })
                                    }
                                    label={__(
                                        "Align Content",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    showIcons={true}
                                />
                            )}
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            initialOpen={false}
                            title={__(
                                "Background",
                                "premium-blocks-for-gutenberg"
                            )}
                        >
                            <PremiumBackgroundControl
                                value={backgroundOptions}
                                onChange={(value) =>
                                    setAttributes({ backgroundOptions: value })
                                }
                                backgroundVedio={true}
                            />
                        </PanelBody>
                        <PanelBody
                            initialOpen={false}
                            title={__(
                                "Background Overlay",
                                "premium-blocks-for-gutenberg"
                            )}
                        >
                            <InsideTabs>
                                <InsideTab
                                    tabTitle={__(
                                        "Normal",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                >
                                    <PremiumBackgroundControl
                                        value={backgroundOverlay}
                                        onChange={(value) =>
                                            setAttributes({
                                                backgroundOverlay: value,
                                            })
                                        }
                                        backgroundVedio={false}
                                    />
                                    <ResponsiveSingleRangeControl
                                        label={__(
                                            "Opacity",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={overlayOpacity}
                                        min="1"
                                        max="100"
                                        onChange={(newValue) =>
                                            setAttributes({
                                                overlayOpacity:
                                                    newValue === undefined
                                                        ? 50
                                                        : newValue,
                                            })
                                        }
                                        defaultValue={""}
                                        showUnit={false}
                                    />
                                    <PremiumFilters
                                        label={__("CSS Filters")}
                                        value={overlayFilter}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                overlayFilter: newValue,
                                            })
                                        }
                                    />
                                    <SelectControl
                                        label={__("Blend Mode ")}
                                        value={blend}
                                        onChange={(newSelect) =>
                                            setAttributes({ blend: newSelect })
                                        }
                                        options={BLEND}
                                    />
                                </InsideTab>
                                <InsideTab
                                    tabTitle={__(
                                        "Hover",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                >
                                    <PremiumBackgroundControl
                                        value={backgroundOverlayHover}
                                        onChange={(value) =>
                                            setAttributes({
                                                backgroundOverlayHover: value,
                                            })
                                        }
                                        backgroundVedio={false}
                                    />
                                    <ResponsiveSingleRangeControl
                                        label={__(
                                            "Opacity",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={hoverOverlayOpacity}
                                        min="1"
                                        max="100"
                                        onChange={(newValue) =>
                                            setAttributes({
                                                hoverOverlayOpacity:
                                                    newValue === undefined
                                                        ? 50
                                                        : newValue,
                                            })
                                        }
                                        defaultValue={""}
                                        showUnit={false}
                                    />
                                    <PremiumFilters
                                        label={__("CSS Filters")}
                                        value={hoverOverlayFilter}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                hoverOverlayFilter: newValue,
                                            })
                                        }
                                    />
                                    <ResponsiveSingleRangeControl
                                        label={__(
                                            "Transition Duration",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={transition}
                                        min="0"
                                        max="3"
                                        step={0.1}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                transition: newValue,
                                            })
                                        }
                                        defaultValue={""}
                                        showUnit={false}
                                    />
                                </InsideTab>
                            </InsideTabs>
                        </PanelBody>
                        <PanelBody initialOpen={false} title={__("Border")}>
                            <PremiumBorder
                                value={border}
                                onChange={(value) =>
                                    setAttributes({ border: value })
                                }
                            />
                            <PremiumShadow
                                boxShadow={true}
                                value={boxShadow}
                                onChange={(value) =>
                                    setAttributes({ boxShadow: value })
                                }
                            />
                        </PanelBody>
                        <PanelBody
                            initialOpen={false}
                            title={__(
                                "Shape Divider",
                                "premium-blocks-for-gutenberg"
                            )}
                        >
                            <InsideTabs>
                                <InsideTab
                                    tabTitle={__(
                                        "Top Shape",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                >
                                    <Shape
                                        shapeType="top"
                                        value={shapeTop}
                                        responsive
                                        onChange={(val) =>
                                            setAttributes({ shapeTop: val })
                                        }
                                    />
                                </InsideTab>
                                <InsideTab
                                    tabTitle={__(
                                        "Bottom Shape",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                >
                                    <Shape
                                        shapeType="bottom"
                                        value={shapeBottom}
                                        responsive
                                        onChange={(val) =>
                                            setAttributes({ shapeBottom: val })
                                        }
                                    />
                                </InsideTab>
                            </InsideTabs>
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"advance"}>
                        <PanelBody
                            title={__(
                                "Spacing",
                                "premium-blocks-for-gutenberg"
                            )}
                            initialOpen={false}
                        >
                            <ResponsiveRangeControl
                                label={__(
                                    "Column Gutter",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={columnGutter}
                                min="0"
                                max="100"
                                onChange={(newValue) =>
                                    setAttributes({ columnGutter: newValue })
                                }
                                defaultValue={0}
                                showUnit={true}
                            />
                            <ResponsiveRangeControl
                                label={__(
                                    "Row Gutter",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={rowGutter}
                                min="0"
                                max="100"
                                onChange={(newValue) =>
                                    setAttributes({ rowGutter: newValue })
                                }
                                defaultValue={0}
                                showUnit={true}
                            />
                            <SpacingControl
                                label={__(
                                    "Margin",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={margin}
                                onChange={(value) =>
                                    setAttributes({ margin: value })
                                }
                                showUnits={true}
                                responsive={true}
                            />
                            <SpacingControl
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={padding}
                                onChange={(value) =>
                                    setAttributes({ padding: value })
                                }
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__(
                                "Animation",
                                "premium-blocks-for-gutenberg"
                            )}
                            initialOpen={false}
                        >
                            <Animation
                                uniqueId={block_id}
                                label={__(
                                    "Animation",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={animation}
                                onChange={(value) =>
                                    setAttributes({ animation: value })
                                }
                            />
                        </PanelBody>
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <style
                dangerouslySetInnerHTML={{
                    __html: loadStyles(),
                }}
            />
            <CustomTag
                className={classnames(
                    "wp-block-premium-container",
                    `premium-block-${block_id}`,
                    `premium-blocks-${block_id}`
                )}
                key={block_id}
                style={{
                    ...borderCss(border, props.deviceType),
                    ...paddingCss(padding, props.deviceType),
                    ...marginCss(margin, props.deviceType),
                    ...gradientBackground(backgroundOptions),
                    boxShadow: `${boxShadow.horizontal || 0}px ${
                        boxShadow.vertical || 0
                    }px ${boxShadow.blur || 0}px ${boxShadow.color} ${
                        boxShadow.position
                    }`,
                    overflow: overflow,
                }}
            >
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
        </Fragment>
    );
};

const applyWithSelect = withSelect((select, props) => {
    // eslint-disable-line no-shadow
    const { __experimentalGetPreviewDeviceType = null } = select(
        "core/edit-post"
    );
    const deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;
    const { getBlocks } = select("core/block-editor");
    const {
        getBlockType,
        getBlockVariations,
        getDefaultBlockVariation,
    } = select("core/blocks");
    const innerBlocks = getBlocks(props.clientId);
    const { replaceInnerBlocks, removeBlock } = useDispatch(
        "core/block-editor"
    );

    return {
        // Subscribe to changes of the innerBlocks to control the display of the layout selection placeholder.
        innerBlocks,
        blockType: getBlockType(props.name),
        defaultVariation:
            typeof getDefaultBlockVariation === "undefined"
                ? null
                : getDefaultBlockVariation(props.name),
        variations:
            typeof getBlockVariations === "undefined"
                ? null
                : getBlockVariations(props.name),
        replaceInnerBlocks,
        deviceType,
        isParentOfSelectedBlock: select(
            "core/block-editor"
        ).hasSelectedInnerBlock(props.clientId, true),
        removeBlock,
    };
});
export default compose(applyWithSelect)(edit);
