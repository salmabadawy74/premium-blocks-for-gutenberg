import classnames from "classnames";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumBorder from "../../components/premium-border";
import PremiumBackgroundControl from "../../components/Premium-Background-Control";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import PremiumShadow from "../../components/PremiumShadow";
import SpacingControl from '../../components/premium-responsive-spacing'
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import InsideTabs from '../../components/InsideTabs'
import InsideTab from '../../components/InsideTab';
import ResponsiveRadioControl from '../../components/responsive-radio'
import Icons from "../../components/icons";
import { gradientBackground, borderCss, padddingCss, marginCss, generateBlockId } from '../../components/HelperFunction'

const { __ } = wp.i18n;

const {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl
} = wp.components;

const { useEffect, Fragment } = wp.element;

const { InspectorControls } = wp.blockEditor;

const { withSelect } = wp.data

const edit = props => {
    const { isSelected, setAttributes, className } = props;

    useEffect(() => {
        setAttributes({ blockId: "premium-icon-" + generateBlockId(props.clientId) });
        setAttributes({ classMigrate: true })
    }, [])

    const {
        blockId,
        iconType,
        selectedIcon,
        align,
        hoverEffect,
        iconStyles,
        urlCheck,
        link,
        target,
        hideDesktop,
        hideTablet,
        hideMobile,
        iconSize,
        iconPadding,
        iconMargin,
        wrapPadding,
        wrapMargin,
        containerBorder,
        iconBorder,
        containerBackground,
        containerShadow,
        iconShadow
    } = props.attributes;

    const EFFECTS = [
        {
            value: "none",
            label: __("None", 'premium-blocks-for-gutenberg')
        },
        {
            value: "pulse",
            label: __("Pulse", 'premium-blocks-for-gutenberg')
        },
        {
            value: "rotate",
            label: __("Rotate", 'premium-blocks-for-gutenberg')
        },
        {
            value: "drotate",
            label: __("3D Rotate", 'premium-blocks-for-gutenberg')
        },
        {
            value: "buzz",
            label: __("Buzz", 'premium-blocks-for-gutenberg')
        },
        {
            value: "drop",
            label: __("Drop Shadow", 'premium-blocks-for-gutenberg')
        },
        {
            value: "wobble",
            label: __("Wobble", 'premium-blocks-for-gutenberg')
        }
    ];

    const saveIconStyle = (value) => {
        const newUpdate = iconStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            iconStyles: newUpdate,
        });
    }

    const mainClasses = classnames(className, "premium-icon");

    return [
        isSelected && (
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={['layout', 'style', 'advance']}>
                    <InspectorTab key={'layout'}>
                        <PanelBody
                            title={__("Icon", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <p className="premium-editor-paragraph">{__("Select Icon", 'premium-blocks-for-gutenberg')}</p>
                            <FontIconPicker
                                icons={iconsList}
                                onChange={newIcon => setAttributes({ selectedIcon: newIcon })}
                                value={selectedIcon}
                                isMulti={false}
                                appendTo="body"
                                noSelectedPlaceholder={__("Select Icon", 'premium-blocks-for-gutenberg')}
                            />
                            <ToggleControl
                                label={__("Link", 'premium-blocks-for-gutenberg')}
                                checked={urlCheck}
                                onChange={newValue => setAttributes({ urlCheck: newValue })}
                            />
                            {urlCheck && (
                                <Fragment>
                                    <TextControl
                                        label={__("Link", 'premium-blocks-for-gutenberg')}
                                        value={link}
                                        onChange={(newLink) => setAttributes({ link: newLink })}
                                    />
                                    <ToggleControl
                                        label={__("Open link in new tab", 'premium-blocks-for-gutenberg')}
                                        checked={target}
                                        onChange={newValue => setAttributes({ target: newValue })}
                                    />
                                </Fragment>
                            )}
                            <ResponsiveRadioControl
                                label={__("Alignment", 'premium-blocks-for-gutenberg')}
                                choices={[
                                    { value: 'left', label: __('Left'), icon: Icons.alignLeft },
                                    { value: 'center', label: __('Center'), icon: Icons.alignCenter },
                                    { value: 'right', label: __('Right'), icon: Icons.alignRight }
                                ]}
                                value={align}
                                onChange={(newValue) => setAttributes({ align: newValue })}
                                showIcons={true}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={'style'}>
                        <PanelBody
                            title={__("Icon Style", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <ResponsiveRangeControl
                                label={__('Size', 'premium-blocks-for-gutenberg')}
                                value={iconSize}
                                onChange={(value) => setAttributes({ iconSize: value })}
                                min={0}
                                max={300}
                                step={1}
                                showUnit={true}
                                units={['px', 'em', 'rem']}
                                defaultValue={50}
                            />
                            <InsideTabs>
                                <InsideTab tabTitle={__('Normal')}>
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__("Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={iconStyles[0].iconColor}
                                            colorDefault={''}
                                            onColorChange={value => saveIconStyle({ iconColor: value })}
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={iconStyles[0].iconBack}
                                            colorDefault={''}
                                            onColorChange={value => saveIconStyle({ iconBack: value })}
                                        />
                                    </Fragment>
                                </InsideTab>
                                <InsideTab tabTitle={__('Hover')}>
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__("Hover Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={iconStyles[0].iconHoverColor}
                                            colorDefault={''}
                                            onColorChange={value => saveIconStyle({ iconHoverColor: value })}
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Hover Background Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={iconStyles[0].iconHoverBack}
                                            colorDefault={''}
                                            onColorChange={value => saveIconStyle({ iconHoverBack: value })}
                                        />
                                        <SelectControl
                                            label={__("Hover Effect", 'premium-blocks-for-gutenberg')}
                                            options={EFFECTS}
                                            value={hoverEffect}
                                            onChange={newEffect => setAttributes({ hoverEffect: newEffect })}
                                        />
                                    </Fragment>
                                </InsideTab>
                            </InsideTabs>
                            <PremiumShadow
                                label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                                value={iconShadow}
                                onChange={(value) => setAttributes({ iconShadow: value })}
                            />
                            <hr />
                            <PremiumBorder
                                label={__('Border', 'premium-blocks-for-gutenberg')}
                                value={iconBorder}
                                onChange={(value) => setAttributes({ iconBorder: value })}
                            />
                            <hr />
                            <SpacingControl
                                label={__('Margin', 'premium-blocks-for-gutenberg')}
                                value={iconMargin}
                                onChange={(value) => setAttributes({ iconMargin: value })}
                                showUnits={true}
                                responsive={true}
                            />
                            <SpacingControl
                                label={__('Padding', 'premium-blocks-for-gutenberg')}
                                value={iconPadding}
                                onChange={(value) => setAttributes({ iconPadding: value })}
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__("Container Style", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumBackgroundControl
                                value={containerBackground}
                                onChange={(value) => setAttributes({ containerBackground: value })}
                            />
                            <PremiumShadow
                                value={containerShadow}
                                onChange={(value) => setAttributes({ containerShadow: value })}
                            />
                            <hr />
                            <PremiumBorder
                                label={__('Border', 'premium-blocks-for-gutenberg')}
                                value={containerBorder}
                                onChange={(value) => setAttributes({ containerBorder: value })}
                            />
                            <hr />
                            <SpacingControl
                                label={__('Margin', 'premium-blocks-for-gutenberg')}
                                value={wrapMargin}
                                onChange={(value) => setAttributes({ wrapMargin: value })}
                                showUnits={true}
                                responsive={true}
                            />
                            <SpacingControl
                                label={__('Padding', 'premium-blocks-for-gutenberg')}
                                value={wrapPadding}
                                onChange={(value) => setAttributes({ wrapPadding: value })}
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={'advance'}>
                        <PremiumResponsiveTabs
                            Desktop={hideDesktop}
                            Tablet={hideTablet}
                            Mobile={hideMobile}
                            onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                            onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                            onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                        />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
        ),
        <div
            className={`${mainClasses}__container ${blockId} ${hideDesktop} ${hideTablet} ${hideMobile}`}
        >
            <style>
                {`
                    .${blockId} .premium-icon-container .premium-icon__${hoverEffect}:hover {
                        color: ${iconStyles[0].iconHoverColor || "#6ec1e4"} !important;
                        background-color: ${iconStyles[0].iconHoverBack} !important;
                    }
                 `}
            </style>
            <div
                className={`premium-icon-container`}
                style={{
                    textAlign: align[props.deviceType],
                    ...gradientBackground(containerBackground),
                    ...borderCss(containerBorder, props.deviceType),
                    ...padddingCss(wrapPadding, props.deviceType),
                    ...marginCss(wrapMargin, props.deviceType),
                    boxShadow: `${containerShadow.horizontal || 0}px ${containerShadow.vertical ||
                        0}px ${containerShadow.blur || 0}px ${containerShadow.color} ${containerShadow.position}`,
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
                            color: iconStyles[0].iconColor || "#6ec1e4",
                            backgroundColor: iconStyles[0].iconBack,
                            fontSize: (iconSize[props.deviceType] || 50) + iconSize.unit,
                            ...borderCss(iconBorder, props.deviceType),
                            ...padddingCss(iconPadding, props.deviceType),
                            ...marginCss(iconMargin, props.deviceType),
                            textShadow: `${iconShadow.horizontal || 0}px ${iconShadow.vertical ||
                                0}px ${iconShadow.blur || 0}px ${iconShadow.color}`
                        }}
                    />
                )}
            </div>
        </div>
    ];
};

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)