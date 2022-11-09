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
    PremiumTypo,
} from '@pbg/components';

const { withSelect } = wp.data
const { __ } = wp.i18n;
const { useEffect, Fragment } = wp.element;
const { PanelBody, SelectControl, ToggleControl } = wp.components;
const { InspectorControls, useInnerBlocksProps, InnerBlocks, useBlockProps } = wp.blockEditor;

function PremiumPricingTable(props) {
    const { setAttributes, className, clientId } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-pricing-table-" + generateBlockId(clientId)
        });
        setAttributes({ classMigrate: true });
    }, []);

    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
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
        ["premium/badge"],
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

    const saveTableStyles = (value) => {
        const newUpdate = tableStyles.map((item, indexTable) => {
            if (0 === indexTable) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ tableStyles: newUpdate });
    }

    const innerBlocksProps = useInnerBlocksProps({
        style: {
            backgroundColor: tableStyles[0].tableBack,
            boxShadow: `${tableBoxShadow.horizontal}px ${tableBoxShadow.vertical}px ${tableBoxShadow.blur}px ${tableBoxShadow.color} ${tableBoxShadow.position}`,
            ...borderCss(tableBorder, props.deviceType),
            ...paddingCss(tablePadding, props.deviceType)
        },
        className: classnames(`${blockId}`, `premium-pricing-table`),
    }, {
        template: INNER_BLOCKS_TEMPLATE,
        templateLock: false,
        allowedBlocks: ["premium/heading", "premium/bullet-list", "premium/button", "premium/text", "premium/price", "premium/badge"],
    });

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={['style', 'advance']}>
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
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
            >
                <div {...innerBlocksProps} />
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