import React from 'react'

function PostExcerpt(props) {
    const { post, attributes } = props;
    if (post.pbg_excerpt == undefined) {
        return null;
    }

    const words = post.pbg_excerpt.split(" ");
    let excerpt = post.pbg_excerpt;
    let exLength = attributes.excerptLength ? attributes.excerptLength : 25;
    if (exLength >= words.length) {
        excerpt = post.pbg_excerpt;
    } else {
        const truncated = words.slice(0, exLength);
        excerpt = truncated.join(" ");
        excerpt += " ...";
    }
    if (
        attributes.showContent &&
        attributes.displayPostExcerpt === "Post Excerpt"
    ) {
        return <p dangerouslySetInnerHTML={{ __html: excerpt }} />;
    }
    else if (
        attributes.displayPostExcerpt &&
        attributes.displayPostExcerpt === "Post Full Content"
    ) {
        return (
            <p dangerouslySetInnerHTML={{ __html: post.content.raw.trim() }} />
        );
    }
    else {
        return null;
    }


}

export default PostExcerpt 