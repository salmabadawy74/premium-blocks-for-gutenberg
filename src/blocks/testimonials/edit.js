import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import DefaultImage from "../../components/default-image";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";
import Icons from "../../components/icons";
import MultiButtonsControl from '../../components/responsive-radio';
import PremiumMediaUpload from "../../components/premium-media-upload";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import PremiumBackgroundControl from '../../components/Premium-Background-Control';
import RadioComponent from '../../components/radio-control'
import PremiumShadow from "../../components/PremiumShadow";
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import SpacingComponent from "../../components/premium-responsive-spacing";
import { generateBlockId, gradientBackground, typographyCss, paddingCss, marginCss, borderCss } from '../../components/HelperFunction';

const { __ } = wp.i18n;

const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components;

const { BlockControls, InspectorControls, AlignmentToolbar, RichText } = wp.blockEditor;

const { Component } = wp.element;
const { withSelect } = wp.data

class edit extends Component {
    constructor() {
        super(...arguments);
        this.getPreviewSize = this.getPreviewSize.bind(this);
    }

    componentDidMount() {
        const { setAttributes, clientId } = this.props;
        // Assigning id in the attribute.
        if (!this.props.attributes.blockId) {
            setAttributes({ blockId: "premium-testimonials-" + generateBlockId(clientId) });
        }
        this.props.setAttributes({ classMigrate: true });
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
        const { isSelected, className, setAttributes } = this.props;
        const {
            blockId,
            align,
            authorImgId,
            authorImgUrl,
            imgSize,
            imgBorder,
            author,
            authorStyles,
            text,
            authorCom,
            hideDesktop,
            hideTablet,
            hideMobile,
            contentStyle,
            companyStyles,
            quoteStyles,
            padding,
            background,
            boxShadow,
            authorTypography,
            bodyMargin,
            bodyTypography,
            companyTypography,
        } = this.props.attributes;

        const saveAuthorStyle = (value) => {
            const newUpdate = authorStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                authorStyles: newUpdate,
            });
        }

        const saveContentStyle = (value) => {
            const newUpdate = contentStyle.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                contentStyle: newUpdate,
            });
        }

        const saveCompanyStyle = (value) => {
            const newUpdate = companyStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ companyStyles: newUpdate });
        }

        const saveQuoteStyles = (value) => {
            const newUpdate = quoteStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ quoteStyles: newUpdate, });
        }

        const mainClasses = classnames(className, "premium-testimonial", {
            " premium-desktop-hidden": hideDesktop,
            " premium-tablet-hidden": hideTablet,
            " premium-mobile-hidden": hideMobile,
        });

        return [
            isSelected && (
                <InspectorControls key={"inspector"}>
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
                            <PanelBody
                                title={__("Author", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <p>{__("Author Image", 'premium-blocks-for-gutenberg')}</p>
                                {!authorImgUrl && <DefaultImage />}
                                <PremiumMediaUpload
                                    type="image"
                                    imageID={authorImgId}
                                    imageURL={authorImgUrl}
                                    onSelectMedia={(media) => {
                                        setAttributes({
                                            authorImgId: media.id,
                                            authorImgUrl: media.url
                                        })
                                    }}
                                    onRemoveImage={() => {
                                        setAttributes({
                                            authorImgId: "",
                                            authorImgUrl: ""
                                        })
                                    }}
                                />
                                <RadioComponent
                                    choices={[{ value: 'h1', label: __('H1') }, { value: 'h2', label: __('H2') }, { value: 'h3', label: __('H3') }, { value: 'h4', label: __('H4') }, { value: 'h5', label: __('H5') }, { value: 'h6', label: __('H6') }]}
                                    value={authorStyles[0].authorTag}
                                    onChange={(newValue) => saveAuthorStyle({ authorTag: newValue })}
                                    label={__("Title Tag", 'premium-blocks-for-gutenberg')}
                                />
                                <MultiButtonsControl
                                    choices={[{ value: 'left', label: __('Left'), icon: Icons.alignLeft }, { value: 'center', label: __('Center'), icon: Icons.alignCenter }, { value: 'right', label: __('Right'), icon: Icons.alignRight }]}
                                    value={align}
                                    onChange={(align) => setAttributes({ align: align })}
                                    label={__("Align Content", "premium-blocks-for-gutenberg")}
                                    showIcons={true} />
                            </PanelBody>
                            <PanelBody
                                title={__("Company", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <RadioComponent
                                    choices={[{ value: 'h1', label: __('H1') }, { value: 'h2', label: __('H2') }, { value: 'h3', label: __('H3') }, { value: 'h4', label: __('H4') }, { value: 'h5', label: __('H5') }, { value: 'h6', label: __('H6') }]}
                                    value={authorStyles[0].authorComTag}
                                    onChange={(newValue) => saveAuthorStyle({ authorComTag: newValue })}
                                    label={__("Title Tag", 'premium-blocks-for-gutenberg')}
                                />
                                <ToggleControl
                                    label={__("URL", 'premium-blocks-for-gutenberg')}
                                    checked={companyStyles[0].urlCheck}
                                    onChange={newCheck => saveCompanyStyle({ urlCheck: newCheck })}
                                />
                                {companyStyles[0].urlCheck && (
                                    <TextControl
                                        label={__("URL", 'premium-blocks-for-gutenberg')}
                                        value={companyStyles[0].urlText}
                                        onChange={newURL => saveCompanyStyle({ urlText: newURL })}
                                    />
                                )}
                                {companyStyles[0].urlCheck && (
                                    <ToggleControl
                                        label={__("Open Link in a New Tab", 'premium-blocks-for-gutenberg')}
                                        checked={companyStyles[0].urlTarget}
                                        onChange={newCheck => saveCompanyStyle({ urlTarget: newCheck })}
                                    />
                                )}
                            </PanelBody>

                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            <PanelBody
                                title={__("Author", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                {authorImgUrl && (
                                    <ResponsiveSingleRangeControl
                                        label={__("Size", 'premium-blocks-for-gutenberg')}
                                        value={imgSize}
                                        max="200"
                                        onChange={newSize => setAttributes({ imgSize: newSize })}
                                        showUnit={false}
                                        defaultValue={0}
                                    />
                                )}
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                                    value={authorTypography}
                                    onChange={newValue => setAttributes({ authorTypography: newValue })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={authorStyles[0].authorColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveAuthorStyle({ authorColor: newValue })}
                                />
                                {authorImgUrl && (
                                    <PremiumBorder
                                        label={__("Border")}
                                        value={imgBorder}
                                        onChange={(value) => setAttributes({ imgBorder: value })}
                                    />
                                )}
                            </PanelBody>
                            <PanelBody
                                title={__("Company", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                                    value={companyTypography}
                                    onChange={newValue => setAttributes({ companyTypography: newValue })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={companyStyles[0].authorComColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveCompanyStyle({ authorComColor: newValue })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Dash Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={companyStyles[0].dashColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveCompanyStyle({ dashColor: newValue })}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Content", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                                    value={bodyTypography}
                                    onChange={newValue => setAttributes({ bodyTypography: newValue })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={contentStyle[0].bodyColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveContentStyle({ bodyColor: newValue })}
                                />
                                <SpacingComponent value={bodyMargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ bodyMargin: value })} />
                            </PanelBody>
                            <PanelBody
                                title={__("Quotations", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <ResponsiveSingleRangeControl
                                    label={__("Size (EM)", 'premium-blocks-for-gutenberg')}
                                    value={quoteStyles[0].quotSize}
                                    min="1"
                                    max="12"
                                    onChange={newSize => saveQuoteStyles({ quotSize: newSize })}
                                    showUnit={false}
                                    defaultValue={0}
                                />
                                <AdvancedPopColorControl
                                    label={__("Quotations Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={quoteStyles[0].quotColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveQuoteStyles({ quotColor: newValue })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Opacity", 'premium-blocks-for-gutenberg')}
                                    value={quoteStyles[0].quotOpacity}
                                    onChange={newValue => saveQuoteStyles({ quotOpacity: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Container", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumBackgroundControl
                                    value={background}
                                    onChange={(value) => setAttributes({ background: value })}
                                />
                                <PremiumShadow
                                    label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                                    boxShadow={true}
                                    value={boxShadow}
                                    onChange={(value) => setAttributes({ boxShadow: value })}
                                />
                                <SpacingComponent value={padding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ padding: value })} />
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
                className={`${mainClasses}__wrap ${blockId}`}
                style={{
                    boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                    ...gradientBackground(background),
                    ...paddingCss(padding, this.props.deviceType)
                }}
            >
                <div className={`premium-testimonial__container`}>
                    <span className={`premium-testimonial__upper`}>
                        <PremiumUpperQuote
                            size={quoteStyles[0].quotSize}
                            color={quoteStyles[0].quotColor}
                            opacity={quoteStyles[0].quotOpacity}
                        />
                    </span>
                    <div
                        className={`premium-testimonial__content`}
                        style={{
                            textAlign: align?.[this.props.deviceType]
                        }}
                    >
                        <div className={`premium-testimonial__img_wrap`}>
                            {authorImgUrl && (
                                <img
                                    className={`premium-testimonial__img`}
                                    src={`${authorImgUrl}`}
                                    alt="Author"
                                    style={{
                                        width: imgSize + "px",
                                        height: imgSize + "px",
                                        ...borderCss(imgBorder, this.props.deviceType)
                                    }}
                                />
                            )}
                            {!authorImgUrl && <DefaultImage className={className} />}
                        </div>
                        <div className={`premium-testimonial__text_wrap`}>
                            <div>
                                <RichText
                                    tagName="p"
                                    className={`premium-testimonial__text`}
                                    value={text}
                                    isSelected={false}
                                    placeholder="Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
                                    onChange={newText => setAttributes({ text: newText })}
                                    style={{
                                        color: contentStyle[0].bodyColor,
                                        ...typographyCss(bodyTypography, this.props.deviceType),
                                        ...marginCss(bodyMargin, this.props.deviceType)
                                    }}
                                    keepPlaceholderOnFocus
                                />
                            </div>
                        </div>
                        <div
                            className={`premium-testimonial__info`}
                            style={{ justifyContent: align?.[this.props.deviceType] }}
                        >
                            <RichText
                                tagName={authorStyles[0].authorTag.toLowerCase()}
                                className={`premium-testimonial__author`}
                                value={author}
                                isSelected={false}
                                onChange={newText => setAttributes({ author: newText })}
                                style={{
                                    color: authorStyles[0].authorColor,
                                    ...typographyCss(authorTypography, this.props.deviceType),
                                }}
                            />
                            <span
                                className={`premium-testimonial__sep`}
                                style={{
                                    color: companyStyles[0].dashColor
                                }}
                            >
                                &nbsp;-&nbsp;
                            </span>
                            <RichText
                                tagName={authorStyles[0].authorComTag.toLowerCase()}
                                className={`premium-testimonial__author_comp`}
                                onChange={newText => setAttributes({ authorCom: newText })}
                                value={authorCom}
                                isSelected={false}
                                style={{
                                    color: companyStyles[0].authorComColor,
                                    ...typographyCss(companyTypography, this.props.deviceType),
                                }}
                            />
                        </div>
                    </div>
                    <span className={`premium-testimonial__lower`}>
                        <PremiumLowerQuote
                            size={quoteStyles[0].quotSize}
                            color={quoteStyles[0].quotColor}
                            opacity={quoteStyles[0].quotOpacity}
                        />
                    </span>
                </div>
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