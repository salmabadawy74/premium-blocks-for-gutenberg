import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import DefaultImage from "../../components/default-image";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";
import PremiumMediaUpload from "../../components/premium-media-upload";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import PremiumBackgroundControl from '../../components/Premium-Background-Control';
import SpacingControl from '../../components/premium-responsive-spacing'
import RadioComponent from '../../components/radio-control'
import ResponsiveRadioControl from '../../components/responsive-radio'
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import PremiumShadow from "../../components/PremiumShadow";
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import Icons from "../../components/icons";
import WebfontLoader from "../../components/typography/fontLoader"
import { gradientBackground, padddingCss, marginCss, typographyCss, generateBlockId } from '../../components/HelperFunction'

const { __ } = wp.i18n;

const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components;

const { InspectorControls, RichText } = wp.blockEditor;

const { Component } = wp.element;
const { withSelect } = wp.data

class edit extends Component {
    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        const { setAttributes, clientId } = this.props;
        setAttributes({ blockId: "premium-testimonial-" + generateBlockId(clientId) });
        this.props.setAttributes({ classMigrate: true });
    }

    render() {
        const { isSelected, className, setAttributes } = this.props;
        const {
            blockId,
            align,
            authorImgId,
            authorImgUrl,
            imgRadius,
            imgSize,
            imgBorder,
            imgBorderColor,
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
            contentTypography,
            contentMargin,
            companyTypography,
            quotSize,
            quotUnit,
            authorTypography,
            containerBackground,
            containerShadow,
            containerPadding
        } = this.props.attributes;

        const RADIUS = [
            {
                value: "0",
                label: __("Square", 'premium-blocks-for-gutenberg')
            },
            {
                value: "50%",
                label: __("Circle", 'premium-blocks-for-gutenberg')
            },
            {
                value: "15px",
                label: __("Rounded", 'premium-blocks-for-gutenberg')
            }
        ];

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
            setAttributes({ quoteStyles: newUpdate });
        }

        const renderCss = (
            <style>
                {`
                    .${blockId} .premium-testimonial__img_wrap img {
                        height: ${imgSize[this.props.deviceType]}${imgSize.unit} !important;
                        width: ${imgSize[this.props.deviceType]}${imgSize.unit} !important;
                        border-width: ${imgBorder + "px"};
                        border-radius: ${imgRadius};
                        border-color: ${imgBorderColor};
                    }
                `}
            </style>
        );

        let loadAuthorGoogleFonts;
        let loadCompanyGoogleFonts;
        let loadContentGoogleFonts;

        if (authorTypography.fontFamily !== 'Default') {
            const authorConfig = {
                google: {
                    families: [authorTypography.fontFamily],
                },
            }
            loadAuthorGoogleFonts = (
                <WebfontLoader config={authorConfig}>
                </WebfontLoader>
            )
        }
        if (companyTypography.fontFamily !== 'Default') {
            const companyConfig = {
                google: {
                    families: [companyTypography.fontFamily],
                },
            }
            loadCompanyGoogleFonts = (
                <WebfontLoader config={companyConfig}>
                </WebfontLoader>
            )
        }
        if (contentTypography.fontFamily !== 'Default') {
            const contentConfig = {
                google: {
                    families: [contentTypography.fontFamily],
                },
            }
            loadContentGoogleFonts = (
                <WebfontLoader config={contentConfig}>
                </WebfontLoader>
            )
        }

        const mainClasses = classnames(className, "premium-testimonial");

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
                                {/* {authorImgUrl && ( */}
                                <SelectControl
                                    label={__("Image Style", 'premium-blocks-for-gutenberg')}
                                    options={RADIUS}
                                    value={imgRadius}
                                    onChange={newWeight => setAttributes({ imgRadius: newWeight })}
                                />
                                {/* )} */}
                                <RadioComponent
                                    choices={[
                                        { value: 'h1', label: __('H1') },
                                        { value: 'h2', label: __('H2') },
                                        { value: 'h3', label: __('H3') },
                                        { value: 'h4', label: __('H4') },
                                        { value: 'h5', label: __('H5') },
                                        { value: 'h6', label: __('H6') }
                                    ]}
                                    value={authorStyles[0].authorTag}
                                    onChange={(newValue) => saveAuthorStyle({ authorTag: newValue })}
                                    label={__("Author HTML Tag", 'premium-blocks-for-gutenberg')}
                                />
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
                            <PanelBody
                                title={__("Company", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <RadioComponent
                                    choices={[
                                        { value: 'h1', label: __('H1') },
                                        { value: 'h2', label: __('H2') },
                                        { value: 'h3', label: __('H3') },
                                        { value: 'h4', label: __('H4') },
                                        { value: 'h5', label: __('H5') },
                                        { value: 'h6', label: __('H6') }
                                    ]}
                                    value={authorStyles[0].authorComTag}
                                    onChange={(newValue) => saveAuthorStyle({ authorComTag: newValue })}
                                    label={__("HTML Tag", 'premium-blocks-for-gutenberg')}
                                />
                                <ToggleControl
                                    label={__("Link", 'premium-blocks-for-gutenberg')}
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
                                title={__("Image", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <ResponsiveRangeControl
                                    label={__('Size', 'premium-blocks-for-gutenberg')}
                                    value={imgSize}
                                    onChange={(value) => setAttributes({ imgSize: value })}
                                    min={100}
                                    max={200}
                                    step={1}
                                    showUnit={true}
                                    units={['px', 'em']}
                                    defaultValue={100}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Border Width (PX)", 'premium-blocks-for-gutenberg')}
                                    value={imgBorder}
                                    onChange={newValue => setAttributes({ imgBorder: newValue || 0 })}
                                    showUnit={false}
                                    defaultValue={0}
                                    max={15}
                                />
                                <AdvancedPopColorControl
                                    label={__("Border Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={imgBorderColor}
                                    colorDefault={''}
                                    onColorChange={newValue => setAttributes({ imgBorderColor: newValue })}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Author", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "style", "upper", "spacing", "line", "family"]}
                                    value={authorTypography}
                                    onChange={newValue => setAttributes({ authorTypography: newValue })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={authorStyles[0].authorColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveAuthorStyle({ authorColor: newValue })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Dash Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={companyStyles[0].dashColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveCompanyStyle({ dashColor: newValue })}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Company", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "style", "upper", "spacing", "line", "family"]}
                                    value={companyTypography}
                                    onChange={newValue => setAttributes({ companyTypography: newValue })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={companyStyles[0].authorComColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveCompanyStyle({ authorComColor: newValue })}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Quotations", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <ResponsiveSingleRangeControl
                                    label={__("Size", 'premium-blocks-for-gutenberg')}
                                    value={quotSize}
                                    onChange={newSize => setAttributes({ quotSize: newSize })}
                                    showUnit={true}
                                    defaultValue={0}
                                    max={50}
                                    min={1}
                                    step={1}
                                    units={['px', 'em', '%']}
                                    unit={quotUnit}
                                    onChangeUnit={newSize => setAttributes({ quotUnit: newSize })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Color", 'premium-blocks-for-gutenberg')}
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
                                    max={100}
                                    min={1}
                                    step={1}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Content", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "style", "upper", "spacing", "line", "family"]}
                                    value={contentTypography}
                                    onChange={newValue => setAttributes({ contentTypography: newValue })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={contentStyle[0].bodyColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveContentStyle({ bodyColor: newValue })}
                                />
                                <SpacingControl
                                    label={__('Margin', 'premium-blocks-for-gutenberg')}
                                    value={contentMargin}
                                    onChange={(value) => setAttributes({ contentMargin: value })}
                                    showUnits={false}
                                    responsive={true}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Container", 'premium-blocks-for-gutenberg')}
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
                                <SpacingControl
                                    label={__('Padding', 'premium-blocks-for-gutenberg')}
                                    value={containerPadding}
                                    onChange={(value) => setAttributes({ containerPadding: value })}
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
            renderCss,
            <div
                className={`${mainClasses}__wrap ${blockId} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                style={{
                    ...gradientBackground(containerBackground),
                    ...padddingCss(containerPadding, this.props.deviceType),
                    boxShadow: `${containerShadow.horizontal || 0}px ${containerShadow.vertical ||
                        0}px ${containerShadow.blur || 0}px ${containerShadow.color} ${containerShadow.position}`,
                }}
            >
                <div className={`premium-testimonial__container`}>
                    <span className={`premium-testimonial__upper`}>
                        <PremiumUpperQuote
                            size={quotSize}
                            unit={quotUnit}
                            color={quoteStyles[0].quotColor}
                            opacity={quoteStyles[0].quotOpacity}
                        />
                    </span>
                    <div
                        className={`premium-testimonial__content`}
                        style={{
                            textAlign: align[this.props.deviceType]
                        }}
                    >
                        <div className={`premium-testimonial__img_wrap`}>
                            {authorImgUrl && (
                                <img
                                    className={`premium-testimonial__img`}
                                    src={`${authorImgUrl}`}
                                    alt="Author"
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
                                    onChange={newText => setAttributes({ text: newText })}
                                    style={{
                                        ...typographyCss(contentTypography, this.props.deviceType),
                                        ...marginCss(contentMargin, this.props.deviceType),
                                        color: contentStyle[0].bodyColor,
                                    }}
                                    keepPlaceholderOnFocus
                                />
                            </div>
                        </div>
                        <div
                            className={`premium-testimonial__info`}
                            style={{ justifyContent: align[this.props.deviceType] }}
                        >
                            <RichText
                                tagName={authorStyles[0].authorTag.toLowerCase()}
                                className={`premium-testimonial__author`}
                                value={author}
                                onChange={newText => setAttributes({ author: newText })}
                                style={{
                                    ...typographyCss(authorTypography, this.props.deviceType),
                                    color: authorStyles[0].authorColor
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
                                style={{
                                    ...typographyCss(companyTypography, this.props.deviceType),
                                    color: companyStyles[0].authorComColor
                                }}
                            />
                        </div>
                    </div>
                    <span className={`premium-testimonial__lower`}>
                        <PremiumLowerQuote
                            size={quotSize}
                            unit={quotUnit}
                            color={quoteStyles[0].quotColor}
                            opacity={quoteStyles[0].quotOpacity}
                        />
                    </span>
                </div>
                {loadAuthorGoogleFonts}
                {loadCompanyGoogleFonts}
                {loadContentGoogleFonts}
            </div>
        ];
    }
};

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)