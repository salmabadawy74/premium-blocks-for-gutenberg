/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { memo, useMemo, useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
    BlockContextProvider,
    __experimentalUseBlockPreview as useBlockPreview,
    useBlockProps,
    useInnerBlocksProps,
    store as blockEditorStore,
} from "@wordpress/block-editor";
import { Spinner } from "@wordpress/components";
import { store as coreStore } from "@wordpress/core-data";

export default function PostTemplateEdit({
    clientId,
    context: {
        query: {
            perPage,
            offset,
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
            pages,
            // We gather extra query args to pass to the REST API call.
            // This way extenders of Query Loop can add their own query args,
            // and have accurate previews in the editor.
            // Noting though that these args should either be supported by the
            // REST API or be handled by custom REST filters like `rest_{$this->post_type}_query`.
            ...restQueryArgs
        } = {},
        queryContext = [{ page: 1 }],
        templateSlug,
    },
}) {
    const TEMPLATE = [
        ["premium/post-featured-image"],
        ["premium/post-title"],
        ["premium/post-meta"],
        ["premium/post-excerpt"],
    ];

    const innerBlocksProps = useInnerBlocksProps(
        { className: "wp-block-post" },
        {
            template: TEMPLATE,
        }
    );
    const [{ page }] = queryContext;
    const [activeBlockContextId, setActiveBlockContextId] = useState();
    const { posts, blocks } = useSelect(
        (select) => {
            const { getEntityRecords, getTaxonomies } = select(coreStore);
            const { getBlocks } = select(blockEditorStore);
            const taxonomies = getTaxonomies({
                type: postType,
                per_page: -1,
                context: "view",
            });
            const templateCategory =
                inherit &&
                templateSlug?.startsWith("category-") &&
                getEntityRecords("taxonomy", "category", {
                    context: "view",
                    per_page: 1,
                    _fields: ["id"],
                    slug: templateSlug.replace("category-", ""),
                });
            const query = {
                offset: perPage ? perPage * (page - 1) + offset : 0,
                order,
                orderby: orderBy,
            };
            // There is no need to build the taxQuery if we inherit.
            if (taxQuery && !inherit) {
                // We have to build the tax query for the REST API and use as
                // keys the taxonomies `rest_base` with the `term ids` as values.
                const builtTaxQuery = Object.entries(taxQuery).reduce(
                    (accumulator, [taxonomySlug, terms]) => {
                        const taxonomy = taxonomies?.find(
                            ({ slug }) => slug === taxonomySlug
                        );
                        if (taxonomy?.rest_base) {
                            accumulator[taxonomy?.rest_base] = terms;
                        }
                        return accumulator;
                    },
                    {}
                );
                if (!!Object.keys(builtTaxQuery).length) {
                    Object.assign(query, builtTaxQuery);
                }
            }
            if (perPage) {
                query.per_page = perPage;
            }
            if (author) {
                query.author = author;
            }
            if (search) {
                query.search = search;
            }
            if (exclude?.length) {
                query.exclude = exclude;
            }
            if (parents?.length) {
                query.parent = parents;
            }
            // If sticky is not set, it will return all posts in the results.
            // If sticky is set to `only`, it will limit the results to sticky posts only.
            // If it is anything else, it will exclude sticky posts from results. For the record the value stored is `exclude`.
            if (sticky) {
                query.sticky = sticky === "only";
            }
            // If `inherit` is truthy, adjust conditionally the query to create a better preview.
            if (inherit) {
                // Change the post-type if needed.
                if (templateSlug?.startsWith("archive-")) {
                    query.postType = templateSlug.replace("archive-", "");
                    postType = query.postType;
                } else if (templateCategory) {
                    query.categories = templateCategory[0]?.id;
                }
            }
            // When we preview Query Loop blocks we should prefer the current
            // block's postType, which is passed through block context.
            const usedPostType = "post";
            return {
                posts: getEntityRecords("postType", usedPostType, {}),
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
            inherit,
            templateSlug,
            taxQuery,
            parents,
            restQueryArgs,
        ]
    );
    const blockContexts = useMemo(
        () =>
            posts?.map((post) => ({
                postType: post.type,
                postId: post.id,
            })),
        [posts]
    );
    const blockProps = useBlockProps();
    if (!posts) {
        return (
            <p {...blockProps}>
                <Spinner />
            </p>
        );
    }

    if (!posts.length) {
        return <p {...blockProps}> {__("No results found.")}</p>;
    }
    function PostTemplateInnerBlocks() {
        const innerBlocksProps = useInnerBlocksProps(
            { className: "wp-block-post" },
            { template: TEMPLATE }
        );
        return <li {...innerBlocksProps} />;
    }
    console.log(posts, "blockContexts");
    return (
        <ul {...blockProps}>
            {blockContexts &&
                blockContexts.map((blockContext, index) => (
                    <BlockContextProvider
                        key={blockContext.postId}
                        value={blockContext}
                    >
                        {blockContext.postId ===
                        (activeBlockContextId || blockContexts[0]?.postId) ? (
                            <PostTemplateInnerBlocks />
                        ) : null}
                        {/* <div {...innerBlocksProps} /> */}
                    </BlockContextProvider>
                ))}
        </ul>
    );
}
