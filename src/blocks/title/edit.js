import classnames from "classnames"
import styling from "./styling"
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import iconsList from "../../components/premium-icons-list";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import PremiumBoxShadow from "../../components/premium-box-shadow";
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
    Button
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
            image,
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
            stripeColor
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
            titleWeight: 500,
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
                                {image && <img src={image.url} width="100%" height="auto" />}
                                <MediaUpload
                                  title={__("Select Image")}
                                  onSelect={value => setAttributes({ image: value })}
                                  allowedTypes={["image"]}
                                  value={image}
                                  render={({ open }) => (
                                      <Button isDefault onClick={open}>
                                          {!image ? __("Select Image") : __("Replace image")}
                                      </Button>
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
                                <p>{__("First Content Alignment")}</p>
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
                                setAttributes({ titleWeight: newWeight || 500 })
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
                        {style === 'style7' && <Fragment>
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
                    </PanelBody>
                </InspectorControls>
            ),
            <div className={classnames(
                className,
                `premium-block-${this.props.clientId}`
            )} style={{
                textAlign: align,
            }}>
                <div className={`premium-title ${style}`} data-setting={`${this.props.clientId}`} style={{
                textAlign: align,
              }}>
                  <h2 className={`premium-title-header premium-title-${style}__wrap ${iconValue?iconPosition:""} ${iconPosition=='top'? `premium-title-${iconAlign}`:""}`}>
                    {
                      iconValue && iconType == 'icon' && style != 'style7' && <i className={`premium-title-icon ${icon}`}/>
                    }
                    {
                      iconValue && iconType == 'image' && image && style != 'style7' && < img className = {`premium-title-icon`} src = {image.url}/>
                    }
                    {style == 'style7' && iconPosition !='top' &&<span className={`premium-title-style7-stripe__wrap`}>
                      <span className={`premium-title-style7-stripe-span`}></span>
                      </span>
                    }
                    {style == 'style7'?<div className={`premium-title-style7-inner-title`}>
                      {
                        iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`}/>
                      }
                      {
                        iconValue && iconType == 'image' && image && < img className = {`premium-title-icon`} src = {image.url}/>
                      }
                      {iconPosition =='top' &&<span className={`premium-title-style7-stripe__wrap`}>
                      <span className={`premium-title-style7-stripe-span`}></span>
                      </span>
                    }
                      <span className={`premium-title-text-title`}>{title}</span>
                      </div>
                      :<span className={`premium-title-text-title`}>{title}</span>
                    }
                    {link && <a href={`${url}`}></a>}
                  </h2>
                </div>
            </div>
        ]
    }
}

export default edit