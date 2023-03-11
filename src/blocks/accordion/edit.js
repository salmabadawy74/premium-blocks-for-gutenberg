import classnames from "classnames";
import {
    InspectorTabs,
    InspectorTab,
    Icons,
    PremiumBorder,
    PremiumResponsiveTabs,
    ResponsiveSingleRangeControl,
    MultiButtonsControl,
    RadioComponent,
    AdvancedColorControl as AdvancedPopColorControl,
    PremiumShadow,
    WebfontLoader,
    PremiumTypo,
    SpacingComponent,
    ResponsiveRangeControl,
    BlockContent
} from "@pbg/components";
import { generateCss, generateBlockId } from "@pbg/helpers";
import { compose } from "@wordpress/compose";

const { useEffect, Fragment } = wp.element;
const { __ } = wp.i18n;
const { withSelect, withDispatch } = wp.data;
const { PanelBody } = wp.components;
const { InspectorControls, InnerBlocks, useBlockProps } = wp.blockEditor;

function PremiumAccordion(props) {
    const INNER_BLOCKS_TEMPLATE = [
        [
            "premium/accordion-item",
            {
                title: __("Awesome Title", "premium-blocks-for-gutenberg"),
                placeholder: __(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                ),
            },
        ],
        [
            "premium/accordion-item",
            {
                title: __("Awesome Title", "premium-blocks-for-gutenberg"),
                placeholder: __("Cool Description."),
            },
        ],
    ];

    const { setAttributes, className, clientId } = props;

    const accordionRef = React.createRef();

    const innerBlocksTemplate = props.attributes?.repeaterItems?.length
        ? props.insertOnlyAllowedBlock()
        : INNER_BLOCKS_TEMPLATE;

    useEffect(() => {
        setAttributes({
            blockId: "premium-accordion-" + generateBlockId(clientId),
        });
    }, []);

    const {
        blockId,
        direction,
        titleTag,
        titleStyles,
        arrowStyles,
        descStyles,
        contentType,
        textShadow,
        titleTextShadow,
        titleBorder,
        titlePadding,
        titleMargin,
        descPadding,
        descBorder,
        titleTypography,
        descTypography,
        descAlign,
        hideDesktop,
        hideTablet,
        hideMobile,
    } = props.attributes;

    let loadTitleGoogleFonts;
    let loadDescGoogleFonts;

    if (titleTypography?.fontFamily !== "Default") {
        const titleConfig = {
            google: {
                families: [titleTypography.fontFamily],
            },
        };
        loadTitleGoogleFonts = (
            <WebfontLoader config={titleConfig}></WebfontLoader>
        );
    }

    if (descTypography?.fontFamily !== "Default") {
        const descConfig = {
            google: {
                families: [descTypography.fontFamily],
            },
        };
        loadDescGoogleFonts = (
            <WebfontLoader config={descConfig}></WebfontLoader>
        );
    }

    const saveTitleStyles = (value) => {
        const newUpdate = titleStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            titleStyles: newUpdate,
        });
    };

    const saveArrowStyles = (value) => {
        const newUpdate = arrowStyles.map((item, indexx) => {
            if (0 === indexx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ arrowStyles: newUpdate });
    };

    const SaveDescStyles = (value) => {
        const newUpdate = descStyles.map((item, indx) => {
            if (0 === indx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            descStyles: newUpdate,
        });
    };

    const titlePaddingTop = titlePadding[props.deviceType].top;
    const titlePaddingRight = titlePadding[props.deviceType].right;
    const titlePaddingBottom = titlePadding[props.deviceType].bottom;
    const titlePaddingLeft = titlePadding[props.deviceType].left;
    const descPaddingTop = descPadding[props.deviceType].top;
    const descPaddingRight = descPadding[props.deviceType].right;
    const descPaddingBottom = descPadding[props.deviceType].bottom;
    const descPaddingLeft = descPadding[props.deviceType].left;

    const loadStyles = () => {
        const styles = {};

        styles[`.${blockId} .premium-accordion__title_wrap`] = {
            "background-color": titleStyles[0].titleBack,
            "padding-top":
                titlePaddingTop && `${titlePaddingTop}${titlePadding.unit}`,
            "padding-right":
                titlePaddingRight && `${titlePaddingRight}${titlePadding.unit}`,
            "padding-bottom":
                titlePaddingBottom &&
                `${titlePaddingBottom}${titlePadding.unit}`,
            "padding-left":
                titlePaddingLeft && `${titlePaddingLeft}${titlePadding.unit}`,
            "border-style": titleBorder?.borderType,
            "border-top-width": `${titleBorder?.borderWidth[props.deviceType]?.top
                }px`,
            "border-right-width": `${titleBorder?.borderWidth[props.deviceType]?.right
                }px`,
            "border-bottom-width": `${titleBorder?.borderWidth[props.deviceType]?.bottom
                }px`,
            "border-left-width": `${titleBorder?.borderWidth[props.deviceType]?.left
                }px`,
            "border-color": titleBorder?.borderColor,
            "border-top-left-radius": `${titleBorder?.borderRadius[props.deviceType].top || 0
                }px`,
            "border-top-right-radius": `${titleBorder?.borderRadius[props.deviceType].right || 0
                }px`,
            "border-bottom-left-radius": `${titleBorder?.borderRadius[props.deviceType].bottom || 0
                }px`,
            "border-bottom-right-radius": `${titleBorder?.borderRadius[props.deviceType].left || 0
                }px`,
        };

        styles[`.${blockId} .premium-accordion__content_wrap`] = {
            "margin-bottom": `${titleMargin?.[props.deviceType]}${titleMargin?.unit
                } !important`,
        };

        styles[`.${blockId} .premium-accordion__icon_wrap`] = {
            "background-color": arrowStyles[0].arrowBack,
            padding: arrowStyles[0].arrowPadding + "px",
            "border-radius": arrowStyles[0].arrowRadius + "px",
        };

        styles[
            `.${blockId} .premium-accordion__icon_wrap svg.premium-accordion__icon`
        ] = {
            fill: arrowStyles[0].arrowColor,
            width: `${arrowStyles[0].arrowSize}px`,
            height: `${arrowStyles[0].arrowSize}px`,
        };

        styles[
            `.${blockId} .premium-accordion__title_wrap .premium-accordion__title_text`
        ] = {
            color: titleStyles[0].titleColor,
            "font-size": `${titleTypography?.fontSize[props.deviceType]}${titleTypography?.fontSize.unit
                }`,
            "font-style": titleTypography?.fontStyle,
            "font-family": titleTypography?.fontFamily,
            "font-weight": titleTypography?.fontWeight,
            "letter-spacing": `${titleTypography?.letterSpacing[props.deviceType]
                }${titleTypography?.letterSpacing.unit}`,
            "text-decoration": titleTypography?.textDecoration,
            "text-transform": titleTypography?.textTransform,
            "line-height": `${titleTypography?.lineHeight[props.deviceType]}${titleTypography?.lineHeight.unit
                }`,
            "text-shadow": `${titleTextShadow.horizontal}px ${titleTextShadow.vertical}px ${titleTextShadow.blur}px ${titleTextShadow.color}`,
        };

        styles[`.${blockId} .premium-accordion__desc_wrap`] = {
            "text-align": descAlign?.[props.deviceType],
            "background-color": descStyles[0].descBack,
            "padding-top":
                descPaddingTop && `${descPaddingTop}${descPadding.unit}`,
            "padding-right":
                descPaddingRight && `${descPaddingRight}${descPadding.unit}`,
            "padding-bottom":
                descPaddingBottom && `${descPaddingBottom}${descPadding.unit}`,
            "padding-left":
                descPaddingLeft && `${descPaddingLeft}${descPadding.unit}`,
            "border-style": descBorder?.borderType,
            "border-top-width": `${descBorder?.borderWidth[props.deviceType].top
                }px`,
            "border-right-width": `${descBorder?.borderWidth[props.deviceType].right
                }px`,
            "border-bottom-width": `${descBorder?.borderWidth[props.deviceType].bottom
                }px`,
            "border-left-width": `${descBorder?.borderWidth[props.deviceType].left
                }px`,
            "border-color": descBorder?.borderColor,
            "border-top-left-radius": `${descBorder?.borderRadius[props.deviceType].top || 0
                }px`,
            "border-top-right-radius": `${descBorder?.borderRadius[props.deviceType].right || 0
                }px`,
            "border-bottom-left-radius": `${descBorder?.borderRadius[props.deviceType].bottom || 0
                }px`,
            "border-bottom-right-radius": `${descBorder?.borderRadius[props.deviceType].left || 0
                }px`,
            "text-shadow": `${textShadow.horizontal}px ${textShadow.vertical}px ${textShadow.blur}px ${textShadow.color}`,
        };

        styles[
            `.${blockId} .premium-accordion__desc_wrap .premium-accordion__desc`
        ] = {
            color: descStyles[0].descColor,
            "font-size": `${descTypography?.fontSize[props.deviceType]}${descTypography?.fontSize.unit
                }`,
            "font-style": descTypography?.fontStyle,
            "font-family": descTypography?.fontFamily,
            "font-weight": descTypography?.fontWeight,
            "letter-spacing": `${descTypography?.letterSpacing[props.deviceType]
                }${descTypography?.letterSpacing.unit}`,
            "text-decoration": descTypography?.textDecoration,
            "text-transform": descTypography?.textTransform,
            "line-height": `${descTypography?.lineHeight[props.deviceType]}${descTypography?.lineHeight.unit
                }`,
            "text-shadow": `${textShadow.horizontal}px ${textShadow.vertical}px ${textShadow.blur}px ${textShadow.color}`,
        };
        return generateCss(styles);
    };

    return (
        <Fragment>
            <InspectorControls key="inspector">
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__("Title", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <RadioComponent
                                choices={[
                                    {
                                        value: "h1",
                                        label: __(
                                            "H1",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "h2",
                                        label: __(
                                            "H2",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "h3",
                                        label: __(
                                            "H3",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "h4",
                                        label: __(
                                            "H4",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "h5",
                                        label: __(
                                            "H5",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "h6",
                                        label: __(
                                            "H6",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                ]}
                                value={titleTag}
                                onChange={(newValue) =>
                                    setAttributes({ titleTag: newValue })
                                }
                                label={__(
                                    "Title Tag",
                                    "premium-blocks-for-gutenberg"
                                )}
                            />
                            <RadioComponent
                                choices={[
                                    {
                                        value: "ltr",
                                        label: __(
                                            "LTR",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: Icons.arrowLeft,
                                    },
                                    {
                                        value: "rtl",
                                        label: __(
                                            "RTL",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: Icons.arrowRight,
                                    },
                                ]}
                                value={direction}
                                onChange={(newEffect) =>
                                    setAttributes({ direction: newEffect })
                                }
                                label={__(
                                    "Direction",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__(
                                "Content",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <RadioComponent
                                choices={[
                                    {
                                        value: "text",
                                        label: __(
                                            "Text",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "block",
                                        label: __(
                                            "Block",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                ]}
                                value={contentType}
                                onChange={(newType) =>
                                    setAttributes({ contentType: newType })
                                }
                                label={__(
                                    "Type",
                                    "premium-blocks-for-gutenberg"
                                )}
                            />
                            <MultiButtonsControl
                                choices={[
                                    {
                                        value: "left",
                                        label: __(
                                            "Left",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: Icons.alignLeft,
                                    },
                                    {
                                        value: "center",
                                        label: __(
                                            "Center",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: Icons.alignCenter,
                                    },
                                    {
                                        value: "right",
                                        label: __(
                                            "Right",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: Icons.alignRight,
                                    },
                                ]}
                                value={descAlign}
                                onChange={(align) =>
                                    setAttributes({ descAlign: align })
                                }
                                label={__(
                                    "Align Content",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__("Arrow", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <RadioComponent
                                choices={[
                                    {
                                        value: "in",
                                        label: __(
                                            "In",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "out",
                                        label: __(
                                            "Out",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                ]}
                                value={arrowStyles[0].arrowPos}
                                onChange={(newValue) =>
                                    saveArrowStyles({ arrowPos: newValue })
                                }
                                label={__(
                                    "Position",
                                    "premium-blocks-for-gutenberg"
                                )}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__("Title", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <PremiumTypo
                                value={titleTypography}
                                onChange={(newValue) =>
                                    setAttributes({ titleTypography: newValue })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Text Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={titleStyles[0].titleColor}
                                colorDefault={""}
                                onColorChange={(value) =>
                                    saveTitleStyles({ titleColor: value })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Background Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={titleStyles[0].titleBack}
                                colorDefault={""}
                                onColorChange={(value) =>
                                    saveTitleStyles({ titleBack: value })
                                }
                            />
                            <PremiumShadow
                                label={__(
                                    "Text Shadow",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={titleTextShadow}
                                onChange={(value) =>
                                    setAttributes({ titleTextShadow: value })
                                }
                                boxShadow={false}
                            />
                            <hr />
                            <PremiumBorder
                                label={__(
                                    "Border",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={titleBorder}
                                onChange={(value) =>
                                    setAttributes({ titleBorder: value })
                                }
                            />
                            <hr />
                            <ResponsiveRangeControl
                                label={__(
                                    "Rows Gap",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={titleMargin}
                                units={["px", "em", "%"]}
                                onChange={(newValue) =>
                                    setAttributes({
                                        titleMargin: newValue,
                                    })
                                }
                                showUnit={true}
                                min={0}
                                max={50}
                            />
                            <SpacingComponent
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={titlePadding}
                                responsive={true}
                                showUnits={true}
                                onChange={(value) =>
                                    setAttributes({ titlePadding: value })
                                }
                            />
                        </PanelBody>
                        <PanelBody
                            title={__(
                                "Content",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            {"text" === contentType && (
                                <Fragment>
                                    <PremiumTypo
                                        value={descTypography}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                descTypography: newValue,
                                            })
                                        }
                                    />
                                    <AdvancedPopColorControl
                                        label={__(
                                            "Text Color",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        colorValue={descStyles[0].descColor}
                                        colorDefault={""}
                                        onColorChange={(value) =>
                                            SaveDescStyles({ descColor: value })
                                        }
                                    />
                                    <AdvancedPopColorControl
                                        label={__(
                                            "Background Color",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        colorValue={descStyles[0].descBack}
                                        colorDefault={""}
                                        onColorChange={(value) =>
                                            SaveDescStyles({ descBack: value })
                                        }
                                    />
                                </Fragment>
                            )}
                            {"text" === contentType && (
                                <Fragment>
                                    <PremiumShadow
                                        label={__(
                                            "Text Shadow",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={textShadow}
                                        onChange={(value) =>
                                            setAttributes({ textShadow: value })
                                        }
                                        boxShadow={false}
                                    />
                                    <hr />
                                </Fragment>
                            )}
                            <PremiumBorder
                                label={__(
                                    "Border",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={descBorder}
                                onChange={(value) =>
                                    setAttributes({ descBorder: value })
                                }
                            />
                            <hr />
                            <SpacingComponent
                                value={descPadding}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ descPadding: value })
                                }
                            />
                        </PanelBody>
                        <PanelBody
                            title={__("Arrow", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveSingleRangeControl
                                label={__(
                                    "Size",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={arrowStyles[0].arrowSize}
                                onChange={(newValue) =>
                                    saveArrowStyles({ arrowSize: newValue })
                                }
                                showUnit={false}
                                defaultValue={20}
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Arrow Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={arrowStyles[0].arrowColor}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    saveArrowStyles({ arrowColor: newValue })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Background Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={arrowStyles[0].arrowBack}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    saveArrowStyles({ arrowBack: newValue })
                                }
                            />
                            {arrowStyles[0].arrowBack && (
                                <ResponsiveSingleRangeControl
                                    label={__(
                                        "Border Radius",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={arrowStyles[0].arrowRadius}
                                    onChange={(newValue) =>
                                        saveArrowStyles({
                                            arrowRadius:
                                                newValue === undefined
                                                    ? 0
                                                    : newValue,
                                        })
                                    }
                                    defaultValue={0}
                                    showUnit={false}
                                />
                            )}
                            <ResponsiveSingleRangeControl
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={arrowStyles[0].arrowPadding}
                                onChange={(newValue) =>
                                    saveArrowStyles({
                                        arrowPadding:
                                            newValue === undefined
                                                ? 0
                                                : newValue,
                                    })
                                }
                                defaultValue={0}
                                showUnit={false}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"advance"}>
                        <PremiumResponsiveTabs
                            Desktop={hideDesktop}
                            Tablet={hideTablet}
                            Mobile={hideMobile}
                            onChangeDesktop={(value) =>
                                setAttributes({
                                    hideDesktop: value
                                        ? " premium-desktop-hidden"
                                        : "",
                                })
                            }
                            onChangeTablet={(value) =>
                                setAttributes({
                                    hideTablet: value
                                        ? " premium-tablet-hidden"
                                        : "",
                                })
                            }
                            onChangeMobile={(value) =>
                                setAttributes({
                                    hideMobile: value
                                        ? " premium-mobile-hidden"
                                        : "",
                                })
                            }
                        />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <div
                ref={accordionRef}
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-accordion ${blockId}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
            >
                <style>{loadStyles()}</style>
                <BlockContent blockProps={props}>
                    <InnerBlocks
                        template={innerBlocksTemplate}
                        templateLock={false}
                        allowedBlocks={["premium/accordion-item"]}
                    />
                </BlockContent>
                {loadTitleGoogleFonts}
                {loadDescGoogleFonts}
            </div>
        </Fragment>
    );
}

export default compose([
    withSelect((select) => {
        const { __experimentalGetPreviewDeviceType = null } =
            select("core/edit-post");
        let deviceType = __experimentalGetPreviewDeviceType
            ? __experimentalGetPreviewDeviceType()
            : null;

        return {
            deviceType: deviceType,
        };
    }),
    withDispatch((dispatch, ownProps, { select }) => {
        return {
            insertOnlyAllowedBlock() {
                const { attributes, setAttributes } = ownProps;
                const template = [];
                const repeaterItems = [...attributes.repeaterItems];
                attributes.repeaterItems.map((item, index) => {
                    const block = [
                        "premium/accordion-item",
                        { title: item.titleText, description: item.descText },
                    ];

                    template.push(block);

                    repeaterItems.splice(index - 1, 1);

                    if (repeaterItems.length === 0) {
                        setAttributes({ repeaterItems: [] });
                        return;
                    }
                });

                return template;
            },
        };
    }),
])(PremiumAccordion);
