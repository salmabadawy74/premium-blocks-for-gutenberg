const { __ } = wp.i18n;

const className = "premium-banner";

const { RichText } = wp.editor;

const deprecated_attributes = {
  imageID: {
    type: "number"
  },
  imageURL: {
    type: "string",
    source: "attribute",
    attribute: "src",
    selector: ".premium-banner__img"
  },
  title: {
    type: "array",
    source: "children",
    selector: ".premium-banner__title",
    default: __("Awesome Title")
  },
  titleTag: {
    type: "string",
    default: "H3"
  },
  desc: {
    type: "array",
    source: "children",
    selector: ".premium-banner__desc",
    default: __("Cool Description!!")
  },
  contentAlign: {
    type: "string",
    default: "left"
  },
  effect: {
    type: "string",
    default: "effect1"
  },
  hoverEffect: {
    type: "string",
    default: "none"
  },
  height: {
    type: "string",
    default: "default"
  },
  minHeight: {
    type: "number"
  },
  verAlign: {
    type: "string",
    default: "top"
  },
  hovered: {
    type: "boolean",
    default: false
  },
  responsive: {
    type: "boolean",
    default: false
  },
  background: {
    type: "string"
  },
  opacity: {
    type: "number",
    default: 50
  },
  borderType: {
    type: "string",
    default: "none"
  },
  borderWidth: {
    type: "number",
    default: "1"
  },
  borderRadius: {
    type: "number",
    default: "0"
  },
  borderColor: {
    type: "string"
  },
  titleColor: {
    type: "string"
  },
  titleSize: {
    type: "number",
    default: "20"
  },
  titleLine: {
    type: "number"
  },
  titleWeight: {
    type: "number"
  },
  titleBack: {
    type: "string"
  },
  shadowColor: {
    type: "string"
  },
  shadowBlur: {
    type: "number",
    default: "0"
  },
  shadowHorizontal: {
    type: "number",
    default: "0"
  },
  shadowVertical: {
    type: "number",
    default: "0"
  },
  descColor: {
    type: "string",
    default: "#000"
  },
  descSize: {
    type: "number",
    default: "20"
  },
  descLine: {
    type: "number"
  },
  descWeight: {
    type: "number"
  },
  urlCheck: {
    type: "boolean",
    default: false
  },
  target: {
    type: "boolean",
    default: false
  },
  url: {
    type: "string",
    source: "attribute",
    attribute: "href",
    selector: ".premium-banner__link"
  },
  sepColor: {
    type: "string"
  },
  id: {
    type: "string"
  }
};
const deprecatedContent = [
  {
    attributes: deprecated_attributes,
    save: props => {
      const {
        id,
        imageURL,
        title,
        titleTag,
        desc,
        contentAlign,
        effect,
        hoverEffect,
        height,
        minHeight,
        verAlign,
        hovered,
        responsive,
        background,
        opacity,
        borderType,
        borderWidth,
        borderRadius,
        borderColor,
        titleColor,
        titleBack,
        titleSize,
        titleWeight,
        titleLine,
        descColor,
        descSize,
        descWeight,
        descLine,
        urlCheck,
        url,
        target,
        sepColor
      } = props.attributes;
      return (
        <div
          id={`premium-banner-${id}`}
          className={`${className} ${className}__responsive_${responsive}`}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                `background: ${sepColor}`,
                "}",
                `#premium-banner-${id} .premium-banner__inner {`,
                `background: ${background}`,
                "}",
                `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                `opacity: ${opacity / 100} `,
                "}"
              ].join("\n")
            }}
          />
          <div
            className={`${className}__inner ${className}__min ${className}__${effect} ${className}__${hoverEffect} hover_${hovered}`}
            style={{
              border: borderType,
              borderWidth: borderWidth + "px",
              borderRadius: borderRadius + "px",
              borderColor: borderColor
            }}
          >
            <div
              className={`${className}__img_wrap ${className}__${height}`}
              style={{
                minHeight: minHeight,
                alignItems: verAlign
              }}
            >
              <img
                className={`${className}__img`}
                alt="Banner Image"
                src={imageURL}
              />
            </div>

            <div
              className={`${className}__content`}
              style={{
                background: "effect2" === effect ? titleBack : "transparent"
              }}
            >
              <div
                className={`${className}__title_wrap`}
                style={{
                  textAlign: contentAlign
                }}
              >
                <RichText.Content
                  tagName={titleTag.toLowerCase()}
                  className={`${className}__title`}
                  value={title}
                  style={{
                    color: titleColor,
                    fontSize: titleSize + "px",
                    fontWeight: titleWeight,
                    lineHeight: titleLine + "px"
                  }}
                />
              </div>
              <div
                className={`${className}__desc_wrap`}
                style={{
                  textAlign: contentAlign
                }}
              >
                <RichText.Content
                  tagName="p"
                  className={`${className}__desc`}
                  value={desc}
                  style={{
                    color: descColor,
                    fontSize: descSize + "px",
                    fontWeight: descWeight,
                    lineHeight: descLine + "px"
                  }}
                />
              </div>
            </div>
            {urlCheck && "" !== url && (
              <a
                className={`${className}__link`}
                href={url}
                target={target && "_blank"}
              />
            )}
          </div>
        </div>
      );
    }
  }
];
export default deprecatedContent;
