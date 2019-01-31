const className = "premium-dheading-block";

const deprecated_attributes_1_3_0 = {
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

const deprecatedContent = [
  {
    attributes: deprecated_attributes_1_3_0,
    save: props => {
      {
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
  }
];
export default deprecatedContent;
