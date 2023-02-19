import { decodeEntities } from "@wordpress/html-entities";
import { useEntityProp } from "@wordpress/core-data";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
    generateBlockId,
    generateCss,
    typographyCss,
    paddingCss,
    marginCss,
} from "@pbg/helpers";
import {
    ResponsiveRangeControl,
    RadioComponent,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumTypo,
    AdvancedColorControl as AdvancedPopColorControl,
    WebfontLoader,
} from "@pbg/components";
import classNames from "classnames";
const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components;
const { useEffect, Fragment } = wp.element;
const { __ } = wp.i18n;
const { withSelect } = wp.data;

function PostTitle(props) {
    const {
        attributes,
        context: { postType, postId, queryId },
        deviceType,
        setAttributes,
        clientId,
    } = props;

    const {
        blockId,
        level,
        isLink,
        rel,
        linkTarget,
        Typography,
        textColor,
        hoverColor,
        bottomSpacing,
        hideDesktop,
        hideTablet,
        hideMobile,
    } = attributes;
    useEffect(() => {
        // Set block id.
        setAttributes({
            blockId: "premium-post-title-" + generateBlockId(clientId),
        });
    }, []);
    const blockProps = useBlockProps({
        className: classNames(blockId, "premium-blog-entry-title__container", {
            " premium-desktop-hidden": hideDesktop,
            " premium-tablet-hidden": hideTablet,
            " premium-mobile-hidden": hideMobile,
        }),
        style: {
            marginBottom: bottomSpacing[deviceType] + bottomSpacing["unit"],
        },
    });
    const [rawTitle = "", setTitle, fullTitle] = useEntityProp(
        "postType",
        postType,
        "title",
        postId
    );
    const [link] = useEntityProp("postType", postType, "link", postId);
    const TitleTag = `${level}`;
    let titleElement = (
        <TitleTag className={`premium-blog-entry-title`}>
            {__("Post Title")}
        </TitleTag>
    );
    const loadStyles = () => {
        const styles = {};
        styles[
            `.${blockId}.premium-blog-entry-title__container .premium-blog-entry-title `
        ] = {
            ...typographyCss(Typography, deviceType),
        };
        styles[
            `.${blockId}.premium-blog-entry-title__container .premium-blog-entry-title a`
        ] = {
            color: textColor,
        };
        styles[
            `.${blockId}.premium-blog-entry-title__container .premium-blog-entry-title:hover `
        ] = {
            color: hoverColor,
        };
        styles[
            `.${blockId}.premium-blog-entry-title__container .premium-blog-entry-title:hover a`
        ] = {
            color: hoverColor,
        };
        return generateCss(styles);
    };

    if (postType && postId) {
        titleElement = (
            <TitleTag
                className={`premium-blog-entry-title`}
                dangerouslySetInnerHTML={{
                    __html: fullTitle?.rendered,
                }}
            />
        );
    }

    if (isLink && postType && postId) {
        titleElement = (
            <TitleTag>
                <a
                    href={link}
                    target={linkTarget}
                    rel={rel}
                    onClick={(event) => event.preventDefault()}
                    dangerouslySetInnerHTML={{
                        __html: fullTitle?.rendered,
                    }}
                />
            </TitleTag>
        );
    }

    return (
        <Fragment>
            <InspectorControls>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__("Title", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <RadioComponent
                                choices={[
                                    {
                                        value: "h1",
                                        label: __(
                                            "H1",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "h2",
                                        label: __(
                                            "H2",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "h3",
                                        label: __(
                                            "H3",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "h4",
                                        label: __(
                                            "H4",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "h5",
                                        label: __(
                                            "H5",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                    {
                                        value: "h6",
                                        label: __(
                                            "H6",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    },
                                ]}
                                value={level}
                                onChange={(newValue) =>
                                    setAttributes({ level: newValue })
                                }
                                label={__(
                                    "Title Tag",
                                    "premium-blocks-for-gutenberg"
                                )}
                            />

                            <ToggleControl
                                label={__(
                                    "Link",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={isLink}
                                onChange={(value) =>
                                    setAttributes({ isLink: value })
                                }
                            />
                            {isLink && (
                                <Fragment>
                                    <p>
                                        {__(
                                            "URL",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    </p>
                                    <TextControl
                                        value={rel}
                                        onChange={(value) =>
                                            setAttributes({ rel: value })
                                        }
                                        placeholder={__(
                                            "Enter URL",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    />
                                    <ToggleControl
                                        checked={linkTarget}
                                        label={__(
                                            "Open Link in new Tab",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        onChange={(value) =>
                                            setAttributes({ linkTarget: value })
                                        }
                                    />
                                </Fragment>
                            )}
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PremiumTypo
                            value={Typography}
                            onChange={(newValue) =>
                                setAttributes({ Typography: newValue })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__("Color", "premium-blocks-for-gutenberg")}
                            colorValue={textColor}
                            colorDefault={""}
                            onColorChange={(newValue) =>
                                setAttributes({ textColor: newValue })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__(
                                " Hover Color",
                                "premium-blocks-for-gutenberg"
                            )}
                            colorValue={hoverColor}
                            colorDefault={""}
                            onColorChange={(newValue) =>
                                setAttributes({ hoverColor: newValue })
                            }
                        />
                        <ResponsiveRangeControl
                            label={__(
                                "Bottom Spacing",
                                "premium-blocks-for-gutenberg"
                            )}
                            value={bottomSpacing}
                            onChange={(newValue) =>
                                setAttributes({ bottomSpacing: newValue })
                            }
                            units={["px", "em", "%"]}
                            showUnit={true}
                            min={0}
                            max={360}
                            step={1}
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
            <div {...blockProps}>
                <style
                    dangerouslySetInnerHTML={{
                        __html: loadStyles(),
                    }}
                />
                <div className={`premium-blog-entry-title`}>{titleElement}</div>
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

    return {
        // Editor preview device.
        deviceType: deviceType,
    };
})(PostTitle);
