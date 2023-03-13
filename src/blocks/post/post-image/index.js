import React from 'react'
import classNames from "classnames";
import { useEntityProp, store as coreStore } from "@wordpress/core-data";
const { __ } = wp.i18n;

import { useSelect, withSelect, useDispatch } from "@wordpress/data";
function getMediaSourceUrlBySizeSlug(media, slug) {
    return media?.media_details?.sizes?.[slug]?.source_url || media?.source_url;
}
function Image(props) {
    const { post: { postId, postType: postTypeSlug }, attributes } = props;
    const bottomShapeClasses = classNames(
        "premium-shape-divider",
        "premium-bottom-shape",
        { "premium-shape-flip": attributes.shapeBottom["flipShapeDivider"] === true },
        { "premium-shape-above-content": attributes.shapeBottom["front"] === true },
        { "premium-shape__invert": attributes.shapeBottom["invertShapeDivider"] === true }
    );
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
    const mediaUrl = getMediaSourceUrlBySizeSlug(media, attributes.imageSize);
    const [link] = useEntityProp("postType", postType, "link", postId);
    const target = attributes.newTab ? '_blank' : '_self';
    if (
        featuredImage
    ) {
        return (
            <div className="premium-blog-thumb-effect-wrapper">
                <div
                    className={`premium-blog-thumbnail-container premium-blog-${attributes.hoverEffect}-effect`}
                >
                    <img
                        src={mediaUrl}

                    />
                    {Object.entries(attributes.shapeBottom).length > 1 &&
                        attributes.shapeBottom.openShape == 1 &&
                        attributes.shapeBottom.style && (
                            <div
                                className={bottomShapeClasses}
                                dangerouslySetInnerHTML={{
                                    __html: PremiumBlocksSettings.shapes[
                                        attributes.shapeBottom.style
                                    ],
                                }}
                            />
                        )}
                </div>
                <div className="premium-blog-thumbnail-overlay">
                    <a href={link} target={target} rel="noopener noreferrer" />
                </div>
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `.premium-blog-thumb-effect-wrapper `,
                        ].join("\n"),
                    }}
                />
            </div>
        );
    } else {
        return null;
    }
}

export default Image