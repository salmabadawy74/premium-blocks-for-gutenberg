import classnames from "classnames";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import {
    RadioComponent,
    ResponsiveRangeControl,
    MultiButtonsControl as ResponsiveRadioControl,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    SpacingComponent as SpacingControl,
    AdvancedColorControl as AdvancedPopColorControl,
    PremiumShadow,
    InsideTabs,
    PremiumBackgroundControl,
    Icons,
    InsideTab,
    iconsList,
    WebfontLoader,
    ResponsiveSingleRangeControl,
    PremiumMediaUpload,
    PremiumTypo
} from '@pbg/components';
import { gradientBackground, borderCss, paddingCss, marginCss, generateBlockId, generateCss } from '@pbg/helpers';

const { __ } = wp.i18n;
const { PanelBody, SelectControl, ToggleControl, TextControl } = wp.components;
const { Fragment, useEffect } = wp.element;
const { withSelect } = wp.data;
const { InspectorControls, useInnerBlocksProps, useBlockProps } = wp.blockEditor;


function Edit(props) {
    const { setAttributes, className, clientId } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-icon-box-" + generateBlockId(clientId)
        });
        setAttributes({ classMigrate: true });
    }, []);

    const { attributes } = props;

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
    } = props.attributes;

    const INNER_BLOCKS_TEMPLATE = [
        ["premium/icon", {
            selectedIcon: attributes?.selectedIcon,

        }],
        ["premium/heading", {
            title: attributes?.titleText ? attributes.titleText[0] : __("Title", "premium-blocks-for-gutenberg"),
            titleTag: attributes?.titleTag ? attributes.titleTag.toLowerCase() : "h2",
            style: "none"
        }],
        ["premium/text", {
            text: attributes?.descText ? attributes.descText[0] : __("Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.", "premium-blocks-for-gutenberg"),
        }],
        ["premium/button", {
            btnText: attributes?.btnText ? attributes.btnText[0] : __("Click Here", "premium-blocks-for-gutenberg"),
        }],
    ];

    const loadStyles = () => {
        const styles = {};
        styles[`.${blockId} .premium-icon-box:hover`] = {
            "box-shadow": `${containerHoverShadow.horizontal}px ${containerHoverShadow.vertical}px ${containerHoverShadow.blur}px ${containerHoverShadow.color} ${containerHoverShadow.position} !important`,
        };
        return generateCss(styles);
    };

    const innerBlocksProps = useInnerBlocksProps({
        style: {
            boxShadow: `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position}`,
            ...borderCss(containerBorder, props.deviceType),
            ...paddingCss(containerPadding, props.deviceType),
            ...marginCss(containerMargin, props.deviceType),
            ...gradientBackground(containerBackground),
        },
        className: 'premium-icon-box'
    }, {
        template: INNER_BLOCKS_TEMPLATE,
        templateLock: false,
        allowedBlocks: ["premium/heading", "premium/icon", "premium/button", "premium/text"],
    });

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
                                value={containerBackground}
                                onChange={(value) =>
                                    setAttributes({
                                        containerBackground: value,
                                    })
                                }
                            />
                            <InsideTabs>
                                <InsideTab tabTitle={__("Normal", "premium-blocks-for-gutenberg")}>
                                    <PremiumShadow
                                        value={containerShadow}
                                        onChange={(value) =>
                                            setAttributes({
                                                containerShadow: value,
                                            })
                                        }
                                    />
                                </InsideTab>
                                <InsideTab tabTitle={__("Hover", "premium-blocks-for-gutenberg")}>
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
            </InspectorControls>
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        blockId,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
            >
                <div {...innerBlocksProps} />
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