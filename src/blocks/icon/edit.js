import classnames from "classnames";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumSizeUnits from "../../components/premium-size-units";
import PremiumBorder from "../../components/premium-border";
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import PremiumResponsiveMargin from '../../components/Premium-Responsive-Margin';
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBackground from "../../components/premium-background";
import hexToRgba from "hex-to-rgba";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import styling from './styling';

const { __ } = wp.i18n;

const {
    PanelBody,
    Toolbar,
    SelectControl,
    RangeControl,
    ToggleControl,
    Dropdown,
    Button
} = wp.components;

const { InspectorControls, ColorPalette, URLInput } = wp.blockEditor;

const { Fragment, Component } = wp.element;

export default class edit extends Component {

    constructor() {
        super(...arguments);
    }

    componentDidMount() {

        const { setAttributes, clientId } = this.props;
        setAttributes({ classMigrate: true });

        setAttributes({ block_id: clientId });

        // Pushing Style tag for this block css.
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "premium-style-icon-" + clientId.substr(0, 6)
        );
        document.head.appendChild($style);
    }
    render() {
        const { isSelected, setAttributes, className } = this.props;

        const {
            block_id,
            iconType,
            selectedIcon,
            align,
            hoverEffect,
            iconSize,
            iconSizeUnit,
            iconColor,
            iconBack,
            iconOpacity,
            shadowBlur,
            shadowColor,
            shadowHorizontal,
            shadowVertical,
            paddingT,
            paddingR,
            paddingB,
            paddingL,
            paddingTTablet,
            paddingRTablet,
            paddingBTablet,
            paddingLTablet,
            paddingTMobile,
            paddingRMobile,
            paddingBMobile,
            paddingLMobile,
            paddingU,
            marginT,
            marginR,
            marginB,
            marginL,
            marginTTablet,
            marginRTablet,
            marginBTablet,
            marginLTablet,
            marginTMobile,
            marginRMobile,
            marginBMobile,
            marginLMobile,
            borderType,
            borderWidth,
            iconBorder,
            iconBorderTop,
            iconBorderRight,
            iconBorderBottom,
            iconBorderLeft,
            borderRadius,
            borderColor,
            backgroundColor,
            backgroundOpacity,
            imageID,
            imageURL,
            fixed,
            backgroundRepeat,
            backgroundPosition,
            backgroundSize,
            wrapBorderType,
            wrapBorder,
            wrapBorderWidth,
            wrapBorderTop,
            wrapBorderRight,
            wrapBorderBottom,
            wrapBorderLeft,
            wrapBorderRadius,
            wrapBorderColor,
            wrapShadowBlur,
            wrapShadowColor,
            wrapShadowHorizontal,
            wrapShadowVertical,
            wrapShadowPosition,
            wrapPaddingT,
            wrapPaddingR,
            wrapPaddingB,
            wrapPaddingL,
            wrapPaddingTTablet,
            wrapPaddingRTablet,
            wrapPaddingBTablet,
            wrapPaddingLTablet,
            wrapPaddingTMobile,
            wrapPaddingRMobile,
            wrapPaddingBMobile,
            wrapPaddingLMobile,
            wrapMarginT,
            wrapMarginR,
            wrapMarginB,
            wrapMarginL,
            wrapMarginTTablet,
            wrapMarginRTablet,
            wrapMarginBTablet,
            wrapMarginLTablet,
            wrapMarginTMobile,
            wrapMarginRMobile,
            wrapMarginBMobile,
            wrapMarginLMobile,
            urlCheck,
            link,
            target,
            hideDesktop,
            hideTablet,
            hideMobile
        } = this.props.attributes;

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

        const ALIGNS = ["left", "center", "right"];

        let element = document.getElementById(
            "premium-style-icon-" + this.props.clientId.substr(0, 6)
        );

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props);
        }


        const mainClasses = classnames(className, "premium-icon");

        return [
            isSelected && (
                <InspectorControls key={"inspector"}>
                    <PanelBody
                        title={__("Icon")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p className="premium-editor-paragraph">{__("Select Icon")}</p>
                        <FontIconPicker
                            icons={iconsList}
                            onChange={newIcon => setAttributes({ selectedIcon: newIcon })}
                            value={selectedIcon}
                            isMulti={false}
                            appendTo="body"
                            noSelectedPlaceholder={__("Select Icon")}
                        />
                        <SelectControl
                            label={__("Hover Effect")}
                            options={EFFECTS}
                            value={hoverEffect}
                            onChange={newEffect => setAttributes({ hoverEffect: newEffect })}
                        />
                        <p>{__("Align")}</p>
                        <Toolbar
                            controls={ALIGNS.map(iconAlign => ({
                                icon: "editor-align" + iconAlign,
                                isActive: iconAlign === align,
                                onClick: () => setAttributes({ align: iconAlign })
                            }))}
                        />
                        <ToggleControl
                            label={__("Link")}
                            checked={urlCheck}
                            onChange={newValue => setAttributes({ urlCheck: newValue })}
                        />
                        {urlCheck && (
                            <ToggleControl
                                label={__("Open link in new tab")}
                                checked={target}
                                onChange={newValue => setAttributes({ target: newValue })}
                            />
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Icon Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumSizeUnits
                            onChangeSizeUnit={newValue =>
                                setAttributes({ iconSizeUnit: newValue })
                            }
                        />
                        <RangeControl
                            label={__("Size")}
                            value={iconSize}
                            onChange={newValue => setAttributes({ iconSize: newValue })}
                            initialPosition={50}
                            allowReset={true}
                        />
                        <div className="premium-control-toggle">
                            <strong>{__("Colors")}</strong>
                            <Dropdown
                                className="premium-control-toggle-btn"
                                contentClassName="premium-control-toggle-content"
                                position="bottom right"
                                renderToggle={({ isOpen, onToggle }) => (
                                    <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                        <i className="dashicons dashicons-edit" />
                                    </Button>
                                )}
                                renderContent={() => (
                                    <Fragment>
                                        <p>{__("Icon Color")}</p>
                                        <ColorPalette
                                            value={iconColor}
                                            onChange={newValue =>
                                                setAttributes({
                                                    iconColor: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                        <p>{__("Background Color")}</p>
                                        <PremiumBackground
                                            type="color"
                                            colorValue={iconBack}
                                            onChangeColor={value =>
                                                setAttributes({ iconBack: value })
                                            }
                                            opacityValue={iconOpacity}
                                            onChangeOpacity={newvalue =>
                                                setAttributes({
                                                    iconOpacity: newvalue,
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}
                            />
                        </div>
                        <PremiumBorder
                            borderType={borderType}
                            borderWidth={borderWidth}
                            top={iconBorderTop}
                            right={iconBorderRight}
                            bottom={iconBorderBottom}
                            left={iconBorderLeft}
                            borderColor={borderColor}
                            borderRadius={borderRadius}
                            onChangeType={(newType) => setAttributes({ borderType: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    iconBorder: true,
                                    iconBorderTop: top,
                                    iconBorderRight: right,
                                    iconBorderBottom: bottom,
                                    iconBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                setAttributes({ borderColor: colorValue.hex })
                            }
                            onChangeRadius={(newrRadius) =>
                                setAttributes({ borderRadius: newrRadius })
                            }
                        />

                        <PremiumTextShadow
                            label="Shadow"
                            color={shadowColor}
                            blur={shadowBlur}
                            horizontal={shadowHorizontal}
                            vertical={shadowVertical}
                            onChangeColor={newColor =>
                                setAttributes({ shadowColor: newColor.hex })
                            }
                            onChangeBlur={newBlur => setAttributes({ shadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                setAttributes({ shadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({ shadowVertical: newValue })
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
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Container Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <Fragment>
                            <p>{__("Background Color")}</p>
                            <PremiumBackground
                                type="color"
                                colorValue={backgroundColor}
                                onChangeColor={value =>
                                    setAttributes({
                                        backgroundColor: value,
                                    })
                                }
                                opacityValue={backgroundOpacity}
                                onChangeOpacity={newvalue =>
                                    setAttributes({ backgroundOpacity: newvalue })
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
                        </Fragment>

                        <PremiumBorder
                            borderType={wrapBorderType}
                            borderWidth={wrapBorderWidth}
                            top={wrapBorderTop}
                            right={wrapBorderRight}
                            bottom={wrapBorderBottom}
                            left={wrapBorderLeft}
                            borderColor={wrapBorderColor}
                            borderRadius={wrapBorderRadius}
                            onChangeType={(newType) =>
                                setAttributes({ wrapBorderType: newType })
                            }
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    wrapBorder: true,
                                    wrapBorderTop: top,
                                    wrapBorderRight: right,
                                    wrapBorderBottom: bottom,
                                    wrapBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                setAttributes({ wrapBorderColor: colorValue.hex })
                            }
                            onChangeRadius={(newrRadius) =>
                                setAttributes({ wrapBorderRadius: newrRadius })
                            }
                        />

                        <PremiumBoxShadow
                            inner={true}
                            color={wrapShadowColor}
                            blur={wrapShadowBlur}
                            horizontal={wrapShadowHorizontal}
                            vertical={wrapShadowVertical}
                            position={wrapShadowPosition}
                            onChangeColor={newColor =>
                                setAttributes({
                                    wrapShadowColor: newColor.hex
                                })
                            }
                            onChangeBlur={newBlur =>
                                setAttributes({
                                    wrapShadowBlur: newBlur
                                })
                            }
                            onChangehHorizontal={newValue =>
                                setAttributes({
                                    wrapShadowHorizontal: newValue
                                })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({
                                    wrapShadowVertical: newValue
                                })
                            }
                            onChangePosition={newValue =>
                                setAttributes({
                                    wrapShadowPosition: newValue
                                })
                            }
                        />
                        <PremiumResponsiveMargin
                            directions={["all"]}
                            marginTop={wrapMarginT}
                            marginRight={wrapMarginR}
                            marginBottom={wrapMarginB}
                            marginLeft={wrapMarginL}
                            marginTopTablet={wrapMarginTTablet}
                            marginRightTablet={wrapMarginRTablet}
                            marginBottomTablet={wrapMarginBTablet}
                            marginLeftTablet={wrapMarginLTablet}
                            marginTopMobile={wrapMarginTMobile}
                            marginRightMobile={wrapMarginRMobile}
                            marginBottomMobile={wrapMarginBMobile}
                            marginLeftMobile={wrapMarginLMobile}
                            onChangeMarginTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ wrapMarginT: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ wrapMarginTTablet: newValue })
                                    } else {
                                        setAttributes({ wrapMarginTMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ wrapMarginR: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ wrapMarginRTablet: newValue })
                                    } else {
                                        setAttributes({ wrapMarginRMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ wrapMarginB: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ wrapMarginBTablet: newValue })
                                    } else {
                                        setAttributes({ wrapMarginBMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ wrapMarginL: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ wrapMarginLTablet: newValue })
                                    } else {
                                        setAttributes({ wrapMarginLMobile: newValue })
                                    }
                                }
                            }

                        />
                        <PremiumResponsivePadding
                            paddingTop={wrapPaddingT}
                            paddingRight={wrapPaddingR}
                            paddingBottom={wrapPaddingB}
                            paddingLeft={wrapPaddingL}
                            paddingTopTablet={wrapPaddingTTablet}
                            paddingRightTablet={wrapPaddingRTablet}
                            paddingBottomTablet={wrapPaddingBTablet}
                            paddingLeftTablet={wrapPaddingLTablet}
                            paddingTopMobile={wrapPaddingTMobile}
                            paddingRightMobile={wrapPaddingRMobile}
                            paddingBottomMobile={wrapPaddingBMobile}
                            paddingLeftMobile={wrapPaddingLMobile}
                            onChangePaddingTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ wrapPaddingT: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ wrapPaddingTTablet: newValue })
                                    } else {
                                        setAttributes({ wrapPaddingTMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ wrapPaddingR: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ wrapPaddingRTablet: newValue })
                                    } else {
                                        setAttributes({ wrapPaddingRMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ wrapPaddingB: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ wrapPaddingBTablet: newValue })
                                    } else {
                                        setAttributes({ wrapPaddingBMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ wrapPaddingL: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ wrapPaddingLTablet: newValue })
                                    } else {
                                        setAttributes({ wrapPaddingLMobile: newValue })
                                    }
                                }
                            }
                        />
                    </PanelBody>
                    <PremiumResponsiveTabs
                        Desktop={hideDesktop}
                        Tablet={hideTablet}
                        Mobile={hideMobile}
                        onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                        onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                        onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                    />
                </InspectorControls>
            ),

            <div
                id={`premium-icon-${block_id}`}
                className={`${mainClasses}__container premium-icon-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                style={{
                    textAlign: align,
                    backgroundColor: backgroundColor
                        ? hexToRgba(backgroundColor, backgroundOpacity)
                        : "transparent",
                    backgroundImage: imageURL ? `url('${imageURL}')` : "none",
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    backgroundAttachment: fixed ? "fixed" : "unset",
                    borderStyle: wrapBorderType,
                    borderWidth: wrapBorder
                        ? `${wrapBorderTop}px ${wrapBorderRight}px ${wrapBorderBottom}px ${wrapBorderLeft}px`
                        : wrapBorderWidth + "px",
                    borderRadius: wrapBorderRadius + "px",
                    borderColor: wrapBorderColor,
                    boxShadow: `${wrapShadowHorizontal || 0}px ${wrapShadowVertical ||
                        0}px ${wrapShadowBlur ||
                        0}px ${wrapShadowColor} ${wrapShadowPosition}`,
                    marginTop: wrapMarginT,
                    marginRight: wrapMarginR,
                    marginBottom: wrapMarginB,
                    marginLeft: wrapMarginL
                }}
            >
                {iconType === "fa" && 1 != FontAwesomeEnabled && (
                    <p className={`premium-icon__alert`}>
                        {__("Please Enable Font Awesome Icons from Plugin settings")}
                    </p>
                )}
                {(iconType === "dash" || 1 == FontAwesomeEnabled) && (
                    <i
                        className={`premium-icon ${selectedIcon} premium-icon__${hoverEffect}`}
                        style={{
                            color: iconColor || "#6ec1e4",
                            backgroundColor: iconBack
                                ? hexToRgba(iconBack, iconOpacity)
                                : "transparent",
                            fontSize: (iconSize || 50) + iconSizeUnit,
                            paddingTop: paddingT + paddingU,
                            paddingRight: paddingR + paddingU,
                            paddingBottom: paddingB + paddingU,
                            paddingLeft: paddingL + paddingU,
                            marginTop: marginT,
                            marginRight: marginR,
                            marginBottom: marginB,
                            marginLeft: marginL,
                            borderStyle: borderType,
                            borderWidth: iconBorder
                                ? `${iconBorderTop}px ${iconBorderRight}px ${iconBorderBottom}px ${iconBorderLeft}px`
                                : borderWidth + "px",
                            borderRadius: borderRadius || 100 + "px",
                            borderColor: borderColor,
                            textShadow: `${shadowHorizontal || 0}px ${shadowVertical ||
                                0}px ${shadowBlur || 0}px ${shadowColor}`
                        }}
                    />
                )}
                {urlCheck && isSelected && (
                    <URLInput
                        value={link}
                        onChange={newUrl => setAttributes({ link: newUrl })}
                    />
                )}
            </div>
        ];
    }
};
