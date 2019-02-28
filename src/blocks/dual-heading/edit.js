import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBackgroud from "../../components/premium-background";
import FONTS from "../../components/premium-fonts";

const className = "premium-dheading-block";

const { __ } = wp.i18n;

const { Fragment } = wp.element;

const {
  PanelBody,
  SelectControl,
  TextControl,
  RangeControl,
  ToggleControl,
  Dropdown,
  Button
} = wp.components;
const {
  BlockControls,
  InspectorControls,
  AlignmentToolbar,
  ColorPalette,
  URLInput
} = wp.editor;

const edit = props => {
  const { setAttributes, isSelected } = props;
  const {
    contentAlign,
    firstHeading,
    secondHeading,
    display,
    firstColor,
    firstBackground,
    firstSize,
    firstFamily,
    firstStyle,
    firstUpper,
    firstLetter,
    firstWeight,
    firstBorderType,
    firstBorderWidth,
    firstBorderRadius,
    firstBorderColor,
    firstPadding,
    firstMarginR,
    firstMarginL,
    firstClip,
    firstAnim,
    firstClipColor,
    firstShadowBlur,
    firstShadowColor,
    firstShadowHorizontal,
    firstShadowVertical,
    secondColor,
    secondBackground,
    secondSize,
    secondFamily,
    secondLetter,
    secondUpper,
    secondWeight,
    secondStyle,
    secondBorderType,
    secondBorderWidth,
    secondBorderRadius,
    secondBorderColor,
    secondPadding,
    secondMarginL,
    secondMarginR,
    secondClip,
    secondAnim,
    secondClipColor,
    secondShadowBlur,
    secondShadowColor,
    secondShadowHorizontal,
    secondShadowVertical,
    link,
    target,
    headingURL,
    containerBack,
    imageID,
    imageURL,
    fixed,
    backgroundRepeat,
    backgroundPosition,
    backgroundSize
  } = props.attributes;
  const DISPLAY = [
    {
      value: "inline",
      label: __("Inline")
    },
    {
      value: "block",
      label: __("Block")
    }
  ];

  const addFontToHead = fontFamily => {
    const head = document.head;
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css?family=" +
      fontFamily.replace(/\s+/g, "+") +
      ":" +
      "regular";
    head.appendChild(link);
  };

  const onChangeFirstFamily = fontFamily => {
    setAttributes({ firstFamily: fontFamily });
    if (!fontFamily) {
      return;
    }

    addFontToHead(fontFamily);
  };

  const onChangeSecondFamily = fontFamily => {
    setAttributes({ secondFamily: fontFamily });
    if (!fontFamily) {
      return;
    }

    addFontToHead(fontFamily);
  };

  return [
    isSelected && (
      <BlockControls key="controls">
        <AlignmentToolbar
          value={contentAlign}
          onChange={newAlign => setAttributes({ contentAlign: newAlign })}
        />
      </BlockControls>
    ),
    isSelected && (
      <InspectorControls key={"inspector"}>
        <PanelBody
          title={__("General Settings")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <TextControl
            label={__("First Heading")}
            type="url"
            value={firstHeading}
            onChange={value => setAttributes({ firstHeading: value })}
          />
          <TextControl
            label={__("Second Heading")}
            type="url"
            value={secondHeading}
            onChange={value => setAttributes({ secondHeading: value })}
          />

          <SelectControl
            label={__("Display")}
            value={display}
            options={DISPLAY}
            onChange={value => setAttributes({ display: value })}
          />
          <ToggleControl
            label={__("Link")}
            checked={link}
            onChange={newValue => setAttributes({ link: newValue })}
          />
          {link && (
            <ToggleControl
              label={__("Open link in new tab")}
              checked={target}
              onChange={newValue => setAttributes({ target: newValue })}
            />
          )}
        </PanelBody>
        <PanelBody
          title={__("First Heading Style")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <ToggleControl
            label={__("Clipped")}
            checked={firstClip}
            onChange={newValue => setAttributes({ firstClip: newValue })}
          />
          {firstClip && (
            <ToggleControl
              label={__("Animated")}
              checked={firstAnim}
              onChange={newValue => setAttributes({ firstAnim: newValue })}
            />
          )}
          <SelectControl
            label={__("Font Family")}
            value={firstFamily}
            options={FONTS}
            onChange={onChangeFirstFamily}
          />
          <PremiumTypo
            components={["size", "weight", "style", "upper", "spacing"]}
            size={firstSize}
            weight={firstWeight}
            style={firstStyle}
            spacing={firstLetter}
            upper={firstUpper}
            onChangeSize={newSize =>
              setAttributes({ firstSize: newSize || 20 })
            }
            onChangeWeight={newWeight =>
              setAttributes({ firstWeight: newWeight || 500 })
            }
            onChangeStyle={newStyle => setAttributes({ firstStyle: newStyle })}
            onChangeSpacing={newValue =>
              setAttributes({ firstLetter: newValue })
            }
            onChangeUpper={check => setAttributes({ firstUpper: check })}
          />

          {!firstClip && (
            <div className="premium-control-toggle">
              <strong>{__("Colors")}</strong>
              <Dropdown
                className="premium-control-toggle-btn"
                contentClassName="premium-control-toggle-content"
                position="bottom right"
                renderToggle={({ isOpen, onToggle }) => (
                  <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                    <i className="dashicons dashicons-edit" />
                  </Button>
                )}
                renderContent={() => (
                  <Fragment>
                    <p>{__("Text Color")}</p>
                    <ColorPalette
                      value={firstColor}
                      onChange={newValue =>
                        setAttributes({
                          firstColor: newValue
                        })
                      }
                      allowReset={true}
                    />
                    <p>{__("Background Color")}</p>
                    <ColorPalette
                      value={firstBackground}
                      onChange={newValue =>
                        setAttributes({
                          firstBackground: newValue
                        })
                      }
                      allowReset={true}
                    />
                  </Fragment>
                )}
              />
            </div>
          )}

          {firstClip && (
            <div className="premium-control-toggle">
              <strong>{__("Colors")}</strong>
              <Dropdown
                className="premium-control-toggle-btn"
                contentClassName="premium-control-toggle-content"
                position="bottom right"
                renderToggle={({ isOpen, onToggle }) => (
                  <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                    <i className="dashicons dashicons-edit" />
                  </Button>
                )}
                renderContent={() => (
                  <Fragment>
                    <p>{__("First Color")}</p>
                    <ColorPalette
                      value={firstColor}
                      onChange={newValue =>
                        setAttributes({
                          firstColor: newValue
                        })
                      }
                      allowReset={true}
                    />
                    <p>{__("Second Color")}</p>
                    <ColorPalette
                      value={firstClipColor}
                      onChange={newValue =>
                        setAttributes({
                          firstClipColor: newValue
                        })
                      }
                      allowReset={true}
                    />
                  </Fragment>
                )}
              />
            </div>
          )}

          <PremiumBorder
            borderType={firstBorderType}
            borderWidth={firstBorderWidth}
            borderColor={firstBorderColor}
            borderRadius={firstBorderRadius}
            onChangeType={newType =>
              setAttributes({ firstBorderType: newType })
            }
            onChangeWidth={newWidth =>
              setAttributes({ firstBorderWidth: newWidth || "0" })
            }
            onChangeColor={colorValue =>
              setAttributes({ firstBorderColor: colorValue || "transparent" })
            }
            onChangeRadius={newrRadius =>
              setAttributes({ firstBorderRadius: newrRadius || "0" })
            }
          />

          <PremiumTextShadow
            color={firstShadowColor}
            blur={firstShadowBlur}
            horizontal={firstShadowHorizontal}
            vertical={firstShadowVertical}
            onChangeColor={newColor =>
              setAttributes({ firstShadowColor: newColor || "transparent" })
            }
            onChangeBlur={newBlur =>
              setAttributes({ firstShadowBlur: newBlur || "0" })
            }
            onChangehHorizontal={newValue =>
              setAttributes({ firstShadowHorizontal: newValue || "0" })
            }
            onChangeVertical={newValue =>
              setAttributes({ firstShadowVertical: newValue || "0" })
            }
          />

          <p>{__("Margin Left")}</p>
          <RangeControl
            value={firstMarginL}
            min="0"
            max="100"
            onChange={newMargin =>
              setAttributes({ firstMarginL: newMargin || "0" })
            }
          />
          <p>{__("Margin Right")}</p>
          <RangeControl
            value={firstMarginR}
            min="0"
            max="100"
            onChange={newMargin =>
              setAttributes({ firstMarginR: newMargin || "0" })
            }
          />
          <p>{__("Padding")}</p>
          <RangeControl
            value={firstPadding}
            min="0"
            max="100"
            onChange={newPadding =>
              setAttributes({ firstPadding: newPadding || "0" })
            }
          />
        </PanelBody>
        <PanelBody
          title={__("Second Heading Style")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <ToggleControl
            label={__("Clipped")}
            checked={secondClip}
            onChange={newValue => setAttributes({ secondClip: newValue })}
          />
          {secondClip && (
            <ToggleControl
              label={__("Animated")}
              checked={secondAnim}
              onChange={newValue => setAttributes({ secondAnim: newValue })}
            />
          )}
          <SelectControl
            label={__("Font Family")}
            value={secondFamily}
            options={FONTS}
            onChange={onChangeSecondFamily}
          />
          <PremiumTypo
            components={["size", "weight", "style", "upper", "spacing"]}
            size={secondSize}
            weight={secondWeight}
            style={secondStyle}
            spacing={secondLetter}
            upper={secondUpper}
            onChangeSize={newSize =>
              setAttributes({ secondSize: newSize || 20 })
            }
            onChangeWeight={newWeight =>
              setAttributes({ secondWeight: newWeight || 500 })
            }
            onChangeStyle={newStyle => setAttributes({ secondStyle: newStyle })}
            onChangeSpacing={newValue =>
              setAttributes({ secondLetter: newValue })
            }
            onChangeUpper={check => setAttributes({ secondUpper: check })}
          />

          {!secondClip && (
            <div className="premium-control-toggle">
              <strong>{__("Colors")}</strong>
              <Dropdown
                className="premium-control-toggle-btn"
                contentClassName="premium-control-toggle-content"
                position="bottom right"
                renderToggle={({ isOpen, onToggle }) => (
                  <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                    <i className="dashicons dashicons-edit" />
                  </Button>
                )}
                renderContent={() => (
                  <Fragment>
                    <p>{__("Text Color")}</p>
                    <ColorPalette
                      value={secondColor}
                      onChange={newValue =>
                        setAttributes({
                          secondColor: newValue || "transparent"
                        })
                      }
                      allowReset={true}
                    />
                    <p>{__("Background Color")}</p>
                    <ColorPalette
                      value={secondBackground}
                      onChange={newValue =>
                        setAttributes({
                          secondBackground: newValue
                        })
                      }
                      allowReset={true}
                    />
                  </Fragment>
                )}
              />
            </div>
          )}
          {secondClip && (
            <div className="premium-control-toggle">
              <strong>{__("Colors")}</strong>
              <Dropdown
                className="premium-control-toggle-btn"
                contentClassName="premium-control-toggle-content"
                position="bottom right"
                renderToggle={({ isOpen, onToggle }) => (
                  <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                    <i className="dashicons dashicons-edit" />
                  </Button>
                )}
                renderContent={() => (
                  <Fragment>
                    <p>{__("First Color")}</p>
                    <ColorPalette
                      value={secondColor}
                      onChange={newValue =>
                        setAttributes({
                          secondColor: newValue || "transparent"
                        })
                      }
                      allowReset={true}
                    />
                    <p>{__("Second Color")}</p>
                    <ColorPalette
                      value={secondClipColor}
                      onChange={newValue =>
                        setAttributes({
                          secondClipColor: newValue || "transparent"
                        })
                      }
                      allowReset={true}
                    />
                  </Fragment>
                )}
              />
            </div>
          )}

          <PremiumBorder
            borderType={secondBorderType}
            borderWidth={secondBorderWidth}
            borderColor={secondBorderColor}
            borderRadius={secondBorderRadius}
            onChangeType={newType =>
              setAttributes({ secondBorderType: newType })
            }
            onChangeWidth={newWidth =>
              setAttributes({ secondBorderWidth: newWidth })
            }
            onChangeColor={colorValue =>
              setAttributes({
                secondBorderColor: colorValue || "transparent"
              })
            }
            onChangeRadius={newrRadius =>
              setAttributes({ secondBorderRadius: newrRadius || "0" })
            }
          />

          <PremiumTextShadow
            color={secondShadowColor}
            blur={secondShadowBlur}
            horizontal={secondShadowHorizontal}
            vertical={secondShadowVertical}
            onChangeColor={newColor =>
              setAttributes({ secondShadowColor: newColor || "transparent" })
            }
            onChangeBlur={newBlur =>
              setAttributes({ secondShadowBlur: newBlur || "0" })
            }
            onChangehHorizontal={newValue =>
              setAttributes({ secondShadowHorizontal: newValue || "0" })
            }
            onChangeVertical={newValue =>
              setAttributes({ secondShadowVertical: newValue || "0" })
            }
          />
          <p>{__("Margin Left")}</p>
          <RangeControl
            value={secondMarginL}
            min="0"
            max="100"
            onChange={newMargin =>
              setAttributes({ secondMarginL: newMargin || "0" })
            }
          />
          <p>{__("Margin Right")}</p>
          <RangeControl
            value={secondMarginR}
            min="0"
            max="100"
            onChange={newMargin =>
              setAttributes({ secondMarginR: newMargin || "0" })
            }
          />
          <p>{__("Padding")}</p>
          <RangeControl
            value={secondPadding}
            min="0"
            max="100"
            onChange={newPadding =>
              setAttributes({ secondPadding: newPadding || "0" })
            }
          />
        </PanelBody>
        <PanelBody
          title={__("Container Style")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <p>{__("Background Color")}</p>
          <ColorPalette
            value={containerBack}
            onChange={newValue =>
              setAttributes({
                containerBack: newValue || "transparent"
              })
            }
            allowReset={true}
          />
          {imageURL && <img src={imageURL} width="100%" height="auto" />}
          <PremiumBackgroud
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
        </PanelBody>
      </InspectorControls>
    ),

    <div
      className={`${className}__container`}
      style={{
        textAlign: contentAlign,
        backgroundColor: containerBack,
        backgroundImage: `url('${imageURL}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset"
      }}
    >
      <div className={`${className}__wrap`}>
        <h2 className={`${className}__title`}>
          <span
            className={`${className}__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`}
            style={{
              display: display,
              color: firstColor,
              backgroundColor: firstClip ? "none" : firstBackground,
              backgroundImage: firstClip
                ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                : "none",
              fontSize: firstSize + "px",
              fontFamily: firstFamily,
              letterSpacing: firstLetter + "px",
              textTransform: firstUpper ? "uppercase" : "none",
              fontStyle: firstStyle,
              fontWeight: firstWeight,
              border: firstBorderType,
              borderWidth: firstBorderWidth + "px",
              borderRadius: firstBorderRadius + "px",
              borderColor: firstBorderColor,
              padding: firstPadding + "px",
              marginLeft: firstMarginL + "px",
              marginRight: firstMarginR + "px",
              textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`
            }}
          >
            {firstHeading}
          </span>
          <span
            className={`${className}__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`}
            style={{
              display: display,
              color: secondColor,
              backgroundColor: secondClip ? "none" : secondBackground,
              backgroundImage: secondClip
                ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                : "none",
              fontSize: secondSize + "px",
              fontFamily: secondFamily,
              letterSpacing: secondLetter + "px",
              textTransform: secondUpper ? "uppercase" : "none",
              fontStyle: secondStyle,
              fontWeight: secondWeight,
              border: secondBorderType,
              borderWidth: secondBorderWidth + "px",
              borderRadius: secondBorderRadius + "px",
              borderColor: secondBorderColor,
              padding: secondPadding + "px",
              marginLeft: secondMarginL + "px",
              marginRight: secondMarginR + "px",
              textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`
            }}
          >
            {secondHeading}
          </span>
        </h2>
      </div>
      {link && isSelected && (
        <URLInput
          value={headingURL}
          onChange={newUrl => setAttributes({ headingURL: newUrl })}
        />
      )}
    </div>
  ];
};
export default edit;
