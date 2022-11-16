import classnames from "classnames";
import {
    ResponsiveRangeControl,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    PremiumMediaUpload,
    PremiumFilters,
    DefaultImage,
} from "@pbg/components";
import { generateBlockId, generateCss } from "@pbg/helpers";

const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { useEffect, Fragment } = wp.element;
const { PanelBody, SelectControl } = wp.components;
const { InspectorControls, useBlockProps } = wp.blockEditor;

function ImageEdit({
    attributes,
    setAttributes,
    deviceType,
    clientId,
    className,
}) {
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        ImgId,
        ImgUrl,
        imageBorder,
        imageFilter,
        imgHeight,
        imgWidth,
        hoverEffect,
    } = attributes;

    const HOVER = [
        {
            value: "none",
            label: __("None", "premium-blocks-for-gutenberg"),
        },
        {
            value: "zoomin",
            label: __("Zoom In", "premium-blocks-for-gutenberg"),
        },
        {
            value: "zoomout",
            label: __("Zoom Out", "premium-blocks-for-gutenberg"),
        },
        {
            value: "scale",
            label: __("Scale", "premium-blocks-for-gutenberg"),
        },
        {
            value: "gray",
            label: __("Gray Scale", "premium-blocks-for-gutenberg"),
        },
        {
            value: "blur",
            label: __("Blur", "premium-blocks-for-gutenberg"),
        },
        {
            value: "bright",
            label: __("Bright", "premium-blocks-for-gutenberg"),
        },
        {
            value: "sepia",
            label: __("Sepia", "premium-blocks-for-gutenberg"),
        },
        {
            value: "translate",
            label: __("Translate", "premium-blocks-for-gutenberg"),
        },
    ];

    useEffect(() => {
        // Set block id.
        setAttributes({
            blockId: "premium-image-" + generateBlockId(clientId),
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames("premium-image", blockId, {
            ["premium-desktop-hidden"]: hideDesktop,
            ["premium-tablet-hidden"]: hideTablet,
            ["premium-mobile-hidden"]: hideMobile,
        }),
    });

    const loadStyles = () => {
        const styles = {};

        styles[` .${blockId} .premium-image-wrap img`] = {
            height: `${imgHeight[deviceType]}${imgHeight.unit} !important`,
            width: `${imgWidth[deviceType]}${imgWidth.unit} !important`,
            "border-style": `${imageBorder?.borderType}`,
            "border-color": `${imageBorder?.borderColor}`,
            "border-top-width": `${imageBorder?.borderWidth?.[deviceType]?.top}px!important`,
            "border-right-width": `${imageBorder?.borderWidth?.[deviceType]?.right}px!important`,
            "border-bottom-width": `${imageBorder?.borderWidth?.[deviceType]?.bottom}px!important`,
            "border-left-width": `${imageBorder?.borderWidth?.[deviceType]?.left}px!important`,
            "border-top-left-radius": `${imageBorder?.borderRadius?.[deviceType]?.top}px!important`,
            "border-top-right-radius": `${imageBorder?.borderRadius?.[deviceType]?.right}px!important`,
            "border-bottom-left-radius": `${imageBorder?.borderRadius?.[deviceType]?.bottom}px!important`,
            "border-bottom-right-radius": `${imageBorder?.borderRadius?.[deviceType]?.left}px!important`,
            filter: `brightness( ${imageFilter.bright}% ) contrast( ${imageFilter.contrast}% ) saturate( ${imageFilter.saturation}% ) blur( ${imageFilter.blur}px ) hue-rotate( ${imageFilter.hue}deg )`,
        };

        return generateCss(styles);
    };

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__(
                                "General Settings",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <PremiumMediaUpload
                                type="image"
                                imageID={ImgId}
                                imageURL={ImgUrl}
                                onSelectMedia={(media) => {
                                    setAttributes({
                                        ImgId: media.id,
                                        ImgUrl: media.url,
                                    });
                                }}
                                onRemoveImage={() => {
                                    setAttributes({
                                        ImgId: "",
                                        ImgUrl: "",
                                    });
                                }}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__(
                                "Image Style",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <PremiumFilters
                                value={imageFilter}
                                onChange={(value) =>
                                    setAttributes({ imageFilter: value })
                                }
                            />
                            <ResponsiveRangeControl
                                label={__(
                                    "Custom Image Width",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={imgWidth}
                                onChange={(value) =>
                                    setAttributes({ imgWidth: value })
                                }
                                min={1}
                                max={500}
                                step={1}
                                showUnit={true}
                                units={["px", "em", "%"]}
                                defaultValue={200}
                            />
                            <ResponsiveRangeControl
                                label={__(
                                    "Custom Image Height",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={imgHeight}
                                onChange={(value) =>
                                    setAttributes({ imgHeight: value })
                                }
                                min={1}
                                max={500}
                                step={1}
                                showUnit={true}
                                units={["px", "em"]}
                                defaultValue={200}
                            />
                            <SelectControl
                                label={__(
                                    "Image Hover Effect",
                                    "premium-blocks-for-gutenberg"
                                )}
                                options={HOVER}
                                value={hoverEffect}
                                onChange={(newEffect) =>
                                    setAttributes({ hoverEffect: newEffect })
                                }
                            />
                            <PremiumBorder
                                value={imageBorder}
                                onChange={(value) =>
                                    setAttributes({ imageBorder: value })
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
            <div {...blockProps}>
                <style
                    dangerouslySetInnerHTML={{
                        __html: loadStyles(),
                    }}
                />
                <div className={`premium-image-container`}>
                    <div
                        className={`premium-image-wrap premium-image-wrap-${hoverEffect}`}
                    >
                        {ImgUrl && (
                            <img
                                className={`premium-image-img`}
                                src={`${ImgUrl}`}
                                alt="image"
                            />
                        )}
                        {!ImgUrl && <DefaultImage className={className} />}
                    </div>
                </div>
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
})(ImageEdit);
