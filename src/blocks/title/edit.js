import classnames from "classnames"
// import styling from "./styling"
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
    TextareaControl,
    TextControl,
    RangeControl,
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
        // const $style = document.createElement("style")
        // $style.setAttribute("id", "premium-style-title-" + this.props.clientId)
        // document.head.appendChild($style)
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
            url
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

        // var element = document.getElementById("premium-style-title-" + this.props.clientId)

        // if (null != element && "undefined" != typeof element) {
        //     element.innerHTML = styling(this.props)
        // }

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
                  <h2 className={`premium-title-header premium-title-${style} ${iconValue?iconPosition:""}`}>
                    {
                      iconValue && iconType == 'icon' && style != 'style7' && <i className={`premium-title-icon ${icon}`}/>
                    }
                    {
                      iconValue && iconType == 'image' && image && style != 'style7' && < img className = {`premium-title-icon`} src = {image.url}/>
                    }
                    {style == 'style7'?<span className={`premium-title-style7-stripe__wrap`}>
                      <span className={`premium-title-style7-stripe-span`}></span>
                      </span>:""
                    }
                    {style == 'style7'?<div className={`premium-title-style7-inner-title`}>
                      {
                        iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`}/>
                      }
                      {
                        iconValue && iconType == 'image' && image && < img className = {`premium-title-icon`} src = {image.url}/>
                      }
                      <span>{title}</span>
                      </div>
                      :<span>{title}</span>
                    }
                    {link && <a href={`${url}`}></a>}
                  </h2>
                </div>
            </div>
        ]
    }
}

export default edit