const { decodeEntities } = wp.htmlEntities;
const { __ } = wp.i18n;

function Image(props) {
    const { post, attributes } = props;
    let target = attributes.newTab ? "_blank" : "_self";
    if (
        attributes.featuredImage &&
        undefined !== post.pbg_featured_image_src &&
        attributes.imageSize &&
        post.pbg_featured_image_src[attributes.imageSize]
    ) {
        var src = post.pbg_featured_image_src[attributes.imageSize];
        return (
            <div className="premium-blog-thumb-effect-wrapper">
                <div
                    className={`premium-blog-thumbnail-container premium-blog-${attributes.hoverEffect}-effect`}
                >
                    <img
                        src={src[0]}
                        alt={
                            decodeEntities(post.title.rendered.trim()) ||
                            __("(Untitled)")
                        }
                    />
                </div>
                <div className="premium-blog-thumbnail-overlay">
                    <a
                        href={post.link}
                        target={target}
                        rel="noopener noreferrer"
                    />
                </div>
                <style
                    dangerouslySetInnerHTML={{
                        __html: [`.premium-blog-thumb-effect-wrapper `].join(
                            "\n"
                        ),
                    }}
                />
            </div>
        );
    } else {
        return null;
    }
}

export default Image;
