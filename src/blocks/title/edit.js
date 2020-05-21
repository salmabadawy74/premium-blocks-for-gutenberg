import classnames from "classnames"
import styling from "./styling"
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import iconsList from "../../components/premium-icons-list";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import PremiumRangeResponsive from "../../components/premium-range-responsive";
import PremiumTextShadow from "../../components/premium-text-shadow";

const { __ } = wp.i18n

const {
    Component,
    Fragment,
} = wp.element

const {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    ColorPalette,
    MediaUpload
} = wp.editor

const {
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    Toolbar,
    ToggleControl,
    IconButton
} = wp.components

class edit extends Component {

    constructor() {
        super(...arguments);
    }
    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        const $style = document.createElement("style")
        $style.setAttribute("id", "premium-style-title-" + this.props.clientId)
        document.head.appendChild($style)
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            align,
            className,
            style,
            title,
            iconValue,
            iconType,
            icon,
            iconPosition,
            imageURL,
            imageID,
            link,
            url,
            iconAlign,
            stripePosition,
            stripeWidth,
            stripeHeight,
            stripeTopSpacing,
            stripeBottomSpacing,
            titleColor,
            titleWeight,
            titleLetter,
            titleUpper,
            titleStyle,
            titlefontSize,
            titlefontSizeMobile,
            titlefontSizeTablet,
            titlefontSizeType,
            titleshadowBlur,
            titleshadowColor,
            titleshadowHorizontal,
            titleshadowVertical,
            stripeColor,
            titleborderType,
            titleborderRadius,
            titleborderWidth,
            titleborderColor,
            BGColor,
            lineColor,
            triangleColor,
            stripeAlign,
            iconColor,
            iconSize,
            iconSizeType,
            iconSizeTablet,
            iconSizeMobile,
            iconborderType,
            iconborderRadius,
            iconborderWidth,
            iconborderColor,
            iconshadowBlur,
            iconshadowColor,
            iconshadowHorizontal,
            iconshadowVertical,
            titleMargin,
            titleMarginType,
            titleMarginMobile,
            titleMarginTablet,
            titlePadding,
            titlePaddingTablet,
            titlePaddingType,
            titlePaddingMobile,
            iconBGColor,
            iconPadding,
            iconPaddingType,
            iconPaddingMobile,
            iconPaddingTablet,
            iconSpacing,
            iconSpacingType,
            iconSpacingMobile,
            iconSpacingTablet
        } = attributes

        const STYLE = [{
            value: "style1",
            label: __("Style 1")
          },
          {
            value: "style2",
            label: __("Style 2")
          },
          {
            value: "style3",
            label: "Style 3"
          },
          {
            value: "style4",
            label: __("Style 4")
          },
          {
            value: "style5",
            label: __("Style 5")
          },
          {
            value: "style6",
            label: __("Style 6")
          },
          {
            value: "style7",
            label: __("Style 7")
          }
        ];
        const ICON = [
          {
            value: "icon",
            label: __("Icon")
          },
          {
            value: "image",
            label: __("Image")
          }
        ]
        const POSITION = [
          {
            value: "before",
            label: __("Before")
          }, {
            value: "after",
            label: __("After")
          },
          {
            value: "top",
            label: __("Top")
          }
        ]
        const ALIGNS = ["left", "center", "right"];
        const STRIPEPOSITION = [
          {
            value: "top",
            label: __("Top")
          }, {
            value: "bottom",
            label: __("Bottom")
          }
        ]

        var element = document.getElementById("premium-style-title-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props)
        }

        const onResetClickTitle = () => {
          setAttributes({
            titleWeight: 600,
            titlefontSizeType: "px",
            titlefontSize: "30",
            titlefontSizeMobile: "30",
            titlefontSizeTablet: "30",
            titleStyle: "normal",
            titleLetter: "0",
            titleUpper: false
          });
        }
        const onResetClickTitleTextShadow = () => {
          setAttributes({
            titleshadowColor: "",
            titleshadowBlur: "0",
            titleshadowHorizontal: "0",
            titleshadowVertical: "0",
          });
        }
        const onResetClicktitleborder = () => {
          setAttributes({
            titleborderType: "none",
            titleborderWidth: "1",
            titleborderColor: "",
            titleborderRadius: "0",
          });
        }
        const onResetClickiconborder = () => {
          setAttributes({
            iconborderType: "none",
            iconborderWidth: "1",
            iconborderColor: "",
            iconborderRadius: "0",
          });
        }
        const onResetClickIconTextShadow = () => {
          setAttributes({
            iconshadowColor: "",
            iconshadowBlur: "0",
            iconshadowHorizontal: "0",
            iconshadowVertical: "0",
          });
        }

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
                        title={__("Title")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                      <TextControl
                          label={__("Title")}
                          value={title}
                          onChange={value => setAttributes({ title: value })}
                      />
                      <SelectControl
                          label={__("Style")}
                          value={style}
                          onChange={newSelect => setAttributes({ style: newSelect })}
                          options={STYLE}
                        />
                        <ToggleControl
                          label={__("Icon")}
                          checked={iconValue}
                          onChange={value => setAttributes({ iconValue: value })}
                        />
                        {iconValue&& 
                          <Fragment>
                            <SelectControl
                              label={__("Icon Type")}
                              value={iconType}
                              onChange={newSelect => setAttributes({ iconType: newSelect })}
                              options={ICON}
                            />
                            {iconType == 'icon'? <Fragment>
                                <p>{__("Icon")}</p>
                                <FontIconPicker
                                    icons={iconsList}
                                    value={icon}
                                    onChange={value => setAttributes({ icon: value })}
                                    isMulti={false}
                                    appendTo="body"
                                    noSelectedPlaceholder={__("Select Icon")}
                                />
                              </Fragment>
                              :<Fragment>
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
                            <SelectControl
                              label={__("Icon Position")}
                              value={iconPosition}
                              onChange={newSelect => setAttributes({ iconPosition: newSelect })}
                              options={POSITION}
                            />
                            {iconPosition === 'top' && style != 'style3'  && style != 'style4' && <Fragment>
                                <p>{__("Icon Alignment")}</p>
                                <Toolbar
                                    controls={ALIGNS.map(contentAlign => ({
                                        icon: "editor-align" + contentAlign,
                                        isActive: contentAlign === iconAlign,
                                        onClick: () => setAttributes({ iconAlign: contentAlign })
                                    }))}
                                />
                              </Fragment>
                            }
                          </Fragment>
                        }
                        {style === 'style7' && <Fragment>
                            <SelectControl
                              label={__("Stripe Position")}
                              value={stripePosition}
                              onChange={newSelect => setAttributes({ stripePosition: newSelect })}
                              options={STRIPEPOSITION}
                            />
                            <RangeControl
                              label={__("Stripe Width")}
                              value={stripeWidth}
                              min="1"
                              max="100"
                              onChange={value => setAttributes({ stripeWidth: value })}
                            />
                            <RangeControl
                              label={__("Stripe Height")}
                              value={stripeHeight}
                              min="1"
                              max="100"
                              onChange={value => setAttributes({ stripeHeight: value })}
                            />
                            <RangeControl
                              label={__("Stripe Top Spacing")}
                              value={stripeTopSpacing}
                              min="1"
                              max="100"
                              onChange={value => setAttributes({ stripeTopSpacing: value })}
                            />
                            <RangeControl
                              label={__("Stripe Bottom Spacing")}
                              value={stripeBottomSpacing}
                              min="1"
                              max="100"
                              onChange={value => setAttributes({ stripeBottomSpacing: value })}
                            />
                            <p>{__("Stripe Alignment")}</p>
                            <Toolbar
                                controls={ALIGNS.map(contentAlign => ({
                                    icon: "editor-align" + contentAlign,
                                    isActive: contentAlign === stripeAlign,
                                    onClick: () => setAttributes({ stripeAlign: contentAlign })
                                }))}
                            />
                          </Fragment>
                        }
                        <ToggleControl
                            label={__("Link")}
                            checked={link}
                            onChange={value  => setAttributes({ link: value })}
                        />
                        {link &&
                            <Fragment>
                                <p>{__("URL")}</p>
                                <TextControl
                                    value={url}
                                    onChange={value  => setAttributes({ url: value })}
                                    placeholder={__("Enter URL")}
                                />
                            </Fragment>
                        }
                    </PanelBody>
                    <PanelBody
                        title={__("Title Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                      <p>{__("Color")}</p>
                      <ColorPalette
                          value={titleColor}
                          onChange={newValue =>
                              setAttributes({
                                  titleColor: newValue
                              })
                          }
                          allowReset={true}
                      />
                      <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: titlefontSizeType, label: __("titlefontSizeType") }}
                            fontSize={{ value: titlefontSize, label: __("titlefontSize") }}
                            fontSizeMobile={{ value: titlefontSizeMobile, label: __("titlefontSizeMobile") }}
                            fontSizeTablet={{ value: titlefontSizeTablet, label: __("titlefontSizeTablet") }}
                            weight={titleWeight}
                            style={titleStyle}
                            spacing={titleLetter}
                            upper={titleUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ titleWeight: newWeight || 600 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ titleStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ titleLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ titleUpper: check })}
                            onResetClick={onResetClickTitle}
                        />
                        {style === 'style2' && <Fragment>
                            <p>{__("Background Color")}</p>
                            <ColorPalette
                                value={BGColor}
                                onChange={newValue =>
                                    setAttributes({
                                        BGColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                          </Fragment>
                        }
                        {style === 'style3' && <Fragment>
                            <p>{__("Background Color")}</p>
                            <ColorPalette
                                value={BGColor}
                                onChange={newValue =>
                                    setAttributes({
                                        BGColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                          </Fragment>
                        }
                        {style === 'style5' && <Fragment>
                            <p>{__("Line Color")}</p>
                            <ColorPalette
                                value={lineColor}
                                onChange={newValue =>
                                    setAttributes({
                                        lineColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                          </Fragment>
                        }
                        {style === 'style6' && <Fragment>
                            <p>{__("Line Color")}</p>
                            <ColorPalette
                                value={lineColor}
                                onChange={newValue =>
                                    setAttributes({
                                        lineColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                            <p>{__("Triangle Color")}</p>
                            <ColorPalette
                                value={triangleColor}
                                onChange={newValue =>
                                    setAttributes({
                                        triangleColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                          </Fragment>
                        }
                        {style === 'style7' ? <Fragment>
                            <p>{__("Stripe Color")}</p>
                            <ColorPalette
                                value={stripeColor}
                                onChange={newValue =>
                                    setAttributes({
                                        stripeColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                          </Fragment>
                          : style != 'style3' && <PremiumBorder
                            borderType={titleborderType}
                            borderWidth={titleborderWidth}
                            borderColor={titleborderColor}
                            borderRadius={titleborderRadius}
                            onChangeType={newType => setAttributes({ titleborderType: newType })}
                            onChangeWidth={newWidth => setAttributes({ titleborderWidth: newWidth })}
                            onChangeColor={colorValue =>
                                setAttributes({ titleborderColor: colorValue.hex })
                            }
                            onChangeRadius={newrRadius =>
                                setAttributes({ titleborderRadius: newrRadius })
                            }
                            onResetClick={onResetClicktitleborder}
                          />
                          }
                        <PremiumTextShadow
                            color={titleshadowColor}
                            blur={titleshadowBlur}
                            horizontal={titleshadowHorizontal}
                            vertical={titleshadowVertical}
                            onChangeColor={newColor =>
                            setAttributes({ titleshadowColor: newColor.hex })
                            }
                            onChangeBlur={newBlur => setAttributes({ titleshadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                            setAttributes({ titleshadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                            setAttributes({ titleshadowVertical: newValue })
                            }
                            onResetClick={onResetClickTitleTextShadow}
                        />
                        <PremiumRangeResponsive
                            setAttributes={setAttributes}
                            rangeType={{ value: titleMarginType, label: __("titleMarginType") }}
                            range={{ value: titleMargin, label: __("titleMargin") }}
                            rangeMobile={{ value: titleMarginMobile, label: __("titleMarginMobile") }}
                            rangeTablet={{ value: titleMarginTablet, label: __("titleMarginTablet") }}
                            rangeLabel={__("Margin")}
                            min={1}
                            max={100}
                        />
                        <PremiumRangeResponsive
                            setAttributes={setAttributes}
                            rangeType={{ value: titlePaddingType, label: __("titlePaddingType") }}
                            range={{ value: titlePadding, label: __("titlePadding") }}
                            rangeMobile={{ value: titlePaddingMobile, label: __("titlePaddingMobile") }}
                            rangeTablet={{ value: titlePaddingTablet, label: __("titlePaddingTablet") }}
                            rangeLabel={__("Padding")}
                            min={1}
                            max={100}
                        />
                    </PanelBody>
                    {iconValue && <PanelBody
                        title={__("Icon Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                      >
                        {iconType === 'icon' && <Fragment>
                            <p>{__("Color")}</p>
                            <ColorPalette
                                value={iconColor}
                                onChange={newValue =>
                                    setAttributes({
                                        iconColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                          </Fragment>
                        }
                        <PremiumRangeResponsive
                            setAttributes={setAttributes}
                            rangeType={{ value: iconSizeType, label: __("iconSizeType") }}
                            range={{ value: iconSize, label: __("iconSize") }}
                            rangeMobile={{ value: iconSizeMobile, label: __("iconSizeMobile") }}
                            rangeTablet={{ value: iconSizeTablet, label: __("iconSizeTablet") }}
                            rangeLabel={__("Size")}
                            min={1}
                            max={100}
                        />
                        <p>{__("Background Color")}</p>
                        <ColorPalette
                            value={iconBGColor}
                            onChange={newValue =>
                                setAttributes({
                                    iconBGColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumBorder
                            borderType={iconborderType}
                            borderWidth={iconborderWidth}
                            borderColor={iconborderColor}
                            borderRadius={iconborderRadius}
                            onChangeType={newType => setAttributes({ iconborderType: newType })}
                            onChangeWidth={newWidth => setAttributes({ iconborderWidth: newWidth })}
                            onChangeColor={colorValue =>
                                setAttributes({ iconborderColor: colorValue.hex })
                            }
                            onChangeRadius={newrRadius =>
                                setAttributes({ iconborderRadius: newrRadius })
                            }
                            onResetClick={onResetClickiconborder}
                          />
                          {iconType === 'icon' && <PremiumTextShadow
                            color={iconshadowColor}
                            blur={iconshadowBlur}
                            horizontal={iconshadowHorizontal}
                            vertical={iconshadowVertical}
                            onChangeColor={newColor =>
                            setAttributes({ iconshadowColor: newColor.hex })
                            }
                            onChangeBlur={newBlur => setAttributes({ iconshadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                            setAttributes({ iconshadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                            setAttributes({ iconshadowVertical: newValue })
                            }
                            onResetClick={onResetClickIconTextShadow}
                        />}
                        <PremiumRangeResponsive
                          setAttributes={setAttributes}
                          rangeType={{ value: iconPaddingType, label: __("iconPaddingType") }}
                          range={{ value: iconPadding, label: __("iconPadding") }}
                          rangeMobile={{ value: iconPaddingMobile, label: __("iconPaddingMobile") }}
                          rangeTablet={{ value: iconPaddingTablet, label: __("iconPaddingTablet") }}
                          rangeLabel={__("Padding")}
                          min={1}
                          max={100}
                        />
                        <PremiumRangeResponsive
                          setAttributes={setAttributes}
                          rangeType={{ value: iconSpacingType, label: __("iconSpacingType") }}
                          range={{ value: iconSpacing, label: __("iconSpacing") }}
                          rangeMobile={{ value: iconSpacingMobile, label: __("iconSpacingMobile") }}
                          rangeTablet={{ value: iconSpacingTablet, label: __("iconSpacingTablet") }}
                          rangeLabel={__("Spacing")}
                          min={0}
                          max={100}
                        />
                      </PanelBody>
                    }
                </InspectorControls>
            ),
            <div className={classnames(
                className,
                `premium-block-${this.props.clientId}`
            )} style={{
                textAlign: align,
            }}>
                <div className={`premium-title`} style={{
                textAlign: align,
              }}>
                <div className={`${style}`}>
                  <h2 className={`premium-title-header premium-title-${style}__wrap ${iconValue?iconPosition:""} ${iconPosition=='top'? `premium-title-${iconAlign}`:""}`}>
                    {style === 'style7' ? <Fragment>
                      {iconPosition !='top' && iconValue && <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                        <span className={`premium-title-style7-stripe-span`}></span>
                        </span>
                      }
                      {!iconValue &&<span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                        <span className={`premium-title-style7-stripe-span`}></span>
                        </span>
                      }
                      <div className={`premium-title-style7-inner-title`}>
                      {
                        iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`}/>
                      }
                      {
                        iconValue && iconType == 'image' && < img className = {`premium-title-icon`} src = {imageURL}/>
                      }
                      {iconValue && iconPosition ==='top' &&<span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                        <span className={`premium-title-style7-stripe-span`}></span>
                        </span>
                      }
                      <span className={`premium-title-text-title`}>{title}</span>
                      </div>
                      </Fragment>
                      : <Fragment>
                        {iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`}/>
                        }
                        {
                          iconValue && iconType == 'image' && < img className = {`premium-title-icon`} src = {imageURL}/>
                        }
                      <span className={`premium-title-text-title`}>{title}</span>
                      </Fragment>
                    }
                     
                    {
                      /*
                      {style == 'style7' ? !iconValue ?<Fragment> <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                        <span className={`premium-title-style7-stripe-span`}></span>
                        </span>
                        <span className={`premium-title-text-title`}>{title}</span>
                        </Fragment>
                      : iconPosition !='top'? <Fragment><span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                      <span className={`premium-title-style7-stripe-span`}></span>
                      </span>
                    <div className={`premium-title-style7-inner-title`}>
                      {
                        iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`}/>
                      }
                      {
                        iconValue && iconType == 'image' && < img className = {`premium-title-icon`} src = {imageURL}/>
                      }
                      <span className={`premium-title-text-title`}>{title}</span>
                      </div>
                      </Fragment>
                      : <div className={`premium-title-style7-inner-title`}>
                      {
                        iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`}/>
                      }
                      {
                        iconValue && iconType == 'image' && < img className = {`premium-title-icon`} src = {imageURL}/>
                      }
                      {iconPosition =='top' &&<span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                      <span className={`premium-title-style7-stripe-span`}></span>
                      </span>
                    }
                      <span className={`premium-title-text-title`}>{title}</span>
                      </div>
                      :<span className={`premium-title-text-title`}>{title}</span>
                    } */}
                    {link && <a href={`${url}`}></a>}
                  </h2>
                </div>
                </div>
            </div>
        ]
    }
}

export default edit