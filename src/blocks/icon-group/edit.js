import classnames from "classnames"
import {
    InspectorTabs,
    InspectorTab,
    Icons,
    PremiumBorder,
    PremiumResponsiveTabs,
    MultiButtonsControl as ResponsiveRadioControl,
    SpacingComponent as SpacingControl
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
        groupIconPadding
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
            "premium/icon",
            {
                selectedIcon: 'dashicons dashicons-facebook-alt',
            }
        ],
        [
            "premium/icon",
            {
                selectedIcon: 'fab fa-instagram',
            }
        ],
        [
            "premium/icon",
            {
                selectedIcon: 'dashicons dashicons-twitter',
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
                    className={`premium-icon-group-${groupAlign}`}
                    style={{
                        ...borderCss(groupIconBorder, props.deviceType),
                        ...paddingCss(groupIconPadding, props.deviceType),
                        ...marginCss(groupIconMargin, props.deviceType),
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