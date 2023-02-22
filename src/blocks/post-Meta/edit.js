import { Fragment, useEffect } from "react";
import { useSelect, withSelect, select } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import { useEntityProp } from "@wordpress/core-data";
import { __ } from "@wordpress/i18n";
import classNames from "classnames";

const { dateI18n, format, __experimentalGetSettings } = wp.date;
import {
    generateBlockId,
    typographyCss,
    paddingCss,
    marginCss,
    generateCss,
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

function Meta(props) {
    const {
        isSelected,
        context: { postId, postType: postTypeSlug, queryId },
        attributes,
        setAttributes,
        categoriesList,
        categories,
        clientId,
        deviceType,
    } = props;
    const {
        blockId,
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
    const dateFormat = __experimentalGetSettings().formats.date;
    let categoryObject = [];
    if (categoriesList) {
        categoriesList.map((item, thisIndex) => {
            if (categories && item.id == categories[thisIndex]) {
                categoryObject.push(item);
            }
        });
    }
    useEffect(() => {
        // Set block id.
        setAttributes({
            blockId: "premium-post-meta-" + generateBlockId(clientId),
        });
    }, []);

    const blockProps = useBlockProps({
        className: classNames(blockId, "premium-blog-entry-meta", {
            " premium-desktop-hidden": hideDesktop,
            " premium-tablet-hidden": hideTablet,
            " premium-mobile-hidden": hideMobile,
        }),
    });
    const loadStyles = () => {
        const styles = {};
        styles[`.${blockId} .premium-blog-meta-data `] = {
            ...typographyCss(typography, deviceType),
            color: color,
        };
        styles[`.${blockId} .premium-blog-meta-data:hover `] = {
            color: hoverColor,
        };
        styles[`.${blockId} .premium-blog-meta-separtor`] = {
            color: sepColor,
        };
        return generateCss(styles);
    };

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

    const [date, setDate] = useEntityProp(
        "postType",
        postTypeSlug,
        "date_gmt",
        postId
    );
    const [comments, setComments] = useEntityProp(
        "postType",
        postTypeSlug,
        "comments_num",
        postId
    );

    let postDate = date ? (
        <time dateTime={dateI18n("c", date)}>{dateI18n(dateFormat, date)}</time>
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
            <div {...blockProps}>
                <style
                    dangerouslySetInnerHTML={{
                        __html: loadStyles(),
                    }}
                />
                {showAuther && (
                    <span className="premium-blog-post-author premium-blog-meta-data">
                        <svg
                            width="800px"
                            height="800px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18 18.7023C18 15.6706 14.5 15 12 15C9.5 15 6 15.6706 6 18.7023M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                                stroke="#000000"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        {authorName}
                        <span className={`premium-blog-meta-separtor`}>•</span>
                    </span>
                )}
                {showDate && (
                    <div
                        className={`premium-blog-post-time premium-blog-meta-data`}
                    >
                        <svg
                            width="800px"
                            height="800px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 11H4M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V11ZM15 3V7M9 3V7"
                                stroke="#000000"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        {postDate}
                        <span className={`premium-blog-meta-separtor`}>•</span>
                    </div>
                )}
                {showComments && undefined !== comments && (
                    <div
                        className={`premium-blog-post-comments premium-blog-meta-data`}
                    >
                        <span className="premium-post__comment">
                            <svg
                                width="800px"
                                height="800px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_429_11233)">
                                    <path
                                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36093 14.891 4 16.1272L3 21L7.8728 20C9.10904 20.6391 10.5124 21 12 21Z"
                                        stroke="#292929"
                                        stroke-width="2.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_429_11233">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            {comments}
                        </span>
                        <span className={`premium-blog-meta-separtor`}>• </span>
                    </div>
                )}
                {showCategories && "" !== categoryObject && (
                    <div
                        className={`premium-blog-post-categories premium-blog-meta-data`}
                    >
                        <span className="premium-post__taxonomy">
                            <svg
                                fill="#000000"
                                width="800px"
                                height="800px"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M.5 9h9.75v1.25H.5zm0-3.25h15V7H.5zm0 6.5h15v1.25H.5zm0-9.75h9.75v1.25H.5z" />
                            </svg>{" "}
                            {categoryObject.length === 0
                                ? "Uncategorized"
                                : categoryObject.map((category) => (
                                      <span>{category.name + " "}</span>
                                  ))}
                        </span>
                    </div>
                )}
            </div>
        </Fragment>
    );
}
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } =
        select("core/edit-post");
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;
    const {
        context: { postId, postType, queryId },
    } = props;

    const { getEntityRecords } = select("core");
    let categoriesList = [];
    categoriesList = wp.data
        .select("core")
        .getEntityRecords("taxonomy", "category");
    const [categories, setCategories] = useEntityProp(
        "postType",
        postType,
        "categories",
        postId
    );

    return {
        categoriesList: categoriesList,
        categories: categories,
        deviceType: deviceType,
    };
})(Meta);
