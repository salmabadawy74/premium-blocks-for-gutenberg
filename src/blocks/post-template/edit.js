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

const TEMPLATE = [
    ["premium/post-featured-image"],
    ["premium/post-title"],
    ["premium/post-meta"],
    ["premium/post-excerpt"],
    ["premium/post-tag"],
];

function PostTemplateInnerBlocks() {
    const innerBlocksProps = useInnerBlocksProps(
        { className: "wp-block-post" },
        { template: TEMPLATE }
    );
    return <div {...innerBlocksProps} />;
}

function PostTemplateBlockPreview({
    blocks,
    blockContextId,
    isHidden,
    setActiveBlockContextId,
}) {
    const blockPreviewProps = useBlockPreview({
        blocks,
        props: {
            className: "wp-block-post",
        },
    });

    const handleOnClick = () => {
        setActiveBlockContextId(blockContextId);
    };

    const style = {
        display: isHidden ? "none" : undefined,
    };

    return (
        <li
            {...blockPreviewProps}
            tabIndex={0}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
            onClick={handleOnClick}
            onKeyPress={handleOnClick}
            style={style}
        />
    );
}

const MemoizedPostTemplateBlockPreview = memo(PostTemplateBlockPreview);

export default function PostTemplateEdit({
    clientId,
    context: {
        query: {
            perPage,
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
        displayLayout: { type: layoutType = "flex", columns = 1 } = {},
        previewPostType,
    },
    __unstableLayoutClassNames,
}) {
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
            // If sticky is not set, it will return all posts in the results.
            // If sticky is set to `only`, it will limit the results to sticky posts only.
            // If it is anything else, it will exclude sticky posts from results. For the record the value stored is `exclude`.
            if (sticky) {
                query.sticky = sticky === "only";
            }
            // If `inherit` is truthy, adjust conditionally the query to create a better preview.
            // When we preview Query Loop blocks we should prefer the current
            // block's postType, which is passed through block context.
            const usedPostType = postType;
            return {
                posts: getEntityRecords("postType", usedPostType, {
                    ...query,
                    ...restQueryArgs,
                }),
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
    const blockProps = useBlockProps({
        className: classnames(` premium-blog-post-container`),
    });

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

    // To avoid flicker when switching active block contexts, a preview is rendered
    // for each block context, but the preview for the active block context is hidden.
    // This ensures that when it is displayed again, the cached rendering of the
    // block preview is used, instead of having to re-render the preview from scratch.
    return (
        <div {...blockProps}>
            {blockContexts &&
                blockContexts.map((blockContext) => (
                    <div style={{ backgroundColor: "rosybrown" }}>
                        <BlockContextProvider
                            key={blockContext.postId}
                            value={blockContext}
                        >
                            {blockContext.postId ===
                            (activeBlockContextId ||
                                blockContexts[0]?.postId) ? (
                                <PostTemplateInnerBlocks />
                            ) : null}
                            <MemoizedPostTemplateBlockPreview
                                blocks={blocks}
                                blockContextId={blockContext.postId}
                                setActiveBlockContextId={
                                    setActiveBlockContextId
                                }
                                isHidden={
                                    blockContext.postId ===
                                    (activeBlockContextId ||
                                        blockContexts[0]?.postId)
                                }
                            />
                        </BlockContextProvider>
                    </div>
                ))}
        </div>
    );
}
