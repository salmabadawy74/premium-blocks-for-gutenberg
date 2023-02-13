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
        className: classNames(blockId, {
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
        <time dateTime={dateI18n("c", date)}>
            <span className="fa fa-clock-o"></span>

            {dateI18n(dateFormat, date)}
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
            <div {...blockProps}>
                <style
                    dangerouslySetInnerHTML={{
                        __html: loadStyles(),
                    }}
                />
                {showAuther && (
                    <span className="premium-blog-post-author premium-blog-meta-data">
                        <span className="fa fa-user fa-fw"></span>
                        {authorName}
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
                {showComments && undefined !== comments && (
                    <div
                        className={`premium-blog-post-comments premium-blog-meta-data`}
                    >
                        <span className="premium-post__comment">
                            <span className="dashicons-admin-comments dashicons"></span>
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
                            <span className="fa fa-align-left fa-fw"></span>
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
