/**
 * External dependencies
 */
import classnames from "classnames";

import {
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    SpacingComponent,
    AdvancedColorControl as AdvancedPopColorControl,
    Icons,
    MultiButtonsControl as ResponsiveRadioControl,
    PremiumBackgroundControl,
    PremiumBorder,
    PremiumShadow,
    ResponsiveSingleRangeControl,
} from "@pbg/components";
import {
    generateBlockId,
    paddingCss,
    borderCss,
    marginCss,
    gradientBackground,
} from "@pbg/helpers";
const { withSelect, useSelect } = wp.data;
const { useEffect, Fragment } = wp.element;
const { PanelBody, ToggleControl, TextControl, Spinner } = wp.components;
import { memo, useMemo, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
    BlockContextProvider,
    __experimentalUseBlockPreview as useBlockPreview,
    useBlockProps,
    useInnerBlocksProps,
    store as blockEditorStore,
    InspectorControls,
} from "@wordpress/block-editor";
import { store as coreStore } from "@wordpress/core-data";

const TEMPLATE = [
    ["premium/post-featured-image"],
    ["premium/post-title"],
    ["premium/post-meta"],
    ["premium/post-excerpt"],
    ["premium/post-tag"],
];

function PostTemplateInnerBlocks(props) {
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
        <div
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

function PostTemplateEdit({
    clientId,

    context: {
        columns,
        equalHeight,
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
        } = {},
        queryContext = [{ page: 1 }],
        templateSlug,
    },
    setAttributes,
    attributes,
    deviceType,
}) {
    const {
        blockId,
        containerBackground,
        border,
        advancedBorder,
        advancedBorderValue,
        boxShadow,
        padding,
        margin,
        hideDesktop,
        hideTablet,
        hideMobile,
    } = attributes;
    useEffect(() => {
        // Set block id.
        setAttributes({
            blockId: "premium-post-template-" + generateBlockId(clientId),
        });
    }, []);

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
            const usedPostType = postType;
            return {
                posts: getEntityRecords("postType", usedPostType, {
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
            clientId,
            author,
            search,
            postType,
            exclude,
            sticky,
        ]
    );
    useEffect(() => {
        if (equalHeight) {
            let heights = [],
                contentWrapper = document.querySelectorAll(
                    ".premium-blog-post-outer-container"
                );
            const contentWrap = [...contentWrapper];
            contentWrap.map((postContent) => {
                var height = postContent.clientHeight;

                heights.push(height);
            });
            let maxHeight = Math.max(...heights);
            console.log(maxHeight, heights);
            contentWrap.map((postContent) => {
                postContent.style.height = maxHeight + "px";
            });
        }
    }, [equalHeight]);
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
        style: {
            display: "grid",
            gridTemplateColumns: `repeat(${columns[deviceType]}, minmax(0, 1fr))`,
            rowGap: `20px`,
            columnGap: `20px`,
        },
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
    let BorderValue = advancedBorder
        ? { borderRadius: advancedBorderValue }
        : borderCss(border, deviceType);

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["style", "advance"]}>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__("Style", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <PremiumBackgroundControl
                                value={containerBackground}
                                onChange={(value) =>
                                    setAttributes({
                                        containerBackground: value,
                                    })
                                }
                            />
                            {!advancedBorder && (
                                <PremiumBorder
                                    label={__(
                                        "Border",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={border}
                                    onChange={(value) =>
                                        setAttributes({ border: value })
                                    }
                                />
                            )}
                            <ToggleControl
                                label={__(
                                    "Advanced Border Radius",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={advancedBorder}
                                onChange={(value) =>
                                    setAttributes({ advancedBorder: value })
                                }
                            />
                            <div>
                                {__(
                                    "Apply custom radius values. Get the radius value from here",
                                    "premium-blocks-for-gutenberg"
                                )}
                                <a
                                    target={"_blank"}
                                    href={
                                        "https://9elements.github.io/fancy-border-radius/"
                                    }
                                >
                                    {" "}
                                    Here
                                </a>
                            </div>
                            {advancedBorder && (
                                <TextControl
                                    label={__(
                                        "Border Radius",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={advancedBorderValue}
                                    onChange={(value) =>
                                        setAttributes({
                                            advancedBorderValue: value,
                                        })
                                    }
                                />
                            )}
                            <PremiumShadow
                                boxShadow={true}
                                value={boxShadow}
                                onChange={(value) =>
                                    setAttributes({ boxShadow: value })
                                }
                            />
                            <SpacingComponent
                                value={padding}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ padding: value })
                                }
                            />
                            <SpacingComponent
                                value={margin}
                                responsive={true}
                                showUnits={true}
                                label={__(
                                    "Margin",
                                    "premium-blocks-for-gutenberg"
                                )}
                                onChange={(value) =>
                                    setAttributes({ margin: value })
                                }
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"advance"}>
                        <PremiumResponsiveTabs
                            Desktop={hideDesktop}
                            Tablet={hideTablet}
                            Mobile={hideMobile}
                            onChangeDesktop={(value) =>
                                setAttributes({
                                    hideDesktop: value
                                        ? " premium-desktop-hidden"
                                        : "",
                                })
                            }
                            onChangeTablet={(value) =>
                                setAttributes({
                                    hideTablet: value
                                        ? " premium-tablet-hidden"
                                        : "",
                                })
                            }
                            onChangeMobile={(value) =>
                                setAttributes({
                                    hideMobile: value
                                        ? " premium-mobile-hidden"
                                        : "",
                                })
                            }
                        />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <div {...blockProps}>
                {blockContexts &&
                    blockContexts.map((blockContext) => (
                        <div
                            className="premium-blog-post-outer-container"
                            style={{
                                ...gradientBackground(containerBackground),
                                ...BorderValue,
                                ...marginCss(margin, deviceType),
                                ...paddingCss(padding, deviceType),
                                boxShadow: `${boxShadow.horizontal || 0}px ${
                                    boxShadow.vertical || 0
                                }px ${boxShadow.blur || 0}px ${
                                    boxShadow.color
                                }`,
                            }}
                        >
                            <BlockContextProvider
                                key={blockContext.postId}
                                value={blockContext}
                            >
                                {blockContext.postId ===
                                (activeBlockContextId ||
                                    blockContexts[0]?.postId) ? (
                                    <PostTemplateInnerBlocks
                                        deviceType={deviceType}
                                    />
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
})(PostTemplateEdit);
