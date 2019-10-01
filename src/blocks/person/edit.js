import DefaultImage from "../../components/default-image";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
import PremiumSizeUnits from "../../components/premium-size-units"
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from "../../components/premium-padding";

const { __ } = wp.i18n;

const { IconButton, PanelBody, Toolbar, SelectControl, RangeControl, TextControl } = wp.components

const { InspectorControls, AlignmentToolbar, ColorPalette, RichText, MediaUpload } = wp.editor;

const EFFECTS = [
  {
    value: "ZoomIN",
    label: __("Zoom In")
  },
  {
    value: "ZoomOut",
    label: __("Zoom Out")
  },
  {
    value: "GrayScale",
    label: __("Gray Scale")
  },
  {
    value: "none",
    label: __("None")
  },
  {
    value: "Blur",
    label: __("Blur")
  },
  {
    value: "Bright",
    label: __("Bright")
  },
  {
    value: "sepia",
    label: __("Sepia")
  },
  {
    value: "Translate",
    label: __("Translate")
  },
  {
    value: "Scale",
    label: __("Scale")
  }
]
const icons = [
  {
    label: __("facebook"),
    value: "fa fa-facebook"
  }
]

const edit = props => {
  const { isSelected, setAttributes, className } = props;
  const {
    imageURL,
    imageID,
    imageWidth,
    imageWidthU,
    effect,
    NameTag,
    TitleTag,
    Person,
    PersonTitle,
    PersonDesc,
    align,
    iconSize,
    iconColor,
    iconBackColor,
    facebookURL,
    twitterURL,
    instaURL,
    youtubeURL,
    googleURL,
    behanceURL,
    pinterestURL,
    dribbbleURL,
    emailAddress,
    nameColor,
    titleColor,
    nameSpacing,
    nameStyle,
    nameWeight,
    nameLine,
    titleSpacing,
    titleStyle,
    titleWeight,
    titleLine,
    nameShadowColor,
    nameShadowBlur,
    nameShadowHorizontal,
    nameShadowVertical,
    titleShadowColor,
    titleShadowBlur,
    titleShadowHorizontal,
    titleShadowVertical,
    descLine,
    descSpacing,
    descStyle,
    descWeight,
    descColor,
    iconBorderRadius,
    iconBorderColor,
    iconBorderType,
    iconBorderWidth,
    iconPaddingT,
    iconPaddingR,
    iconPaddingL,
    iconPaddingB,
    iconHoverColor,
    iconBackHover
  } = props.attributes;
  return [

    isSelected && (
      <InspectorControls key={"inspector"}>

        {/* Person Image */}
        <PanelBody
          title={__("Person Image")}
          className="preminm-panel-body"
          initialOpen={false}
        >
            <p className="premium-editor-paragraph">{__("Change image")}</p>
            <div>
              {!imageURL && <DefaultImage />}
              {imageURL && <img src={imageURL} width="100%" height="100%" />}
            </div>
            <MediaUpload
              allowedTypes={["image"]}
              onSelect={media => {
                setAttributes({ imageURL: media.url, imageID: media.id });
              }}
              type="image"
              value={imageID}
              render={({ open }) => (

                <IconButton label={__("Change Image")} icon="edit" onClick={open}>
                  {__("Change Image")}
                </IconButton>
              )}
            />
            <p className="premium-editor-paragraph">{__("Image Width")}</p>
            <PremiumSizeUnits
              onChangeSizeUnit={newValue =>
                setAttributes({ imageWidthU: newValue })

              } />
            <RangeControl
              label={__("image width")}
              value={imageWidth}
              max="600"
              onChange={newValue => setAttributes({ imageWidth: newValue })}
              initialPosition={50}

            ></RangeControl>

            <p className="premium-editor-paragraph">{__("Hover Effect")}</p>

            <SelectControl
              label={__("Effects")}
              value={effect}
              options={EFFECTS}
              onChange={newEffect => setAttributes({ effect: newEffect })}
            >

            </SelectControl>

        </PanelBody>

        {/* Person Image Style */}
        <PanelBody
          title={__("Person Image Style")}
          className="preminm-panel-body"
          initialOpen={false}
        >

        </PanelBody>

        {/* Person */}
        <PanelBody
          title={__("Person")}
          className="preminm-panel-body"
          initialOpen={false}
        >
          <h3 className="premium-editor-paragraph">{__("Person Name Tag")}</h3>
          <Toolbar
            controls={"123456".split("").map(tag => ({
              icon: "heading",
              isActive: "H" + tag === NameTag,
              onClick: () => setAttributes({ NameTag: "H" + tag }),
              subscript: tag
            }))}
          />
          {(Person) && (
            <PremiumTypo
              components={["spacing", "weight", "line", "style"]}
              spacing={nameSpacing}
              weight={nameWeight}
              line={nameLine}
              style={nameStyle}
              onChangeSpacing={newSpacing => setAttributes({ nameSpacing: newSpacing })}
              onChangeWeight={newWeight =>
                setAttributes({
                  nameWeight: newWeight === undefined ? 500 : newWeight
                })
              }
              onChangeLine={newValue =>
                setAttributes({
                  nameLine: newValue === undefined ? 10 : newValue
                })
              }
              onChangeStyle={newValue =>
                setAttributes({
                  nameStyle: newValue === undefined ? 'normal' : newValue
                })
              }
            />
          )}

          {(Person) && (
            <PremiumTextShadow
              color={nameShadowColor}
              blur={nameShadowBlur}
              horizontal={nameShadowHorizontal}
              vertical={nameShadowVertical}
              onChangeColor={newColor =>
                setAttributes({
                  nameShadowColor:
                    newColor === undefined ? "transparent" : newColor.hex
                })
              }
              onChangeBlur={newBlur =>
                setAttributes({
                  nameShadowBlur: newBlur === undefined ? 0 : newBlur
                })
              }
              onChangehHorizontal={newValue =>
                setAttributes({
                  nameShadowHorizontal: newValue === undefined ? 0 : newValue
                })
              }
              onChangeVertical={newValue =>
                setAttributes({
                  nameShadowVertical: newValue === undefined ? 0 : newValue
                })
              }
            />

          )}

          {(Person) && (
            <div>
              <h3 className="premium-editor-paragraph">{__("Person Name Color")}</h3>

              <ColorPalette
                value={nameColor}
                onChange={newValue =>
                  setAttributes({
                    nameColor: newValue
                  })
                }
                allowReset={true}
              />
            </div>
          )}





          <h3 className="premium-editor-paragraph">{__("Title Tag")}</h3>
          <Toolbar
            controls={"123456".split("").map(tag => ({
              icon: "heading",
              isActive: "H" + tag === TitleTag,
              onClick: () => setAttributes({ TitleTag: "H" + tag }),
              subscript: tag
            }))}
          />
          {(PersonTitle) && (
            <PremiumTypo
              components={["spacing", "weight", "line", "style"]}
              spacing={titleSpacing}
              weight={titleWeight}
              line={titleLine}
              style={titleStyle}
              onChangeSpacing={newSpacing => setAttributes({ titleSpacing: newSpacing })}
              onChangeWeight={newWeight =>
                setAttributes({
                  titleWeight: newWeight === undefined ? 500 : newWeight
                })
              }
              onChangeLine={newValue =>
                setAttributes({
                  titleLine: newValue === undefined ? 10 : newValue
                })
              }
              onChangeStyle={newValue =>
                setAttributes({
                  titleStyle: newValue === undefined ? 'normal' : newValue
                })
              }
            />
          )}

          {(PersonTitle) && (
            <PremiumTextShadow
              color={titleShadowColor}
              blur={titleShadowBlur}
              horizontal={titleShadowHorizontal}
              vertical={titleShadowVertical}
              onChangeColor={newColor =>
                setAttributes({
                  titleShadowColor:
                    newColor === undefined ? "transparent" : newColor.hex
                })
              }
              onChangeBlur={newBlur =>
                setAttributes({
                  titleShadowBlur: newBlur === undefined ? 0 : newBlur
                })
              }
              onChangehHorizontal={newValue =>
                setAttributes({
                  titleShadowHorizontal: newValue === undefined ? 0 : newValue
                })
              }
              onChangeVertical={newValue =>
                setAttributes({
                  titleShadowVertical: newValue === undefined ? 0 : newValue
                })
              }
            />)}

          {(PersonTitle) && (
            <div>
              <h3 className="premium-editor-paragraph">{__("Person Title Color")}</h3>

              <ColorPalette
                value={titleColor}
                onChange={newValue =>
                  setAttributes({
                    titleColor: newValue
                  })
                }
                allowReset={true}
              />
            </div>
          )}

          <AlignmentToolbar
            value={align}
            onChange={newAlign => setAttributes({ align: newAlign })}
          />
          {
            (PersonDesc) && (
              <div>
                <h3 className="premium-editor-paragraph">{__("Person Description")}</h3>

                <PremiumTypo
                  components={["spacing", "weight", "line", "style"]}
                  spacing={descSpacing}
                  weight={descWeight}
                  line={descLine}
                  style={descStyle}
                  onChangeSpacing={newSpacing => setAttributes({ descSpacing: newSpacing })}
                  onChangeWeight={newWeight =>
                    setAttributes({
                      descWeight: newWeight === undefined ? 500 : newWeight
                    })
                  }
                  onChangeLine={newValue =>
                    setAttributes({
                      descLine: newValue === undefined ? 10 : newValue
                    })
                  }
                  onChangeStyle={newValue =>
                    setAttributes({
                      descStyle: newValue === undefined ? 'normal' : newValue
                    })
                  }
                />
                <h3 className="premium-editor-paragraph">{__("Description color")}</h3>
                <ColorPalette
                  value={descColor}
                  onChange={newValue =>
                    setAttributes({
                      descColor: newValue
                    })
                  }
                  allowReset={true}
                />

              </div>
            )
          }

        </PanelBody>

        {/* Person Name Style */}
        <PanelBody
          title={__("Person Name Style")}
          className="preminm-panel-body"
          initialOpen={false}
        >

        </PanelBody>

        {/* Person Title Style */}
        <PanelBody
          title={__("Person Title Style")}
          className="preminm-panel-body"
          initialOpen={false}
        >

        </PanelBody>

        {/* Person Description Style */}
        <PanelBody
          title={__("Person Description Style")}
          className="preminm-panel-body"
          initialOpen={false}
        >

        </PanelBody>

        {/* Social Icons */}
        <PanelBody
          title={__("Social Icons URL")}
          className="preminm-panel-body"
          initialOpen={false}>
            <TextControl
                className="premium-text-control"
                label={__("Facebook URL")}
                value={facebookURL}
                onChange={newURL => setAttributes({ facebookURL: newURL })}
                
              />
            <TextControl
                className="premium-text-control"
                label={__("Twitter URL")}
                value={twitterURL}
                onChange={newURL => setAttributes({ twitterURL: newURL })}
              
              />
              <TextControl
                className="premium-text-control"
                label={__("Instagram URL")}
                value={instaURL}
                onChange={newURL => setAttributes({ instaURL: newURL })}
              
              />
              <TextControl
                className="premium-text-control"
                label={__(" Youtube URL")}
                value={youtubeURL}
                onChange={newURL => setAttributes({ youtubeURL: newURL })}
              
              />
              <TextControl
                className="premium-text-control"
                label={__(" Google+ URL")}
                value={googleURL}
                onChange={newURL => setAttributes({ googleURL: newURL })}
              
              />
              <TextControl
                className="premium-text-control"
                label={__(" Behance URL")}
                value={behanceURL}
                onChange={newURL => setAttributes({ behanceURL: newURL })}
              
              />
              <TextControl
                className="premium-text-control"
                label={__(" Pinterest URL")}
                value={pinterestURL}
                onChange={newURL => setAttributes({ pinterestURL: newURL })}
              
              />
              <TextControl
                className="premium-text-control"
                label={__(" Dribbble URL")}
                value={dribbbleURL}
                onChange={newURL => setAttributes({ dribbbleURL: newURL })}
              
              />
              <TextControl
                className="premium-text-control"
                label={__("  Email Address")}
                value={emailAddress}
                onChange={newURL => setAttributes({ emailAddress: newURL })}
              
              />
        </PanelBody>

        {/* Social Icons Style */}
        <PanelBody
          title={__("Social Icons Style")}
          className="preminm-panel-body"
          initialOpen={false}
        >
          <h3 className="premium-editor-paragraph">{__("Icons color")}</h3>

          <ColorPalette
            value={iconColor}
            onChange={newValue =>
              setAttributes({
                iconColor: newValue
              })
            }
            allowReset={true}
          />

          <h3 className="premium-editor-paragraph">{__("Icons Hover Color")}</h3>

          <ColorPalette
            value={iconHoverColor}
            onChange={newValue =>
              setAttributes({
                iconHoverColor: newValue
              })
            }

            allowReset={true}
          />

          <h3 className="premium-editor-paragraph">{__("Icons Background color")}</h3>
          <ColorPalette
            value={iconBackColor}
            onChange={newValue =>
              setAttributes({
                iconBackColor: newValue
              })
            }
            allowReset={true}
          />

          <h3 className="premium-editor-paragraph">{__("Icons Hover Background color")}</h3>

          <ColorPalette
            value={iconBackHover}
            onChange={newValue =>
              setAttributes({
                iconBackHover: newValue
              })
            }

            allowReset={true}
          />

          <PremiumBorder
            borderType={iconBorderType}
            borderWidth={iconBorderWidth}
            borderColor={iconBorderColor}
            borderRadius={iconBorderRadius}
            onChangeType={newType => setAttributes({ iconBorderType: newType })}
            onChangeWidth={newWidth => setAttributes({ iconBorderWidth: newWidth })}
            onChangeColor={colorValue => setAttributes({ iconBorderColor: colorValue.hex })}
            onChangeRadius={newRadius => setAttributes({ iconBorderRadius: newRadius })}
          />

          <PremiumPadding
            paddingTop={iconPaddingT}
            paddingRight={iconPaddingR}
            paddingBottom={iconPaddingB}
            paddingLeft={iconPaddingL}
            onChangePadTop={value => setAttributes({ iconPaddingT: value })}
            onChangePadRight={value => setAttributes({ iconPaddingR: value })}
            onChangePadBottom={value => setAttributes({ iconPaddingB: value })}
            onChangePadLeft={value => setAttributes({ iconPaddingL: value })}
          />

        </PanelBody>
      
      </InspectorControls>
    ),
    <div>
      {!imageURL && <DefaultImage />}
      {imageURL && (
        <div className={`premium-person__imgFrame`}>
          <img
            className={`premium-person__img premium-person__img-${effect}`}
            src={imageURL}
            width={imageWidth + imageWidthU} />
          <div className="premium-person__imgOverlay">
            <RichText
              tagName={NameTag}
              value={Person}
              isSelected={false}
              onChange={newText => setAttributes({ Person: newText })}
              style={{
                textAlign: align,
                margin: "0px",
                padding: "0px",
                color: nameColor,
                fontWeight: nameWeight,
                lineHeight: nameLine + "px",
                fontStyle: nameStyle,
                letterSpacing: nameSpacing + "px",
                textShadow: `${nameShadowHorizontal}px ${nameShadowVertical}px ${nameShadowBlur}px ${nameShadowColor}`
              }}
            >

            </RichText>

            <RichText
              tagName={TitleTag}
              value={PersonTitle}
              isSelected={false}
              onChange={newText => setAttributes({ PersonTitle: newText })}
              style={{
                textAlign: align,
                margin: "0px",
                padding: "0px",
                whiteSpace: "nowrap",
                color: titleColor,
                fontWeight: titleWeight,
                lineHeight: titleLine + "px",
                fontStyle: titleStyle,
                letterSpacing: titleSpacing + "px",
                textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`
              }}
            >

            </RichText>

            <RichText
              tagName={"p"}
              value={PersonDesc}
              isSelected={false}
              onChange={newText => setAttributes({ PersonDesc: newText })}
              style={{
                textAlign: align,
                whiteSpace: "nowrap",
                fontWeight: descWeight,
                lineHeight: descLine + "px",
                fontStyle: descStyle,
                letterSpacing: descSpacing + "px",
                color: descColor
              }}
            >

            </RichText>
            <style
              dangerouslySetInnerHTML={{
                __html: [
                  `.premium-person__icon:hover{`,
                  `color:${iconHoverColor}!important;`,
                  `background-color:${iconBackHover}!important;`,
                  "}"
                ].join("\n")
              }}
            />

            <div style={{ textAlign: align }}>
              {(1 == FontAwesomeEnabled) && (facebookURL !== '') && (
                <a href={facebookURL}><i
                  className={`fa fa-facebook premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (twitterURL !== '') && (
                <a href={twitterURL}> <i
                  className={`fa fa-twitter premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (instaURL !== '') && (
                <a href={instaURL}><i
                  className={`fa fa-instagram premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (youtubeURL !== '') && (
                <a href={youtubeURL}><i
                  className={`fa fa-youtube premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (googleURL !== '') && (
                <a href={googleURL}><i
                  className={`fa fa-google-plus premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (behanceURL !== '') && (
                <a href={behanceURL}> <i
                  className={`fa fa-behance premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (pinterestURL !== '') && (
                <a href={pinterestURL}><i
                  className={`fa fa-pinterest premium-person__icon`}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (dribbbleURL !== '') && (
                <a href={dribbbleURL}><i
                  className={`fa fa-dribbble premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (emailAddress !== '') && (
                <a href={emailAddress}><i
                  className={`premium-person__icon fa fa-envelope`}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`

                  }}
                />
                </a>
              )}
            </div>
          </div>
        </div>)
      }

    </div>
  ]

};
export default edit