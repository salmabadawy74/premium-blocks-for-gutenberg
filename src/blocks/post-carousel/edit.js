import { useSelect, useDispatch, select } from "@wordpress/data";
import {
    generateBlockId,
    gradientBackground,
    typographyCss,
    paddingCss,
    marginCss,
    borderCss,
} from "@pbg/helpers";
import Slider from "react-slick";
const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { useEffect, Fragment, useMemo } = wp.element;
import Inspector from "./inspector";
// import Inspector from "./inspector";
import {
    useBlockProps,
    store as blockEditorStore,
    useInnerBlocksProps,
    BlockContextProvider
} from "@wordpress/block-editor";
import { useInstanceId } from "@wordpress/compose";
import { store as coreStore } from "@wordpress/core-data";

const { PanelBody, ToggleControl, TextControl, Spinner } = wp.components;

/**
 * Internal dependencies
 */
const DEFAULTS_POSTS_PER_PAGE = 3;

const TEMPLATE = [["premium/container", {
    variationSelected: true,
    direction: { Desktop: "column", Tablet: "", Mobile: "" },
    wrapItems: { Desktop: "", Tablet: "", Mobile: "wrap" },
    isBlockRootParent: true,
    alignItems: {
        "Desktop": "center",
        "Tablet": "center",
        "Mobile": "center"
    },
    columnGutter: {
        "Desktop": 20,
        "Tablet": 20,
        "Mobile": 20,
        "unit": "px"
    },
    rowGutter: {
        "Desktop": 20,
        "Tablet": 20,
        "Mobile": 20,
        "unit": "px"
    }
}, [
        ["premium/post-featured-image"],
        ["premium/post-title"],
        ["premium/post-meta"],
        ["premium/post-excerpt"],
        ["premium/post-tag"],
    ]
]];
function PostCarousel({ attributes, setAttributes, deviceType, clientId }) {
    const {
        queryId,
        query,
        queryContext = [{ page: 1 }],

        columns,
        align,
        blogContainerBackground,
        blogBorder,
        blogBoxShadow,
        blogPadding,
        blogMargin,
        equalHeight,
    } = attributes;
    const equalHeightClass = equalHeight ? "premium-post__equal-height" : "";
    const {
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
    } = query

    const blockProps = useBlockProps({
        className: `${align} ${equalHeightClass}`,
    });
    const [{ page }] = queryContext;
    const { __unstableMarkNextChangeAsNotPersistent } =
        useDispatch(blockEditorStore);
    const innerBlocksProps = useInnerBlocksProps(
        {
            style: {
                ...gradientBackground(blogContainerBackground),
                ...borderCss(blogBorder, deviceType),
                ...marginCss(blogMargin, deviceType),
                ...paddingCss(blogPadding, deviceType),
                boxShadow: `${blogBoxShadow.horizontal || 0}px ${blogBoxShadow.vertical || 0
                    }px ${blogBoxShadow.blur || 0}px ${blogBoxShadow.color}`,
            },
        },
        {
            template: TEMPLATE,
        }
    );
    const { postsPerPage } = useSelect((select) => {
        const { getSettings } = select(blockEditorStore);
        return {
            postsPerPage:
                +getSettings().postsPerPage || DEFAULTS_POSTS_PER_PAGE,
        };
    }, []);
    useEffect(() => {
        const newQuery = {};
        if (!perPage && postsPerPage) {
            newQuery.perPage = postsPerPage;
        }
        if (!!Object.keys(newQuery).length) {
            __unstableMarkNextChangeAsNotPersistent();
            updateQuery(newQuery);
        }
    }, [perPage]);
    useEffect(() => {
        if (!Number.isFinite(queryId)) {
            __unstableMarkNextChangeAsNotPersistent();
            setAttributes({ queryId: clientId });
        }
    }, [queryId]);
    const updateQuery = (newQuery) =>
        setAttributes({ query: { ...query, ...newQuery } });
    const { posts, blocks } = useSelect(
        (select) => {
            const { getEntityRecords, getTaxonomies } = select(coreStore);
            const { getBlocks } = select(blockEditorStore);
            const taxonomies = getTaxonomies({
                type: postType,
                per_page: -1,
                context: "view",
            });

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
            console.log(query, "query")
            return {
                posts: getEntityRecords("postType", "post", {
                    ...query,
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
            author,
            search,
            postType,
            exclude,
            sticky,
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
    console.log(posts)
    if (!posts) {
        return (
            <p {...blockProps}>
                <Spinner />
            </p>
        );
    }

    if (!posts.length) {
        return <p {...blockProps}> {__("No Posts Found")}</p>;
    }
    return (
        <Fragment>
            <Inspector
                attributes={attributes}
                setQuery={updateQuery}
                setAttributes={setAttributes}
            />

            <Slider >
                {blockContexts.map((blockContext) =>
                    <BlockContextProvider
                        key={blockContext.postId}
                        value={blockContext}
                    >
                        <div {...innerBlocksProps} />

                    </BlockContextProvider>
                )}
            </Slider>
        </Fragment>
    );
}
export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } =
        select("core/edit-post");
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    return {
        deviceType: deviceType,
    };
})(PostCarousel);
