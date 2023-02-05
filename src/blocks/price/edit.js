import { withSelect } from "@wordpress/data";
import { useEffect } from "react";
import {
    generateBlockId,
    typographyCss,
    paddingCss,
    marginCss,
} from "@pbg/helpers";
import {
    InspectorControls,
    useBlockProps,
    RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import {
    MultiButtonsControl,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    SpacingComponent,
    AdvancedColorControl as AdvancedPopColorControl,
    Icons,
    WebfontLoader,
    PremiumTypo,
    alignIcons,
} from "@pbg/components";
import { Fragment } from "react";
import classnames from "classnames";
import { __ } from "@wordpress/i18n";

function Edit({ clientId, attributes, setAttributes, deviceType }) {
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        align,
        padding,
        margin,
        slashedTypography,
        slashedColor,
        slashedAlign,
        slashedBgColor,
        currencyTypography,
        currencyColor,
        currencyAlign,
        currencyBgColor,
        priceTypography,
        priceColor,
        priceAlign,
        priceBgColor,
        dividerTypography,
        dividerColor,
        dividerAlign,
        dividerBgColor,
        durationTypography,
        durationColor,
        durationAlign,
        durationBgColor,
        slashedPriceText,
        currencyText,
        priceText,
        dividerText,
        durationText,
    } = attributes;

    const ALIGNS = [
        {
            value: "flex-start",
            label: __("Top", "premium-blocks-for-gutenberg"),
            icon: alignIcons.vertical_top,
        },
        {
            value: "center",
            label: __("Middle", "premium-blocks-for-gutenberg"),
            icon: alignIcons.vertical_middle,
        },
        {
            value: "flex-end",
            label: __("Bottom", "premium-blocks-for-gutenberg"),
            icon: alignIcons.vertical_bottom,
        },
    ];

    useEffect(() => {
        // Set block id.
        setAttributes({
            blockId: "premium-price-" + generateBlockId(clientId),
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames("premium-price", blockId, {
            ["premium-desktop-hidden"]: hideDesktop,
            ["premium-tablet-hidden"]: hideTablet,
            ["premium-mobile-hidden"]: hideMobile,
        }),
        style: {
            justifyContent: align?.[deviceType],
            ...paddingCss(padding, deviceType),
            ...marginCss(margin, deviceType),
        },
    });
    const googleFonts = [];
    if (slashedTypography?.fontFamily !== "Default") {
        googleFonts.push(slashedTypography?.fontFamily);
    }
    if (currencyTypography?.fontFamily !== "Default") {
        googleFonts.push(currencyTypography?.fontFamily);
    }
    if (priceTypography?.fontFamily !== "Default") {
        googleFonts.push(priceTypography?.fontFamily);
    }
    if (dividerTypography?.fontFamily !== "Default") {
        googleFonts.push(dividerTypography?.fontFamily);
    }
    if (durationTypography?.fontFamily !== "Default") {
        googleFonts.push(durationTypography?.fontFamily);
    }
    const fontConfig = {
        google: {
            families: googleFonts,
        },
    };
    let loadGoogleFonts;
    if (googleFonts.length > 0) {
        loadGoogleFonts = <WebfontLoader config={fontConfig}></WebfontLoader>;
    }

    return (
        <Fragment>
            <InspectorControls>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__(
                                "Container",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <MultiButtonsControl
                                choices={[
                                    {
                                        value: "flex-start",
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
                                onChange={(align) =>
                                    setAttributes({ align: align })
                                }
                                label={__(
                                    "Align",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                            <TextControl
                                label={__(
                                    "Slashed Price",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={slashedPriceText}
                                onChange={(value) =>
                                    setAttributes({ slashedPriceText: value })
                                }
                            />
                            <TextControl
                                label={__(
                                    "Currency",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={currencyText}
                                onChange={(value) =>
                                    setAttributes({ currencyText: value })
                                }
                            />
                            <TextControl
                                label={__(
                                    "Price",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={priceText}
                                onChange={(value) =>
                                    setAttributes({ priceText: value })
                                }
                            />
                            <TextControl
                                label={__(
                                    "Divider",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={dividerText}
                                onChange={(value) =>
                                    setAttributes({ dividerText: value })
                                }
                            />
                            <TextControl
                                label={__(
                                    "Duration",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={durationText}
                                onChange={(value) =>
                                    setAttributes({ durationText: value })
                                }
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__(
                                "Container",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <SpacingComponent
                                value={margin}
                                responsive={true}
                                showUnits={true}
                                label={__("Margin")}
                                onChange={(value) =>
                                    setAttributes({ margin: value })
                                }
                            />
                            <SpacingComponent
                                value={padding}
                                responsive={true}
                                showUnits={true}
                                label={__("Padding")}
                                onChange={(value) =>
                                    setAttributes({ padding: value })
                                }
                            />
                        </PanelBody>
                        <PanelBody
                            title={__(
                                "Slashed Price",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <MultiButtonsControl
                                choices={ALIGNS}
                                value={slashedAlign}
                                onChange={(newAlign) =>
                                    setAttributes({ slashedAlign: newAlign })
                                }
                                label={__(
                                    "Vertical Alignment",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                            <PremiumTypo
                                components={[
                                    "responsiveSize",
                                    "weight",
                                    "family",
                                    "spacing",
                                    "style",
                                    "Upper",
                                    "line",
                                    "Decoration",
                                ]}
                                value={slashedTypography}
                                onChange={(newValue) =>
                                    setAttributes({
                                        slashedTypography: newValue,
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={slashedColor}
                                colorDefault={""}
                                onColorChange={(value) =>
                                    setAttributes({ slashedColor: value })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Background Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={slashedBgColor}
                                colorDefault={""}
                                onColorChange={(value) =>
                                    setAttributes({ slashedBgColor: value })
                                }
                            />
                        </PanelBody>
                        <PanelBody
                            title={__(
                                "Currency",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <MultiButtonsControl
                                choices={ALIGNS}
                                value={currencyAlign}
                                onChange={(newAlign) =>
                                    setAttributes({ currencyAlign: newAlign })
                                }
                                label={__(
                                    "Vertical Alignment",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                            <PremiumTypo
                                components={[
                                    "responsiveSize",
                                    "weight",
                                    "family",
                                    "spacing",
                                    "style",
                                    "Upper",
                                    "line",
                                    "Decoration",
                                ]}
                                value={currencyTypography}
                                onChange={(newValue) =>
                                    setAttributes({
                                        currencyTypography: newValue,
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={currencyColor}
                                colorDefault={""}
                                onColorChange={(value) =>
                                    setAttributes({ currencyColor: value })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Background Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={currencyBgColor}
                                colorDefault={""}
                                onColorChange={(value) =>
                                    setAttributes({ currencyBgColor: value })
                                }
                            />
                        </PanelBody>
                        <PanelBody
                            title={__("Price", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <MultiButtonsControl
                                choices={ALIGNS}
                                value={priceAlign}
                                onChange={(newAlign) =>
                                    setAttributes({ priceAlign: newAlign })
                                }
                                label={__(
                                    "Vertical Alignment",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                            <PremiumTypo
                                components={[
                                    "responsiveSize",
                                    "weight",
                                    "family",
                                    "spacing",
                                    "style",
                                    "Upper",
                                    "line",
                                    "Decoration",
                                ]}
                                value={priceTypography}
                                onChange={(newValue) =>
                                    setAttributes({ priceTypography: newValue })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={priceColor}
                                colorDefault={""}
                                onColorChange={(value) =>
                                    setAttributes({ priceColor: value })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Background Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={priceBgColor}
                                colorDefault={""}
                                onColorChange={(value) =>
                                    setAttributes({ priceBgColor: value })
                                }
                            />
                        </PanelBody>
                        <PanelBody
                            title={__(
                                "Divider",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <MultiButtonsControl
                                choices={ALIGNS}
                                value={dividerAlign}
                                onChange={(newAlign) =>
                                    setAttributes({ dividerAlign: newAlign })
                                }
                                label={__(
                                    "Vertical Alignment",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                            <PremiumTypo
                                components={[
                                    "responsiveSize",
                                    "weight",
                                    "family",
                                    "spacing",
                                    "style",
                                    "Upper",
                                    "line",
                                    "Decoration",
                                ]}
                                value={dividerTypography}
                                onChange={(newValue) =>
                                    setAttributes({
                                        dividerTypography: newValue,
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={dividerColor}
                                colorDefault={""}
                                onColorChange={(value) =>
                                    setAttributes({ dividerColor: value })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Background Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={dividerBgColor}
                                colorDefault={""}
                                onColorChange={(value) =>
                                    setAttributes({ dividerBgColor: value })
                                }
                            />
                        </PanelBody>
                        <PanelBody
                            title={__(
                                "Duration",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <MultiButtonsControl
                                choices={ALIGNS}
                                value={durationAlign}
                                onChange={(newAlign) =>
                                    setAttributes({ durationAlign: newAlign })
                                }
                                label={__(
                                    "Vertical Alignment",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                            <PremiumTypo
                                components={[
                                    "responsiveSize",
                                    "weight",
                                    "family",
                                    "spacing",
                                    "style",
                                    "Upper",
                                    "line",
                                    "Decoration",
                                ]}
                                value={durationTypography}
                                onChange={(newValue) =>
                                    setAttributes({
                                        durationTypography: newValue,
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={durationColor}
                                colorDefault={""}
                                onColorChange={(value) =>
                                    setAttributes({ durationColor: value })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Background Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={durationBgColor}
                                colorDefault={""}
                                onColorChange={(value) =>
                                    setAttributes({ durationBgColor: value })
                                }
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
            <div {...blockProps}>
                <RichText
                    tagName="strike"
                    value={slashedPriceText}
                    className="premium-pricing-slash"
                    onChange={(val) => setAttributes({ slashedPriceText: val })}
                    multiline={false}
                    style={{
                        color: slashedColor,
                        backgroundColor: slashedBgColor,
                        ...typographyCss(slashedTypography, deviceType),
                        alignSelf: slashedAlign?.[deviceType],
                    }}
                />
                <RichText
                    tagName="span"
                    value={currencyText}
                    className="premium-pricing-currency"
                    onChange={(val) => setAttributes({ currencyText: val })}
                    multiline={false}
                    style={{
                        color: currencyColor,
                        backgroundColor: currencyBgColor,
                        ...typographyCss(currencyTypography, deviceType),
                        alignSelf: currencyAlign?.[deviceType],
                    }}
                />
                <RichText
                    tagName="span"
                    value={priceText}
                    className="premium-pricing-val"
                    onChange={(val) => setAttributes({ priceText: val })}
                    multiline={false}
                    style={{
                        color: priceColor,
                        backgroundColor: priceBgColor,
                        ...typographyCss(priceTypography, deviceType),
                        alignSelf: priceAlign?.[deviceType],
                    }}
                />
                <RichText
                    tagName="span"
                    value={dividerText}
                    className="premium-pricing-divider"
                    onChange={(val) => setAttributes({ dividerText: val })}
                    multiline={false}
                    style={{
                        color: dividerColor,
                        backgroundColor: dividerBgColor,
                        ...typographyCss(dividerTypography, deviceType),
                        alignSelf: dividerAlign?.[deviceType],
                    }}
                />
                <RichText
                    tagName="span"
                    value={durationText}
                    className="premium-pricing-dur"
                    onChange={(val) => setAttributes({ durationText: val })}
                    multiline={false}
                    style={{
                        color: durationColor,
                        backgroundColor: durationBgColor,
                        ...typographyCss(durationTypography, deviceType),
                        alignSelf: durationAlign?.[deviceType],
                    }}
                />
                {loadGoogleFonts}
            </div>
        </Fragment>
    );
}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select(
        "core/edit-post"
    );
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    return {
        // Editor preview device.
        deviceType: deviceType,
    };
})(Edit);
