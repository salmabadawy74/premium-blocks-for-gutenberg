import classnames from "classnames";
import { FontAwesomeEnabled } from "../../../assets/js/settings"
import PremiumTypo from "../../components/premium-typo"
import PremiumShadow from "../../components/PremiumShadow"
import PremiumBorder from "../../components/premium-border"
import PremiumMediaUpload from "../../components/premium-media-upload"
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs'
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import PremiumBackgroundControl from "../../components/Premium-Background-Control"
import MultiButtonsControl from '../../components/responsive-radio';
import Icons from "../../components/icons";
const { __ } = wp.i18n;
const { withSelect } = wp.data
import SpacingComponent from '../../components/premium-responsive-spacing';
import GoogleFontLoader from "react-google-font-loader";
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import { gradientBackground, generateBlockId, borderCss, paddingCss, typographyCss } from "../../components/HelperFunction";

const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components;

const { InspectorControls, RichText } = wp.blockEditor;

const { Fragment, Component } = wp.element;

class edit extends Component {
    constructor() {
        super(...arguments);
    }
    componentDidMount() {
        const { setAttributes, clientId } = this.props;
        if (!this.props.attributes.blockId) {
            setAttributes({ blockId: "premium-countup-" + generateBlockId(clientId) });
        }
        setAttributes({ classMigrate: true });
    }

