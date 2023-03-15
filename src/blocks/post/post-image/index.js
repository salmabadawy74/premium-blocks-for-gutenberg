import React from 'react'
import classNames from "classnames";
const { __ } = wp.i18n;

function Image(props) {
    const { post, attributes } = props;
    const bottomShapeClasses = classNames(
        "premium-shape-divider",
        "premium-bottom-shape",
        { "premium-shape-flip": attributes.shapeBottom["flipShapeDivider"] === true },
        { "premium-shape-above-content": attributes.shapeBottom["front"] === true },
        { "premium-shape__invert": attributes.shapeBottom["invertShapeDivider"] === true }
    );
    const target = attributes.newTab ? '_blank' : '_self';
    if (
        attributes.displayPostImage &&
        undefined !== post.pbg_featured_image_src &&
        attributes.imageSize &&
        post.pbg_featured_image_src[attributes.imageSize] ||
        (attributes.displayPostImage === true && attributes.imgPosition === 'background')
    ) {
        const src = post.pbg_featured_image_src[attributes.imageSize];

        return (
            <div className="premium-blog-thumb-effect-wrapper">
                <div
                    className={`premium-blog-thumbnail-container premium-blog-${attributes.hoverEffect}-effect`}
                >
                    <img
                        src={src}

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
                    <a
                        href={post.link}
                        target={target}
                        rel="noopener noreferrer"
                    ></a>                </div>
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