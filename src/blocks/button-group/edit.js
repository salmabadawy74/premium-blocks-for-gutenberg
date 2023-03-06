import classnames from "classnames"
import {
    InspectorTabs,
    InspectorTab,
    Icons,
    PremiumResponsiveTabs,
    MultiButtonsControl as ResponsiveRadioControl,
    SpacingComponent as SpacingControl,
    PremiumTypo,
    ResponsiveRangeControl
} from '@pbg/components';
import { generateBlockId, generateCss } from '@pbg/helpers';

const { withSelect } = wp.data
const { __ } = wp.i18n
const { useEffect, Fragment } = wp.element
const { InspectorControls, useBlockProps, InnerBlocks } = wp.blockEditor
const { PanelBody, SelectControl } = wp.components

function Edit(props) {
    const { setAttributes, className, clientId } = props;

    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        align,
        typography,
        groupMargin,
        groupPadding,
        groupAlign,
        buttonGap
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

    const INNER_BLOCKS_TEMPLATE = [
        [
            "premium/button",
            {}
        ]
    ];

    useEffect(() => {
        setAttributes({
            blockId: "premium-button-group-" + generateBlockId(clientId)
        });
        setAttributes({ classMigrate: true });
    }, []);

    const loadStyles = () => {
        const styles = {};

        styles[` .${blockId} .premium-button-group_wrap .premium-button`] = {
            "padding-top": `${groupPadding?.[props.deviceType]?.top}${groupPadding.unit}`,
            "padding-right": `${groupPadding?.[props.deviceType]?.right}${groupPadding.unit}`,
            "padding-bottom": `${groupPadding?.[props.deviceType]?.bottom}${groupPadding.unit}`,
            "padding-left": `${groupPadding?.[props.deviceType]?.left}${groupPadding.unit}`,
            "margin-top": `${groupMargin?.[props.deviceType]?.top}${groupMargin.unit}`,
            "margin-right": `${groupMargin?.[props.deviceType]?.right}${groupMargin.unit}`,
            "margin-bottom": `${groupMargin?.[props.deviceType]?.bottom}${groupMargin.unit}`,
            "margin-left": `${groupMargin?.[props.deviceType]?.left}${groupMargin.unit}`
        };

        styles[` .${blockId} .premium-button-group_wrap .premium-button .premium-button-text-edit`] = {
            "font-size": `${typography?.fontSize[props.deviceType]}${typography?.fontSize.unit}`,
            "font-style": typography?.fontStyle,
            "font-family": typography?.fontFamily,
            "font-weight": typography?.fontWeight,
            "letter-spacing": `${typography?.letterSpacing[props.deviceType]}${typography?.letterSpacing.unit}`,
            "text-decoration": typography?.textDecoration,
            "text-transform": typography?.textTransform,
            "line-height": `${typography?.lineHeight[props.deviceType]}${typography?.lineHeight.unit}`,
        };

        styles[` .${blockId} .premium-button-group-vertical`] = {
            'align-items': `${align[props.deviceType] == 'left' ? 'flex-start' : align[props.deviceType] == 'right' ? 'flex-end' : 'center'} !important`,
            'justify-content': `${align[props.deviceType]} !important`
        };

        styles[` .${blockId} .premium-button-group-vertical .block-editor-block-list__layout`] = {
            'row-gap': `${buttonGap[props.deviceType]}px !important`
        };

        styles[` .${blockId} .premium-button-group-horizontal .block-editor-block-list__layout`] = {
            'column-gap': `${buttonGap[props.deviceType]}px !important`,
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
                            <ResponsiveRangeControl
                                label={__(
                                    "Gap Between Buttons",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={buttonGap}
                                onChange={(value) =>
                                    setAttributes({ buttonGap: value })
                                }
                                showUnit={false}
                                min={0}
                                max={100}
                                defaultValue={10}
                            />
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
                            <PremiumTypo
                                value={typography}
                                onChange={(newValue) =>
                                    setAttributes({ typography: newValue })
                                }
                            />
                            <SpacingControl
                                label={__("Margin", "premium-blocks-for-gutenberg")}
                                value={groupMargin}
                                onChange={(value) => setAttributes({ groupMargin: value })}
                                showUnits={true}
                                responsive={true}
                            />
                            <SpacingControl
                                label={__("Padding", "premium-blocks-for-gutenberg")}
                                value={groupPadding}
                                onChange={(value) => setAttributes({ groupPadding: value })}
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
                        `premium-button-group ${blockId}`,
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
                    className={`premium-button-group_wrap premium-button-group-${groupAlign}`}
                    style={{
                        justifyContent: align[props.deviceType]
                    }}
                >
                    <InnerBlocks
                        template={INNER_BLOCKS_TEMPLATE}
                        templateLock={false}
                        allowedBlocks={["premium/button"]}
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