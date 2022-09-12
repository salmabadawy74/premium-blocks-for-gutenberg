import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border"
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
import WebfontLoader from "../../components/typography/fontLoader";

const { __ } = wp.i18n;
const { PanelBody, TextControl, ToggleControl } = wp.components;
const { InspectorControls, RichText, useBlockProps } = wp.blockEditor;
const { useEffect, Fragment } = wp.element;
const { withSelect } = wp.data


function Edit(props) {
    const { setAttributes, className, clientId } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-testimonials-" + generateBlockId(clientId)
        });
        setAttributes({ classMigrate: true });
    }, []);

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
    } = props.attributes;

    let loadAuthorGoogleFonts;
    let loadBodyGoogleFonts;
    let loadCompanyGoogleFonts;

    if (authorTypography?.fontFamily !== 'Default') {
        const authorConfig = {
            google: {
                families: [authorTypography.fontFamily]
            }
        }
        loadAuthorGoogleFonts = (
            <WebfontLoader config={authorConfig}>
            </WebfontLoader>
        )
    }

    if (bodyTypography?.fontFamily !== 'Default') {
        const bodyConfig = {
            google: {
                families: [bodyTypography.fontFamily]
            }
        }
        loadBodyGoogleFonts = (
            <WebfontLoader config={bodyConfig}>
            </WebfontLoader>
        )
    }

    if (companyTypography?.fontFamily !== 'Default') {
        const companyConfig = {
            google: {
                families: [companyTypography.fontFamily]
            }
        }
        loadCompanyGoogleFonts = (
            <WebfontLoader config={companyConfig}>
            </WebfontLoader>
        )
    }

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
        const newUpdate = contentStyle.map((item, indexx) => {
            if (0 === indexx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            contentStyle: newUpdate,
        });
    }

    const saveCompanyStyle = (value) => {
        const newUpdate = companyStyles.map((item, indx) => {
            if (0 === indx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ companyStyles: newUpdate });
    }

    const saveQuoteStyles = (value) => {
        const newUpdate = quoteStyles.map((item, i) => {
            if (0 === i) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ quoteStyles: newUpdate });
    }

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={['layout', 'style', 'advance']}>
                    <InspectorTab key={'layout'}>
                        <PanelBody
                            title={__("Author", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <p>{__("Author Image", 'premium-blocks-for-gutenberg')}</p>
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
                                choices={[
                                    { value: 'h1', label: __('H1', 'premium-blocks-for-gutenberg') },
                                    { value: 'h2', label: __('H2', 'premium-blocks-for-gutenberg') },
                                    { value: 'h3', label: __('H3', 'premium-blocks-for-gutenberg') },
                                    { value: 'h4', label: __('H4', 'premium-blocks-for-gutenberg') },
                                    { value: 'h5', label: __('H5', 'premium-blocks-for-gutenberg') },
                                    { value: 'h6', label: __('H6', 'premium-blocks-for-gutenberg') }
                                ]}
                                value={authorStyles[0].authorTag}
                                onChange={(newValue) => saveAuthorStyle({ authorTag: newValue })}
                                label={__("Title Tag", 'premium-blocks-for-gutenberg')}
                            />
                            <MultiButtonsControl
                                choices={[{ value: 'left', label: __('Left', "premium-blocks-for-gutenberg"), icon: Icons.alignLeft }, { value: 'center', label: __('Center', "premium-blocks-for-gutenberg"), icon: Icons.alignCenter }, { value: 'right', label: __('Right', "premium-blocks-for-gutenberg"), icon: Icons.alignRight }]}
                                value={align}
                                onChange={(alignn) => setAttributes({ align: alignn })}
                                label={__("Align Content", "premium-blocks-for-gutenberg")}
                                showIcons={true} />
                        </PanelBody>
                        <PanelBody
                            title={__("Company", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <RadioComponent
                                choices={[
                                    { value: 'h1', label: __('H1', 'premium-blocks-for-gutenberg') },
                                    { value: 'h2', label: __('H2', 'premium-blocks-for-gutenberg') },
                                    { value: 'h3', label: __('H3', 'premium-blocks-for-gutenberg') },
                                    { value: 'h4', label: __('H4', 'premium-blocks-for-gutenberg') },
                                    { value: 'h5', label: __('H5', 'premium-blocks-for-gutenberg') },
                                    { value: 'h6', label: __('H6', 'premium-blocks-for-gutenberg') }
                                ]}
                                value={authorStyles[0].authorComTag}
                                onChange={(newValue) => saveAuthorStyle({ authorComTag: newValue })}
                                label={__("Title Tag", 'premium-blocks-for-gutenberg')}
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
                            title={__("Author", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <PremiumTypo
                                value={authorTypography}
                                onChange={newValue => setAttributes({ authorTypography: newValue })}
                            />
                            <AdvancedPopColorControl
                                label={__("Color", 'premium-blocks-for-gutenberg')}
                                colorValue={authorStyles[0].authorColor}
                                colorDefault={''}
                                onColorChange={newValue => saveAuthorStyle({ authorColor: newValue })}
                            />
                        </PanelBody>
                        {authorImgUrl && (
                            <PanelBody
                                title={__("Image", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <ResponsiveSingleRangeControl
                                    label={__("Size", 'premium-blocks-for-gutenberg')}
                                    value={imgSize}
                                    max="200"
                                    onChange={newSize => setAttributes({ imgSize: newSize })}
                                    showUnit={false}
                                    defaultValue={0}
                                />
                                <PremiumBorder
                                    label={__("Border", 'premium-blocks-for-gutenberg')}
                                    value={imgBorder}
                                    onChange={(value) => setAttributes({ imgBorder: value })}
                                />
                            </PanelBody>
                        )}
                        <PanelBody
                            title={__("Company", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumTypo
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
                                value={bodyTypography}
                                onChange={newValue => setAttributes({ bodyTypography: newValue })}
                            />
                            <AdvancedPopColorControl
                                label={__("Color", 'premium-blocks-for-gutenberg')}
                                colorValue={contentStyle[0].bodyColor}
                                colorDefault={''}
                                onColorChange={newValue => saveContentStyle({ bodyColor: newValue })}
                            />
                            <SpacingComponent value={bodyMargin} responsive={true} showUnits={true} label={__("Margin", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ bodyMargin: value })} />
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
                                value={boxShadow}
                                onChange={(value) => setAttributes({ boxShadow: value })}
                            />
                            <SpacingComponent value={padding} responsive={true} showUnits={true} label={__("Padding", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ padding: value })} />
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
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-testimonial ${blockId} premium-testimonial__wrap`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{
                    boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                    ...gradientBackground(background),
                    ...paddingCss(padding, props.deviceType)
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
                            textAlign: align?.[props.deviceType]
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
                                        ...borderCss(imgBorder, props.deviceType)
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
                                    placeholder="Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
                                    onChange={newText => setAttributes({ text: newText })}
                                    style={{
                                        color: contentStyle[0].bodyColor,
                                        ...typographyCss(bodyTypography, props.deviceType),
                                        ...marginCss(bodyMargin, props.deviceType)
                                    }}
                                    keepPlaceholderOnFocus
                                />
                            </div>
                        </div>
                        <div
                            className={`premium-testimonial__info`}
                            style={{ justifyContent: align?.[props.deviceType] }}
                        >
                            <RichText
                                tagName={authorStyles[0].authorTag.toLowerCase()}
                                className={`premium-testimonial__author`}
                                value={author}
                                onChange={newText => setAttributes({ author: newText })}
                                style={{
                                    color: authorStyles[0].authorColor,
                                    ...typographyCss(authorTypography, props.deviceType),
                                }}
                                keepPlaceholderOnFocus
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
                                    color: companyStyles[0].authorComColor,
                                    ...typographyCss(companyTypography, props.deviceType),
                                }}
                                keepPlaceholderOnFocus
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
                {loadAuthorGoogleFonts}
                {loadBodyGoogleFonts}
                {loadCompanyGoogleFonts}
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