import classnames from "classnames";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumBorder from "../../components/premium-border";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumBackground from '../../components/premium-background';
import PremiumResponsiveMargin from '../../components/Premium-Responsive-Margin';
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import PremiumTypo from "../../components/premium-typo";
import PremiumRangeResponsive from "../../components/Premium-Range-Responsive";
import hexToRgba from "hex-to-rgba";
import PremiumTextShadow from "../../components/premium-text-shadow";


import styling from './styling';

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const {
    InspectorControls
} = wp.blockEditor

const {
    PanelBody,
    RangeControl,
    TextControl,
    ToggleControl,
    SelectControl,
    Button,
    TextareaControl,
    TabPanel
} = wp.components

const { ColorPalette, RichText } = wp.blockEditor;

class edit extends Component {
    constructor() {
        super(...arguments);
        this.handleClick = this.handleClick.bind(this)
        this.handleHeight = this.handleHeight.bind(this)
    }

    componentDidMount() {
        const { setAttributes, clientId } = this.props;
        setAttributes({ block_id: clientId });
        const $style = document.createElement("style")
        $style.setAttribute("id", "unfold-style-" + this.props.clientId.substr(0, 6))
        document.head.appendChild($style);

        this.props.setAttributes({ toggle: true })
    }

    handleClick() {
        const { unfoldDuration, foldDuration, toggle, foldHeightPx } = this.props.attributes;
        this.props.setAttributes({ toggle: !toggle })
        let unfoldElements = document.querySelectorAll('.premium-unfold-wrap');
        unfoldElements.forEach(function (unfoldElement) {
            let contentHeight = unfoldElement.querySelector(".premium-unfold-content-wrap").clientHeight;
            let wrapHeight = unfoldElement.querySelector(".premium-unfold-content").clientHeight
            if (unfoldElement.querySelector('.premium-unfold-content').classList.contains("toggled")) {
                unfoldElement.querySelector('.premium-unfold-content').style.height = contentHeight + "px";
                unfoldElement.querySelector('.premium-unfold-content').animate({ height: contentHeight }, foldDuration * 1000, "linear")

                unfoldElement.querySelector('.premium-unfold-content').classList.remove("toggled")
            } else {
                unfoldElement.querySelector('.premium-unfold-content').animate({ height: contentHeight }, foldDuration * 1000, "linear")
                unfoldElement.querySelector('.premium-unfold-content').style.height = foldHeightPx + "px";
                unfoldElement.querySelector('.premium-unfold-content').classList.add("toggled")
            }
            unfoldElement.querySelector(".premium-unfold-gradient").classList.toggle("toggled");
        })
    }

    handleHeight(value) {
        const { foldUnit, foldHeight } = this.props.attributes;
        this.props.setAttributes({ foldHeight: value })

        if (foldUnit === "percent") {
            this.props.setAttributes({ foldHeight: value })
            let outerHeight = document.querySelector('.premium-unfold-content-wrap').clientHeight;
            let perHeight = (foldHeight / 100) * outerHeight;
            this.props.setAttributes({ foldHeightPx: perHeight })
        } else {
            this.props.setAttributes({ foldHeightPx: value })
        }
    }

