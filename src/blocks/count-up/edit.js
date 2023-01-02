import classnames from "classnames";
import {
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    SpacingComponent,
    PremiumShadow,
    MultiButtonsControl,
    PremiumBackgroundControl,
    PremiumVariation
} from "@pbg/components";
import {
    gradientBackground,
    borderCss,
    paddingCss,
    generateBlockId,
} from "@pbg/helpers";
import { Variations } from './variations'

const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { PanelBody, TextControl } = wp.components;

const { InspectorControls, useBlockProps, useInnerBlocksProps } = wp.blockEditor;

const { Fragment, useEffect } = wp.element;

function Edit(props) {
    const { setAttributes, className, clientId, attributes } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-countup-" + generateBlockId(clientId),
        });
        setAttributes({ classMigrate: true });
    }, []);

    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        padding,
        boxShadow,
        border,
        background,
        variation,
        showVariation
    } = attributes;

    const DIRECTION = [
        {
            value: "row",
            label: __("Row", "premium-blocks-for-gutenberg"),
        },
        {
            value: "row-reverse",
            label: __("Reversed Row", "premium-blocks-for-gutenberg"),
        },
        {
            value: "column",
            label: __("Column", "premium-blocks-for-gutenberg"),
        },
        {
            value: "column-reverse",
            label: __("Reversed Column", "premium-blocks-for-gutenberg"),
        },
    ];

    const onSelectVariations = (v) => {
        setAttributes({
            variation: v,
            showVariation: false
        });
    }

    const innerBlocksProps = useInnerBlocksProps(
        {
        },
        {
            template: variation.innerBlocks,
            templateLock: false,
            allowedBlocks: [
                "premium/icon",
                "premium/heading",
                "premium/image",
                "premium/lottie"
            ],
        }
    );

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["style", "advance"]}>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__(
                                "Container",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <PremiumBackgroundControl
                                value={background}
                                onChange={(value) =>
                                    setAttributes({ background: value })
                                }
                            />
                            <PremiumShadow
                                boxShadow={true}
                                value={boxShadow}
                                onChange={(value) =>
                                    setAttributes({ boxShadow: value })
                                }
                            />
                            <hr />
                            <PremiumBorder
                                label={__(
                                    "Border",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={border}
                                onChange={(value) =>
                                    setAttributes({ border: value })
                                }
                            />
                            <hr />
                            <SpacingComponent
                                value={padding}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ padding: value })
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
                                setAttributes({ hideDesktop: value })
                            }
                            onChangeTablet={(value) =>
                                setAttributes({ hideTablet: value })
                            }
                            onChangeMobile={(value) =>
                                setAttributes({ hideMobile: value })
                            }
                        />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `${blockId} premium-countup__wrap`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{
                    boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                    ...borderCss(border, props.deviceType),
                    ...paddingCss(padding, props.deviceType),
                    ...gradientBackground(background),
                }}
            >
                {showVariation && <PremiumVariation
                    setAttributes={setAttributes}
                    variations={Variations}
                    onSelect={onSelectVariations}
                />
                }
                {!showVariation && <div {...innerBlocksProps} />}
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
})(Edit);
