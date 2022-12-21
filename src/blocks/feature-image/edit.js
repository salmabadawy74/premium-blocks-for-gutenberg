
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
const { __ } = wp.i18n;
import { useSelect, useDispatch } from '@wordpress/data';
function getMediaSourceUrlBySizeSlug(media, slug) {
    return (
        media?.media_details?.sizes?.[slug]?.source_url || media?.source_url
    );
}
function Image(props) {
    const { context: { postId, postType: postTypeSlug, queryId }, attributes } = props;
    const { isLink, height, width, scale, sizeSlug, rel, linkTarget } =
        attributes;
    const [featuredImage, setFeaturedImage] = useEntityProp(
        'postType',
        postTypeSlug,
        'featured_media',
        postId
    );
    const { media, postType } = useSelect(
        (select) => {
            const { getMedia, getPostType } = select(coreStore);
            return {
                media:
                    featuredImage &&
                    getMedia(featuredImage, {
                        context: 'view',
                    }),
                postType: postTypeSlug && getPostType(postTypeSlug),
            };
        },
        [featuredImage, postTypeSlug]
    );
    const mediaUrl = getMediaSourceUrlBySizeSlug(media, sizeSlug);
    const [link] = useEntityProp("postType", postType, "link", postId);
    console.log(featuredImage, mediaUrl, media, "Media")
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
                </div>
                <div className="premium-blog-thumbnail-overlay">
                    <a
                        href={link}
                        rel="noopener noreferrer"
                    />
                </div>

            </div>
        );
    } else {
        return null;
    }
}

export default Image;
