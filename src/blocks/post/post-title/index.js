import React from 'react'
import { decodeEntities } from '@wordpress/html-entities';
function PostTitle(props) {
    const { attributes, post } = props;
    const Tag = attributes.level;

    const target = attributes.newTab ? '_blank' : '_self';

    if (undefined === post.title) {
        return null;
    }

    if (attributes.displayPostTitle) {

        return (
            <div className="premium-blog-entry-title">
                <Tag>
                    <a href={post.link}>
                        {undefined == post.title
                            ? post.value
                            : decodeEntities(
                                post.title.rendered.trim()
                            ) || __("(Untitled)")}
                    </a>
                </Tag>
            </div>)
    }
    return null;
};
export default PostTitle