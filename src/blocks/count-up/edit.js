import classnames from "classnames"
import { FontAwesomeEnabled } from "../../../assets/js/settings"
import PremiumTypo from "../../components/premium-typo"
import PremiumBoxShadow from "../../components/premium-box-shadow"
import PremiumBackground from "../../components/premium-background"
import PremiumBorder from "../../components/premium-border"
import PremiumPadding from "../../components/premium-padding"
import FONTS from "../../components/premium-fonts"
import PremiumMediaUpload from "../../components/premium-media-upload"
import styling from './styling'
import hexToRgba from "hex-to-rgba"
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs'

const { __ } = wp.i18n;

const {
    PanelBody,
    Toolbar,
    SelectControl,
    TextControl,
    RangeControl,
    ToggleControl
} = wp.components;

const { InspectorControls, ColorPalette } = wp.blockEditor;

const { Fragment, Component } = wp.element;

class edit extends Component {
    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        const { setAttributes, clientId } = this.props;
        setAttributes({ block_id: clientId.substr(0, 6) })
        setAttributes({ classMigrate: true });

        // Pushing Style tag for this block css.
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "premium-style-count-up-" + clientId.substr(0, 6)
        );
        document.head.appendChild($style);
    }

    render() {
        const { isSelected, setAttributes, className, clientId: blockId } = this.props;
        const {
            block_id,
            borderCount,
            increment,
            time,
            delay,
            align,
            flexDir,
            numberSizeUnit,
            numberSize,
            numberSizeTablet,
            numberSizeMobile,
            numberColor,
            numberWeight,
            prefix,
            suffix,
            icon,
            iconSpacing,
            imageID,
            imageURL,
            iconType,
            iconCheck,
            iconSize,
            iconColor,
            selfAlign,
            titleCheck,
            titleTxt,
            faIcon,
            counterFamily,
            hideDesktop,
            hideTablet,
            hideMobile,
            titleStyles,
            containerStyles,
            suffixStyles,
            prefixStyles
        } = this.props.attributes;

        let iconClass = "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
        const ICONS = [
            {
                value: "icon",
                label: __("Icon")
            },
            {
                value: "img",
                label: __("Image")
            }
        ];

        const DIRECTION = [
            {
                value: "row",
                label: __("Row")
            },
            {
                value: "row-reverse",
                label: __("Reversed Row")
            },
            {
                value: "column",
                label: __("Column")
            },
            {
                value: "column-reverse",
                label: __("Reversed Column")
            }
        ];

        const TYPE = [
            {
                value: "fa",
                label: "Font Awesome Icon"
            },
            {
                value: "dash",
                label: "Dashicon"
            }
        ];

        const ALIGNS = ["left", "center", "right"];
        const REVALIGNS = ["right", "center", "left"];
        switch (align) {
            case "left":
                setAttributes({ selfAlign: "flex-start" });
                break;
            case "center":
                setAttributes({ selfAlign: "center" });
                break;
            case "right":
                setAttributes({ selfAlign: "flex-end" });
                break;
        }

        const addFontToHead = fontFamily => {
            const head = document.head;
            const link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href =
                "https://fonts.googleapis.com/css2?family=" +
                fontFamily.replace(/\s/g, '+').replace(/\"/g, "") + "&display=swap";
            head.appendChild(link);
        };

        const onChangeTitleFamily = fontFamily => {
            setAttributes({ titleFamily: fontFamily });
            if (!fontFamily) {
                return;
            }

            addFontToHead(fontFamily);
        };

        const onChangePrefixFamily = fontFamily => {
            setAttributes({ prefixFamily: fontFamily });
            if (!fontFamily) {
                return;
            }

            addFontToHead(fontFamily);
        };

        const onChangeCounterFamily = fontFamily => {
            setAttributes({ counterFamily: fontFamily });
            if (!fontFamily) {
                return;
            }

            addFontToHead(fontFamily);
        };

        const onChangeSuffixFamily = fontFamily => {
            setAttributes({ suffixFamily: fontFamily });
            if (!fontFamily) {
                return;
            }

            addFontToHead(fontFamily);
        };

        let element = document.getElementById(
            "premium-style-count-up-" + blockId.substr(0, 6)
        );

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props);
        }

        const mainClasses = classnames(className, "premium-countup");

        return [
            isSelected && (
                <InspectorControls key={"inspector"}>
                    <PanelBody
                        title={__("Counter")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TextControl
                            label={__("Final Number")}
                            value={increment}
                            onChange={value => setAttributes({ increment: value })}
                        />
                        <TextControl
                            label={__("Counting Time")}
                            value={time}
                            onChange={value => setAttributes({ time: value })}
                            help={__("Set counting time in milliseconds, for example: 1000")}
                        />
                        <TextControl
                            label={__("Delay")}
                            value={delay}
                            onChange={value => setAttributes({ delay: value })}
                            help={__("Set delay in milliseconds, for example: 10")}
                        />
                        <p>{__("Align")}</p>
                        {"row-reverse" !== flexDir && (
                            <Toolbar
                                controls={ALIGNS.map(contentAlign => ({
                                    icon: "editor-align" + contentAlign,
                                    isActive: contentAlign === align,
                                    onClick: () => setAttributes({ align: contentAlign })
                                }))}
                            />
                        )}
                        {"row-reverse" === flexDir && (
                            <Toolbar
                                label={__("Align")}
                                controls={REVALIGNS.map(contentAlign => ({
                                    icon: "editor-align" + contentAlign,
                                    isActive: contentAlign === align,
                                    onClick: () => setAttributes({ align: contentAlign })
                                }))}
                            />
                        )}
                        <SelectControl
                            label={__("Direction")}
                            options={DIRECTION}
                            value={flexDir}
                            onChange={newDir => setAttributes({ flexDir: newDir })}
                        />
                        {("row" === flexDir || "row-reverse" === flexDir) && (
                            <RangeControl
                                label={__("Spacing (PX)")}
                                value={iconSpacing}
                                onChange={newValue => setAttributes({ iconSpacing: newValue })}
                            />
                        )}
                        <ToggleControl
                            label={__("Icon")}
                            checked={iconCheck}
                            onChange={check => setAttributes({ iconCheck: check })}
                        />
                        <ToggleControl
                            label={__("Prefix")}
                            checked={prefix}
                            onChange={check => setAttributes({ prefix: check })}
                        />
                        <ToggleControl
                            label={__("Suffix")}
                            checked={suffix}
                            onChange={check => setAttributes({ suffix: check })}
                        />
                        <ToggleControl
                            label={__("Title")}
                            checked={titleCheck}
                            onChange={check => setAttributes({ titleCheck: check })}
                        />
                    </PanelBody>
                    {iconCheck && (
                        <PanelBody
                            title={__("Icon")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Icon Type")}
                                options={ICONS}
                                value={icon}
                                onChange={newType => setAttributes({ icon: newType })}
                            />
                            {("" !== faIcon || "undefined" !== typeof faIcon) &&
                                "icon" === icon && (
                                    <div className="premium-icon__sidebar_icon">
                                        <i className={iconClass} />
                                    </div>
                                )}
                            {"icon" === icon && (
                                <Fragment>
                                    <SelectControl
                                        label={__("Icon Type")}
                                        value={iconType}
                                        options={TYPE}
                                        onChange={newType => setAttributes({ iconType: newType })}
                                    />
                                    <TextControl
                                        label={__("Icon Class")}
                                        value={faIcon}
                                        help={[
                                            __("Get icon class from"),
                                            <a
                                                href={
                                                    "fa" === iconType
                                                        ? "https://fontawesome.com/v4.7.0/icons/"
                                                        : "https://developer.wordpress.org/resource/dashicons/"
                                                }
                                                target="_blank"
                                            >
                                                &nbsp;
                                                {__("here")}
                                            </a>,
                                            __(" , for example: "),
                                            "fa" === iconType ? "address-book" : "dashicons-admin-site"
                                        ]}
                                        onChange={newIcon => setAttributes({ faIcon: newIcon })}
                                    />
                                </Fragment>
                            )}
                            {"img" === icon && (
                                <PremiumMediaUpload
                                    type="image"
                                    imageID={imageID}
                                    imageURL={imageURL}
                                    onSelectMedia={media => {
                                        setAttributes({
                                            imageID: media.id,
                                            imageURL: media.url
                                        });
                                    }}
                                    onRemoveImage={() =>
                                        setAttributes({
                                            imageURL: "",
                                            imageURL: ""
                                        })
                                    }
                                />
                            )}
                            <RangeControl
                                label={__("Size (PX)")}
                                max="200"
                                value={iconSize}
                                onChange={newValue => setAttributes({ iconSize: newValue })}
                            />
                            {"icon" === icon && (
                                <Fragment>
                                    <p>{__("Icon Color")}</p>
                                    <ColorPalette
                                        value={iconColor}
                                        onChange={newValue =>
                                            setAttributes({
                                                iconColor:
                                                    newValue === undefined ? "transparent" : newValue
                                            })
                                        }
                                        allowReset={true}
                                    />
                                </Fragment>
                            )}
                        </PanelBody>
                    )}
                    <PanelBody
                        title={__("Number")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Font Family")}
                            value={counterFamily}
                            options={FONTS}
                            onChange={onChangeCounterFamily}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight"]}
                            setAttributes={setAttributes}
                            fontSizeType={{
                                value: numberSizeUnit,
                                label: __("numberSizeUnit"),
                            }}
                            fontSize={{
                                value: numberSize,
                                label: __("numberSize"),
                            }}
                            fontSizeMobile={{
                                value: numberSizeMobile,
                                label: __("numberSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: numberSizeTablet,
                                label: __("numberSizeTablet"),
                            }}
                            weight={numberWeight}
                            onChangeWeight={newWeight =>
                                setAttributes({ numberWeight: newWeight })
                            }
                        />
                        <Fragment>
                            <p>{__("Number Color")}</p>
                            <ColorPalette
                                value={numberColor}
                                onChange={newValue =>
                                    setAttributes({
                                        numberColor: newValue === undefined ? "transparent" : newValue
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                    </PanelBody>
                    {prefix && (
                        <PanelBody
                            title={__("Prefix")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <TextControl
                                label={__("Prefix")}
                                value={prefixStyles[0].prefixTxt}
                                onChange={value => setAttributes({ prefixTxt: value })}
                            />

                            <SelectControl
                                label={__("Font Family")}
                                value={prefixStyles[0].prefixFamily}
                                options={FONTS}
                                onChange={onChangePrefixFamily}
                            />
                            <PremiumTypo
                                components={["responsiveSize", "weight"]}
                                setAttributes={savePrefixStyle}
                                fontSizeType={{
                                    value: prefixStyles[0].prefixSizeUnit,
                                    label: __("prefixSizeUnit"),
                                }}
                                fontSize={{
                                    value: prefixStyles[0].prefixSize,
                                    label: __("prefixSize"),
                                }}
                                fontSizeMobile={{
                                    value: prefixStyles[0].prefixSizeMobile,
                                    label: __("prefixSizeMobile"),
                                }}
                                fontSizeTablet={{
                                    value: prefixStyles[0].prefixSizeTablet,
                                    label: __("prefixSizeTablet"),
                                }}
                                weight={prefixStyles[0].prefixWeight}
                                onChangeWeight={newWeight =>
                                    savePrefixStyle({ prefixWeight: newWeight })
                                }
                            />

                            <Fragment>
                                <p>{__("Text Color")}</p>
                                <ColorPalette
                                    value={prefixStyles[0].prefixColor}
                                    onChange={newValue =>
                                        savePrefixStyle({
                                            prefixColor:
                                                newValue === undefined ? "transparent" : newValue
                                        })
                                    }
                                    allowReset={true}
                                />
                            </Fragment>
                            <RangeControl
                                label={__("Gap After (PX)")}
                                value={prefixStyles[0].prefixGap}
                                onChange={newValue => savePrefixStyle({ prefixGap: newValue })}
                            />
                        </PanelBody>
                    )}
                    {suffix && (
                        <PanelBody
                            title={__("Suffix")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <TextControl
                                label={__("Suffix")}
                                value={suffixStyles[0].suffixTxt}
                                onChange={value => savePrefixStyle({ suffixTxt: value })}
                            />
                            <SelectControl
                                label={__("Font Family")}
                                value={suffixStyles[0].suffixFamily}
                                options={FONTS}
                                onChange={onChangeSuffixFamily}
                            />
                            <PremiumTypo
                                components={["responsiveSize", "weight"]}
                                setAttributes={saveSuffixStyle}
                                fontSizeType={{
                                    value: suffixStyles[0].suffixSizeUnit,
                                    label: __("suffixSizeUnit"),
                                }}
                                fontSize={{
                                    value: suffixStyles[0].suffixSize,
                                    label: __("suffixSize"),
                                }}
                                fontSizeMobile={{
                                    value: suffixStyles[0].suffixSizeMobile,
                                    label: __("suffixSizeMobile"),
                                }}
                                fontSizeTablet={{
                                    value: suffixStyles[0].suffixSizeTablet,
                                    label: __("suffixSizeTablet"),
                                }}
                                weight={suffixStyles[0].suffixWeight}
                                onChangeWeight={newWeight =>
                                    saveSuffixStyle({ suffixWeight: newWeight })
                                }
                            />
                            <Fragment>
                                <p>{__("Text Color")}</p>
                                <ColorPalette
                                    value={suffixStyles[0].suffixColor}
                                    onChange={newValue =>
                                        saveSuffixStyle({
                                            suffixColor:
                                                newValue === undefined ? "transparent" : newValue
                                        })
                                    }
                                    allowReset={true}
                                />
                            </Fragment>
                            <RangeControl
                                label={__("Gap Before (PX)")}
                                value={suffixStyles[0].suffixGap}
                                onChange={newValue => saveSuffixStyle({ suffixGap: newValue })}
                            />
                        </PanelBody>
                    )}
                    {titleCheck && (
                        <PanelBody
                            title={__("Title")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <TextControl
                                label={__("Title Text")}
                                value={titleStyles[0].titleTxt}
                                onChange={value => saveTitleStyles({ titleTxt: value })}
                            />
                            <SelectControl
                                label={__("Font Family")}
                                value={titleStyles[0].titleFamily}
                                options={FONTS}
                                onChange={onChangeTitleFamily}
                            />
                            <PremiumTypo
                                components={["responsiveSize", "weight", "spacing", "style", "upper"]}
                                setAttributes={saveTitleStyles}
                                fontSizeType={{
                                    value: titleStyles[0].titleSizeUnit,
                                    label: __("titleSizeUnit"),
                                }}
                                fontSize={{
                                    value: titleStyles[0].titleSize,
                                    label: __("titleSize"),
                                }}
                                fontSizeMobile={{
                                    value: titleStyles[0].titleSizeMobile,
                                    label: __("titleSizeMobile"),
                                }}
                                fontSizeTablet={{
                                    value: titleStyles[0].titleSizeTablet,
                                    label: __("titleSizeTablet"),
                                }}
                                weight={titleStyles[0].titleWeight}
                                style={titleStyles[0].titleStyle}
                                spacing={titleStyles[0].titleSpacing}
                                upper={titleStyles[0].titleUpper}
                                onChangeWeight={newWeight =>
                                    saveTitleStyles({ titleWeight: newWeight })
                                }
                                onChangeStyle={newStyle =>
                                    saveTitleStyles({ titleStyle: newStyle })
                                }
                                onChangeSpacing={newValue =>
                                    saveTitleStyles({ titleSpacing: newValue })
                                }
                                onChangeUpper={check => saveTitleStyles({ titleUpper: check })}
                            />
                            <Fragment>
                                <p>{__("Text Color")}</p>
                                <ColorPalette
                                    value={titleStyles[0].titleColor}
                                    onChange={newValue =>
                                        saveTitleStyles({
                                            titleColor:
                                                newValue === undefined ? "transparent" : newValue
                                        })
                                    }
                                    allowReset={true}
                                />
                            </Fragment>
                            <PanelBody
                                title={__("Spacings")}
                                className="premium-panel-body-inner"
                                initialOpen={false}
                            >
                                <RangeControl
                                    label={__("Margin Top (PX)")}
                                    value={titleStyles[0].titleT}
                                    onChange={newValue => saveTitleStyles({ titleT: newValue })}
                                />
                                <RangeControl
                                    label={__("Margin Bottom (PX)")}
                                    value={titleStyles[0].titleB}
                                    onChange={newValue => saveTitleStyles({ titleB: newValue })}
                                />
                            </PanelBody>
                        </PanelBody>
                    )}
                    <PanelBody
                        title={__("Container")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <Fragment>
                            <p>{__("Background Color")}</p>
                            <PremiumBackground
                                type="color"
                                colorValue={containerStyles[0].containerBack}
                                onChangeColor={newValue =>
                                    saveContainerStyle({
                                        containerBack: newValue,
                                    })
                                }
                                opacityValue={containerStyles[0].containerOpacity}
                                onChangeOpacity={value =>
                                    saveContainerStyle({ containerOpacity: value })
                                }
                            />
                        </Fragment>

                        <PremiumBackground
                            imageID={containerStyles[0].backgroundImageID}
                            imageURL={containerStyles[0].backgroundImageURL}
                            backgroundPosition={containerStyles[0].backgroundPosition}
                            backgroundRepeat={containerStyles[0].backgroundRepeat}
                            backgroundSize={containerStyles[0].backgroundSize}
                            fixed={containerStyles[0].fixed}
                            onSelectMedia={media => {
                                saveContainerStyle({
                                    backgroundImageID: media.id,
                                    backgroundImageURL: media.url
                                });
                            }}
                            onRemoveImage={value =>
                                saveContainerStyle({
                                    backgroundImageURL: "",
                                    backgroundImageID: ""
                                })
                            }
                            onChangeBackPos={newValue =>
                                saveContainerStyle({ backgroundPosition: newValue })
                            }
                            onchangeBackRepeat={newValue =>
                                saveContainerStyle({ backgroundRepeat: newValue })
                            }
                            onChangeBackSize={newValue =>
                                saveContainerStyle({ backgroundSize: newValue })
                            }
                            onChangeFixed={check => saveContainerStyle({ fixed: check })}
                        />
                        <PremiumBorder
                            borderType={containerStyles[0].borderType}
                            borderWidth={containerStyles[0].borderWidth}
                            top={containerStyles[0].borderTop}
                            right={containerStyles[0].borderRight}
                            bottom={containerStyles[0].borderBottom}
                            left={containerStyles[0].borderLeft}
                            borderColor={containerStyles[0].borderColor}
                            borderRadius={containerStyles[0].borderRadius}
                            onChangeType={(newType) => saveContainerStyle({ borderType: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                saveContainerStyle({
                                    borderCount: true,
                                    borderTop: top,
                                    borderRight: right,
                                    borderBottom: bottom,
                                    borderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                saveContainerStyle({ borderColor: colorValue.hex })
                            }
                            onChangeRadius={(newRadius) =>
                                saveContainerStyle({ borderRadius: newRadius })
                            }
                        />
                        <PremiumBoxShadow
                            inner={true}
                            color={containerStyles[0].shadowColor}
                            blur={containerStyles[0].shadowBlur}
                            horizontal={containerStyles[0].shadowHorizontal}
                            vertical={containerStyles[0].shadowVertical}
                            position={containerStyles[0].shadowPosition}
                            withAlpha={true}
                            onChangeColor={newColor => {

                                saveContainerStyle({
                                    shadowColor: newColor.rgb
                                })
                            }

                            }
                            onChangeBlur={newBlur =>
                                saveContainerStyle({
                                    shadowBlur: newBlur
                                })
                            }
                            onChangehHorizontal={newValue =>
                                saveContainerStyle({
                                    shadowHorizontal: newValue
                                })
                            }
                            onChangeVertical={newValue =>
                                saveContainerStyle({
                                    shadowVertical: newValue
                                })
                            }
                            onChangePosition={newValue =>
                                saveContainerStyle({
                                    shadowPosition: newValue
                                })
                            }
                        />
                        <PremiumPadding
                            paddingTop={containerStyles[0].paddingT}
                            paddingRight={containerStyles[0].paddingR}
                            paddingBottom={containerStyles[0].paddingB}
                            paddingLeft={containerStyles[0].paddingL}
                            showUnits={true}
                            onChangePadTop={value =>
                                saveContainerStyle({
                                    paddingT: value || 0
                                })
                            }
                            onChangePadRight={value =>
                                saveContainerStyle({
                                    paddingR: value || 0
                                })
                            }
                            onChangePadBottom={value =>
                                saveContainerStyle({
                                    paddingB: value || 0
                                })
                            }
                            onChangePadLeft={value =>
                                saveContainerStyle({
                                    paddingL: value || 0
                                })
                            }
                            selectedUnit={containerStyles[0].paddingU}
                            onChangePadSizeUnit={newvalue =>
                                saveContainerStyle({ paddingU: newvalue })
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
            <div>
                {iconType === "fa" && 1 != FontAwesomeEnabled && iconCheck && (
                    <p className={`premium-countup__alert`}>
                        {__("Please Enable Font Awesome Icons from Plugin settings")}
                    </p>
                )}
            </div>,
            <div
                id={`premium-countup-${block_id}`}
                className={`${mainClasses}__wrap premium-countup-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                style={{
                    justifyContent: align,
                    flexDirection: flexDir,
                    backgroundColor: containerBack
                        ? hexToRgba(containerBack, containerOpacity)
                        : "transparent",
                    boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px rgba(${shadowColor.r},${shadowColor.g},${shadowColor.b}, ${shadowColor.a}) ${shadowPosition}`,
                    backgroundImage: backgroundImageURL ? `url('${backgroundImageURL}')` : 'none',
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    backgroundAttachment: fixed ? "fixed" : "unset",
                    borderStyle: borderType,
                    borderWidth: borderCount
                        ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                        : borderWidth + "px",
                    borderRadius: borderRadius + "px",
                    borderColor: borderColor,
                    paddingTop: paddingT + paddingU,
                    paddingRight: paddingR + paddingU,
                    paddingBottom: paddingB + paddingU,
                    paddingLeft: paddingL + paddingU,
                }}
            >
                {iconCheck && (
                    <div
                        className={`premium-countup__icon_wrap`}
                        style={{
                            marginRight:
                                "row" === flexDir || "row-reverse" === flexDir
                                    ? iconSpacing + "px"
                                    : "0",
                            marginLeft:
                                "row" === flexDir || "row-reverse" === flexDir
                                    ? iconSpacing + "px"
                                    : "0",
                            alignSelf:
                                "row-reverse" === flexDir || "row" === flexDir
                                    ? "center"
                                    : selfAlign
                        }}
                    >
                        {"icon" === icon && (
                            <i
                                className={`premium-countup__icon ${iconClass}`}
                                style={{
                                    fontSize: iconSize + "px",
                                    color: iconColor
                                }}
                            />
                        )}
                        {"img" === icon && imageURL && (
                            <img
                                src={imageURL}
                                style={{
                                    width: iconSize + "px",
                                    height: iconSize + "px"
                                }}
                            />
                        )}
                    </div>
                )}
                <div
                    className={`premium-countup__info`}
                    style={{
                        alignSelf:
                            "row-reverse" === flexDir || "row" === flexDir
                                ? "center"
                                : selfAlign,
                    }}
                >
                    <div className={`premium-countup__desc`}>
                        {prefix && (
                            <p
                                className={`premium-countup__prefix`}
                                style={{
                                    fontFamily: prefixFamily,
                                    color: prefixColor,
                                    fontWeight: prefixWeight,
                                    marginRight: prefixGap + "px"
                                }}
                            >
                                {prefixTxt}
                            </p>
                        )}
                        <p
                            className={`premium-countup__increment`}
                            data-interval={time}
                            data-delay={delay}
                            style={{
                                fontFamily: counterFamily,
                                color: numberColor,
                                fontWeight: numberWeight
                            }}
                        >
                            {increment}
                        </p>
                        {suffix && (
                            <p
                                className={`premium-countup__suffix`}
                                style={{
                                    fontFamily: suffixFamily,
                                    color: suffixColor,
                                    fontWeight: suffixWeight,
                                    marginLeft: suffixGap + "px"
                                }}
                            >
                                {suffixTxt}
                            </p>
                        )}
                    </div>
                    {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                        <h3
                            className={`premium-countup__title`}
                            style={{
                                fontFamily: titleFamily,
                                marginTop: titleT + "px",
                                marginBottom: titleB + "px",
                                color: titleColor,
                                letterSpacing: titleSpacing + "px",
                                fontWeight: titleWeight,
                                textTransform: titleUpper ? "uppercase" : "none",
                                fontStyle: titleStyle
                            }}
                        >
                            {titleTxt}
                        </h3>
                    )}
                </div>
                {titleCheck && ("column" === flexDir || "column-reverse" === flexDir) && (
                    <h3
                        className={`premium-countup__title`}
                        style={{
                            fontFamily: titleFamily,
                            marginTop: titleT + "px",
                            marginBottom: titleB + "px",
                            color: titleColor,
                            letterSpacing: titleSpacing + "px",
                            fontWeight: titleWeight,
                            textTransform: titleUpper ? "uppercase" : "none",
                            fontStyle: titleStyle,
                            alignSelf: selfAlign
                        }}
                    >
                        {titleTxt}
                    </h3>
                )}
            </div>
        ];
    }
};

export default edit;
