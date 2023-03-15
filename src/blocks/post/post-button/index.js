import React from 'react'
import classNames from "classnames";

function Button(props) {
    const { post, attributes } = props;
    if (attributes.displayPostExcerpt === "Post Full Content") {
        return null;
    }
    if (attributes.showContent && attributes.excerptType === "Link") {
        let readMoreText = attributes.readMoreText
            ? attributes.readMoreText
            : __("Read More");
        return (
            <div className={classNames("premium-blog-excerpt-link-wrap ", {
                "premium-blog-full-link": attributes.fullWidth,
            })}>
                <a
                    className={`premium-blog-excerpt-link `}
                    href={post.link}
                    target={`_blank`}
                    rel="noopener noreferrer"
                >
                    {readMoreText}
                </a>
            </div>
        );
    } else {
        return null;
    }
}

export default Button