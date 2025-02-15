import classnames from "classnames"
import { FontAwesomeEnabled } from "../../../assets/js/settings"
import PremiumTypo from "../../components/premium-typo"
import PremiumBoxShadow from "../../components/premium-box-shadow"
import PremiumBorder from "../../components/premium-border"
import PremiumMediaUpload from "../../components/premium-media-upload"
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs'
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import PremiumBackgroundControl from "../../components/Premium-Background-Control"
const { __ } = wp.i18n;
const { withSelect } = wp.data
import RadioComponent from '../../components/radio-control'
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import WebfontLoader from "../../components/typography/fontLoader"

const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components;

const { InspectorControls } = wp.blockEditor;

const { Fragment, Component } = wp.element;

class edit extends Component {
    constructor() {
        super(...arguments);
    }
    componentDidMount() {
        const { setAttributes, clientId } = this.props;
        setAttributes({ block_id: clientId.substr(0, 6) })
        setAttributes({ classMigrate: true });
        this.getPreviewSize = this.getPreviewSize.bind(this);
    }
    getPreviewSize(device, desktopSize, tabletSize, mobileSize) {
        if (device === 'Mobile') {
            if (undefined !== mobileSize && '' !== mobileSize) {
                return mobileSize;
            } else if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        } else if (device === 'Tablet') {
            if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        }
        return desktopSize;
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
            numberStyles,
            titleStyles,
            containerStyles,
            suffixStyles,
            prefixStyles,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
            paddingT,
            paddingR,
            paddingB,
            paddingL,
            backgroundType,
            paddingTTablet,
            paddingRTablet,
            paddingBTablet,
            paddingLTablet,
            paddingTMobile,
            paddingRMobile,
            paddingBMobile,
            paddingLMobile,
        } = this.props.attributes;

        let iconClass = "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;

        const ICONS = [
            {
                value: "icon",
                label: __("Icon", 'premium-blocks-for-gutenberg')
            },
            {
                value: "img",
                label: __("Image", 'premium-blocks-for-gutenberg')
            }
        ];
        const DIRECTION = [
            {
                value: "row",
                label: __("Row", 'premium-blocks-for-gutenberg')
            },
            {
                value: "row-reverse",
                label: __("Reversed Row", 'premium-blocks-for-gutenberg')
            },
            {
                value: "column",
                label: __("Column", 'premium-blocks-for-gutenberg')
            },
            {
                value: "column-reverse",
                label: __("Reversed Column", 'premium-blocks-for-gutenberg')
            }
        ];
        const TYPE = [
            {
                value: "fa",
                label: __("Font Awesome Icon", 'premium-blocks-for-gutenberg')
            },
            {
                value: "dash",
                label: __("Dashicon", 'premium-blocks-for-gutenberg')
            }
        ];
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
        let loadCounterGoogleFonts;
        let loadTitleGoogleFonts;
        let loadSuffixGoogleFonts;
        let loadPrefixGoogleFonts;

        if (counterFamily !== 'Default') {
            const counterconfig = {
                google: {
                    families: [counterFamily],
                },
            }
            loadCounterGoogleFonts = (
                <WebfontLoader config={counterconfig}>
                </WebfontLoader>
            )
        }

        if (titleStyles[0].titleFamily !== "Default") {
            const titleConfig = {
                google: {
                    families: [titleStyles[0].titleFamily],
                },
            }
            loadTitleGoogleFonts = (
                <WebfontLoader config={titleConfig}>
                </WebfontLoader>
            )
        }

        if (suffixStyles[0].suffixFamily !== "Default") {
            const suffixConfig = {
                google: {
                    families: [suffixStyles[0].suffixFamily],
                }
            }
            loadSuffixGoogleFonts = (
                <WebfontLoader config={suffixConfig}>
                </WebfontLoader>
            )
        }

