import classnames from "classnames";
import iconsList from "../../components/premium-icons-list";
import InspectorTabs from "../../components/inspectorTabs";
import InspectorTab from "../../components/inspectorTab";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import AdvancedPopColorControl from "../../components/Color Control/ColorComponent";
import PremiumFilters from "../../components/premium-filters";
import PremiumMediaUpload from "../../components/premium-media-upload";
import ResponsiveRadioControl from "../../components/responsive-radio";
import Icons from "../../components/icons";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import PremiumBorder from "../../components/premium-border";
import SpacingControl from "../../components/premium-responsive-spacing";
import InsideTabs from "../../components/InsideTabs";
import InsideTab from "../../components/InsideTab";
import PremiumShadow from "../../components/PremiumShadow";
import {
    borderCss,
    paddingCss,
    generateBlockId,
    generateCss
} from "../../components/HelperFunction";

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const { MediaPlaceholder, InspectorControls } = wp.editor;

const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components;
const { withSelect } = wp.data;

class edit extends Component {
    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        const { setAttributes, clientId } = this.props;
        if (!this.props.attributes.blockId) {
            setAttributes({
                blockId: "premium-image-separator-" + generateBlockId(clientId),
            });
        }
        setAttributes({ classMigrate: true });
    }

    render() {
        const { isSelected, setAttributes, attributes } = this.props;

        const {
            blockId,
            iconAlign,
            className,
            iconType,
            iconSize,
            imageURL,
            imageID,
            link,
            url,
            gutter,
            imgFilter,
            imgFilterHover,
            linkTarget,
            iconStyles,
            imgHeight,
            imgFit,
            imgMask,
            imgMaskID,
            imgMaskURL,
            maskSize,
            maskPosition,
            hideDesktop,
            hideTablet,
            hideMobile,
            iconBorder,
            iconPadding,
            iconShadow,
        } = attributes;

        const ICON = [
            {
                value: "icon",
                label: __("Icon", "premium-blocks-for-gutenberg"),
            },
            {
                value: "image",
                label: __("Image", "premium-blocks-for-gutenberg"),
            },
        ];

        const saveIconStyle = (value) => {
            const newUpdate = iconStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ iconStyles: newUpdate });
        };



        const loadStyles = () => {
            const styles = {};
            styles[`.${blockId} .premium-image-separator-container:hover img`] = {
                'filter': `brightness(${imgFilterHover?.bright}% ) contrast(${imgFilterHover?.contrast}% ) saturate(${imgFilterHover?.saturation}% ) blur(${imgFilterHover?.blur}px) hue-rotate(${imgFilterHover?.hue}deg)!important`
            };
            styles[` .${blockId} .premium-image-separator-container i:hover`] = {
                'color': `${iconStyles[0].iconColorHover} !important`,
                'background-color': `${iconStyles[0].iconBGColorHover} !important`
            };
            return generateCss(styles);
        }

        const mainClasses = classnames(className, "premium-image-separator", {
            ' premium-desktop-hidden': hideDesktop,
            ' premium-tablet-hidden': hideTablet,
            ' premium-mobile-hidden': hideMobile,
        });

        return [
            isSelected && (
                <InspectorControls>
                    <InspectorTabs tabs={["layout", "style", "advance"]}>
                        <InspectorTab key={"layout"}>
                            <PanelBody
                                title={__("Separator")}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <SelectControl
                                    label={__("Separator Type")}
                                    value={iconType}
                                    onChange={(newSelect) =>
                                        setAttributes({ iconType: newSelect })
                                    }
                                    options={ICON}
                                />
                                {iconType === "icon" ? (
                                    <Fragment>
                                        <p>{__("Icon")}</p>
                                        <FontIconPicker
                                            icons={iconsList}
                                            value={iconStyles[0].icon}
                                            onChange={(value) =>
                                                saveIconStyle({ icon: value })
                                            }
                                            isMulti={false}
                                            appendTo="body"
                                            noSelectedPlaceholder={__(
                                                "Select Icon"
                                            )}
                                        />
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <PremiumMediaUpload
                                            type="image"
                                            imageID={imageID}
                                            imageURL={imageURL}
                                            onSelectMedia={(media) => {
                                                setAttributes({
                                                    imageID: media.id,
                                                    imageURL: media.url,
                                                });
                                            }}
                                            onRemoveImage={() =>
                                                setAttributes({
                                                    imageURL: "",
                                                    imageID: "",
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}
                                <ResponsiveRangeControl
                                    label={__(
                                        "Width/Size",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={iconSize}
                                    onChange={(value) =>
                                        setAttributes({ iconSize: value })
                                    }
                                    showUnit={true}
                                    defaultValue={200}
                                    units={["px", "em"]}
                                    min={1}
                                    max={1000}
                                    step={1}
                                />
                                {iconType === "image" && (
                                    <Fragment>
                                        <ResponsiveRangeControl
                                            label={__(
                                                "Height",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            value={imgHeight}
                                            onChange={(value) =>
                                                setAttributes({
                                                    imgHeight: value,
                                                })
                                            }
                                            showUnit={true}
                                            defaultValue={200}
                                            units={["px", "em"]}
                                            min={1}
                                            max={1000}
                                            step={1}
                                        />
                                        <SelectControl
                                            label={__("Image Fit")}
                                            value={imgFit}
                                            onChange={(newSelect) =>
                                                setAttributes({
                                                    imgFit: newSelect,
                                                })
                                            }
                                            options={[
                                                {
                                                    label: __(
                                                        "Cover",
                                                        "premium-blocks-for-gutenberg"
                                                    ),
                                                    value: "cover",
                                                },
                                                {
                                                    label: __(
                                                        "Fill",
                                                        "premium-blocks-for-gutenberg"
                                                    ),
                                                    value: "fill",
                                                },
                                                {
                                                    label: __(
                                                        "Contain",
                                                        "premium-blocks-for-gutenberg"
                                                    ),
                                                    value: "contain",
                                                },
                                            ]}
                                        />
                                    </Fragment>
                                )}
                                <TextControl
                                    label={__("Gutter (%)")}
                                    type="Number"
                                    value={gutter}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            gutter: parseInt(newValue),
                                        })
                                    }
                                    help="-50% is default. Increase to push the image outside or decrease to pull the image inside."
                                />
                                <ResponsiveRadioControl
                                    label={__(
                                        "Alignment",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    choices={[
                                        {
                                            value: "left",
                                            label: __("Left"),
                                            icon: Icons.alignLeft,
                                        },
                                        {
                                            value: "center",
                                            label: __("Center"),
                                            icon: Icons.alignCenter,
                                        },
                                        {
                                            value: "right",
                                            label: __("Right"),
                                            icon: Icons.alignRight,
                                        },
                                    ]}
                                    value={iconAlign}
                                    onChange={(newValue) =>
                                        setAttributes({ iconAlign: newValue })
                                    }
                                    showIcons={true}
                                />
                                <ToggleControl
                                    label={__("Link")}
                                    checked={link}
                                    onChange={(value) =>
                                        setAttributes({ link: value })
                                    }
                                />
                                {link && (
                                    <Fragment>
                                        <p>{__("URL")}</p>
                                        <TextControl
                                            value={url}
                                            onChange={(value) =>
                                                setAttributes({ url: value })
                                            }
                                            placeholder={__("Enter URL")}
                                        />
                                        <ToggleControl
                                            label={__("Open links in new tab")}
                                            checked={linkTarget}
                                            onChange={(newValue) =>
                                                setAttributes({
                                                    linkTarget: newValue,
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}
                                {iconType === "image" && (
                                    <Fragment>
                                        <ToggleControl
                                            label={__("Mask Image Shape")}
                                            checked={imgMask}
                                            onChange={(newValue) =>
                                                setAttributes({
                                                    imgMask: newValue,
                                                })
                                            }
                                        />
                                        {imgMask && (
                                            <Fragment>
                                                <PremiumMediaUpload
                                                    type="image"
                                                    imageID={imgMaskID}
                                                    imageURL={imgMaskURL}
                                                    onSelectMedia={(media) => {
                                                        setAttributes({
                                                            imgMaskID: media.id,
                                                            imgMaskURL:
                                                                media.url,
                                                        });
                                                    }}
                                                    onRemoveImage={() =>
                                                        setAttributes({
                                                            imgMaskURL: "",
                                                            imgMaskID: "",
                                                        })
                                                    }
                                                />

                                                <SelectControl
                                                    label={__("Mask Size")}
                                                    value={maskSize}
                                                    onChange={(newSelect) =>
                                                        setAttributes({
                                                            maskSize: newSelect,
                                                        })
                                                    }
                                                    options={[
                                                        {
                                                            label: "Contain",
                                                            value: "contain",
                                                        },
                                                        {
                                                            label: "Cover",
                                                            value: "cover",
                                                        },
                                                    ]}
                                                />

                                                <SelectControl
                                                    label={__("Mask Position")}
                                                    value={maskPosition}
                                                    onChange={(newSelect) =>
                                                        setAttributes({
                                                            maskPosition:
                                                                newSelect,
                                                        })
                                                    }
                                                    options={[
                                                        {
                                                            label: "Center Center",
                                                            value: "center center",
                                                        },
                                                        {
                                                            label: "Top Center",
                                                            value: "top center",
                                                        },
                                                        {
                                                            label: "Bottom Center",
                                                            value: "bottom center",
                                                        },
                                                    ]}
                                                />
                                            </Fragment>
                                        )}
                                    </Fragment>
                                )}
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={"style"}>
                            <PanelBody
                                title={__("Separator")}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                {iconType === "image" ? (
                                    <InsideTabs>
                                        <InsideTab tabTitle={__("Normal")}>
                                            <PremiumFilters
                                                value={imgFilter}
                                                onChange={(value) => setAttributes({ imgFilter: value })}
                                            />
                                        </InsideTab>
                                        <InsideTab tabTitle={__("Hover")}>
                                            <PremiumFilters
                                                label={__("Hover CSS Filters")}
                                                value={imgFilterHover}
                                                onChange={(value) => setAttributes({ imgFilterHover: value })}
                                            />
                                        </InsideTab>
                                    </InsideTabs>
                                ) : (
                                    <Fragment>
                                        <InsideTabs>
                                            <InsideTab tabTitle={__("Normal")}>
                                                <Fragment>
                                                    <AdvancedPopColorControl
                                                        label={__(
                                                            "Color",
                                                            "premium-blocks-for-gutenberg"
                                                        )}
                                                        colorDefault={""}
                                                        colorValue={
                                                            iconStyles[0]
                                                                .iconColor
                                                        }
                                                        onColorChange={(
                                                            newValue
                                                        ) =>
                                                            saveIconStyle({
                                                                iconColor:
                                                                    newValue,
                                                            })
                                                        }
                                                    />
                                                    <AdvancedPopColorControl
                                                        label={__(
                                                            "Background Color",
                                                            "premium-blocks-for-gutenberg"
                                                        )}
                                                        colorDefault={""}
                                                        colorValue={
                                                            iconStyles[0]
                                                                .iconBGColor
                                                        }
                                                        onColorChange={(
                                                            newValue
                                                        ) =>
                                                            saveIconStyle({
                                                                iconBGColor:
                                                                    newValue,
                                                            })
                                                        }
                                                    />
                                                </Fragment>
                                            </InsideTab>
                                            <InsideTab tabTitle={__("Hover")}>
                                                <Fragment>
                                                    <AdvancedPopColorControl
                                                        label={__(
                                                            "Hover Color",
                                                            "premium-blocks-for-gutenberg"
                                                        )}
                                                        colorValue={
                                                            iconStyles[0]
                                                                .iconColorHover
                                                        }
                                                        onColorChange={(
                                                            newValue
                                                        ) =>
                                                            saveIconStyle({
                                                                iconColorHover:
                                                                    newValue,
                                                            })
                                                        }
                                                        colorDefault={""}
                                                    />
                                                    <AdvancedPopColorControl
                                                        label={__(
                                                            "Hover Background Color",
                                                            "premium-blocks-for-gutenberg"
                                                        )}
                                                        colorValue={
                                                            iconStyles[0]
                                                                .iconBGColorHover
                                                        }
                                                        onColorChange={(
                                                            newValue
                                                        ) =>
                                                            saveIconStyle({
                                                                iconBGColorHover:
                                                                    newValue,
                                                            })
                                                        }
                                                        colorDefault={""}
                                                    />
                                                </Fragment>
                                            </InsideTab>
                                        </InsideTabs>
                                        <PremiumShadow
                                            label={__(
                                                "Text Shadow",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            value={iconShadow}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconShadow: value,
                                                })
                                            }
                                        />
                                        <SpacingControl
                                            label={__(
                                                "Padding",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            value={iconPadding}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconPadding: value,
                                                })
                                            }
                                            showUnits={true}
                                            responsive={true}
                                        />
                                    </Fragment>
                                )}
                                {!iconStyles[0].advancedBorder && (
                                    <PremiumBorder
                                        label={__("Border")}
                                        value={iconBorder}
                                        onChange={(value) =>
                                            setAttributes({ iconBorder: value })
                                        }
                                    />
                                )}
                                <ToggleControl
                                    label={__(
                                        "Advanced Border Radius",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    checked={iconStyles[0].advancedBorder}
                                    onChange={(value) =>
                                        saveIconStyle({ advancedBorder: value })
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
                                {iconStyles[0].advancedBorder && (
                                    <TextControl
                                        label={__(
                                            "Border Radius",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={
                                            iconStyles[0].advancedBorderValue
                                        }
                                        onChange={(value) =>
                                            saveIconStyle({
                                                advancedBorderValue: value,
                                            })
                                        }
                                    />
                                )}
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
            ),
            <style
                dangerouslySetInnerHTML={{ __html: loadStyles() }}
            />,
            <div
                className={`${mainClasses} ${blockId}`}
                style={{ textAlign: iconAlign[this.props.deviceType] }}
            >
                <div
                    className={`premium-image-separator-container`}
                    style={{
                        textAlign: iconAlign[this.props.deviceType],
                        transform: `translateY(${gutter}%)`,
                        filter:
                            iconType === "image"
                                ? `brightness( ${imgFilter?.bright}% ) contrast( ${imgFilter?.contrast}% ) saturate( ${imgFilter?.saturation}% ) blur( ${imgFilter?.blur}px ) hue-rotate( ${imgFilter?.hue}deg )`
                                : "",
                    }}
                >
                    {iconType === "icon" && (
                        <i
                            className={`${iconStyles[0].icon}`}
                            style={{
                                ...borderCss(iconBorder, this.props.deviceType),
                                ...paddingCss(
                                    iconPadding,
                                    this.props.deviceType
                                ),
                                fontSize:
                                    (iconSize[this.props.deviceType] || 200) +
                                    iconSize.unit,
                                color: iconStyles[0].iconColor,
                                backgroundColor: iconStyles[0].iconBGColor,
                                textShadow: `${iconShadow.horizontal || 0}px ${iconShadow.vertical || 0
                                    }px ${iconShadow.blur || 0}px ${iconShadow.color
                                    }`,
                                borderRadius: iconStyles[0].advancedBorder
                                    ? iconStyles[0].advancedBorderValue
                                    : `${iconBorder.borderRadius[
                                        this.props.deviceType
                                    ].top
                                    }px`,
                            }}
                        />
                    )}
                    {iconType === "image" && (
                        <Fragment>
                            {imageURL ? (
                                <img
                                    src={imageURL}
                                    style={{
                                        ...borderCss(
                                            iconBorder,
                                            this.props.deviceType
                                        ),
                                        maskSize: `${maskSize}`,
                                        maskPosition: `${maskPosition}`,
                                        maskImage: imgMaskURL
                                            ? `url("${imgMaskURL}")`
                                            : "",
                                        WebkitMaskImage: imgMaskURL
                                            ? `url("${imgMaskURL}")`
                                            : "",
                                        WebkitMaskSize: `${maskSize}`,
                                        WebkitMaskPosition: `${maskPosition}`,
                                        objectFit: `${imgFit}`,
                                        height:
                                            (imgHeight[this.props.deviceType] ||
                                                200) + iconSize.unit,
                                        width:
                                            (iconSize[this.props.deviceType] ||
                                                200) + iconSize.unit,
                                        borderRadius: iconStyles[0]
                                            .advancedBorder
                                            ? iconStyles[0].advancedBorderValue
                                            : `${iconBorder.borderRadius[
                                                this.props.deviceType
                                            ].top
                                            }px`,
                                    }}
                                />
                            ) : (
                                <MediaPlaceholder
                                    labels={{
                                        title: __(
                                            "Premium Image Separator",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        instructions: __(
                                            "Upload an image file, pick one from your media library, or add one with a URL.",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                    }}
                                    accept={["image"]}
                                    allowedTypes={["image"]}
                                    value={imageURL}
                                    onSelectURL={(value) =>
                                        setAttributes({ imageURL: value })
                                    }
                                    onSelect={(media) => {
                                        setAttributes({
                                            imageID: media.id,
                                            imageURL: media.url,
                                        });
                                    }}
                                />
                            )}
                        </Fragment>
                    )}
                    {link && (
                        <a
                            className="premium-image-separator-link"
                            href={`${url}`}
                        ></a>
                    )}
                </div>
            </div>,
        ];
    }
}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } =
        select("core/edit-post");
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    return {
        deviceType: deviceType,
    };
})(edit);
