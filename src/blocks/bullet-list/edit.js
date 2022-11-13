import classnames from "classnames";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import {
    SortableContainer,
    SortableElement,
    arrayMove,
} from "react-sortable-hoc";
import {
    InspectorTabs,
    InspectorTab,
    Icons,
    PremiumBorder,
    PremiumResponsiveTabs,
    alignIcons as icons,
    MultiButtonsControl,
    PremiumMediaUpload,
    AdvancedColorControl as AdvancedPopColorControl,
    PremiumShadow,
    WebfontLoader,
    PremiumTypo,
    SpacingComponent,
    InsideTabs,
    InsideTab,
    ResponsiveRangeControl,
    iconsList,
} from "@pbg/components";
import { generateBlockId, generateCss } from "@pbg/helpers";
import { compose } from "@wordpress/compose";

const { withSelect, withDispatch } = wp.data;

const { __ } = wp.i18n;

const { useEffect, Fragment } = wp.element;

const { InspectorControls, useBlockProps, useInnerBlocksProps } =
    wp.blockEditor;

const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components;

function Edit(props) {
    const { setAttributes, className, clientId } = props;

    const {
        blockId,
        layoutPos,
        iconPosition,
        align,
        bulletAlign,
        bulletIconStyles,
        bulletIconBorder,
        generalmargin,
        bulletIconmargin,
        titlemargin,
        generalpadding,
        bulletIconpadding,
        titleStyles,
        generalStyles,
        generalBorder,
        divider,
        dividerStyle,
        dividerStyles,
        titlesTextShadow,
        boxShadow,
        hoverBoxShadow,
        bulletIconFontSize,
        dividerWidth,
        dividerHeight,
        titleTypography,
        hideDesktop,
        hideTablet,
        hideMobile,
    } = props.attributes;

    const INNER_BLOCKS_TEMPLATE = [
        [
            "premium/list-item",
            {
                title: __("Title #1", "premium-blocks-for-gutenberg"),
                icon: "fa fa-arrow-circle-right",
            },
        ],
        [
            "premium/list-item",
            {
                title: __("Title #2", "premium-blocks-for-gutenberg"),
                icon: "fa fa-arrow-circle-right",
            },
        ],
        [
            "premium/list-item",
            {
                title: __("Title #3", "premium-blocks-for-gutenberg"),
                icon: "fa fa-arrow-circle-right",
            },
        ],
    ];

    const innerBlocksTemplate = props.attributes?.repeaterBulletList?.length
        ? props.insertOnlyAllowedBlock()
        : INNER_BLOCKS_TEMPLATE;

    useEffect(() => {
        setAttributes({
            blockId: "premium-bullet-list-" + generateBlockId(clientId),
        });
        setAttributes({ classMigrate: true });
    }, []);

    let loadTitleGoogleFonts;

    if (titleTypography.fontFamily !== "Default") {
        const fontConfig = {
            google: {
                families: [titleTypography.fontFamily],
            },
        };
        loadTitleGoogleFonts = (
            <WebfontLoader config={fontConfig}></WebfontLoader>
        );
    }
    const LAYOUT = [
        {
            label: __("Block", "premium-blocks-for-gutenberg"),
            value: "block",
        },
        {
            label: __("Inline", "premium-blocks-for-gutenberg"),
            value: "inline",
        },
    ];

    const POSITION = [
        {
            label: __("After", "premium-blocks-for-gutenberg"),
            value: "after",
        },
        {
            label: __("Before", "premium-blocks-for-gutenberg"),
            value: "before",
        },
        {
            label: __("Top", "premium-blocks-for-gutenberg"),
            value: "top",
        },
    ];

    const DividerStyle = [
        {
            label: __("Solid", "premium-blocks-for-gutenberg"),
            value: "solid",
        },
        {
            label: __("Double", "premium-blocks-for-gutenberg"),
            value: "double",
        },
        {
            label: __("Dotted", "premium-blocks-for-gutenberg"),
            value: "dotted",
        },
        {
            label: __("Dashed", "premium-blocks-for-gutenberg"),
            value: "dashed",
        },
        {
            label: __("Groove", "premium-blocks-for-gutenberg"),
            value: "groove",
        },
    ];

    const currentDevice = props.deviceType;
    const BulletIconSize = bulletIconFontSize?.[currentDevice];
    const DividerWidth = dividerWidth?.[currentDevice];
    const DividerHeight = dividerHeight?.[currentDevice];

    const saveBulletIconStyles = (value) => {
        const newUpdate = bulletIconStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            bulletIconStyles: newUpdate,
        });
    };

    const saveTitleStyles = (value) => {
        const newUpdate = titleStyles.map((item, indexx) => {
            if (0 === indexx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            titleStyles: newUpdate,
        });
    };

    const saveGeneralStyles = (value) => {
        const newUpdate = generalStyles.map((item, indx) => {
            if (0 === indx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            generalStyles: newUpdate,
        });
    };

    const saveDividerStyles = (value) => {
        const newUpdate = dividerStyles.map((item, i) => {
            if (0 === i) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            dividerStyles: newUpdate,
        });
    };

    const loadStyles = () => {
        const styles = {};

        styles[
            `.${blockId} .premium-bullet-list__content-icon i, .${blockId} .premium-bullet-list__content-icon img`
        ] = {
            overflow: "hidden",
            "font-size": `${BulletIconSize}${bulletIconFontSize.unit}`,
            color: bulletIconStyles[0].bulletIconColor,
            "background-color": bulletIconStyles[0].bulletIconBackgroundColor,
            "vertical-align":
                bulletAlign?.[currentDevice] == "flex-start"
                    ? "top"
                    : bulletAlign?.[currentDevice] == "flex-end"
                    ? "bottom"
                    : "middle",
            "border-style": bulletIconBorder?.borderType,
            "border-top-width": `${bulletIconBorder?.borderWidth?.[currentDevice]?.top}px`,
            "border-right-width": `${bulletIconBorder?.borderWidth?.[currentDevice]?.right}px`,
            "border-bottom-width": `${bulletIconBorder?.borderWidth?.[currentDevice]?.bottom}px`,
            "border-left-width": `${bulletIconBorder?.borderWidth?.[currentDevice]?.left}px`,
            "border-color": `${bulletIconBorder?.borderColor}`,
            "border-top-left-radius": `${bulletIconBorder?.borderRadius?.[currentDevice].top}px`,
            "border-top-right-radius": `${bulletIconBorder?.borderRadius?.[currentDevice].right}px`,
            "border-bottom-left-radius": `${bulletIconBorder?.borderRadius?.[currentDevice].bottom}px`,
            "border-bottom-right-radius": `${bulletIconBorder?.borderRadius?.[currentDevice].left}px`,
            "padding-top": `${bulletIconpadding?.[currentDevice]?.top}${bulletIconpadding?.unit}`,
            "padding-right": `${bulletIconpadding?.[currentDevice]?.right}${bulletIconpadding?.unit}`,
            "padding-bottom": `${bulletIconpadding?.[currentDevice]?.bottom}${bulletIconpadding?.unit}`,
            "padding-left": `${bulletIconpadding?.[currentDevice]?.left}${bulletIconpadding?.unit}`,
        };

        styles[`.${blockId} .premium-bullet-list__wrapper`] = {
            "border-style": generalBorder?.borderType,
            "border-top-width": `${generalBorder?.borderWidth?.[currentDevice]?.top}px`,
            "border-right-width": `${generalBorder?.borderWidth?.[currentDevice]?.right}px`,
            "border-bottom-width": `${generalBorder?.borderWidth?.[currentDevice]?.bottom}px`,
            "border-left-width": `${generalBorder?.borderWidth?.[currentDevice]?.left}px`,
            "border-color": `${generalBorder?.borderColor}`,
            "border-top-left-radius": `${generalBorder?.borderRadius?.[currentDevice].top}px`,
            "border-top-right-radius": `${generalBorder?.borderRadius?.[currentDevice].right}px`,
            "border-bottom-left-radius": `${generalBorder?.borderRadius?.[currentDevice].bottom}px`,
            "border-bottom-right-radius": `${generalBorder?.borderRadius?.[currentDevice].left}px`,
            "padding-top": `${generalpadding?.[currentDevice]?.top}${generalpadding?.unit}`,
            "padding-right": `${generalpadding?.[currentDevice]?.right}${generalpadding?.unit}`,
            "padding-bottom": `${generalpadding?.[currentDevice]?.bottom}${generalpadding?.unit}`,
            "padding-left": `${generalpadding?.[currentDevice]?.left}${generalpadding?.unit}`,
            "margin-top": `${generalmargin?.[currentDevice]?.top}${generalmargin?.unit}`,
            "margin-right": `${generalmargin?.[currentDevice]?.right}${generalmargin?.unit}`,
            "margin-bottom": `${generalmargin?.[currentDevice]?.bottom}${generalmargin?.unit}`,
            "margin-left": `${generalmargin?.[currentDevice]?.left}${generalmargin?.unit}`,
            "text-align": align?.[currentDevice],
            overflow: "hidden",
            "justify-content":
                align?.[currentDevice] == "right"
                    ? "flex-end"
                    : align?.[currentDevice],
            "background-color": generalStyles[0].generalBackgroundColor,
            "box-shadow": `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.color} ${boxShadow.position}`,
        };

        styles[`.${blockId} .premium-bullet-list__content-wrap`] = {
            "justify-content":
                align?.[currentDevice] == "right"
                    ? align?.[currentDevice]
                    : align?.[currentDevice],
            display: iconPosition == "before" ? "flex" : "inline-flex",
            "flex-direction":
                iconPosition == "top"
                    ? align?.[currentDevice] == "right"
                        ? "column"
                        : "column"
                    : iconPosition == "after"
                    ? "row-reverse"
                    : "",
        };

        styles[`.${blockId} .premium-bullet-list__icon-wrap`] = {
            "align-self":
                bulletAlign?.[currentDevice] == "left"
                    ? "flex-start"
                    : bulletAlign?.[currentDevice] == "right"
                    ? "flex-end"
                    : "center",
            "text-align": bulletAlign?.[currentDevice],
            "justify-content": bulletAlign?.[currentDevice],
            "align-items":
                bulletAlign?.[currentDevice] == "left"
                    ? "flex-start"
                    : bulletAlign?.[currentDevice] == "right"
                    ? "flex-end"
                    : "center",
            "margin-top": `${bulletIconmargin?.[currentDevice]?.top}${bulletIconmargin?.unit}`,
            "margin-right": `${bulletIconmargin?.[currentDevice]?.right}${bulletIconmargin?.unit}`,
            "margin-bottom": `${bulletIconmargin?.[currentDevice]?.bottom}${bulletIconmargin?.unit}`,
            "margin-left": `${bulletIconmargin?.[currentDevice]?.left}${bulletIconmargin?.unit}`,
        };

        styles[`.${blockId} .premium-bullet-list__label-wrap`] = {
            "margin-top": `${titlemargin?.[currentDevice]?.top}${titlemargin?.unit}`,
            "margin-right": `${titlemargin?.[currentDevice]?.right}${titlemargin?.unit}`,
            "margin-bottom": `${titlemargin?.[currentDevice]?.bottom}${titlemargin?.unit}`,
            "margin-left": `${titlemargin?.[currentDevice]?.left}${titlemargin?.unit}`,
        };

        styles[`.${blockId} .premium-bullet-list__label`] = {
            color: titleStyles[0].titleColor,
            "text-shadow": `${titlesTextShadow.horizontal}px ${titlesTextShadow.vertical}px ${titlesTextShadow.blur}px ${titlesTextShadow.color}`,
            "font-size": `${titleTypography?.fontSize?.[currentDevice]}${titleTypography?.fontSize?.unit}`,
            "font-style": titleTypography?.fontStyle,
            "font-family": titleTypography?.fontFamily,
            "font-weight": titleTypography?.fontWeight,
            "letter-spacing": `${titleTypography?.letterSpacing?.[currentDevice]}${titleTypography?.letterSpacing?.unit}`,
            "text-decoration": titleTypography?.textDecoration,
            "text-transform": titleTypography?.textTransform,
            "line-height": `${titleTypography?.lineHeight?.[currentDevice]}${titleTypography?.lineHeight?.unit}`,
        };

        styles[`.${blockId} .premium-bullet-list__content-icon i:hover`] = {
            color: `${bulletIconStyles?.[0]?.bulletIconHoverColor}!important`,
            "background-color": `${bulletIconStyles?.[0]?.bulletIconHoverBackgroundColor}!important`,
        };
        styles[
            `.${blockId} .premium-bullet-list__label-wrap .premium-bullet-list__label:hover`
        ] = {
            color: `${titleStyles?.[0]?.titleHoverColor}!important`,
        };
        styles[`.${blockId} .premium-bullet-list__wrapper:hover`] = {
            "background-color": `${generalStyles?.[0]?.generalHoverBackgroundColor}!important`,
            "box-shadow": `${hoverBoxShadow?.horizontal}px ${hoverBoxShadow?.vertical}px ${hoverBoxShadow?.blur}px ${hoverBoxShadow?.color} ${hoverBoxShadow?.position}!important`,
        };

        styles[
            `.${blockId} .premium-bullet-list-divider-block:not(:last-child)::after`
        ] = {
            "border-top-width": `${DividerHeight}${dividerHeight?.unit}`,
            "border-top-style": dividerStyle,
            "border-top-color": dividerStyles?.[0]?.dividerColor,
            width: `${DividerWidth}${dividerWidth?.unit}`,
        };

        styles[
            `.${blockId} .premium-bullet-list-divider-inline:not(:last-child)::after`
        ] = {
            "border-left-width": `${DividerWidth}${dividerWidth?.unit}`,
            "border-left-style": dividerStyle,
            "border-left-color": dividerStyles?.[0]?.dividerColor,
            height: `${DividerHeight}${dividerHeight?.unit}`,
        };

        return generateCss(styles);
    };

    const innerBlocksProps = useInnerBlocksProps(
        {
            style: {
                textAlign: align?.[currentDevice],
                justifyContent:
                    align?.[currentDevice] == "right"
                        ? "flex-end"
                        : align?.[currentDevice],
            },
            className: classnames(
                `premium-bullet-list-${layoutPos}`,
                "premium-bullet-list"
            ),
        },
        {
            template: innerBlocksTemplate,
            templateLock: false,
            allowedBlocks: ["premium/list-item"],
        }
    );

    return (
        <Fragment>
            <InspectorControls>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__(
                                "Display Options",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__(
                                    "Layout Type",
                                    "premium-blocks-for-gutenberg"
                                )}
                                options={LAYOUT}
                                value={layoutPos}
                                onChange={(newValue) =>
                                    setAttributes({ layoutPos: newValue })
                                }
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
                                value={align}
                                onChange={(aligns) =>
                                    setAttributes({ align: aligns })
                                }
                                label={__(
                                    "Align",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                            <div>
                                {iconPosition !== "top" ? (
                                    <MultiButtonsControl
                                        choices={[
                                            {
                                                value: "flex-start",
                                                label: __(
                                                    "Top",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                                icon: icons.vertical_top,
                                            },
                                            {
                                                value: "center",
                                                label: __(
                                                    "Center",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                                icon: icons.vertical_middle,
                                            },
                                            {
                                                value: "flex-end",
                                                label: __(
                                                    "Bottom",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                                icon: icons.vertical_bottom,
                                            },
                                        ]}
                                        value={bulletAlign}
                                        onChange={(alignBullet) =>
                                            setAttributes({
                                                bulletAlign: alignBullet,
                                            })
                                        }
                                        label={__(
                                            "Bullet Alignment",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        showIcons={true}
                                    />
                                ) : (
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
                                        value={bulletAlign}
                                        onChange={(alignn) =>
                                            setAttributes({
                                                bulletAlign: alignn,
                                            })
                                        }
                                        label={__(
                                            "Align Content",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        showIcons={true}
                                    />
                                )}
                            </div>
                            <SelectControl
                                label={__(
                                    "Bullet Position",
                                    "premium-blocks-for-gutenberg"
                                )}
                                options={POSITION}
                                value={iconPosition}
                                onChange={(newValue) =>
                                    setAttributes({ iconPosition: newValue })
                                }
                            />
                            <ToggleControl
                                label={__(
                                    "Divider",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={divider}
                                onChange={(value) =>
                                    setAttributes({ divider: value })
                                }
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__(
                                "General Style",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <InsideTabs>
                                <InsideTab
                                    tabTitle={__(
                                        "Normal",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                >
                                    <AdvancedPopColorControl
                                        label={__(
                                            "Background Color",
                                            "premium-block-for-gutenberg"
                                        )}
                                        colorValue={
                                            generalStyles[0]
                                                .generalBackgroundColor
                                        }
                                        colorDefault={""}
                                        onColorChange={(newValue) =>
                                            saveGeneralStyles({
                                                generalBackgroundColor:
                                                    newValue,
                                            })
                                        }
                                    />
                                    <PremiumShadow
                                        boxShadow={true}
                                        value={boxShadow}
                                        onChange={(value) =>
                                            setAttributes({ boxShadow: value })
                                        }
                                    />
                                </InsideTab>
                                <InsideTab
                                    tabTitle={__(
                                        "Hover",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                >
                                    <AdvancedPopColorControl
                                        label={__(
                                            "Background Color",
                                            "premium-block-for-gutenberg"
                                        )}
                                        colorValue={
                                            generalStyles[0]
                                                .generalHoverBackgroundColor
                                        }
                                        colorDefault={""}
                                        onColorChange={(newValue) =>
                                            saveGeneralStyles({
                                                generalHoverBackgroundColor:
                                                    newValue,
                                            })
                                        }
                                    />
                                    <PremiumShadow
                                        label={__(
                                            "Hover Box Shadow",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={hoverBoxShadow}
                                        onChange={(value) =>
                                            setAttributes({
                                                hoverBoxShadow: value,
                                            })
                                        }
                                        boxShadow={true}
                                    />
                                </InsideTab>
                            </InsideTabs>
                            <PremiumBorder
                                label={__(
                                    "Border",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={generalBorder}
                                onChange={(value) =>
                                    setAttributes({ generalBorder: value })
                                }
                            />
                            <hr />
                            <SpacingComponent
                                value={generalmargin}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Margin",
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ generalmargin: value })
                                }
                            />
                            <SpacingComponent
                                value={generalpadding}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ generalpadding: value })
                                }
                            />
                        </PanelBody>
                        <PanelBody
                            title={__(
                                "Bullet Style",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveRangeControl
                                label={__(
                                    "Size",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={bulletIconFontSize}
                                units={["px", "em", "rem"]}
                                onChange={(newValue) =>
                                    setAttributes({
                                        bulletIconFontSize: newValue,
                                    })
                                }
                                showUnit={true}
                                min={1}
                                max={100}
                            />
                            <InsideTabs>
                                <InsideTab
                                    tabTitle={__(
                                        "Normal",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                >
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Color",
                                                "premium-block-for-gutenberg"
                                            )}
                                            colorValue={
                                                bulletIconStyles[0]
                                                    .bulletIconColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                saveBulletIconStyles({
                                                    bulletIconColor: newValue,
                                                })
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Background Color",
                                                "premium-block-for-gutenberg"
                                            )}
                                            colorValue={
                                                bulletIconStyles[0]
                                                    .bulletIconBackgroundColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                saveBulletIconStyles({
                                                    bulletIconBackgroundColor:
                                                        newValue,
                                                })
                                            }
                                        />
                                    </Fragment>
                                </InsideTab>
                                <InsideTab
                                    tabTitle={__(
                                        "Hover",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                >
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Color",
                                                "premium-block-for-gutenberg"
                                            )}
                                            colorValue={
                                                bulletIconStyles[0]
                                                    .bulletIconHoverColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                saveBulletIconStyles({
                                                    bulletIconHoverColor:
                                                        newValue,
                                                })
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Background Color",
                                                "premium-block-for-gutenberg"
                                            )}
                                            colorValue={
                                                bulletIconStyles[0]
                                                    .bulletIconHoverBackgroundColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                saveBulletIconStyles({
                                                    bulletIconHoverBackgroundColor:
                                                        newValue,
                                                })
                                            }
                                        />
                                    </Fragment>
                                </InsideTab>
                            </InsideTabs>
                            <PremiumBorder
                                label={__(
                                    "Border",
                                    "premium-block-for-gutenberg"
                                )}
                                value={bulletIconBorder}
                                onChange={(value) =>
                                    setAttributes({ bulletIconBorder: value })
                                }
                            />
                            <hr />
                            <SpacingComponent
                                value={bulletIconmargin}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Margin",
                                    "premium-block-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ bulletIconmargin: value })
                                }
                            />
                            <SpacingComponent
                                value={bulletIconpadding}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Padding",
                                    "premium-block-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ bulletIconpadding: value })
                                }
                            />
                        </PanelBody>
                        <PanelBody
                            title={__(
                                "Title Style",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumTypo
                                value={titleTypography}
                                onChange={(newValue) =>
                                    setAttributes({ titleTypography: newValue })
                                }
                            />
                            <InsideTabs>
                                <InsideTab
                                    tabTitle={__(
                                        "Normal",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                >
                                    <AdvancedPopColorControl
                                        label={__(
                                            "Color",
                                            "premium-block-for-gutenberg"
                                        )}
                                        colorValue={titleStyles[0].titleColor}
                                        colorDefault={""}
                                        onColorChange={(newValue) =>
                                            saveTitleStyles({
                                                titleColor: newValue,
                                            })
                                        }
                                    />
                                </InsideTab>
                                <InsideTab
                                    tabTitle={__(
                                        "Hover",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                >
                                    <AdvancedPopColorControl
                                        label={__(
                                            "Color",
                                            "premium-block-for-gutenberg"
                                        )}
                                        colorValue={
                                            titleStyles[0].titleHoverColor
                                        }
                                        colorDefault={""}
                                        onColorChange={(newValue) =>
                                            saveTitleStyles({
                                                titleHoverColor: newValue,
                                            })
                                        }
                                    />
                                </InsideTab>
                            </InsideTabs>
                            <PremiumShadow
                                label={__(
                                    "Text Shadow",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={titlesTextShadow}
                                onChange={(value) =>
                                    setAttributes({ titlesTextShadow: value })
                                }
                            />
                            <SpacingComponent
                                value={titlemargin}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Margin",
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ titlemargin: value })
                                }
                            />
                        </PanelBody>
                        {divider && (
                            <PanelBody
                                title={__(
                                    "Divider",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <SelectControl
                                    label={__(
                                        "Divider Style",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    options={DividerStyle}
                                    value={dividerStyle}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            dividerStyle: newValue,
                                        })
                                    }
                                />
                                <ResponsiveRangeControl
                                    label={__(
                                        "Width",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={dividerWidth}
                                    units={["px", "em", "%"]}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            dividerWidth: newValue,
                                        })
                                    }
                                    showUnit={true}
                                    min={1}
                                    max={600}
                                />
                                <ResponsiveRangeControl
                                    label={__(
                                        "Height",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={dividerHeight}
                                    units={["px", "em", "%"]}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            dividerHeight: newValue,
                                        })
                                    }
                                    showUnit={true}
                                    min={1}
                                    max={600}
                                />
                                <AdvancedPopColorControl
                                    label={__(
                                        "Color",
                                        "premium-block-for-gutenberg"
                                    )}
                                    colorValue={dividerStyles[0].dividerColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        saveDividerStyles({
                                            dividerColor: newValue,
                                        })
                                    }
                                />
                            </PanelBody>
                        )}
                    </InspectorTab>
                    <InspectorTab key={"advance"}>
                        <PremiumResponsiveTabs
                            Desktop={hideDesktop}
                            Tablet={hideTablet}
                            Mobile={hideMobile}
                            onChangeDesktop={(value) =>
                                setAttributes({
                                    hideDesktop: value,
                                })
                            }
                            onChangeTablet={(value) =>
                                setAttributes({
                                    hideTablet: value,
                                })
                            }
                            onChangeMobile={(value) =>
                                setAttributes({
                                    hideMobile: value,
                                })
                            }
                        />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-bullet-list ${blockId}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{ textAlign: align?.[props.deviceType] }}
            >
                <style>{loadStyles()}</style>
                <ul {...innerBlocksProps} />
                {loadTitleGoogleFonts}
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
                const repeaterBulletList = [...attributes.repeaterBulletList];

                attributes.repeaterBulletList.map((item, index) => {
                    const block = [
                        "premium/list-item",
                        {
                            title: item.label,
                            iconType: item.image_icon,
                            icon: item.icon,
                            imageURL: item.imageURL,
                            imageID: item.imageID,
                            enableLink: !item.disableLink,
                            openInNewTab: item.linkTarget,
                            showIcon: item.showBulletIcon,
                            linkURL: item.link,
                        },
                    ];

                    template.push(block);

                    repeaterBulletList.splice(index - 1, 1);

                    if (repeaterBulletList.length === 0) {
                        setAttributes({ repeaterBulletList: [] });
                        return;
                    }
                });

                return template;
            },
        };
    }),
])(Edit);
