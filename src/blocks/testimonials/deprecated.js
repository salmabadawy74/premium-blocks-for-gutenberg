import DefaultImage from "../../components/default-image";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";

const className = "premium-testimonial";

const { RichText } = wp.editor;

const newAttributes_1_3_9 = {
  shadowColor: {
    type: "string"
  },
  shadowBlur: {
    type: "number"
  },
  shadowHorizontal: {
    type: "number"
  },
  shadowVertical: {
    type: "number"
  },
  shadowPosition: {
    type: "string"
  }
};

const testimonialsAttrs_1_0_1 = {
  align: {
    type: "string",
    default: "center"
  },
  authorImgId: {
    type: "string"
  },
  authorImgUrl: {
    type: "string"
  },
  imgRadius: {
    type: "string",
    default: "50%"
  },
  imgSize: {
    type: "number"
  },
  imgBorder: {
    type: "number",
    default: "1"
  },
  imgBorderColor: {
    type: "string"
  },
  author: {
    type: "array",
    source: "children",
    selector: ".premium-testimonial__author",
    default: "John Doe"
  },
  authorTag: {
    type: "string",
    default: "H3"
  },
  authorColor: {
    type: "string"
  },
  authorSize: {
    type: "number"
  },
  authorLetter: {
    type: "number"
  },
  authorStyle: {
    type: "string"
  },
  authorUpper: {
    type: "boolean"
  },
  authorWeight: {
    type: "number",
    default: 500
  },
  authorComTag: {
    type: "string",
    default: "H4"
  },
  text: {
    type: "array",
    source: "children",
    selector: ".premium-testimonial__text"
  },
  authorCom: {
    type: "array",
    source: "children",
    selector: ".premium-testimonial__author_comp",
    default: "Leap13"
  },
  authorComColor: {
    type: "string"
  },
  authorComSize: {
    type: "number"
  },
  urlCheck: {
    type: "boolean",
    default: false
  },
  urlText: {
    type: "string"
  },
  urlTarget: {
    type: "boolean",
    default: false
  },
  quotSize: {
    type: "number"
  },
  quotColor: {
    type: "string"
  },
  quotOpacity: {
    type: "number"
  },
  bodyColor: {
    type: "string"
  },
  bodySize: {
    type: "number"
  },
  bodyLine: {
    type: "number"
  },
  bodyTop: {
    type: "number"
  },
  bodyBottom: {
    type: "number"
  },
  dashColor: {
    type: "string"
  }
};

const testimonialsAttrs_1_3_9 = Object.assign(
  testimonialsAttrs_1_0_1,
  newAttributes_1_3_9
);

