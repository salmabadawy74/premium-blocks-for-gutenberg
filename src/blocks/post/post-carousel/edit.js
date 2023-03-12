import classNames from "classnames";
import Meta from "../post-meta/index";
import Slider from "react-slick";
import Excerpt from "../post-excerpt/index";
import Button from "../post-button/index";
import Image from "../post-image/index"
const { withSelect, useSelect, select } = wp.data;
const { useEffect, Fragment } = wp.element;
import { __ } from "@wordpress/i18n";
import {
    __experimentalUseBlockPreview as useBlockPreview,
    store as blockEditorStore,
} from "@wordpress/block-editor";
import { store as coreStore } from "@wordpress/core-data";
import Inspector from "./inspector";
const { Spinner } = wp.components;
const { decodeEntities } = wp.htmlEntities;
function edit({ clientId, setAttributes, attributes, deviceType }) {
    // useEffect(() => {
    //     // Set block id.
    //     setAttributes({
    //         blockId: "premium-post-carousel-" + generateBlockId(clientId),
    //     });

    // }, []);
    const { query } = attributes;
    const { perPage,
        offset = 0,
        postType,
        order,
        orderBy,
        author,
        search,
        exclude,
        sticky,
        inherit,
        taxQuery,
        parents,
        page = 1,
        pages } = query

    const { posts, taxonomies, categoriesList, blocks } = useSelect(
        (select) => {
            const { getEntityRecords, getTaxonomies } = select(coreStore);
            const { getBlocks } = select(blockEditorStore);
            const taxonomies = getTaxonomies({
                type: postType,
                per_page: -1,
                context: "view",
                slug: "category"
            });
            let categoriesList = [];

            categoriesList = getEntityRecords("taxonomy", "category");
            const query = {
                offset: perPage ? perPage * (page - 1) + offset : 0,
                order,
                orderby: orderBy,
            };
            if (perPage) {
                query.per_page = perPage;
            }
            if (author) {
                query.author = author;
            }
            if (search) {
                query.search = search;
            }
            if (sticky) {
                query.sticky = sticky === "exclude";
            }
            if (exclude) {
                query.exclude = exclude;
            }
            const usedPostType = postType;
            return {
                posts: getEntityRecords("postType", usedPostType, {
                    ...query,
                }),
                taxonomies,
                categoriesList,
                blocks: getBlocks(clientId),
            };
        },
        [
            perPage,
            page,
            offset,
            order,
            orderBy,
            clientId,
            author,
            search,
            postType,
            exclude,
            sticky,
        ]
    );
    console.log(posts, blocks, taxonomies, categoriesList);
    if (!posts) {
        return (
            <p >
                <Spinner />
            </p>
        );
    }

    if (!posts.length) {
        return <p > {__("No Posts To Display")}</p>;
    }
    const updateQuery = (newQuery) =>
        setAttributes({ query: { ...query, ...newQuery } });
    return (<Fragment>
        <Inspector
            attributes={attributes}
            setQuery={updateQuery}
            setAttributes={setAttributes}
        />
        <div
            className={`premium-blog premium-blog-carousel`}

        >
            <Slider >
                {posts.map((post, i) => (
                    <div className={`premium-blog-post-outer-container`} key={i}>
                        <div
                            className={`premium-blog-post-container`}
                        //    style={{
                        //         marginRight: `${slideSpacing}px`,
                        //         marginLeft:  `${slideSpacing}px`,
                        //     }}
                        >
                            <Image post={post} attributes={attributes} />
                            <div className={`premium-blog-content-wrapper empty-thumb`}>
                                <div className={`premium-blog-content-wrapper empty-thumb `}>
                                    <div className={`premium-blog-content-wrapper-inner`}>
                                        <div className={`premium-blog-inner-container`}>
                                            <div className="premium-blog-entry-container">
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
                                                </div>
                                                <div className="premium-blog-entry-meta">
                                                    <Meta
                                                        post={post}
                                                        categoriesList={categoriesList}
                                                        attributes={attributes}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <Excerpt attributes={attributes} post={post} />
                                        <Button attributes={attributes} post={post} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </Fragment>
    )
}

export default edit