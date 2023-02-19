import { Fragment, useEffect } from "react";
import { useSelect, withSelect, select } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import { useEntityProp } from "@wordpress/core-data";
import { __ } from "@wordpress/i18n";
import classnames from "classnames";

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
function Tags(props) {
    const {
        isSelected,
        context: { postId, postType, queryId },
        attributes,
        setAttributes,
        taxonomies,
        deviceType,
        clientId,
    } = props;
    const {
        blockId,
        displayPostTags,
        typography,
        color,
        hoverColor,
        hideDesktop,
        hideTablet,
        hideMobile,
    } = attributes;
    useEffect(() => {
        // Set block id.
        setAttributes({
            blockId: "premium-post-tag-" + generateBlockId(clientId),
        });
    }, []);

    const [tags, setTags] = useEntityProp("postType", postType, "tags", postId);
    const blockProps = useBlockProps({
        className: classnames(blockId, "premium-blog-post-tags-container", {
            " premium-desktop-hidden": hideDesktop,
            " premium-tablet-hidden": hideTablet,
            " premium-mobile-hidden": hideMobile,
        }),
    });
    let tagName = [];
    if (taxonomies) {
        taxonomies.map((tag, thisIndex) => {
            if (tags && tag.id == tags[thisIndex]) {
                tagName.push(tag.name);
            }
        });
    }
    const loadStyles = () => {
        const styles = {};
        styles[`.${blockId}.premium-blog-post-tags-container:hover `] = {
            color: `${hoverColor}!important`,
        };
        return generateCss(styles);
    };
    if (tagName.length > 0 && displayPostTags) {
        return (
            <Fragment>
                <InspectorControls>
                    <InspectorTabs tabs={["style", "advance"]}>
                        <InspectorTab key={"style"}>
                            <PremiumTypo
                                value={typography}
                                onChange={(newValue) =>
                                    setAttributes({ typography: newValue })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={color}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    setAttributes({ color: newValue })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Hover  Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={hoverColor}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    setAttributes({ hoverColor: newValue })
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
                <div
                    {...blockProps}
                    style={{
                        color: color,
                        ...typographyCss(typography, deviceType),
                    }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: loadStyles(),
                        }}
                    />

                    <i className={`fa fa-tags fa-fw`}></i>
                    {tagName.map((tag) => (
                        <a>{tag}</a>
                    ))}
                </div>
            </Fragment>
        );
    } else {
        return null;
    }
}
export default withSelect((select, props) => {
    const {
        context: { postId, postType, queryId },
    } = props;
    let taxonomies;
    const { __experimentalGetPreviewDeviceType = null } =
        select("core/edit-post");
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    taxonomies = wp.data
        .select("core")
        .getEntityRecords("taxonomy", "post_tag");

    return {
        taxonomies: taxonomies,
        deviceType: deviceType,
    };
})(Tags);
