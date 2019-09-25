import DefaultImage from "../../components/default-image";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
import PremiumSizeUnits from "../../components/premium-size-units"
import PremiumIcon from "../../components/premium-icon"

const { __ } = wp.i18n;

const {
  IconButton,
  PanelBody,
  Toolbar,
  SelectControl,
  RangeControl,
  ToggleControl,
  Dropdown,
  Button
} = wp.components

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
    label:__("facebook"),
    value:"fa fa-facebook"
  },

]
const {
  BlockControls,
  InspectorControls,
  AlignmentToolbar,
  ColorPalette,
  RichText,
  MediaUpload
} = wp.editor;

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
    imageHeight
  } = props.attributes;
  return [
    
    isSelected && (
      <InspectorControls key={"inspector"}>
        <PanelBody
          title={__("Person Image")}
          className="preminm-panel-body"
          initialOpen={false}
        >
          <p className="premium-editor-paragraph">{__("Change image")}</p>
          <div>
            {!imageURL && <DefaultImage/>}
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
        <PanelBody
          title={__("Person")}
          className="preminm-panel-body"
          initialOpen={false}
        >
          <p className="premium-editor-paragraph">{__("Person Name Tag")}</p>
          <Toolbar
            controls={"123456".split("").map(tag => ({
              icon: "heading",
              isActive: "H" + tag === NameTag,
              onClick: () => setAttributes({ NameTag: "H" + tag }),
              subscript: tag
            }))}
          />
          <p className="premium-editor-paragraph">{__("Title Tag")}</p>
          <Toolbar
            controls={"123456".split("").map(tag => ({
              icon: "heading",
              isActive: "H" + tag === TitleTag,
              onClick: () => setAttributes({ TitleTag: "H" + tag }),
              subscript: tag
            }))}
          />
          <AlignmentToolbar
          value={align}
          onChange={newAlign => setAttributes({ align: newAlign })}
        />

        </PanelBody>
      </InspectorControls>
    ),
    <div>
      hello
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
                margin:"0px",
                padding:"0px"
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
                margin:"0px",
                padding:"0px",
                whiteSpace:"nowrap"
              }}
              >

              </RichText>

              <RichText
              tagName={"p"}
              value={PersonDesc}
              isSelected={false}
              onChange={newText => setAttributes({ PersonDesc: newText })}
              style={{
                textAlign:align,
                whiteSpace:"nowrap"
              }}
              >

              </RichText>
              <div style={{textAlign:align}}>
              {(1 == FontAwesomeEnabled) && (facebookURL!=='') && (
               <i
                  className={`fa fa-facebook premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    fontSize: iconSize
                  }}
                />
              )}
              {(1 == FontAwesomeEnabled) && (twitterURL!=='') && (
               <i
                  className={`fa fa-twitter premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    fontSize: iconSize
                  }}
                />
              )}
               {(1 == FontAwesomeEnabled) && (instaURL!=='') && (
               <i
                  className={`fa fa-instagram premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    fontSize: iconSize
                  }}
                />
              )}
              {( 1 == FontAwesomeEnabled) && (youtubeURL!=='') && (
               <i
                  className={`fa fa-youtube premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    fontSize: iconSize
                  }}
                />
              )}
              {( 1 == FontAwesomeEnabled) && (googleURL!=='') && (
               <i
                  className={`fa fa-google-plus premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    fontSize: iconSize
                  }}
                />
              )}
              {( 1 == FontAwesomeEnabled) && (behanceURL!=='') && (
               <i
                  className={`fa fa-behance premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    fontSize: iconSize
                  }}
                />
              )}
              {(1 == FontAwesomeEnabled) && (pinterestURL!=='') && (
               <i
                  className={`fa fa-pinterest`}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    fontSize: iconSize
                  }}
                />
              )}
              {( 1 == FontAwesomeEnabled) && (dribbbleURL!=='') && (
               <i
                  className={`fa fa-dribbble premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    fontSize: iconSize
                  }}
                />
              )}
              {( 1 == FontAwesomeEnabled) && (emailAddress!=='') && (
               <i
                  className={`premium-person__icon fa fa-envelope`}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    fontSize: iconSize,
                    
                  }}
                />
              )}
              </div>
            </div>
        </div>)
      }

    </div>
  ]

};
export default edit