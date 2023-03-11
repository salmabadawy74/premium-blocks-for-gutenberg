import classnames from "classnames";
import { generateBlockId, paddingCss, borderCss } from "@pbg/helpers";
import {
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    SpacingComponent,
    AdvancedColorControl as AdvancedPopColorControl,
    PremiumShadow,
    BlockContent
} from "@pbg/components";

const { withSelect } = wp.data;
const { __ } = wp.i18n;
const { useEffect, Fragment } = wp.element;
const { PanelBody } = wp.components;
const { InspectorControls, useInnerBlocksProps, useBlockProps } =
    wp.blockEditor;

function PremiumPricingTable(props) {
    const { setAttributes, className, clientId } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-pricing-table-" + generateBlockId(clientId),
        });
        setAttributes({ classMigrate: true });
    }, []);

    const { attributes } = props;
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        tableStyles,
        tableBoxShadow,
        tableBorder,
        tablePadding,
    } = props.attributes;

    const INNER_BLOCKS_TEMPLATE = [
        [
            "premium/heading",
            {
                title: attributes.title
                    ? attributes.title?.[0]
                    : __("Pricing Table", "premium-blocks-for-gutenberg"),
                titleTag: attributes?.titleStyles?.titleTag
                    ? attributes.titleStyles.titleTag.toLowerCase()
                    : "h2",
                style: "default",
            },
        ],
        [
            "premium/price",
            {
                slashedPriceText: attributes?.priceStyles?.[0].slashPrice,
                currencyText: attributes?.priceStyles?.[0].currPrice,
                priceText: attributes?.priceStyles?.[0].valPrice,
                dividerText: attributes?.priceStyles?.[0].divPrice,
                durationText: attributes?.priceStyles?.[0].durPrice,
            },
        ],
        [
            "premium/bullet-list",
            {
                align: {
                    Desktop: "center",
                    Tablet: "center",
                    Mobile: "center",
                },
                repeaterBulletList:
                    attributes?.listItems &&
                    attributes.listItems.map((item, index) => ({
                        id: index,
                        label: item.props.children?.[0],
                        showBulletIcon: false,
                    })),
            },
        ],
        [
            "premium/text",
            {
                text: attributes?.desc
                    ? attributes.desc?.[0]
                    : __(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "premium-blocks-for-gutenberg"
                    ),
            },
        ],
        [
            "premium/button",
            {
                btnText: attributes?.btnText
                    ? attributes.btnText
                    : __("Get Started", "premium-blocks-for-gutenberg"),
            },
        ],
        [
            "premium/badge",
            {
                text: attributes?.badgeStyles?.[0].badgeText,
            },
        ],
    ];

    const saveTableStyles = (value) => {
        const newUpdate = tableStyles.map((item, indexTable) => {
            if (0 === indexTable) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ tableStyles: newUpdate });
    };

    const innerBlocksProps = useInnerBlocksProps(
        {
            style: {
                backgroundColor: tableStyles[0].tableBack,
                boxShadow: `${tableBoxShadow.horizontal}px ${tableBoxShadow.vertical}px ${tableBoxShadow.blur}px ${tableBoxShadow.color} ${tableBoxShadow.position}`,
                ...borderCss(tableBorder, props.deviceType),
                ...paddingCss(tablePadding, props.deviceType),
            },
            className: classnames(`${blockId}`, `premium-pricing-table`),
        },
        {
            template: INNER_BLOCKS_TEMPLATE,
            templateLock: false,
            allowedBlocks: [
                "premium/heading",
                "premium/bullet-list",
                "premium/button",
                "premium/text",
                "premium/price",
                "premium/badge",
            ],
        }
    );

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["style", "advance"]}>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__("Table", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <AdvancedPopColorControl
                                label={__(
                                    `Background Color`,
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={tableStyles[0].tableBack}
                                onColorChange={(newvalue) =>
                                    saveTableStyles({ tableBack: newvalue })
                                }
                                colorDefault={``}
                            />
                            <PremiumShadow
                                boxShadow={true}
                                value={tableBoxShadow}
                                onChange={(value) =>
                                    setAttributes({ tableBoxShadow: value })
                                }
                            />
                            <hr />
                            <PremiumBorder
                                label={__(
                                    "Border",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={tableBorder}
                                onChange={(value) =>
                                    setAttributes({ tableBorder: value })
                                }
                            />
                            <hr />
                            <SpacingComponent
                                value={tablePadding}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ tablePadding: value })
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
                {...useBlockProps({
                    className: classnames(className, {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }),
                })}
            >
                <BlockContent blockProps={props}>
                    <div {...innerBlocksProps} />
                </BlockContent>
            </div>
        </Fragment>
    );
}

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } =
        select("core/edit-post");
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    return {
        deviceType: deviceType,
    };
})(PremiumPricingTable);