    render() {
        const { attributes, setAttributes, className } = this.props;
        const {
            block_id,
            showTitle,
            titleTxt,
            titleTag,
            content,
            align,
            unfoldTxt,
            foldTxt,
            showIcon,
            foldIcon,
            unfoldIcon,
            iconPosition,
            buttonSize,
            buttonPosition,
            buttonAlign,
            fadeContent,
            fadeHeight,
            fadeHeightTablet,
            fadeHeightMobile,
            foldUnit,
            foldHeight,
            foldHeightTablet,
            foldHeightMobile,
            foldHeightPxTablet,
            foldHeightPxMobile,
            foldHeightPx,
            foldDuration,
            foldSecond,
            foldEasing,
            unfoldDuration,
            unfoldSecond,
            unfoldEasing,
            boxBackgroundColor,
            boxOpacity,
            boxBackgroundId,
            boxBackgroundImg,
            boxBackgroundPosition,
            boxBackgroundRepeat,
            boxBackgroundSize,
            boxFixed,
            boxBorderType,
            boxBorderTop,
            boxBorderRight,
            boxBorderBottom,
            boxBorderLeft,
            boxBorderColor,
            boxBorderRadius,
            boxShadowColor,
            boxShadowBlur,
            boxShadowHorizontal,
            boxShadowVertical,
            boxShadowPosition,
            boxMarginType,
            boxMarginTop,
            boxMarginRight,
            boxMarginBottom,
            boxMarginLeft,
            boxMarginTopTablet,
            boxMarginRightTablet,
            boxMarginBottomTablet,
            boxMarginLeftTablet,
            boxMarginTopMobile,
            boxMarginRightMobile,
            boxMarginBottomMobile,
            boxMarginLeftMobile,
            boxPaddingTop,
            boxPaddingRight,
            boxPaddingBottom,
            boxPaddingLeft,
            boxPaddingTopTablet,
            boxPaddingRightTablet,
            boxPaddingBottomTablet,
            boxPaddingLeftTablet,
            boxPaddingTopMobile,
            boxPaddingRightMobile,
            boxPaddingBottomMobile,
            boxPaddingLeftMobile,
            boxPaddingType,
            boxBackgroundColorH,
            boxOpacityH,
            boxBackgroundIdH,
            boxBackgroundImgH,
            boxBackgroundPositionH,
            boxBackgroundRepeatH,
            boxBackgroundSizeH,
            boxFixedH,
            boxBorderTypeH,
            boxBorderTopH,
            boxBorderRightH,
            boxBorderBottomH,
            boxBorderLeftH,
            boxBorderColorH,
            boxBorderRadiusH,
            boxShadowColorH,
            boxShadowBlurH,
            boxShadowHorizontalH,
            boxShadowVerticalH,
            boxShadowPositionH,
            boxMarginTypeH,
            boxMarginTopH,
            boxMarginRightH,
            boxMarginBottomH,
            boxMarginLeftH,
            boxMarginTopTabletH,
            boxMarginRightTabletH,
            boxMarginBottomTabletH,
            boxMarginLeftTabletH,
            boxMarginTopMobileH,
            boxMarginRightMobileH,
            boxMarginBottomMobileH,
            boxMarginLeftMobileH,
            boxPaddingTopH,
            boxPaddingRightH,
            boxPaddingBottomH,
            boxPaddingLeftH,
            boxPaddingTopTabletH,
            boxPaddingRightTabletH,
            boxPaddingBottomTabletH,
            boxPaddingLeftTabletH,
            boxPaddingTopMobileH,
            boxPaddingRightMobileH,
            boxPaddingBottomMobileH,
            boxPaddingLeftMobileH,
            boxPaddingTypeH,
            titleColor,
            titleSizeUnit,
            titleSize,
            titleSizeMobile,
            titleSizeTablet,
            titleWeight,
            titleStyle,
            titleLetter,
            titleUpper,
            titleLine,
            titleBackgroundColor,
            titleOpacity,
            titleBackgroundId,
            titleBackgroundImg,
            titleBackgroundPosition,
            titleBackgroundRepeat,
            titleBackgroundSize,
            titleFixed,
            titleBorderType,
            titleBorderTop,
            titleBorderRight,
            titleBorderBottom,
            titleBorderLeft,
            titleBorderColor,
            titleBorderRadius,
            titleShadowColor,
            titleShadowBlur,
            titleShadowHorizontal,
            titleShadowVertical,
            titleShadowPosition,
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
            contentColor,
            contentSizeType,
            contentSize,
            contentSizeMobile,
            contentSizeTablet,
            contentWeight,
            contentStyle,
            contentLetter,
            contentUpper,
            contentLine,
            contentBackgroundColor,
            contentOpacity,
            contentBackgroundId,
            contentBackgroundImg,
            contentBackgroundPosition,
            contentBackgroundRepeat,
            contentBackgroundSize,
            contentFixed,
            contentBorderType,
            contentBorderTop,
            contentBorderRight,
            contentBorderBottom,
            contentBorderLeft,
            contentBorderColor,
            contentBorderRadius,
            contentShadowColor,
            contentShadowBlur,
            contentShadowHorizontal,
            contentShadowVertical,
            contentShadowPosition,
            contentMarginType,
            contentMarginTop,
            contentMarginRight,
            contentMarginBottom,
            contentMarginLeft,
            contentMarginTopTablet,
            contentMarginRightTablet,
            contentMarginBottomTablet,
            contentMarginLeftTablet,
            contentMarginTopMobile,
            contentMarginRightMobile,
            contentMarginBottomMobile,
            contentMarginLeftMobile,
            contentPaddingTop,
            contentPaddingRight,
            contentPaddingBottom,
            contentPaddingLeft,
            contentPaddingTopTablet,
            contentPaddingRightTablet,
            contentPaddingBottomTablet,
            contentPaddingLeftTablet,
            contentPaddingTopMobile,
            contentPaddingRightMobile,
            contentPaddingBottomMobile,
            contentPaddingLeftMobile,
            contentPaddingType,
            btnSizeUnit,
            btnSize,
            btnSizeTablet,
            btnSizeMobile,
            btnStyle,
            btnWeight,
            btnUpper,
            btnLine,
            btnLetter,
            btnColor,
            iconColor,
            iconColorH,
            btnBackgroundColor,
            btnOpacity,
            btnBorderType,
            btnBorderTop,
            btnBorderRight,
            btnBorderBottom,
            btnBorderLeft,
            btnBorderColor,
            btnBorderRadius,
            btnTxtShadowColor,
            btnTxtShadowBlur,
            btnTxtShadowHorizontal,
            btnTxtShadowVertical,
            iconShadowColor,
            iconShadowBlur,
            iconShadowHorizontal,
            iconShadowVertical,
            iconShadowColorH,
            iconShadowBlurH,
            iconShadowHorizontalH,
            iconShadowVerticalH,
            btnShadowColor,
            btnShadowBlur,
            btnShadowHorizontal,
            btnShadowVertical,
            btnShadowPosition,
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
            btnBackgroundColorH,
            btnOpacityH,
            btnBorderTypeH,
            btnBorderTopH,
            btnBorderRightH,
            btnBorderBottomH,
            btnBorderLeftH,
            btnBorderColorH,
            btnBorderRadiusH,
            btnTxtShadowColorH,
            btnTxtShadowBlurH,
            btnTxtShadowHorizontalH,
            btnTxtShadowVerticalH,
            btnShadowColorH,
            btnShadowBlurH,
            btnShadowHorizontalH,
            btnShadowVerticalH,
            btnShadowPositionH,
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
            fadeBackgroundColor,
            fadeOpacity,
            fadeBackgroundId,
            fadeBackgroundImg,
            fadeBackgroundPosition,
            fadeBackgroundRepeat,
            fadeBackgroundSize,
            fadeFixed,
            fadeBorderType,
            fadeBorderTop,
            fadeBorderRight,
            fadeBorderBottom,
            fadeBorderLeft,
            fadeBorderColor,
            fadeBorderRadius,
            fadePaddingTop,
            fadePaddingRight,
            fadePaddingBottom,
            fadePaddingLeft,
            fadePaddingTopTablet,
            fadePaddingRightTablet,
            fadePaddingBottomTablet,
            fadePaddingLeftTablet,
            fadePaddingTopMobile,
            fadePaddingRightMobile,
            fadePaddingBottomMobile,
            fadePaddingLeftMobile,
            fadePaddingType,
            toggle
        } = attributes;

        const TAGS = [
            {
                value: "h1",
                label: "H1"
            }, {
                value: "h2",
                label: "H2"
            },
            {
                value: "h3",
                label: "H3"
            },
            {
                value: "h4",
                label: "H4"
            },
            {
                value: "h5",
                label: "H5"
            },
            {
                value: "h6",
                label: "H6"
            }
        ];

        const mainClass = classnames(className, 'premium-unfold-wrap');


        let elementStyle = document.getElementById("unfold-style-" + this.props.clientId.substr(0, 6))

        if (null !== elementStyle && undefined !== elementStyle) {
            elementStyle.innerHTML = styling(this.props)
        }

        const button = (
            <div className={`premium-unfold-button-container`}
                style={{ textAlign: buttonAlign }}
            >
                <a id={`premium-unfold-button-${block_id}`} className={`premium-button premium-button-${buttonSize}`} onClick={this.handleClick} style={{
                    backgroundColor: btnBackgroundColor ? hexToRgba(btnBackgroundColor, btnOpacity) : "transparent",
                    borderStyle: btnBorderType,
                    borderWidth: `${btnBorderTop}px ${btnBorderRight}px ${btnBorderBottom}px ${btnBorderLeft}px`,
                    borderRadius: btnBorderRadius,
                    boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnTxtShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`

                }}>
                    {("before" === iconPosition && showIcon) && <i className={`premium-unfold-before ${toggle ? unfoldIcon : foldIcon}`} style={{ color: iconColor, textShadow: `${iconShadowHorizontal}px ${iconShadowVertical}px ${iconShadowBlur}px ${iconShadowColor}` }}></i>}

                    <span id={`premium-unfold-button-text-${block_id}`} className={"premium-unfold-button-text"} style={{ color: btnColor, textShadow: `${btnTxtShadowHorizontal}px ${btnTxtShadowVertical}px ${btnTxtShadowBlur}px ${btnTxtShadowColor}`, fontWeight: btnWeight, letterSpacing: btnLetter, lineHeight: btnLine, fontStyle: btnStyle, textTransform: btnUpper ? "uppercase" : "none" }}>{toggle ? unfoldTxt : foldTxt}</span>
                    {("after" === iconPosition && showIcon) && <i className={`premium-unfold-after ${toggle ? unfoldIcon : foldIcon}`} style={{ color: iconColor, textShadow: `${iconShadowHorizontal}px ${iconShadowVertical}px ${iconShadowBlur}px ${iconShadowColor}` }}></i>}
                </a>
            </div>
        )

        return [
            <InspectorControls>
                <PanelBody
                    title={__("Content")}
                    className="premium-panel-body"
                    initialOpen={true}
                >
                    <ToggleControl
                        label={__("Title")}
                        checked={showTitle}
                        onChange={(val) => setAttributes({ showTitle: val })}
                    />
                    {showTitle && <Fragment>
                        <TextControl
                            label={__("Title")}
                            value={titleTxt}
                            onChange={(newVal) => setAttributes({ titleTxt: newVal })}
                        />
                        <SelectControl
                            label={__('Title Heading')}
                            value={titleTag}
                            options={TAGS}
                            onChange={(newVal) => setAttributes({ titleTag: newVal })}
                        />
                    </Fragment>}
                    <TextareaControl
                        label={__("Content to Show")}
                        value={content}
                        onChange={(newVal) => setAttributes({ content: newVal })}
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
                    <Button
                        key={"justify"}
                        icon="editor-justify"
                        label="justify"
                        onClick={() => setAttributes({ align: "justify" })}
                        aria-pressed={"justify" === align}
                        isPrimary={"justify" === align}
                    />
                    <hr />

                </PanelBody>
                <PanelBody
                    title={__("Button")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <TextControl
                        label={__("Unfold Text")}
                        value={unfoldTxt}
                        onChange={(value) => setAttributes({ unfoldTxt: value })}
                    />
                    <TextControl
                        label={__("fold Text")}
                        value={foldTxt}
                        onChange={(value) => setAttributes({ foldTxt: value })}
                    />
                    <hr />
                    <ToggleControl
                        label={__("Icon")}
                        checked={showIcon}
                        onChange={(val) => setAttributes({ showIcon: val })}

                    />
                    {showIcon && <Fragment>
                        <p className="premium-editor-paragraph">{__("Fold Icon")}</p>
                        <FontIconPicker
                            icons={iconsList}
                            onChange={newIcon => setAttributes({ foldIcon: newIcon })}
                            value={foldIcon}
                            isMulti={false}
                            appendTo="body"
                            noSelectedPlaceholder={__("Fold Icon")}
                        />
                        <p className="premium-editor-paragraph">{__("Unfold Icon")}</p>
                        <FontIconPicker
                            icons={iconsList}
                            onChange={newIcon => setAttributes({ unfoldIcon: newIcon })}
                            value={unfoldIcon}
                            isMulti={false}
                            appendTo="body"
                            noSelectedPlaceholder={__("Unfold Icon")}
                        />
                    </Fragment>}
                    <SelectControl
                        label={__("Icon Position")}
                        value={iconPosition}
                        options={[
                            { label: __("Before"), value: 'before' },
                            { label: __("After"), value: 'after' }
                        ]}
                        onChange={(newVal) => setAttributes({ iconPosition: newVal })}
                    />
                    <SelectControl
                        label={__("Button Size")}
                        value={buttonSize}
                        options={[
                            { label: __("Small"), value: 'sm' },
                            { label: __("Medium"), value: 'md' },
                            { label: __("Large"), value: 'lg' },
                            { label: __("Block"), value: 'block' }
                        ]}
                        onChange={(newVal) => setAttributes({ buttonSize: newVal })}
                    />
                    <SelectControl
                        label={__("Button Position")}
                        value={buttonPosition}
                        options={[
                            { label: __("Inside"), value: 'inside' },
                            { label: __("OutSide"), value: 'outside' },

                        ]}
                        onChange={(newVal) => setAttributes({ buttonPosition: newVal })}
                    />
                    <h2> {__("Alignment")}</h2>
                    <Button
                        key={"left"}
                        icon="editor-alignleft"
                        label="Left"
                        onClick={() => setAttributes({ buttonAlign: "left" })}
                        aria-pressed={"left" === buttonAlign}
                        isPrimary={"left" === buttonAlign}
                    />
                    <Button
                        key={"center"}
                        icon="editor-aligncenter"
                        label="Right"
                        onClick={() =>
                            setAttributes({ buttonAlign: "center" })
                        }
                        aria-pressed={"center" === buttonAlign}
                        isPrimary={"center" === buttonAlign}
                    />
                    <Button
                        key={"right"}
                        icon="editor-alignright"
                        label="Right"
                        onClick={() => setAttributes({ buttonAlign: "right" })}
                        aria-pressed={"right" === buttonAlign}
                        isPrimary={"right" === buttonAlign}
                    />
                </PanelBody>
                <PanelBody
                    title={__("Fade Effect")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <ToggleControl
                        label={__("Faded Content")}
                        checked={fadeContent}
                        onChange={(val) => setAttributes({ fadeContent: val })}
                    />
                    {fadeContent && <PremiumRangeResponsive
                        range={{ value: fadeHeight, label: __("Fade Height") }}
                        rangeMobile={{ value: fadeHeightMobile, label: __("Fade Height") }}
                        rangeTablet={{ value: fadeHeightTablet, label: __("Fade Height") }}
                        onChangeDesktop={(value) => setAttributes({ fadeHeight: value })}
                        onChangeTablet={(value) => setAttributes({ fadeHeightTablet: value })}
                        onChangeMobile={(value) => setAttributes({ fadeHeightMobile: value })}
                        min={1}
                        max={400}
                    />
                    }
                </PanelBody>
                <PanelBody
                    title={__("Advanced Settings")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <SelectControl
                        label={__("Fold Height")}
                        value={foldUnit}
                        options={[
                            { label: __("Percentage"), value: "percent" },
                            { label: __("Pixels"), value: 'pixel' }]}
                        onChange={(value) => setAttributes({ foldUnit: value })}

                    />
                    {/* <RangeControl
                        label={`fold Height`}
                        value={foldHeight}
                        onChange={(newvalue) => setAttributes({ foldHeight: newvalue })}
                    /> */}

                    < RangeControl
                        label={__('Fold Height')}
                        value={foldHeight}
                        onChange={(value) => this.handleHeight(value)}
                        min={1}
                        max={foldUnit === "percent" ? 100 : 1000}
                        help={__('How much of the folded content should be shown, default is 60%')}

                    />
                    <hr />
                    <SelectControl
                        label={__('Fold Duration')}
                        value={foldDuration}
                        options={[
                            { label: __("Slow"), value: "slow" },
                            { label: __("Fast"), value: "fast" },
                            { label: __("Custom"), value: "custom" }
                        ]}
                        onChange={(value) => setAttributes({ foldDuration: value })}
                    />
                    {"custom" === foldDuration && <RangeControl
                        label={__('Number of Seconds')}
                        value={foldSecond}
                        onChange={(value) => setAttributes({ foldSecond: value })}
                    />}
                    <SelectControl
                        label={__('Fold Easing')}
                        value={foldEasing}
                        options={[
                            { label: __("Swing"), value: 'swing' },
                            { label: __("Linear"), value: 'linear' }
                        ]}
                        onChange={(value) => setAttributes({ foldEasing: value })}

                    />
                    <hr />
                    <SelectControl
                        label={__('Fold Duration')}
                        value={unfoldDuration}
                        options={[
                            { label: __("Slow"), value: "slow" },
                            { label: __("Fast"), value: "fast" },
                            { label: __("Custom"), value: "custom" }
                        ]}
                        onChange={(value) => setAttributes({ unfoldDuration: value })}
                    />
                    {"custom" === unfoldDuration && <RangeControl
                        label={__('Number of Seconds')}
                        value={unfoldSecond}
                        onChange={(value) => setAttributes({ unfoldSecond: value })}
                    />}
                    <SelectControl
                        label={__('Fold Easing')}
                        value={unfoldEasing}
                        options={[
                            { label: __("Swing"), value: 'swing' },
                            { label: __("Linear"), value: 'linear' }
                        ]}
                        onChange={(value) => setAttributes({ unfoldEasing: value })}
                    />

                </PanelBody>
                <PanelBody
                    title={__("Box Settings")}
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
                                        <Fragment>
                                            <p>{__("Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={boxBackgroundColor}
                                                onChangeColor={newvalue =>
                                                    setAttributes({
                                                        boxBackgroundColor: newvalue,
                                                    })
                                                }
                                                opacityValue={boxOpacity}
                                                onChangeOpacity={value =>
                                                    setAttributes({
                                                        boxOpacity: value,
                                                    })
                                                }
                                            />
                                        </Fragment>
                                        <PremiumBackground
                                            imageID={boxBackgroundId}
                                            imageURL={boxBackgroundImg}
                                            backgroundPosition={boxBackgroundPosition}
                                            backgroundRepeat={boxBackgroundRepeat}
                                            backgroundSize={boxBackgroundSize}
                                            fixed={boxFixed}
                                            onSelectMedia={media => {
                                                setAttributes({
                                                    boxBackgroundId: media.id,
                                                    boxBackgroundImg: media.url
                                                });
                                            }}
                                            onRemoveImage={() =>
                                                setAttributes({
                                                    boxBackgroundImg: "",
                                                    boxBackgroundId: ""
                                                })
                                            }
                                            onChangeBackPos={newValue =>
                                                setAttributes({ boxBackgroundPosition: newValue })
                                            }
                                            onchangeBackRepeat={newValue =>
                                                setAttributes({ boxBackgroundRepeat: newValue })
                                            }
                                            onChangeBackSize={newValue =>
                                                setAttributes({ boxBackgroundSize: newValue })
                                            }
                                            onChangeFixed={check => setAttributes({ boxFixed: check })}
                                        />
                                        <PremiumBorder
                                            borderType={boxBorderType}
                                            top={boxBorderTop}
                                            right={boxBorderRight}
                                            bottom={boxBorderBottom}
                                            left={boxBorderLeft}
                                            borderColor={boxBorderColor}
                                            borderRadius={boxBorderRadius}
                                            onChangeType={(newType) => setAttributes({ boxBorderType: newType })}
                                            onChangeWidth={({ top, right, bottom, left }) =>
                                                setAttributes({
                                                    boxBorderTop: top,
                                                    boxBorderRight: right,
                                                    boxBorderBottom: bottom,
                                                    boxBorderLeft: left,
                                                })
                                            }
                                            onChangeColor={(colorValue) =>
                                                setAttributes({ boxBorderColor: colorValue.hex })
                                            }
                                            onChangeRadius={(newRadius) =>
                                                setAttributes({ boxBorderRadius: newRadius })
                                            } />
                                        <PremiumBoxShadow
                                            inner={true}
                                            color={boxShadowColor}
                                            blur={boxShadowBlur}
                                            horizontal={boxShadowHorizontal}
                                            vertical={boxShadowVertical}
                                            position={boxShadowPosition}
                                            onChangeColor={newColor =>
                                                setAttributes({
                                                    boxShadowColor: newColor.hex
                                                })
                                            }
                                            onChangeBlur={newBlur =>
                                                setAttributes({
                                                    boxShadowBlur: newBlur
                                                })
                                            }
                                            onChangehHorizontal={newValue =>
                                                setAttributes({
                                                    boxShadowHorizontal: newValue
                                                })
                                            }
                                            onChangeVertical={newValue =>
                                                setAttributes({
                                                    boxShadowVertical: newValue
                                                })
                                            }
                                            onChangePosition={newValue =>
                                                setAttributes({
                                                    boxShadowPosition: newValue
                                                })
                                            } />
                                        <PremiumResponsiveMargin
                                            directions={["all"]}
                                            showUnits={true}
                                            selectedUnit={boxMarginType}
                                            marginTop={boxMarginTop}
                                            marginRight={boxMarginRight}
                                            marginBottom={boxMarginBottom}
                                            marginLeft={boxMarginLeft}
                                            marginTopTablet={boxMarginTopTablet}
                                            marginRightTablet={boxMarginRightTablet}
                                            marginBottomTablet={boxMarginBottomTablet}
                                            marginLeftTablet={boxMarginLeftTablet}
                                            marginTopMobile={boxMarginTopMobile}
                                            marginRightMobile={boxMarginRightMobile}
                                            marginBottomMobile={boxMarginBottomMobile}
                                            marginLeftMobile={boxMarginLeftMobile}
                                            onChangeMarginTop={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxMarginTop: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxMarginTopTablet: newValue })
                                                    } else {
                                                        setAttributes({ boxMarginTopMobile: newValue })
                                                    }
                                                }
                                            }
                                            onChangeMarginRight={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxMarginRight: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxMarginRightTablet: newValue })
                                                    } else {
                                                        setAttributes({ boxMarginRightMobile: newValue })
                                                    }
                                                }
                                            }
                                            onChangeMarginBottom={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxMarginBottom: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxMarginBottomTablet: newValue })
                                                    } else {
                                                        setAttributes({ boxMarginBottomMobile: newValue })
                                                    }
                                                }
                                            }
                                            onChangeMarginLeft={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxMarginLeft: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxMarginLeftTablet: newValue })
                                                    } else {
                                                        setAttributes({ boxMarginLeftMobile: newValue })
                                                    }
                                                }
                                            }
                                            onChangeMarSizeUnit={(newvalue) => setAttributes({ boxMarginType: newvalue })}
                                        />
                                        <PremiumResponsivePadding
                                            paddingTop={boxPaddingTop}
                                            paddingRight={boxPaddingRight}
                                            paddingBottom={boxPaddingBottom}
                                            paddingLeft={boxPaddingLeft}
                                            paddingTopTablet={boxPaddingTopTablet}
                                            paddingRightTablet={boxPaddingRightTablet}
                                            paddingBottomTablet={boxPaddingBottomTablet}
                                            paddingLeftTablet={boxPaddingLeftTablet}
                                            paddingTopMobile={boxPaddingTopMobile}
                                            paddingRightMobile={boxPaddingRightMobile}
                                            paddingBottomMobile={boxPaddingBottomMobile}
                                            paddingLeftMobile={boxPaddingLeftMobile}
                                            showUnits={true}
                                            selectedUnit={boxPaddingType}
                                            onChangePadSizeUnit={newvalue =>
                                                setAttributes({ boxPaddingType: newvalue })
                                            }
                                            onChangePaddingTop={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxPaddingTop: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxPaddingTopTablet: newValue })
                                                    } else {
                                                        setAttributes({ boxPaddingTopMobile: newValue })
                                                    }

                                                }

                                            }
                                            onChangePaddingRight={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxPaddingRight: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxPaddingRightTablet: newValue })
                                                    } else {
                                                        setAttributes({ boxPaddingRightMobile: newValue })
                                                    }
                                                }
                                            }
                                            onChangePaddingBottom={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxPaddingBottom: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxPaddingBottomTablet: newValue })
                                                    } else {
                                                        setAttributes({ boxPaddingBottomMobile: newValue })
                                                    }
                                                }
                                            }
                                            onChangePaddingLeft={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxPaddingLeft: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxPaddingLeftTablet: newValue })
                                                    } else {
                                                        setAttributes({ boxPaddingLeftMobile: newValue })
                                                    }
                                                }
                                            }
                                        />

                                    </Fragment>
                                );
                            }
                            if ("hover" === tab.name) {
                                tabout = (
                                    <Fragment>
                                        <Fragment>
                                            <p>{__("Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={boxBackgroundColorH}
                                                onChangeColor={newvalue =>
                                                    setAttributes({
                                                        boxBackgroundColorH: newvalue,
                                                    })
                                                }
                                                opacityValue={boxOpacityH}
                                                onChangeOpacity={value =>
                                                    setAttributes({
                                                        boxOpacityH: value,
                                                    })
                                                }
                                            />
                                        </Fragment>
                                        <PremiumBackground
                                            imageID={boxBackgroundIdH}
                                            imageURL={boxBackgroundImgH}
                                            backgroundPosition={boxBackgroundPositionH}
                                            backgroundRepeat={boxBackgroundRepeatH}
                                            backgroundSize={boxBackgroundSizeH}
                                            fixed={boxFixedH}
                                            onSelectMedia={media => {
                                                setAttributes({
                                                    boxBackgroundIdH: media.id,
                                                    boxBackgroundImgH: media.url
                                                });
                                            }}
                                            onRemoveImage={() =>
                                                setAttributes({
                                                    boxBackgroundImgH: "",
                                                    boxBackgroundIdH: ""
                                                })
                                            }
                                            onChangeBackPos={newValue =>
                                                setAttributes({ boxBackgroundPositionH: newValue })
                                            }
                                            onchangeBackRepeat={newValue =>
                                                setAttributes({ boxBackgroundRepeatH: newValue })
                                            }
                                            onChangeBackSize={newValue =>
                                                setAttributes({ boxBackgroundSizeH: newValue })
                                            }
                                            onChangeFixed={check => setAttributes({ boxFixedH: check })}
                                        />
                                        <PremiumBorder
                                            borderType={boxBorderTypeH}
                                            top={boxBorderTopH}
                                            right={boxBorderRightH}
                                            bottom={boxBorderBottomH}
                                            left={boxBorderLeftH}
                                            borderColor={boxBorderColorH}
                                            borderRadius={boxBorderRadiusH}
                                            onChangeType={(newType) => setAttributes({ boxBorderTypeH: newType })}
                                            onChangeWidth={({ top, right, bottom, left }) =>
                                                setAttributes({
                                                    boxBorderTopH: top,
                                                    boxBorderRightH: right,
                                                    boxBorderBottomH: bottom,
                                                    boxBorderLeftH: left,
                                                })
                                            }
                                            onChangeColor={(colorValue) =>
                                                setAttributes({ boxBorderColorH: colorValue.hex })
                                            }
                                            onChangeRadius={(newRadius) =>
                                                setAttributes({ boxBorderRadiusH: newRadius })
                                            } />
                                        <PremiumBoxShadow
                                            inner={true}
                                            color={boxShadowColorH}
                                            blur={boxShadowBlurH}
                                            horizontal={boxShadowHorizontalH}
                                            vertical={boxShadowVerticalH}
                                            position={boxShadowPositionH}
                                            onChangeColor={newColor =>
                                                setAttributes({
                                                    boxShadowColorH: newColor.hex
                                                })
                                            }
                                            onChangeBlur={newBlur =>
                                                setAttributes({
                                                    boxShadowBlurH: newBlur
                                                })
                                            }
                                            onChangehHorizontal={newValue =>
                                                setAttributes({
                                                    boxShadowHorizontalH: newValue
                                                })
                                            }
                                            onChangeVertical={newValue =>
                                                setAttributes({
                                                    boxShadowVerticalH: newValue
                                                })
                                            }
                                            onChangePosition={newValue =>
                                                setAttributes({
                                                    boxShadowPositionH: newValue
                                                })
                                            } />
                                        <PremiumResponsiveMargin
                                            directions={["all"]}
                                            showUnits={true}
                                            selectedUnit={boxMarginTypeH}
                                            marginTop={boxMarginTopH}
                                            marginRight={boxMarginRightH}
                                            marginBottom={boxMarginBottomH}
                                            marginLeft={boxMarginLeftH}
                                            marginTopTablet={boxMarginTopTabletH}
                                            marginRightTablet={boxMarginRightTabletH}
                                            marginBottomTablet={boxMarginBottomTabletH}
                                            marginLeftTablet={boxMarginLeftTabletH}
                                            marginTopMobile={boxMarginTopMobileH}
                                            marginRightMobile={boxMarginRightMobileH}
                                            marginBottomMobile={boxMarginBottomMobileH}
                                            marginLeftMobile={boxMarginLeftMobileH}
                                            onChangeMarginTop={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxMarginTopH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxMarginTopTabletH: newValue })
                                                    } else {
                                                        setAttributes({ boxMarginTopMobileH: newValue })
                                                    }
                                                }
                                            }
                                            onChangeMarginRight={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxMarginRightH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxMarginRightTabletH: newValue })
                                                    } else {
                                                        setAttributes({ boxMarginRightMobileH: newValue })
                                                    }
                                                }
                                            }
                                            onChangeMarginBottom={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxMarginBottomH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxMarginBottomTabletH: newValue })
                                                    } else {
                                                        setAttributes({ boxMarginBottomMobileH: newValue })
                                                    }
                                                }
                                            }
                                            onChangeMarginLeft={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxMarginLeftH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxMarginLeftTabletH: newValue })
                                                    } else {
                                                        setAttributes({ boxMarginLeftMobileH: newValue })
                                                    }
                                                }
                                            }
                                            onChangeMarSizeUnit={(newvalue) => setAttributes({ boxMarginTypeH: newvalue })}
                                        />
                                        <PremiumResponsivePadding
                                            paddingTop={boxPaddingTopH}
                                            paddingRight={boxPaddingRightH}
                                            paddingBottom={boxPaddingBottomH}
                                            paddingLeft={boxPaddingLeftH}
                                            paddingTopTablet={boxPaddingTopTabletH}
                                            paddingRightTablet={boxPaddingRightTabletH}
                                            paddingBottomTablet={boxPaddingBottomTabletH}
                                            paddingLeftTablet={boxPaddingLeftTabletH}
                                            paddingTopMobile={boxPaddingTopMobileH}
                                            paddingRightMobile={boxPaddingRightMobileH}
                                            paddingBottomMobile={boxPaddingBottomMobileH}
                                            paddingLeftMobile={boxPaddingLeftMobileH}
                                            showUnits={true}
                                            selectedUnit={boxPaddingTypeH}
                                            onChangePadSizeUnit={newvalue =>
                                                setAttributes({ boxPaddingTypeH: newvalue })
                                            }
                                            onChangePaddingTop={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxPaddingTopH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxPaddingTopTabletH: newValue })
                                                    } else {
                                                        setAttributes({ boxPaddingTopMobileH: newValue })
                                                    }

                                                }

                                            }
                                            onChangePaddingRight={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxPaddingRightH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxPaddingRightTabletH: newValue })
                                                    } else {
                                                        setAttributes({ boxPaddingRightMobileH: newValue })
                                                    }
                                                }
                                            }
                                            onChangePaddingBottom={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxPaddingBottomH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxPaddingBottomTabletH: newValue })
                                                    } else {
                                                        setAttributes({ boxPaddingBottomMobileH: newValue })
                                                    }
                                                }
                                            }
                                            onChangePaddingLeft={
                                                (device, newValue) => {
                                                    if (device === "desktop") {
                                                        setAttributes({ boxPaddingLeftH: newValue })
                                                    } else if (device === "tablet") {
                                                        setAttributes({ boxPaddingLeftTabletH: newValue })
                                                    } else {
                                                        setAttributes({ boxPaddingLeftMobileH: newValue })
                                                    }
                                                }
                                            }
                                        />
                                    </Fragment>
                                );
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
                    title={__("Title Style")}
                    className="premium-panel-body"
                    initialOpen={false}>
                    <Fragment>
                        <p>{__('Color')}</p>
                        <ColorPalette
                            value={titleColor}
                            onChange={(value) => setAttributes({ titleColor: value })} />
                    </Fragment>
                    <PremiumTypo
                        components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
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
                        upper={titleUpper}
                        line={titleLine}
                        onChangeSize={newSize => setAttributes({ titleSize: newSize })}
                        onChangeSizeTablet={newSize => setAttributes({ titleSizeTablet: newSize })}
                        onChangeSizeMobile={newSize => setAttributes({ titleSizeMobile: newSize })}
                        onChangeWeight={newWeight =>
                            setAttributes({ titleWeight: newWeight })
                        }
                        onChangeLine={newValue => setAttributes({ titleLine: newValue })}
                        onChangeSize={newSize => setAttributes({ titleSize: newSize })}
                        onChangeStyle={newStyle => setAttributes({ titleStyle: newStyle })}
                        onChangeSpacing={newValue =>
                            setAttributes({ titleLetter: newValue })
                        }
                        onChangeUpper={check => setAttributes({ titleUpper: check })}
                    />
                    <PremiumBackground
                        type="color"
                        colorValue={titleBackgroundColor}
                        onChangeColor={newvalue =>
                            setAttributes({
                                titleBackgroundColor: newvalue,
                            })
                        }
                        opacityValue={titleOpacity}
                        onChangeOpacity={value =>
                            setAttributes({
                                titleOpacity: value,
                            })
                        }
                    />
                    <PremiumBackground
                        imageID={titleBackgroundId}
                        imageURL={titleBackgroundImg}
                        backgroundPosition={titleBackgroundPosition}
                        backgroundRepeat={titleBackgroundRepeat}
                        backgroundSize={titleBackgroundSize}
                        fixed={titleFixed}
                        onSelectMedia={media => {
                            setAttributes({
                                titleBackgroundId: media.id,
                                titleBackgroundImg: media.url
                            });
                        }}
                        onRemoveImage={() =>
                            setAttributes({
                                titleBackgroundImg: "",
                                titleBackgroundId: ""
                            })
                        }
                        onChangeBackPos={newValue =>
                            setAttributes({ titleBackgroundPosition: newValue })
                        }
                        onchangeBackRepeat={newValue =>
                            setAttributes({ titleBackgroundRepeat: newValue })
                        }
                        onChangeBackSize={newValue =>
                            setAttributes({ titleBackgroundSize: newValue })
                        }
                        onChangeFixed={check => setAttributes({ titleFixed: check })} />
                    <PremiumBorder
                        borderType={titleBorderType}
                        top={titleBorderTop}
                        right={titleBorderRight}
                        bottom={titleBorderBottom}
                        left={titleBorderLeft}
                        borderColor={titleBorderColor}
                        borderRadius={titleBorderRadius}
                        onChangeType={(newType) => setAttributes({ titleBorderType: newType })}
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
                        onChangeRadius={(newRadius) =>
                            setAttributes({ titleBorderRadius: newRadius })
                        } />
                    <PremiumBoxShadow
                        inner={true}
                        color={titleShadowColor}
                        blur={titleShadowBlur}
                        horizontal={titleShadowHorizontal}
                        vertical={titleShadowVertical}
                        position={titleShadowPosition}
                        onChangeColor={newColor =>
                            setAttributes({
                                titleShadowColor: newColor.hex
                            })
                        }
                        onChangeBlur={newBlur =>
                            setAttributes({
                                titleShadowBlur: newBlur
                            })
                        }
                        onChangehHorizontal={newValue =>
                            setAttributes({
                                titleShadowHorizontal: newValue
                            })
                        }
                        onChangeVertical={newValue =>
                            setAttributes({
                                titleShadowVertical: newValue
                            })
                        }
                        onChangePosition={newValue =>
                            setAttributes({
                                titleShadowPosition: newValue
                            })
                        } />
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

                </PanelBody>
                <PanelBody
                    title={__("Content Style")}
                    className="premium-panel-body"
                    initialOpen={false}>
                    <Fragment>
                        <p>{__('Color')}</p>
                        <ColorPalette
                            value={contentColor}
                            onChange={(value) => setAttributes({ contentColor: value })} />
                    </Fragment>
                    <PremiumTypo
                        components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
                        setAttributes={setAttributes}
                        fontSizeType={{
                            value: contentSizeType,
                            label: __("contentSizeUnit"),
                        }}
                        fontSize={{
                            value: contentSize,
                            label: __("contentSize"),
                        }}
                        fontSizeMobile={{
                            value: contentSizeMobile,
                            label: __("contentSizeMobile"),
                        }}
                        fontSizeTablet={{
                            value: contentSizeTablet,
                            label: __("contentSizeTablet"),
                        }}
                        weight={contentWeight}
                        style={contentStyle}
                        spacing={contentLetter}
                        upper={contentUpper}
                        line={contentLine}
                        onChangeSize={newSize => setAttributes({ contentSize: newSize })}
                        onChangeSizeTablet={newSize => setAttributes({ contentSizeTablet: newSize })}
                        onChangeSizeMobile={newSize => setAttributes({ contentSizeMobile: newSize })}
                        onChangeWeight={newWeight =>
                            setAttributes({ contentWeight: newWeight })
                        }
                        onChangeLine={newValue => setAttributes({ contentLine: newValue })}
                        onChangeSize={newSize => setAttributes({ contentSize: newSize })}
                        onChangeStyle={newStyle => setAttributes({ contentStyle: newStyle })}
                        onChangeSpacing={newValue =>
                            setAttributes({ contentLetter: newValue })
                        }
                        onChangeUpper={check => setAttributes({ contentUpper: check })}
                    />
                    <PremiumBackground
                        type="color"
                        colorValue={contentBackgroundColor}
                        onChangeColor={newvalue =>
                            setAttributes({
                                contentBackgroundColor: newvalue,
                            })
                        }
                        opacityValue={contentOpacity}
                        onChangeOpacity={value =>
                            setAttributes({
                                contentOpacity: value,
                            })
                        }
                    />
                    <PremiumBackground
                        imageID={contentBackgroundId}
                        imageURL={contentBackgroundImg}
                        backgroundPosition={contentBackgroundPosition}
                        backgroundRepeat={contentBackgroundRepeat}
                        backgroundSize={contentBackgroundSize}
                        fixed={contentFixed}
                        onSelectMedia={media => {
                            setAttributes({
                                contentBackgroundId: media.id,
                                contentBackgroundImg: media.url
                            });
                        }}
                        onRemoveImage={() =>
                            setAttributes({
                                contentBackgroundImg: "",
                                contentBackgroundId: ""
                            })
                        }
                        onChangeBackPos={newValue =>
                            setAttributes({ contentBackgroundPosition: newValue })
                        }
                        onchangeBackRepeat={newValue =>
                            setAttributes({ contentBackgroundRepeat: newValue })
                        }
                        onChangeBackSize={newValue =>
                            setAttributes({ contentBackgroundSize: newValue })
                        }
                        onChangeFixed={check => setAttributes({ contentFixed: check })} />
                    <PremiumBorder
                        borderType={contentBorderType}
                        top={contentBorderTop}
                        right={contentBorderRight}
                        bottom={contentBorderBottom}
                        left={contentBorderLeft}
                        borderColor={contentBorderColor}
                        borderRadius={contentBorderRadius}
                        onChangeType={(newType) => setAttributes({ contentBorderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                contentBorderTop: top,
                                contentBorderRight: right,
                                contentBorderBottom: bottom,
                                contentBorderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) =>
                            setAttributes({ contentBorderColor: colorValue.hex })
                        }
                        onChangeRadius={(newRadius) =>
                            setAttributes({ contentBorderRadius: newRadius })
                        } />
                    <PremiumBoxShadow
                        inner={true}
                        color={contentShadowColor}
                        blur={contentShadowBlur}
                        horizontal={contentShadowHorizontal}
                        vertical={contentShadowVertical}
                        position={contentShadowPosition}
                        onChangeColor={newColor =>
                            setAttributes({
                                contentShadowColor: newColor.hex
                            })
                        }
                        onChangeBlur={newBlur =>
                            setAttributes({
                                contentShadowBlur: newBlur
                            })
                        }
                        onChangehHorizontal={newValue =>
                            setAttributes({
                                contentShadowHorizontal: newValue
                            })
                        }
                        onChangeVertical={newValue =>
                            setAttributes({
                                contentShadowVertical: newValue
                            })
                        }
                        onChangePosition={newValue =>
                            setAttributes({
                                contentShadowPosition: newValue
                            })
                        } />
                    <PremiumResponsiveMargin
                        directions={["all"]}
                        showUnits={true}
                        selectedUnit={contentMarginType}
                        marginTop={contentMarginTop}
                        marginRight={contentMarginRight}
                        marginBottom={contentMarginBottom}
                        marginLeft={contentMarginLeft}
                        marginTopTablet={contentMarginTopTablet}
                        marginRightTablet={contentMarginRightTablet}
                        marginBottomTablet={contentMarginBottomTablet}
                        marginLeftTablet={contentMarginLeftTablet}
                        marginTopMobile={contentMarginTopMobile}
                        marginRightMobile={contentMarginRightMobile}
                        marginBottomMobile={contentMarginBottomMobile}
                        marginLeftMobile={contentMarginLeftMobile}
                        onChangeMarginTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ contentMarginTop: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ contentMarginTopTablet: newValue })
                                } else {
                                    setAttributes({ contentMarginTopMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ contentMarginRight: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ contentMarginRightTablet: newValue })
                                } else {
                                    setAttributes({ contentMarginRightMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ contentMarginBottom: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ contentMarginBottomTablet: newValue })
                                } else {
                                    setAttributes({ contentMarginBottomMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ contentMarginLeft: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ contentMarginLeftTablet: newValue })
                                } else {
                                    setAttributes({ contentMarginLeftMobile: newValue })
                                }
                            }
                        }
                        onChangeMarSizeUnit={(newvalue) => setAttributes({ contentMarginType: newvalue })}
                    />
                    <PremiumResponsivePadding
                        paddingTop={contentPaddingTop}
                        paddingRight={contentPaddingRight}
                        paddingBottom={contentPaddingBottom}
                        paddingLeft={contentPaddingLeft}
                        paddingTopTablet={contentPaddingTopTablet}
                        paddingRightTablet={contentPaddingRightTablet}
                        paddingBottomTablet={contentPaddingBottomTablet}
                        paddingLeftTablet={contentPaddingLeftTablet}
                        paddingTopMobile={contentPaddingTopMobile}
                        paddingRightMobile={contentPaddingRightMobile}
                        paddingBottomMobile={contentPaddingBottomMobile}
                        paddingLeftMobile={contentPaddingLeftMobile}
                        showUnits={true}
                        selectedUnit={contentPaddingType}
                        onChangePadSizeUnit={newvalue =>
                            setAttributes({ contentPaddingType: newvalue })
                        }
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ contentPaddingTop: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ contentPaddingTopTablet: newValue })
                                } else {
                                    setAttributes({ contentPaddingTopMobile: newValue })
                                }

                            }

                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ contentPaddingRight: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ contentPaddingRightTablet: newValue })
                                } else {
                                    setAttributes({ contentPaddingRightMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ contentPaddingBottom: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ contentPaddingBottomTablet: newValue })
                                } else {
                                    setAttributes({ contentPaddingBottomMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ contentPaddingLeft: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ contentPaddingLeftTablet: newValue })
                                } else {
                                    setAttributes({ contentPaddingLeftMobile: newValue })
                                }
                            }
                        }
                    />
                </PanelBody>
                <PanelBody
                    title={__("Button")}
                    className="premium-panel-body"
                    initialOpen={false}>
                    <PremiumTypo
                        components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
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
                        line={btnLine}
                        onChangeSize={newSize => setAttributes({ btnSize: newSize })}
                        onChangeSizeTablet={newSize => setAttributes({ btnSizeTablet: newSize })}
                        onChangeSizeMobile={newSize => setAttributes({ btnSizeMobile: newSize })}
                        onChangeWeight={newWeight =>
                            setAttributes({ btnWeight: newWeight })
                        }
                        onChangeLine={newValue => setAttributes({ btnLine: newValue })}
                        onChangeSize={newSize => setAttributes({ btnSize: newSize })}
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
                                        <Fragment>
                                            <p>{__("Color")}</p>
                                            <ColorPalette
                                                value={btnColor}
                                                onChange={(value) => setAttributes({ btnColor: value })}
                                            />
                                        </Fragment>
                                        {showIcon && <Fragment>
                                            <p>{__(" Icon Color")}</p>
                                            <ColorPalette
                                                value={iconColor}
                                                onChange={(value) => setAttributes({ iconColor: value })}
                                            />
                                        </Fragment>}
                                        <Fragment>
                                            <p>{__("Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={btnBackgroundColor}
                                                onChangeColor={newvalue =>
                                                    setAttributes({
                                                        btnBackgroundColor: newvalue,
                                                    })
                                                }
                                                opacityValue={btnOpacity}
                                                onChangeOpacity={value =>
                                                    setAttributes({
                                                        btnOpacity: value,
                                                    })
                                                }
                                            />
                                        </Fragment>

                                        <PremiumBorder
                                            borderType={btnBorderType}
                                            top={btnBorderTop}
                                            right={btnBorderRight}
                                            bottom={btnBorderBottom}
                                            left={btnBorderLeft}
                                            borderColor={btnBorderColor}
                                            borderRadius={btnBorderRadius}
                                            onChangeType={(newType) => setAttributes({ btnBorderType: newType })}
                                            onChangeWidth={({ top, right, bottom, left }) =>
                                                setAttributes({
                                                    btnBorderTop: top,
                                                    btnBorderRight: right,
                                                    btnBorderBottom: bottom,
                                                    btnBorderLeft: left,
                                                })
                                            }
                                            onChangeColor={(colorValue) =>
                                                setAttributes({ btnBorderColor: colorValue.hex })
                                            }
                                            onChangeRadius={(newRadius) =>
                                                setAttributes({ btnBorderRadius: newRadius })
                                            } />

                                        { showIcon && <PremiumTextShadow
                                            color={iconShadowColor}
                                            blur={iconShadowBlur}
                                            horizontal={iconShadowHorizontal}
                                            vertical={iconShadowVertical}
                                            onChangeColor={newColor =>
                                                setAttributes({ iconShadowColor: newColor.hex })
                                            }
                                            onChangeBlur={newBlur =>
                                                setAttributes({ iconShadowBlur: newBlur })
                                            }
                                            onChangehHorizontal={newValue =>
                                                setAttributes({ iconShadowHorizontal: newValue })
                                            }
                                            onChangeVertical={newValue =>
                                                setAttributes({ iconShadowVertical: newValue })
                                            }
                                        />}

                                        <PremiumTextShadow
                                            color={btnTxtShadowColor}
                                            blur={btnTxtShadowBlur}
                                            horizontal={btnTxtShadowHorizontal}
                                            vertical={btnTxtShadowVertical}
                                            onChangeColor={newColor =>
                                                setAttributes({ btnTxtShadowColor: newColor.hex })
                                            }
                                            onChangeBlur={newBlur =>
                                                setAttributes({ btnTxtShadowBlur: newBlur })
                                            }
                                            onChangehHorizontal={newValue =>
                                                setAttributes({ btnTxtShadowHorizontal: newValue })
                                            }
                                            onChangeVertical={newValue =>
                                                setAttributes({ btnTxtShadowVertical: newValue })
                                            }
                                        />
                                        <PremiumBoxShadow
                                            inner={true}
                                            color={btnShadowColor}
                                            blur={btnShadowBlur}
                                            horizontal={btnShadowHorizontal}
                                            vertical={btnShadowVertical}
                                            position={btnShadowPosition}
                                            onChangeColor={newColor =>
                                                setAttributes({
                                                    btnShadowColor: newColor.hex
                                                })
                                            }
                                            onChangeBlur={newBlur =>
                                                setAttributes({
                                                    btnShadowBlur: newBlur
                                                })
                                            }
                                            onChangehHorizontal={newValue =>
                                                setAttributes({
                                                    btnShadowHorizontal: newValue
                                                })
                                            }
                                            onChangeVertical={newValue =>
                                                setAttributes({
                                                    btnShadowVertical: newValue
                                                })
                                            }
                                            onChangePosition={newValue =>
                                                setAttributes({
                                                    btnShadowPosition: newValue
                                                })
                                            } />
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
                                            onChangeMarSizeUnit={(newvalue) => setAttributes({ btnMarginType: newvalue })}
                                        />
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
                                            }
                                        />
                                    </Fragment>
                                );
                            }
                            if ("hover" === tab.name) {
                                tabout = (
                                    <Fragment>
                                        <Fragment>
                                            <p>{__("Color")}</p>
                                            <ColorPalette
                                                value={btnColorH}
                                                onChange={(value) => setAttributes({ btnColorH: value })}
                                            />
                                        </Fragment>
                                        {showIcon && <Fragment>
                                            <p>{__(" Icon Color")}</p>
                                            <ColorPalette
                                                value={iconColorH}
                                                onChange={(value) => setAttributes({ iconColorH: value })}
                                            />
                                        </Fragment>}
                                        <Fragment>
                                            <p>{__("Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={btnBackgroundColorH}
                                                onChangeColor={newvalue =>
                                                    setAttributes({
                                                        btnBackgroundColorH: newvalue,
                                                    })
                                                }
                                                opacityValue={btnOpacityH}
                                                onChangeOpacity={value =>
                                                    setAttributes({
                                                        btnOpacityH: value,
                                                    })
                                                }
                                            />
                                        </Fragment>
                                        <PremiumBorder
                                            borderType={btnBorderTypeH}
                                            top={btnBorderTopH}
                                            right={btnBorderRightH}
                                            bottom={btnBorderBottomH}
                                            left={btnBorderLeftH}
                                            borderColor={btnBorderColorH}
                                            borderRadius={btnBorderRadiusH}
                                            onChangeType={(newType) => setAttributes({ btnBorderTypeH: newType })}
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
                                            onChangeRadius={(newRadius) =>
                                                setAttributes({ btnBorderRadiusH: newRadius })
                                            } />
                                        { showIcon && <PremiumTextShadow
                                            color={iconShadowColorH}
                                            blur={iconShadowBlurH}
                                            horizontal={iconShadowHorizontalH}
                                            vertical={iconShadowVerticalH}
                                            onChangeColor={newColor =>
                                                setAttributes({ iconShadowColorH: newColor.hex })
                                            }
                                            onChangeBlur={newBlur =>
                                                setAttributes({ iconShadowBlurH: newBlur })
                                            }
                                            onChangehHorizontal={newValue =>
                                                setAttributes({ iconShadowHorizontalH: newValue })
                                            }
                                            onChangeVertical={newValue =>
                                                setAttributes({ iconShadowVerticalH: newValue })
                                            }
                                        />}
                                        <PremiumTextShadow
                                            color={btnTxtShadowColorH}
                                            blur={btnTxtShadowBlurH}
                                            horizontal={btnTxtShadowHorizontalH}
                                            vertical={btnTxtShadowVerticalH}
                                            onChangeColor={newColor =>
                                                setAttributes({ btnTxtShadowColorH: newColor.hex })
                                            }
                                            onChangeBlur={newBlur =>
                                                setAttributes({ btnTxtShadowBlurH: newBlur })
                                            }
                                            onChangehHorizontal={newValue =>
                                                setAttributes({ btnTxtShadowHorizontalH: newValue })
                                            }
                                            onChangeVertical={newValue =>
                                                setAttributes({ btnTxtShadowVerticalH: newValue })
                                            }
                                        />
                                        <PremiumBoxShadow
                                            inner={true}
                                            color={btnShadowColorH}
                                            blur={btnShadowBlurH}
                                            horizontal={btnShadowHorizontalH}
                                            vertical={btnShadowVerticalH}
                                            position={btnShadowPositionH}
                                            onChangeColor={newColor =>
                                                setAttributes({
                                                    btnShadowColorH: newColor.hex
                                                })
                                            }
                                            onChangeBlur={newBlur =>
                                                setAttributes({
                                                    btnShadowBlurH: newBlur
                                                })
                                            }
                                            onChangehHorizontal={newValue =>
                                                setAttributes({
                                                    btnShadowHorizontalH: newValue
                                                })
                                            }
                                            onChangeVertical={newValue =>
                                                setAttributes({
                                                    btnShadowVerticalH: newValue
                                                })
                                            }
                                            onChangePosition={newValue =>
                                                setAttributes({
                                                    btnShadowPositionH: newValue
                                                })
                                            } />
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
                                            onChangeMarSizeUnit={(newvalue) => setAttributes({ btnMarginTypeH: newvalue })}
                                        />
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
                                            }
                                        />

                                    </Fragment>
                                );
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
                {fadeContent && <PanelBody
                    title={__("Fade Color")}
                    className="premium-panel-body"
                    initialOpen={false}>
                    <Fragment>
                        <p>{__("Background Color")}</p>
                        <PremiumBackground
                            type="color"
                            colorValue={fadeBackgroundColor}
                            onChangeColor={newvalue =>
                                setAttributes({
                                    fadeBackgroundColor: newvalue,
                                })
                            }
                            opacityValue={fadeOpacity}
                            onChangeOpacity={value =>
                                setAttributes({
                                    fadeOpacity: value,
                                })
                            }
                        />
                    </Fragment>
                    <PremiumBackground
                        imageID={fadeBackgroundId}
                        imageURL={fadeBackgroundImg}
                        backgroundPosition={fadeBackgroundPosition}
                        backgroundRepeat={fadeBackgroundRepeat}
                        backgroundSize={fadeBackgroundSize}
                        fixed={fadeFixed}
                        onSelectMedia={media => {
                            setAttributes({
                                fadeBackgroundId: media.id,
                                fadeBackgroundImg: media.url
                            });
                        }}
                        onRemoveImage={() =>
                            setAttributes({
                                fadeBackgroundImg: "",
                                fadeBackgroundId: ""
                            })
                        }
                        onChangeBackPos={newValue =>
                            setAttributes({ fadeBackgroundPosition: newValue })
                        }
                        onchangeBackRepeat={newValue =>
                            setAttributes({ fadeBackgroundRepeat: newValue })
                        }
                        onChangeBackSize={newValue =>
                            setAttributes({ fadeBackgroundSize: newValue })
                        }
                        onChangeFixed={check => setAttributes({ fadeFixed: check })}
                    />
                    <PremiumBorder
                        borderType={fadeBorderType}
                        top={fadeBorderTop}
                        right={fadeBorderRight}
                        bottom={fadeBorderBottom}
                        left={fadeBorderLeft}
                        borderColor={fadeBorderColor}
                        borderRadius={fadeBorderRadius}
                        onChangeType={(newType) => setAttributes({ fadeBorderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                fadeBorderTop: top,
                                fadeBorderRight: right,
                                fadeBorderBottom: bottom,
                                fadeBorderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) =>
                            setAttributes({ fadeBorderColor: colorValue.hex })
                        }
                        onChangeRadius={(newRadius) =>
                            setAttributes({ fadeBorderRadius: newRadius })
                        } />
                    <PremiumResponsivePadding
                        paddingTop={fadePaddingTop}
                        paddingRight={fadePaddingRight}
                        paddingBottom={fadePaddingBottom}
                        paddingLeft={fadePaddingLeft}
                        paddingTopTablet={fadePaddingTopTablet}
                        paddingRightTablet={fadePaddingRightTablet}
                        paddingBottomTablet={fadePaddingBottomTablet}
                        paddingLeftTablet={fadePaddingLeftTablet}
                        paddingTopMobile={fadePaddingTopMobile}
                        paddingRightMobile={fadePaddingRightMobile}
                        paddingBottomMobile={fadePaddingBottomMobile}
                        paddingLeftMobile={fadePaddingLeftMobile}
                        showUnits={true}
                        selectedUnit={fadePaddingType}
                        onChangePadSizeUnit={newvalue =>
                            setAttributes({ fadePaddingType: newvalue })
                        }
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ fadePaddingTop: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ fadePaddingTopTablet: newValue })
                                } else {
                                    setAttributes({ fadePaddingTopMobile: newValue })
                                }

                            }

                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ fadePaddingRight: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ fadePaddingRightTablet: newValue })
                                } else {
                                    setAttributes({ fadePaddingRightMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ fadePaddingBottom: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ fadePaddingBottomTablet: newValue })
                                } else {
                                    setAttributes({ fadePaddingBottomMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ fadePaddingLeft: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ fadePaddingLeftTablet: newValue })
                                } else {
                                    setAttributes({ fadePaddingLeftMobile: newValue })
                                }
                            }
                        }
                    />
                </PanelBody>}

            </InspectorControls>,
            <div
                id={`premium-unfold-${block_id}`}
                className={`${mainClass} premium-unfold-${block_id}`}
            >
                <div className={`premium-unfold-container`}
                    style={{
                        backgroundColor: boxBackgroundColor ? hexToRgba(boxBackgroundColor, boxOpacity) : "transparent",
                        backgroundImage: boxBackgroundImg ? `url(${boxBackgroundImg})` : "none",
                        backgroundSize: boxBackgroundSize,
                        backgroundPosition: boxBackgroundPosition,
                        backgroundRepeat: boxBackgroundRepeat,
                        backgroundAttachment: boxFixed ? "fixed" : "unset",
                        borderStyle: boxBorderType,
                        borderWidth: `${boxBorderTop}px ${boxBorderRight}px ${boxBorderBottom}px ${boxBorderLeft}px`,
                        borderColor: boxBorderColor,
                        borderRadius: boxBorderRadius,
                        boxShadow: `${boxShadowHorizontal}px ${boxShadowVertical}px ${boxShadowBlur}px ${boxShadowColor} ${boxShadowPosition}`
                    }}
                >
                    <div className={`premium-unfold-folder`}>
                        {showTitle && <RichText
                            tagName={titleTag.toLowerCase()}
                            className={`premium-unfold-heading `}
                            onChange={newText =>
                                setAttributes({ titleTxt: newText })
                            }
                            value={titleTxt}
                            style={{
                                textAlign: align,
                                color: titleColor,
                                fontWeight: titleWeight,
                                fontStyle: titleStyle,
                                textTransform: titleUpper ? "upperCase" : "none",
                                letterSpacing: ` ${titleLetter}px`,
                                lineHeight: `${titleLine}px`,
                                backgroundColor: titleBackgroundColor ? hexToRgba(titleBackgroundColor, titleOpacity) : "transparent",
                                backgroundImage: titleBackgroundImg ? `url(${titleBackgroundImg})` : "none",
                                backgroundSize: titleBackgroundSize,
                                backgroundPosition: titleBackgroundPosition,
                                backgroundRepeat: titleBackgroundRepeat,
                                backgroundSize: titleBackgroundSize,
                                backgroundAttachment: titleFixed ? "fixed" : "unset",
                                borderStyle: titleBorderType,
                                borderWidth: `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`,
                                borderColor: titleBorderColor,
                                borderRadius: titleBorderRadius,
                                boxShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor} ${titleShadowPosition}`
                            }}
                        />}
                        <div id={`premium-unfold-content-${block_id}`} className={`premium-unfold-content toggled`} style={{
                            textAlign: align, height: foldUnit === "percent" ? `${foldHeightPx}px` : `${foldHeight}px`,
                        }}>
                            <div className={`premium-unfold-content-wrap`} style={{
                                color: contentColor,
                                fontWeight: contentWeight,
                                fontStyle: contentStyle,
                                textTransform: contentUpper ? "upperCase" : "none",
                                letterSpacing: ` ${contentLetter}px`,
                                lineHeight: `${contentLine}px`,
                                backgroundColor: contentBackgroundColor ? hexToRgba(contentBackgroundColor, contentOpacity) : "transparent",
                                backgroundImage: contentBackgroundImg ? `url(${contentBackgroundImg})` : "none",
                                backgroundSize: contentBackgroundSize,
                                backgroundPosition: contentBackgroundPosition,
                                backgroundRepeat: contentBackgroundRepeat,
                                backgroundSize: contentBackgroundSize,
                                backgroundAttachment: contentFixed ? "fixed" : "unset",
                                borderStyle: contentBorderType,
                                borderWidth: `${contentBorderTop}px ${contentBorderRight}px ${contentBorderBottom}px ${contentBorderLeft}px`,
                                borderColor: contentBorderColor,
                                borderRadius: contentBorderRadius,
                                boxShadow: `${contentShadowHorizontal}px ${contentShadowVertical}px ${contentShadowBlur}px ${contentShadowColor} ${contentShadowPosition}`
                            }}>
                                {content}
                            </div>
                        </div>

                        {fadeContent && <div id={`premium-unfold-gradient-${block_id}`} class={`premium-unfold-gradient toggled`} style={{
                            backgroundColor: fadeBackgroundColor ? hexToRgba(fadeBackgroundColor, fadeOpacity) : "",
                            backgroundImage: fadeBackgroundImg ? `url(${fadeBackgroundImg})` : "",
                            backgroundSize: fadeBackgroundSize,
                            backgroundPosition: fadeBackgroundPosition,
                            backgroundRepeat: fadeBackgroundRepeat,
                            backgroundSize: fadeBackgroundSize,
                            backgroundAttachment: fadeFixed ? "fixed" : "unset",
                            borderStyle: fadeBorderType,
                            borderWidth: `${fadeBorderTop}px ${fadeBorderRight}px ${fadeBorderBottom}px ${fadeBorderLeft}px`,
                            borderColor: fadeBorderColor,
                        }}></div>}
                    </div>
                    {"inside" === buttonPosition && button}
                </div>
                {"outside" === buttonPosition && button}


            </div>
        ]

    }
}
export default edit;