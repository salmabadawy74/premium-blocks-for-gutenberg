import { iconBox } from "../settings";
import PbgIcon from "../icons";
import edit from "./edit";

const className = "premium-icon-box";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const { RichText } = wp.editor;

const iconBoxAttrs = {
  id: {
    type: "string"
  },
  align: {
    type: "string",
    default: "center"
  },
  iconImage: {
    type: "string",
    default: "icon"
  },
  iconImgId: {
    type: "string"
  },
  iconImgUrl: {
    type: "string"
  },
  hoverEffect: {
    type: "string",
    default: "none"
  },
  iconChecked: {
    type: "boolean",
    default: true
  },
  iconSize: {
    type: "number",
    default: 50
  },
  iconRadius: {
    type: "number"
  },
  iconColor: {
    type: "string"
  },
  iconType: {
    type: "string",
    default: "dash"
  },
  selectedIcon: {
    type: "string",
    default: "dashicons dashicons-admin-site"
  },
  titleChecked: {
    type: "boolean",
    default: true
  },
  titleText: {
    type: "array",
    source: "children",
    selector: ".premium-icon-box__title",
    default: __("Awesome Title")
  },
  titleTag: {
    type: "string",
    default: "H2"
  },
  titleColor: {
    type: "string"
  },
  titleSize: {
    type: "number"
  },
  titleLine: {
    type: "number"
  },
  titleLetter: {
    type: "number"
  },
  titleStyle: {
    type: "string"
  },
  titleUpper: {
    type: "boolean"
  },
  titleWeight: {
    type: "number",
    default: 500
  },
  titleShadowColor: {
    type: "string"
  },
  titleShadowBlur: {
    type: "number",
    default: "0"
  },
  titleShadowHorizontal: {
    type: "number",
    default: "0"
  },
  titleShadowVertical: {
    type: "number",
    default: "0"
  },
  titleMarginT: {
    type: "number"
  },
  titleMarginB: {
    type: "number"
  },
  descText: {
    type: "array",
    source: "children",
    selector: ".premium-icon-box__desc",
    default:
      "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
  },
  descChecked: {
    type: "boolean",
    default: true
  },
  descColor: {
    type: "string"
  },
  descSize: {
    type: "number"
  },
  descLine: {
    type: "number"
  },
  descWeight: {
    type: "number",
    default: 500
  },
  descMarginT: {
    type: "number"
  },
  descMarginB: {
    type: "number"
  },
  btnChecked: {
    type: "boolean",
    default: true
  },
  btnEffect: {
    type: "string",
    default: "none"
  },
  effectDir: {
    type: "string",
    default: "top"
  },
  btnTarget: {
    type: "boolean",
    default: false
  },
  btnText: {
    type: "array",
    source: "children",
    selector: ".premium-icon-box__btn",
    default: __("Click Here")
  },
  btnLink: {
    type: "string",
    source: "attribute",
    attribute: "href",
    selector: ".premium-icon-box__btn"
  },
  btnColor: {
    type: "string"
  },
  btnHoverColor: {
    type: "string"
  },
  btnBack: {
    type: "string"
  },
  btnHoverBack: {
    type: "string"
  },
  btnHoverBorder: {
    type: "string"
  },
  btnSize: {
    type: "number"
  },
  btnLine: {
    type: "number"
  },
  btnLetter: {
    type: "number"
  },
  btnStyle: {
    type: "string"
  },
  btnUpper: {
    type: "boolean"
  },
  btnWeight: {
    type: "number",
    default: 500
  },
  btnBorderType: {
    type: "string",
    default: "none"
  },
  btnBorderWidth: {
    type: "number",
    default: "1"
  },
  btnBorderRadius: {
    type: "number"
  },
  btnBorderColor: {
    type: "string"
  },
  btnPadding: {
    type: "number"
  },
  btnMarginT: {
    type: "number"
  },
  btnMarginB: {
    type: "number"
  },
  btnShadowColor: {
    type: "string"
  },
  btnShadowBlur: {
    type: "number",
    default: "0"
  },
  btnShadowHorizontal: {
    type: "number",
    default: "0"
  },
  btnShadowVertical: {
    type: "number",
    default: "0"
  },
  btnShadowPosition: {
    type: "string",
    default: ""
  },
  imageID: {
    type: "string"
  },
  imageURL: {
    type: "string"
  },
  backColor: {
    type: "string"
  },
  backgroundRepeat: {
    type: "string",
    default: "no-repeat"
  },
  backgroundPosition: {
    type: "string",
    default: "top center"
  },
  backgroundSize: {
    type: "string",
    default: "auto"
  },
  fixed: {
    type: "boolean",
    default: false
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
    type: "number"
  },
  borderColor: {
    type: "string"
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
  shadowPosition: {
    type: "string",
    default: ""
  }
};

registerBlockType("premium/icon-box", {
  title: __("Icon Box"),
  icon: <PbgIcon icon="icon-box" />,
  category: "premium-blocks",
  attributes: iconBoxAttrs,
  supports: {
    inserter: iconBox
  },
  edit: edit,
  save: props => {
    const {
      id,
      align,
      iconType,
      iconImage,
      iconImgUrl,
      iconRadius,
      selectedIcon,
      iconChecked,
      hoverEffect,
      iconSize,
      iconColor,
      titleChecked,
      titleText,
      titleTag,
      titleColor,
      titleSize,
      titleLine,
      titleLetter,
      titleStyle,
      titleUpper,
      titleWeight,
      titleShadowBlur,
      titleShadowColor,
      titleShadowHorizontal,
      titleShadowVertical,
      titleMarginT,
      titleMarginB,
      descChecked,
      descText,
      descColor,
      descSize,
      descLine,
      descWeight,
      descMarginT,
      descMarginB,
      btnChecked,
      btnEffect,
      effectDir,
      btnText,
      btnTarget,
      btnLink,
      btnSize,
      btnStyle,
      btnUpper,
      btnWeight,
      btnLetter,
      btnColor,
      btnHoverColor,
      btnHoverBorder,
      btnBack,
      btnHoverBack,
      btnBorderWidth,
      btnBorderRadius,
      btnBorderColor,
      btnBorderType,
      btnPadding,
      btnMarginT,
      btnMarginB,
      btnShadowBlur,
      btnShadowColor,
      btnShadowHorizontal,
      btnShadowVertical,
      btnShadowPosition,
      backColor,
      imageURL,
      fixed,
      backgroundRepeat,
      backgroundPosition,
      backgroundSize,
      borderType,
      borderWidth,
      borderRadius,
      borderColor,
      marginT,
      marginR,
      marginB,
      marginL,
      paddingT,
      paddingR,
      paddingB,
      paddingL,
      shadowBlur,
      shadowColor,
      shadowHorizontal,
      shadowVertical,
      shadowPosition
    } = props.attributes;

    return (
      <div
        id={`${className}-${id}`}
        className={`${className}`}
        style={{
          textAlign: align,
          border: borderType,
          borderWidth: borderWidth + "px",
          borderRadius: borderRadius + "px",
          borderColor: borderColor,
          marginTop: marginT,
          marginRight: marginR,
          marginBottom: marginB,
          marginLeft: marginL,
          paddingTop: paddingT,
          paddingRight: paddingR,
          paddingBottom: paddingB,
          paddingLeft: paddingL,
          boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
          backgroundColor: backColor,
          backgroundImage: `url('${imageURL}')`,
          backgroundRepeat: backgroundRepeat,
          backgroundPosition: backgroundPosition,
          backgroundSize: backgroundSize,
          backgroundAttachment: fixed ? "fixed" : "unset"
        }}
      >
        {btnChecked && btnText && (
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                `color: ${btnHoverColor} !important;`,
                `border-color: ${btnHoverBorder} !important;`,
                "}",
                `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
                `background-color: ${btnHoverBack} !important;`,
                "}",
                `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
                `background-color: ${btnHoverBack} !important;`,
                "}"
              ].join("\n")
            }}
          />
        )}
        {iconChecked && (
          <div className={`${className}__icon_wrap`}>
            {"icon" === iconImage && selectedIcon && (
              <i
                className={`${selectedIcon} ${className}__icon premium-icon__${hoverEffect}`}
                style={{
                  color: iconColor,
                  fontSize: iconSize
                }}
              />
            )}
            {"image" === iconImage && iconImgUrl && (
              <img
                className={`${className}__icon premium-icon__${hoverEffect}`}
                src={`${iconImgUrl}`}
                alt="Image Icon"
                style={{
                  width: iconSize + "px",
                  height: iconSize + "px",
                  borderRadius: iconRadius + "px"
                }}
              />
            )}
          </div>
        )}
        {titleChecked && titleText && (
          <div
            className={`${className}__title_wrap`}
            style={{
              marginTop: titleMarginT,
              marginBottom: titleMarginB
            }}
          >
            <RichText.Content
              tagName={titleTag.toLowerCase()}
              className={`${className}__title`}
              value={titleText}
              style={{
                color: titleColor,
                fontSize: titleSize + "px",
                letterSpacing: titleLetter + "px",
                textTransform: titleUpper ? "uppercase" : "none",
                fontStyle: titleStyle,
                fontWeight: titleWeight,
                textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                lineHeight: titleLine + "px"
              }}
            />
          </div>
        )}
        {descChecked && descText && (
          <div
            className={`${className}__desc_wrap`}
            style={{
              marginTop: descMarginT,
              marginBottom: descMarginB
            }}
          >
            <RichText.Content
              tagName="p"
              className={`${className}__desc`}
              value={descText}
              style={{
                color: descColor,
                fontSize: descSize + "px",
                lineHeight: descLine + "px",
                fontWeight: descWeight
              }}
            />
          </div>
        )}
        {btnChecked && btnText && (
          <div
            className={`${className}__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
            style={{
              marginTop: btnMarginT,
              marginBottom: btnMarginB
            }}
          >
            <RichText.Content
              tagName="a"
              className={`${className}__btn premium-button`}
              href={btnLink}
              target={btnTarget ? "_blank" : "_self"}
              value={btnText}
              style={{
                color: btnColor,
                backgroundColor: btnBack,
                fontSize: btnSize + "px",
                letterSpacing: btnLetter + "px",
                textTransform: btnUpper ? "uppercase" : "none",
                fontStyle: btnStyle,
                fontWeight: btnWeight,
                border: btnBorderType,
                borderWidth: btnBorderWidth + "px",
                borderRadius: btnBorderRadius + "px",
                borderColor: btnBorderColor,
                padding: btnPadding + "px",
                boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`
              }}
            />
          </div>
        )}
      </div>
    );
  },
  deprecated: [
    {
      attributes: iconBoxAttrs,
      save: props => {
        const {
          id,
          align,
          iconType,
          iconImage,
          iconImgUrl,
          iconRadius,
          selectedIcon,
          iconChecked,
          hoverEffect,
          iconSize,
          iconColor,
          titleChecked,
          titleText,
          titleTag,
          titleColor,
          titleSize,
          titleLine,
          titleLetter,
          titleStyle,
          titleUpper,
          titleWeight,
          titleShadowBlur,
          titleShadowColor,
          titleShadowHorizontal,
          titleShadowVertical,
          titleMarginT,
          titleMarginB,
          descChecked,
          descText,
          descColor,
          descSize,
          descLine,
          descWeight,
          descMarginT,
          descMarginB,
          btnChecked,
          btnText,
          btnTarget,
          btnLink,
          btnSize,
          btnStyle,
          btnUpper,
          btnWeight,
          btnLetter,
          btnColor,
          btnHoverColor,
          btnHoverBorder,
          btnBack,
          btnHoverBack,
          btnBorderWidth,
          btnBorderRadius,
          btnBorderColor,
          btnBorderType,
          btnPadding,
          btnMarginT,
          btnMarginB,
          btnShadowBlur,
          btnShadowColor,
          btnShadowHorizontal,
          btnShadowVertical,
          btnShadowPosition,
          backColor,
          imageURL,
          fixed,
          backgroundRepeat,
          backgroundPosition,
          backgroundSize,
          borderType,
          borderWidth,
          borderRadius,
          borderColor,
          marginT,
          marginR,
          marginB,
          marginL,
          paddingT,
          paddingR,
          paddingB,
          paddingL,
          shadowBlur,
          shadowColor,
          shadowHorizontal,
          shadowVertical,
          shadowPosition
        } = props.attributes;

        return (
          <div
            id={`${className}-${id}`}
            className={`${className}`}
            style={{
              textAlign: align,
              border: borderType,
              borderWidth: borderWidth + "px",
              borderRadius: borderRadius + "px",
              borderColor: borderColor,
              marginTop: marginT,
              marginRight: marginR,
              marginBottom: marginB,
              marginLeft: marginL,
              paddingTop: paddingT,
              paddingRight: paddingR,
              paddingBottom: paddingB,
              paddingLeft: paddingL,
              boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
              backgroundColor: backColor,
              backgroundImage: `url('${imageURL}')`,
              backgroundRepeat: backgroundRepeat,
              backgroundPosition: backgroundPosition,
              backgroundSize: backgroundSize,
              backgroundAttachment: fixed ? "fixed" : "unset"
            }}
          >
            {btnChecked && btnText && (
              <style
                dangerouslySetInnerHTML={{
                  __html: [
                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                    `color: ${btnHoverColor} !important;`,
                    `background-color: ${btnHoverBack} !important;`,
                    `border-color: ${btnHoverBorder} !important;`,
                    "}"
                  ].join("\n")
                }}
              />
            )}
            {iconChecked && (
              <div className={`${className}__icon_wrap`}>
                {"icon" === iconImage && selectedIcon && (
                  <i
                    className={`${selectedIcon} ${className}__icon premium-icon__${hoverEffect}`}
                    style={{
                      color: iconColor,
                      fontSize: iconSize
                    }}
                  />
                )}
                {"image" === iconImage && iconImgUrl && (
                  <img
                    className={`${className}__icon premium-icon__${hoverEffect}`}
                    src={`${iconImgUrl}`}
                    alt="Image Icon"
                    style={{
                      width: iconSize + "px",
                      height: iconSize + "px",
                      borderRadius: iconRadius + "px"
                    }}
                  />
                )}
              </div>
            )}
            {titleChecked && titleText && (
              <div
                className={`${className}__title_wrap`}
                style={{
                  marginTop: titleMarginT,
                  marginBottom: titleMarginB
                }}
              >
                <RichText.Content
                  tagName={titleTag.toLowerCase()}
                  className={`${className}__title`}
                  value={titleText}
                  style={{
                    color: titleColor,
                    fontSize: titleSize + "px",
                    letterSpacing: titleLetter + "px",
                    textTransform: titleUpper ? "uppercase" : "none",
                    fontStyle: titleStyle,
                    fontWeight: titleWeight,
                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                    lineHeight: titleLine + "px"
                  }}
                />
              </div>
            )}
            {descChecked && descText && (
              <div
                className={`${className}__desc_wrap`}
                style={{
                  marginTop: descMarginT,
                  marginBottom: descMarginB
                }}
              >
                <RichText.Content
                  tagName="p"
                  className={`${className}__desc`}
                  value={descText}
                  style={{
                    color: descColor,
                    fontSize: descSize + "px",
                    lineHeight: descLine + "px",
                    fontWeight: descWeight
                  }}
                />
              </div>
            )}
            {btnChecked && btnText && (
              <div
                className={`${className}__btn_wrap`}
                style={{
                  marginTop: btnMarginT,
                  marginBottom: btnMarginB
                }}
              >
                <RichText.Content
                  tagName="a"
                  className={`${className}__btn`}
                  href={btnLink}
                  target={btnTarget ? "_blank" : "_self"}
                  value={btnText}
                  style={{
                    color: btnColor,
                    backgroundColor: btnBack,
                    fontSize: btnSize + "px",
                    letterSpacing: btnLetter + "px",
                    textTransform: btnUpper ? "uppercase" : "none",
                    fontStyle: btnStyle,
                    fontWeight: btnWeight,
                    border: btnBorderType,
                    borderWidth: btnBorderWidth + "px",
                    borderRadius: btnBorderRadius + "px",
                    borderColor: btnBorderColor,
                    padding: btnPadding + "px",
                    boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`
                  }}
                />
              </div>
            )}
          </div>
        );
      }
    }
  ]
});
