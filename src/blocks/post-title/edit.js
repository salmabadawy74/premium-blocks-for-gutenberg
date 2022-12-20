import { decodeEntities } from "@wordpress/html-entities";
import { useEntityProp } from "@wordpress/core-data";
export default function PostTitle(props) {
    const {
        attributes,
        context: { postType, postId, queryId },
    } = props;
    console.log(postType, postId, postId, ":::::::");
    const Tag = attributes.titleTag;
    const [rawTitle = "", setTitle, fullTitle] = useEntityProp(
        "postType",
        postType,
        "title",
        postId
    );
    const [link] = useEntityProp("postType", postType, "link", postId);
    const target = attributes.newTab ? "_blank" : "_self";

    return (
        <div className="premium-blog-entry-title">
            <h2>
                <a href={link}>{rawTitle}</a>
            </h2>
        </div>
    );
}
