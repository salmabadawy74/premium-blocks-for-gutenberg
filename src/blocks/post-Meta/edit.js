import { Fragment } from "react";
import { useSelect } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import { useEntityProp } from "@wordpress/core-data";
import { __ } from "@wordpress/i18n";

const { dateI18n, format, __experimentalGetSettings } = wp.date;
import {
    generateBlockId,
    typographyCss,
    paddingCss,
    marginCss,
} from "@pbg/helpers";
import {
    InspectorControls,
    useBlockProps,
    RichText,
} from "@wordpress/block-editor";
import {
    PanelBody,
    SelectControl,
    TextControl,
    ToggleControl,
} from "@wordpress/components";
import {
    MultiButtonsControl,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    SpacingComponent,
    AdvancedColorControl as AdvancedPopColorControl,
    Icons,
    WebfontLoader,
    PremiumTypo,
    alignIcons,
} from "@pbg/components";

export default function Meta(props) {
    const {
        isSelected,
        context: { postId, postType: postTypeSlug, queryId },
        attributes,
        setAttributes,
    } = props;
    const {
        showAuther,
        showDate,
        showCategories,
        showComments,
        typography,
        color,
        hoverColor,
        sepColor,
        hideDesktop,
        hideTablet,
        hideMobile,
    } = attributes;
    const [rawTitle = "", setTitle, fullTitle] = useEntityProp(
        "postType",
        postType,
        "author",
        postId
    );
    console.log(rawTitle, "Mtttt");

    const AUTHORS_QUERY = {
        who: "authors",
        per_page: 50,
        _fields: "id,name",
        context: "view", // Allows non-admins to perform requests.
    };

    const { authorId, authorDetails } = useSelect(
        (select) => {
            const { getEntityRecord, getUser, getUsers } = select(coreStore);
            const _authorId = getEntityRecord(
                "postType",
                "post",
                postId
            )?.author;

            return {
                authorId: _authorId,
                authorDetails: _authorId ? getUser(_authorId) : null,
                authors: getUsers(AUTHORS_QUERY),
            };
        },
        [postTypeSlug, postId]
    );
    const { postDetails, setDetails } = useSelect(
        (select) => {
            const { getEntityRecord, getUser, getUsers } = select(coreStore);
            const _authorId = getEntityRecord(
                "postType",
                "post",
                postId
            )?.author;
            const Category = getEntityRecord(
                "postType",
                "post",
                postId
            )?.categories;

            return {
                authorId: _authorId,
                authorDetails: _authorId ? getUser(_authorId) : null,
                authors: getUsers(AUTHORS_QUERY),
                categories: Category,
            };
        },
        [postTypeSlug, postId]
    );

    const [date, setDate] = useEntityProp(
        "postType",
        postTypeSlug,
        "date",
        postId
    );

    let postDate = date ? (
        <time dateTime={dateI18n("c", date)}>
            <span className="fa fa-clock-o"></span>

            {dateI18n(format || siteFormat, date)}
        </time>
    ) : (
        __("Post Date")
    );

    const authorName = authorDetails?.name || __("Post Author");

    return (
        <Fragment>
            <InspectorControls>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <ToggleControl
                            label={__("Author Meta")}
                            checked={showAuther}
                            onChange={() =>
                                setAttributes({ showAuther: !showAuther })
                            }
                        />
                        <ToggleControl
                            label={__("Date Meta")}
                            checked={showDate}
                            onChange={() =>
                                setAttributes({ showDate: !showDate })
                            }
                        />
                        <ToggleControl
                            label={__("Category Meta")}
                            checked={showCategories}
                            onChange={() =>
                                setAttributes({
                                    showCategories: !showCategories,
                                })
                            }
                        />
                        <ToggleControl
                            label={__("Comments Meta")}
                            checked={showComments}
                            onChange={() =>
                                setAttributes({ showComments: !showComments })
                            }
                        />
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PremiumTypo
                            components={[
                                "responsiveSize",
                                "weight",
                                "family",
                                "spacing",
                                "style",
                                "Upper",
                                "line",
                                "Decoration",
                            ]}
                            value={typography}
                            onChange={(newValue) =>
                                setAttributes({ typography: newValue })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__(
                                "Metadata Color",
                                "premium-blocks-for-gutenberg"
                            )}
                            colorValue={color}
                            colorDefault={""}
                            onColorChange={(value) =>
                                setAttributes({ color: value })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__(
                                "Links Hover Color",
                                "premium-blocks-for-gutenberg"
                            )}
                            colorValue={hoverColor}
                            colorDefault={""}
                            onColorChange={(value) =>
                                setAttributes({ hoverColor: value })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__(
                                "Separator Color",
                                "premium-blocks-for-gutenberg"
                            )}
                            colorValue={sepColor}
                            colorDefault={""}
                            onColorChange={(value) =>
                                setAttributes({ sepColor: value })
                            }
                        />
                    </InspectorTab>
                    <InspectorTab key={"advance"}>
                        <PremiumResponsiveTabs
                            Desktop={hideDesktop}
                            Tablet={hideTablet}
                            Mobile={hideMobile}
                            onChangeDesktop={(value) =>
                                setAttributes({
                                    hideDesktop: value,
                                })
                            }
                            onChangeTablet={(value) =>
                                setAttributes({
                                    hideTablet: value,
                                })
                            }
                            onChangeMobile={(value) =>
                                setAttributes({
                                    hideMobile: value,
                                })
                            }
                        />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            {showAuther && (
                <span className="premium-blog-post-author premium-blog-meta-data">
                    <span className="fa fa-user fa-fw"></span>
                    <a target="_blank" href={"#"} rel="noopener noreferrer">
                        {authorName}
                    </a>
                    <span className={`premium-blog-meta-separtor`}>•</span>
                </span>
            )}
            {showDate && (
                <div
                    className={`premium-blog-post-time premium-blog-meta-data`}
                >
                    {postDate}
                    <span className={`premium-blog-meta-separtor`}>•</span>
                </div>
            )}
            {/* {attributes.displayPostComment && undefined !== post.pbg_comment_info && (
                <div className={`premium-blog-post-comments premium-blog-meta-data`}>
                    <span className="premium-post__comment">
                        <span className="dashicons-admin-comments dashicons"></span>
                        {post.pbg_comment_info}
                    </span>
                    <span className={`premium-blog-meta-separtor`}>•</span>
                </div>
            )}
            {attributes.displayPostCategories && "" !== categoryObject && (
                <div
                    className={`premium-blog-post-categories premium-blog-meta-data`}
                >
                    <span className="premium-post__taxonomy">
                        <span className="fa fa-align-left fa-fw"></span>
                        {categoryObject.length === 0
                            ? "Uncategorized"
                            : categoryObject.map((category) => (
                                <span>{category.name + " "}</span>
                            ))}
                    </span>
                </div>
            )} */}
        </Fragment>
    );
}
