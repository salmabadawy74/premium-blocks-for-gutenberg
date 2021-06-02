import classnames from "classnames";
import { FontAwesomeEnabled, icon } from "../../../assets/js/settings";
import PremiumTypo from "../../components/premium-typo";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumBorder from "../../components/premium-border";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumBackground from "../../components/premium-background";
import PremiumSizeUnits from "../../components/premium-size-units";
import FONTS from "../../components/premium-fonts";
import PremiumMediaUpload from "../../components/premium-media-upload";
import styling from './styling';
import hexToRgba from "hex-to-rgba";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import PremiumRangeResponsive from "../../components/premium-range-responsive";
import PremiumResponsiveMargin from '../../components/Premium-Responsive-Margin';
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import Lottie from 'react-lottie-with-segments';
import VanillaTilt from 'vanilla-tilt';


const { __ } = wp.i18n;

const {
    PanelBody,
    Toolbar,
    RangeControl,
    SelectControl,
    ToggleControl,
    TabPanel,
    Button,
    TextControl
} = wp.components;

const { Fragment, Component } = wp.element;

const {
    BlockControls,
    InspectorControls,
    RichText,
    ColorPalette,
    AlignmentToolbar,
    URLInput,
} = wp.blockEditor;

class edit extends Component {
    constructor() {
        super(...arguments);
        this.tilt = React.createRef();
    }

