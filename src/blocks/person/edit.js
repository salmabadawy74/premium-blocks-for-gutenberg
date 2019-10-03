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
    value: "zoomIN",
    label: __("Zoom In")
  },
  {
    value: "zoomOut",
    label: __("Zoom Out")
  },
  {
    value: "grayScale",
    label: __("Gray Scale")
  },
  {
    value: "none",
    label: __("None")
  },
  {
    value: "blur",
    label: __("Blur")
  },
  {
    value: "bright",
    label: __("Bright")
  },
  {
    value: "sepia",
    label: __("Sepia")
  },
  {
    value: "translate",
    label: __("Translate")
  },
  {
    value: "scale",
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
    hoverEffect,
    nameTag,
    personName,
    titleTag,
    personTitle,
    personDesc,
    align,
    iconColor,
    iconBackColor,
    iconHoverColor,
    iconBackHover,
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
    iconPaddingB

  } = props.attributes;

  return [

    isSelected && (
      <InspectorControls key={"inspector"}>

        {/* Person Image */}
        <PanelBody
          title={__("Person Image")}
          className="preminm-panel-body"
          initialOpen={true}
        >
          <div className="premium-control-toggle">
            <p className="premium-editor-paragraph">{__("Person Image")}</p>
            {!imageURL && <DefaultImage />}
            {imageURL &&
              <img src={imageURL} width="100%" height="100%" />
            }
            <MediaUpload
              allowedTypes={["image"]}
              onSelect={media => { setAttributes({ imageURL: media.url, imageID: media.id }); }}
              type="image"
              value={imageID}
              render={({ open }) => (
                <IconButton
                  label={__("Change Image")}
                  icon="edit"
                  onClick={open}
                >
                  {__("Change Image")}
                </IconButton>
              )}
            />
          </div>
          <div className="premium-control-toggle">
            <PremiumSizeUnits
              onChangeSizeUnit={newValue => setAttributes({ imageWidthU: newValue })}
            />
            <RangeControl
              label={__("Image Width")}
              value={imageWidth}
              max="600"
              onChange={newValue => setAttributes({ imageWidth: newValue })}
              initialPosition={50}
              max={100}
            />
          </div>
          <div className="premium-control-toggle">
            <SelectControl
              label={__("Hover Effects")}
              value={hoverEffect}
              options={EFFECTS}
              onChange={newEffect => setAttributes({ hoverEffect: newEffect })}
            />
          </div>

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
          <div className="premium-control-toggle">
            <p className="premium-editor-paragraph">{__("Name Tag")}</p>
            <Toolbar
              controls={"123456".split("").map(tag => ({
                icon: "heading",
                isActive: "H" + tag === nameTag,
                onClick: () => setAttributes({ nameTag: "H" + tag }),
                subscript: tag
              }))}
            />
          </div>
          <div className="premium-control-toggle">
            <p className="premium-editor-paragraph">{__("Title Tag")}</p>
            <Toolbar
              controls={"123456".split("").map(tag => ({
                icon: "heading",
                isActive: "H" + tag === titleTag,
                onClick: () => setAttributes({ titleTag: "H" + tag }),
                subscript: tag
              }))}
            />
          </div>
          <div className="premium-control-toggle">
            <p className="premium-editor-paragraph">{__("Alignment")}</p>
            <AlignmentToolbar
              value={align}
              onChange={newAlign => setAttributes({ align: newAlign })}
            />
          </div>

        </PanelBody>

        {/* Person Name Style */}
        {(personName) && (
          <PanelBody
            title={__("Person Name Style")}
            className="preminm-panel-body"
            initialOpen={false}
          >
            <div className="premium-control-toggle">
              <PremiumTypo
                components={["spacing", "weight", "line", "style"]}
                spacing={nameSpacing}
                weight={nameWeight}
                line={nameLine}
                style={nameStyle}
                onChangeSpacing={newSpacing => setAttributes({ nameSpacing: newSpacing })}
                onChangeWeight={newWeight => setAttributes({ nameWeight: newWeight === undefined ? 500 : newWeight })}
                onChangeLine={newValue => setAttributes({ nameLine: newValue === undefined ? 10 : newValue })}
                onChangeStyle={newValue => setAttributes({ nameStyle: newValue === undefined ? 'normal' : newValue })}
              />
            </div>
            <div className="premium-control-toggle">
              <PremiumTextShadow
                color={nameShadowColor}
                blur={nameShadowBlur}
                horizontal={nameShadowHorizontal}
                vertical={nameShadowVertical}
                onChangeColor={newColor => setAttributes({ nameShadowColor: newColor === undefined ? "transparent" : newColor.hex })}
                onChangeBlur={newBlur => setAttributes({ nameShadowBlur: newBlur === undefined ? 0 : newBlur })}
                onChangehHorizontal={newValue => setAttributes({ nameShadowHorizontal: newValue === undefined ? 0 : newValue })}
                onChangeVertical={newValue => setAttributes({ nameShadowVertical: newValue === undefined ? 0 : newValue })}
              />
            </div>
            <div className="premium-control-toggle">
              <p className="premium-editor-paragraph">{__("Name Color")}</p>
              <ColorPalette
                value={nameColor}
                onChange={newValue => setAttributes({ nameColor: newValue })}
                allowReset={true}
              />
            </div>

          </PanelBody>
        )}

        {/* Person Title Style */}
        {(personTitle) && (
          <PanelBody
            title={__("Person Title Style")}
            className="preminm-panel-body"
            initialOpen={false}
          >
            <div className="premium-control-toggle">
              <PremiumTypo
                components={["spacing", "weight", "line", "style"]}
                spacing={titleSpacing}
                weight={titleWeight}
                line={titleLine}
                style={titleStyle}
                onChangeSpacing={newSpacing => setAttributes({ titleSpacing: newSpacing })}
                onChangeWeight={newWeight => setAttributes({ titleWeight: newWeight === undefined ? 500 : newWeight })}
                onChangeLine={newValue => setAttributes({ titleLine: newValue === undefined ? 10 : newValue })}
                onChangeStyle={newValue => setAttributes({ titleStyle: newValue === undefined ? 'normal' : newValue })}
              />
            </div>
            <div className="premium-control-toggle">
              <PremiumTextShadow
                color={titleShadowColor}
                blur={titleShadowBlur}
                horizontal={titleShadowHorizontal}
                vertical={titleShadowVertical}
                onChangeColor={newColor => setAttributes({ titleShadowColor: newColor === undefined ? "transparent" : newColor.hex })}
                onChangeBlur={newBlur => setAttributes({ titleShadowBlur: newBlur === undefined ? 0 : newBlur })}
                onChangehHorizontal={newValue => setAttributes({ titleShadowHorizontal: newValue === undefined ? 0 : newValue })}
                onChangeVertical={newValue => setAttributes({ titleShadowVertical: newValue === undefined ? 0 : newValue })}
              />
            </div>
            <div className="premium-control-toggle">
              <p className="premium-editor-paragraph">{__("Title Color")}</p>
              <ColorPalette
                value={titleColor}
                onChange={newValue => setAttributes({ titleColor: newValue })}
                allowReset={true}
              />
            </div>

          </PanelBody>
        )}

        {/* Person Description Style */}
        {(personDesc) && (
          <PanelBody
            title={__("Person Description Style")}
            className="preminm-panel-body"
            initialOpen={false}
          >
            <div className="premium-control-toggle">
              <PremiumTypo
                components={["spacing", "weight", "line", "style"]}
                spacing={descSpacing}
                weight={descWeight}
                line={descLine}
                style={descStyle}
                onChangeSpacing={newSpacing => setAttributes({ descSpacing: newSpacing })}
                onChangeWeight={newWeight => setAttributes({ descWeight: newWeight === undefined ? 500 : newWeight })}
                onChangeLine={newValue => setAttributes({ descLine: newValue === undefined ? 10 : newValue })}
                onChangeStyle={newValue => setAttributes({ descStyle: newValue === undefined ? 'normal' : newValue })}
              />
            </div>
            <div className="premium-control-toggle">
              <p className="premium-editor-paragraph">{__("Description color")}</p>
              <ColorPalette
                value={descColor}
                onChange={newValue => setAttributes({ descColor: newValue })}
                allowReset={true}
              />
            </div>

          </PanelBody>
        )}

        {/* Social Icons */}
        <PanelBody
          title={__("Social Icons URL")}
          className="preminm-panel-body"
          initialOpen={false}
        >
          <div className="premium-control-toggle">
            <TextControl
              className="premium-text-control"
              label={__("Facebook URL")}
              value={facebookURL}
              onChange={newURL => setAttributes({ facebookURL: newURL })}
            />
          </div>
          <div className="premium-control-toggle">
            <TextControl
              className="premium-text-control"
              label={__("Twitter URL")}
              value={twitterURL}
              onChange={newURL => setAttributes({ twitterURL: newURL })}
            />
          </div>
          <div className="premium-control-toggle">
            <TextControl
              className="premium-text-control"
              label={__("Instagram URL")}
              value={instaURL}
              onChange={newURL => setAttributes({ instaURL: newURL })}
            />
          </div>
          <div className="premium-control-toggle">
            <TextControl
              className="premium-text-control"
              label={__("Youtube URL")}
              value={youtubeURL}
              onChange={newURL => setAttributes({ youtubeURL: newURL })}
            />
          </div>
          <div className="premium-control-toggle">
            <TextControl
              className="premium-text-control"
              label={__("Google+ URL")}
              value={googleURL}
              onChange={newURL => setAttributes({ googleURL: newURL })}
            />
          </div>
          <div className="premium-control-toggle">
            <TextControl
              className="premium-text-control"
              label={__("Behance URL")}
              value={behanceURL}
              onChange={newURL => setAttributes({ behanceURL: newURL })}
            />
          </div>
          <div className="premium-control-toggle">
            <TextControl
              className="premium-text-control"
              label={__("Pinterest URL")}
              value={pinterestURL}
              onChange={newURL => setAttributes({ pinterestURL: newURL })}
            />
          </div>
          <div className="premium-control-toggle">
            <TextControl
              className="premium-text-control"
              label={__("Dribbble URL")}
              value={dribbbleURL}
              onChange={newURL => setAttributes({ dribbbleURL: newURL })}
            />
          </div>
          <div className="premium-control-toggle">
            <TextControl
              className="premium-text-control"
              label={__("Email Address")}
              value={emailAddress}
              onChange={newURL => setAttributes({ emailAddress: newURL })}
            />
          </div>

        </PanelBody>

        {/* Social Icons Style */}
        <PanelBody
          title={__("Social Icons Style")}
          className="preminm-panel-body"
          initialOpen={false}
        >
          <div className="premium-control-toggle">
            <p className="premium-editor-paragraph">{__("Icons Color")}</p>
            <ColorPalette
              value={iconColor}
              onChange={newValue => setAttributes({ iconColor: newValue })}
              allowReset={true}
            />
          </div>
          <div className="premium-control-toggle">
            <p className="premium-editor-paragraph">{__("Icons Hover Color")}</p>
            <ColorPalette
              value={iconHoverColor}
              onChange={newValue => setAttributes({ iconHoverColor: newValue })}
              allowReset={true}
            />
          </div>
          <div className="premium-control-toggle">
            <p className="premium-editor-paragraph">{__("Icons Background Color")}</p>
            <ColorPalette
              value={iconBackColor}
              onChange={newValue => setAttributes({ iconBackColor: newValue })}
              allowReset={true}
            />
          </div>
          <div className="premium-control-toggle">
            <p className="premium-editor-paragraph">{__("Icons Hover Background Color")}</p>
            <ColorPalette
              value={iconBackHover}
              onChange={newValue => setAttributes({ iconBackHover: newValue })}
              allowReset={true}
            />
          </div>
          <div className="premium-control-toggle">
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
          </div>
          <div className="premium-control-toggle">
            <PremiumPadding
              paddingTop={iconPaddingT}
              paddingRight={iconPaddingR}
              paddingBottom={iconPaddingB}
              paddingLeft={iconPaddingL}
              onChangePadTop={newValue => setAttributes({ iconPaddingT: newValue })}
              onChangePadRight={newValue => setAttributes({ iconPaddingR: newValue })}
              onChangePadBottom={newValue => setAttributes({ iconPaddingB: newValue })}
              onChangePadLeft={newValue => setAttributes({ iconPaddingL: newValue })}
            />
          </div>

        </PanelBody>

      </InspectorControls>
    ),
    <div>

      {!imageURL && <DefaultImage />}
      {imageURL && (
        <div className={`premium-person__container premium-person__${hoverEffect}-effect`} style={{width : imageWidth + imageWidthU}}>

          <div className={`premium-person__image-container`}>
            <img
              className={`premium-person__img `}
              src={imageURL}
            />
          </div>
          <div className={`premium-person__info`} >
            <div className={`premium-person__info-container`}>

              <RichText
                className={`premium-person__name`}
                tagName={nameTag}
                value={personName}
                placeholder={__("Please Enter Your Name")}
                isSelected={false}
                onChange={newText => setAttributes({ personName: newText })}
                style={{
                  textAlign: align,
                  color: nameColor,
                  fontWeight: nameWeight,
                  lineHeight: nameLine + "px",
                  fontStyle: nameStyle,
                  letterSpacing: nameSpacing + "px",
                  textShadow: `${nameShadowHorizontal}px ${nameShadowVertical}px ${nameShadowBlur}px ${nameShadowColor}`
                }}
                keepPlaceholderOnFocus
              />
              <RichText
                className={`premium-person__title`}
                tagName={titleTag}
                value={personTitle}
                placeholder={__("Please Enter Your Title")}
                isSelected={false}
                onChange={newText => setAttributes({ personTitle: newText })}
                style={{
                  textAlign: align,
                  color: titleColor,
                  fontWeight: titleWeight,
                  lineHeight: titleLine + "px",
                  fontStyle: titleStyle,
                  letterSpacing: titleSpacing + "px",
                  textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`
                }}
                keepPlaceholderOnFocus
              />
              <RichText
                className={`premium-person__description`}
                tagName={"p"}
                value={personDesc}
                placeholder={__("Please Enter Your Description")}
                isSelected={false}
                onChange={newText => setAttributes({ personDesc: newText })}
                style={{
                  textAlign: align,
                  fontWeight: descWeight,
                  lineHeight: descLine + "px",
                  fontStyle: descStyle,
                  letterSpacing: descSpacing + "px",
                  color: descColor
                }}
                keepPlaceholderOnFocus
              />
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
              <ul className={`premium-person__social-list`} style={{ textAlign: align }}>
                {(1 == FontAwesomeEnabled) && (facebookURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={facebookURL} target="_blank" rel="noopener noreferrer">
                      <i
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
                      />
                    </a>
                  </li>  
                )}
                {(1 == FontAwesomeEnabled) && (twitterURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={twitterURL} target="_blank" rel="noopener noreferrer"> 
                      <i
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
                      />
                    </a>
                  </li>
                )}
                {(1 == FontAwesomeEnabled) && (instaURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={instaURL} target="_blank" rel="noopener noreferrer">
                      <i
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
                      />
                    </a>
                  </li>
                )}
                {(1 == FontAwesomeEnabled) && (youtubeURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={youtubeURL} target="_blank" rel="noopener noreferrer">
                      <i
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
                      />
                    </a>
                  </li>
                )}
                {(1 == FontAwesomeEnabled) && (googleURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={googleURL} target="_blank" rel="noopener noreferrer">
                      <i
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
                      />
                    </a>
                  </li>
                )}
                {(1 == FontAwesomeEnabled) && (behanceURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={behanceURL} target="_blank" rel="noopener noreferrer"> 
                      <i
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
                      />
                    </a>
                  </li>
                )}
                {(1 == FontAwesomeEnabled) && (pinterestURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={pinterestURL} target="_blank" rel="noopener noreferrer">
                      <i
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
                      />
                    </a>
                  </li>
                )}
                {(1 == FontAwesomeEnabled) && (dribbbleURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={dribbbleURL} target="_blank" rel="noopener noreferrer">
                      <i
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
                      />
                    </a>
                  </li>
                )}
                {(1 == FontAwesomeEnabled) && (emailAddress !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={emailAddress} target="_blank" rel="noopener noreferrer">
                      <i
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
                  </li>
                )}
              </ul>

            </div>
          </div>
        
        </div>
      )}

    </div>
  ]

};
export default edit;