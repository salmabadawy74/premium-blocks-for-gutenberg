import classnames from "classnames";
import {
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    SpacingComponent as SpacingControl,
    PremiumShadow,
    InsideTabs,
    PremiumBackgroundControl,
    InsideTab,
    PremiumVariation
} from "@pbg/components";
import {
    gradientBackground,
    borderCss,
    paddingCss,
    marginCss,
    generateBlockId,
    generateCss,
} from "@pbg/helpers";
import { Variations } from './variations'

const { __ } = wp.i18n;
const { PanelBody } = wp.components;
const { Fragment, useEffect, useState } = wp.element;
const { withSelect } = wp.data;
const {
    InspectorControls,
    useInnerBlocksProps,
    useBlockProps
} = wp.blockEditor;

function Edit(props) {
    const { setAttributes, className, clientId, attributes } = props;
    const [openModal, setOpenModal] = useState({})

    useEffect(() => {
        setAttributes({
            blockId: "premium-icon-box-" + generateBlockId(clientId),
        });
        setAttributes({ classMigrate: true });
    }, []);

    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        containerPadding,
        containerMargin,
        containerBorder,
        containerBackground,
        containerShadow,
        containerHoverShadow,
        variation,
        showVariation
    } = attributes;

    const loadStyles = () => {
        const styles = {};
        styles[`.${blockId} .premium-icon-box:hover`] = {
            "box-shadow": `${containerHoverShadow.horizontal}px ${containerHoverShadow.vertical}px ${containerHoverShadow.blur}px ${containerHoverShadow.color} ${containerHoverShadow.position} !important`,
        };
        return generateCss(styles);
    };

    const innerBlocksProps = useInnerBlocksProps(
        {
            style: {
                boxShadow: `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position}`,
                ...borderCss(containerBorder, props.deviceType),
                ...paddingCss(containerPadding, props.deviceType),
                ...marginCss(containerMargin, props.deviceType),
                ...gradientBackground(containerBackground),
            },
            className: "premium-icon-box",
        },
        {
            template: variation.innerBlocks,
            templateLock: false,
            allowedBlocks: [
                "premium/heading",
                "premium/icon",
                "premium/button",
                "premium/text",
                "premium/image",
                "premium/lottie"
            ],
        }
    );

    const onSelectVariations = (v) => {
        console.log(v)
        setAttributes({
            variation: v,
            showVariation: false
        });
        setOpenModal(v)
    }

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                {!showVariation &&
                    <InspectorTabs tabs={["layout", "style", "advance"]}>
                        <InspectorTab key={"layout"}>
                            <PanelBody
                                title={__("Icon box", "premium-blocks-for-gutenberg")}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <PremiumVariation
                                    setAttributes={setAttributes}
                                    variations={Variations}
                                    onSelect={onSelectVariations}
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
                                <PremiumBackgroundControl
                                    value={containerBackground}
                                    onChange={(value) =>
                                        setAttributes({
                                            containerBackground: value,
                                        })
                                    }
                                />
                                <InsideTabs>
                                    <InsideTab
                                        tabTitle={__(
                                            "Normal",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    >
                                        <PremiumShadow
                                            value={containerShadow}
                                            onChange={(value) =>
                                                setAttributes({
                                                    containerShadow: value,
                                                })
                                            }
                                            boxShadow={true}
                                        />
                                    </InsideTab>
                                    <InsideTab
                                        tabTitle={__(
                                            "Hover",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    >
                                        <PremiumShadow
                                            label={__(
                                                "Hover Box Shadow",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            value={containerHoverShadow}
                                            onChange={(value) =>
                                                setAttributes({
                                                    containerHoverShadow: value,
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
                                    value={containerBorder}
                                    onChange={(value) =>
                                        setAttributes({
                                            containerBorder: value,
                                        })
                                    }
                                />
                                <hr />
                                <SpacingControl
                                    label={__(
                                        "Margin (PX)",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={containerMargin}
                                    onChange={(value) =>
                                        setAttributes({
                                            containerMargin: value,
                                        })
                                    }
                                    showUnits={false}
                                    responsive={true}
                                />
                                <SpacingControl
                                    label={__(
                                        "Padding",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={containerPadding}
                                    onChange={(value) =>
                                        setAttributes({
                                            containerPadding: value,
                                        })
                                    }
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
                }
            </InspectorControls>
            <div
                {...useBlockProps({
                    className: classnames(className, blockId, {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }),
                })}
            >
                {showVariation && <PremiumVariation
                    setAttributes={setAttributes}
                    variations={Variations}
                    onSelect={onSelectVariations}
                />
                }
                {!showVariation && variation != {} && <div {...innerBlocksProps} />}
                <style>{loadStyles()}</style>
            </div>
        </Fragment>
    );
}

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select(
        "core/edit-post"
    );
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    return {
        deviceType: deviceType,
    };
})(Edit);
