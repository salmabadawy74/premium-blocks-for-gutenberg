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
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs></defs>
                            <title />
                            <g data-name="Layer 7" id="Layer_7">
                                <path
                                    class="cls-1"
                                    d="M19.75,15.67a6,6,0,1,0-7.51,0A11,11,0,0,0,5,26v1H27V26A11,11,0,0,0,19.75,15.67ZM12,11a4,4,0,1,1,4,4A4,4,0,0,1,12,11ZM7.06,25a9,9,0,0,1,17.89,0Z"
                                />
                            </g>
                        </svg>{" "}
                        {authorName}
                        <span className={`premium-blog-meta-separtor`}>•</span>
                    </span>
                )}
                {showDate && (
                    <div
                        className={`premium-blog-post-time premium-blog-meta-data`}
                    >
                        <svg
                            height="20px"
                            id="Layer_1"
                            version="1.1"
                            viewBox="0 0 20 20"
                            width="20px"
                        >
                            <g id="calendar_1_">
                                <path
                                    d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1   c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667   C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667   C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1   s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z"
                                    fill="#333332"
                                />
                                <rect
                                    fill="#333332"
                                    height="3"
                                    width="4"
                                    x="7"
                                    y="12"
                                />
                                <rect
                                    fill="#333332"
                                    height="3"
                                    width="4"
                                    x="7"
                                    y="17"
                                />
                                <rect
                                    fill="#333332"
                                    height="3"
                                    width="4"
                                    x="7"
                                    y="22"
                                />
                                <rect
                                    fill="#333332"
                                    height="3"
                                    width="4"
                                    x="14"
                                    y="22"
                                />
                                <rect
                                    fill="#333332"
                                    height="3"
                                    width="4"
                                    x="14"
                                    y="17"
                                />
                                <rect
                                    fill="#333332"
                                    height="3"
                                    width="4"
                                    x="14"
                                    y="12"
                                />
                                <rect
                                    fill="#333332"
                                    height="3"
                                    width="4"
                                    x="21"
                                    y="22"
                                />
                                <rect
                                    fill="#333332"
                                    height="3"
                                    width="4"
                                    x="21"
                                    y="17"
                                />
                                <rect
                                    fill="#333332"
                                    height="3"
                                    width="4"
                                    x="21"
                                    y="12"
                                />
                            </g>
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
                                height="20"
                                viewBox="0 0 20 20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M43.98 8c0-2.21-1.77-4-3.98-4h-32c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h28l8 8-.02-36zm-7.98 20h-24v-4h24v4zm0-6h-24v-4h24v4zm0-6h-24v-4h24v4z" />
                                <path d="M0 0h48v48h-48z" fill="none" />
                            </svg>{" "}
                            {comments}
                        </span>
                        <span className={`premium-blog-meta-separtor`}>•</span>
                    </div>
                )}
                {showCategories && "" !== categoryObject && (
                    <div
                        className={`premium-blog-post-categories premium-blog-meta-data`}
                    >
                        <span className="premium-post__taxonomy">
                            <svg
                                height="20"
                                viewBox="0 0 20 20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M30 30h-24v4h24v-4zm0-16h-24v4h24v-4zm-24 12h36v-4h-36v4zm0 16h36v-4h-36v4zm0-36v4h36v-4h-36z" />
                                <path d="M0 0h48v48h-48z" fill="none" />
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
