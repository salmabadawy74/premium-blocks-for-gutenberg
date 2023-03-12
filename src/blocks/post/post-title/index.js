import React from 'react'

function PostTitle() {
    const { attributes, post } = props;
    const Tag = attributes.titleTag;

    const target = attributes.newTab ? '_blank' : '_self';

    if (undefined === post.title) {
        return null;
    }

    if (attributes.displayPostTitle) {

        return (
            <div className="premium-blog-entry-title">
                <h2>
                    <a href={post.link}>
                        {undefined == post.title
                            ? post.value
                            : decodeEntities(
                                post.title.rendered.trim()
                            ) || __("(Untitled)")}
                    </a>
                </h2>
            </div>)
    }
    return null;
};
export default PostTitle