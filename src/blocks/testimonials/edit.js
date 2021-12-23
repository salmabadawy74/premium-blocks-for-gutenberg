import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import DefaultImage from "../../components/default-image";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumBackground from "../../components/premium-background";
import PremiumPadding from "../../components/premium-padding";
import PremiumMediaUpload from "../../components/premium-media-upload";
import hexToRgba from "../../components/hex-to-rgba";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import PremiumRangeControl from "../../components/premium-range-control";


const { __ } = wp.i18n;

const {
    Toolbar,
    PanelBody,
    SelectControl,
    TextControl,
    ToggleControl,
    Dropdown,
    Button,
} = wp.components;

const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    RichText,
    ColorPalette,
} = wp.blockEditor;

const { Fragment, Component } = wp.element;
const { withSelect } = wp.data


class edit extends Component {
    constructor() {
        super(...arguments);

        this.getPreviewSize = this.getPreviewSize.bind(this);
    }
    componentDidMount() {
        const { setAttributes, clientId } = this.props;
        setAttributes({ block_id: clientId.substr(0, 6) })

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
            block_id,
            classMigrate,
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
            containerStyles,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
        } = this.props.attributes;

        const RADIUS = [
            {
                value: "0",
                label: __("Square")
            },
            {
                value: "50%",
                label: __("Circle")
            },
            {
                value: "15px",
                label: __("Rounded")
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

        const saveContainerStyle = (value) => {
            const newUpdate = containerStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                containerStyles: newUpdate,
            });
        }
        const saveCompanyStyle = (value) => {
            const newUpdate = companyStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                companyStyles: newUpdate,
            });
        }
        const saveQuoteStyles = (value) => {
            const newUpdate = quoteStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                quoteStyles: newUpdate,
            });
        }

        const mainClasses = classnames(className, "premium-testimonial");

        const authorFontSize = this.getPreviewSize(this.props.deviceType, authorStyles[0].authorSize, authorStyles[0].authorSizeTablet, authorStyles[0].authorSizeMobile);
        const authorComFontSize = this.getPreviewSize(this.props.deviceType, companyStyles[0].authorComSize, companyStyles[0].authorComSizeTablet, companyStyles[0].authorComSizeMobile);
        const testimonalFontSize = this.getPreviewSize(this.props.deviceType, contentStyle[0].bodySize, contentStyle[0].bodySizeTablet, contentStyle[0].bodySizeMobile);

        return [
            isSelected && (
                <BlockControls key="controls">
                    <AlignmentToolbar
                        value={align}
                        onChange={newAlign => setAttributes({ align: newAlign })}
                    />
                </BlockControls>
            ),
            isSelected && (
                <InspectorControls key={"inspector"}>
                    <PanelBody
                        title={__("Author")}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <PanelBody
                            title={__("Image")}
                            className="premium-panel-body-inner"
                            initialOpen={false}
                        >
                            <p>{__("Author Image")}</p>
                            {!authorImgUrl && <DefaultImage />}
                            <PremiumMediaUpload
                                type="image"
                                imageID={authorImgId}
                                imageURL={authorImgUrl}
                                onSelectMedia={(media) => {
                                    setAttributes({
                                        authorImgId: media.id
                                        ,
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
                            {authorImgUrl && (
                                <SelectControl
                                    label={__("Image Style")}
                                    options={RADIUS}
                                    value={imgRadius}
                                    onChange={newWeight => setAttributes({ imgRadius: newWeight })}
                                />
                            )}
                            {authorImgUrl && (
                                <PremiumRangeControl
                                    label={__("Size")}
                                    value={imgSize}
                                    max="200"
                                    onChange={newSize => setAttributes({ imgSize: newSize })}
                                    showUnit={false}
                                    defaultValue={0}
                                />
                            )}
                            {authorImgUrl && (
                                <PremiumRangeControl
                                    label={__("Border Width (PX)")}
                                    value={imgBorder}
                                    onChange={newSize => setAttributes({ imgBorder: newSize })}
                                    showUnit={false}
                                    defaultValue={0}
                                />
                            )}
                            {authorImgUrl && (
                                <Fragment>
                                    <p>{__("Border Color")}</p>
                                    <ColorPalette
                                        value={imgBorderColor}
                                        onChange={newValue =>
                                            setAttributes({
                                                imgBorderColor: newValue
                                            })
                                        }
                                        allowReset={true}
                                    />
                                </Fragment>
                            )}
                        </PanelBody>
                        <p>{__("Author HTML Tag")}</p>
                        <Toolbar
                            controls={"123456".split("").map(tag => ({
                                icon: "heading",
                                isActive: "H" + tag === authorStyles[0].authorTag,
                                onClick: () => saveAuthorStyle({ authorTag: "H" + tag }),
                                subscript: tag
                            }))}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={saveAuthorStyle}
                            fontSizeType={{
                                value: authorStyles[0].authorSizeUnit,
                                label: __("authorSizeUnit"),
                            }}
                            fontSize={{
                                value: authorStyles[0].authorSize,
                                label: __("authorSize"),
                            }}
                            fontSizeMobile={{
                                value: authorStyles[0].authorSizeMobile,
                                label: __("authorSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: authorStyles[0].authorSizeTablet,
                                label: __("authorSizeTablet"),
                            }}
                            onChangeSize={newSize => saveAuthorStyle({ authorSize: newSize })}
                            weight={authorStyles[0].authorWeight}
                            style={authorStyles[0].authorStyle}
                            spacing={authorStyles[0].authorLetter}
                            upper={authorStyles[0].authorUpper}
                            onChangeWeight={newWeight =>
                                saveAuthorStyle({ authorWeight: newWeight })
                            }
                            onChangeStyle={newStyle => saveAuthorStyle({ authorStyle: newStyle })}
                            onChangeSpacing={newValue =>
                                saveAuthorStyle({ authorLetter: newValue })
                            }
                            onChangeUpper={check => saveAuthorStyle({ authorUpper: check })}
                        />
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={authorStyles[0].authorColor}
                            onChange={newValue =>
                                saveAuthorStyle({
                                    authorColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Content")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumTypo
                            components={["responsiveSize", "line"]}
                            setAttributes={saveContentStyle}
                            fontSizeType={{
                                value: contentStyle[0].bodySizeUnit,
                                label: __("bodySizeUnit"),
                            }}
                            fontSize={{
                                value: contentStyle[0].bodySize,
                                label: __("bodySize"),
                            }}
                            fontSizeMobile={{
                                value: contentStyle[0].bodySizeMobile,
                                label: __("bodySizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: contentStyle[0].bodySizeTablet,
                                label: __("bodySizeTablet"),
                            }}
                            line={contentStyle[0].bodyLine}
                            onChangeLine={newWeight => saveContentStyle({ bodyLine: newWeight })}
                        />
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={contentStyle[0].bodyColor}
                            onChange={newValue =>
                                saveContentStyle({
                                    bodyColor: newValue
                                })
                            }

                        />
                        <PremiumRangeControl
                            label={__("Margin Top (PX)")}
                            value={contentStyle[0].bodyTop}
                            onChange={newSize => saveContentStyle({ bodyTop: newSize })}
                            showUnit={false}
                            defaultValue={0}
                        />
                        <PremiumRangeControl
                            label={__("Margin Bottom (PX)")}
                            value={contentStyle[0].bodyBottom}
                            onChange={newSize => saveContentStyle({ bodyBottom: newSize })}
                            showUnit={false}
                            defaultValue={0}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Company")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("HTML Tag")}</p>
                        <Toolbar
                            controls={"123456".split("").map(tag => ({
                                icon: "heading",
                                isActive: "H" + tag === authorStyles[0].authorComTag,
                                onClick: () => saveAuthorStyle({ authorComTag: "H" + tag }),
                                subscript: tag
                            }))}
                        />
                        <PremiumTypo
                            components={["responsiveSize"]}
                            setAttributes={saveCompanyStyle}
                            fontSizeType={{
                                value: companyStyles[0].authorComSizeUnit,
                                label: __("authorComSizeUnit"),
                            }}
                            fontSize={{
                                value: companyStyles[0].authorComSize,
                                label: __("authorComSize"),
                            }}
                            fontSizeMobile={{
                                value: companyStyles[0].authorComSizeMobile,
                                label: __("authorComSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: companyStyles[0].authorComSizeTablet,
                                label: __("authorComSizeTablet"),
                            }}
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
                                        <p>{__("Text Color")}</p>
                                        <ColorPalette
                                            value={companyStyles[0].authorComColor}
                                            onChange={newValue =>
                                                saveCompanyStyle({
                                                    authorComColor: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                        <p>{__("Dash Color")}</p>
                                        <ColorPalette
                                            value={companyStyles[0].dashColor}
                                            onChange={newValue =>
                                                saveCompanyStyle({
                                                    dashColor: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                    </Fragment>
                                )}
                            />
                        </div>
                        <ToggleControl
                            label={__("URL")}
                            checked={companyStyles[0].urlCheck}
                            onChange={newCheck => saveCompanyStyle({ urlCheck: newCheck })}
                        />
                        {companyStyles[0].urlCheck && (
                            <TextControl
                                label={__("URL")}
                                value={companyStyles[0].urlText}
                                onChange={newURL => saveCompanyStyle({ urlText: newURL })}
                            />
                        )}
                        {companyStyles[0].urlCheck && (
                            <ToggleControl
                                label={__("Open Link in a New Tab")}
                                checked={companyStyles[0].urlTarget}
                                onChange={newCheck => saveCompanyStyle({ urlTarget: newCheck })}
                            />
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Quotations")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumRangeControl
                            label={__("Size (EM)")}
                            value={quoteStyles[0].quotSize}
                            min="1"
                            max="12"
                            onChange={newSize => saveQuoteStyles({ quotSize: newSize })}
                            showUnit={false}
                            defaultValue={0}
                        />
                        <Fragment>
                            <p>{__("Quotations Color")}</p>
                            <ColorPalette
                                value={quoteStyles[0].quotColor}
                                onChange={newValue =>
                                    saveQuoteStyles({
                                        quotColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        <PremiumRangeControl
                            label={__("Opacity")}
                            min="0"
                            max="100"
                            value={quoteStyles[0].quotOpacity}
                            onChange={newValue => saveQuoteStyles({ quotOpacity: newValue })}
                            showUnit={false}
                            defaultValue={0}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Container")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <Fragment>
                            <p>{__("Background Color")}</p>
                            <PremiumBackground
                                type="color"
                                colorValue={containerStyles[0].backColor}
                                onChangeColor={newvalue =>
                                    saveContainerStyle({
                                        backColor: newvalue
                                    })
                                }
                                opacityValue={containerStyles[0].backOpacity}
                                onChangeOpacity={value =>
                                    saveContainerStyle({ backOpacity: value })
                                }
                            />
                            <PremiumBackground
                                imageID={containerStyles[0].imageID}
                                imageURL={containerStyles[0].imageURL}
                                backgroundPosition={containerStyles[0].backgroundPosition}
                                backgroundRepeat={containerStyles[0].backgroundRepeat}
                                backgroundSize={containerStyles[0].backgroundSize}
                                fixed={containerStyles[0].fixed}
                                onSelectMedia={media => {
                                    saveContainerStyle({
                                        imageID: media.id,
                                        imageURL: media.url
                                    });
                                }}
                                onRemoveImage={value =>
                                    saveContainerStyle({ imageURL: "", imageID: "" })
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
                        </Fragment>
                        <PremiumBoxShadow
                            inner={true}
                            color={containerStyles[0].shadowColor}
                            blur={containerStyles[0].shadowBlur}
                            horizontal={containerStyles[0].shadowHorizontal}
                            vertical={containerStyles[0].shadowVertical}
                            position={containerStyles[0].shadowPosition}
                            onChangeColor={newColor =>
                                saveContainerStyle({
                                    shadowColor: newColor.hex
                                })
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
                            paddingTop={paddingTop}
                            paddingRight={paddingRight}
                            paddingBottom={paddingBottom}
                            paddingLeft={paddingLeft}
                            onChangePadTop={value =>
                                setAttributes({
                                    paddingTop: value
                                })
                            }
                            onChangePadRight={value =>
                                setAttributes({
                                    paddingRight: value
                                })
                            }
                            onChangePadBottom={value =>
                                setAttributes({
                                    paddingBottom: value
                                })
                            }
                            onChangePadLeft={value =>
                                setAttributes({
                                    paddingLeft: value
                                })
                            }
                            showUnits={true}
                            selectedUnit={containerStyles[0].paddingUnit}
                            onChangePadSizeUnit={newvalue =>
                                saveContainerStyle({ paddingUnit: newvalue })
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
                id={`premium-testimonial-${block_id}`}
                className={`${mainClasses}__wrap premium-testimonial-${block_id}`}
                style={{
                    boxShadow: `${containerStyles[0].shadowHorizontal}px ${containerStyles[0].shadowVertical}px ${containerStyles[0].shadowBlur}px ${containerStyles[0].shadowColor} ${containerStyles[0].shadowPosition}`,
                    backgroundColor: containerStyles[0].backColor
                        ? hexToRgba(containerStyles[0].backColor, containerStyles[0].backOpacity)
                        : "transparent",
                    backgroundImage: containerStyles[0].imageURL ? `url('${containerStyles[0].imageURL}')` : 'none',
                    backgroundRepeat: containerStyles[0].backgroundRepeat,
                    backgroundPosition: containerStyles[0].backgroundPosition,
                    backgroundSize: containerStyles[0].backgroundSize,
                    backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                    paddingTop: paddingTop + containerStyles[0].paddingUnit,
                    paddingBottom: paddingBottom + containerStyles[0].paddingUnit,
                    paddingLeft: paddingLeft + containerStyles[0].paddingUnit,
                    paddingRight: paddingRight + containerStyles[0].paddingUnit
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
                            textAlign: align
                        }}
                    >
                        <div className={`premium-testimonial__img_wrap`}>
                            {authorImgUrl && (
                                <img
                                    className={`premium-testimonial__img`}
                                    src={`${authorImgUrl}`}
                                    alt="Author"
                                    style={{
                                        borderWidth: imgBorder + "px",
                                        borderRadius: imgRadius,
                                        borderColor: imgBorderColor,
                                        width: imgSize + "px",
                                        height: imgSize + "px"
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
                                        fontSize: `${testimonalFontSize}${contentStyle[0].bodySizeUnit}`,
                                        color: contentStyle[0].bodyColor,
                                        lineHeight: contentStyle[0].bodyLine + "px",
                                        marginTop: contentStyle[0].bodyTop + "px",
                                        marginBottom: contentStyle[0].bodyBottom + "px"
                                    }}
                                    keepPlaceholderOnFocus
                                />
                            </div>
                        </div>
                        <div
                            className={`premium-testimonial__info`}
                            style={{ justifyContent: align }}
                        >
                            <RichText
                                tagName={authorStyles[0].authorTag.toLowerCase()}
                                className={`premium-testimonial__author`}
                                value={author}
                                isSelected={false}
                                onChange={newText => setAttributes({ author: newText })}
                                style={{
                                    fontSize: `${authorFontSize}${authorStyles[0].authorSizeUnit} `,
                                    color: authorStyles[0].authorColor,
                                    letterSpacing: authorStyles[0].authorLetter + "px",
                                    textTransform: authorStyles[0].authorUpper ? "uppercase" : "none",
                                    fontStyle: authorStyles[0].authorStyle,
                                    fontWeight: authorStyles[0].authorWeight
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
                                    fontSize: `${authorComFontSize}${companyStyles[0].authorComSizeUnit}`
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