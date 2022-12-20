import { useEntityProp } from "@wordpress/core-data";
const { useMemo } = wp.element;
import { __ } from "@wordpress/i18n";

export default function Excerpt(props) {
    const {
        context: { postId, postType, queryId },
        attributes,
    } = props;

    const [
        rawExcerpt,
        setExcerpt,
        { rendered: renderedExcerpt, protected: isProtected } = {},
    ] = useEntityProp("postType", postType, "excerpt", postId);

    const strippedRenderedExcerpt = useMemo(() => {
        if (!renderedExcerpt) return "";
        const document = new window.DOMParser().parseFromString(
            renderedExcerpt,
            "text/html"
        );
        return document.body.textContent || document.body.innerText || "";
    }, [renderedExcerpt]);

    return <p> {strippedRenderedExcerpt || __("No post excerpt found")}</p>;
    // const words = post.pbg_excerpt.split(" ");
    // let excerpt = post.pbg_excerpt;
    // let exLength = attributes.excerptLength ? attributes.excerptLength : 25;
    // if (exLength >= words.length) {
    //     excerpt = post.pbg_excerpt;
    // } else {
    //     const truncated = words.slice(0, exLength);
    //     excerpt = truncated.join(" ");
    //     excerpt += " ...";
    // }
    // if (
    //     attributes.displayPostContent &&
    //     attributes.displayPostExcerpt === "Post Excerpt"
    // ) {
    //     return <p dangerouslySetInnerHTML={{ __html: excerpt }} />;
    // } else if (
    //     attributes.displayPostExcerpt &&
    //     attributes.displayPostExcerpt === "Post Full Content"
    // ) {
    //     return (
    //         <p
    //             dangerouslySetInnerHTML={{
    //                 __html: post.content.raw.trim(),
    //             }}
    //         />
    //     );
    // } else {
    //     return (
    //         <div className="premium-post__excerpt premium-full_post">
    //             {__(
    //                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    //             )}
    //         </div>
    //     );
    // }
}