        if (prefixStyles[0].prefixFamily !== "Default") {
            const prefixConfig = {
                google: {
                    families: [prefixStyles[0].prefixFamily],
                }
            }
            loadPrefixGoogleFonts = (
                <WebfontLoader config={prefixConfig}>
                </WebfontLoader>
            )
        }

        const saveNumberStyles = (value) => {
            const newUpdate = numberStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ numberStyles: newUpdate });
        }
        const saveTitleStyles = (value) => {
            const newUpdate = titleStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ titleStyles: newUpdate });
        }
        const savePrefixStyle = (value) => {
            const newUpdate = prefixStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ prefixStyles: newUpdate });
        }
        const saveSuffixStyle = (value) => {
            const newUpdate = suffixStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ suffixStyles: newUpdate });
        }
        const saveContainerStyle = (value) => {
            const newUpdate = containerStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ containerStyles: newUpdate });
        }
        let btnGrad, btnGrad2, btnbg;

        if (undefined !== backgroundType && 'gradient' === backgroundType) {
            btnGrad = ('transparent' === containerStyles[0].containerBack || undefined === containerStyles[0].containerBack ? 'rgba(255,255,255,0)' : containerStyles[0].containerBack);
            btnGrad2 = (undefined !== containerStyles[0].gradientColorTwo && undefined !== containerStyles[0].gradientColorTwo && '' !== containerStyles[0].gradientColorTwo ? containerStyles[0].gradientColorTwo : '#777');
            if ('radial' === containerStyles[0].gradientType) {
                btnbg = `radial-gradient(at ${containerStyles[0].gradientPosition}, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
            } else if ('radial' !== containerStyles[0].gradientType) {
                btnbg = `linear-gradient(${containerStyles[0].gradientAngle}deg, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
            }
        } else {
            btnbg = containerStyles[0].backgroundImageURL ? `url('${containerStyles[0].backgroundImageURL}')` : ''
        }

        const mainClasses = classnames(className, "premium-countup");
        const numberFontSize = this.getPreviewSize(this.props.deviceType, numberStyles[0].numberSize, numberStyles[0].numberSizeTablet, numberStyles[0].numberSizeMobile);
        const prefixFontSize = this.getPreviewSize(this.props.deviceType, prefixStyles[0].prefixSize, prefixStyles[0].prefixSizeTablet, prefixStyles[0].prefixSizeMobile);
        const suffixFontSize = this.getPreviewSize(this.props.deviceType, suffixStyles[0].suffixSize, suffixStyles[0].suffixSizeTablet, suffixStyles[0].suffixSizeMobile);
        const titleFontSize = this.getPreviewSize(this.props.deviceType, titleStyles[0].titleSize, titleStyles[0].titleSizeTablet, titleStyles[0].titleSizeMobile);
        const containerPaddingTop = this.getPreviewSize(this.props.deviceType, paddingT, paddingTTablet, paddingTMobile);
        const containerPaddingRight = this.getPreviewSize(this.props.deviceType, paddingR, paddingRTablet, paddingRMobile);
        const containerPaddingBottom = this.getPreviewSize(this.props.deviceType, paddingB, paddingBTablet, paddingBMobile);
        const containerPaddingLeft = this.getPreviewSize(this.props.deviceType, paddingL, paddingLTablet, paddingLMobile);

        return [
            isSelected && (
                <InspectorControls key={"inspector"}>
                    <PanelBody
                        title={__("Counter", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TextControl
                            label={__("Final Number", 'premium-blocks-for-gutenberg')}
                            value={increment}
                            onChange={value => setAttributes({ increment: value })}
                        />
                        <TextControl
                            label={__("Counting Time", 'premium-blocks-for-gutenberg')}
                            value={time}
                            onChange={value => setAttributes({ time: value })}
                            help={__("Set counting time in milliseconds, for example: 1000", 'premium-blocks-for-gutenberg')}
                        />
                        <TextControl
                            label={__("Delay", 'premium-blocks-for-gutenberg')}
                            value={delay}
                            onChange={value => setAttributes({ delay: value })}
                            help={__("Set delay in milliseconds, for example: 10", 'premium-blocks-for-gutenberg')}
                        />
                        {"row-reverse" !== flexDir && (
                            <RadioComponent
                                choices={["left", "center", "right"]}
                                value={align}
                                onChange={newValue => setAttributes({ align: newValue })}
                                label={__(`Align`)}
                            />
                        )}
                        {"row-reverse" === flexDir && (
                            <RadioComponent
                                choices={["right", "center", "left"]}
                                value={align}
                                onChange={newValue => setAttributes({ align: newValue })}
                                label={__(`Align `)}
                            />
                        )}
                        <SelectControl
                            label={__("Direction", 'premium-blocks-for-gutenberg')}
                            options={DIRECTION}
                            value={flexDir}
                            onChange={newDir => setAttributes({ flexDir: newDir })}
                        />
                        {("row" === flexDir || "row-reverse" === flexDir) && (
                            <ResponsiveSingleRangeControl
                                label={__("Spacing", 'premium-blocks-for-gutenberg')}
                                value={iconSpacing}
                                onChange={newValue => setAttributes({ iconSpacing: newValue })}
                                showUnit={false}
                                defaultValue={0}
                            />
                        )}
                        <ToggleControl
                            label={__("Icon", 'premium-blocks-for-gutenberg')}
                            checked={iconCheck}
                            onChange={check => setAttributes({ iconCheck: check })}
                        />
                        <ToggleControl
                            label={__("Prefix", 'premium-blocks-for-gutenberg')}
                            checked={prefix}
                            onChange={check => setAttributes({ prefix: check })}
                        />
                        <ToggleControl
                            label={__("Suffix", 'premium-blocks-for-gutenberg')}
                            checked={suffix}
                            onChange={check => setAttributes({ suffix: check })}
                        />
                        <ToggleControl
                            label={__("Title", 'premium-blocks-for-gutenberg')}
                            checked={titleCheck}
                            onChange={check => setAttributes({ titleCheck: check })}
                        />
                    </PanelBody>
                    {iconCheck && (
                        <PanelBody
                            title={__("Icon", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Icon Type", 'premium-blocks-for-gutenberg')}
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
                                        label={__("Icon Type", 'premium-blocks-for-gutenberg')}
                                        value={iconType}
                                        options={TYPE}
                                        onChange={newType => setAttributes({ iconType: newType })}
                                    />
                                    <TextControl
                                        label={__("Icon Class", 'premium-blocks-for-gutenberg')}
                                        value={faIcon}
                                        help={[
                                            __("Get icon class from", 'premium-blocks-for-gutenberg'),
                                            <a
                                                href={
                                                    "fa" === iconType
                                                        ? "https://fontawesome.com/v4.7.0/icons/"
                                                        : "https://developer.wordpress.org/resource/dashicons/"
                                                }
                                                target="_blank"
                                            >
                                                &nbsp;
                                                {__("here", 'premium-blocks-for-gutenberg')}
                                            </a>,
                                            __(" , for example: ", 'premium-blocks-for-gutenberg'),
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
                            <ResponsiveSingleRangeControl
                                label={__("Size", 'premium-blocks-for-gutenberg')}
                                value={iconSize}
                                onChange={newValue => setAttributes({ iconSize: newValue })}
                                showUnit={false}
                                defaultValue={40}
                                max={200}
                            />

                            {"icon" === icon && (
                                <AdvancedPopColorControl
                                    label={__("Icon Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={iconColor}
                                    colorDefault={''}
                                    onColorChange={newValue => setAttributes({ iconColor: newValue === undefined ? "transparent" : newValue })}
                                />
                            )}
                        </PanelBody>
                    )}
                    <PanelBody
                        title={__("Number", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumTypo
                            components={["responsiveSize", "weight", "family"]}
                            setAttributes={saveNumberStyles}
                            fontSizeType={{
                                value: numberStyles[0].numberSizeUnit,
                                label: __("numberSizeUnit", 'premium-blocks-for-gutenberg'),
                            }}
                            fontSize={numberStyles[0].numberSize}
                            fontSizeMobile={numberStyles[0].numberSizeMobile}
                            fontSizeTablet={numberStyles[0].numberSizeTablet}
                            onChangeSize={newSize => saveNumberStyles({ numberSize: newSize })}
                            onChangeTabletSize={newSize => saveNumberStyles({ numberSizeTablet: newSize })}
                            onChangeMobileSize={newSize => saveNumberStyles({ numberSizeMobile: newSize })}
                            fontFamily={counterFamily}
                            weight={numberStyles[0].numberWeight}
                            onChangeWeight={newWeight =>
                                saveNumberStyles({ numberWeight: newWeight })
                            }
                            onChangeFamily={(fontFamily) => setAttributes({ counterFamily: fontFamily })}
                        />
                        <AdvancedPopColorControl
                            label={__("Number Color", 'premium-blocks-for-gutenberg')}
                            colorValue={numberStyles[0].numberColor}
                            colorDefault={''}
                            onColorChange={newValue => saveNumberStyles({ numberColor: newValue === undefined ? "transparent" : newValue })}
                        />
                    </PanelBody>
                    {prefix && (
                        <PanelBody
                            title={__("Prefix", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <TextControl
                                label={__("Prefix", 'premium-blocks-for-gutenberg')}
                                value={prefixStyles[0].prefixTxt}
                                onChange={value => savePrefixStyle({ prefixTxt: value })}
                            />
                            <PremiumTypo
                                components={["responsiveSize", "weight", "family"]}
                                setAttributes={savePrefixStyle}
                                fontSizeType={{
                                    value: prefixStyles[0].prefixSizeUnit,
                                    label: __("prefixSizeUnit", 'premium-blocks-for-gutenberg'),
                                }}
                                fontSize={prefixStyles[0].prefixSize}
                                fontSizeMobile={prefixStyles[0].prefixSizeMobile}
                                fontSizeTablet={prefixStyles[0].prefixSizeTablet}
                                onChangeSize={newSize => savePrefixStyle({ prefixSize: newSize })}
                                onChangeTabletSize={newSize => savePrefixStyle({ prefixSizeTablet: newSize })}
                                onChangeMobileSize={newSize => savePrefixStyle({ prefixSizeMobile: newSize })}
                                weight={prefixStyles[0].prefixWeight}
                                onChangeWeight={newWeight => savePrefixStyle({ prefixWeight: newWeight })}
                                fontFamily={prefixStyles[0].prefixFamily}
                                onChangeFamily={(fontFamily) => savePrefixStyle({ prefixFamily: fontFamily })}
                            />
                            <AdvancedPopColorControl
                                label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                colorValue={prefixStyles[0].prefixColor}
                                colorDefault={''}
                                onColorChange={newValue => savePrefixStyle({ prefixColor: newValue === undefined ? "transparent" : newValue })}
                            />
                            <ResponsiveSingleRangeControl
                                label={__("Gap After", 'premium-blocks-for-gutenberg')}
                                value={prefixStyles[0].prefixGap}
                                onChange={newValue => savePrefixStyle({ prefixGap: newValue })}
                                showUnit={false}
                                defaultValue={2}
                            />
                        </PanelBody>
                    )}
                    {suffix && (
                        <PanelBody
                            title={__("Suffix", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <TextControl
                                label={__("Suffix", 'premium-blocks-for-gutenberg')}
                                value={suffixStyles[0].suffixTxt}
                                onChange={value => saveSuffixStyle({ suffixTxt: value })}
                            />
                            <PremiumTypo
                                components={["responsiveSize", "weight", "family"]}
                                setAttributes={saveSuffixStyle}
                                fontSizeType={{
                                    value: suffixStyles[0].suffixSizeUnit,
                                    label: __("suffixSizeUnit", 'premium-blocks-for-gutenberg'),
                                }}
                                fontSize={suffixStyles[0].suffixSize}
                                fontSizeMobile={suffixStyles[0].suffixSizeMobile}
                                fontSizeTablet={suffixStyles[0].suffixSizeTablet}
                                onChangeSize={newSize => saveSuffixStyle({ suffixSize: newSize })}
                                onChangeTabletSize={newSize => saveSuffixStyle({ suffixSizeTablet: newSize })}
                                onChangeMobileSize={newSize => saveSuffixStyle({ suffixSizeMobile: newSize })}
                                weight={suffixStyles[0].suffixWeight}
                                onChangeWeight={newWeight => saveSuffixStyle({ suffixWeight: newWeight })}
                                fontFamily={suffixStyles[0].suffixFamily}
                                onChangeFamily={(fontFamily) => saveSuffixStyle({ suffixFamily: fontFamily })}
                            />
                            <AdvancedPopColorControl
                                label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                colorValue={suffixStyles[0].suffixColor}
                                colorDefault={''}
                                onColorChange={newValue => saveSuffixStyle({ suffixColor: newValue === undefined ? "transparent" : newValue })}
                            />
                            <ResponsiveSingleRangeControl
                                label={__("Gap Before", 'premium-blocks-for-gutenberg')}
                                value={suffixStyles[0].suffixGap}
                                onChange={newValue => saveSuffixStyle({ suffixGap: newValue })}
                                showUnit={false}
                                defaultValue={2}
                            />
                        </PanelBody>
                    )}
                    {titleCheck && (
                        <PanelBody
                            title={__("Title", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <TextControl
                                label={__("Title Text", 'premium-blocks-for-gutenberg')}
                                value={titleTxt}
                                onChange={value => setAttributes({ titleTxt: value })}
                            />
                            <PremiumTypo
                                components={["responsiveSize", "weight", "spacing", "style", "upper", "family"]}
                                setAttributes={saveTitleStyles}
                                fontSizeType={{
                                    value: titleStyles[0].titleSizeUnit,
                                    label: __("titleSizeUnit", 'premium-blocks-for-gutenberg'),
                                }}
                                fontSize={titleStyles[0].titleSize}
                                fontSizeMobile={titleStyles[0].titleSizeMobile}
                                fontSizeTablet={titleStyles[0].titleSizeTablet}
                                onChangeSize={newSize => saveTitleStyles({ titleSize: newSize })}
                                onChangeTabletSize={newSize => saveTitleStyles({ titleSizeTablet: newSize })}
                                onChangeMobileSize={newSize => saveTitleStyles({ titleSizeMobile: newSize })}
                                fontFamily={titleStyles[0].titleFamily}
                                weight={titleStyles[0].titleWeight}
                                style={titleStyles[0].titleStyle}
                                spacing={titleStyles[0].titleSpacing}
                                upper={titleStyles[0].titleUpper}
                                onChangeWeight={newWeight => saveTitleStyles({ titleWeight: newWeight })}
                                onChangeStyle={newStyle => saveTitleStyles({ titleStyle: newStyle })}
                                onChangeSpacing={newValue => saveTitleStyles({ titleSpacing: newValue })}
                                onChangeFamily={(fontFamily) => saveTitleStyles({ titleFamily: fontFamily })}
                                onChangeUpper={check => saveTitleStyles({ titleUpper: check })}
                            />
                            <AdvancedPopColorControl
                                label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                colorValue={titleStyles[0].titleColor}
                                colorDefault={''}
                                onColorChange={newValue => saveTitleStyles({ titleColor: newValue === undefined ? "transparent" : newValue })}
                            />
                            <PanelBody
                                title={__("Spacings", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body-inner"
                                initialOpen={false}
                            >
                                <ResponsiveSingleRangeControl
                                    label={__("Margin Top", 'premium-blocks-for-gutenberg')}
                                    value={titleStyles[0].titleT}
                                    onChange={newValue => saveTitleStyles({ titleT: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                />

                                <ResponsiveSingleRangeControl
                                    label={__("Margin Bottom", 'premium-blocks-for-gutenberg')}
                                    value={titleStyles[0].titleB}
                                    onChange={newValue => saveTitleStyles({ titleB: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                />
                            </PanelBody>
                        </PanelBody>
                    )}
                    <PanelBody
                        title={__("Container", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumBackgroundControl
                            setAttributes={setAttributes}
                            saveContainerStyle={saveContainerStyle}
                            backgroundType={backgroundType}
                            backgroundColor={containerStyles[0].containerBack}
                            backgroundImageID={containerStyles[0].backgroundImageID}
                            backgroundImageURL={containerStyles[0].backgroundImageURL}
                            backgroundPosition={containerStyles[0].backgroundPosition}
                            backgroundRepeat={containerStyles[0].backgroundRepeat}
                            backgroundSize={containerStyles[0].backgroundSize}
                            fixed={containerStyles[0].fixed}
                            gradientLocationOne={containerStyles[0].gradientLocationOne}
                            gradientColorTwo={containerStyles[0].gradientColorTwo}
                            gradientLocationTwo={containerStyles[0].gradientLocationTwo}
                            gradientAngle={containerStyles[0].gradientAngle}
                            gradientPosition={containerStyles[0].gradientPosition}
                            gradientType={containerStyles[0].gradientType}
                        />
                        <PremiumBorder
                            borderType={containerStyles[0].borderType}
                            borderWidth={containerStyles[0].borderWidth}
                            top={borderTop}
                            right={borderRight}
                            bottom={borderBottom}
                            left={borderLeft}
                            borderColor={containerStyles[0].borderColor}
                            borderRadius={containerStyles[0].borderRadius}
                            onChangeType={(newType) => saveContainerStyle({ borderType: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    borderCount: true,
                                    borderTop: top,
                                    borderRight: right,
                                    borderBottom: bottom,
                                    borderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) => saveContainerStyle({ borderColor: colorValue })}
                            onChangeRadius={(newRadius) => saveContainerStyle({ borderRadius: newRadius })}
                        />
                        <PremiumBoxShadow
                            inner={true}
                            color={containerStyles[0].shadowColor}
                            blur={containerStyles[0].shadowBlur}
                            horizontal={containerStyles[0].shadowHorizontal}
                            vertical={containerStyles[0].shadowVertical}
                            position={containerStyles[0].shadowPosition}
                            withAlpha={true}
                            onChangeColor={newColor => { saveContainerStyle({ shadowColor: newColor }) }}
                            onChangeBlur={newBlur => saveContainerStyle({ shadowBlur: newBlur })}
                            onChangehHorizontal={newValue => saveContainerStyle({ shadowHorizontal: newValue })}
                            onChangeVertical={newValue => saveContainerStyle({ shadowVertical: newValue })}
                            onChangePosition={newValue => saveContainerStyle({ shadowPosition: newValue })}
                        />

                        <PremiumResponsivePadding
                            paddingT={paddingT}
                            paddingR={paddingR}
                            paddingB={paddingB}
                            paddingL={paddingL}
                            paddingTTablet={paddingTTablet}
                            paddingRTablet={paddingRTablet}
                            paddingBTablet={paddingBTablet}
                            paddingLTablet={paddingLTablet}
                            paddingTMobile={paddingTMobile}
                            paddingRMobile={paddingRMobile}
                            paddingBMobile={paddingBMobile}
                            paddingLMobile={paddingLMobile}
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
                        {__("Please Enable Font Awesome Icons from Plugin settings", 'premium-blocks-for-gutenberg')}
                    </p>
                )}
            </div>,
            <div
                id={`premium-countup-${block_id}`}
                className={`${mainClasses}__wrap premium-countup-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                style={{
                    justifyContent: align,
                    flexDirection: flexDir,
                    backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
                    boxShadow: `${containerStyles[0].shadowHorizontal}px ${containerStyles[0].shadowVertical}px ${containerStyles[0].shadowBlur}px ${containerStyles[0].shadowColor} ${containerStyles[0].shadowPosition}`,
                    backgroundImage: btnbg,
                    backgroundRepeat: containerStyles[0].backgroundRepeat,
                    backgroundPosition: containerStyles[0].backgroundPosition,
                    backgroundSize: containerStyles[0].backgroundSize,
                    backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                    borderStyle: containerStyles[0].borderType,
                    borderWidth: borderCount
                        ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                        : containerStyles[0].borderWidth + "px",
                    borderRadius: containerStyles[0].borderRadius + "px",
                    borderColor: containerStyles[0].borderColor,
                    paddingTop: containerPaddingTop + containerStyles[0].paddingU,
                    paddingRight: containerPaddingRight + containerStyles[0].paddingU,
                    paddingBottom: containerPaddingBottom + containerStyles[0].paddingU,
                    paddingLeft: containerPaddingLeft + containerStyles[0].paddingU,
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
                                    fontSize: `${prefixFontSize}${prefixStyles[0].prefixSizeUnit}`,
                                    fontFamily: prefixStyles[0].prefixFamily,
                                    color: prefixStyles[0].prefixColor,
                                    fontWeight: prefixStyles[0].prefixWeight,
                                    marginRight: prefixStyles[0].prefixGap + "px"
                                }}
                            >
                                {prefixStyles[0].prefixTxt}
                            </p>
                        )}
                        <p
                            className={`premium-countup__increment`}
                            data-interval={time}
                            data-delay={delay}
                            style={{
                                fontSize: `${numberFontSize}${numberStyles[0].numberSizeUnit}`,
                                fontFamily: counterFamily,
                                color: numberStyles[0].numberColor,
                                fontWeight: numberStyles[0].numberWeight
                            }}
                        >
                            {increment}
                        </p>
                        {suffix && (
                            <p
                                className={`premium-countup__suffix`}
                                style={{
                                    fontSize: `${suffixFontSize}${suffixStyles[0].suffixSizeUnit}`,
                                    fontFamily: suffixStyles[0].suffixFamily,
                                    color: suffixStyles[0].suffixColor,
                                    fontWeight: suffixStyles[0].suffixWeight,
                                    marginLeft: suffixStyles[0].suffixGap + "px"
                                }}
                            >
                                {suffixStyles[0].suffixTxt}
                            </p>
                        )}
                    </div>
                    {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                        <h3
                            className={`premium-countup__title`}
                            style={{
                                fontSize: `${titleFontSize}${titleStyles[0].titleSizeUnit}`,
                                fontFamily: titleStyles[0].titleFamily,
                                marginTop: titleStyles[0].titleT + "px",
                                marginBottom: titleStyles[0].titleB + "px",
                                color: titleStyles[0].titleColor,
                                letterSpacing: titleStyles[0].titleSpacing + "px",
                                fontWeight: titleStyles[0].titleWeight,
                                textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                fontStyle: titleStyles[0].titleStyle
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
                            fontSize: `${titleFontSize}${titleStyles[0].titleSizeUnit}`,
                            fontFamily: titleStyles[0].titleFamily,
                            marginTop: titleStyles[0].titleT + "px",
                            marginBottom: titleStyles[0].titleB + "px",
                            color: titleStyles[0].titleColor,
                            letterSpacing: titleStyles[0].titleSpacing + "px",
                            fontWeight: titleStyles[0].titleWeight,
                            textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                            fontStyle: titleStyles[0].titleStyle,
                            alignSelf: selfAlign
                        }}
                    >
                        {titleTxt}
                    </h3>
                )}
                {loadCounterGoogleFonts}
                {loadTitleGoogleFonts}
                {loadSuffixGoogleFonts}
                {loadPrefixGoogleFonts}
            </div>
        ];
    }
};


export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)