import { dualHeading } from "../settings";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PbgIcon from "../icons";

if (dualHeading) {
  const className = "premium-dheading-block";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    PanelBody,
    SelectControl,
    TextControl,
    RangeControl,
    ToggleControl
  } = wp.components;
  const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    PanelColorSettings,
    URLInput
  } = wp.editor;

  const dualHeadingAttrs = {
    contentAlign: {
      type: "string",
      default: "center"
    },
    firstHeading: {
      type: "array",
      source: "children",
      default: "Premium ",
      selector: ".premium-dheading-block__first"
    },
    secondHeading: {
      type: "array",
      source: "children",
      default: "Blocks",
      selector: ".premium-dheading-block__second"
    },
    titleTag: {
      type: "string",
      default: "h1"
    },
    display: {
      type: "string",
      default: "inline"
    },
    firstColor: {
      type: "string",
      default: "#6ec1e4"
    },
    firstSize: {
      type: "number",
      default: "20"
    },
    firstLetter: {
      type: "number"
    },
    firstStyle: {
      type: "string"
    },
    firstUpper: {
      type: "boolean"
    },
    firstWeight: {
      type: "number",
      default: 500
    },
    firstBackground: {
      type: "string"
    },
    firstBorderType: {
      type: "string",
      default: "none"
    },
    firstBorderWidth: {
      type: "number",
      default: "1"
    },
    firstBorderRadius: {
      type: "number",
      default: "0"
    },
    firstBorderColor: {
      type: "string"
    },
    firstMarginR: {
      type: "number",
      default: "0"
    },
    firstMarginL: {
      type: "number",
      default: "0"
    },
    firstPadding: {
      type: "number",
      default: "0"
    },
    firstClip: {
      type: "boolean",
      default: false
    },
    firstAnim: {
      type: "boolean",
      default: false
    },
    firstClipColor: {
      type: "string",
      default: "#54595f"
    },
    firstShadowColor: {
      type: "string"
    },
    firstShadowBlur: {
      type: "number",
      default: "0"
    },
    firstShadowHorizontal: {
      type: "number",
      default: "0"
    },
    firstShadowVertical: {
      type: "number",
      default: "0"
    },
    secondColor: {
      type: "string",
      default: "#54595f"
    },
    secondSize: {
      type: "number",
      default: "20"
    },
    secondLetter: {
      type: "number"
    },
    secondStyle: {
      type: "string"
    },
    secondUpper: {
      type: "boolean"
    },
    secondWeight: {
      type: "number",
      default: 500
    },
    secondBackground: {
      type: "string"
    },
    secondBorderType: {
      type: "string",
      default: "none"
    },
    secondBorderWidth: {
      type: "number",
      default: "1"
    },
    secondBorderRadius: {
      type: "number",
      default: "0"
    },
    secondBorderColor: {
      type: "string"
    },
    secondMarginR: {
      type: "number",
      default: "0"
    },
    secondMarginL: {
      type: "number",
      default: "0"
    },
    secondPadding: {
      type: "number",
      default: "0"
    },
    secondClip: {
      type: "boolean",
      default: false
    },
    secondShadowColor: {
      type: "string"
    },
    secondShadowBlur: {
      type: "number",
      default: "0"
    },
    secondShadowHorizontal: {
      type: "number",
      default: "0"
    },
    secondShadowVertical: {
      type: "number",
      default: "0"
    },
    secondAnim: {
      type: "boolean",
      default: false
    },
    secondClipColor: {
      type: "string",
      default: "#6ec1e4"
    },
    link: {
      type: "boolean",
      default: false
    },
    target: {
      type: "boolean",
      default: false
    },
    headingURL: {
      type: "string"
    },
    containerBack: {
      type: "string"
    }
  };
  registerBlockType("premium/dheading-block", {
    title: __("Dual Heading"),
    icon: <PbgIcon icon="dual-heading" />,
    category: "premium-blocks",
    attributes: dualHeadingAttrs,
    edit: props => {
      const { setAttributes, isSelected } = props;
      const {
        contentAlign,
        firstHeading,
        secondHeading,
        display,
        firstColor,
        firstBackground,
        firstSize,
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
        containerBack
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
              <PanelBody
                title={__("Font")}
                className="premium-panel-body premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumTypo
                  components={["size", "weight", "style", "upper", "spacing"]}
                  size={firstSize}
                  weight={firstWeight}
                  style={firstStyle}
                  spacing={firstLetter}
                  upper={firstUpper}
                  onChangeSize={newSize =>
                    setAttributes({ firstSize: newSize })
                  }
                  onChangeWeight={newWeight =>
                    setAttributes({ firstWeight: newWeight })
                  }
                  onChangeStyle={newStyle =>
                    setAttributes({ firstStyle: newStyle })
                  }
                  onChangeSpacing={newValue =>
                    setAttributes({ firstLetter: newValue })
                  }
                  onChangeUpper={check => setAttributes({ firstUpper: check })}
                />
              </PanelBody>
              {!firstClip && (
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      label: __("Text Color"),
                      value: firstColor,
                      onChange: colorValue =>
                        setAttributes({ firstColor: colorValue })
                    },
                    {
                      label: __("Background Color"),
                      value: firstBackground,
                      onChange: colorValue =>
                        setAttributes({ firstBackground: colorValue })
                    }
                  ]}
                />
              )}

              {firstClip && (
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      label: __("First Color"),
                      value: firstColor,
                      onChange: colorValue =>
                        setAttributes({ firstColor: colorValue })
                    },
                    {
                      label: __("Second Color"),
                      value: firstClipColor,
                      onChange: colorValue =>
                        setAttributes({ firstClipColor: colorValue })
                    }
                  ]}
                />
              )}
              <PanelBody
                title={__("Border")}
                className="premium-panel-body premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumBorder
                  borderType={firstBorderType}
                  borderWidth={firstBorderWidth}
                  borderColor={firstBorderColor}
                  borderRadius={firstBorderRadius}
                  onChangeType={newType =>
                    setAttributes({ firstBorderType: newType })
                  }
                  onChangeWidth={newWidth =>
                    setAttributes({ firstBorderWidth: newWidth })
                  }
                  onChangeColor={colorValue =>
                    setAttributes({ firstBorderColor: colorValue })
                  }
                  onChangeRadius={newrRadius =>
                    setAttributes({ firstBorderRadius: newrRadius })
                  }
                />
              </PanelBody>
              <PremiumTextShadow
                color={firstShadowColor}
                blur={firstShadowBlur}
                horizontal={firstShadowHorizontal}
                vertical={firstShadowVertical}
                onChangeColor={newColor =>
                  setAttributes({ firstShadowColor: newColor })
                }
                onChangeBlur={newBlur =>
                  setAttributes({ firstShadowBlur: newBlur })
                }
                onChangehHorizontal={newValue =>
                  setAttributes({ firstShadowHorizontal: newValue })
                }
                onChangeVertical={newValue =>
                  setAttributes({ firstShadowVertical: newValue })
                }
              />
              <PanelBody
                title={__("Spacings")}
                className="premium-panel-body premium-panel-body-inner"
                initialOpen={false}
              >
                <p>{__("Margin Left")}</p>
                <RangeControl
                  value={firstMarginL}
                  min="0"
                  max="100"
                  onChange={newMargin =>
                    setAttributes({ firstMarginL: newMargin })
                  }
                />
                <p>{__("Margin Right")}</p>
                <RangeControl
                  value={firstMarginR}
                  min="0"
                  max="100"
                  onChange={newMargin =>
                    setAttributes({ firstMarginR: newMargin })
                  }
                />
                <p>{__("Padding")}</p>
                <RangeControl
                  value={firstPadding}
                  min="0"
                  max="100"
                  onChange={newPadding =>
                    setAttributes({ firstPadding: newPadding })
                  }
                />
              </PanelBody>
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
              <PanelBody
                title={__("Font")}
                className="premium-panel-body premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumTypo
                  components={["size", "weight", "style", "upper", "spacing"]}
                  size={secondSize}
                  weight={secondWeight}
                  style={secondStyle}
                  spacing={secondLetter}
                  upper={secondUpper}
                  onChangeSize={newSize =>
                    setAttributes({ secondSize: newSize })
                  }
                  onChangeWeight={newWeight =>
                    setAttributes({ secondWeight: newWeight })
                  }
                  onChangeStyle={newStyle =>
                    setAttributes({ secondStyle: newStyle })
                  }
                  onChangeSpacing={newValue =>
                    setAttributes({ secondLetter: newValue })
                  }
                  onChangeUpper={check => setAttributes({ secondUpper: check })}
                />
              </PanelBody>
              {!secondClip && (
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      label: __("Text Color"),
                      value: secondColor,
                      onChange: colorValue =>
                        setAttributes({ secondColor: colorValue })
                    },
                    {
                      label: __("Background Color"),
                      value: secondBackground,
                      onChange: colorValue =>
                        setAttributes({ secondBackground: colorValue })
                    }
                  ]}
                />
              )}
              {secondClip && (
                <PanelColorSettings
                  title={__("Second Color")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      label: __("First Color"),
                      value: secondColor,
                      onChange: colorValue =>
                        setAttributes({ secondColor: colorValue })
                    },
                    {
                      value: secondClipColor,
                      onChange: colorValue =>
                        setAttributes({ secondClipColor: colorValue }),
                      label: __("Second Color")
                    }
                  ]}
                />
              )}
              <PanelBody
                title={__("Border")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
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
                    setAttributes({ secondBorderColor: colorValue })
                  }
                  onChangeRadius={newrRadius =>
                    setAttributes({ secondBorderRadius: newrRadius })
                  }
                />
              </PanelBody>
              <PremiumTextShadow
                color={secondShadowColor}
                blur={secondShadowBlur}
                horizontal={secondShadowHorizontal}
                vertical={secondShadowVertical}
                onChangeColor={newColor =>
                  setAttributes({ secondShadowColor: newColor })
                }
                onChangeBlur={newBlur =>
                  setAttributes({ secondShadowBlur: newBlur })
                }
                onChangehHorizontal={newValue =>
                  setAttributes({ secondShadowHorizontal: newValue })
                }
                onChangeVertical={newValue =>
                  setAttributes({ secondShadowVertical: newValue })
                }
              />
              <PanelBody
                title={__("Spacings")}
                className="premium-panel-body premium-panel-body-inner"
                initialOpen={false}
              >
                <p>{__("Margin Left")}</p>
                <RangeControl
                  value={secondMarginL}
                  min="0"
                  max="100"
                  onChange={newMargin =>
                    setAttributes({ secondMarginL: newMargin })
                  }
                />
                <p>{__("Margin Right")}</p>
                <RangeControl
                  value={secondMarginR}
                  min="0"
                  max="100"
                  onChange={newMargin =>
                    setAttributes({ secondMarginR: newMargin })
                  }
                />
                <p>{__("Padding")}</p>
                <RangeControl
                  value={secondPadding}
                  min="0"
                  max="100"
                  onChange={newPadding =>
                    setAttributes({ secondPadding: newPadding })
                  }
                />
              </PanelBody>
            </PanelBody>
            <PanelBody
              title={__("Container Style")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    label: __("Background Color"),
                    value: containerBack,
                    onChange: colorValue =>
                      setAttributes({ containerBack: colorValue })
                  }
                ]}
              />
            </PanelBody>
          </InspectorControls>
        ),
        <div
          className={`${className}__container`}
          style={{
            textAlign: contentAlign,
            backgroundColor: containerBack
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
    },
    save: props => {
      const {
        contentAlign,
        firstHeading,
        secondHeading,
        display,
        firstColor,
        firstBackground,
        firstSize,
        firstStyle,
        firstUpper,
        firstLetter,
        firstWeight,
        firstBorderType,
        firstBorderWidth,
        firstBorderRadius,
        firstBorderColor,
        firstPadding,
        firstMargin,
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
        secondLetter,
        secondUpper,
        secondWeight,
        secondStyle,
        secondBorderType,
        secondBorderWidth,
        secondBorderRadius,
        secondBorderColor,
        secondPadding,
        secondMargin,
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
        containerBack
      } = props.attributes;

      return (
        <div
          className={`${className}__container`}
          style={{
            textAlign: contentAlign,
            backgroundColor: containerBack
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
                  letterSpacing: firstLetter + "px",
                  textTransform: firstUpper ? "uppercase" : "none",
                  fontStyle: firstStyle,
                  fontWeight: firstWeight,
                  border: firstBorderType,
                  borderWidth: firstBorderWidth + "px",
                  borderRadius: firstBorderRadius + "px",
                  borderColor: firstBorderColor,
                  padding: firstPadding + "px",
                  margin: firstMargin + "px",
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
                  letterSpacing: secondLetter + "px",
                  textTransform: secondUpper ? "uppercase" : "none",
                  fontStyle: secondStyle,
                  fontWeight: secondWeight,
                  border: secondBorderType,
                  borderWidth: secondBorderWidth + "px",
                  borderRadius: secondBorderRadius + "px",
                  borderColor: secondBorderColor,
                  padding: secondPadding + "px",
                  margin: secondMargin + "px",
                  textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`
                }}
              >
                {secondHeading}
              </span>
            </h2>
            {link && headingURL && (
              <a
                className={`${className}__link`}
                href={link && headingURL}
                target={target && "_blank"}
              />
            )}
          </div>
        </div>
      );
    },
    deprecated: [
      {
        attributes: dualHeadingAttrs,
        save: props => {
          const {
            contentAlign,
            firstHeading,
            secondHeading,
            display,
            firstColor,
            firstBackground,
            firstSize,
            firstStyle,
            firstUpper,
            firstLetter,
            firstWeight,
            firstBorderType,
            firstBorderWidth,
            firstBorderRadius,
            firstBorderColor,
            firstPadding,
            firstMargin,
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
            secondLetter,
            secondUpper,
            secondWeight,
            secondStyle,
            secondBorderType,
            secondBorderWidth,
            secondBorderRadius,
            secondBorderColor,
            secondPadding,
            secondMargin,
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
            containerBack
          } = props.attributes;

          return (
            <a
              className={`${className}__link`}
              href={link && headingURL}
              target={target && "_blank"}
            >
              <div
                className={`${className}__container`}
                style={{
                  textAlign: contentAlign,
                  backgroundColor: containerBack
                }}
              >
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
                      letterSpacing: firstLetter + "px",
                      textTransform: firstUpper ? "uppercase" : "none",
                      fontStyle: firstStyle,
                      fontWeight: firstWeight,
                      border: firstBorderType,
                      borderWidth: firstBorderWidth + "px",
                      borderRadius: firstBorderRadius + "px",
                      borderColor: firstBorderColor,
                      padding: firstPadding + "px",
                      margin: firstMargin + "px",
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
                      letterSpacing: secondLetter + "px",
                      textTransform: secondUpper ? "uppercase" : "none",
                      fontStyle: secondStyle,
                      fontWeight: secondWeight,
                      border: secondBorderType,
                      borderWidth: secondBorderWidth + "px",
                      borderRadius: secondBorderRadius + "px",
                      borderColor: secondBorderColor,
                      padding: secondPadding + "px",
                      margin: secondMargin + "px",
                      textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`
                    }}
                  >
                    {secondHeading}
                  </span>
                </h2>
              </div>
            </a>
          );
        }
      }
    ]
  });
}
