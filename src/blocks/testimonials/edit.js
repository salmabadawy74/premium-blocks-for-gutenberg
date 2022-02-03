import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import DefaultImage from "../../components/default-image";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumBackground from "../../components/premium-background";
import PremiumPadding from "../../components/premium-padding";
import PremiumMediaUpload from "../../components/premium-media-upload";
import styling from './styling';
import hexToRgba from "hex-to-rgba";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import AdvancedPopColorControl from '../../components/premium-color-control'

const { __ } = wp.i18n;

const {
    Toolbar,
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    ToggleControl,
} = wp.components;

const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    RichText,
} = wp.blockEditor;

const { Fragment, Component } = wp.element;

class edit extends Component {

    componentDidMount() {
        const { setAttributes, clientId } = this.props;
        setAttributes({ block_id: clientId.substr(0, 6) })

        this.props.setAttributes({ classMigrate: true });

        // Pushing Style tag for this block css.
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "premium-style-testimonial-" + clientId.substr(0, 6)
        );
        document.head.appendChild($style);
    }

    render() {
        const { isSelected, className, setAttributes } = this.props;
        const {
            block_id,
            align,
            authorImgId,
            authorImgUrl,
            imgRadius,
            imgSize,
            imgBorder,
            imgBorderColor,
            text,
            authorTag,
            authorColor,
            authorSizeUnit,
            authorSizeMobile,
            authorSizeTablet,
            authorSize,
            authorLetter,
            authorStyle,
            authorUpper,
            authorWeight,
            author,
            authorComTag,
            authorCom,
            authorComColor,
            authorComSize,
            authorComSizeUnit,
            authorComSizeMobile,
            authorComSizeTablet,
            urlCheck,
            urlText,
            urlTarget,
            quotSize,
            quotColor,
            quotOpacity,
            bodyColor,
            bodySize,
            bodySizeUnit,
            bodySizeMobile,
            bodySizeTablet,
            bodyLine,
            bodyTop,
            bodyBottom,
            dashColor,
            shadowBlur,
            shadowColor,
            shadowHorizontal,
            shadowVertical,
            shadowPosition,
            backColor,
            backOpacity,
            imageID,
            imageURL,
            fixed,
            backgroundRepeat,
            backgroundPosition,
            backgroundSize,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
            paddingUnit,
            hideDesktop,
            hideTablet,
            hideMobile
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

        let element = document.getElementById(
            "premium-style-testimonial-" + this.props.clientId.substr(0, 6)
        );

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props);
        }

        const mainClasses = classnames(className, "premium-testimonial");

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
                                <RangeControl
                                    label={__("Size")}
                                    max="200"
                                    value={imgSize}
                                    onChange={newSize => setAttributes({ imgSize: newSize })}
                                />
                            )}
                            {authorImgUrl && (
                                <RangeControl
                                    label={__("Border Width (PX)")}
                                    value={imgBorder}
                                    onChange={newSize => setAttributes({ imgBorder: newSize })}
                                />
                            )}
                            {authorImgUrl && (
                                <AdvancedPopColorControl
                                    label={__("Border Color", 'premium-block-for-gutenberg')}
                                    colorValue={imgBorderColor}
                                    colorDefault={''}
                                    onColorChange={newValue =>
                                        setAttributes({
                                            imgBorderColor: newValue
                                        })
                                    }
                                />
                            )}
                        </PanelBody>
                        <p>{__("Author HTML Tag")}</p>
                        <Toolbar
                            controls={"123456".split("").map(tag => ({
                                icon: "heading",
                                isActive: "H" + tag === authorTag,
                                onClick: () => setAttributes({ authorTag: "H" + tag }),
                                subscript: tag
                            }))}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{
                                value: authorSizeUnit,
                                label: __("authorSizeUnit"),
                            }}
                            fontSize={{
                                value: authorSize,
                                label: __("authorSize"),
                            }}
                            fontSizeMobile={{
                                value: authorSizeMobile,
                                label: __("authorSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: authorSizeTablet,
                                label: __("authorSizeTablet"),
                            }}
                            onChangeSize={newSize => setAttributes({ authorSize: newSize })}
                            weight={authorWeight}
                            style={authorStyle}
                            spacing={authorLetter}
                            upper={authorUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ authorWeight: newWeight })
                            }
                            onChangeStyle={newStyle => setAttributes({ authorStyle: newStyle })}
                            onChangeSpacing={newValue =>
                                setAttributes({ authorLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ authorUpper: check })}
                        />
                        <p>{__("Color")}</p>
                        <AdvancedPopColorControl
                            label={__("Color", 'premium-block-for-gutenberg')}
                            colorValue={authorColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                setAttributes({
                                    authorColor: newValue
                                })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Content")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumTypo
                            components={["responsiveSize", "line"]}
                            setAttributes={setAttributes}
                            fontSizeType={{
                                value: bodySizeUnit,
                                label: __("bodySizeUnit"),
                            }}
                            fontSize={{
                                value: bodySize,
                                label: __("bodySize"),
                            }}
                            fontSizeMobile={{
                                value: bodySizeMobile,
                                label: __("bodySizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: bodySizeTablet,
                                label: __("bodySizeTablet"),
                            }}
                            line={bodyLine}
                            onChangeLine={newWeight => setAttributes({ bodyLine: newWeight })}
                        />
                        <AdvancedPopColorControl
                            label={__("Color", 'premium-block-for-gutenberg')}
                            colorValue={bodyColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                setAttributes({
                                    bodyColor: newValue
                                })
                            }
                        />
                        <RangeControl
                            label={__("Margin Top (PX)")}
                            value={bodyTop}
                            onChange={newSize => setAttributes({ bodyTop: newSize })}
                        />
                        <RangeControl
                            label={__("Margin Bottom (PX)")}
                            value={bodyBottom}
                            onChange={newSize => setAttributes({ bodyBottom: newSize })}
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
                                isActive: "H" + tag === authorComTag,
                                onClick: () => setAttributes({ authorComTag: "H" + tag }),
                                subscript: tag
                            }))}
                        />
                        <PremiumTypo
                            components={["responsiveSize"]}
                            setAttributes={setAttributes}
                            fontSizeType={{
                                value: authorComSizeUnit,
                                label: __("authorComSizeUnit"),
                            }}
                            fontSize={{
                                value: authorComSize,
                                label: __("authorComSize"),
                            }}
                            fontSizeMobile={{
                                value: authorComSizeMobile,
                                label: __("authorComSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: authorComSizeTablet,
                                label: __("authorComSizeTablet"),
                            }}
                        />
                        <AdvancedPopColorControl
                            label={__("Text Color", 'premium-block-for-gutenberg')}
                            colorValue={authorComColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                setAttributes({
                                    authorComColor: newValue
                                })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__("Dash Color", 'premium-block-for-gutenberg')}
                            colorValue={dashColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                setAttributes({
                                    dashColor: newValue
                                })
                            }
                        />
                        <ToggleControl
                            label={__("URL")}
                            checked={urlCheck}
                            onChange={newCheck => setAttributes({ urlCheck: newCheck })}
                        />
                        {urlCheck && (
                            <TextControl
                                label={__("URL")}
                                value={urlText}
                                onChange={newURL => setAttributes({ urlText: newURL })}
                            />
                        )}
                        {urlCheck && (
                            <ToggleControl
                                label={__("Open Link in a New Tab")}
                                checked={urlTarget}
                                onChange={newCheck => setAttributes({ urlTarget: newCheck })}
                            />
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Quotations")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <RangeControl
                            label={__("Size (EM)")}
                            value={quotSize}
                            min="1"
                            max="12"
                            onChange={newSize => setAttributes({ quotSize: newSize })}
                        />
                        <AdvancedPopColorControl
                            label={__("Quotations Color", 'premium-block-for-gutenberg')}
                            colorValue={quotColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                setAttributes({
                                    quotColor: newValue
                                })
                            }
                        />
                        <RangeControl
                            label={__("Opacity")}
                            min="0"
                            max="100"
                            value={quotOpacity}
                            onChange={newValue => setAttributes({ quotOpacity: newValue })}
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
                                colorValue={backColor}
                                onChangeColor={newvalue =>
                                    setAttributes({
                                        backColor: newvalue,
                                        backColorUpdated: true,
                                    })
                                }
                                opacityValue={backOpacity}
                                onChangeOpacity={value =>
                                    setAttributes({ backOpacity: value })
                                }
                            />
                            <PremiumBackground
                                imageID={imageID}
                                imageURL={imageURL}
                                backgroundPosition={backgroundPosition}
                                backgroundRepeat={backgroundRepeat}
                                backgroundSize={backgroundSize}
                                fixed={fixed}
                                onSelectMedia={media => {
                                    setAttributes({
                                        imageID: media.id,
                                        imageURL: media.url
                                    });
                                }}
                                onRemoveImage={value =>
                                    setAttributes({ imageURL: "", imageID: "" })
                                }
                                onChangeBackPos={newValue =>
                                    setAttributes({ backgroundPosition: newValue })
                                }
                                onchangeBackRepeat={newValue =>
                                    setAttributes({ backgroundRepeat: newValue })
                                }
                                onChangeBackSize={newValue =>
                                    setAttributes({ backgroundSize: newValue })
                                }
                                onChangeFixed={check => setAttributes({ fixed: check })}
                            />
                        </Fragment>
                        <PremiumBoxShadow
                            inner={true}
                            color={shadowColor}
                            blur={shadowBlur}
                            horizontal={shadowHorizontal}
                            vertical={shadowVertical}
                            position={shadowPosition}
                            onChangeColor={newColor =>
                                setAttributes({
                                    shadowColor: newColor
                                })
                            }
                            onChangeBlur={newBlur =>
                                setAttributes({
                                    shadowBlur: newBlur
                                })
                            }
                            onChangehHorizontal={newValue =>
                                setAttributes({
                                    shadowHorizontal: newValue
                                })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({
                                    shadowVertical: newValue
                                })
                            }
                            onChangePosition={newValue =>
                                setAttributes({
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
                            selectedUnit={paddingUnit}
                            onChangePadSizeUnit={newvalue =>
                                setAttributes({ paddingUnit: newvalue })
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
                    boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    backgroundColor: backColor
                        ? hexToRgba(backColor, backOpacity)
                        : "transparent",
                    backgroundImage: imageURL ? `url('${imageURL}')` : 'none',
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    backgroundAttachment: fixed ? "fixed" : "unset",
                    paddingTop: paddingTop + paddingUnit,
                    paddingBottom: paddingBottom + paddingUnit,
                    paddingLeft: paddingLeft + paddingUnit,
                    paddingRight: paddingRight + paddingUnit
                }}
            >
                <div className={`premium-testimonial__container`}>
                    <span className={`premium-testimonial__upper`}>
                        <PremiumUpperQuote
                            size={quotSize}
                            color={quotColor}
                            opacity={quotOpacity}
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
                                        color: bodyColor,
                                        lineHeight: bodyLine + "px",
                                        marginTop: bodyTop + "px",
                                        marginBottom: bodyBottom + "px"
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
                                tagName={authorTag.toLowerCase()}
                                className={`premium-testimonial__author`}
                                value={author}
                                isSelected={false}
                                onChange={newText => setAttributes({ author: newText })}
                                style={{
                                    color: authorColor,
                                    letterSpacing: authorLetter + "px",
                                    textTransform: authorUpper ? "uppercase" : "none",
                                    fontStyle: authorStyle,
                                    fontWeight: authorWeight
                                }}
                            />
                            <span
                                className={`premium-testimonial__sep`}
                                style={{
                                    color: dashColor
                                }}
                            >
                                &nbsp;-&nbsp;
            </span>
                            <RichText
                                tagName={authorComTag.toLowerCase()}
                                className={`premium-testimonial__author_comp`}
                                onChange={newText => setAttributes({ authorCom: newText })}
                                value={authorCom}
                                isSelected={false}
                                style={{
                                    color: authorComColor,
                                }}
                            />
                        </div>
                    </div>
                    <span className={`premium-testimonial__lower`}>
                        <PremiumLowerQuote
                            size={quotSize}
                            color={quotColor}
                            opacity={quotOpacity}
                        />
                    </span>
                </div>
            </div>
        ];
    }
};

export default edit;
