import classnames from "classnames"
import styling from "./styling"
import iconsList from "../../components/premium-icons-list";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import PremiumRangeResponsive from "../../components/premium-range-responsive";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumFilters from "../../components/premium-filters";

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
    TextControl,
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
        $style.setAttribute("id", "premium-style-image-separator-" + this.props.clientId)
        document.head.appendChild($style)
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            align,
            className,
            iconType,
            icon,
            imageURL,
            imageID,
            link,
            url,
            iconSize,
            iconSizeType,
            iconSizeMobile,
            iconSizeTablet,
            gutter,
            blur,
            bright,
            contrast,
            saturation,
            hue,
            blurHover,
            brightHover,
            contrastHover,
            saturationHover,
            hueHover,
            iconBorderRadius,
            iconBorderRadiusMobile,
            iconBorderRadiusTablet,
            iconBorderRadiusType,
            iconColor,
            iconBGColor,
            iconColorHover,
            iconBGColorHover,
            iconShadowBlur,
            iconShadowColor,
            iconShadowHorizontal,
            iconShadowVertical,
            iconPadding,
            iconPaddingMobile,
            iconPaddingTablet,
            iconPaddingType,
            linkTarget
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

        var element = document.getElementById("premium-style-image-separator-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props)
        }

        const onResetClickImageFilter= () => {
          setAttributes({ 
              blur: "0", 
              bright:"100", 
              contrast:"100", 
              saturation:"100",
              hue:"0"
          });
        }
        const onResetClickImageFilterHover= () => {
          setAttributes({ 
              blurHover: "0", 
              brightHover:"100", 
              contrastHover:"100", 
              saturationHover:"100",
              hueHover:"0"
          });
        }
        const onResetClickiconTextShadow = () => {
          setAttributes({
            iconShadowColor: "",
            iconShadowBlur: "0",
            iconShadowHorizontal: "0",
            iconShadowVertical: "0"
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
                        title={__("Image Settings")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                      <SelectControl
                        label={__("Separator Type")}
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
                      <PremiumRangeResponsive
                        setAttributes={setAttributes}
                        rangeType={{ value: iconSizeType, label: __("iconSizeType") }}
                        range={{ value: iconSize, label: __("iconSize") }}
                        rangeMobile={{ value: iconSizeMobile, label: __("iconSizeMobile") }}
                        rangeTablet={{ value: iconSizeTablet, label: __("iconSizeTablet") }}
                        rangeLabel={__("Size")}
                        min={1}
                        max={1000}
                      />
                      <TextControl
                        label={__("Gutter (%)")}
                        type="Number"
                        value={gutter}
                        onChange={newValue => setAttributes({ gutter: parseInt(newValue) })}
                        help="-50% is default. Increase to push the image outside or decrease to pull the image inside."
                      />
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
                            <ToggleControl
                              label={__("Open links in new tab")}
                              checked={linkTarget}
                              onChange={newValue => setAttributes({ linkTarget: newValue })}
                            />
                        </Fragment>
                      }
                    </PanelBody>
                    <PanelBody
                        title={__("Separator")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                      {iconType == 'image'? <Fragment>
                        <PremiumFilters
                          blur={blur}
                          bright={bright}
                          contrast={contrast}
                          saturation={saturation}
                          hue={hue}
                          onChangeBlur={newSize => setAttributes({ blur: newSize, change: true })}
                          onChangeBright={newSize => setAttributes({ bright: newSize, change: true })}
                          onChangeContrast={newSize => setAttributes({ contrast: newSize, change: true })}
                          onChangeSat={newSize => setAttributes({ saturation: newSize, change: true })}
                          onChangeHue={newSize => setAttributes({ hue: newSize, change: true })}
                          onResetClick={onResetClickImageFilter}
                        />
                        <PremiumFilters
                          label={__("Hover CSS Filters")}
                          blur={blurHover}
                          bright={brightHover}
                          contrast={contrastHover}
                          saturation={saturationHover}
                          hue={hueHover}
                          onChangeBlur={newSize => setAttributes({ blurHover: newSize, change: true })}
                          onChangeBright={newSize => setAttributes({ brightHover: newSize, change: true })}
                          onChangeContrast={newSize => setAttributes({ contrastHover: newSize, change: true })}
                          onChangeSat={newSize => setAttributes({ saturationHover: newSize, change: true })}
                          onChangeHue={newSize => setAttributes({ hueHover: newSize, change: true })}
                          onResetClick={onResetClickImageFilterHover}
                        />
                      </Fragment>
                      :<Fragment>
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
                        <p>{__("Hover Color")}</p>
                        <ColorPalette
                          value={iconColorHover}
                          onChange={newValue =>
                              setAttributes({
                                  iconColorHover: newValue
                              })
                          }
                          allowReset={true}
                        />
                        <p>{__("Hover Background Color")}</p>
                        <ColorPalette
                          value={iconBGColorHover}
                          onChange={newValue =>
                              setAttributes({
                                  iconBGColorHover: newValue
                              })
                          }
                          allowReset={true}
                        />
                        <PremiumTextShadow
                          color={iconShadowColor}
                          blur={iconShadowBlur}
                          horizontal={iconShadowHorizontal}
                          vertical={iconShadowVertical}
                          onChangeColor={newColor =>
                          setAttributes({ iconShadowColor: newColor.hex })
                          }
                          onChangeBlur={newBlur => setAttributes({ iconShadowBlur: newBlur })}
                          onChangehHorizontal={newValue =>
                          setAttributes({ iconShadowHorizontal: newValue })
                          }
                          onChangeVertical={newValue =>
                          setAttributes({ iconShadowVertical: newValue })
                          }
                          onResetClick={onResetClickiconTextShadow}
                        />
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
                      </Fragment>
                      }
                      <PremiumRangeResponsive
                        setAttributes={setAttributes}
                        rangeType={{ value: iconBorderRadiusType, label: __("iconBorderRadiusType") }}
                        range={{ value: iconBorderRadius, label: __("iconBorderRadius") }}
                        rangeMobile={{ value: iconBorderRadiusMobile, label: __("iconBorderRadiusMobile") }}
                        rangeTablet={{ value: iconBorderRadiusTablet, label: __("iconBorderRadiusTablet") }}
                        rangeLabel={__("Border Radius")}
                        min={1}
                        max={100}
                      />
                    </PanelBody>
                </InspectorControls>
            ),
            <div className={classnames(
                className,
                `premium-block-${this.props.clientId}`
            )} style={{textAlign: align}}
            >
              <div className={`premium-image-separator-container`} style={{
              textAlign: align}}
              >
                {
                  iconType == 'icon' && <i className={`${icon}`}/>
                }
                {
                  iconType == 'image' && < img src = {imageURL}/>
                }
                {link && <a className="premium-image-separator-link" href={`${url}`}></a>}
              </div>
            </div>
        ]
    }
}

export default edit