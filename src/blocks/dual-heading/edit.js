import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import AdvancedPopColorControl from "../../components/Color Control/ColorComponent";
import PremiumBackgroundControl from "../../components/Premium-Background-Control";
const { __ } = wp.i18n;
const { withSelect } = wp.data;
import WebfontLoader from "../../components/typography/fontLoader";
import PremiumShadow from "../../components/PremiumShadow";
import SpacingComponent from "../../components/premium-responsive-spacing";
import {
    gradientBackground,
    generateBlockId,
    typographyCss,
    paddingCss,
    marginCss,
    borderCss,
} from "../../components/HelperFunction";
import InspectorTabs from "../../components/inspectorTabs";
import InspectorTab from "../../components/inspectorTab";

const { Fragment, Component } = wp.element;

const { PanelBody, SelectControl, ToggleControl } = wp.components;

const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    RichText,
    URLInput,
} = wp.blockEditor;

class edit extends Component {
    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        this.props.setAttributes({
            blockId:
                "premium-dual-heading-" +
                generateBlockId(this.props.clientId),
        });
        this.props.setAttributes({ classMigrate: true });
    }
    render() {
        const { setAttributes, isSelected, className } = this.props;
        const {
            blockId,
            align,
            firstHeading,
            secondHeading,
            display,
            firstStyles,
            secondStyles,
            link,
            target,
            headingURL,
            hideDesktop,
            hideTablet,
            hideMobile,
            firstBorder,
            secondBorder,
            containerBorder,
            firstTypography,
            secondTypography,
            background,
            firstShadow,
            secondShadow,
            firstPadding,
            firstMargin,
            secondPadding,
            secondMargin,
        } = this.props.attributes;

        const DISPLAY = [
            {
                value: "inline",
                label: __("Inline", "premium-blocks-for-gutenberg"),
            },
            {
                value: "block",
                label: __("Block", "premium-blocks-for-gutenberg"),
            },
        ];

        let loadFirstGoogleFonts;
        let loadSecondGoogleFonts;
        if (firstTypography?.fontFamily !== "Default") {
            const firstConfig = {
                google: {
                    families: [firstTypography.fontFamily],
                },
            }
            loadFirstGoogleFonts = (
                <WebfontLoader config={firstConfig}>
                </WebfontLoader>
            );
        }
        if (secondTypography?.fontFamily !== "Default") {
            const secondConfig = {
                google: {
                    families: [secondTypography.fontFamily],
                },
            }
            loadSecondGoogleFonts = (
                <WebfontLoader config={secondConfig}>
                </WebfontLoader>
            );
        }

        const saveSecondStyle = (value) => {
            const newUpdate = secondStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                secondStyles: newUpdate,
            });
        };

        const saveFirstStyle = (value) => {
            const newUpdate = firstStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                firstStyles: newUpdate,
            });
        };

        return [
            // isSelected && (
            //     <BlockControls key="controls">
            //         <AlignmentToolbar
            //             value={contentAlign}
            //             onChange={(newAlign) =>
            //                 setAttributes({ contentAlign: newAlign })
            //             }
            //         />
            //     </BlockControls>
            // ),
            isSelected && (
                <InspectorControls key={"inspector"}>
                    <InspectorTabs tabs={["layout", "style", "advance"]}>
                        <InspectorTab key={"layout"}>
                            <PanelBody
                                title={__(
                                    "General",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <SelectControl
                                    label={__(
                                        "Display",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={display}
                                    options={DISPLAY}
                                    onChange={(value) =>
                                        setAttributes({ display: value })
                                    }
                                />
                                <ToggleControl
                                    label={__(
                                        "Link",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    checked={link}
                                    onChange={(newValue) =>
                                        setAttributes({ link: newValue })
                                    }
                                />
                                {link && (
                                    <ToggleControl
                                        label={__(
                                            "Open link in new tab",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        checked={target}
                                        onChange={(newValue) =>
                                            setAttributes({ target: newValue })
                                        }
                                    />
                                )}
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={"style"}>
                            <PanelBody
                                title={__(
                                    "Container",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <PremiumBackgroundControl
                                    value={background}
                                    onChange={(value) =>
                                        setAttributes({ background: value })
                                    }
                                />
                                <hr />
                                <PremiumBorder
                                    label={__("Border")}
                                    value={containerBorder}
                                    onChange={(value) =>
                                        setAttributes({
                                            containerBorder: value,
                                        })
                                    }
                                />
                            </PanelBody>
                            <PanelBody
                                title={__(
                                    "First Heading",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
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
                                    value={firstTypography}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            firstTypography: newValue,
                                        })
                                    }
                                />
                                <hr />
                                <ToggleControl
                                    label={__(
                                        "Clipped",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    checked={firstStyles?.[0]?.firstClip}
                                    onChange={(newValue) =>
                                        saveFirstStyle({ firstClip: newValue })
                                    }
                                />
                                {firstStyles?.[0]?.firstClip && (
                                    <Fragment>
                                        <ToggleControl
                                            label={__(
                                                "Animated",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            checked={
                                                firstStyles?.[0]?.firstAnim
                                            }
                                            onChange={(newValue) =>
                                                saveFirstStyle({
                                                    firstAnim: newValue,
                                                })
                                            }
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Stroke",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            checked={
                                                firstStyles?.[0]?.firstStroke
                                            }
                                            onChange={(newValue) =>
                                                saveFirstStyle({
                                                    firstStroke: newValue,
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}
                                <hr />
                                {!firstStyles?.[0]?.firstClip && (
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Text Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={
                                                firstStyles?.[0]?.firstColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                saveFirstStyle({
                                                    firstColor: newValue,
                                                })
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__(
                                                `Background Color`,
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={
                                                firstStyles?.[0]
                                                    ?.firstBackground
                                            }
                                            onColorChange={(value) =>
                                                saveFirstStyle({
                                                    firstBackground: value,
                                                })
                                            }
                                            colorDefault={""}
                                        />
                                    </Fragment>
                                )}

                                {firstStyles?.[0]?.firstClip && (
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__(
                                                "First Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={
                                                firstStyles?.[0]?.firstColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                saveFirstStyle({
                                                    firstColor: newValue,
                                                })
                                            }
                                        />

                                        <AdvancedPopColorControl
                                            label={__(
                                                "Second Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={
                                                firstStyles?.[0]?.firstClipColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                saveFirstStyle({
                                                    firstClipColor: newValue,
                                                })
                                            }
                                        />
                                        <hr />
                                    </Fragment>
                                )}
                                <PremiumShadow
                                    label={__(
                                        "Text Shadow",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    boxShadow={false}
                                    value={firstShadow}
                                    onChange={(value) =>
                                        setAttributes({ firstShadow: value })
                                    }
                                />
                                <hr />
                                <PremiumBorder
                                    label={__("Border")}
                                    value={firstBorder}
                                    borderType={firstBorder.borderType}
                                    borderColor={firstBorder.borderColor}
                                    borderWidth={firstBorder.borderWidth}
                                    borderRadius={firstBorder.borderRadius}
                                    onChange={(value) =>
                                        setAttributes({ firstBorder: value })
                                    }
                                />
                                <hr />
                                <SpacingComponent
                                    value={firstMargin}
                                    responsive={true}
                                    showUnits={true}
                                    label={__("Margin")}
                                    onChange={(value) =>
                                        setAttributes({ firstMargin: value })
                                    }
                                />
                                <SpacingComponent
                                    value={firstPadding}
                                    responsive={true}
                                    showUnits={true}
                                    label={__("Padding")}
                                    onChange={(value) =>
                                        setAttributes({ firstPadding: value })
                                    }
                                />
                            </PanelBody>
                            <PanelBody
                                title={__(
                                    "Second Heading",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
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
                                    value={secondTypography}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            secondTypography: newValue,
                                        })
                                    }
                                />
                                <hr />
                                <ToggleControl
                                    label={__(
                                        "Clipped",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    checked={secondStyles?.[0]?.secondClip}
                                    onChange={(newValue) =>
                                        saveSecondStyle({
                                            secondClip: newValue,
                                        })
                                    }
                                />
                                {secondStyles?.[0]?.secondClip && (
                                    <Fragment>
                                        <ToggleControl
                                            label={__(
                                                "Animated",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            checked={
                                                secondStyles?.[0]?.secondAnim
                                            }
                                            onChange={(newValue) =>
                                                saveSecondStyle({
                                                    secondAnim: newValue,
                                                })
                                            }
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Stroke",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            checked={
                                                secondStyles?.[0]?.secondStroke
                                            }
                                            onChange={(newValue) =>
                                                saveSecondStyle({
                                                    secondStroke: newValue,
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}
                                <hr />
                                {!secondStyles?.[0]?.secondClip && (
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Text Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={
                                                secondStyles?.[0]?.secondColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                saveSecondStyle({
                                                    secondColor:
                                                        newValue ||
                                                        "transparent",
                                                })
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__(
                                                `Background Color`,
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={
                                                secondStyles?.[0]
                                                    ?.secondBackground
                                            }
                                            colorDefault={""}
                                            onColorChange={(value) =>
                                                saveSecondStyle({
                                                    secondBackground: value,
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}
                                {secondStyles?.[0]?.secondClip && (
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__(
                                                "First Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={
                                                secondStyles?.[0]?.secondColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                saveSecondStyle({
                                                    secondColor:
                                                        newValue ||
                                                        "transparent",
                                                })
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Second Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={
                                                secondStyles?.[0]
                                                    ?.secondClipColor
                                            }
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                saveSecondStyle({
                                                    secondClipColor:
                                                        newValue ||
                                                        "transparent",
                                                })
                                            }
                                        />
                                        <hr />
                                    </Fragment>
                                )}
                                <PremiumShadow
                                    label={__(
                                        "Text Shadow",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    boxShadow={false}
                                    value={secondShadow}
                                    onChange={(value) =>
                                        setAttributes({ secondShadow: value })
                                    }
                                />
                                <hr />
                                <PremiumBorder
                                    label={__("Border")}
                                    value={secondBorder}
                                    borderType={secondBorder.borderType}
                                    borderColor={secondBorder.borderColor}
                                    borderWidth={secondBorder.borderWidth}
                                    borderRadius={secondBorder.borderRadius}
                                    onChange={(value) =>
                                        setAttributes({ secondBorder: value })
                                    }
                                />
                                <hr />
                                <SpacingComponent
                                    value={secondMargin}
                                    responsive={true}
                                    showUnits={true}
                                    label={__("Margin")}
                                    onChange={(value) =>
                                        setAttributes({ secondMargin: value })
                                    }
                                />
                                <SpacingComponent
                                    value={secondPadding}
                                    responsive={true}
                                    showUnits={true}
                                    label={__("Padding")}
                                    onChange={(value) =>
                                        setAttributes({ secondPadding: value })
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
            ),

            <div
                className={classnames(
                    className,
                    "premium-dheading-block__container",
                    `${blockId}`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                )}
                style={{
                    textAlign: align[this.props.deviceType],
                    ...gradientBackground(background),
                    ...borderCss(containerBorder, this.props.deviceType),
                }}
            >
                <div className={`premium-dheading-block__wrap`}>
                    <h2 className={`premium-dheading-block__title`}>
                        <RichText
                            className={`premium-dheading-block__first${firstStyles?.[0]?.firstClip
                                ? ` premium-headingc-${firstStyles?.[0]?.firstClip}`
                                : ""
                                }${firstStyles?.[0]?.firstAnim
                                    ? ` premium-headinga-${firstStyles?.[0]?.firstAnim}`
                                    : ""
                                }${firstStyles?.[0]?.firstStroke
                                    ? ` premium-headings-${firstStyles?.[0]?.firstStroke}`
                                    : ""
                                }`}
                            value={firstHeading}
                            onChange={(value) =>
                                setAttributes({ firstHeading: value })
                            }
                            style={{
                                display: display,
                                color: firstStyles?.[0]?.firstColor,
                                backgroundColor: firstStyles?.[0]?.firstClip
                                    ? "none"
                                    : firstStyles?.[0]?.firstBackground,
                                backgroundImage: firstStyles?.[0]?.firstClip
                                    ? `linear-gradient(to left, ${firstStyles?.[0]?.firstColor}, ${firstStyles?.[0]?.firstClipColor})`
                                    : "none",
                                textShadow: `${firstShadow?.horizontal}px ${firstShadow?.vertical}px ${firstShadow?.blur}px ${firstShadow?.color}`,
                                ...typographyCss(
                                    firstTypography,
                                    this.props.deviceType
                                ),
                                ...marginCss(
                                    firstMargin,
                                    this.props.deviceType
                                ),
                                ...paddingCss(
                                    firstPadding,
                                    this.props.deviceType
                                ),
                                ...borderCss(
                                    firstBorder,
                                    this.props.deviceType
                                ),
                            }}
                            tagName="span"
                        />
                        <RichText
                            className={`premium-dheading-block__second${secondStyles?.[0]?.secondClip
                                ? `${` premium-headingc-${secondStyles?.[0]?.secondClip}`}`
                                : ""
                                }${secondStyles?.[0]?.secondAnim
                                    ? ` ${`premium-headinga-${secondStyles?.[0]?.secondAnim} `}`
                                    : ""
                                }${secondStyles?.[0]?.secondStroke
                                    ? ` premium-headings-${secondStyles?.[0]?.secondStroke}`
                                    : ""
                                }`}
                            value={secondHeading}
                            onChange={(value) =>
                                setAttributes({ secondHeading: value })
                            }
                            style={{
                                display: display,
                                color: secondStyles?.[0]?.secondColor,
                                backgroundColor: secondStyles?.[0]?.secondClip
                                    ? "none"
                                    : secondStyles?.[0]?.secondBackground,
                                backgroundImage: secondStyles?.[0]?.secondClip
                                    ? `linear-gradient(to left, ${secondStyles?.[0]?.secondColor}, ${secondStyles?.[0]?.secondClipColor})`
                                    : "none",
                                textShadow: `${secondShadow?.horizontal}px ${secondShadow?.vertical}px ${secondShadow?.blur}px ${secondShadow?.color}`,
                                ...typographyCss(
                                    secondTypography,
                                    this.props.deviceType
                                ),
                                ...marginCss(
                                    secondMargin,
                                    this.props.deviceType
                                ),
                                ...paddingCss(
                                    secondPadding,
                                    this.props.deviceType
                                ),
                                ...borderCss(
                                    secondBorder,
                                    this.props.deviceType
                                ),
                            }}
                            tagName="span"
                        />
                    </h2>
                </div>
                {link && isSelected && (
                    <URLInput
                        value={headingURL}
                        onChange={(newUrl) =>
                            setAttributes({ headingURL: newUrl })
                        }
                    />
                )}
                {loadFirstGoogleFonts}
                {loadSecondGoogleFonts}
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