const deprecatedContent = [
  {
    attributes: testimonialsAttrs_1_3_9,
    migrate: attributes => {
      let newAttributes = {
        backColor: "",
        imageID: "",
        imageURL: "",
        fixed: false,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "auto"
      };
      return Object.assign(attributes, newAttributes);
    },
    save: props => {
      const {
        align,
        authorImgUrl,
        imgRadius,
        imgBorder,
        imgBorderColor,
        imgSize,
        text,
        authorTag,
        authorColor,
        authorSize,
        authorLetter,
        authorStyle,
        authorUpper,
        authorWeight,
        author,
        authorComTag,
        authorComColor,
        authorComSize,
        authorCom,
        quotSize,
        quotColor,
        quotOpacity,
        bodyColor,
        bodySize,
        bodyLine,
        bodyTop,
        bodyBottom,
        dashColor,
        urlCheck,
        urlText,
        urlTarget,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowPosition
      } = props.attributes;

      return (
        <div
          className={`${className}__wrap`}
          style={{
            boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
          }}
        >
          <div className={`${className}__container`}>
            <span className={`${className}__upper`}>
              <PremiumUpperQuote
                size={quotSize}
                color={quotColor}
                opacity={quotOpacity}
              />
            </span>
            <div
              className={`${className}__content`}
              style={{
                textAlign: align
              }}
            >
              <div className={`${className}__img_wrap`}>
                {authorImgUrl && (
                  <img
                    className={`${className}__img`}
                    src={`${authorImgUrl}`}
                    alt="Author"
                    style={{
                      borderWidth: imgBorder + "px",
                      borderRadius: imgRadius,
                      borderColor: imgBorderColor,
                      width: imgSize + "px",
                      height: imgSize + "px"
                    }}
                  />
                )}
                {!authorImgUrl && <DefaultImage className={className} />}
              </div>
              <div className={`${className}__text_wrap`}>
                <div>
                  <RichText.Content
                    tagName="p"
                    className={`${className}__text`}
                    value={text}
                    style={{
                      color: bodyColor,
                      fontSize: bodySize + "px",
                      lineHeight: bodyLine + "px",
                      marginTop: bodyTop + "px",
                      marginBottom: bodyBottom + "px"
                    }}
                  />
                </div>
              </div>
              <div className={`${className}__info`}>
                <RichText.Content
                  tagName={authorTag.toLowerCase()}
                  className={`${className}__author`}
                  value={author}
                  style={{
                    color: authorColor,
                    fontSize: authorSize + "px",
                    letterSpacing: authorLetter + "px",
                    textTransform: authorUpper ? "uppercase" : "none",
                    fontStyle: authorStyle,
                    fontWeight: authorWeight
                  }}
                />
                <span
                  className={`${className}__sep`}
                  style={{
                    color: dashColor
                  }}
                >
                  &nbsp;-&nbsp;
                </span>
                <div className={`${className}__link_wrap`}>
                  <RichText.Content
                    tagName={authorComTag.toLowerCase()}
                    className={`${className}__author_comp`}
                    value={authorCom}
                    style={{
                      color: authorComColor,
                      fontSize: authorComSize + "px"
                    }}
                  />
                  {urlCheck && (
                    <a href={urlText} target={urlTarget ? "_blank" : ""} />
                  )}
                </div>
              </div>
            </div>
            <span className={`${className}__lower`}>
              <PremiumLowerQuote
                color={quotColor}
                size={quotSize}
                opacity={quotOpacity}
              />
            </span>
          </div>
        </div>
      );
    }
  },
  {
    attributes: testimonialsAttrs_1_0_1,
    migrate: attributes => {
      let newAttributes = {
        shadowColor: "",
        shadowBlur: "",
        shadowHorizontal: "",
        shadowVertical: "",
        shadowPosition: ""
      };
      return Object.assign(attributes, newAttributes);
    },
    save: props => {
      const {
        align,
        authorImgUrl,
        imgRadius,
        imgBorder,
        imgBorderColor,
        imgSize,
        text,
        authorTag,
        authorColor,
        authorSize,
        authorLetter,
        authorStyle,
        authorUpper,
        authorWeight,
        author,
        authorComTag,
        authorComColor,
        authorComSize,
        authorCom,
        quotSize,
        quotColor,
        quotOpacity,
        bodyColor,
        bodySize,
        bodyLine,
        bodyTop,
        bodyBottom,
        dashColor,
        urlCheck,
        urlText,
        urlTarget
      } = props.attributes;

      return (
        <div className={`${className}__wrap`}>
          <div className={`${className}__container`}>
            <span className={`${className}__upper`}>
              <PremiumUpperQuote
                size={quotSize}
                color={quotColor}
                opacity={quotOpacity}
              />
            </span>
            <div
              className={`${className}__content`}
              style={{
                textAlign: align
              }}
            >
              <div className={`${className}__img_wrap`}>
                {authorImgUrl && (
                  <img
                    className={`${className}__img`}
                    src={`${authorImgUrl}`}
                    alt="Author"
                    style={{
                      borderWidth: imgBorder + "px",
                      borderRadius: imgRadius,
                      borderColor: imgBorderColor,
                      width: imgSize + "px",
                      height: imgSize + "px"
                    }}
                  />
                )}
                {!authorImgUrl && <DefaultImage className={className} />}
              </div>
              <div className={`${className}__text_wrap`}>
                <div>
                  <RichText.Content
                    tagName="p"
                    className={`${className}__text`}
                    value={text}
                    style={{
                      color: bodyColor,
                      fontSize: bodySize + "px",
                      lineHeight: bodyLine + "px",
                      marginTop: bodyTop + "px",
                      marginBottom: bodyBottom + "px"
                    }}
                  />
                </div>
              </div>
              <div className={`${className}__info`}>
                <RichText.Content
                  tagName={authorTag.toLowerCase()}
                  className={`${className}__author`}
                  value={author}
                  style={{
                    color: authorColor,
                    fontSize: authorSize + "px",
                    letterSpacing: authorLetter + "px",
                    textTransform: authorUpper ? "uppercase" : "none",
                    fontStyle: authorStyle,
                    fontWeight: authorWeight
                  }}
                />
                <span
                  className={`${className}__sep`}
                  style={{
                    color: dashColor
                  }}
                >
                  &nbsp;-&nbsp;
                </span>
                <div className={`${className}__link_wrap`}>
                  <RichText.Content
                    tagName={authorComTag.toLowerCase()}
                    className={`${className}__author_comp`}
                    value={authorCom}
                    style={{
                      color: authorComColor,
                      fontSize: authorComSize + "px"
                    }}
                  />
                  {urlCheck && (
                    <a href={urlText} target={urlTarget ? "_blank" : ""} />
                  )}
                </div>
              </div>
            </div>
            <span className={`${className}__lower`}>
              <PremiumLowerQuote
                color={quotColor}
                size={quotSize}
                opacity={quotOpacity}
              />
            </span>
          </div>
        </div>
      );
    }
  },
  {
    attributes: testimonialsAttrs_1_0_1,
    save: props => {
      const {
        align,
        authorImgUrl,
        imgRadius,
        imgBorder,
        imgBorderColor,
        imgSize,
        text,
        authorTag,
        authorColor,
        authorSize,
        author,
        authorComTag,
        authorComColor,
        authorComSize,
        authorCom,
        quotSize,
        quotColor,
        quotOpacity,
        bodyColor,
        bodySize,
        bodyLine,
        bodyTop,
        bodyBottom,
        dashColor,
        urlCheck,
        urlText,
        urlTarget
      } = props.attributes;

      return (
        <div className={`${className}__wrap`}>
          <div className={`${className}__container`}>
            <span className={`${className}__upper`}>
              <PremiumUpperQuote
                size={quotSize}
                color={quotColor}
                opacity={quotOpacity}
              />
            </span>
            <div
              className={`${className}__content`}
              style={{
                textAlign: align
              }}
            >
              <div className={`${className}__img_wrap`}>
                {authorImgUrl && (
                  <img
                    className={`${className}__img`}
                    src={`${authorImgUrl}`}
                    alt="Author"
                    style={{
                      borderWidth: imgBorder + "px",
                      borderRadius: imgRadius,
                      borderColor: imgBorderColor,
                      width: imgSize + "px",
                      height: imgSize + "px"
                    }}
                  />
                )}
                {!authorImgUrl && <DefaultImage className={className} />}
              </div>
              <div className={`${className}__text_wrap`}>
                <div>
                  <RichText.Content
                    tagName="p"
                    className={`${className}__text`}
                    value={text}
                    style={{
                      color: bodyColor,
                      fontSize: bodySize + "px",
                      lineHeight: bodyLine + "px",
                      marginTop: bodyTop + "px",
                      marginBottom: bodyBottom + "px"
                    }}
                  />
                </div>
              </div>
              <div className={`${className}__info`}>
                <RichText.Content
                  tagName={authorTag.toLowerCase()}
                  className={`${className}__author`}
                  value={author}
                  style={{
                    color: authorColor,
                    fontSize: authorSize + "px"
                  }}
                />
                <span
                  className={`${className}__sep`}
                  style={{
                    color: dashColor
                  }}
                >
                  &nbsp;-&nbsp;
                </span>
                <div className={`${className}__link_wrap`}>
                  <RichText.Content
                    tagName={authorComTag.toLowerCase()}
                    className={`${className}__author_comp`}
                    value={authorCom}
                    style={{
                      color: authorComColor,
                      fontSize: authorComSize + "px"
                    }}
                  />
                  {urlCheck && (
                    <a href={urlText} target={urlTarget ? "_blank" : ""} />
                  )}
                </div>
              </div>
            </div>
            <span className={`${className}__lower`}>
              <PremiumLowerQuote
                color={quotColor}
                size={quotSize}
                opacity={quotOpacity}
              />
            </span>
          </div>
        </div>
      );
    }
  }
];

export default deprecatedContent;
