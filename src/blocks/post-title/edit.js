import { decodeEntities } from "@wordpress/html-entities";

export default function PostTitle(props) {
    const { attributes, post } = props;

    const Tag = attributes.titleTag;

    const target = attributes.newTab ? "_blank" : "_self";

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
                            : decodeEntities(post.title.rendered.trim()) ||
                              __("(Untitled)")}
                    </a>
                </h2>
            </div>
        );
    }
    return (
        <h3 className="">
            <a href="/" target="_blank" rel="noopener noreferrer" alt="">
                {" titl"}
            </a>
        </h3>
    );
}
