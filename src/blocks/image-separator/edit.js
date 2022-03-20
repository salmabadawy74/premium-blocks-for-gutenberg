import classnames from "classnames"
import iconsList from "../../components/premium-icons-list";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumFilters from "../../components/premium-filters";

const { __ } = wp.i18n

const {
    Component,
    Fragment,
} = wp.element

const {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    MediaUpload
} = wp.editor

const {
    PanelBody,
    SelectControl,
    TextControl,
    ToggleControl,
    IconButton
} = wp.components;
const { withSelect } = wp.data

class edit extends Component {

    constructor() {
        super(...arguments);
    }
    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
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
        const { attributes, setAttributes, isSelected } = this.props;
        const {
            align,
            className,
            iconType,
            icon,
            imageURL,
            imageID,
            link,
            url,
            gutter,
            blur,
            bright,
            contrast,
            saturation,
            hue,
            blurHover,
            brightHover,
            contrastHover,
            saturationHover,
            hueHover,
            linkTarget,
            iconStyles,
            imgHeight,
            imgHeightTablet,
            imgHeightMobile,
            imgHeightType,
            imgFit,
            advancedBorder,
            advancedBorderValue
        } = attributes
        const ICON = [
            { value: "icon", label: __("Icon", 'premium-blocks-for-gutenberg') },
            { value: "image", label: __("Image", 'premium-blocks-for-gutenberg') }
        ]
        const saveIconStyle = (value) => {
            const newUpdate = iconStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ iconStyles: newUpdate });
        }
        const iconSize = this.getPreviewSize(this.props.deviceType, iconStyles[0].iconSize, iconStyles[0].iconSizeTablet, iconStyles[0].iconSizeMobile);
        const iconBorderRadius = this.getPreviewSize(this.props.deviceType, iconStyles[0].iconBorderRadius, iconStyles[0].iconBorderRadiusTablet, iconStyles[0].iconBorderRadiusMobile);
        const iconPadding = this.getPreviewSize(this.props.deviceType, iconStyles[0].iconPadding, iconStyles[0].iconPaddingTablet, iconStyles[0].iconPaddingMobile);
        const imageHeight = this.getPreviewSize(this.props.deviceType, imgHeight, imgHeightTablet, imgHeightMobile);
        return [
            isSelected && (
                <BlockControls>
                    <AlignmentToolbar
                        value={align}
                        onChange={(value) => {
                            setAttributes({ align: value })
                        }}
                    />
                </BlockControls>
            ),
            isSelected && (
                <InspectorControls>
                    <PanelBody
                        title={__("Image Settings")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Separator Type")}
                            value={iconType}
                            onChange={newSelect => setAttributes({ iconType: newSelect })}
                            options={ICON}
                        />
                        {iconType === 'icon' ? <Fragment>
                            <p>{__("Icon")}</p>
                            <FontIconPicker
                                icons={iconsList}
                                value={iconStyles[0].icon}
                                onChange={value => setAttributes({ icon: value })}
                                isMulti={false}
                                appendTo="body"
                                noSelectedPlaceholder={__("Select Icon")}
                            />
                        </Fragment>
                            : <Fragment>
                                {imageURL && <img src={imageURL} width="100%" height="auto" />}
                                <MediaUpload
                                    allowedTypes={["image"]}
                                    onSelect={media => {
                                        setAttributes({ imageURL: media.url, imageID: media.id });
                                    }}
                                    type="image"
                                    value={imageID}
                                    render={({ open }) => (
                                        <IconButton className="premium-media-uplpad-btn" label={__("Change Image")} icon="edit" onClick={open}>
                                            {__("Change Image")}
                                        </IconButton>
                                    )}
                                />
                            </Fragment>
                        }
                        <ResponsiveRangeControl
                            label={__("Width/Size", 'premium-blocks-for-gutenberg')}
                            value={iconStyles[0].iconSize}
                            onChange={value => saveIconStyle({ iconSize: value })}
                            tabletValue={iconStyles[0].iconSizeTablet}
                            onChangeTablet={value => saveIconStyle({ iconSizeTablet: value })}
                            mobileValue={iconStyles[0].iconSizeMobile}
                            onChangeMobile={value => saveIconStyle({ iconSizeMobile: value })}
                            onChangeUnit={key => saveIconStyle({ iconSizeType: key })}
                            unit={iconStyles[0].iconSizeType}
                            showUnit={true}
                            defaultValue={200}
                            units={["px", "em"]}
                            min={1}
                            max={1000}
                        />
                        {iconType === "image" &&
                            <Fragment>
                                <ResponsiveRangeControl
                                    label={__("Height", 'premium-blocks-for-gutenberg')}
                                    value={imgHeight}
                                    onChange={value => setAttributes({ imgHeight: value })}
                                    tabletValue={imgHeightTablet}
                                    onChangeTablet={value => setAttributes({ imgHeightTablet: value })}
                                    mobileValue={imgHeightMobile}
                                    onChangeMobile={value => setAttributes({ imgHeightMobile: value })}
                                    onChangeUnit={key => setAttributes({ imgHeightType: key })}
                                    unit={imgHeightType}
                                    showUnit={true}
                                    defaultValue={200}
                                    units={["px", "em"]}
                                    min={1}
                                    max={1000}
                                />
                                <SelectControl
                                    label={__("Image Fit")}
                                    value={imgFit}
                                    onChange={newSelect => setAttributes({ imgFit: newSelect })}
                                    options={[
                                        { label: __("Cover", 'premium-blocks-for-gutenberg'), value: 'cover' },
                                        { label: __("Fill", 'premium-blocks-for-gutenberg'), value: 'fill' },
                                        { label: __("Contain", 'premium-blocks-for-gutenberg'), value: 'contain' }
                                    ]}
                                />
                            </Fragment>
                        }
                        <TextControl
                            label={__("Gutter (%)")}
                            type="Number"
                            value={gutter}
                            onChange={newValue => setAttributes({ gutter: parseInt(newValue) })}
                            help="-50% is default. Increase to push the image outside or decrease to pull the image inside."
                        />
                        <ToggleControl
                            label={__("Link")}
                            checked={link}
                            onChange={value => setAttributes({ link: value })}
                        />
                        {link &&
                            <Fragment>
                                <p>{__("URL")}</p>
                                <TextControl
                                    value={url}
                                    onChange={value => setAttributes({ url: value })}
                                    placeholder={__("Enter URL")}
                                />
                                <ToggleControl
                                    label={__("Open links in new tab")}
                                    checked={linkTarget}
                                    onChange={newValue => setAttributes({ linkTarget: newValue })}
                                />
                            </Fragment>
                        }
                    </PanelBody>
                    <PanelBody
                        title={__("Separator")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        {iconType === 'image' ? <Fragment>
                            <PremiumFilters
                                blur={blur}
                                bright={bright}
                                contrast={contrast}
                                saturation={saturation}
                                hue={hue}
                                onChangeBlur={newSize => setAttributes({ blur: newSize, change: true })}
                                onChangeBright={newSize => setAttributes({ bright: newSize, change: true })}
                                onChangeContrast={newSize => setAttributes({ contrast: newSize, change: true })}
                                onChangeSat={newSize => setAttributes({ saturation: newSize, change: true })}
                                onChangeHue={newSize => setAttributes({ hue: newSize, change: true })}
                            />
                            <PremiumFilters
                                label={__("Hover CSS Filters")}
                                blur={blurHover}
                                bright={brightHover}
                                contrast={contrastHover}
                                saturation={saturationHover}
                                hue={hueHover}
                                onChangeBlur={newSize => setAttributes({ blurHover: newSize, change: true })}
                                onChangeBright={newSize => setAttributes({ brightHover: newSize, change: true })}
                                onChangeContrast={newSize => setAttributes({ contrastHover: newSize, change: true })}
                                onChangeSat={newSize => setAttributes({ saturationHover: newSize, change: true })}
                                onChangeHue={newSize => setAttributes({ hueHover: newSize, change: true })}
                            />
                        </Fragment>
                            : <Fragment>
                                <AdvancedPopColorControl
                                    label={__("Color", 'premium-blocks-for-gutenberg')}
                                    colorDefault={''}
                                    colorValue={iconStyles[0].iconColor}
                                    onColorChange={newValue =>
                                        saveIconStyle({
                                            iconColor: newValue
                                        })
                                    }
                                />
                                <AdvancedPopColorControl
                                    label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                    colorDefault={''}
                                    colorValue={iconStyles[0].iconBGColor}
                                    onColorChange={newValue =>
                                        saveIconStyle({
                                            iconBGColor: newValue
                                        })
                                    }
                                />
                                <AdvancedPopColorControl
                                    label={__("Hover Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={iconStyles[0].iconColorHover}
                                    onColorChange={newValue => saveIconStyle({ iconColorHover: newValue })}
                                    colorDefault={''}
                                />
                                <AdvancedPopColorControl
                                    label={__("Hover Background Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={iconStyles[0].iconBGColorHover}
                                    onColorChange={newValue => saveIconStyle({ iconBGColorHover: newValue })}
                                    colorDefault={''}
                                />
                                <PremiumTextShadow
                                    color={iconStyles[0].iconShadowColor}
                                    blur={iconStyles[0].iconShadowBlur}
                                    horizontal={iconStyles[0].iconShadowHorizontal}
                                    vertical={iconStyles[0].iconShadowVertical}
                                    onChangeColor={newColor =>
                                        saveIconStyle({ iconShadowColor: newColor.hex })
                                    }
                                    onChangeBlur={newBlur => saveIconStyle({ iconShadowBlur: newBlur })}
                                    onChangehHorizontal={newValue =>
                                        saveIconStyle({ iconShadowHorizontal: newValue })
                                    }
                                    onChangeVertical={newValue =>
                                        saveIconStyle({ iconShadowVertical: newValue })
                                    }
                                />
                                <ResponsiveRangeControl
                                    label={__("Padding", 'premium-blocks-for-gutenberg')}
                                    value={iconStyles[0].iconPadding}
                                    onChange={value => saveIconStyle({ iconPadding: value })}
                                    tabletValue={iconStyles[0].iconPaddingTablet}
                                    onChangeTablet={value => saveIconStyle({ iconPaddingTablet: value })}
                                    mobileValue={iconStyles[0].iconPaddingMobile}
                                    onChangeMobile={value => saveIconStyle({ iconPaddingMobile: value })}
                                    onChangeUnit={key => saveIconStyle({ iconPaddingType: key })}
                                    unit={iconStyles[0].iconPaddingType}
                                    showUnit={true}
                                    defaultValue={1}
                                    min={1}
                                    max={100}
                                />
                            </Fragment>
                        }
                        {!advancedBorder &&
                            <ResponsiveRangeControl
                                label={__("Border Radius", 'premium-blocks-for-gutenberg')}
                                value={iconStyles[0].iconBorderRadius}
                                onChange={value => saveIconStyle({ iconBorderRadius: value })}
                                tabletValue={iconStyles[0].iconBorderRadiusTablet}
                                onChangeTablet={value => saveIconStyle({ iconBorderRadiusTablet: value })}
                                mobileValue={iconStyles[0].iconBorderRadiusMobile}
                                onChangeMobile={value => saveIconStyle({ iconBorderRadiusMobile: value })}
                                onChangeUnit={key => saveIconStyle({ iconBorderRadiusType: key })}
                                unit={iconStyles[0].iconBorderRadiusType}
                                showUnit={true}
                                defaultValue={1}
                                min={1}
                                max={100}
                            />}
                        <ToggleControl
                            label={__('Advanced Border Radius', 'premium-blocks-for-gutenberg')}
                            checked={advancedBorder}
                            onChange={value => setAttributes({ advancedBorder: value })}
                        />
                        <div>
                            {__('Apply custom radius values. Get the radius value from here', "premium-blocks-for-gutenberg")}<a target={'_blank'} href={"https://9elements.github.io/fancy-border-radius/"}> Here</a>
                        </div>
                        {advancedBorder && <TextControl
                            label={__('Border Radius', "premium-blocks-for-gutenberg")}
                            value={advancedBorderValue}
                            onChange={value => setAttributes({ advancedBorderValue: value })}
                        />
                        }
                    </PanelBody>
                </InspectorControls>
            ),
            <div
                className={
                    classnames(className,
                        `premium-block-${this.props.clientId}`
                    )}
                style={{ textAlign: align }}
            >
                <div className={`premium-image-separator-container`} style={{
                    textAlign: align,
                    transform: `translateY(${gutter}%)`,
                    filter: iconType === 'image' ? `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )` : ""
                }}
                >
                    {
                        iconType === 'icon' && <i className={`${icon}`} style={{
                            fontSize: `${iconSize}${iconStyles[0].iconSizeType}`,
                            padding: `${iconPadding}${iconStyles[0].iconPaddingType}`,
                            color: iconStyles[0].iconColor,
                            backgroundColor: iconStyles[0].iconBGColor,
                            textShadow: `${iconStyles[0].iconShadowHorizontal}px ${iconStyles[0].iconShadowVertical}px ${iconStyles[0].iconShadowBlur}px ${iconStyles[0].iconShadowColor}`,
                        }} />
                    }
                    {
                        iconType === 'image' && < img src={imageURL} style={{
                            height: `${imageHeight}${imgHeightType}`,
                            width: `${iconSize}${iconStyles[0].iconSizeType}`,
                            borderRadius: advancedBorder ? advancedBorderValue : `${iconBorderRadius}${iconStyles[0].iconBorderRadiusType}`
                        }} />
                    }
                    {link && <a className="premium-image-separator-link" href={`${url}`}></a>}
                </div>
            </div>
        ]
    }
}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)