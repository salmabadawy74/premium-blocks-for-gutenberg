const className = "premium-icon";

const deprecated_attributes_1_3_1 = {
  iconType: {
    type: "string",
    default: "dash"
  },
  selectedIcon: {
    type: "string",
    default: "dashicons dashicons-admin-site"
  },
  align: {
    type: "string",
    default: "center"
  },
  hoverEffect: {
    type: "string",
    default: "none"
  },
  iconSize: {
    type: "number",
    default: 50
  },
  iconColor: {
    type: "string",
    default: "#6ec1e4"
  },
  iconBack: {
    type: "string"
  },
  padding: {
    type: "string",
    default: "up"
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
  paddingT: {
    type: "number"
  },
  paddingR: {
    type: "number"
  },
  paddingB: {
    type: "number"
  },
  paddingL: {
    type: "number"
  },
  margin: {
    type: "string",
    default: "up"
  },
  marginT: {
    type: "number"
  },
  marginR: {
    type: "number"
  },
  marginB: {
    type: "number"
  },
  marginL: {
    type: "number"
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
    default: 100
  },
  borderColor: {
    type: "string"
  },
  background: {
    type: "string"
  },
  wrapBorderType: {
    type: "string",
    default: "none"
  },
  wrapBorderWidth: {
    type: "number",
    default: "1"
  },
  wrapBorderRadius: {
    type: "number"
  },
  wrapBorderColor: {
    type: "string"
  },
  wrapPadding: {
    type: "string",
    default: "up"
  },
  wrapShadowColor: {
    type: "string"
  },
  wrapShadowBlur: {
    type: "number",
    default: "0"
  },
  wrapShadowHorizontal: {
    type: "number",
    default: "0"
  },
  wrapShadowVertical: {
    type: "number",
    default: "0"
  },
  wrapShadowPosition: {
    type: "string",
    default: ""
  },
  wrapPaddingT: {
    type: "number"
  },
  wrapPaddingR: {
    type: "number"
  },
  wrapPaddingB: {
    type: "number"
  },
  wrapPaddingL: {
    type: "number"
  },
  wrapMargin: {
    type: "string",
    default: "up"
  },
  wrapMarginT: {
    type: "number"
  },
  wrapMarginR: {
    type: "number"
  },
  wrapMarginB: {
    type: "number"
  },
  wrapMarginL: {
    type: "number"
  },
  urlCheck: {
    type: "boolean"
  },
  link: {
    type: "string"
  },
  target: {
    type: "boolean"
  }
};

const deprecatedContent = [
  {
    attributes: deprecated_attributes_1_3_1,
    save: props => {
      const {
        selectedIcon,
        align,
        hoverEffect,
        iconSize,
        iconColor,
        iconType,
        iconBack,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        marginT,
        marginR,
        marginB,
        marginL,
        borderType,
        borderWidth,
        borderRadius,
        borderColor,
        background,
        wrapBorderType,
        wrapBorderWidth,
        wrapBorderRadius,
        wrapBorderColor,
        wrapPaddingT,
        wrapPaddingR,
        wrapPaddingB,
        wrapPaddingL,
        wrapMarginT,
        wrapMarginR,
        wrapMarginB,
        wrapMarginL,
        urlCheck,
        link,
        target
      } = props.attributes;

      return (
        <div
          className={`${className}__container`}
          style={{
            textAlign: align,
            backgroundColor: background,
            border: wrapBorderType,
            borderWidth: wrapBorderWidth + "px",
            borderRadius: wrapBorderRadius + "px",
            borderColor: wrapBorderColor,
            paddingTop: wrapPaddingT,
            paddingRight: wrapPaddingR,
            paddingBottom: wrapPaddingB,
            paddingLeft: wrapPaddingL,
            marginTop: wrapMarginT,
            marginRight: wrapMarginR,
            marginBottom: wrapMarginB,
            marginLeft: wrapMarginL
          }}
        >
          <a
            className={`${className}__link`}
            href={urlCheck && link}
            target={target ? "_blank" : "_self"}
          >
            <i
              className={`${className} ${selectedIcon} ${className}__${hoverEffect}`}
              style={{
                color: iconColor,
                backgroundColor: iconBack,
                fontSize: iconSize,
                paddingTop: paddingT,
                paddingRight: paddingR,
                paddingBottom: paddingB,
                paddingLeft: paddingL,
                marginTop: marginT,
                marginRight: marginR,
                marginBottom: marginB,
                marginLeft: marginL,
                border: borderType,
                borderWidth: borderWidth + "px",
                borderRadius: borderRadius + "px",
                borderColor: borderColor,
                textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`
              }}
            />
          </a>
        </div>
      );
    }
  }
];

export default deprecatedContent;
