import classnames from "classnames"
import styling from "./styling"
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import iconsList from "../../components/premium-icons-list";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import PremiumRangeResponsive from "../../components/premium-range-responsive";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";

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
    IconButton,
    TabPanel
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
        const $style = document.createElement("style")
        $style.setAttribute("id", "premium-style-flip-box-" + this.props.clientId)
        document.head.appendChild($style)
        this.initToggleBox();
    }

    componentDidUpdate() {
      clearTimeout(isBoxUpdated);
      isBoxUpdated = setTimeout(this.initToggleBox, 10);
    }
    initToggleBox() {
      const {block_id, animation} = this.props.attributes;
      if (!block_id) return null;

      let toggleBox = document.getElementsByClassName(`premium-flip-style-flip`);
      console.log(toggleBox.length);
      let frontRight = document.getElementsByClassName(`premium-flip-frontrl`);
      let frontLeft = document.getElementsByClassName(`premium-flip-frontlr`);
      let frontWrapper = document.getElementsByClassName(`premium-flip-text-wrapper`);
      let backWrapper = document.getElementsByClassName(`premium-flip-back-text-wrapper`);
      if (!toggleBox) return null;
      if (toggleBox.length != 0){
        console.log("hh");
        
          toggleBox[0].addEventListener("mouseenter", () => {
            toggleBox[0].classList.add("flipped");
      if (!animation) return null;

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
      if (!animation) return null;

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
            frontShadowBlur,
            frontShadowColor,
            frontShadowHorizontal,
            frontShadowVertical,
            frontShadowPosition,
            iconfrontColor,
            iconfrontBGColor,
            iconfrontborderType,
            iconfrontborderRadius,
            iconfrontborderWidth,
            iconfrontborderColor,
            iconfrontShadowBlur,
            iconfrontShadowColor,
            iconfrontShadowHorizontal,
            iconfrontShadowVertical,
            titlefrontColor,
            titlefrontWeight,
            titlefrontLetter,
            titlefrontUpper,
            titlefrontStyle,
            titlefrontfontSize,
            titlefrontfontSizeMobile,
            titlefrontfontSizeTablet,
            titlefrontfontSizeType,
            titlefrontBGColor,
            titlefrontshadowBlur,
            titlefrontshadowColor,
            titlefrontshadowHorizontal,
            titlefrontshadowVertical,
            descfrontColor,
            descfrontWeight,
            descfrontLetter,
            descfrontUpper,
            descfrontStyle,
            descfrontfontSize,
            descfrontfontSizeMobile,
            descfrontfontSizeTablet,
            descfrontfontSizeType,
            descfrontBGColor,
            descfrontshadowBlur,
            descfrontshadowColor,
            descfrontshadowHorizontal,
            descfrontshadowVertical,
            backShadowBlur,
            backShadowColor,
            backShadowHorizontal,
            backShadowVertical,
            backShadowPosition,
            iconbackColor,
            iconbackBGColor,
            iconbackborderType,
            iconbackborderRadius,
            iconbackborderWidth,
            iconbackborderColor,
            iconbackShadowBlur,
            iconbackShadowColor,
            iconbackShadowHorizontal,
            iconbackShadowVertical,
            titlebackColor,
            titlebackWeight,
            titlebackLetter,
            titlebackUpper,
            titlebackStyle,
            titlebackfontSize,
            titlebackfontSizeMobile,
            titlebackfontSizeTablet,
            titlebackfontSizeType,
            titlebackBGColor,
            titlebackshadowBlur,
            titlebackshadowColor,
            titlebackshadowHorizontal,
            titlebackshadowVertical,
            descbackColor,
            descbackWeight,
            descbackLetter,
            descbackUpper,
            descbackStyle,
            descbackfontSize,
            descbackfontSizeMobile,
            descbackfontSizeTablet,
            descbackfontSizeType,
            descbackBGColor,
            descbackshadowBlur,
            descbackshadowColor,
            descbackshadowHorizontal,
            descbackshadowVertical,
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
        const TABSTYLE = [{
            name: "icon",
            title: __("Icon")
          },
          {
            name: "title",
            title: __("Title")
          },
          {
            name: "description",
            title: __("Description")
          },
        ];

        var element = document.getElementById("premium-style-flip-box-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props)
        }

        const onResetClickFront = () => {
          setAttributes({
            frontShadowColor: "",
            frontShadowBlur: "0",
            frontShadowHorizontal: "0",
            frontShadowVertical: "0",
            frontShadowPosition: ""
          });
        }
        const onResetClickiconfrontBorder = () => {
          setAttributes({
            iconfrontborderType: "none",
            iconfrontborderWidth: "1",
            iconfrontborderColor: "",
            iconfrontborderRadius: "0",
          });
        }
        const onResetClickiconfrontTextShadow = () => {
          setAttributes({
            iconfrontShadowColor: "",
            iconfrontShadowBlur: "0",
            iconfrontShadowHorizontal: "0",
            iconfrontShadowVertical: "0"
          });
        }
        const onResetClickTitlefront = () => {
          setAttributes({
            titlefrontWeight: 600,
            titlefrontfontSizeType: "px",
            titlefrontfontSize: "20",
            titlefrontfontSizeMobile: "20",
            titlefrontfontSizeTablet: "20",
            titlefrontStyle: "normal",
            titlefrontLetter: "0",
            titlefrontUpper: false
          });
        }
        const onResetClickTitlefrontTextShadow = () => {
          setAttributes({
            titlefrontshadowColor: "",
            titlefrontshadowBlur: "0",
            titlefrontshadowHorizontal: "0",
            titlefrontshadowVertical: "0",
          });
        }
        const onResetClickDescfront = () => {
          setAttributes({
            descfrontWeight: 600,
            descfrontfontSizeType: "px",
            descfrontfontSize: "20",
            descfrontfontSizeMobile: "20",
            descfrontfontSizeTablet: "20",
            descfrontStyle: "normal",
            descfrontLetter: "0",
            descfrontUpper: false
          });
        }
        const onResetClickDescfrontTextShadow = () => {
          setAttributes({
            descfrontshadowColor: "",
            descfrontshadowBlur: "0",
            descfrontshadowHorizontal: "0",
            descfrontshadowVertical: "0",
          });
        }
        const onResetClickBack = () => {
          setAttributes({
            backShadowColor: "",
            backShadowBlur: "0",
            backShadowHorizontal: "0",
            backShadowVertical: "0",
            backShadowPosition: ""
          });
        }
        const onResetClickiconbackBorder = () => {
          setAttributes({
            iconbackborderType: "none",
            iconbackborderWidth: "1",
            iconbackborderColor: "",
            iconbackborderRadius: "0",
          });
        }
        const onResetClickiconbackTextShadow = () => {
          setAttributes({
            iconbackShadowColor: "",
            iconbackShadowBlur: "0",
            iconbackShadowHorizontal: "0",
            iconbackShadowVertical: "0"
          });
        }
        const onResetClickTitleback = () => {
          setAttributes({
            titlebackWeight: 600,
            titlebackfontSizeType: "px",
            titlebackfontSize: "20",
            titlebackfontSizeMobile: "20",
            titlebackfontSizeTablet: "20",
            titlebackStyle: "normal",
            titlebackLetter: "0",
            titlebackUpper: false
          });
        }
        const onResetClickTitlebackTextShadow = () => {
          setAttributes({
            titlebackshadowColor: "",
            titlebackshadowBlur: "0",
            titlebackshadowHorizontal: "0",
            titlebackshadowVertical: "0",
          });
        }
        const onResetClickDescback = () => {
          setAttributes({
            descbackWeight: 600,
            descbackfontSizeType: "px",
            descbackfontSize: "20",
            descbackfontSizeMobile: "20",
            descbackfontSizeTablet: "20",
            descbackStyle: "normal",
            descbackLetter: "0",
            descbackUpper: false
          });
        }
        const onResetClickDescbackTextShadow = () => {
          setAttributes({
            descbackshadowColor: "",
            descbackshadowBlur: "0",
            descbackshadowHorizontal: "0",
            descbackshadowVertical: "0",
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
                    <PanelBody
                      title={__("Front Style")}
                      className="premium-panel-body"
                      initialOpen={false}
                    >
                      <PremiumBoxShadow
                        label="Box Shadow"
                        inner={true}
                        color={frontShadowColor}
                        blur={frontShadowBlur}
                        horizontal={frontShadowHorizontal}
                        vertical={frontShadowVertical}
                        position={frontShadowPosition}
                        onChangeColor={newColor =>
                            setAttributes({
                                frontShadowColor:
                                    newColor === undefined ? "transparent" : newColor.hex
                            })
                        }
                        onChangeBlur={newBlur =>
                            setAttributes({
                                frontShadowBlur: newBlur === undefined ? 0 : newBlur
                            })
                        }
                        onChangehHorizontal={newValue =>
                            setAttributes({
                              frontShadowHorizontal: newValue === undefined ? 0 : newValue
                            })
                        }
                        onChangeVertical={newValue =>
                            setAttributes({
                              frontShadowVertical: newValue === undefined ? 0 : newValue
                            })
                        }
                        onChangePosition={newValue =>
                            setAttributes({
                              frontShadowPosition: newValue === undefined ? 0 : newValue
                            })
                        }
                        onResetClick={onResetClickFront}
                      />
                      <TabPanel
                        className="premium-flip-box-tab-panel"
                        activeClass="active-tab"
                        tabs={TABSTYLE}>
                        {
                          (tabName) => {
                            if ("icon" === tabName.name) {
                              return <Fragment>
                                <p>{__("Color")}</p>
                                <ColorPalette
                                  value={iconfrontColor}
                                  onChange={newValue =>
                                      setAttributes({
                                          iconfrontColor: newValue
                                      })
                                  }
                                  allowReset={true}
                                />
                                <p>{__("Background Color")}</p>
                                <ColorPalette
                                  value={iconfrontBGColor}
                                  onChange={newValue =>
                                      setAttributes({
                                          iconfrontBGColor: newValue
                                      })
                                  }
                                  allowReset={true}
                                />
                                <PremiumBorder
                                  borderType={iconfrontborderType}
                                  borderWidth={iconfrontborderWidth}
                                  borderColor={iconfrontborderColor}
                                  borderRadius={iconfrontborderRadius}
                                  onChangeType={newType => setAttributes({ iconfrontborderType: newType })}
                                  onChangeWidth={newWidth => setAttributes({ iconfrontborderWidth: newWidth })}
                                  onChangeColor={colorValue =>
                                      setAttributes({ iconfrontborderColor: colorValue.hex })
                                  }
                                  onChangeRadius={newrRadius =>
                                      setAttributes({ iconfrontborderRadius: newrRadius })
                                  }
                                  onResetClick={onResetClickiconfrontBorder}
                                />
                                <PremiumTextShadow
                                  color={iconfrontShadowColor}
                                  blur={iconfrontShadowBlur}
                                  horizontal={iconfrontShadowHorizontal}
                                  vertical={iconfrontShadowVertical}
                                  onChangeColor={newColor =>
                                  setAttributes({ iconfrontShadowColor: newColor.hex })
                                  }
                                  onChangeBlur={newBlur => setAttributes({ iconfrontShadowBlur: newBlur })}
                                  onChangehHorizontal={newValue =>
                                  setAttributes({ iconfrontShadowHorizontal: newValue })
                                  }
                                  onChangeVertical={newValue =>
                                  setAttributes({ iconfrontShadowVertical: newValue })
                                  }
                                  onResetClick={onResetClickiconfrontTextShadow}
                                />
                              </Fragment>
                            } else if ("title" === tabName.name) {
                              return <Fragment>
                                <p>{__("Text Color")}</p>
                                <ColorPalette
                                  value={titlefrontColor}
                                  onChange={newValue =>
                                      setAttributes({
                                          titlefrontColor: newValue
                                      })
                                  }
                                  allowReset={true}
                                />
                                <PremiumTypo
                                  components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                                  setAttributes={setAttributes}
                                  fontSizeType={{ value: titlefrontfontSizeType, label: __("titlefrontfontSizeType") }}
                                  fontSize={{ value: titlefrontfontSize, label: __("titlefrontfontSize") }}
                                  fontSizeMobile={{ value: titlefrontfontSizeMobile, label: __("titlefrontfontSizeMobile") }}
                                  fontSizeTablet={{ value: titlefrontfontSizeTablet, label: __("titlefrontfontSizeTablet") }}
                                  weight={titlefrontWeight}
                                  style={titlefrontStyle}
                                  spacing={titlefrontLetter}
                                  upper={titlefrontUpper}
                                  onChangeWeight={newWeight =>
                                      setAttributes({ titlefrontWeight: newWeight || 600 })
                                  }
                                  onChangeStyle={newStyle =>
                                      setAttributes({ titlefrontStyle: newStyle })
                                  }
                                  onChangeSpacing={newValue =>
                                      setAttributes({ titlefrontLetter: newValue })
                                  }
                                  onChangeUpper={check => setAttributes({ titlefrontUpper: check })}
                                  onResetClick={onResetClickTitlefront}
                                />
                                <PremiumTextShadow
                                  color={titlefrontshadowColor}
                                  blur={titlefrontshadowBlur}
                                  horizontal={titlefrontshadowHorizontal}
                                  vertical={titlefrontshadowVertical}
                                  onChangeColor={newColor =>
                                  setAttributes({ titlefrontshadowColor: newColor.hex })
                                  }
                                  onChangeBlur={newBlur => setAttributes({ titlefrontshadowBlur: newBlur })}
                                  onChangehHorizontal={newValue =>
                                  setAttributes({ titlefrontshadowHorizontal: newValue })
                                  }
                                  onChangeVertical={newValue =>
                                  setAttributes({ titlefrontshadowVertical: newValue })
                                  }
                                  onResetClick={onResetClickTitlefrontTextShadow}
                                />
                                <p>{__("Background Color")}</p>
                                <ColorPalette
                                    value={titlefrontBGColor}
                                    onChange={newValue =>
                                        setAttributes({
                                            titlefrontBGColor: newValue
                                        })
                                    }
                                    allowReset={true}
                                />
                              </Fragment>
                            }else {
                              return <Fragment>
                                <p>{__("Text Color")}</p>
                                <ColorPalette
                                  value={descfrontColor}
                                  onChange={newValue =>
                                      setAttributes({
                                          descfrontColor: newValue
                                      })
                                  }
                                  allowReset={true}
                                />
                                <PremiumTypo
                                  components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                                  setAttributes={setAttributes}
                                  fontSizeType={{ value: descfrontfontSizeType, label: __("descfrontfontSizeType") }}
                                  fontSize={{ value: descfrontfontSize, label: __("descfrontfontSize") }}
                                  fontSizeMobile={{ value: descfrontfontSizeMobile, label: __("descfrontfontSizeMobile") }}
                                  fontSizeTablet={{ value: descfrontfontSizeTablet, label: __("descfrontfontSizeTablet") }}
                                  weight={descfrontWeight}
                                  style={descfrontStyle}
                                  spacing={descfrontLetter}
                                  upper={descfrontUpper}
                                  onChangeWeight={newWeight =>
                                      setAttributes({ descfrontWeight: newWeight || 600 })
                                  }
                                  onChangeStyle={newStyle =>
                                      setAttributes({ descfrontStyle: newStyle })
                                  }
                                  onChangeSpacing={newValue =>
                                      setAttributes({ descfrontLetter: newValue })
                                  }
                                  onChangeUpper={check => setAttributes({ descfrontUpper: check })}
                                  onResetClick={onResetClickDescfront}
                                />
                                <PremiumTextShadow
                                  color={descfrontshadowColor}
                                  blur={descfrontshadowBlur}
                                  horizontal={descfrontshadowHorizontal}
                                  vertical={descfrontshadowVertical}
                                  onChangeColor={newColor =>
                                  setAttributes({ descfrontshadowColor: newColor.hex })
                                  }
                                  onChangeBlur={newBlur => setAttributes({ descfrontshadowBlur: newBlur })}
                                  onChangehHorizontal={newValue =>
                                  setAttributes({ descfrontshadowHorizontal: newValue })
                                  }
                                  onChangeVertical={newValue =>
                                  setAttributes({ descfrontshadowVertical: newValue })
                                  }
                                  onResetClick={onResetClickDescfrontTextShadow}
                                />
                                <p>{__("Background Color")}</p>
                                <ColorPalette
                                    value={descfrontBGColor}
                                    onChange={newValue =>
                                        setAttributes({
                                            descfrontBGColor: newValue
                                        })
                                    }
                                    allowReset={true}
                                />
                              </Fragment>
                            }
                          }
                        }
                    </TabPanel>
                    </PanelBody>
                    <PanelBody
                      title={__("Back Style")}
                      className="premium-panel-body"
                      initialOpen={false}
                    >
                      <PremiumBoxShadow
                        label="Box Shadow"
                        inner={true}
                        color={backShadowColor}
                        blur={backShadowBlur}
                        horizontal={backShadowHorizontal}
                        vertical={backShadowVertical}
                        position={backShadowPosition}
                        onChangeColor={newColor =>
                            setAttributes({
                                backShadowColor:
                                    newColor === undefined ? "transparent" : newColor.hex
                            })
                        }
                        onChangeBlur={newBlur =>
                            setAttributes({
                                backShadowBlur: newBlur === undefined ? 0 : newBlur
                            })
                        }
                        onChangehHorizontal={newValue =>
                            setAttributes({
                              backShadowHorizontal: newValue === undefined ? 0 : newValue
                            })
                        }
                        onChangeVertical={newValue =>
                            setAttributes({
                              backShadowVertical: newValue === undefined ? 0 : newValue
                            })
                        }
                        onChangePosition={newValue =>
                            setAttributes({
                              backShadowPosition: newValue === undefined ? 0 : newValue
                            })
                        }
                        onResetClick={onResetClickBack}
                      />
                      <TabPanel
                        className="premium-flip-box-tab-panel"
                        activeClass="active-tab"
                        tabs={TABSTYLE}>
                        {
                          (tabName) => {
                            if ("icon" === tabName.name) {
                              return <Fragment>
                                <p>{__("Color")}</p>
                                <ColorPalette
                                  value={iconbackColor}
                                  onChange={newValue =>
                                      setAttributes({
                                          iconbackColor: newValue
                                      })
                                  }
                                  allowReset={true}
                                />
                                <p>{__("Background Color")}</p>
                                <ColorPalette
                                  value={iconbackBGColor}
                                  onChange={newValue =>
                                      setAttributes({
                                          iconbackBGColor: newValue
                                      })
                                  }
                                  allowReset={true}
                                />
                                <PremiumBorder
                                  borderType={iconbackborderType}
                                  borderWidth={iconbackborderWidth}
                                  borderColor={iconbackborderColor}
                                  borderRadius={iconbackborderRadius}
                                  onChangeType={newType => setAttributes({ iconbackborderType: newType })}
                                  onChangeWidth={newWidth => setAttributes({ iconbackborderWidth: newWidth })}
                                  onChangeColor={colorValue =>
                                      setAttributes({ iconbackborderColor: colorValue.hex })
                                  }
                                  onChangeRadius={newrRadius =>
                                      setAttributes({ iconbackborderRadius: newrRadius })
                                  }
                                  onResetClick={onResetClickiconbackBorder}
                                />
                                <PremiumTextShadow
                                  color={iconbackShadowColor}
                                  blur={iconbackShadowBlur}
                                  horizontal={iconbackShadowHorizontal}
                                  vertical={iconbackShadowVertical}
                                  onChangeColor={newColor =>
                                  setAttributes({ iconbackShadowColor: newColor.hex })
                                  }
                                  onChangeBlur={newBlur => setAttributes({ iconbackShadowBlur: newBlur })}
                                  onChangehHorizontal={newValue =>
                                  setAttributes({ iconbackShadowHorizontal: newValue })
                                  }
                                  onChangeVertical={newValue =>
                                  setAttributes({ iconbackShadowVertical: newValue })
                                  }
                                  onResetClick={onResetClickiconbackTextShadow}
                                />
                              </Fragment>
                            } else if ("title" === tabName.name) {
                              return <Fragment>
                                <p>{__("Text Color")}</p>
                                <ColorPalette
                                  value={titlebackColor}
                                  onChange={newValue =>
                                      setAttributes({
                                          titlebackColor: newValue
                                      })
                                  }
                                  allowReset={true}
                                />
                                <PremiumTypo
                                  components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                                  setAttributes={setAttributes}
                                  fontSizeType={{ value: titlebackfontSizeType, label: __("titlebackfontSizeType") }}
                                  fontSize={{ value: titlebackfontSize, label: __("titlebackfontSize") }}
                                  fontSizeMobile={{ value: titlebackfontSizeMobile, label: __("titlebackfontSizeMobile") }}
                                  fontSizeTablet={{ value: titlebackfontSizeTablet, label: __("titlebackfontSizeTablet") }}
                                  weight={titlebackWeight}
                                  style={titlebackStyle}
                                  spacing={titlebackLetter}
                                  upper={titlebackUpper}
                                  onChangeWeight={newWeight =>
                                      setAttributes({ titlebackWeight: newWeight || 600 })
                                  }
                                  onChangeStyle={newStyle =>
                                      setAttributes({ titlebackStyle: newStyle })
                                  }
                                  onChangeSpacing={newValue =>
                                      setAttributes({ titlebackLetter: newValue })
                                  }
                                  onChangeUpper={check => setAttributes({ titlebackUpper: check })}
                                  onResetClick={onResetClickTitleback}
                                />
                                <PremiumTextShadow
                                  color={titlebackshadowColor}
                                  blur={titlebackshadowBlur}
                                  horizontal={titlebackshadowHorizontal}
                                  vertical={titlebackshadowVertical}
                                  onChangeColor={newColor =>
                                  setAttributes({ titlebackshadowColor: newColor.hex })
                                  }
                                  onChangeBlur={newBlur => setAttributes({ titlebackshadowBlur: newBlur })}
                                  onChangehHorizontal={newValue =>
                                  setAttributes({ titlebackshadowHorizontal: newValue })
                                  }
                                  onChangeVertical={newValue =>
                                  setAttributes({ titlebackshadowVertical: newValue })
                                  }
                                  onResetClick={onResetClickTitlebackTextShadow}
                                />
                                <p>{__("Background Color")}</p>
                                <ColorPalette
                                    value={titlebackBGColor}
                                    onChange={newValue =>
                                        setAttributes({
                                            titlebackBGColor: newValue
                                        })
                                    }
                                    allowReset={true}
                                />
                              </Fragment>
                            }else {
                              return <Fragment>
                                <p>{__("Text Color")}</p>
                                <ColorPalette
                                  value={descbackColor}
                                  onChange={newValue =>
                                      setAttributes({
                                          descbackColor: newValue
                                      })
                                  }
                                  allowReset={true}
                                />
                                <PremiumTypo
                                  components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                                  setAttributes={setAttributes}
                                  fontSizeType={{ value: descbackfontSizeType, label: __("descbackfontSizeType") }}
                                  fontSize={{ value: descbackfontSize, label: __("descbackfontSize") }}
                                  fontSizeMobile={{ value: descbackfontSizeMobile, label: __("descbackfontSizeMobile") }}
                                  fontSizeTablet={{ value: descbackfontSizeTablet, label: __("descbackfontSizeTablet") }}
                                  weight={descbackWeight}
                                  style={descbackStyle}
                                  spacing={descbackLetter}
                                  upper={descbackUpper}
                                  onChangeWeight={newWeight =>
                                      setAttributes({ descbackWeight: newWeight || 600 })
                                  }
                                  onChangeStyle={newStyle =>
                                      setAttributes({ descbackStyle: newStyle })
                                  }
                                  onChangeSpacing={newValue =>
                                      setAttributes({ descbackLetter: newValue })
                                  }
                                  onChangeUpper={check => setAttributes({ descbackUpper: check })}
                                  onResetClick={onResetClickDescback}
                                />
                                <PremiumTextShadow
                                  color={descbackshadowColor}
                                  blur={descbackshadowBlur}
                                  horizontal={descbackshadowHorizontal}
                                  vertical={descbackshadowVertical}
                                  onChangeColor={newColor =>
                                  setAttributes({ descbackshadowColor: newColor.hex })
                                  }
                                  onChangeBlur={newBlur => setAttributes({ descbackshadowBlur: newBlur })}
                                  onChangehHorizontal={newValue =>
                                  setAttributes({ descbackshadowHorizontal: newValue })
                                  }
                                  onChangeVertical={newValue =>
                                  setAttributes({ descbackshadowVertical: newValue })
                                  }
                                  onResetClick={onResetClickDescbackTextShadow}
                                />
                                <p>{__("Background Color")}</p>
                                <ColorPalette
                                    value={descbackBGColor}
                                    onChange={newValue =>
                                        setAttributes({
                                            descbackBGColor: newValue
                                        })
                                    }
                                    allowReset={true}
                                />
                              </Fragment>
                            }
                          }
                        }
                    </TabPanel>
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
                <div className={`premium-flip-front premium-flip-front${flipDir}`} style={{textAlign: align}}>
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
                              {descFront}
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`premium-flip-back premium-flip-back${flipDir}`} style={{textAlign: align}}>
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
                              {descBack}
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