    render() {
        const { isSelected, setAttributes, className } = this.props;

        const {
            blockId,
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
            hideDesktop,
            hideTablet,
            hideMobile,
            numberStyles,
            titleStyles,
            suffixStyles,
            prefixStyles,
            padding,
            numberTypography,
            prefixTypography,
            suffixTypography,
            titleTypography,
            boxShadow,
            border,
            background
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

        let loadCounterGoogleFonts;
        let loadTitleGoogleFonts;
        let loadSuffixGoogleFonts;
        let loadPrefixGoogleFonts;

        if (numberTypography?.fontFamily !== 'Default') {
            loadCounterGoogleFonts = (
                <GoogleFontLoader fonts={[
                    {
                        font: numberTypography?.fontFamily,
                    },
                ]
                } />
            )
        }

        if (titleTypography?.fontFamily !== "Default") {
            loadTitleGoogleFonts = (
                <GoogleFontLoader fonts={[
                    {
                        font: titleTypography?.fontFamily,
                    }]
                } />
            )
        }

        if (suffixTypography?.fontFamily !== "Default") {
            loadSuffixGoogleFonts = (
                <GoogleFontLoader fonts={[
                    {
                        font: suffixTypography?.fontFamily,
                    }]
                } />
            )
        }

        if (prefixTypography?.fontFamily !== "Default") {
            loadPrefixGoogleFonts = (
                <GoogleFontLoader fonts={[
                    {
                        font: prefixTypography?.fontFamily,
                    }]
                } />
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

        const mainClasses = classnames(className, {
            ' premium-desktop-hidden': hideDesktop,
            ' premium-tablet-hidden': hideTablet,
            ' premium-mobile-hidden': hideMobile,
        }, "premium-countup");

        // const alignProperty = flexDir.includes("column") ? 
        return [
            isSelected && (
                <InspectorControls key={"inspector"}>
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
                            <PanelBody
                                title={__("Counter", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
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

                                {!flexDir.includes("reverse") && (
                                    <MultiButtonsControl
                                        choices={[{ value: 'flex-start', label: __('Left'), icon: Icons.alignLeft }, { value: 'center', label: __('Center'), icon: Icons.alignCenter }, { value: 'flex-end', label: __('Right'), icon: Icons.alignRight }]}
                                        value={align}
                                        onChange={(align) => setAttributes({ align: align, selfAlign: align })}
                                        label={__("Align", "premium-blocks-for-gutenberg")}
                                        showIcons={true} />
                                )}
                                {flexDir.includes("reverse") && (
                                    <MultiButtonsControl
                                        choices={[{ value: 'flex-end', label: __('Left'), icon: Icons.alignLeft }, { value: 'center', label: __('Center'), icon: Icons.alignCenter }, { value: 'flex-start', label: __('Right'), icon: Icons.alignRight }]}
                                        value={align}
                                        onChange={(align) => setAttributes({ align: align, selfAlign: align })}
                                        label={__("Align", "premium-blocks-for-gutenberg")}
                                        showIcons={true} />
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
                                </PanelBody>
                            )}
                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            <PanelBody
                                title={__("Container", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumBackgroundControl
                                    value={background}
                                    onChange={(value) => setAttributes({ background: value })}
                                />
                                <hr />
                                <PremiumShadow
                                    label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                                    boxShadow={true}
                                    value={boxShadow}
                                    onChange={(value) => setAttributes({ boxShadow: value })}
                                />
                                <hr />
                                <PremiumBorder
                                    label={__("Border")}
                                    value={border}
                                    onChange={(value) => setAttributes({ border: value })}
                                />
                                <hr />
                                <SpacingComponent
                                    value={padding}
                                    responsive={true}
                                    showUnits={true}
                                    label={__("Padding")}
                                    onChange={(value) => setAttributes({ padding: value })}
                                />
                            </PanelBody>
                            {iconCheck && (
                                <PanelBody
                                    title={__("Icon", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <ResponsiveSingleRangeControl
                                        label={__("Size", 'premium-blocks-for-gutenberg')}
                                        value={iconSize}
                                        onChange={newValue => setAttributes({ iconSize: newValue })}
                                        showUnit={false}
                                        defaultValue={40}
                                        max={200}
                                    />
                                    <hr />
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
                            {titleCheck && (
                                <PanelBody
                                    title={__("Title", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <PremiumTypo
                                        value={titleTypography}
                                        onChange={newValue => setAttributes({ titleTypography: newValue })}
                                    />
                                    <hr />
                                    <AdvancedPopColorControl
                                        label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={titleStyles[0].titleColor}
                                        colorDefault={''}
                                        onColorChange={newValue => saveTitleStyles({ titleColor: newValue === undefined ? "transparent" : newValue })}
                                    />
                                    <hr />
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
                            )}
                            <PanelBody
                                title={__("Number", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    value={numberTypography}
                                    onChange={newValue => setAttributes({ numberTypography: newValue })}
                                />
                                <hr />
                                <AdvancedPopColorControl
                                    label={__("Number Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={numberStyles[0].numberColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveNumberStyles({ numberColor: newValue })}
                                />
                            </PanelBody>
                            {prefix && (
                                <PanelBody
                                    title={__("Prefix", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <PremiumTypo
                                        value={prefixTypography}
                                        onChange={newValue => setAttributes({ prefixTypography: newValue })}
                                    />
                                    <hr />
                                    <AdvancedPopColorControl
                                        label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={prefixStyles[0].prefixColor}
                                        colorDefault={''}
                                        onColorChange={newValue => savePrefixStyle({ prefixColor: newValue === undefined ? "transparent" : newValue })}
                                    />
                                    <hr />
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
                                    <PremiumTypo
                                        value={suffixTypography}
                                        onChange={newValue => setAttributes({ suffixTypography: newValue })}
                                    />
                                    <hr />
                                    <AdvancedPopColorControl
                                        label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={suffixStyles[0].suffixColor}
                                        colorDefault={''}
                                        onColorChange={newValue => saveSuffixStyle({ suffixColor: newValue === undefined ? "transparent" : newValue })}
                                    />
                                    <hr />
                                    <ResponsiveSingleRangeControl
                                        label={__("Gap Before", 'premium-blocks-for-gutenberg')}
                                        value={suffixStyles[0].suffixGap}
                                        onChange={newValue => saveSuffixStyle({ suffixGap: newValue })}
                                        showUnit={false}
                                        defaultValue={2}
                                    />
                                </PanelBody>
                            )}
                        </InspectorTab>
                        <InspectorTab key={'advance'}>
                            <PremiumResponsiveTabs
                                Desktop={hideDesktop}
                                Tablet={hideTablet}
                                Mobile={hideMobile}
                                onChangeDesktop={(value) => setAttributes({ hideDesktop: value })}
                                onChangeTablet={(value) => setAttributes({ hideTablet: value })}
                                onChangeMobile={(value) => setAttributes({ hideMobile: value })}
                            />
                        </InspectorTab>
                    </InspectorTabs>
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
                className={`${mainClasses}__wrap ${blockId} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                style={{
                    justifyContent: align?.[this.props.deviceType],
                    flexDirection: flexDir,
                    boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                    ...borderCss(border, this.props.deviceType),
                    ...paddingCss(padding, this.props.deviceType),
                    ...gradientBackground(background)
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
                                    : selfAlign?.[this.props.deviceType]
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
                                : selfAlign?.[this.props.deviceType],
                    }}
                >
                    <div className={`premium-countup__desc`}>
                        {prefix && (
                            <RichText
                                className={`premium-countup__prefix`}
                                value={prefixStyles[0].prefixTxt}
                                onChange={value => savePrefixStyle({ prefixTxt: value })}
                                style={{
                                    color: prefixStyles[0].prefixColor,
                                    marginRight: `${prefixStyles[0].prefixGap}px`,
                                    ...typographyCss(prefixTypography, this.props.deviceType)
                                }}
                                tagName="p"
                            />
                        )}
                        <RichText
                            className={`premium-countup__increment`}
                            value={`${increment}`}
                            onChange={value => setAttributes({ increment: value })}
                            style={{
                                color: numberStyles[0].numberColor,
                                ...typographyCss(numberTypography, this.props.deviceType)
                            }}
                            tagName="p"
                            data-interval={time}
                            data-delay={delay}
                        />
                        {suffix && (
                            <RichText
                                className={`premium-countup__suffix`}
                                value={suffixStyles[0].suffixTxt}
                                onChange={value => saveSuffixStyle({ suffixTxt: value })}
                                style={{
                                    color: suffixStyles[0].suffixColor,
                                    marginLeft: suffixStyles[0].suffixGap + "px",
                                    ...typographyCss(suffixTypography, this.props.deviceType)
                                }}
                                tagName="p"
                            />
                        )}
                    </div>
                    {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                        <RichText
                            className={`premium-countup__title`}
                            value={titleTxt}
                            onChange={value => setAttributes({ titleTxt: value })}
                            style={{
                                color: titleStyles[0].titleColor,
                                marginTop: titleStyles[0].titleT + "px",
                                marginBottom: titleStyles[0].titleB + "px",
                                ...typographyCss(titleTypography, this.props.deviceType)
                            }}
                            tagName="h3"
                        />
                    )}
                </div>
                {titleCheck && ("column" === flexDir || "column-reverse" === flexDir) && (
                    <RichText
                        className={`premium-countup__title`}
                        value={titleTxt}
                        onChange={value => setAttributes({ titleTxt: value })}
                        style={{
                            color: titleStyles[0].titleColor,
                            marginTop: titleStyles[0].titleT + "px",
                            marginBottom: titleStyles[0].titleB + "px",
                            ...typographyCss(titleTypography, this.props.deviceType),
                            alignSelf: selfAlign?.[this.props.deviceType]
                        }}
                        tagName="h3"
                    />
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