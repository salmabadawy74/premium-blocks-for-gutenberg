import classnames from "classnames"
import styling from "./styling"
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import iconsList from "../../components/premium-icons-list";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import PremiumRangeResponsive from "../../components/premium-range-responsive";
import PremiumTextShadow from "../../components/premium-text-shadow";

const { __ } = wp.i18n
let isBoxUpdated = null;

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
    Toolbar,
    ToggleControl,
    IconButton
} = wp.components

class edit extends Component {

    constructor() {
        super(...arguments);
        this.initToggleBox = this.initToggleBox.bind(this);
    }
    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        // const $style = document.createElement("style")
        // $style.setAttribute("id", "premium-style-flip-box-" + this.props.clientId)
        // document.head.appendChild($style)
        setTimeout(this.initToggleBox, 5);
    }

    componentDidUpdate() {
      clearTimeout(isBoxUpdated);
      isBoxUpdated = this.initToggleBox();
    }
    initToggleBox() {
      const {block_id} = this.props.attributes;
      if (!block_id) return null;

      let toggleBox = document.getElementsByClassName(`premium-flip-style-flip`);
      console.log(toggleBox.length);
      let frontRight = document.getElementsByClassName(`premium-flip-frontrl`);
      let frontLeft = document.getElementsByClassName(`premium-flip-frontlr`);
      let frontWrapper = document.getElementsByClassName(`premium-flip-text-wrapper`);
      let backWrapper = document.getElementsByClassName(`premium-flip-back-text-wrapper`);
      
      if (toggleBox.length !==0)
      {
        console.log("hh");
        
          toggleBox[0].addEventListener("mouseenter", () => {
            toggleBox[0].classList.add("flipped");
            if (frontRight) {
              frontWrapper[0].classList.remove("PafadeInLeft");
              frontWrapper[0].classList.add("PafadeInRight");
              backWrapper[0].classList.add("PafadeInLeft");
              backWrapper[0].classList.remove("PafadeInRight");
            }
            else if (frontLeft) {
              frontWrapper[0].classList.remove("PafadeInRevLeft");
              frontWrapper[0].classList.add("PafadeInRevRight");
              backWrapper[0].classList.add("PafadeInRevLeft");
              backWrapper[0].classList.remove("PafadeInRevRight");
            }
          });
          toggleBox[0].addEventListener("mouseleave", () => {
            toggleBox[0].classList.remove("flipped");
            if (frontRight) {
              frontWrapper[0].classList.add("PafadeInLeft");
              frontWrapper[0].classList.remove("PafadeInRight");
              backWrapper[0].classList.remove("PafadeInLeft");
              backWrapper[0].classList.add("PafadeInRight");
            } else if (frontLeft) {
              frontWrapper[0].classList.add("PafadeInRevLeft");
              frontWrapper[0].classList.remove("PafadeInRevRight");
              backWrapper[0].classList.remove("PafadeInRevLeft");
              backWrapper[0].classList.add("PafadeInRevRight");
            }
          });
        }
        else{
          console.log("jj", frontWrapper);
          if (frontRight) {
          frontWrapper[0].classList.remove("PafadeInRight");
          backWrapper[0].classList.remove("PafadeInLeft");
          }
          else if (frontLeft) {
          frontWrapper[0].classList.remove("PafadeInRevRight");
          backWrapper[0].classList.remove("PafadeInRevLeft");
          }
        }
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            align,
            className,
            iconValueFront,
            iconTypeFront,
            iconFront,
            imageURLFront,
            imageIDFront,
            iconSizeFront,
            iconSizeFrontType,
            iconSizeFrontMobile,
            iconSizeFrontTablet,
            titleValueFront,
            titleFront,
            descFront,
            descValueFront,
            verticalalignFront,
            horizontalalignFront,
            iconValueBack,
            iconTypeBack,
            iconBack,
            imageURLBack,
            imageIDBack,
            link,
            url,
            iconSizeBack,
            iconSizeBackType,
            iconSizeBackMobile,
            iconSizeBackTablet,
            titleValueBack,
            titleBack,
            descBack,
            descValueBack,
            verticalalignBack,
            horizontalalignBack,
            effect,
            flipDir,
            animation,
            height,
            heightType,
            heightMobile,
            heightTablet,
        } = attributes

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
        const VALIGN = [{
            icon: 'arrow-up-alt',
            title: __('Top'),
            align: 'flex-start',
          },
          {
            icon: 'editor-aligncenter',
            title: __('Center'),
            align: 'center',
          },
          {
            icon: 'arrow-down-alt',
            title: __('Bottom'),
            align: 'flex-end',
          },
        ];
        const HALIGN = [{
            icon: 'arrow-left-alt',
            title: __('left'),
            align: 'flex-start',
          },
          {
            icon: 'editor-aligncenter',
            title: __('Center'),
            align: 'center',
          },
          {
            icon: 'arrow-right-alt',
            title: __('Right'),
            align: 'flex-end',
          },
        ];
        const EFFECT = [{
            value: "fade",
            label: __("Fade")
          },
          {
            value: "flip",
            label: __("Flip")
          },
          {
            value: "slide",
            label: "Slide"
          },
          {
            value: "push",
            label: __("Push")
          },
          {
            value: "zoom",
            label: __("Zoom")
          }
        ];
        const FLIPDIR = [{
            value: "lr",
            label: __("Left to Right")
          },
          {
            value: "rl",
            label: __("Right to Left")
          },
          {
            value: "tb",
            label: "Top to Bottom"
          },
          {
            value: "bt",
            label: __("Bottom to Top")
          }
        ];

        // var element = document.getElementById("premium-style-flip-box-" + this.props.clientId)

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
                        title={__("Front")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                      <ToggleControl
                        label={__("Icon")}
                        checked={iconValueFront}
                        onChange={value => setAttributes({ iconValueFront: value })}
                      />
                      {iconValueFront&& 
                        <Fragment>
                          <SelectControl
                            label={__("Icon Type")}
                            value={iconTypeFront}
                            onChange={newSelect => setAttributes({ iconTypeFront: newSelect })}
                            options={ICON}
                          />
                          {iconTypeFront == 'icon'? <Fragment>
                              <p>{__("Icon")}</p>
                              <FontIconPicker
                                  icons={iconsList}
                                  value={iconFront}
                                  onChange={value => setAttributes({ iconFront: value })}
                                  isMulti={false}
                                  appendTo="body"
                                  noSelectedPlaceholder={__("Select Icon")}
                              />
                            </Fragment>
                            :<Fragment>
                              {imageURLFront && <img src={imageURLFront} width="100%" height="auto" />}
                              <MediaUpload
                                allowedTypes={["image"]}
                                onSelect={media => {
                                  setAttributes({ imageURLFront: media.url, imageIDFront: media.id });
                                }}
                                type="image"
                                value={imageIDFront}
                                render={({ open }) => (
                                  <IconButton className="premium-media-uplpad-btn" label={__("Change Image")} icon="edit" onClick={open}>
                                    {__("Change Image")}
                                  </IconButton>
                                )}
                              />
                            </Fragment>
                          }
                          <PremiumRangeResponsive
                            setAttributes={setAttributes}
                            rangeType={{ value: iconSizeFrontType, label: __("iconSizeFrontType") }}
                            range={{ value: iconSizeFront, label: __("iconSizeFront") }}
                            rangeMobile={{ value: iconSizeFrontMobile, label: __("iconSizeFrontMobile") }}
                            rangeTablet={{ value: iconSizeFrontTablet, label: __("iconSizeFrontTablet") }}
                            rangeLabel={__("Icon Size")}
                            min={1}
                            max={100}
                          />
                        </Fragment>
                      }
                      <ToggleControl
                        label={__("Title")}
                        checked={titleValueFront}
                        onChange={value => setAttributes({ titleValueFront: value })}
                      />
                      {titleValueFront && <TextControl
                          label={__("Title")}
                          value={titleFront}
                          onChange={value => setAttributes({ titleFront: value })}
                        />
                      }
                      <ToggleControl
                        label={__("Description")}
                        checked={descValueFront}
                        onChange={value => setAttributes({ descValueFront: value })}
                      />
                      {descValueFront && <TextareaControl
                          label={__("Description")}
                          value={descFront}
                          onChange={value => setAttributes({ descFront: value })}
                        />
                      }
                      <p>{__("Vertical Position")}</p>
                      <Toolbar
                        controls={VALIGN.map(iconAlign => ({
                          icon: iconAlign.icon,
                          isActive: iconAlign.align === verticalalignFront,
                          onClick: () => setAttributes({ verticalalignFront: iconAlign.align })
                        }))}
                      />
                      <p>{__("Horizontal Position")}</p>
                      <Toolbar
                        controls={HALIGN.map(iconAlign => ({
                          icon: iconAlign.icon,
                          isActive: iconAlign.align === horizontalalignFront,
                          onClick: () => setAttributes({ horizontalalignFront: iconAlign.align })
                        }))}
                      />
                    </PanelBody>
                    <PanelBody
                        title={__("Back")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                      <ToggleControl
                        label={__("Icon")}
                        checked={iconValueBack}
                        onChange={value => setAttributes({ iconValueBack: value })}
                      />
                      {iconValueBack&& 
                        <Fragment>
                          <SelectControl
                            label={__("Icon Type")}
                            value={iconTypeBack}
                            onChange={newSelect => setAttributes({ iconTypeBack: newSelect })}
                            options={ICON}
                          />
                          {iconTypeBack == 'icon'? <Fragment>
                              <p>{__("Icon")}</p>
                              <FontIconPicker
                                  icons={iconsList}
                                  value={iconBack}
                                  onChange={value => setAttributes({ iconBack: value })}
                                  isMulti={false}
                                  appendTo="body"
                                  noSelectedPlaceholder={__("Select Icon")}
                              />
                            </Fragment>
                            :<Fragment>
                              {imageURLBack && <img src={imageURLBack} width="100%" height="auto" />}
                              <MediaUpload
                                allowedTypes={["image"]}
                                onSelect={media => {
                                  setAttributes({ imageURLBack: media.url, imageIDBack: media.id });
                                }}
                                type="image"
                                value={imageIDBack}
                                render={({ open }) => (
                                  <IconButton className="premium-media-uplpad-btn" label={__("Change Image")} icon="edit" onClick={open}>
                                    {__("Change Image")}
                                  </IconButton>
                                )}
                              />
                            </Fragment>
                          }
                          <PremiumRangeResponsive
                            setAttributes={setAttributes}
                            rangeType={{ value: iconSizeBackType, label: __("iconSizeBackType") }}
                            range={{ value: iconSizeBack, label: __("iconSizeBack") }}
                            rangeMobile={{ value: iconSizeBackMobile, label: __("iconSizeBackMobile") }}
                            rangeTablet={{ value: iconSizeBackTablet, label: __("iconSizeBackTablet") }}
                            rangeLabel={__("Icon Size")}
                            min={1}
                            max={100}
                          />
                        </Fragment>
                      }
                      <ToggleControl
                        label={__("Title")}
                        checked={titleValueBack}
                        onChange={value => setAttributes({ titleValueBack: value })}
                      />
                      {titleValueBack && <TextControl
                          label={__("Title")}
                          value={titleBack}
                          onChange={value => setAttributes({ titleBack: value })}
                        />
                      }
                      <ToggleControl
                        label={__("Description")}
                        checked={descValueBack}
                        onChange={value => setAttributes({ descValueBack: value })}
                      />
                      {descValueBack && <TextareaControl
                          label={__("Description")}
                          value={descBack}
                          onChange={value => setAttributes({ descBack: value })}
                        />
                      }
                      <ToggleControl
                          label={__("link")}
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
                      <p>{__("Vertical Position")}</p>
                      <Toolbar
                        controls={VALIGN.map(iconAlign => ({
                          icon: iconAlign.icon,
                          isActive: iconAlign.align === verticalalignBack,
                          onClick: () => setAttributes({ verticalalignBack: iconAlign.align })
                        }))}
                      />
                      <p>{__("Horizontal Position")}</p>
                      <Toolbar
                        controls={HALIGN.map(iconAlign => ({
                          icon: iconAlign.icon,
                          isActive: iconAlign.align === horizontalalignBack,
                          onClick: () => setAttributes({ horizontalalignBack: iconAlign.align })
                        }))}
                      />
                    </PanelBody>
                    <PanelBody
                        title={__("Additional Settings")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                      <SelectControl
                        label={__("Effect")}
                        value={effect}
                        onChange={newSelect => setAttributes({ effect: newSelect })}
                        options={EFFECT}
                      />
                      {effect != 'fade' && effect != 'zoom' && <SelectControl
                        label={__("Flip Direction")}
                        value={flipDir}
                        onChange={newSelect => setAttributes({ flipDir: newSelect })}
                        options={FLIPDIR}
                      />}
                      <ToggleControl
                        label={__("Hover Text Animation")}
                        checked={animation}
                        onChange={value => setAttributes({ animation: value })}
                      />
                      <PremiumRangeResponsive
                        setAttributes={setAttributes}
                        rangeType={{ value: heightType, label: __("heightType") }}
                        range={{ value: height, label: __("height") }}
                        rangeMobile={{ value: heightMobile, label: __("heightMobile") }}
                        rangeTablet={{ value: heightTablet, label: __("heightTablet") }}
                        rangeLabel={__("Height")}
                        min={0}
                        max={1000}
                      />
                    </PanelBody>
                </InspectorControls>
            ),
            <div className={classnames(
                className,
                `premium-block-${this.props.clientId}`
            )} style={{textAlign: align}} id={`premium-flip-box-${this.props.clientId}`}>
              <div className={`premium-flip-style-${effect}`}>
                <div className={`premium-flip-box`} style={{
                textAlign: align
              }}>
                <div className={`premium-flip-front premium-flip-front${flipDir}`}>
                  <div className="premium-flip-front-overlay">
                    <div className="premium-flip-front-content-container">
                      <div className="premium-flip-front-content" style={{ justifyContent: horizontalalignFront, alignItems: verticalalignFront }}>
                        <div className="premium-flip-text-wrapper">
                          {
                            iconValueFront && iconTypeFront == 'icon' && <i className={`premium-flip-front-icon ${iconFront}`}/>
                          }
                          {
                            iconValueFront && iconTypeFront == 'image' && < img className = {`premium-flip-front-image`} src = {imageURLFront}/>
                          }
                          {
                            titleValueFront && < h3 className = "premium-flip-front-title" >{titleFront}</h3>
                          }
                          {
                            descValueFront&& <div className="premium-flip-front-description">
                              <p>{descFront}</p>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`premium-flip-back premium-flip-back${flipDir}`}>
                  <div className="premium-flip-back-overlay">
                    <div className="premium-flip-back-content-container">
                      {link && <a className="premium-flip-box-full-link" href={`${url}`}></a>}
                      <div className="premium-flip-back-content" style={{ justifyContent: horizontalalignBack, alignItems: verticalalignBack }}>
                        <div className="premium-flip-back-text-wrapper">
                          {
                            iconValueBack && iconTypeBack == 'icon' && <i className={`premium-flip-back-icon ${iconBack}`}/>
                          }
                          {
                            iconValueBack && iconTypeBack == 'image' && < img className = {`premium-flip-back-image`} src = {imageURLBack}/>
                          }
                          {
                            titleValueBack && < h3 className = "premium-flip-back-title" >{titleBack}</h3>
                          }
                          {
                            descValueBack&& <div className="premium-flip-back-description">
                              <p>{descBack}</p>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
            </div>
        ]
    }
}

export default edit