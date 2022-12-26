import { useEntityProp, store as coreStore } from "@wordpress/core-data";
const { __ } = wp.i18n;
import { useSelect, useDispatch } from "@wordpress/data";
import {
    generateBlockId,
    generateCss,
    typographyCss,
    paddingCss,
    marginCss,
} from "@pbg/helpers";
import {
    ResponsiveRangeControl,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    AdvancedColorControl as AdvancedPopColorControl,
    Shape,
    PremiumFilters,
    InsideTabs,
    InsideTab,
} from "@pbg/components";
import { Fragment } from "react";
const { PanelBody, SelectControl, ToggleControl } = wp.components;

function getMediaSourceUrlBySizeSlug(media, slug) {
    return media?.media_details?.sizes?.[slug]?.source_url || media?.source_url;
}
function Image(props) {
    const {
        context: { postId, postType: postTypeSlug, queryId },
        attributes,
    } = props;
    const {
        isLink,
        rel,
        linkTarget,
        showImage,
        hoverEffect,
        height,
        thumbnail,
        imageSize,
        filter,
        Hoverfilter,
        colorOverlay,
        shapeTop,
        shapeBottom,
        hideDesktop,
        hideTablet,
        hideMobile,
    } = attributes;
    const [featuredImage, setFeaturedImage] = useEntityProp(
        "postType",
        postTypeSlug,
        "featured_media",
        postId
    );
    const { media, postType } = useSelect(
        (select) => {
            const { getMedia, getPostType } = select(coreStore);
            return {
                media:
                    featuredImage &&
                    getMedia(featuredImage, {
                        context: "view",
                    }),
                postType: postTypeSlug && getPostType(postTypeSlug),
            };
        },
        [featuredImage, postTypeSlug]
    );
    const mediaUrl = getMediaSourceUrlBySizeSlug(media, imageSize);
    const [link] = useEntityProp("postType", postType, "link", postId);
    const imageSizes = [
        { slug: "thumbnail", name: __("Thumbnail") },
        { slug: "medium", name: __("Medium") },
        { slug: "large", name: __("Large") },
        { slug: "full", name: __("Full Size") },
    ];
    console.log(imageSizes, "Media");

    const imageSizeOptions = imageSizes
        .filter(({ slug }) => {
            return media?.media_details?.sizes?.[slug]?.source_url;
        })
        .map(({ name, slug }) => ({
            value: slug,
            label: name,
        }));
    if (featuredImage) {
        return (
            <Fragment>
                <InspectorControls key={"inspector"}>
                    <InspectorTabs tabs={["layout", "style", "advance"]}>
                        <InspectorTab key={"layout"}>
                            <PanelBody
                                title={__(
                                    "Featured Image",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <ToggleControl
                                    label={__(
                                        "Show Featured Image",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    checked={showImage}
                                    onChange={(value) =>
                                        setAttributes({ showImage: value })
                                    }
                                />
                                <SelectControl
                                    label={__("Image Size")}
                                    options={imageSizeOptions}
                                    value={imageSize}
                                    onChange={(newSizeImage) =>
                                        setAttributes({
                                            imageSize: newSizeImage,
                                        })
                                    }
                                />
                                <ResponsiveRangeControl
                                    label={__(
                                        "Height",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={height}
                                    onChange={(newValue) =>
                                        setAttributes({ height: newValue })
                                    }
                                    units={["px", "em"]}
                                    showUnit={true}
                                    min={0}
                                    max={600}
                                    step={1}
                                />
                                <InsideTabs>
                                    <InsideTab
                                        tabTitle={__(
                                            "Top Shape",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    >
                                        <Shape
                                            shapeType="top"
                                            value={shapeTop}
                                            responsive
                                            onChange={(val) =>
                                                setAttributes({ shapeTop: val })
                                            }
                                        />
                                    </InsideTab>
                                    <InsideTab
                                        tabTitle={__(
                                            "Bottom Shape",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    >
                                        <Shape
                                            shapeType="bottom"
                                            value={shapeBottom}
                                            responsive
                                            onChange={(val) =>
                                                setAttributes({
                                                    shapeBottom: val,
                                                })
                                            }
                                        />
                                    </InsideTab>
                                </InsideTabs>
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={"style"}>
                            <AdvancedPopColorControl
                                label={__(
                                    "Overlay Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={colorOverlay}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    setAttributes({ titleColor: newValue })
                                }
                            />
                            <InsideTabs>
                                <InsideTab
                                    tabTitle={__(
                                        "Normal",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                >
                                    <PremiumFilters
                                        label={__("CSS Filters")}
                                        value={filter}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                filter: newValue,
                                            })
                                        }
                                    />
                                </InsideTab>
                                <InsideTab
                                    tabTitle={__(
                                        "Hover",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                >
                                    <PremiumFilters
                                        label={__("CSS Filters")}
                                        value={Hoverfilter}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                Hoverfilter: newValue,
                                            })
                                        }
                                    />
                                </InsideTab>
                            </InsideTabs>
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

                <div className="premium-blog-thumb-effect-wrapper">
                    <div
                        className={`premium-blog-thumbnail-container premium-blog-${attributes.hoverEffect}-effect`}
                    >
                        <img src={mediaUrl} />
                    </div>
                    <div className="premium-blog-thumbnail-overlay">
                        <a href={link} rel="noopener noreferrer" />
                    </div>
                </div>
            </Fragment>
        );
    } else {
        return null;
    }
}

export default Image;
