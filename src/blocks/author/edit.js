import classnames from "classnames";
import { generateBlockId, typographyCss } from "@pbg/helpers";
import {
    AdvancedColorControl as AdvancedPopColorControl,
    RadioComponent,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    MultiButtonsControl,
    Icons,
    WebfontLoader,
    PremiumTypo
} from "@pbg/components";

const { __ } = wp.i18n;
const { PanelBody, TextControl, ToggleControl } = wp.components;
const { InspectorControls, RichText, useBlockProps } = wp.blockEditor;
const { useEffect, Fragment } = wp.element;
const { withSelect } = wp.data;

function Edit(props) {
    const { setAttributes, className, clientId } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-author-" + generateBlockId(clientId),
        });
        setAttributes({ classMigrate: true });
    }, []);

    const {
        blockId,
        align,
        author,
        authorStyles,
        authorCom,
        hideDesktop,
        hideTablet,
        hideMobile,
        companyStyles,
        authorTypography,
        companyTypography,
    } = props.attributes;

    let loadAuthorGoogleFonts;
    let loadCompanyGoogleFonts;

    if (authorTypography?.fontFamily !== "Default") {
        const authorConfig = {
            google: {
                families: [authorTypography.fontFamily],
            },
        };
        loadAuthorGoogleFonts = (
            <WebfontLoader config={authorConfig}></WebfontLoader>
        );
    }

    if (companyTypography?.fontFamily !== "Default") {
        const companyConfig = {
            google: {
                families: [companyTypography.fontFamily],
            },
        };
        loadCompanyGoogleFonts = (
            <WebfontLoader config={companyConfig}></WebfontLoader>
        );
    }

    const saveAuthorStyle = (value) => {
        const newUpdate = authorStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            authorStyles: newUpdate,
        });
    };

    const saveCompanyStyle = (value) => {
        const newUpdate = companyStyles.map((item, indx) => {
            if (0 === indx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ companyStyles: newUpdate });
    };

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__("Author", "premium-blocks-for-gutenberg")}
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
                                value={authorStyles[0].authorTag}
                                onChange={(newValue) =>
                                    saveAuthorStyle({ authorTag: newValue })
                                }
                                label={__(
                                    "Title Tag",
                                    "premium-blocks-for-gutenberg"
                                )}
                            />
                            <MultiButtonsControl
                                choices={[
                                    {
                                        value: "left",
                                        label: __(
                                            "Left",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: Icons.alignLeft,
                                    },
                                    {
                                        value: "center",
                                        label: __(
                                            "Center",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: Icons.alignCenter,
                                    },
                                    {
                                        value: "right",
                                        label: __(
                                            "Right",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: Icons.alignRight,
                                    },
                                ]}
                                value={align}
                                onChange={(alignn) =>
                                    setAttributes({ align: alignn })
                                }
                                label={__(
                                    "Align Content",
                                    "premium-blocks-for-gutenberg"
                                )}
                                showIcons={true}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__(
                                "Company",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
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
                                value={authorStyles[0].authorComTag}
                                onChange={(newValue) =>
                                    saveAuthorStyle({ authorComTag: newValue })
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
                                checked={companyStyles[0].urlCheck}
                                onChange={(newCheck) =>
                                    saveCompanyStyle({ urlCheck: newCheck })
                                }
                            />
                            {companyStyles[0].urlCheck && (
                                <TextControl
                                    label={__(
                                        "URL",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={companyStyles[0].urlText}
                                    onChange={(newURL) =>
                                        saveCompanyStyle({ urlText: newURL })
                                    }
                                />
                            )}
                            {companyStyles[0].urlCheck && (
                                <ToggleControl
                                    label={__(
                                        "Open Link in a New Tab",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    checked={companyStyles[0].urlTarget}
                                    onChange={(newCheck) =>
                                        saveCompanyStyle({
                                            urlTarget: newCheck,
                                        })
                                    }
                                />
                            )}
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__("Author", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <PremiumTypo
                                value={authorTypography}
                                onChange={(newValue) =>
                                    setAttributes({
                                        authorTypography: newValue,
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={authorStyles[0].authorColor}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    saveAuthorStyle({ authorColor: newValue })
                                }
                            />
                        </PanelBody>
                        <PanelBody
                            title={__(
                                "Company",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumTypo
                                value={companyTypography}
                                onChange={(newValue) =>
                                    setAttributes({
                                        companyTypography: newValue,
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Text Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={companyStyles[0].authorComColor}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    saveCompanyStyle({
                                        authorComColor: newValue,
                                    })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Dash Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={companyStyles[0].dashColor}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    saveCompanyStyle({ dashColor: newValue })
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
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-testimonial__info ${blockId}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{
                    justifyContent: align?.[props.deviceType],
                }}
            >
                <RichText
                    tagName={authorStyles[0].authorTag.toLowerCase()}
                    className={`premium-testimonial__author`}
                    value={author}
                    onChange={(newText) =>
                        setAttributes({ author: newText })
                    }
                    style={{
                        color: authorStyles[0].authorColor,
                        ...typographyCss(
                            authorTypography,
                            props.deviceType
                        ),
                    }}
                    keepPlaceholderOnFocus
                />
                <span
                    className={`premium-testimonial__sep`}
                    style={{
                        color: companyStyles[0].dashColor,
                    }}
                >
                    &nbsp;-&nbsp;
                </span>
                <RichText
                    tagName={authorStyles[0].authorComTag.toLowerCase()}
                    className={`premium-testimonial__author_comp`}
                    onChange={(newText) =>
                        setAttributes({ authorCom: newText })
                    }
                    value={authorCom}
                    style={{
                        color: companyStyles[0].authorComColor,
                        ...typographyCss(
                            companyTypography,
                            props.deviceType
                        ),
                    }}
                    keepPlaceholderOnFocus
                />

                {loadAuthorGoogleFonts}
                {loadCompanyGoogleFonts}
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
})(Edit);
