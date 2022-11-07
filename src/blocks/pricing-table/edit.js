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
        descChecked,
        badgeChecked,
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        descStyles,
        buttonStyles,
        badgeStyles,
        tableStyles,
        tableBoxShadow,
        tableBorder,
        tablePadding,
        descriptionPadding,
        descriptionMargin,
        descTypography,
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
        ["premium/button", {
            btnText: __("Get Started", "premium-blocks-for-gutenberg"),
        }],
    ];

    const loadStyles = () => {
        const styles = {};

        styles[`.${blockId} .premium-pricing-table__button_link:hover`] = {
            'color': `${buttonStyles?.[0]?.btnHoverColor}!important`,
            'background': `${buttonStyles?.[0]?.btnHoverBack}!important`
        };

        return generateCss(styles);
    }

    const ALIGNS = [
        {
            value: "flex-start",
            label: __("Top", 'premium-blocks-for-gutenberg')
        },
        {
            value: "center",
            label: __("Middle", 'premium-blocks-for-gutenberg')
        },
        {
            value: "flex-end",
            label: __("Bottom", 'premium-blocks-for-gutenberg')
        }
    ];

    const PRICE = [
        {
            value: "slash",
            label: __("Slashed Price", 'premium-blocks-for-gutenberg')
        },
        {
            value: "curr",
            label: __("Currency", 'premium-blocks-for-gutenberg')
        },
        {
            value: "price",
            label: __("Price", 'premium-blocks-for-gutenberg')
        },
        {
            value: "divider",
            label: __("Divider", 'premium-blocks-for-gutenberg')
        },
        {
            value: "duration",
            label: __("Duration", 'premium-blocks-for-gutenberg')
        }
    ];

    const TYPE = [
        {
            value: "none",
            label: __("None", 'premium-blocks-for-gutenberg')
        },
        {
            value: "check",
            label: __("Check Mark", 'premium-blocks-for-gutenberg')
        },
        {
            value: "disc",
            label: __("Filled Circle", 'premium-blocks-for-gutenberg')
        },
        {
            value: "circle",
            label: __("Outline Circle", 'premium-blocks-for-gutenberg')
        },
        {
            value: "square",
            label: __("Square", 'premium-blocks-for-gutenberg')
        }
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

    let loadDescriptionGoogleFonts;
    let loadBadgeGoogleFonts;

    if (descTypography.fontFamily !== "Default") {
        const descConfig = {
            google: {
                families: [descTypography.fontFamily],
            }
        };
        loadDescriptionGoogleFonts = (
            <WebfontLoader config={descConfig}></WebfontLoader>
        );
    }
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

    const saveDescriptionStyle = (value) => {
        const newUpdate = descStyles.map((item, indexDesc) => {
            if (0 === indexDesc) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ descStyles: newUpdate });
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
                                label={__("Description", 'premium-blocks-for-gutenberg')}
                                checked={descChecked}
                                onChange={newValue => setAttributes({ descChecked: newValue })}
                            />
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
                        {descChecked && (
                            <PanelBody
                                title={__("Description", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    value={descTypography}
                                    onChange={newValue => setAttributes({ descTypography: newValue })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={descStyles[0].descColor}
                                    colorDefault={''}
                                    onColorChange={newColor => saveDescriptionStyle({ descColor: newColor })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={descStyles[0].descBack}
                                    colorDefault={''}
                                    onColorChange={newColor => saveDescriptionStyle({ descBack: newColor })}
                                />
                                <hr />
                                <SpacingComponent value={descriptionMargin} responsive={true} showUnits={true} label={__("Margin", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ descriptionMargin: value })} />
                                <SpacingComponent value={descriptionPadding} responsive={true} showUnits={true} label={__("Padding", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ descriptionPadding: value })} />
                            </PanelBody>
                        )}
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
                            <RichText
                                tagName='span'
                                onChange={newText => saveBadgeStyles({ badgeText: newText })}
                                placeholder={__("Popular", 'premium-blocks-for-gutenberg')}
                                value={badgeStyles[0].badgeText}
                                style={{
                                    ...typographyCss(badgeTypography, props.deviceType),
                                    color: badgeStyles[0].badgeColor,
                                    width: badgeStyles[0].badgeWidth + "px",
                                    top: badgeStyles[0].badgeTop + "px",
                                    left: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto",
                                    right: "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto",
                                }}
                                keepPlaceholderOnFocus
                            />
                        </div>
                    </div>
                )}
                <InnerBlocks
                    template={INNER_BLOCKS_TEMPLATE}
                    templateLock={false}
                    allowedBlocks={["premium/heading", "premium/bullet-list", "premium/button"]}
                />
                {loadDescriptionGoogleFonts}
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