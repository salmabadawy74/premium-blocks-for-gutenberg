import classnames from "classnames"
import {
    InspectorTabs,
    InspectorTab,
    Icons,
    PremiumBorder,
    PremiumResponsiveTabs,
    MultiButtonsControl as ResponsiveRadioControl,
    SpacingComponent as SpacingControl,
    AdvancedColorControl as AdvancedPopColorControl,
    InsideTabs,
    InsideTab
} from '@pbg/components';
import { borderCss, paddingCss, marginCss, generateBlockId, generateCss } from '@pbg/helpers';

const { withSelect } = wp.data
const { __ } = wp.i18n
const { useEffect, Fragment } = wp.element
const { InspectorControls, useBlockProps, InnerBlocks } = wp.blockEditor
const { PanelBody, SelectControl } = wp.components

function Edit(props) {
    const { setAttributes, className, clientId } = props;

    const {
        blockId,
        align,
        groupAlign,
        hideDesktop,
        hideTablet,
        hideMobile,
        groupIconBorder,
        groupIconMargin,
        groupIconPadding,
        groupIconColor,
        groupIconBack,
        groupIconHoverColor,
        groupIconHoverBack,
        hoverEffect
    } = props.attributes

    const GroupAlign = [
        {
            value: "horizontal",
            label: __("Horizontal", "premium-blocks-for-gutenberg"),
        },
        {
            value: "vertical",
            label: __("Vertical", "premium-blocks-for-gutenberg"),
        }
    ];

    const EFFECTS = [
        {
            value: "none",
            label: __("None", "premium-blocks-for-gutenberg"),
        },
        {
            value: "pulse",
            label: __("Pulse", "premium-blocks-for-gutenberg"),
        },
        {
            value: "rotate",
            label: __("Rotate", "premium-blocks-for-gutenberg"),
        },
        {
            value: "drotate",
            label: __("3D Rotate", "premium-blocks-for-gutenberg"),
        },
        {
            value: "buzz",
            label: __("Buzz", "premium-blocks-for-gutenberg"),
        },
        {
            value: "drop",
            label: __("Drop Shadow", "premium-blocks-for-gutenberg"),
        },
        {
            value: "wobble",
            label: __("Wobble", "premium-blocks-for-gutenberg"),
        },
    ];

    const INNER_BLOCKS_TEMPLATE = [
        [
            "premium/icon",
            {
                selectedIcon: 'dashicons dashicons-facebook-alt',
                iconSize: {
                    default: {
                        Desktop: "30",
                        Tablet: "30",
                        Mobile: "30",
                        unit: "px"
                    }
                },
            }
        ],
        [
            "premium/icon",
            {
                selectedIcon: 'fab fa-instagram',
                iconSize: {
                    default: {
                        Desktop: "30",
                        Tablet: "30",
                        Mobile: "30",
                        unit: "px"
                    }
                },
            }
        ],
        [
            "premium/icon",
            {
                selectedIcon: 'dashicons dashicons-twitter',
                iconSize: {
                    default: {
                        Desktop: "30",
                        Tablet: "30",
                        Mobile: "30",
                        unit: "px"
                    }
                },
            }
        ],
    ];

    useEffect(() => {
        setAttributes({
            blockId: "premium-icon-group-" + generateBlockId(clientId)
        });
        setAttributes({ classMigrate: true });
    }, []);

    const loadStyles = () => {
        const styles = {};

        styles[` .${blockId} .premium-icon-group-horizontal`] = {
            'justify-content': `${align[props.deviceType]} !important`
        };

        styles[` .${blockId} .premium-icon-group-vertical`] = {
            'align-items': `${align[props.deviceType] == 'left' ? 'flex-start' : align[props.deviceType] == 'right' ? 'flex-end' : 'center'} !important`,
            'justify-content': `${align[props.deviceType]} !important`
        };

        styles[` .${blockId} .premium-icon-group-container i:hover`] = {
            color: `${groupIconHoverColor}`,
            "background-color": `${groupIconHoverBack}`,
        };

        styles[` .${blockId} .premium-icon-group-container i`] = {
            color: `${groupIconColor}`,
            "background-color": `${groupIconBack}`,
            'border-color': `${groupIconBorder && groupIconBorder.borderColor}`,
            'border-style': `${groupIconBorder && groupIconBorder.borderType}`,
            'border-top-width': `${groupIconBorder && groupIconBorder.borderWidth[props.deviceType].top}px`,
            'border-right-width': `${groupIconBorder && groupIconBorder.borderWidth[props.deviceType].right}px`,
            'border-bottom-width': `${groupIconBorder && groupIconBorder.borderWidth[props.deviceType].bottom}px`,
            'border-left-width': `${groupIconBorder && groupIconBorder.borderWidth[props.deviceType].left}px`,
            'border-top-left-radius': `${groupIconBorder?.borderRadius?.[props.deviceType]?.top || 0}px`,
            'border-top-right-radius': `${groupIconBorder?.borderRadius?.[props.deviceType]?.right || 0}px`,
            'border-bottom-left-radius': `${groupIconBorder?.borderRadius?.[props.deviceType]?.bottom || 0}px`,
            'border-bottom-right-radius': `${groupIconBorder?.borderRadius?.[props.deviceType]?.left || 0}px`,
            "padding-top": `${groupIconPadding?.[props.deviceType]?.top}${groupIconPadding.unit}`,
            "padding-right": `${groupIconPadding?.[props.deviceType]?.right}${groupIconPadding.unit}`,
            "padding-bottom": `${groupIconPadding?.[props.deviceType]?.bottom}${groupIconPadding.unit}`,
            "padding-left": `${groupIconPadding?.[props.deviceType]?.left}${groupIconPadding.unit}`,
            "margin-top": `${groupIconMargin?.[props.deviceType]?.top}${groupIconMargin.unit}`,
            "margin-right": `${groupIconMargin?.[props.deviceType]?.right}${groupIconMargin.unit}`,
            "margin-bottom": `${groupIconMargin?.[props.deviceType]?.bottom}${groupIconMargin.unit}`,
            "margin-left": `${groupIconMargin?.[props.deviceType]?.left}${groupIconMargin.unit}`
        };

        return generateCss(styles);
    }

    return (
        <Fragment>
            <InspectorControls>
                <InspectorTabs tabs={['layout', 'style', 'advance']}>
                    <InspectorTab key={'layout'}>
                        <PanelBody
                            title={__("General Settings", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <ResponsiveRadioControl
                                label={__("Alignment", "premium-blocks-for-gutenberg")}
                                choices={[
                                    { value: "left", label: __("Left", "premium-blocks-for-gutenberg"), icon: Icons.alignLeft },
                                    { value: "center", label: __("Center", "premium-blocks-for-gutenberg"), icon: Icons.alignCenter },
                                    { value: "right", label: __("Right", "premium-blocks-for-gutenberg"), icon: Icons.alignRight },
                                ]}
                                value={align}
                                onChange={(newValue) => setAttributes({ align: newValue })}
                                showIcons={true}
                            />
                            <SelectControl
                                label={__("Group Alignment", "premium-blocks-for-gutenberg")}
                                options={GroupAlign}
                                value={groupAlign}
                                onChange={(newEffect) => setAttributes({ groupAlign: newEffect })}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={'style'}>
                        <PanelBody
                            title={__("Group Styles", "premium-blocks-for-gutenberg")}
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
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={groupIconColor}
                                            colorDefault={""}
                                            onColorChange={(value) =>
                                                setAttributes({
                                                    groupIconColor: value,
                                                })
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Background Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={groupIconBack}
                                            colorDefault={""}
                                            onColorChange={(value) =>
                                                setAttributes({
                                                    groupIconBack: value,
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
                                                "Hover Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={
                                                groupIconHoverColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(value) =>
                                                setAttributes({
                                                    groupIconHoverColor: value,
                                                })
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Hover Background Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={
                                                groupIconHoverBack
                                            }
                                            colorDefault={""}
                                            onColorChange={(value) =>
                                                setAttributes({
                                                    groupIconHoverBack: value,
                                                })
                                            }
                                        />
                                        <SelectControl
                                            label={__(
                                                "Hover Effect",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            options={EFFECTS}
                                            value={hoverEffect}
                                            onChange={(newEffect) =>
                                                setAttributes({
                                                    hoverEffect: newEffect,
                                                })
                                            }
                                        />
                                    </Fragment>
                                </InsideTab>
                            </InsideTabs>
                            <PremiumBorder
                                label={__("Border", "premium-blocks-for-gutenberg")}
                                value={groupIconBorder}
                                onChange={(value) => setAttributes({ groupIconBorder: value })}
                            />
                            <hr />
                            <SpacingControl
                                label={__("Margin", "premium-blocks-for-gutenberg")}
                                value={groupIconMargin}
                                onChange={(value) => setAttributes({ groupIconMargin: value })}
                                showUnits={true}
                                responsive={true}
                            />
                            <SpacingControl
                                label={__("Padding", "premium-blocks-for-gutenberg")}
                                value={groupIconPadding}
                                onChange={(value) => setAttributes({ groupIconPadding: value })}
                                showUnits={true}
                                responsive={true}
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
            </InspectorControls >
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-icon-group ${blockId}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{
                    textAlign: align[props.deviceType]
                }}
            >
                <style>{loadStyles()}</style>
                <div
                    className={`premium-icon-group-container premium-icon-group-${groupAlign} premium-icon__${hoverEffect}`}
                    style={{
                        // ...borderCss(groupIconBorder, props.deviceType),
                        // ...paddingCss(groupIconPadding, props.deviceType),
                        // ...marginCss(groupIconMargin, props.deviceType),
                        // color: groupIconColor,
                        // backgroundColor: groupIconBack
                    }}
                >
                    <InnerBlocks
                        template={INNER_BLOCKS_TEMPLATE}
                        templateLock={false}
                        allowedBlocks={["premium/icon"]}
                    />
                </div>
            </div>
        </Fragment>
    );
}

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(Edit)