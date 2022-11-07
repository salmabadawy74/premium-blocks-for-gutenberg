import classnames from "classnames";
import { generateBlockId, generateCss, typographyCss, paddingCss, marginCss, borderCss } from '@pbg/helpers';
import {
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    SpacingComponent,
    AdvancedColorControl as AdvancedPopColorControl,
    ResponsiveSingleRangeControl,
    WebfontLoader,
    PremiumShadow,
    PremiumTypo
} from '@pbg/components';

const { withSelect } = wp.data
const { __ } = wp.i18n;
const { useEffect, Fragment } = wp.element;
const { PanelBody, SelectControl, ToggleControl } = wp.components;
const { InspectorControls, RichText, InnerBlocks, useBlockProps } = wp.blockEditor;

function PremiumPricingTable(props) {
    const { setAttributes, className, clientId } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-pricing-table-" + generateBlockId(clientId)
        });
        setAttributes({ classMigrate: true });
    }, []);

    const {
        badgeChecked,
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        badgeStyles,
        tableStyles,
        tableBoxShadow,
        tableBorder,
        tablePadding,
        badgeTypography,
    } = props.attributes;

    const INNER_BLOCKS_TEMPLATE = [
        ["premium/heading", {
            title: __("Pricing Table", "premium-blocks-for-gutenberg"),
            titleTag: "h2",
            style: "none"
        }],
        ["premium/price"],
        ["premium/bullet-list", {
            align: {
                "Desktop": "center",
                "Tablet": "",
                "Mobile": ""
            }
        }],
        ["premium/text", {
            text: __("Lorem ipsum dolor sit amet, consectetur adipiscing elit", "premium-blocks-for-gutenberg"),
        }],
        ["premium/button", {
            btnText: __("Get Started", "premium-blocks-for-gutenberg"),
        }],
    ];

    const POSITION = [
        {
            value: "right",
            label: __("Right", 'premium-blocks-for-gutenberg')
        },
        {
            value: "left",
            label: __("Left", 'premium-blocks-for-gutenberg')
        }
    ];

    let loadBadgeGoogleFonts;

    if (badgeTypography.fontFamily !== "Default") {
        const badgeConfig = {
            google: {
                families: [badgeTypography.fontFamily],
            }
        };
        loadBadgeGoogleFonts = (
            <WebfontLoader config={badgeConfig}></WebfontLoader>
        );
    }

    const saveBadgeStyles = (value) => {
        const newUpdate = badgeStyles.map((item, idx) => {
            if (0 === idx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ badgeStyles: newUpdate });
    }

    const saveTableStyles = (value) => {
        const newUpdate = tableStyles.map((item, indexTable) => {
            if (0 === indexTable) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ tableStyles: newUpdate });
    }

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={['layout', 'style', 'advance']}>
                    <InspectorTab key={'layout'}>
                        <PanelBody
                            title={__("Display Options", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <ToggleControl
                                label={__("Badge", 'premium-blocks-for-gutenberg')}
                                checked={badgeChecked}
                                onChange={newValue => setAttributes({ badgeChecked: newValue })}
                            />
                        </PanelBody>
                        {badgeChecked && (
                            <PanelBody
                                title={__("Badge", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <ResponsiveSingleRangeControl
                                    label={__("Text Width", 'premium-blocks-for-gutenberg')}
                                    min="1"
                                    max="200"
                                    value={badgeStyles[0].badgeWidth}
                                    onChange={newValue => saveBadgeStyles({ badgeWidth: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Badge Size", 'premium-blocks-for-gutenberg')}
                                    value={badgeStyles[0].badgeSize}
                                    min="0"
                                    max="250"
                                    onChange={newValue => saveBadgeStyles({ badgeSize: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                />
                                <SelectControl
                                    label={__("Position", 'premium-blocks-for-gutenberg')}
                                    options={POSITION}
                                    value={badgeStyles[0].badgePos}
                                    onChange={newValue => saveBadgeStyles({ badgePos: newValue })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Vertical Offset", 'premium-blocks-for-gutenberg')}
                                    value={badgeStyles[0].badgeTop}
                                    onChange={newValue => saveBadgeStyles({ badgeTop: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Horizontal Offset", 'premium-blocks-for-gutenberg')}
                                    value={badgeStyles[0].badgeHorizontal}
                                    min="1"
                                    max="150"
                                    onChange={newValue => saveBadgeStyles({ badgeHorizontal: newValue })}
                                    showUnit={false}
                                    defaultValue={1}
                                />
                            </PanelBody>
                        )}
                    </InspectorTab>
                    <InspectorTab key={'style'}>
                        <PanelBody
                            title={__("Table", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <AdvancedPopColorControl
                                label={__(`Background Color`, 'premium-blocks-for-gutenberg')}
                                colorValue={tableStyles[0].tableBack}
                                onColorChange={(newvalue) => saveTableStyles({ tableBack: newvalue })}
                                colorDefault={``}
                            />
                            <PremiumShadow
                                value={tableBoxShadow}
                                onChange={(value) => setAttributes({ tableBoxShadow: value })}
                            />
                            <hr />
                            <PremiumBorder
                                label={__("Border", 'premium-blocks-for-gutenberg')}
                                value={tableBorder}
                                onChange={(value) => setAttributes({ tableBorder: value })}
                            />
                            <hr />
                            <SpacingComponent value={tablePadding} responsive={true} showUnits={true} label={__("Padding", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ tablePadding: value })} />
                        </PanelBody>
                        {badgeChecked && (
                            <PanelBody
                                title={__("Badge", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    value={badgeTypography}
                                    onChange={newValue => setAttributes({ badgeTypography: newValue })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={badgeStyles[0].badgeColor}
                                    colorDefault={''}
                                    onColorChange={newColor => saveBadgeStyles({ badgeColor: newColor })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={badgeStyles[0].badgeBack}
                                    colorDefault={'#793DC3'}
                                    onColorChange={newColor => saveBadgeStyles({ badgeBack: newColor })}
                                />
                            </PanelBody>
                        )}
                    </InspectorTab>
                    <InspectorTab key={'advance'}>
                        <PremiumResponsiveTabs
                            Desktop={hideDesktop}
                            Tablet={hideTablet}
                            Mobile={hideMobile}
                            onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                            onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                            onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                        />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-pricing-table ${blockId}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{
                    backgroundColor: tableStyles[0].tableBack,
                    boxShadow: `${tableBoxShadow.horizontal}px ${tableBoxShadow.vertical}px ${tableBoxShadow.blur}px ${tableBoxShadow.color} ${tableBoxShadow.position}`,
                    ...borderCss(tableBorder, props.deviceType),
                    ...paddingCss(tablePadding, props.deviceType)
                }}
            >
                {badgeChecked && (
                    <div
                        className={`premium-pricing-table__badge_wrap premium-pricing-table__badge_${badgeStyles[0].badgePos}`}
                    >
                        <div
                            className={`premium-pricing-table__badge`}
                            style={{
                                borderRightColor:
                                    "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeBack : "transparent",
                                borderTopColor: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeBack : "transparent",
                                borderLeftWidth: ("right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeSize + "px" : 0),
                                borderBottomWidth: badgeStyles[0].badgeSize + "px",
                                borderRightWidth: badgeStyles[0].badgeSize + "px",
                                borderTopWidth: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeSize + "px" : 0,
                            }}
                        >
                        </div>
                    </div>
                )}
                <InnerBlocks
                    template={INNER_BLOCKS_TEMPLATE}
                    templateLock={false}
                    allowedBlocks={["premium/heading", "premium/bullet-list", "premium/button", "premium/text", "premium/price"]}
                />
                {loadBadgeGoogleFonts}
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
})(PremiumPricingTable)