    componentDidMount() {
        const { setAttributes, clientId } = this.props;

        setAttributes({ block_id: clientId })

        setAttributes({ classMigrate: true });

        // Pushing Style tag for this block css.
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "premium-style-iconBox-" + clientId
        );
        document.head.appendChild($style);

    }
    componentDidUpdate() {
        VanillaTilt.init(
            this.tilt, {
            settings: {
                reverse: this.props.attributes.reverse
            },
            callbacks: {
                onMouseLeave: function (el) {
                    el.style.boxShadow = "0 45px 100px rgba(255, 255, 255, 0)";
                },
                onDeviceMove: function (el) {
                    el.style.boxShadow = "0 45px 100px rgba(255, 255, 255, 0.3)";
                }
            }
        }
        );
    }


    render() {

        const { isSelected, setAttributes, className, clientId: blockId, attributes } = this.props;

        const {
            block_id,
            borderIconBox,
            btnBorderIconBox,
            align,
            iconChecked,
            iconImage,
            iconImgId,
            iconImgUrl,
            iconType,
            selectedIcon,
            hoverEffect,
            iconPos,
            iconHPos,
            iconVPos,
            iconSize,
            iconRadius,
            iconColor,
            iconColorH,
            iconBackColor,
            iconBackColorH,
            iconOpacity,
            iconOpacityH,
            titleChecked,
            titleText,
            titleTag,
            titleColor,
            titleColorH,
            titleFont,
            titleSizeUnit,
            titleSize,
            titleSizeTablet,
            titleSizeMobile,
            titleLine,
            titleLetter,
            titleStyle,
            titleUpper,
            titleWeight,
            titleShadowBlur,
            titleShadowColor,
            titleShadowHorizontal,
            titleShadowVertical,
            titleMarginT,
            titleMarginB,
            descChecked,
            descText,
            descColor,
            descFont,
            descSizeUnit,
            descSize,
            descSizeTablet,
            descSizeMobile,
            descLine,
            descWeight,
            btnChecked,
            btnEffect,
            effectDir,
            btnTarget,
            btnText,
            btnLink,
            btnSizeUnit,
            btnSize,
            btnSizeTablet,
            btnSizeMobile,
            btnUpper,
            btnWeight,
            btnLetter,
            btnColor,
            btnStyle,
            btnHoverColor,
            btnBack,
            btnOpacity,
            btnHoverBack,
            btnHoverBorder,
            btnBorderColor,
            btnBorderWidth,
            btnBorderTop,
            btnBorderRight,
            btnBorderBottom,
            btnBorderLeft,
            btnBorderRadius,
            btnBorderType,
            btnPadding,
            btnPaddingU,
            btnMarginT,
            btnMarginB,
            btnShadowBlur,
            btnShadowColor,
            btnShadowHorizontal,
            btnShadowVertical,
            btnShadowPosition,
            imageID,
            imageURL,
            fixed,
            backColor,
            backOpacity,
            backgroundRepeat,
            backgroundPosition,
            backgroundSize,
            borderType,
            borderWidth,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
            borderRadius,
            borderColor,
            marginT,
            marginR,
            marginB,
            marginL,
            paddingT,
            paddingR,
            paddingB,
            paddingL,
            paddingU,
            shadowBlur,
            shadowColor,
            shadowHorizontal,
            shadowVertical,
            shadowPosition,
            hoverShadowBlur,
            hoverShadowColor,
            hoverShadowHorizontal,
            hoverShadowVertical,
            hoverShadowPosition,
            hideDesktop,
            hideTablet,
            hideMobile,
            mouseTilt,
            reverse,
            lottieURL,
            loopLottie,
            reverseLottie,
            titleLabel,
            descAlign,
            wholeLink,
            btnTxt,
            showBackIcon,
            keepBtn,
            btnPosition,
            showIcon,
            btnIcon,
            target,
            iconPosition,
            btnVerPos,
            btnIconU,
            btnIconSize,
            iconSpace,
            hOffsetUnit,
            hOffset,
            hOffsetTablet,
            hOffsetMobile,
            vOffsetUnit,
            vOffset,
            vOffsetTablet,
            vOffsetMobile,
            iconBackOpacity,
            iconBackOpacityTablet,
            iconBackOpacityMobile,
            iconRotate,
            iconRotateMobile,
            iconRotateTablet,
            iconborderType,
            iconborderTypeH,
            iconborderTop,
            iconborderTopH,
            iconborderRight,
            iconborderRightH,
            iconborderBottom,
            iconborderBottomH,
            iconborderLeft,
            iconborderLeftH,
            iconborderColor,
            iconborderColorH,
            iconborderRadius,
            iconborderRadiusH,
            iconShadowColor,
            iconShadowColorH,
            iconShadowBlur,
            iconShadowBlurH,
            iconShadowHorizontal,
            iconShadowHorizontalH,
            iconShadowVertical,
            iconShadowVerticalH,
            iconShadowPosition,
            iconShadowPositionH,
            iconMarginType,
            iconMarginTypeH,
            iconMarginTop,
            iconMarginTopH,
            iconMarginTopTablet,
            iconMarginTopTabletH,
            iconMarginTopMobile,
            iconMarginTopMobileH,
            iconMarginRight,
            iconMarginRightH,
            iconMarginRightTablet,
            iconMarginRightTabletH,
            iconMarginRightMobile,
            iconMarginRightMobileH,
            iconMarginBottom,
            iconMarginBottomH,
            iconMarginBottomTablet,
            iconMarginBottomTabletH,
            iconMarginBottomMobile,
            iconMarginBottomMobileH,
            iconMarginLeft,
            iconMarginLeftH,
            iconMarginLeftTablet,
            iconMarginLeftTabletH,
            iconMarginLeftMobile,
            iconMarginLeftMobileH,
            iconPaddingType,
            iconPaddingTypeH,
            iconPaddingTop,
            iconPaddingTopH,
            iconPaddingTopTablet,
            iconPaddingTopTabletH,
            iconPaddingTopMobile,
            iconPaddingTopMobileH,
            iconPaddingRight,
            iconPaddingRightH,
            iconPaddingRightTablet,
            iconPaddingRightTabletH,
            iconPaddingRightMobile,
            iconPaddingRightMobileH,
            iconPaddingBottom,
            iconPaddingBottomH,
            iconPaddingBottomTablet,
            iconPaddingBottomTabletH,
            iconPaddingBottomMobile,
            iconPaddingBottomMobileH,
            iconPaddingLeft,
            iconPaddingLeftH,
            iconPaddingLeftTablet,
            iconPaddingLeftTabletH,
            iconPaddingLeftMobile,
            iconPaddingLeftMobileH,
            titleBack,
            titleOpacity,
            titleBorderType,
            titleBorderWidth,
            titleBorderTop,
            titleBorderRight,
            titleBorderBottom,
            titleBorderLeft,
            titleBorderColor,
            titleBorderRadius,
            titleMarginType,
            titleMarginTop,
            titleMarginRight,
            titleMarginBottom,
            titleMarginLeft,
            titleMarginTopTablet,
            titleMarginRightTablet,
            titleMarginBottomTablet,
            titleMarginLeftTablet,
            titleMarginTopMobile,
            titleMarginRightMobile,
            titleMarginBottomMobile,
            titleMarginLeftMobile,
            titlePaddingTop,
            titlePaddingRight,
            titlePaddingBottom,
            titlePaddingLeft,
            titlePaddingTopTablet,
            titlePaddingRightTablet,
            titlePaddingBottomTablet,
            titlePaddingLeftTablet,
            titlePaddingTopMobile,
            titlePaddingRightMobile,
            titlePaddingBottomMobile,
            titlePaddingLeftMobile,
            titlePaddingType,
            labelColor,
            labelSizeUnit,
            labelSize,
            labelSizeMobile,
            labelSizeTablet,
            labelWeight,
            labelStyle,
            labelLetter,
            labelLine,
            labelUpper,
            labelMarginType,
            labelMarginTop,
            labelMarginRight,
            labelMarginBottom,
            labelMarginLeft,
            labelMarginTopTablet,
            labelMarginRightTablet,
            labelMarginBottomTablet,
            labelMarginLeftTablet,
            labelMarginTopMobile,
            labelMarginRightMobile,
            labelMarginBottomMobile,
            labelMarginLeftMobile,
            descColorH,
            descShadowColor,
            descShadowBlur,
            descShadowHorizontal,
            descShadowVertical,
            descBackColor,
            descOpacity,
            descborderType,
            descborderWidth,
            descborderTop,
            descborderRight,
            descborderBottom,
            descborderLeft,
            descborderColor,
            descborderRadius,
            descMarginType,
            descMarginTop,
            descMarginRight,
            descMarginBottom,
            descMarginLeft,
            descMarginTopTablet,
            descMarginRightTablet,
            descMarginBottomTablet,
            descMarginLeftTablet,
            descMarginTopMobile,
            descMarginRightMobile,
            descMarginBottomMobile,
            descMarginLeftMobile,
            descPaddingTop,
            descPaddingRight,
            descPaddingBottom,
            descPaddingLeft,
            descPaddingTopTablet,
            descPaddingRightTablet,
            descPaddingBottomTablet,
            descPaddingLeftTablet,
            descPaddingTopMobile,
            descPaddingRightMobile,
            descPaddingBottomMobile,
            descPaddingLeftMobile,
            descPaddingType,
            btnMarginType,
            btnMarginTop,
            btnMarginRight,
            btnMarginBottom,
            btnMarginLeft,
            btnMarginTopTablet,
            btnMarginRightTablet,
            btnMarginBottomTablet,
            btnMarginLeftTablet,
            btnMarginTopMobile,
            btnMarginRightMobile,
            btnMarginBottomMobile,
            btnMarginLeftMobile,
            btnPaddingTop,
            btnPaddingRight,
            btnPaddingBottom,
            btnPaddingLeft,
            btnPaddingTopTablet,
            btnPaddingRightTablet,
            btnPaddingBottomTablet,
            btnPaddingLeftTablet,
            btnPaddingTopMobile,
            btnPaddingRightMobile,
            btnPaddingBottomMobile,
            btnPaddingLeftMobile,
            btnPaddingType,
            btnColorH,
            btnShadowColorH,
            btnShadowBlurH,
            btnShadowHorizontalH,
            btnShadowVerticalH,
            btnBackH,
            btnOpacityH,
            btnBorderTypeH,
            btnBorderWidthH,
            btnBorderTopH,
            btnBorderRightH,
            btnBorderBottomH,
            btnBorderLeftH,
            btnBorderColorH,
            btnBorderRadiusH,
            btnMarginTypeH,
            btnMarginTopH,
            btnMarginRightH,
            btnMarginBottomH,
            btnMarginLeftH,
            btnMarginTopTabletH,
            btnMarginRightTabletH,
            btnMarginBottomTabletH,
            btnMarginLeftTabletH,
            btnMarginTopMobileH,
            btnMarginRightMobileH,
            btnMarginBottomMobileH,
            btnMarginLeftMobileH,
            btnPaddingTopH,
            btnPaddingRightH,
            btnPaddingBottomH,
            btnPaddingLeftH,
            btnPaddingTopTabletH,
            btnPaddingRightTabletH,
            btnPaddingBottomTabletH,
            btnPaddingLeftTabletH,
            btnPaddingTopMobileH,
            btnPaddingRightMobileH,
            btnPaddingBottomMobileH,
            btnPaddingLeftMobileH,
            btnPaddingTypeH,
            innerBack,
            innerOpacity,
            marginTTablet,
            marginRTablet,
            marginBTablet,
            marginLTablet,
            marginTMobile,
            marginRMobile,
            marginBMobile,
            marginLMobile,
            paddingTTablet,
            paddingRTablet,
            paddingBTablet,
            paddingLTablet,
            paddingTMobile,
            paddingRMobile,
            paddingBMobile,
            paddingLMobile,
            innerBackH,
            innerOpacityH,
            imageIDH,
            imageURLH,
            backgroundPositionH,
            backgroundRepeatH,
            backgroundSizeH,
            fixedH,
            borderTypeH,
            borderTopH,
            borderRightH,
            borderBottomH,
            borderLeftH,
            borderColorH,
            borderRadiusH,
            marginTH,
            marginRH,
            marginBH,
            marginLH,
            marginTTabletH,
            marginRTabletH,
            marginBTabletH,
            marginLTabletH,
            marginTMobileH,
            marginRMobileH,
            marginBMobileH,
            marginLMobileH,
            paddingTH,
            paddingRH,
            paddingBH,
            paddingLH,
            paddingTTabletH,
            paddingRTabletH,
            paddingBTabletH,
            paddingLTabletH,
            paddingTMobileH,
            paddingRMobileH,
            paddingBMobileH,
            paddingLMobileH,
            paddingUH,
            outerBack,
            outerOpacity,
            outerImageID,
            outerImageURL,
            outerBackgroundPosition,
            outerBackgroundRepeat,
            outerBackgroundSize,
            outerFixed,
            outerBorderType,
            outerBorderTop,
            outerBorderRight,
            outerBorderBottom,
            outerBorderLeft,
            outerBorderColor,
            outerBorderRadius,
            outershadowColor,
            outershadowBlur,
            outershadowHorizontal,
            outershadowVertical,
            outershadowPosition,
            outerShadowColorH,
            outerShadowBlurH,
            outerShadowHorizontalH,
            outerShadowVerticalH,
            outerShadowPositionH,
            outerMarginT,
            outerMarginR,
            outerMarginB,
            outerMarginL,
            outerMarginTTablet,
            outerMarginRTablet,
            outerMarginBTablet,
            outerMarginLTablet,
            outerMarginTMobile,
            outerMarginRMobile,
            outerMarginBMobile,
            outerMarginLMobile,
            outerPaddingT,
            outerPaddingR,
            outerPaddingB,
            outerPaddingL,
            outerPaddingTTablet,
            outerPaddingRTablet,
            outerPaddingBTablet,
            outerPaddingLTablet,
            outerPaddingTMobile,
            outerPaddingRMobile,
            outerPaddingBMobile,
            outerPaddingLMobile,
            outerPaddingU,
            outerBackH,
            outerOpacityH,
            outerImageIDH,
            outerImageURLH,
            outerBackgroundPositionH,
            outerBackgroundRepeatH,
            outerBackgroundSizeH,
            outerFixedH,
            outerBorderTypeH,
            outerBorderTopH,
            outerBorderRightH,
            outerBorderBottomH,
            outerBorderLeftH,
            outerBorderColorH,
            outerBorderRadiusH,
            outerMarginTH,
            outerMarginRH,
            outerMarginBH,
            outerMarginLH,
            outerMarginTTabletH,
            outerMarginRTabletH,
            outerMarginBTabletH,
            outerMarginLTabletH,
            outerMarginTMobileH,
            outerMarginRMobileH,
            outerMarginBMobileH,
            outerMarginLMobileH,
            outerPaddingTH,
            outerPaddingRH,
            outerPaddingBH,
            outerPaddingLH,
            outerPaddingTTabletH,
            outerPaddingRTabletH,
            outerPaddingBTabletH,
            outerPaddingLTabletH,
            outerPaddingTMobileH,
            outerPaddingRMobileH,
            outerPaddingBMobileH,
            outerPaddingLMobileH,
            outerPaddingUH,
        } = attributes;

        const imgIcon = [
            {
                label: __("Icon"),
                value: "icon"
            },
            {
                label: __("Image"),
                value: "image"
            },
            {
                label: __('Lottie Animation'),
                value: 'animation'
            }

        ];

        const ALIGNS = ["left", "center", "right"];

        const EFFECTS = [
            {
                value: "none",
                label: __("None")
            },
            {
                value: "pulse",
                label: __("Pulse")
            },
            {
                value: "rotate",
                label: __("Rotate")
            },
            {
                value: "drotate",
                label: __("3D Rotate")
            },
            {
                value: "buzz",
                label: __("Buzz")
            },
            {
                value: "drop",
                label: __("Drop Shadow")
            },
            {
                value: "wobble",
                label: __("Wobble")
            }
        ];

        const BTN_EFFECTS = [
            {
                value: "none",
                label: __("None")
            },
            {
                value: "slide",
                label: __("Slide")
            }
        ];

        const DIRECTION = [
            {
                value: "top",
                label: __("Top to Bottom")
            },
            {
                value: "bottom",
                label: __("Bottom to Top")
            },
            {
                value: "left",
                label: __("Left to Right")
            },
            {
                value: "right",
                label: __("Right to Left")
            }
        ];

        const ICON_POS = [
            {
                label: __("Top"),
                value: "top"
            },
            {
                label: __("Right"),
                value: "right"
            },
            {
                label: __("Left"),
                value: "left"
            }
        ];

        const ICON_HPOS = [
            {
                label: __("Top"),
                value: "top"
            },
            {
                label: __("Middle"),
                value: "middle"
            },
            {
                label: __("Bottom"),
                value: "bottom"
            }
        ];



        const addFontToHead = fontFamily => {
            const head = document.head;
            const link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href =
                "https://fonts.googleapis.com/css?family=" +
                fontFamily.replace(/\s+/g, "+") +
                ":" +
                "regular";
            head.appendChild(link);
        };

        const onChangeTitleFamily = fontFamily => {
            setAttributes({ titleFont: fontFamily });
            if (!fontFamily) {
                return;
            }

            addFontToHead(fontFamily);
        };

        const onChangeDescFamily = fontFamily => {
            setAttributes({ descFont: fontFamily });
            if (!fontFamily) {
                return;
            }

            addFontToHead(fontFamily);
        };

        let element = document.getElementById(
            "premium-style-iconBox-" + blockId
        );

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props);
        }

        const flexClass = btnPosition !== "bottom" ? "premium-icon-box__btn_flex" : ""

        const reverseAnime = reverseLottie ? -1 : 1;

        const mainClasses = classnames(className, "premium-icon-box");


        return [
            isSelected && (
                <BlockControls key="controls">
                    <AlignmentToolbar
                        value={align}
                        onChange={newAlign => setAttributes({ align: newAlign })}
                    />
                </BlockControls>
            ),
            isSelected && (
                <InspectorControls key={"inspector"}>

                    <PanelBody
                        title={__("Display Options")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Icon")}
                            checked={iconChecked}
                            onChange={newValue => setAttributes({ iconChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Title")}
                            checked={titleChecked}
                            onChange={newValue => setAttributes({ titleChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Description")}
                            checked={descChecked}
                            onChange={newValue => setAttributes({ descChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Button")}
                            checked={btnChecked}
                            onChange={newValue => setAttributes({ btnChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Back Icon")}
                            checked={showBackIcon}
                            onChange={(value) => setAttributes({ showBackIcon: value })}
                        />
                        <ToggleControl
                            label={__("Enable Mouse Tilt")}
                            checked={mouseTilt}
                            onChange={newValue => setAttributes({ mouseTilt: newValue })}
                        />
                        {mouseTilt && <ToggleControl
                            label={__("Reverse")}
                            checked={reverse}
                            onChange={newValue => setAttributes({ reverse: newValue })}
                        />}
                    </PanelBody>
                    {iconChecked && (
                        <PanelBody
                            title={__("Icon")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <h2> {__("Icon Position")}</h2>
                            <Button
                                key={"left"}
                                icon="editor-alignleft"
                                label="Left"
                                onClick={() => setAttributes({ iconPos: "left" })}
                                aria-pressed={"left" === iconPos}
                                isPrimary={"left" === iconPos}
                            />
                            <Button
                                key={"top"}
                                icon="editor-aligncenter"
                                label="Top"
                                onClick={() =>
                                    setAttributes({ iconPos: "top" })
                                }
                                aria-pressed={"top" === iconPos}
                                isPrimary={"top" === iconPos}
                            />
                            <Button
                                key={"right"}
                                icon="editor-alignright"
                                label="Right"
                                onClick={() => setAttributes({ iconPos: "right" })}
                                aria-pressed={"right" === iconPos}
                                isPrimary={"right" === iconPos}
                            />
                            <Fragment>
                                <SelectControl
                                    label={__("Vertical Position")}
                                    options={ICON_HPOS}
                                    value={iconHPos}
                                    onChange={newValue => setAttributes({ iconHPos: newValue })}
                                />
                            </Fragment>

                            <SelectControl
                                label={__("Icon Type")}
                                options={imgIcon}
                                value={iconImage}
                                onChange={newType => setAttributes({ iconImage: newType })}
                            />
                            {"icon" === iconImage && (
                                <Fragment>
                                    <p className="premium-editor-paragraph">{__("Select Icon")}</p>
                                    <FontIconPicker
                                        icons={iconsList}
                                        onChange={newIcon => setAttributes({ selectedIcon: newIcon })}
                                        value={selectedIcon}
                                        isMulti={false}
                                        appendTo="body"
                                        noSelectedPlaceholder={__("Select Icon")}
                                    />
                                </Fragment>
                            )}
                            {"image" === iconImage && (
                                <Fragment>
                                    <PremiumMediaUpload
                                        type="image"
                                        imageID={iconImgId}
                                        imageURL={iconImgUrl}
                                        onSelectMedia={media => {
                                            setAttributes({
                                                iconImgId: media.id,
                                                iconImgUrl: media.url
                                            });
                                        }}
                                        onRemoveImage={() =>
                                            setAttributes({
                                                iconImgUrl: "",
                                                iconImgId: ""
                                            })
                                        }
                                    />

                                </Fragment>
                            )}
                            {'animation' === iconImage && (
                                <Fragment>
                                    <TextControl
                                        label={__("URL")}
                                        value={lottieURL}
                                        onChange={(newURL) => setAttributes({ lottieURL: newURL })}
                                    />
                                    <ToggleControl
                                        label={__("Loop")}
                                        checked={loopLottie}
                                        onChange={newValue => setAttributes({ loopLottie: newValue })}
                                        help={loopLottie ? __('This option works only on the preview page') : ''}
                                    />
                                    <ToggleControl
                                        label={__("Reverse")}
                                        checked={reverseLottie}
                                        onChange={newValue => setAttributes({ reverseLottie: newValue })}
                                    />
                                </Fragment>
                            )}
                            <SelectControl
                                label={__("Hover Effect")}
                                options={EFFECTS}
                                value={hoverEffect}
                                onChange={newEffect => setAttributes({ hoverEffect: newEffect })}
                            />
                            <RangeControl
                                label={__("Size (PX)")}
                                value={iconSize}
                                min="1"
                                max="200"
                                onChange={newValue => setAttributes({ iconSize: newValue || 30 })}
                            />
                        </PanelBody>
                    )}
                    {titleChecked && (
                        <PanelBody
                            title={__("Title")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <p>{__("Title")}</p>
                            <Toolbar
                                controls={"123456".split("").map(tag => ({
                                    icon: "heading",
                                    isActive: "H" + tag === titleTag,
                                    onClick: () => setAttributes({ titleTag: "H" + tag }),
                                    subscript: tag
                                }))}
                            />

                            <SelectControl
                                label={__("Font Family")}
                                value={titleFont}
                                options={FONTS}
                                onChange={onChangeTitleFamily}
                            />

                            <TextControl
                                label={__("Label")}
                                value={titleLabel}
                                onChange={(value) => setAttributes({ titleLabel: value })}
                            />
                        </PanelBody>
                    )}
                    {descChecked && (
                        <PanelBody
                            title={__("Description")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Font Family")}
                                value={descFont}
                                options={FONTS}
                                onChange={onChangeDescFamily}
                            />
                            <h2> {__("Alignment")}</h2>
                            <Button
                                key={"left"}
                                icon="editor-alignleft"
                                label="Left"
                                onClick={() => setAttributes({ align: "left" })}
                                aria-pressed={"left" === align}
                                isPrimary={"left" === align}
                            />
                            <Button
                                key={"center"}
                                icon="editor-aligncenter"
                                label="Right"
                                onClick={() =>
                                    setAttributes({ align: "center" })
                                }
                                aria-pressed={"center" === align}
                                isPrimary={"center" === align}
                            />
                            <Button
                                key={"right"}
                                icon="editor-alignright"
                                label="Right"
                                onClick={() => setAttributes({ align: "right" })}
                                aria-pressed={"right" === align}
                                isPrimary={"right" === align}
                            />
                        </PanelBody>
                    )}

                    {btnChecked && (
                        <PanelBody
                            title={__("Button")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__("Whole Box Link")}
                                checked={wholeLink}
                                onChange={newValue => setAttributes({ wholeLink: newValue })}
                            />
                            <ToggleControl
                                label={__("Text")}
                                checked={btnTxt}
                                onChange={newValue => setAttributes({ btnTxt: newValue })}
                            />
                            {btnTxt && <Fragment>

                            </Fragment>}
                            <SelectControl
                                label={__('Position')}
                                options={[{
                                    label: __('Left'),
                                    value: 'left'
                                }, {
                                    label: __('Right'),
                                    value: 'right'
                                }, {
                                    label: __('Bottom'),
                                    value: 'bottom'
                                }]}
                                value={btnPosition}
                                onChange={(newValue) => setAttributes({ btnPosition: newValue })}

                            />
                            {"bottom" !== btnPosition && <SelectControl
                                label={__('Vertical Position')}
                                value={btnVerPos}
                                options={[
                                    { label: __('Top'), value: "top" },
                                    { label: __('Middle'), value: "middle" },
                                    { label: __('Bottom'), value: "bottom" }]}
                                onChange={(value) => setAttributes({ btnVerPos: value })}
                            />}
                            <ToggleControl
                                label={__('Icon')}
                                checked={showIcon}
                                onChange={(value) => setAttributes({ showIcon: value })}
                            />
                            {showIcon && <Fragment>
                                <p className="premium-editor-paragraph">{__("Select Icon")}</p>
                                <FontIconPicker
                                    icons={iconsList}
                                    onChange={newIcon => setAttributes({ btnIcon: newIcon })}
                                    value={btnIcon}
                                    isMulti={false}
                                    appendTo="body"
                                    noSelectedPlaceholder={__("Select Icon")}
                                />
                                <SelectControl
                                    label={__("Position")}
                                    options={[
                                        {
                                            label: __('Before'),
                                            value: 'before'
                                        },
                                        {
                                            label: __("After"),
                                            value: "after"
                                        }
                                    ]}
                                    value={iconPosition}
                                    onChange={(value) => setAttributes({ iconPosition: value })}
                                />
                                <PremiumSizeUnits
                                    units={["px", "em"]}
                                    onChangeSizeUnit={newValue =>
                                        setAttributes({ btnIconU: newValue })
                                    }
                                />
                                <RangeControl
                                    label={__("Size")}
                                    value={btnIconSize}
                                    onChange={(value) => setAttributes({ btnIconSize: value })}
                                />
                                {btnTxt && <RangeControl
                                    label={__('Icon Spacing')}
                                    value={iconSpace}
                                    onChange={(value) => setAttributes({ iconSpace: value })}
                                />}
                            </Fragment>}
                            <TextControl
                                label={__(`Link`)}
                                value={btnLink}
                                onChange={(newValue) => setAttributes({ btnLink: newValue })}
                            />
                            <ToggleControl
                                label={__("Open in new Tab")}
                                checked={target}
                                onChange={(value) => setAttributes({ target: value })}
                            />
                            <SelectControl
                                options={BTN_EFFECTS}
                                label={__("Hover Effect")}
                                value={btnEffect}
                                onChange={newValue => setAttributes({ btnEffect: newValue })}
                            />
                            {"slide" === btnEffect && (
                                <SelectControl
                                    options={DIRECTION}
                                    label={__("Direction")}
                                    value={effectDir}
                                    onChange={newValue => setAttributes({ effectDir: newValue })}
                                />
                            )}
                        </PanelBody>
                    )}
                    {showBackIcon && <PanelBody
                        title={__("Back Icon")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumSizeUnits onChangeSizeUnit={newValue =>
                            setAttributes({ hOffsetUnit: newValue })
                        } />
                        <PremiumRangeResponsive
                            range={{ label: __('Horizontal Offset'), value: hOffset }}
                            rangeMobile={{ value: hOffsetMobile, label: __("Horizontal Offset") }}
                            rangeTablet={{ value: hOffsetTablet, label: __("Horizontal Offset") }}
                            onChangeDesktop={(value) => setAttributes({ hOffset: value })}
                            onChangeTablet={(value) => setAttributes({ hOffsetTablet: value })}
                            onChangeMobile={(value) => setAttributes({ hOffsetMobile: value })}
                            min={1}
                            max={hOffsetUnit === "%" ? 100 : 300}
                        />
                        <PremiumSizeUnits onChangeSizeUnit={newValue =>
                            setAttributes({ vOffsetUnit: newValue })
                        } />
                        <PremiumRangeResponsive
                            range={{ label: __('Vertical Offset'), value: vOffset }}
                            rangeMobile={{ value: vOffsetMobile, label: __("Vertical Offset") }}
                            rangeTablet={{ value: vOffsetTablet, label: __("Vertical Offset") }}
                            onChangeDesktop={(value) => setAttributes({ vOffset: value })}
                            onChangeTablet={(value) => setAttributes({ vOffsetTablet: value })}
                            onChangeMobile={(value) => setAttributes({ vOffsetMobile: value })}
                            min={1}
                            max={vOffsetUnit === "%" ? 100 : 300}
                        />
                        <PremiumRangeResponsive
                            range={{ value: iconBackOpacity, label: __('Opacity') }}
                            rangeMobile={{ value: iconBackOpacityMobile, label: __("Opacity") }}
                            rangeTablet={{ value: iconBackOpacityTablet, label: __("Opacity") }}
                            onChangeDesktop={(value) => setAttributes({ iconBackOpacity: value })}
                            onChangeTablet={(value) => setAttributes({ iconBackOpacityTablet: value })}
                            onChangeMobile={(value) => setAttributes({ iconBackOpacityMobile: value })}
                            min={0}
                            max={1}
                            step={.01}
                        />
                        <PremiumRangeResponsive
                            range={{ label: __('Rotate'), value: iconRotate }}
                            rangeMobile={{ value: iconRotateMobile, label: __("Rotate") }}
                            rangeTablet={{ value: iconRotateTablet, label: __("Rotate") }}
                            onChangeDesktop={(value) => setAttributes({ iconRotate: value })}
                            onChangeTablet={(value) => setAttributes({ iconRotateTablet: value })}
                            onChangeMobile={(value) => setAttributes({ iconRotateMobile: value })}
                            min={0}
                            max={180}
                        />
                    </PanelBody>}
                    {iconChecked && <PanelBody
                        title={__("Icon Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TabPanel
                            className="premium-color-tabpanel"
                            activeClass="active-tab"
                            tabs={[
                                {
                                    name: "normal",
                                    title: "Normal",
                                    className: "premium-tab",
                                },
                                {
                                    name: "hover",
                                    title: "Hover",
                                    className: "premium-tab",
                                },
                            ]}
                        >
                            {(tab) => {
                                let tabout;
                                if ("normal" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            { "icon" === iconImage ? <Fragment>
                                                <p>{__("Icon Color")}</p>
                                                <ColorPalette
                                                    value={iconColor}
                                                    onChange={newValue =>
                                                        setAttributes({
                                                            iconColor: newValue || "transparent",
                                                        })
                                                    }
                                                    allowReset={true}
                                                />
                                            </Fragment> : ""
                                            }
                                            <p>{__(" Icon Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={iconBackColor}
                                                onChangeColor={newvalue =>
                                                    setAttributes({
                                                        iconBackColor: newvalue,
                                                    })
                                                }
                                                opacityValue={iconOpacity}
                                                onChangeOpacity={value =>
                                                    setAttributes({
                                                        iconOpacity: value,
                                                    })
                                                }
                                            />
                                            <PremiumBorder
                                                borderType={iconborderType}
                                                top={iconborderTop}
                                                right={iconborderRight}
                                                bottom={iconborderBottom}
                                                left={iconborderLeft}
                                                borderColor={iconborderColor}
                                                borderRadius={iconborderRadius}
                                                onChangeType={(newType) => setAttributes({ iconborderType: newType })}
                                                onChangeWidth={({ top, right, bottom, left }) =>
                                                    setAttributes({
                                                        iconborderTop: top,
                                                        iconborderRight: right,
                                                        iconborderBottom: bottom,
                                                        iconborderLeft: left,
                                                    })
                                                }
                                                onChangeColor={(colorValue) =>
                                                    setAttributes({ iconborderColor: colorValue.hex })
                                                }
                                                onChangeRadius={(newrRadius) =>
                                                    setAttributes({ iconborderRadius: newrRadius })
                                                }
                                            />
                                            <PremiumBoxShadow
                                                inner={true}
                                                color={iconShadowColor}
                                                blur={iconShadowBlur}
                                                horizontal={iconShadowHorizontal}
                                                vertical={iconShadowVertical}
                                                position={iconShadowPosition}
                                                onChangeColor={newColor =>
                                                    setAttributes({
                                                        iconShadowColor: newColor.hex || "transparent"
                                                    })
                                                }
                                                onChangeBlur={newBlur =>
                                                    setAttributes({
                                                        iconShadowBlur: newBlur || 0
                                                    })
                                                }
                                                onChangehHorizontal={newValue =>
                                                    setAttributes({
                                                        iconShadowHorizontal: newValue || 0
                                                    })
                                                }
                                                onChangeVertical={newValue =>
                                                    setAttributes({
                                                        iconShadowVertical: newValue || 0
                                                    })
                                                }
                                                onChangePosition={newValue =>
                                                    setAttributes({
                                                        iconShadowPosition: newValue
                                                    })
                                                } />
                                            <PremiumResponsiveMargin
                                                directions={["all"]}
                                                showUnits={true}
                                                selectedUnit={iconMarginType}
                                                marginTop={iconMarginTop}
                                                marginRight={iconMarginRight}
                                                marginBottom={iconMarginBottom}
                                                marginLeft={iconMarginLeft}
                                                marginTopTablet={iconMarginTopTablet}
                                                marginRightTablet={iconMarginRightTablet}
                                                marginBottomTablet={iconMarginBottomTablet}
                                                marginLeftTablet={iconMarginLeftTablet}
                                                marginTopMobile={iconMarginTopMobile}
                                                marginRightMobile={iconMarginRightMobile}
                                                marginBottomMobile={iconMarginBottomMobile}
                                                marginLeftMobile={iconMarginLeftMobile}
                                                onChangeMarginTop={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconMarginTop: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconMarginTopTablet: newValue })
                                                        } else {
                                                            setAttributes({ iconMarginTopMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginRight={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconMarginRight: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconMarginRightTablet: newValue })
                                                        } else {
                                                            setAttributes({ iconMarginRightMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginBottom={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconMarginBottom: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconMarginBottomTablet: newValue })
                                                        } else {
                                                            setAttributes({ iconMarginBottomMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginLeft={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconMarginLeft: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconMarginLeftTablet: newValue })
                                                        } else {
                                                            setAttributes({ iconMarginLeftMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarSizeUnit={(newvalue) => setAttributes({ iconMarginType: newvalue })}
                                            />
                                            <PremiumResponsivePadding
                                                paddingTop={iconPaddingTop}
                                                paddingRight={iconPaddingRight}
                                                paddingBottom={iconPaddingBottom}
                                                paddingLeft={iconPaddingLeft}
                                                paddingTopTablet={iconPaddingTopTablet}
                                                paddingRightTablet={iconPaddingRightTablet}
                                                paddingBottomTablet={iconPaddingBottomTablet}
                                                paddingLeftTablet={iconPaddingLeftTablet}
                                                paddingTopMobile={iconPaddingTopMobile}
                                                paddingRightMobile={iconPaddingRightMobile}
                                                paddingBottomMobile={iconPaddingBottomMobile}
                                                paddingLeftMobile={iconPaddingLeftMobile}
                                                showUnits={true}
                                                selectedUnit={iconPaddingType}
                                                onChangePadSizeUnit={newvalue =>
                                                    setAttributes({ iconPaddingType: newvalue })
                                                }
                                                onChangePaddingTop={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconPaddingTop: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconPaddingTopTablet: newValue })
                                                        } else {
                                                            setAttributes({ iconPaddingTopMobile: newValue })
                                                        }

                                                    }

                                                }
                                                onChangePaddingRight={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconPaddingRight: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconPaddingRightTablet: newValue })
                                                        } else {
                                                            setAttributes({ iconPaddingRightMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangePaddingBottom={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconPaddingBottom: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconPaddingBottomTablet: newValue })
                                                        } else {
                                                            setAttributes({ iconPaddingBottomMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangePaddingLeft={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconPaddingLeft: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconPaddingLeftTablet: newValue })
                                                        } else {
                                                            setAttributes({ iconPaddingLeftMobile: newValue })
                                                        }
                                                    }
                                                }
                                            />

                                        </Fragment>
                                    )
                                }

                                if ("hover" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            {  "icon" === iconImage ? <Fragment> <p>{__("Icon Color")}</p>
                                                <ColorPalette
                                                    value={iconColorH}
                                                    onChange={newValue =>
                                                        setAttributes({
                                                            iconColorH: newValue || "transparent",
                                                        })
                                                    }
                                                    allowReset={true}
                                                /> </Fragment> : ""}
                                            <p>{__(" Icon Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={iconBackColorH}
                                                onChangeColor={newvalue =>
                                                    setAttributes({
                                                        iconBackColorH: newvalue,
                                                    })
                                                }
                                                opacityValue={iconOpacityH}
                                                onChangeOpacity={value =>
                                                    setAttributes({
                                                        iconOpacityH: value,
                                                    })
                                                }
                                            />
                                            <PremiumBorder
                                                borderType={iconborderTypeH}
                                                top={iconborderTopH}
                                                right={iconborderRightH}
                                                bottom={iconborderBottomH}
                                                left={iconborderLeftH}
                                                borderColor={iconborderColorH}
                                                borderRadius={iconborderRadiusH}
                                                onChangeType={(newType) => setAttributes({ iconborderTypeH: newType })}
                                                onChangeWidth={({ top, right, bottom, left }) =>
                                                    setAttributes({
                                                        iconborderTopH: top,
                                                        iconborderRightH: right,
                                                        iconborderBottomH: bottom,
                                                        iconborderLeftH: left,
                                                    })
                                                }
                                                onChangeColor={(colorValue) =>
                                                    setAttributes({ iconborderColorH: colorValue.hex })
                                                }
                                                onChangeRadius={(newrRadius) =>
                                                    setAttributes({ iconborderRadiusH: newrRadius })
                                                }
                                            />
                                            <PremiumBoxShadow
                                                inner={true}
                                                color={iconShadowColorH}
                                                blur={iconShadowBlurH}
                                                horizontal={iconShadowHorizontalH}
                                                vertical={iconShadowVerticalH}
                                                position={iconShadowPositionH}
                                                onChangeColor={newColor =>
                                                    setAttributes({
                                                        iconShadowColorH: newColor.hex || "transparent"
                                                    })
                                                }
                                                onChangeBlur={newBlur =>
                                                    setAttributes({
                                                        iconShadowBlurH: newBlur || 0
                                                    })
                                                }
                                                onChangehHorizontal={newValue =>
                                                    setAttributes({
                                                        iconShadowHorizontalH: newValue || 0
                                                    })
                                                }
                                                onChangeVertical={newValue =>
                                                    setAttributes({
                                                        iconShadowVerticalH: newValue || 0
                                                    })
                                                }
                                                onChangePosition={newValue =>
                                                    setAttributes({
                                                        iconShadowPositionH: newValue || 0
                                                    })
                                                } />
                                            <PremiumResponsiveMargin
                                                directions={["all"]}
                                                showUnits={true}
                                                selectedUnit={iconMarginTypeH}
                                                marginTop={iconMarginTopH}
                                                marginRight={iconMarginRightH}
                                                marginBottom={iconMarginBottomH}
                                                marginLeft={iconMarginLeftH}
                                                marginTopTablet={iconMarginTopTabletH}
                                                marginRightTablet={iconMarginRightTabletH}
                                                marginBottomTablet={iconMarginBottomTabletH}
                                                marginLeftTablet={iconMarginLeftTabletH}
                                                marginTopMobile={iconMarginTopMobileH}
                                                marginRightMobile={iconMarginRightMobileH}
                                                marginBottomMobile={iconMarginBottomMobileH}
                                                marginLeftMobile={iconMarginLeftMobileH}
                                                onChangeMarginTop={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconMarginTopH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconMarginTopTabletH: newValue })
                                                        } else {
                                                            setAttributes({ iconMarginTopMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginRight={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconMarginRightH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconMarginRightTabletH: newValue })
                                                        } else {
                                                            setAttributes({ iconMarginRightMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginBottom={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconMarginBottomH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconMarginBottomTabletH: newValue })
                                                        } else {
                                                            setAttributes({ iconMarginBottomMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginLeft={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconMarginLeftH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconMarginLeftTabletH: newValue })
                                                        } else {
                                                            setAttributes({ iconMarginLeftMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarSizeUnit={(newvalue) => setAttributes({ iconMarginTypeH: newvalue })}
                                            />
                                            <PremiumResponsivePadding
                                                paddingTop={iconPaddingTopH}
                                                paddingRight={iconPaddingRightH}
                                                paddingBottom={iconPaddingBottomH}
                                                paddingLeft={iconPaddingLeftH}
                                                paddingTopTablet={iconPaddingTopTabletH}
                                                paddingRightTablet={iconPaddingRightTabletH}
                                                paddingBottomTablet={iconPaddingBottomTabletH}
                                                paddingLeftTablet={iconPaddingLeftTabletH}
                                                paddingTopMobile={iconPaddingTopMobileH}
                                                paddingRightMobile={iconPaddingRightMobileH}
                                                paddingBottomMobile={iconPaddingBottomMobileH}
                                                paddingLeftMobile={iconPaddingLeftMobileH}
                                                showUnits={true}
                                                selectedUnit={iconPaddingTypeH}
                                                onChangePadSizeUnit={newvalue =>
                                                    setAttributes({ iconPaddingTypeH: newvalue })
                                                }
                                                onChangePaddingTop={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconPaddingTopH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconPaddingTopTabletH: newValue })
                                                        } else {
                                                            setAttributes({ iconPaddingTopMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangePaddingRight={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconPaddingRightH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconPaddingRightTabletH: newValue })
                                                        } else {
                                                            setAttributes({ iconPaddingRightMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangePaddingBottom={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconPaddingBottomH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconPaddingBottomTabletH: newValue })
                                                        } else {
                                                            setAttributes({ iconPaddingBottomMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangePaddingLeft={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ iconPaddingLeftH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ iconPaddingLeftTabletH: newValue })
                                                        } else {
                                                            setAttributes({ iconPaddingLeftMobileH: newValue })
                                                        }
                                                    }
                                                }
                                            />

                                        </Fragment>
                                    )
                                }
                                return (
                                    <div>
                                        {tabout}
                                        <hr />
                                    </div>
                                );
                            }}
                        </TabPanel>
                    </PanelBody>}
                    {titleChecked && <PanelBody
                        title={__("Title Style")}
                        className="premium-panel-body"
                        initialOpen={false}>
                        <Fragment>
                            <p>{__("Tile Color")}</p>
                            <ColorPalette
                                value={titleColor}
                                onChange={newValue =>
                                    setAttributes({
                                        titleColor: newValue || "transparent",
                                    })
                                }
                            />
                        </Fragment>
                        <Fragment>
                            <p>{__("Title  Hover Color")}</p>
                            <ColorPalette
                                value={titleColorH}
                                onChange={newValue =>
                                    setAttributes({
                                        titleColorH: newValue || "transparent",
                                    })
                                }
                            />
                        </Fragment>
                        <PremiumTypo
                            components={[
                                "responsiveSize",
                                "weight",
                                "style",
                                "upper",
                                "spacing",
                                "line"
                            ]}
                            setAttributes={setAttributes}
                            fontSizeType={{
                                value: titleSizeUnit,
                                label: __("titleSizeUnit"),
                            }}
                            fontSize={{
                                value: titleSize,
                                label: __("titleSize"),
                            }}
                            fontSizeMobile={{
                                value: titleSizeMobile,
                                label: __("titleSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: titleSizeTablet,
                                label: __("titleSizeTablet"),
                            }}
                            weight={titleWeight}
                            style={titleStyle}
                            spacing={titleLetter}
                            line={titleLine}
                            upper={titleUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ titleWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ titleStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ titleLetter: newValue })
                            }
                            onChangeLine={newValue => setAttributes({ titleLine: newValue })}
                            onChangeUpper={check => setAttributes({ titleUpper: check })}
                        />
                        <PremiumTextShadow
                            color={titleShadowColor}
                            blur={titleShadowBlur}
                            horizontal={titleShadowHorizontal}
                            vertical={titleShadowVertical}
                            onChangeColor={newColor =>
                                setAttributes({
                                    titleShadowColor: newColor.hex || "transparent"
                                })
                            }
                            onChangeBlur={newBlur =>
                                setAttributes({ titleShadowBlur: newBlur || 0 })
                            }
                            onChangehHorizontal={newValue =>
                                setAttributes({ titleShadowHorizontal: newValue || 0 })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({ titleShadowVertical: newValue || 0 })
                            }
                        />
                        <p>{__("Background Color")}</p>
                        <PremiumBackground
                            type="color"
                            colorValue={titleBack}
                            onChangeColor={newvalue =>
                                setAttributes({
                                    titleBack: newvalue,
                                })
                            }
                            opacityValue={titleOpacity}
                            onChangeOpacity={value =>
                                setAttributes({
                                    titleOpacity: value,
                                })
                            }
                        />
                        <PremiumBorder
                            borderType={titleBorderType}
                            borderWidth={titleBorderWidth}
                            top={titleBorderTop}
                            right={titleBorderRight}
                            bottom={titleBorderBottom}
                            left={titleBorderLeft}
                            borderColor={titleBorderColor}
                            borderRadius={titleBorderRadius}
                            onChangeType={(newType) =>
                                setAttributes({ titleBorderType: newType })
                            }
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    titleBorderTop: top,
                                    titleBorderRight: right,
                                    titleBorderBottom: bottom,
                                    titleBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                setAttributes({ titleBorderColor: colorValue.hex })
                            }
                            onChangeRadius={(newrRadius) =>
                                setAttributes({ titleBorderRadius: newrRadius })
                            }
                        />
                        <PremiumResponsiveMargin
                            directions={["all"]}
                            showUnits={true}
                            selectedUnit={titleMarginType}
                            marginTop={titleMarginTop}
                            marginRight={titleMarginRight}
                            marginBottom={titleMarginBottom}
                            marginLeft={titleMarginLeft}
                            marginTopTablet={titleMarginTopTablet}
                            marginRightTablet={titleMarginRightTablet}
                            marginBottomTablet={titleMarginBottomTablet}
                            marginLeftTablet={titleMarginLeftTablet}
                            marginTopMobile={titleMarginTopMobile}
                            marginRightMobile={titleMarginRightMobile}
                            marginBottomMobile={titleMarginBottomMobile}
                            marginLeftMobile={titleMarginLeftMobile}
                            onChangeMarginTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titleMarginTop: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titleMarginTopTablet: newValue })
                                    } else {
                                        setAttributes({ titleMarginTopMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titleMarginRight: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titleMarginRightTablet: newValue })
                                    } else {
                                        setAttributes({ titleMarginRightMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titleMarginBottom: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titleMarginBottomTablet: newValue })
                                    } else {
                                        setAttributes({ titleMarginBottomMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titleMarginLeft: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titleMarginLeftTablet: newValue })
                                    } else {
                                        setAttributes({ titleMarginLeftMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarSizeUnit={(newvalue) => setAttributes({ titleMarginType: newvalue })}
                        />
                        <PremiumResponsivePadding
                            paddingTop={titlePaddingTop}
                            paddingRight={titlePaddingRight}
                            paddingBottom={titlePaddingBottom}
                            paddingLeft={titlePaddingLeft}
                            paddingTopTablet={titlePaddingTopTablet}
                            paddingRightTablet={titlePaddingRightTablet}
                            paddingBottomTablet={titlePaddingBottomTablet}
                            paddingLeftTablet={titlePaddingLeftTablet}
                            paddingTopMobile={titlePaddingTopMobile}
                            paddingRightMobile={titlePaddingRightMobile}
                            paddingBottomMobile={titlePaddingBottomMobile}
                            paddingLeftMobile={titlePaddingLeftMobile}
                            showUnits={true}
                            selectedUnit={titlePaddingType}
                            onChangePadSizeUnit={newvalue =>
                                setAttributes({ titlePaddingType: newvalue })
                            }
                            onChangePaddingTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlePaddingTop: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlePaddingTopTablet: newValue })
                                    } else {
                                        setAttributes({ titlePaddingTopMobile: newValue })
                                    }

                                }

                            }
                            onChangePaddingRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlePaddingRight: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlePaddingRightTablet: newValue })
                                    } else {
                                        setAttributes({ titlePaddingRightMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlePaddingBottom: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlePaddingBottomTablet: newValue })
                                    } else {
                                        setAttributes({ titlePaddingBottomMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlePaddingLeft: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlePaddingLeftTablet: newValue })
                                    } else {
                                        setAttributes({ titlePaddingLeftMobile: newValue })
                                    }
                                }
                            }
                        />
                        <hr />
                        <p>{__("Label")}</p>
                        <Fragment>
                            <p>{__("Color")}</p>
                            <ColorPalette
                                value={labelColor}
                                onChange={(newValue) => setAttributes({ labelColor: newValue })}
                            />
                        </Fragment>
                        <PremiumTypo components={[
                            "responsiveSize",
                            "weight",
                            "style",
                            "upper",
                            "spacing",
                            "line"
                        ]}
                            setAttributes={setAttributes}
                            fontSizeType={{
                                value: labelSizeUnit,
                                label: __("labelSizeUnit"),
                            }}
                            fontSize={{
                                value: labelSize,
                                label: __("labelSize"),
                            }}
                            fontSizeMobile={{
                                value: labelSizeMobile,
                                label: __("labelSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: labelSizeTablet,
                                label: __("labelSizeTablet"),
                            }}
                            weight={labelWeight}
                            style={labelStyle}
                            spacing={labelLetter}
                            line={labelLine}
                            upper={labelUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ labelWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ labelStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ labelLetter: newValue })
                            }
                            onChangeLine={newValue => setAttributes({ labelLine: newValue })}
                            onChangeUpper={check => setAttributes({ labelUpper: check })} />

                        <PremiumResponsiveMargin
                            directions={["all"]}
                            showUnits={true}
                            selectedUnit={labelMarginType}
                            marginTop={labelMarginTop}
                            marginRight={labelMarginRight}
                            marginBottom={labelMarginBottom}
                            marginLeft={labelMarginLeft}
                            marginTopTablet={labelMarginTopTablet}
                            marginRightTablet={labelMarginRightTablet}
                            marginBottomTablet={labelMarginBottomTablet}
                            marginLeftTablet={labelMarginLeftTablet}
                            marginTopMobile={labelMarginTopMobile}
                            marginRightMobile={labelMarginRightMobile}
                            marginBottomMobile={labelMarginBottomMobile}
                            marginLeftMobile={labelMarginLeftMobile}
                            onChangeMarginTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ labelMarginTop: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ labelMarginTopTablet: newValue })
                                    } else {
                                        setAttributes({ labelMarginTopMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ labelMarginRight: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ labelMarginRightTablet: newValue })
                                    } else {
                                        setAttributes({ labelMarginRightMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ labelMarginBottom: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ labelMarginBottomTablet: newValue })
                                    } else {
                                        setAttributes({ labelMarginBottomMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ labelMarginLeft: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ labelMarginLeftTablet: newValue })
                                    } else {
                                        setAttributes({ labelMarginLeftMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarSizeUnit={(newvalue) => setAttributes({ labelMarginType: newvalue })}
                        />
                    </PanelBody>}
                    {descChecked && <PanelBody
                        title={__("Description Style")}
                        initialOpen={false}
                        className={`premium-panel-body`}
                    >
                        <Fragment>
                            <p>{__("Descreption Color")}</p>
                            <ColorPalette
                                value={descColor}
                                onChange={newValue =>
                                    setAttributes({
                                        descColor: newValue || "transparent",
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        <Fragment>
                            <p>{__("Descreption Hover Color")}</p>
                            <ColorPalette
                                value={descColorH}
                                onChange={newValue =>
                                    setAttributes({
                                        descColorH: newValue || "transparent",
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line"]}
                            setAttributes={setAttributes}
                            fontSizeType={{
                                value: descSizeUnit,
                                label: __("descSizeUnit"),
                            }}
                            fontSize={{
                                value: descSize,
                                label: __("descSize"),
                            }}
                            fontSizeMobile={{
                                value: descSizeMobile,
                                label: __("descSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: descSizeTablet,
                                label: __("descSizeTablet"),
                            }}
                            weight={descWeight}
                            line={descLine}
                            onChangeWeight={newWeight =>
                                setAttributes({ descWeight: newWeight || 500 })
                            }
                            onChangeLine={newValue => setAttributes({ descLine: newValue })}
                        />
                        <PremiumTextShadow
                            color={descShadowColor}
                            blur={descShadowBlur}
                            horizontal={descShadowHorizontal}
                            vertical={descShadowVertical}
                            onChangeColor={newColor =>
                                setAttributes({
                                    descShadowColor: newColor.hex || "transparent"
                                })
                            }
                            onChangeBlur={newBlur =>
                                setAttributes({ descShadowBlur: newBlur || 0 })
                            }
                            onChangehHorizontal={newValue =>
                                setAttributes({ descShadowHorizontal: newValue || 0 })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({ descShadowVertical: newValue || 0 })
                            }
                        />
                        <PremiumBackground
                            type="color"
                            colorValue={descBackColor}
                            onChangeColor={newvalue =>
                                setAttributes({
                                    descBackColor: newvalue,
                                })
                            }
                            opacityValue={descOpacity}
                            onChangeOpacity={value =>
                                setAttributes({
                                    descOpacity: value,
                                })
                            } />
                        <PremiumBorder
                            borderType={descborderType}
                            borderWidth={descborderWidth}
                            top={descborderTop}
                            right={descborderRight}
                            bottom={descborderBottom}
                            left={descborderLeft}
                            borderColor={descborderColor}
                            borderRadius={descborderRadius}
                            onChangeType={(newType) => setAttributes({ descborderType: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    descborderTop: top,
                                    descborderRight: right,
                                    descborderBottom: bottom,
                                    descborderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                setAttributes({ descborderColor: colorValue.hex })
                            }
                            onChangeRadius={(newrRadius) =>
                                setAttributes({ descborderRadius: newrRadius })
                            } />
                        <PremiumResponsiveMargin
                            directions={["all"]}
                            showUnits={true}
                            selectedUnit={descMarginType}
                            marginTop={descMarginTop}
                            marginRight={descMarginRight}
                            marginBottom={descMarginBottom}
                            marginLeft={descMarginLeft}
                            marginTopTablet={descMarginTopTablet}
                            marginRightTablet={descMarginRightTablet}
                            marginBottomTablet={descMarginBottomTablet}
                            marginLeftTablet={descMarginLeftTablet}
                            marginTopMobile={descMarginTopMobile}
                            marginRightMobile={descMarginRightMobile}
                            marginBottomMobile={descMarginBottomMobile}
                            marginLeftMobile={descMarginLeftMobile}
                            onChangeMarginTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ descMarginTop: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ descMarginTopTablet: newValue })
                                    } else {
                                        setAttributes({ descMarginTopMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ descMarginRight: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ descMarginRightTablet: newValue })
                                    } else {
                                        setAttributes({ descMarginRightMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ descMarginBottom: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ descMarginBottomTablet: newValue })
                                    } else {
                                        setAttributes({ descMarginBottomMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ descMarginLeft: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ descMarginLeftTablet: newValue })
                                    } else {
                                        setAttributes({ descMarginLeftMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarSizeUnit={(newvalue) => setAttributes({ descMarginType: newvalue })} />
                        <PremiumResponsivePadding
                            paddingTop={descPaddingTop}
                            paddingRight={descPaddingRight}
                            paddingBottom={descPaddingBottom}
                            paddingLeft={descPaddingLeft}
                            paddingTopTablet={descPaddingTopTablet}
                            paddingRightTablet={descPaddingRightTablet}
                            paddingBottomTablet={descPaddingBottomTablet}
                            paddingLeftTablet={descPaddingLeftTablet}
                            paddingTopMobile={descPaddingTopMobile}
                            paddingRightMobile={descPaddingRightMobile}
                            paddingBottomMobile={descPaddingBottomMobile}
                            paddingLeftMobile={descPaddingLeftMobile}
                            showUnits={true}
                            selectedUnit={descPaddingType}
                            onChangePadSizeUnit={newvalue =>
                                setAttributes({ descPaddingType: newvalue })
                            }
                            onChangePaddingTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ descPaddingTop: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ descPaddingTopTablet: newValue })
                                    } else {
                                        setAttributes({ descPaddingTopMobile: newValue })
                                    }

                                }

                            }
                            onChangePaddingRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ descPaddingRight: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ descPaddingRightTablet: newValue })
                                    } else {
                                        setAttributes({ descPaddingRightMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ descPaddingBottom: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ descPaddingBottomTablet: newValue })
                                    } else {
                                        setAttributes({ descPaddingBottomMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ descPaddingLeft: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ descPaddingLeftTablet: newValue })
                                    } else {
                                        setAttributes({ descPaddingLeftMobile: newValue })
                                    }
                                }
                            } />
                    </PanelBody>}
                    {btnChecked && <PanelBody
                        title={__("Button Style")}
                        className={`premium-panel-body`}
                        initialOpen={false}
                    >
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}

                            setAttributes={setAttributes}
                            fontSizeType={{
                                value: btnSizeUnit,
                                label: __("btnSizeUnit"),
                            }}
                            fontSize={{
                                value: btnSize,
                                label: __("btnSize"),
                            }}
                            fontSizeMobile={{
                                value: btnSizeMobile,
                                label: __("btnSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: btnSizeTablet,
                                label: __("btnSizeTablet"),
                            }}
                            weight={btnWeight}
                            style={btnStyle}
                            spacing={btnLetter}
                            upper={btnUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ btnWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle => setAttributes({ btnStyle: newStyle })}
                            onChangeSpacing={newValue =>
                                setAttributes({ btnLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ btnUpper: check })}
                        />
                        <TabPanel
                            className="premium-color-tabpanel"
                            activeClass="active-tab"
                            tabs={[
                                {
                                    name: "normal",
                                    title: "Normal",
                                    className: "premium-tab",
                                },
                                {
                                    name: "hover",
                                    title: "Hover",
                                    className: "premium-tab",
                                },
                            ]}
                        >
                            {(tab) => {
                                let tabout;
                                if ("normal" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            <p>{__("Button Color")}</p>
                                            <ColorPalette
                                                value={btnColor}
                                                onChange={newValue =>
                                                    setAttributes({
                                                        btnColor: newValue || "#000",
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                            <PremiumTextShadow
                                                color={btnShadowColor}
                                                blur={btnShadowBlur}
                                                horizontal={btnShadowHorizontal}
                                                vertical={btnShadowVertical}
                                                onChangeColor={newColor =>
                                                    setAttributes({
                                                        btnShadowColor: newColor.hex || "transparent"
                                                    })
                                                }
                                                onChangeBlur={newBlur =>
                                                    setAttributes({ btnShadowBlur: newBlur || 0 })
                                                }
                                                onChangehHorizontal={newValue =>
                                                    setAttributes({ btnShadowHorizontal: newValue || 0 })
                                                }
                                                onChangeVertical={newValue =>
                                                    setAttributes({ btnShadowVertical: newValue || 0 })
                                                }
                                            />
                                            <p>{__("Button Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={btnBack}
                                                onChangeColor={newvalue =>
                                                    setAttributes({
                                                        btnBack: newvalue,
                                                    })
                                                }
                                                opacityValue={btnOpacity}
                                                onChangeOpacity={value =>
                                                    setAttributes({
                                                        btnOpacity: value,
                                                    })
                                                }
                                            />
                                            <PremiumBorder
                                                borderType={btnBorderType}
                                                borderWidth={btnBorderWidth}
                                                top={btnBorderTop}
                                                right={btnBorderRight}
                                                bottom={btnBorderBottom}
                                                left={btnBorderLeft}
                                                borderColor={btnBorderColor}
                                                borderRadius={btnBorderRadius}
                                                onChangeType={(newType) =>
                                                    setAttributes({ btnBorderType: newType })
                                                }
                                                onChangeWidth={({ top, right, bottom, left }) =>
                                                    setAttributes({
                                                        btnBorderIconBox: true,
                                                        btnBorderTop: top,
                                                        btnBorderRight: right,
                                                        btnBorderBottom: bottom,
                                                        btnBorderLeft: left,
                                                    })
                                                }
                                                onChangeColor={(colorValue) =>
                                                    setAttributes({ btnBorderColor: colorValue.hex })
                                                }
                                                onChangeRadius={(newrRadius) =>
                                                    setAttributes({ btnBorderRadius: newrRadius })
                                                }
                                            />
                                            <PremiumResponsiveMargin
                                                directions={["all"]}
                                                showUnits={true}
                                                selectedUnit={btnMarginType}
                                                marginTop={btnMarginTop}
                                                marginRight={btnMarginRight}
                                                marginBottom={btnMarginBottom}
                                                marginLeft={btnMarginLeft}
                                                marginTopTablet={btnMarginTopTablet}
                                                marginRightTablet={btnMarginRightTablet}
                                                marginBottomTablet={btnMarginBottomTablet}
                                                marginLeftTablet={btnMarginLeftTablet}
                                                marginTopMobile={btnMarginTopMobile}
                                                marginRightMobile={btnMarginRightMobile}
                                                marginBottomMobile={btnMarginBottomMobile}
                                                marginLeftMobile={btnMarginLeftMobile}
                                                onChangeMarginTop={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ btnMarginTop: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ btnMarginTopTablet: newValue })
                                                        } else {
                                                            setAttributes({ btnMarginTopMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginRight={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ btnMarginRight: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ btnMarginRightTablet: newValue })
                                                        } else {
                                                            setAttributes({ btnMarginRightMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginBottom={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ btnMarginBottom: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ btnMarginBottomTablet: newValue })
                                                        } else {
                                                            setAttributes({ btnMarginBottomMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginLeft={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ btnMarginLeft: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ btnMarginLeftTablet: newValue })
                                                        } else {
                                                            setAttributes({ btnMarginLeftMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarSizeUnit={(newvalue) => setAttributes({ btnMarginType: newvalue })} />
                                            <PremiumResponsivePadding
                                                paddingTop={btnPaddingTop}
                                                paddingRight={btnPaddingRight}
                                                paddingBottom={btnPaddingBottom}
                                                paddingLeft={btnPaddingLeft}
                                                paddingTopTablet={btnPaddingTopTablet}
                                                paddingRightTablet={btnPaddingRightTablet}
                                                paddingBottomTablet={btnPaddingBottomTablet}
                                                paddingLeftTablet={btnPaddingLeftTablet}
                                                paddingTopMobile={btnPaddingTopMobile}
                                                paddingRightMobile={btnPaddingRightMobile}
                                                paddingBottomMobile={btnPaddingBottomMobile}
                                                paddingLeftMobile={btnPaddingLeftMobile}
                                                showUnits={true}
                                                selectedUnit={btnPaddingType}
                                                onChangePadSizeUnit={newvalue =>
                                                    setAttributes({ btnPaddingType: newvalue })
                                                }
                                                onChangePaddingTop={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ btnPaddingTop: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ btnPaddingTopTablet: newValue })
                                                        } else {
                                                            setAttributes({ btnPaddingTopMobile: newValue })
                                                        }

                                                    }

                                                }
                                                onChangePaddingRight={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ btnPaddingRight: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ btnPaddingRightTablet: newValue })
                                                        } else {
                                                            setAttributes({ btnPaddingRightMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangePaddingBottom={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ btnPaddingBottom: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ btnPaddingBottomTablet: newValue })
                                                        } else {
                                                            setAttributes({ btnPaddingBottomMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangePaddingLeft={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ btnPaddingLeft: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ btnPaddingLeftTablet: newValue })
                                                        } else {
                                                            setAttributes({ btnPaddingLeftMobile: newValue })
                                                        }
                                                    }
                                                } />
                                        </Fragment>
                                    );
                                }
                                if ("hover" === tab.name) {
                                    tabout = (<Fragment>
                                        <p>{__("Button Color")}</p>
                                        <ColorPalette
                                            value={btnColorH}
                                            onChange={newValue =>
                                                setAttributes({
                                                    btnColorH: newValue || "#000",
                                                })
                                            }
                                            allowReset={true}
                                        />
                                        <PremiumTextShadow
                                            color={btnShadowColorH}
                                            blur={btnShadowBlurH}
                                            horizontal={btnShadowHorizontalH}
                                            vertical={btnShadowVerticalH}
                                            onChangeColor={newColor =>
                                                setAttributes({
                                                    btnShadowColorH: newColor.hex || "transparent"
                                                })
                                            }
                                            onChangeBlur={newBlur =>
                                                setAttributes({ btnShadowBlurH: newBlur || 0 })
                                            }
                                            onChangehHorizontal={newValue =>
                                                setAttributes({ btnShadowHorizontalH: newValue || 0 })
                                            }
                                            onChangeVertical={newValue =>
                                                setAttributes({ btnShadowVerticalH: newValue || 0 })
                                            }
                                        />
                                        <p>{__("Button Background Color")}</p>
                                        <PremiumBackground
                                            type="color"
                                            colorValue={btnBackH}
                                            onChangeColor={newvalue =>
                                                setAttributes({
                                                    btnBackH: newvalue,
                                                })
                                            }
                                            opacityValue={btnOpacityH}
                                            onChangeOpacity={value =>
                                                setAttributes({
                                                    btnOpacityH: value,
                                                })
                                            }
                                        />
                                        <PremiumBorder
                                            borderType={btnBorderTypeH}
                                            borderWidth={btnBorderWidthH}
                                            top={btnBorderTopH}
                                            right={btnBorderRightH}
                                            bottom={btnBorderBottomH}
                                            left={btnBorderLeftH}
                                            borderColor={btnBorderColorH}
                                            borderRadius={btnBorderRadiusH}
                                            onChangeType={(newType) =>
                                                setAttributes({ btnBorderTypeH: newType })
                                            }
                                            onChangeWidth={({ top, right, bottom, left }) =>
                                                setAttributes({
                                                    btnBorderTopH: top,
                                                    btnBorderRightH: right,
                                                    btnBorderBottomH: bottom,
                                                    btnBorderLeftH: left,
                                                })
                                            }
                                            onChangeColor={(colorValue) =>
                                                setAttributes({ btnBorderColorH: colorValue.hex })
                                            }
                                            onChangeRadius={(newrRadius) =>
                                                setAttributes({ btnBorderRadiusH: newrRadius })
                                            }
                                        />
                                        <PremiumResponsiveMargin
                                            directions={["all"]}
                                            showUnits={true}
                                            selectedUnit={btnMarginTypeH}
                                            marginTop={btnMarginTopH}
                                            marginRight={btnMarginRightH}
                                            marginBottom={btnMarginBottomH}
                                            marginLeft={btnMarginLeftH}
                                            marginTopTablet={btnMarginTopTabletH}
                                            marginRightTablet={btnMarginRightTabletH}
                                            marginBottomTablet={btnMarginBottomTabletH}
                                            marginLeftTablet={btnMarginLeftTabletH}
                                            marginTopMobile={btnMarginTopMobileH}
                                            marginRightMobile={btnMarginRightMobileH}
                                            marginBottomMobile={btnMarginBottomMobileH}
                                            marginLeftMobile={btnMarginLeftMobileH}
                                            onChangeMarginTop={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ btnMarginTopH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ btnMarginTopTabletH: newValue })
                                                    } else {
                                                        setAttributes({ btnMarginTopMobileH: newValue })
                                                    }
                                                }
                                            }
                                            onChangeMarginRight={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ btnMarginRightH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ btnMarginRightTabletH: newValue })
                                                    } else {
                                                        setAttributes({ btnMarginRightMobileH: newValue })
                                                    }
                                                }
                                            }
                                            onChangeMarginBottom={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ btnMarginBottomH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ btnMarginBottomTabletH: newValue })
                                                    } else {
                                                        setAttributes({ btnMarginBottomMobileH: newValue })
                                                    }
                                                }
                                            }
                                            onChangeMarginLeft={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ btnMarginLeftH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ btnMarginLeftTabletH: newValue })
                                                    } else {
                                                        setAttributes({ btnMarginLeftMobileH: newValue })
                                                    }
                                                }
                                            }
                                            onChangeMarSizeUnit={(newvalue) => setAttributes({ btnMarginTypeH: newvalue })} />
                                        <PremiumResponsivePadding
                                            paddingTop={btnPaddingTopH}
                                            paddingRight={btnPaddingRightH}
                                            paddingBottom={btnPaddingBottomH}
                                            paddingLeft={btnPaddingLeftH}
                                            paddingTopTablet={btnPaddingTopTabletH}
                                            paddingRightTablet={btnPaddingRightTabletH}
                                            paddingBottomTablet={btnPaddingBottomTabletH}
                                            paddingLeftTablet={btnPaddingLeftTabletH}
                                            paddingTopMobile={btnPaddingTopMobileH}
                                            paddingRightMobile={btnPaddingRightMobileH}
                                            paddingBottomMobile={btnPaddingBottomMobileH}
                                            paddingLeftMobile={btnPaddingLeftMobileH}
                                            showUnits={true}
                                            selectedUnit={btnPaddingTypeH}
                                            onChangePadSizeUnit={newvalue =>
                                                setAttributes({ btnPaddingTypeH: newvalue })
                                            }
                                            onChangePaddingTop={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ btnPaddingTopH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ btnPaddingTopTabletH: newValue })
                                                    } else {
                                                        setAttributes({ btnPaddingTopMobileH: newValue })
                                                    }

                                                }

                                            }
                                            onChangePaddingRight={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ btnPaddingRightH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ btnPaddingRightTabletH: newValue })
                                                    } else {
                                                        setAttributes({ btnPaddingRightMobileH: newValue })
                                                    }
                                                }
                                            }
                                            onChangePaddingBottom={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ btnPaddingBottomH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ btnPaddingBottomTabletH: newValue })
                                                    } else {
                                                        setAttributes({ btnPaddingBottomMobileH: newValue })
                                                    }
                                                }
                                            }
                                            onChangePaddingLeft={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ btnPaddingLeftH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ btnPaddingLeftTabletH: newValue })
                                                    } else {
                                                        setAttributes({ btnPaddingLeftMobileH: newValue })
                                                    }
                                                }
                                            } />
                                    </Fragment>)
                                }
                                return (
                                    <div>
                                        {tabout}
                                        <hr />
                                    </div>
                                );
                            }}
                        </TabPanel>
                    </PanelBody>}
                    <PanelBody
                        title={__("Inner Container")}
                        className={`premium_panel_body`}
                        initialOpen={false}
                    >
                        <TabPanel
                            className="premium-color-tabpanel"
                            activeClass="active-tab"
                            tabs={[
                                {
                                    name: "normal",
                                    title: "Normal",
                                    className: "premium-tab",
                                },
                                {
                                    name: "hover",
                                    title: "Hover",
                                    className: "premium-tab",
                                },
                            ]}
                        >
                            {(tab) => {
                                let tabout;
                                if ("normal" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            <p>{__("Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={innerBack}
                                                onChangeColor={newvalue =>
                                                    setAttributes({
                                                        innerBack: newvalue,
                                                    })
                                                }
                                                opacityValue={innerOpacity}
                                                onChangeOpacity={value =>
                                                    setAttributes({
                                                        innerOpacity: value,
                                                    })
                                                }
                                            />
                                            <PremiumBackground
                                                imageID={imageID}
                                                imageURL={imageURL}
                                                backgroundPosition={backgroundPosition}
                                                backgroundRepeat={backgroundRepeat}
                                                backgroundSize={backgroundSize}
                                                fixed={fixed}
                                                onSelectMedia={media => {
                                                    setAttributes({
                                                        imageID: media.id,
                                                        imageURL: media.url
                                                    });
                                                }}
                                                onRemoveImage={value =>
                                                    setAttributes({ imageURL: "", imageID: "" })
                                                }
                                                onChangeBackPos={newValue =>
                                                    setAttributes({ backgroundPosition: newValue })
                                                }
                                                onchangeBackRepeat={newValue =>
                                                    setAttributes({ backgroundRepeat: newValue })
                                                }
                                                onChangeBackSize={newValue =>
                                                    setAttributes({ backgroundSize: newValue })
                                                }
                                                onChangeFixed={check => setAttributes({ fixed: check })}
                                            />
                                            <PremiumBorder
                                                borderType={borderType}
                                                borderWidth={borderWidth}
                                                top={borderTop}
                                                right={borderRight}
                                                bottom={borderBottom}
                                                left={borderLeft}
                                                borderColor={borderColor}
                                                borderRadius={borderRadius}
                                                onChangeType={(newType) => setAttributes({ borderType: newType })}
                                                onChangeWidth={({ top, right, bottom, left }) =>
                                                    setAttributes({
                                                        borderIconBox: true,
                                                        borderTop: top,
                                                        borderRight: right,
                                                        borderBottom: bottom,
                                                        borderLeft: left,
                                                    })
                                                }
                                                onChangeColor={(colorValue) =>
                                                    setAttributes({ borderColor: colorValue.hex })
                                                }
                                                onChangeRadius={(newrRadius) =>
                                                    setAttributes({ borderRadius: newrRadius })
                                                }
                                            />
                                            <PremiumBoxShadow
                                                inner={true}
                                                color={shadowColor}
                                                blur={shadowBlur}
                                                horizontal={shadowHorizontal}
                                                vertical={shadowVertical}
                                                position={shadowPosition}
                                                onChangeColor={newColor =>
                                                    setAttributes({
                                                        shadowColor: newColor.hex || "transparent"
                                                    })
                                                }
                                                onChangeBlur={newBlur =>
                                                    setAttributes({
                                                        shadowBlur: newBlur || 0
                                                    })
                                                }
                                                onChangehHorizontal={newValue =>
                                                    setAttributes({
                                                        shadowHorizontal: newValue || 0
                                                    })
                                                }
                                                onChangeVertical={newValue =>
                                                    setAttributes({
                                                        shadowVertical: newValue || 0
                                                    })
                                                }
                                                onChangePosition={newValue =>
                                                    setAttributes({
                                                        shadowPosition: newValue
                                                    })
                                                }
                                            />
                                            <PremiumResponsiveMargin
                                                directions={["all"]}
                                                marginTop={marginT}
                                                marginRight={marginR}
                                                marginBottom={marginB}
                                                marginLeft={marginL}
                                                marginTopTablet={marginTTablet}
                                                marginRightTablet={marginRTablet}
                                                marginBottomTablet={marginBTablet}
                                                marginLeftTablet={marginLTablet}
                                                marginTopMobile={marginTMobile}
                                                marginRightMobile={marginRMobile}
                                                marginBottomMobile={marginBMobile}
                                                marginLeftMobile={marginLMobile}
                                                onChangeMarginTop={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ marginT: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ marginTTablet: newValue })
                                                        } else {
                                                            setAttributes({ marginTMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginRight={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ marginR: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ marginRTablet: newValue })
                                                        } else {
                                                            setAttributes({ marginRMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginBottom={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ marginB: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ marginBTablet: newValue })
                                                        } else {
                                                            setAttributes({ marginBMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginLeft={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ marginL: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ marginLTablet: newValue })
                                                        } else {
                                                            setAttributes({ marginLMobile: newValue })
                                                        }
                                                    }
                                                }
                                            />
                                            <PremiumResponsivePadding
                                                paddingTop={paddingT}
                                                paddingRight={paddingR}
                                                paddingBottom={paddingB}
                                                paddingLeft={paddingL}
                                                paddingTopTablet={paddingTTablet}
                                                paddingRightTablet={paddingRTablet}
                                                paddingBottomTablet={paddingBTablet}
                                                paddingLeftTablet={paddingLTablet}
                                                paddingTopMobile={paddingTMobile}
                                                paddingRightMobile={paddingRMobile}
                                                paddingBottomMobile={paddingBMobile}
                                                paddingLeftMobile={paddingLMobile}
                                                showUnits={true}
                                                selectedUnit={paddingU}
                                                onChangePadSizeUnit={newvalue =>
                                                    setAttributes({ paddingU: newvalue })
                                                }
                                                onChangePaddingTop={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ paddingT: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ paddingTTablet: newValue })
                                                        } else {
                                                            setAttributes({ paddingTMobile: newValue })
                                                        }

                                                    }

                                                }
                                                onChangePaddingRight={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ paddingR: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ paddingRTablet: newValue })
                                                        } else {
                                                            setAttributes({ paddingRMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangePaddingBottom={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ paddingB: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ paddingBTablet: newValue })
                                                        } else {
                                                            setAttributes({ paddingBMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangePaddingLeft={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ paddingL: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ paddingLTablet: newValue })
                                                        } else {
                                                            setAttributes({ paddingLMobile: newValue })
                                                        }
                                                    }
                                                } />

                                        </Fragment>
                                    );
                                }
                                if ("hover" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            <p>{__("Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={innerBackH}
                                                onChangeColor={newvalue =>
                                                    setAttributes({
                                                        innerBackH: newvalue,
                                                    })
                                                }
                                                opacityValue={innerOpacityH}
                                                onChangeOpacity={value =>
                                                    setAttributes({
                                                        innerOpacityH: value,
                                                    })
                                                }
                                            />
                                            <PremiumBackground
                                                imageID={imageIDH}
                                                imageURL={imageURLH}
                                                backgroundPosition={backgroundPositionH}
                                                backgroundRepeat={backgroundRepeatH}
                                                backgroundSize={backgroundSizeH}
                                                fixed={fixedH}
                                                onSelectMedia={media => {
                                                    setAttributes({
                                                        imageIDH: media.id,
                                                        imageURLH: media.url
                                                    });
                                                }}
                                                onRemoveImage={value =>
                                                    setAttributes({ imageURLH: "", imageIDH: "" })
                                                }
                                                onChangeBackPos={newValue =>
                                                    setAttributes({ backgroundPositionH: newValue })
                                                }
                                                onchangeBackRepeat={newValue =>
                                                    setAttributes({ backgroundRepeatH: newValue })
                                                }
                                                onChangeBackSize={newValue =>
                                                    setAttributes({ backgroundSizeH: newValue })
                                                }
                                                onChangeFixed={check => setAttributes({ fixedH: check })}
                                            />
                                            <PremiumBorder
                                                borderType={borderTypeH}
                                                top={borderTopH}
                                                right={borderRightH}
                                                bottom={borderBottomH}
                                                left={borderLeftH}
                                                borderColor={borderColorH}
                                                borderRadius={borderRadiusH}
                                                onChangeType={(newType) => setAttributes({ borderTypeH: newType })}
                                                onChangeWidth={({ top, right, bottom, left }) =>
                                                    setAttributes({
                                                        borderTopH: top,
                                                        borderRightH: right,
                                                        borderBottomH: bottom,
                                                        borderLeftH: left,
                                                    })
                                                }
                                                onChangeColor={(colorValue) =>
                                                    setAttributes({ borderColorH: colorValue.hex })
                                                }
                                                onChangeRadius={(newrRadius) =>
                                                    setAttributes({ borderRadiusH: newrRadius })
                                                }
                                            />

                                            <PremiumBoxShadow
                                                inner={true}
                                                label={__("Hover Box Shadow")}
                                                color={hoverShadowColor}
                                                blur={hoverShadowBlur}
                                                horizontal={hoverShadowHorizontal}
                                                vertical={hoverShadowVertical}
                                                position={hoverShadowPosition}
                                                onChangeColor={newColor =>
                                                    setAttributes({
                                                        hoverShadowColor: newColor.hex
                                                    })
                                                }
                                                onChangeBlur={newBlur =>
                                                    setAttributes({
                                                        hoverShadowBlur: newBlur
                                                    })
                                                }
                                                onChangehHorizontal={newValue =>
                                                    setAttributes({
                                                        hoverShadowHorizontal: newValue
                                                    })
                                                }
                                                onChangeVertical={newValue =>
                                                    setAttributes({
                                                        hoverShadowVertical: newValue
                                                    })
                                                }
                                                onChangePosition={newValue =>
                                                    setAttributes({
                                                        hoverShadowPosition: newValue
                                                    })
                                                }
                                            />
                                            <PremiumResponsiveMargin
                                                directions={["all"]}
                                                marginTop={marginTH}
                                                marginRight={marginRH}
                                                marginBottom={marginBH}
                                                marginLeft={marginLH}
                                                marginTopTablet={marginTTabletH}
                                                marginRightTablet={marginRTabletH}
                                                marginBottomTablet={marginBTabletH}
                                                marginLeftTablet={marginLTabletH}
                                                marginTopMobile={marginTMobileH}
                                                marginRightMobile={marginRMobileH}
                                                marginBottomMobile={marginBMobileH}
                                                marginLeftMobile={marginLMobileH}
                                                onChangeMarginTop={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ marginTH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ marginTTabletH: newValue })
                                                        } else {
                                                            setAttributes({ marginTMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginRight={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ marginRH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ marginRTabletH: newValue })
                                                        } else {
                                                            setAttributes({ marginRMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginBottom={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ marginBH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ marginBTabletH: newValue })
                                                        } else {
                                                            setAttributes({ marginBMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginLeft={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ marginLH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ marginLTabletH: newValue })
                                                        } else {
                                                            setAttributes({ marginLMobileH: newValue })
                                                        }
                                                    }
                                                }
                                            />
                                            <PremiumResponsivePadding
                                                paddingTop={paddingTH}
                                                paddingRight={paddingRH}
                                                paddingBottom={paddingBH}
                                                paddingLeft={paddingLH}
                                                paddingTopTablet={paddingTTabletH}
                                                paddingRightTablet={paddingRTabletH}
                                                paddingBottomTablet={paddingBTabletH}
                                                paddingLeftTablet={paddingLTabletH}
                                                paddingTopMobile={paddingTMobileH}
                                                paddingRightMobile={paddingRMobileH}
                                                paddingBottomMobile={paddingBMobileH}
                                                paddingLeftMobile={paddingLMobileH}
                                                showUnits={true}
                                                selectedUnit={paddingUH}
                                                onChangePadSizeUnit={newvalue =>
                                                    setAttributes({ paddingUH: newvalue })
                                                }
                                                onChangePaddingTop={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ paddingTH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ paddingTTabletH: newValue })
                                                        } else {
                                                            setAttributes({ paddingTMobileH: newValue })
                                                        }

                                                    }

                                                }
                                                onChangePaddingRight={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ paddingRH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ paddingRTabletH: newValue })
                                                        } else {
                                                            setAttributes({ paddingRMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangePaddingBottom={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ paddingBH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ paddingBTabletH: newValue })
                                                        } else {
                                                            setAttributes({ paddingBMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangePaddingLeft={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ paddingLH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ paddingLTabletH: newValue })
                                                        } else {
                                                            setAttributes({ paddingLMobileH: newValue })
                                                        }
                                                    }
                                                } />
                                        </Fragment>)
                                }
                                return (
                                    <div>
                                        {tabout}
                                        <hr />
                                    </div>
                                );
                            }}
                        </TabPanel>
                    </PanelBody>
                    <PanelBody
                        title={__("Outer Container")}
                        className={`premium_panel_body`}
                        initialOpen={false}
                    >
                        <TabPanel
                            className="premium-color-tabpanel"
                            activeClass="active-tab"
                            tabs={[
                                {
                                    name: "normal",
                                    title: "Normal",
                                    className: "premium-tab",
                                },
                                {
                                    name: "hover",
                                    title: "Hover",
                                    className: "premium-tab",
                                },
                            ]}
                        >
                            {(tab) => {
                                let tabout;
                                if ("normal" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            <p>{__("Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={outerBack}
                                                onChangeColor={newvalue =>
                                                    setAttributes({
                                                        outerBack: newvalue,
                                                    })
                                                }
                                                opacityValue={outerOpacity}
                                                onChangeOpacity={value =>
                                                    setAttributes({
                                                        outerOpacity: value,
                                                    })
                                                }
                                            />
                                            <PremiumBackground
                                                imageID={outerImageID}
                                                imageURL={outerImageURL}
                                                backgroundPosition={outerBackgroundPosition}
                                                backgroundRepeat={outerBackgroundRepeat}
                                                backgroundSize={outerBackgroundSize}
                                                fixed={outerFixed}
                                                onSelectMedia={media => {
                                                    setAttributes({
                                                        outerImageID: media.id,
                                                        outerImageURL: media.url
                                                    });
                                                }}
                                                onRemoveImage={() =>
                                                    setAttributes({ outerImageURL: "", outerImageID: "" })
                                                }
                                                onChangeBackPos={newValue =>
                                                    setAttributes({ outerBackgroundPosition: newValue })
                                                }
                                                onchangeBackRepeat={newValue =>
                                                    setAttributes({ outerBackgroundRepeat: newValue })
                                                }
                                                onChangeBackSize={newValue =>
                                                    setAttributes({ outerBackgroundSize: newValue })
                                                }
                                                onChangeFixed={check => setAttributes({ outerFixed: check })}
                                            />
                                            <PremiumBorder
                                                borderType={outerBorderType}
                                                top={outerBorderTop}
                                                right={outerBorderRight}
                                                bottom={outerBorderBottom}
                                                left={outerBorderLeft}
                                                borderColor={outerBorderColor}
                                                borderRadius={outerBorderRadius}
                                                onChangeType={(newType) => setAttributes({ outerBorderType: newType })}
                                                onChangeWidth={({ top, right, bottom, left }) =>
                                                    setAttributes({
                                                        outerBorderTop: top,
                                                        outerBorderRight: right,
                                                        outerBorderBottom: bottom,
                                                        outerBorderLeft: left,
                                                    })
                                                }
                                                onChangeColor={(colorValue) =>
                                                    setAttributes({ outerBorderColor: colorValue.hex })
                                                }
                                                onChangeRadius={(newrRadius) =>
                                                    setAttributes({ outerBorderRadius: newrRadius })
                                                }
                                            />
                                            <PremiumBoxShadow
                                                inner={true}
                                                color={outershadowColor}
                                                blur={outershadowBlur}
                                                horizontal={outershadowHorizontal}
                                                vertical={outershadowVertical}
                                                position={outershadowPosition}
                                                onChangeColor={newColor =>
                                                    setAttributes({
                                                        outershadowColor: newColor.hex || "transparent"
                                                    })
                                                }
                                                onChangeBlur={newBlur =>
                                                    setAttributes({
                                                        outershadowBlur: newBlur || 0
                                                    })
                                                }
                                                onChangehHorizontal={newValue =>
                                                    setAttributes({
                                                        shadowHorizontal: newValue || 0
                                                    })
                                                }
                                                onChangeVertical={newValue =>
                                                    setAttributes({
                                                        outershadowVertical: newValue || 0
                                                    })
                                                }
                                                onChangePosition={newValue =>
                                                    setAttributes({
                                                        outershadowPosition: newValue
                                                    })
                                                }
                                            />
                                            <PremiumResponsiveMargin
                                                directions={["all"]}
                                                marginTop={outerMarginT}
                                                marginRight={outerMarginR}
                                                marginBottom={outerMarginB}
                                                marginLeft={outerMarginL}
                                                marginTopTablet={outerMarginTTablet}
                                                marginRightTablet={outerMarginRTablet}
                                                marginBottomTablet={outerMarginBTablet}
                                                marginLeftTablet={outerMarginLTablet}
                                                marginTopMobile={outerMarginTMobile}
                                                marginRightMobile={outerMarginRMobile}
                                                marginBottomMobile={outerMarginBMobile}
                                                marginLeftMobile={outerMarginLMobile}
                                                onChangeMarginTop={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerMarginT: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerMarginTTablet: newValue })
                                                        } else {
                                                            setAttributes({ outerMarginTMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginRight={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerMarginR: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerMarginRTablet: newValue })
                                                        } else {
                                                            setAttributes({ outerMarginRMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginBottom={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerMarginB: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerMarginBTablet: newValue })
                                                        } else {
                                                            setAttributes({ outerMarginBMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginLeft={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerMarginL: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerMarginLTablet: newValue })
                                                        } else {
                                                            setAttributes({ outerMarginLMobile: newValue })
                                                        }
                                                    }
                                                }
                                            />
                                            <PremiumResponsivePadding
                                                paddingTop={outerPaddingT}
                                                paddingRight={outerPaddingR}
                                                paddingBottom={outerPaddingB}
                                                paddingLeft={outerPaddingL}
                                                paddingTopTablet={outerPaddingTTablet}
                                                paddingRightTablet={outerPaddingRTablet}
                                                paddingBottomTablet={outerPaddingBTablet}
                                                paddingLeftTablet={outerPaddingLTablet}
                                                paddingTopMobile={outerPaddingTMobile}
                                                paddingRightMobile={outerPaddingRMobile}
                                                paddingBottomMobile={outerPaddingBMobile}
                                                paddingLeftMobile={outerPaddingLMobile}
                                                showUnits={true}
                                                selectedUnit={outerPaddingU}
                                                onChangePadSizeUnit={newvalue =>
                                                    setAttributes({ outerPaddingU: newvalue })
                                                }
                                                onChangePaddingTop={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerPaddingT: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerPaddingTTablet: newValue })
                                                        } else {
                                                            setAttributes({ outerPaddingTMobile: newValue })
                                                        }

                                                    }

                                                }
                                                onChangePaddingRight={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerPaddingR: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerPaddingRTablet: newValue })
                                                        } else {
                                                            setAttributes({ outerPaddingRMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangePaddingBottom={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerPaddingB: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerPaddingBTablet: newValue })
                                                        } else {
                                                            setAttributes({ outerPaddingBMobile: newValue })
                                                        }
                                                    }
                                                }
                                                onChangePaddingLeft={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerPaddingL: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerPaddingLTablet: newValue })
                                                        } else {
                                                            setAttributes({ outerPaddingLMobile: newValue })
                                                        }
                                                    }
                                                } />

                                        </Fragment>
                                    );
                                }
                                if ("hover" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            <p>{__("Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={outerBackH}
                                                onChangeColor={newvalue =>
                                                    setAttributes({
                                                        outerBackH: newvalue,
                                                    })
                                                }
                                                opacityValue={outerOpacityH}
                                                onChangeOpacity={value =>
                                                    setAttributes({
                                                        outerOpacityH: value,
                                                    })
                                                }
                                            />
                                            <PremiumBackground
                                                imageID={outerImageIDH}
                                                imageURL={outerImageURLH}
                                                backgroundPosition={outerBackgroundPositionH}
                                                backgroundRepeat={outerBackgroundRepeatH}
                                                backgroundSize={outerBackgroundSizeH}
                                                fixed={outerFixedH}
                                                onSelectMedia={media => {
                                                    setAttributes({
                                                        outerImageIDH: media.id,
                                                        outerImageURLH: media.url
                                                    });
                                                }}
                                                onRemoveImage={value =>
                                                    setAttributes({ outerImageURLH: "", outerImageIDH: "" })
                                                }
                                                onChangeBackPos={newValue =>
                                                    setAttributes({ outerBackgroundPositionH: newValue })
                                                }
                                                onchangeBackRepeat={newValue =>
                                                    setAttributes({ outerBackgroundRepeatH: newValue })
                                                }
                                                onChangeBackSize={newValue =>
                                                    setAttributes({ outerBackgroundSizeH: newValue })
                                                }
                                                onChangeFixed={check => setAttributes({ outerFixedH: check })}
                                            />
                                            <PremiumBorder
                                                borderType={outerBorderTypeH}
                                                top={outerBorderTopH}
                                                right={outerBorderRightH}
                                                bottom={outerBorderBottomH}
                                                left={outerBorderLeftH}
                                                borderColor={outerBorderColorH}
                                                borderRadius={outerBorderRadiusH}
                                                onChangeType={(newType) => setAttributes({ outerBorderTypeH: newType })}
                                                onChangeWidth={({ top, right, bottom, left }) =>
                                                    setAttributes({
                                                        outerBorderTopH: top,
                                                        outerBorderRightH: right,
                                                        outerBorderBottomH: bottom,
                                                        outerBorderLeftH: left,
                                                    })
                                                }
                                                onChangeColor={(colorValue) =>
                                                    setAttributes({ outerBorderColorH: colorValue.hex })
                                                }
                                                onChangeRadius={(newrRadius) =>
                                                    setAttributes({ outerBorderRadiusH: newrRadius })
                                                }
                                            />

                                            <PremiumBoxShadow
                                                inner={true}
                                                label={__("Hover Box Shadow")}
                                                color={outerShadowColorH}
                                                blur={outerShadowBlurH}
                                                horizontal={outerShadowHorizontalH}
                                                vertical={outerShadowVerticalH}
                                                position={outerShadowPositionH}
                                                onChangeColor={newColor =>
                                                    setAttributes({
                                                        hoverShadowColorH: newColor.hex
                                                    })
                                                }
                                                onChangeBlur={newBlur =>
                                                    setAttributes({
                                                        hoverShadowBlurH: newBlur
                                                    })
                                                }
                                                onChangehHorizontal={newValue =>
                                                    setAttributes({
                                                        hoverShadowHorizontalH: newValue
                                                    })
                                                }
                                                onChangeVertical={newValue =>
                                                    setAttributes({
                                                        hoverShadowVerticalH: newValue
                                                    })
                                                }
                                                onChangePosition={newValue =>
                                                    setAttributes({
                                                        hoverShadowPositionH: newValue
                                                    })
                                                }
                                            />
                                            <PremiumResponsiveMargin
                                                directions={["all"]}
                                                marginTop={outerMarginTH}
                                                marginRight={outerMarginRH}
                                                marginBottom={outerMarginBH}
                                                marginLeft={outerMarginLH}
                                                marginTopTablet={outerMarginTTabletH}
                                                marginRightTablet={outerMarginRTabletH}
                                                marginBottomTablet={outerMarginBTabletH}
                                                marginLeftTablet={outerMarginLTabletH}
                                                marginTopMobile={outerMarginTMobileH}
                                                marginRightMobile={outerMarginRMobileH}
                                                marginBottomMobile={outerMarginBMobileH}
                                                marginLeftMobile={outerMarginLMobileH}
                                                onChangeMarginTop={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerMarginTH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerMarginTTabletH: newValue })
                                                        } else {
                                                            setAttributes({ outerMarginTMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginRight={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerMarginRH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerMarginRTabletH: newValue })
                                                        } else {
                                                            setAttributes({ outerMarginRMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginBottom={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerMarginBH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerMarginBTabletH: newValue })
                                                        } else {
                                                            setAttributes({ outerMarginBMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangeMarginLeft={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerMarginLH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerMarginLTabletH: newValue })
                                                        } else {
                                                            setAttributes({ outerMarginLMobileH: newValue })
                                                        }
                                                    }
                                                }
                                            />
                                            <PremiumResponsivePadding
                                                paddingTop={outerPaddingTH}
                                                paddingRight={outerPaddingRH}
                                                paddingBottom={outerPaddingBH}
                                                paddingLeft={outerPaddingLH}
                                                paddingTopTablet={outerPaddingTTabletH}
                                                paddingRightTablet={outerPaddingRTabletH}
                                                paddingBottomTablet={outerPaddingBTabletH}
                                                paddingLeftTablet={outerPaddingLTabletH}
                                                paddingTopMobile={outerPaddingTMobileH}
                                                paddingRightMobile={outerPaddingRMobileH}
                                                paddingBottomMobile={outerPaddingBMobileH}
                                                paddingLeftMobile={outerPaddingLMobileH}
                                                showUnits={true}
                                                selectedUnit={outerPaddingUH}
                                                onChangePadSizeUnit={newvalue =>
                                                    setAttributes({ outerPaddingUH: newvalue })
                                                }
                                                onChangePaddingTop={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerPaddingTH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerPaddingTTabletH: newValue })
                                                        } else {
                                                            setAttributes({ outerPaddingTMobileH: newValue })
                                                        }

                                                    }

                                                }
                                                onChangePaddingRight={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerPaddingRH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerPaddingRTabletH: newValue })
                                                        } else {
                                                            setAttributes({ outerPaddingRMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangePaddingBottom={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerPaddingBH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerPaddingBTabletH: newValue })
                                                        } else {
                                                            setAttributes({ outerPaddingBMobileH: newValue })
                                                        }
                                                    }
                                                }
                                                onChangePaddingLeft={
                                                    (device, newValue) => {
                                                        if (device === "desktop") {
                                                            setAttributes({ outerPaddingLH: newValue })
                                                        } else if (device === "tablet") {
                                                            setAttributes({ outerPaddingLTabletH: newValue })
                                                        } else {
                                                            setAttributes({ outerPaddingLMobileH: newValue })
                                                        }
                                                    }
                                                } />
                                        </Fragment>)
                                }
                                return (
                                    <div>
                                        {tabout}
                                        <hr />
                                    </div>
                                );
                            }}
                        </TabPanel>
                    </PanelBody>
                    <PremiumResponsiveTabs
                        Desktop={hideDesktop}
                        Tablet={hideTablet}
                        Mobile={hideMobile}
                        onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                        onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                        onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                    />
                </InspectorControls >
            ),

            <div
                ref={this.tilt}
                id={`premium-icon-box-${block_id}`}
                className={`premium-icon-box-container-out premium-icon-box-${block_id}  ${hideDesktop} ${hideTablet} ${hideMobile}`} style={{
                    borderStyle: outerBorderType,
                    borderWidth: `${outerBorderTop}px ${outerBorderRight}px ${outerBorderBottom}px ${outerBorderLeft}px`
                    ,
                    borderRadius: borderRadius + "px",
                    borderColor: borderColor,
                    boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    backgroundColor: outerBack
                        ? hexToRgba(outerBack, outerOpacity)
                        : "transparent",
                    backgroundImage: outerImageURL ? `url(${outerImageURL})` : 'none',
                    backgroundRepeat: outerBackgroundRepeat,
                    backgroundPosition: outerBackgroundPosition,
                    backgroundSize: outerBackgroundSize,
                    backgroundAttachment: outerFixed ? "fixed" : "unset"
                }}>
                <div
                    className={`${mainClasses} premium-icon-box-flex-${iconPos} premium-icon-box-flex-ver-${iconHPos} `}
                    style={{
                        textAlign: align,
                        borderStyle: borderType,
                        borderWidth: borderIconBox
                            ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                            : borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: innerBack
                            ? hexToRgba(innerBack, innerOpacity)
                            : "transparent",
                        backgroundImage: imageURL ? `url(${imageURL})` : 'none',
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset"
                    }}
                    data-box-tilt={mouseTilt}
                    data-box-tilt-reverse={reverse}

                >

                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-icon-box-${block_id}:hover {`,
                                `background-color : ${outerBackH ? hexToRgba(outerBackH, outerOpacityH) : ""};`,
                                `background-image : ${outerImageURLH ? "url(" + outerImageURLH + ")" : ""};`,
                                `background-size : ${outerBackgroundSizeH};`,
                                `background-position : ${outerBackgroundPositionH};`,
                                `background-repeat : ${outerBackgroundRepeatH};`,
                                `background-attachment : ${outerFixedH ? "fixed" : "unset"} `,
                                `border-style : ${outerBorderTypeH} ;`,
                                `border-width : ${outerBorderTopH}px ${outerBorderRightH}px ${outerBorderBottomH}px ${outerBorderLeftH}px ;`,
                                `border-color : ${outerBorderColorH} ;`,
                                `border-radius : ${outerBorderRadiusH}px ;`,
                                `box-shadow: ${outerShadowHorizontalH}px ${outerShadowVerticalH}px ${outerShadowBlurH}px ${outerShadowColorH} ${outerShadowPositionH} !important`,
                                "}",
                                `#premium-icon-box-${block_id}:hover .premium-icon-box {`,
                                `background-color : ${innerBackH ? hexToRgba(innerBackH, innerOpacityH) : ""};`,
                                `background-image : ${imageURLH ? "url(" + imageURLH + ")" : ""};`,
                                `background-size : ${backgroundSizeH};`,
                                `background-position : ${backgroundPositionH};`,
                                `background-repeat : ${backgroundRepeatH};`,
                                `background-attachment : ${fixedH ? "fixed" : "unset"} `,
                                `border-style : ${borderTypeH} ;`,
                                `border-width : ${borderTopH}px ${iconborderRightH}px ${iconborderBottomH}px ${iconborderLeftH}px ;`,
                                `border-color : ${borderColorH} ;`,
                                `border-radius : ${borderRadiusH}px ;`,
                                `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                                "}",
                                `#premium-icon-box-${block_id} .premium-icon-box__icon {`,
                                `background-color : ${iconBackColor ? hexToRgba(iconBackColor, iconOpacity) : "transparent"} ;`,
                                `border-style : ${iconborderType} ;`,
                                `border-width : ${iconborderTop}px ${iconborderRight}px ${iconborderBottom}px ${iconborderLeft}px ;`,
                                `border-color : ${iconborderColor} ;`,
                                `border-radius : ${iconborderRadius}px ;`,
                                "}",
                                `#premium-icon-box-${block_id} .premium-icon-box__icon_wrap:hover .premium-icon-box__icon {`,
                                `background-color : ${iconBackColorH ? hexToRgba(iconBackColorH, iconOpacityH) : "transparent"} ;`,
                                `border-color: ${iconborderColorH} !important;`,
                                `border-width: ${iconborderTopH}px ${iconborderRightH}px ${iconborderBottomH}px ${iconborderLeftH}px;`,
                                `background-color: ${iconBackColorH ? hexToRgba(iconBackColorH, iconOpacityH) : iconBackColor};`,
                                `border-style: ${iconborderTypeH};`,
                                `border-radius: ${iconborderRadiusH}px;`,
                                `box-shadow: ${iconShadowHorizontalH}px ${iconShadowVerticalH}px ${iconShadowColorH} ${iconShadowPositionH};`,
                                "}",
                                `#premium-icon-box-${block_id}:hover .premium-icon-box__title {`,
                                `color : ${titleColorH} !important;`,
                                "}",
                                `#premium-icon-box-${block_id}:hover .premium-icon-box__desc {`,
                                `color : ${descColorH} !important;`,
                                "}",
                                `#premium-icon-box-${block_id} .premium-icon-box__btn_wrap:hover  .premium-icon-box__btn {`,
                                `color: ${btnColorH} !important;`,
                                `text-shadow : ${btnShadowHorizontalH}px ${btnShadowVerticalH}px ${btnShadowBlurH}px ${btnShadowColorH} !important;`,
                                `background-color : ${btnBackH ? hexToRgba(btnBackH, btnOpacityH) : ""} !important ;`,
                                `border-style : ${btnBorderTypeH} !important;`,
                                `border-width : ${btnBorderTopH}px ${btnBorderRightH}px ${btnBorderBottomH}px ${btnBorderLeftH}px !important;`,
                                `border-color : ${btnBorderColorH}!important;`,
                                `border-radius : ${btnBorderRadiusH}!important;`,
                                "}",
                                `#premium-icon-box-${block_id} .premium-button__none .premium-icon-box__btn:hover {`,
                                `background-color: ${btnHoverBack} !important;`,
                                "}",
                                `#premium-icon-box-${block_id} .premium-link-icon-before {`,
                                `margin-right : ${btnTxt ? iconSpace : 0}px ;`,
                                "}",
                                `#premium-icon-box-${block_id} .premium-link-icon-after {`,
                                `margin-left : ${btnTxt ? iconSpace : 0}px ;`,
                                "}",
                                `#premium-icon-box-${block_id} .premium-icon-box-more-icon {`,
                                `font-size : ${btnIconSize}${btnIconU} ;`,
                                "}",
                                `#premium-icon-box-${block_id} .premium-button__slide .premium-button::before {`,
                                `background-color: ${btnHoverBack} !important;`,
                                "}"
                            ].join("\n")
                        }}
                    />

                    {iconChecked && (
                        <div
                            className={`premium-icon-box__icon_wrap premium-icon-box__icon_${iconVPos}`}
                        >
                            {"icon" === iconImage && (
                                <Fragment>
                                    {iconType === "fa" && 1 != FontAwesomeEnabled && (
                                        <p className={`premium-icon-box__alert`}>
                                            {__("Please Enable Font Awesome Icons from Plugin settings")}
                                        </p>
                                    )}
                                    {(iconType === "dash" || 1 == FontAwesomeEnabled) && (
                                        <i
                                            className={`${selectedIcon} premium-icon-box__icon premium-icon__${hoverEffect}`}
                                            style={{
                                                color: iconColor,
                                                fontSize: iconSize,
                                                textShadow: `${iconShadowHorizontal}px ${iconShadowVertical}px ${iconShadowBlur}px ${iconShadowColor} ${iconShadowPosition} ;`,
                                            }}
                                        />
                                    )}
                                </Fragment>
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`premium-icon-box__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        boxShadow: `${iconShadowHorizontal}px ${iconShadowVertical}px ${iconShadowBlur}px ${iconShadowColor} ${iconShadowPosition} ;`,

                                    }}
                                />
                            )}
                            {"animation" == iconImage && lottieURL && <div className={`premium-icon-box__icon premium-icon-box-animation premium-icon__${hoverEffect}`} style={{ width: iconSize + 'px', height: iconSize + "px" }}> <Lottie
                                options={{
                                    loop: loopLottie,
                                    path: lottieURL,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid'
                                    }
                                }}
                                direction={reverseAnime}
                            /> </div>}
                        </div>
                    )}
                    <div className={`premium-icon-box-content-outer-wrap premium-icon-box-cta-${btnPosition}`}>
                        <div className={`premium-icon-box-text-wrap`}>
                            {titleChecked && titleText && (
                                <div
                                    className={`premium-icon-box__title_wrap`}
                                    style={{
                                        backgroundColor: titleBack ? hexToRgba(titleBack, titleOpacity) : "transparent",
                                        borderStyle: titleBorderType,
                                        borderWidth: `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`,
                                        borderColor: titleBorderColor,
                                        borderRadius: titleBorderRadius,
                                    }}
                                >
                                    <RichText
                                        tagName={titleTag.toLowerCase()}
                                        className={`premium-icon-box__title`}
                                        onChange={newText => setAttributes({ titleText: newText })}
                                        placeholder={__("Awesome Title")}
                                        value={titleText}
                                        style={{
                                            color: titleColor,
                                            fontFamily: titleFont,
                                            letterSpacing: titleLetter + "px",
                                            textTransform: titleUpper ? "uppercase" : "none",
                                            fontStyle: titleStyle,
                                            fontWeight: titleWeight,
                                            lineHeight: titleLine + "px",
                                            textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                        }}
                                        keepPlaceholderOnFocus
                                    />
                                    <span className={`premium-icon-box-label`} style={{
                                        color: labelColor, fontWeight: labelWeight, fontStyle: labelStyle,
                                        letterSpacing: labelLetter,
                                        textTransform: labelUpper ? "uppercase" : "unset", lineHeight: labelLine
                                    }}>
                                        {titleLabel}
                                    </span>
                                </div>
                            )}
                            {descChecked && descText && (
                                <div
                                    className={`premium-icon-box__desc_wrap`}
                                    style={{
                                        textAlign: descAlign
                                    }}
                                >
                                    <RichText
                                        tagName="p"
                                        className={`premium-icon-box__desc`}
                                        value={descText}
                                        isSelected={false}
                                        placeholder="Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
                                        onChange={newText => setAttributes({ descText: newText })}
                                        style={{
                                            color: descColor,
                                            fontFamily: descFont,
                                            lineHeight: descLine + "px",
                                            fontWeight: descWeight,
                                            textShadow: `${descShadowHorizontal}px ${descShadowVertical}px ${descShadowBlur}px ${descShadowColor}`,
                                            backgroundColor: descBackColor ? hexToRgba(descBackColor, descOpacity) : "transparent",
                                            borderStyle: descborderType,
                                            borderWidth: `${descborderTop}px ${descborderRight}px ${descborderBottom}px ${descborderLeft}px`,
                                            borderColor: descborderColor,
                                            borderRadius: descborderRadius,

                                        }}
                                        keepPlaceholderOnFocus
                                    />
                                </div>
                            )}
                        </div>
                        {btnChecked && (
                            <div
                                className={`premium-icon-box__btn_wrap ${flexClass} premium-icon-box__btn_ premium-button__${btnEffect} premium-button__${effectDir} premium-icon-box-flex-ver-${btnVerPos}`}
                            >
                                <a className={`premium-icon-box__btn premium-button`} style={{
                                    color: btnColor,
                                    backgroundColor: btnBack
                                        ? hexToRgba(btnBack, btnOpacity)
                                        : "transparent",
                                    letterSpacing: btnLetter + "px",
                                    textTransform: btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyle,
                                    fontWeight: btnWeight,
                                    borderStyle: btnBorderType,
                                    borderWidth: btnBorderIconBox
                                        ? `${btnBorderTop}px ${btnBorderRight}px ${btnBorderBottom}px ${btnBorderLeft}px`
                                        : btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                    padding: btnPadding + btnPaddingU,
                                    textShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`
                                }} rel="noopener noreferrer" target={target ? "_blank" : "_self"} href={"javascript:void(0)"}>
                                    {"before" === iconPosition && showIcon && <i className={`premium-icon-box-more-icon premium-link-icon-${iconPosition}  ${btnIcon} `} ></i>}
                                    {btnTxt ? btnText : ""}
                                    {"after" === iconPosition && showIcon && <i className={`premium-icon-box-more-icon premium-link-icon-${iconPosition} ${btnIcon} `} ></i>}
                                </a>

                            </div>
                        )}
                    </div>
                </div>
                {showBackIcon && <div className={`premium-icon-box-big premium-icon-box-big-hover`}>
                    <i className={` ${selectedIcon}  premium-icon-box-icon`} style={{ color: '#54595F' }}></i>
                </div>}
                {wholeLink && <a className={`premium-icon-box-whole-link`} href={"javascript:void(0)"} target={target ? "_blank" : "_self"}></a>}
            </div>

        ];
    }
};

export default edit;
