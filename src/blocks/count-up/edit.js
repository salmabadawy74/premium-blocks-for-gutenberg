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
import SpacingComponent from '../../components/premium-responsive-spacing';
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import { gradientBackground, generateBlockId, borderCss, paddingCss, typographyCss, marginCss } from "../../components/HelperFunction";
import WebfontLoader from "../../components/typography/fontLoader";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";

const { __ } = wp.i18n;
const { withSelect } = wp.data
const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components;

const { InspectorControls, RichText, useBlockProps } = wp.blockEditor;

const { Fragment, useEffect } = wp.element;

function Edit(props) {
    const { setAttributes, className, clientId } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-countup-" + generateBlockId(clientId)
        });
        setAttributes({ classMigrate: true });
    }, []);

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
        background,
        prefixPadding,
        prefixMargin,
        numberPadding,
        numberMargin,
        suffixPadding,
        suffixMargin,
        iconMargin,
        titlePadding,
        titleMargin,
    } = props.attributes;

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

    let loadCounterGoogleFonts;
    let loadTitleGoogleFonts;
    let loadSuffixGoogleFonts;
    let loadPrefixGoogleFonts;

    if (numberTypography?.fontFamily !== 'Default') {
        const numberConfig = {
            google: {
                families: [numberTypography.fontFamily]
            }
        }
        loadCounterGoogleFonts = (
            <WebfontLoader config={numberConfig}>
            </WebfontLoader>
        )
    }

    if (titleTypography?.fontFamily !== "Default") {
        const titleConfig = {
            google: {
                families: [titleTypography.fontFamily]
            }
        }
        loadTitleGoogleFonts = (
            <WebfontLoader config={titleConfig}>
            </WebfontLoader>
        )
    }

    if (suffixTypography?.fontFamily !== "Default") {
        const suffixConfig = {
            google: {
                families: [suffixTypography.fontFamily]
            }
        }
        loadSuffixGoogleFonts = (
            <WebfontLoader config={suffixConfig}>
            </WebfontLoader>
        )
    }

    if (prefixTypography?.fontFamily !== "Default") {
        const prefixConfig = {
            google: {
                families: [prefixTypography.fontFamily]
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
        const newUpdate = titleStyles.map((item, indexx) => {
            if (0 === indexx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ titleStyles: newUpdate });
    }

    const savePrefixStyle = (value) => {
        const newUpdate = prefixStyles.map((item, indx) => {
            if (0 === indx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ prefixStyles: newUpdate });
    }

    const saveSuffixStyle = (value) => {
        const newUpdate = suffixStyles.map((item, i) => {
            if (0 === i) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ suffixStyles: newUpdate });
    }

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={['layout', 'style', 'advance']}>
                    <InspectorTab key={'layout'}>
                        <PanelBody
                            title={__("Counter", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={true}
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
                                    choices={[{ value: 'flex-start', label: __('Left', 'premium-blocks-for-gutenberg'), icon: Icons.alignLeft }, { value: 'center', label: __('Center', 'premium-blocks-for-gutenberg'), icon: Icons.alignCenter }, { value: 'flex-end', label: __('Right', 'premium-blocks-for-gutenberg'), icon: Icons.alignRight }]}
                                    value={align}
                                    onChange={(alignn) => setAttributes({ align: alignn, selfAlign: alignn })}
                                    label={__("Align", "premium-blocks-for-gutenberg")}
                                    showIcons={true} />
                            )}
                            {flexDir == 'row-reverse' && (
                                <MultiButtonsControl
                                    choices={[{ value: 'flex-end', label: __('Left', "premium-blocks-for-gutenberg"), icon: Icons.alignLeft }, { value: 'center', label: __('Center', "premium-blocks-for-gutenberg"), icon: Icons.alignCenter }, { value: 'flex-start', label: __('Right', "premium-blocks-for-gutenberg"), icon: Icons.alignRight }]}
                                    value={align}
                                    onChange={(aligns) => setAttributes({ align: aligns, selfAlign: aligns })}
                                    label={__("Align", "premium-blocks-for-gutenberg")}
                                    showIcons={true} />
                            )}
                            {flexDir == 'column-reverse' && (
                                <MultiButtonsControl
                                    choices={[{ value: 'flex-start', label: __('Left', "premium-blocks-for-gutenberg"), icon: Icons.alignLeft }, { value: 'center', label: __('Center', "premium-blocks-for-gutenberg"), icon: Icons.alignCenter }, { value: 'flex-end', label: __('Right', "premium-blocks-for-gutenberg"), icon: Icons.alignRight }]}
                                    value={align}
                                    onChange={(aligns) => setAttributes({ align: aligns, selfAlign: aligns })}
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

                                {"icon" === icon && (
                                    <Fragment>
                                        <FontIconPicker
                                            icons={iconsList}
                                            onChange={(newIcon) => setAttributes({ faIcon: newIcon })}
                                            value={iconClass}
                                            isMulti={false}
                                            noSelectedPlaceholder={__("Select Icon", "premium-blocks-for-gutenberg")}
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
                                                imageID: ""
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
                            initialOpen={true}
                        >
                            <PremiumBackgroundControl
                                value={background}
                                onChange={(value) => setAttributes({ background: value })}
                            />
                            <PremiumShadow
                                value={boxShadow}
                                onChange={(value) => setAttributes({ boxShadow: value })}
                            />
                            <hr />
                            <PremiumBorder
                                label={__("Border", 'premium-blocks-for-gutenberg')}
                                value={border}
                                onChange={(value) => setAttributes({ border: value })}
                            />
                            <hr />
                            <SpacingComponent
                                value={padding}
                                responsive={true}
                                showUnits={true}
                                label={__("Padding", 'premium-blocks-for-gutenberg')}
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
                                {"icon" === icon && (
                                    <AdvancedPopColorControl
                                        label={__("Icon Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={iconColor}
                                        colorDefault={''}
                                        onColorChange={newValue => setAttributes({ iconColor: newValue })}
                                    />
                                )}
                                <SpacingComponent
                                    value={iconMargin}
                                    responsive={true}
                                    showUnits={true}
                                    label={__("Margin", 'premium-blocks-for-gutenberg')}
                                    onChange={(value) => setAttributes({ iconMargin: value })}
                                />
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
                                <AdvancedPopColorControl
                                    label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={titleStyles[0].titleColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveTitleStyles({ titleColor: newValue })}
                                />
                                <hr />
                                <SpacingComponent
                                    value={titleMargin}
                                    responsive={true}
                                    showUnits={true}
                                    label={__("Margin", 'premium-blocks-for-gutenberg')}
                                    onChange={(value) => setAttributes({ titleMargin: value })}
                                />
                                <SpacingComponent
                                    value={titlePadding}
                                    responsive={true}
                                    showUnits={true}
                                    label={__("Padding", 'premium-blocks-for-gutenberg')}
                                    onChange={(value) => setAttributes({ titlePadding: value })}
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
                            <AdvancedPopColorControl
                                label={__("Number Color", 'premium-blocks-for-gutenberg')}
                                colorValue={numberStyles[0].numberColor}
                                colorDefault={''}
                                onColorChange={newValue => saveNumberStyles({ numberColor: newValue })}
                            />
                            <hr />
                            <SpacingComponent
                                value={numberMargin}
                                responsive={true}
                                showUnits={true}
                                label={__("Margin", 'premium-blocks-for-gutenberg')}
                                onChange={(value) => setAttributes({ numberMargin: value })}
                            />
                            <SpacingComponent
                                value={numberPadding}
                                responsive={true}
                                showUnits={true}
                                label={__("Padding", 'premium-blocks-for-gutenberg')}
                                onChange={(value) => setAttributes({ numberPadding: value })}
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
                                <AdvancedPopColorControl
                                    label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={prefixStyles[0].prefixColor}
                                    colorDefault={''}
                                    onColorChange={newValue => savePrefixStyle({ prefixColor: newValue })}
                                />
                                <hr />
                                <SpacingComponent
                                    value={prefixMargin}
                                    responsive={true}
                                    showUnits={true}
                                    label={__("Margin", 'premium-blocks-for-gutenberg')}
                                    onChange={(value) => setAttributes({ prefixMargin: value })}
                                />
                                <SpacingComponent
                                    value={prefixPadding}
                                    responsive={true}
                                    showUnits={true}
                                    label={__("Padding", 'premium-blocks-for-gutenberg')}
                                    onChange={(value) => setAttributes({ prefixPadding: value })}
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
                                <AdvancedPopColorControl
                                    label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={suffixStyles[0].suffixColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveSuffixStyle({ suffixColor: newValue })}
                                />
                                <hr />
                                <SpacingComponent
                                    value={suffixMargin}
                                    responsive={true}
                                    showUnits={true}
                                    label={__("Margin", 'premium-blocks-for-gutenberg')}
                                    onChange={(value) => setAttributes({ suffixMargin: value })}
                                />
                                <SpacingComponent
                                    value={suffixPadding}
                                    responsive={true}
                                    showUnits={true}
                                    label={__("Padding", 'premium-blocks-for-gutenberg')}
                                    onChange={(value) => setAttributes({ suffixPadding: value })}
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

            <div>
                {iconType === "fa" && 1 != FontAwesomeEnabled && iconCheck && (
                    <p className={`premium-countup__alert`}>
                        {__("Please Enable Font Awesome Icons from Plugin settings", 'premium-blocks-for-gutenberg')}
                    </p>
                )}
            </div>
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `${blockId} premium-countup__wrap`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{
                    justifyContent: align?.[props.deviceType],
                    flexDirection: flexDir,
                    boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                    ...borderCss(border, props.deviceType),
                    ...paddingCss(padding, props.deviceType),
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
                                    : selfAlign?.[props.deviceType],
                            ...marginCss(iconMargin, props.deviceType)
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
                                : selfAlign?.[props.deviceType],
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
                                    ...typographyCss(prefixTypography, props.deviceType),
                                    ...marginCss(prefixMargin, props.deviceType),
                                    ...paddingCss(prefixPadding, props.deviceType)
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
                                ...typographyCss(numberTypography, props.deviceType),
                                ...marginCss(numberMargin, props.deviceType),
                                ...paddingCss(numberPadding, props.deviceType),
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
                                    ...typographyCss(suffixTypography, props.deviceType),
                                    ...marginCss(suffixMargin, props.deviceType),
                                    ...paddingCss(suffixPadding, props.deviceType)
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
                                ...typographyCss(titleTypography, props.deviceType),
                                ...marginCss(titleMargin, props.deviceType),
                                ...paddingCss(titlePadding, props.deviceType)
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
                            ...typographyCss(titleTypography, props.deviceType),
                            alignSelf: selfAlign?.[props.deviceType],
                            ...marginCss(titleMargin, props.deviceType),
                            ...paddingCss(titlePadding, props.deviceType)
                        }}
                        tagName="h3"
                    />
                )}
                {loadCounterGoogleFonts}
                {loadTitleGoogleFonts}
                {loadSuffixGoogleFonts}
                {loadPrefixGoogleFonts}
            </div>
        </Fragment>
    );
}


export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(Edit)