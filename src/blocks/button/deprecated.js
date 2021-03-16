//import { merge } from "lodash";

const className = "premium-button";

const { __ } = wp.i18n;

const { RichText } = wp.editor;

const buttonAttrs_1_0_0 = {
    btnText: {
        type: "string",
        default: __("Premium Button"),
    },
    btnSize: {
        type: "string",
        default: "md",
    },
    btnAlign: {
        type: "string",
        default: "center",
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-button",
    },
    btnTarget: {
        type: "boolean",
        default: false,
    },
    effect: {
        type: "string",
        default: "none",
    },
    effectDir: {
        type: "string",
        default: "top",
    },
    textColor: {
        type: "string",
    },
    textHoverColor: {
        type: "string",
    },
    backColor: {
        type: "string",
    },
    backHoverColor: {
        type: "string",
    },
    slideColor: {
        type: "string",
    },
    textSize: {
        type: "number",
    },
    textLetter: {
        type: "number",
    },
    textStyle: {
        type: "string",
    },
    textUpper: {
        type: "boolean",
    },
    textWeight: {
        type: "number",
        default: 500,
    },
    textLine: {
        type: "number",
    },
    borderType: {
        type: "string",
        default: "none",
    },
    borderWidth: {
        type: "number",
        default: "1",
    },
    borderRadius: {
        type: "number",
    },
    borderColor: {
        type: "string",
    },
    padding: {
        type: "number",
    },
    shadowColor: {
        type: "string",
    },
    shadowBlur: {
        type: "number",
        default: "0",
    },
    shadowHorizontal: {
        type: "number",
        default: "0",
    },
    shadowVertical: {
        type: "number",
        default: "0",
    },
    id: {
        type: "string",
    },
};

const newAttributes_1_0_1 = {
    btnShadowColor: {
        type: "string",
    },
    btnShadowBlur: {
        type: "number",
        default: "0",
    },
    btnShadowHorizontal: {
        type: "number",
        default: "0",
    },
    btnShadowVertical: {
        type: "number",
        default: "0",
    },
    btnShadowPosition: {
        type: "string",
        default: "",
    },
};

const buttonAttrs_1_0_1 = Object.assign(buttonAttrs_1_0_0, newAttributes_1_0_1);

const newAttributes_1_3_4 = {
    borderHoverColor: {
        type: "string",
    },
};

const buttonAttrs_1_3_4 = Object.assign(buttonAttrs_1_0_1, newAttributes_1_3_4);

const newAttributes_1_4_7 = {
    textFontFamily: {
        type: "string",
    },
};

const buttonAttrs_3_0 = {
    btnText: {
        type: "string",
        default: __("Premium Button")
    },
    btnSize: {
        type: "string",
        default: "md"
    },
    btnAlign: {
        type: "string",
        default: "center"
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-button"
    },
    btnTarget: {
        type: "boolean",
        default: false
    },
    effect: {
        type: "string",
        default: "none"
    },
    effectDir: {
        type: "string",
        default: "top"
    },
    textColor: {
        type: "string"
    },
    textHoverColor: {
        type: "string"
    },
    backColor: {
        type: "string"
    },
    backHoverColor: {
        type: "string"
    },
    slideColor: {
        type: "string"
    },
    textSize: {
        type: "number"
    },
    textFontFamily: {
        type: "string"
    },
    textLetter: {
        type: "number"
    },
    textStyle: {
        type: "string"
    },
    textUpper: {
        type: "boolean"
    },
    textWeight: {
        type: "number",
        default: 500
    },
    textLine: {
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
        type: "number"
    },
    borderColor: {
        type: "string"
    },
    borderHoverColor: {
        type: "string"
    },
    padding: {
        type: "number"
    },
    paddingU: {
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
    id: {
        type: "string"
    } 
}
const newAttributes_3_1 = {
  
    block_id: {
        type:"string"  
    },
    classMigrate: {
        type: 'boolean',
        default:false,
    },
    textSizeUnit: {
        type: "string",
      default:'px'  
    },
    textSizeTablet: {
        type:"number"  
    },
    textSizeMobile: {
        type:"number"  
      },
}


const buttonAttrs_1_4_7 = Object.assign( buttonAttrs_1_3_4, newAttributes_1_4_7 );

const buttonAttrs_3_1 = Object.assign( buttonAttrs_3_0, newAttributes_3_1 );

const buttonAttrs_1_5_7 = {
    btnText: {
        type: "string",
        default: __("Premium Button"),
    },
    btnSize: {
        type: "string",
        default: "md",
    },
    btnAlign: {
        type: "string",
        default: "center",
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-button",
    },
    btnTarget: {
        type: "boolean",
        default: false,
    },
    effect: {
        type: "string",
        default: "none",
    },
    effectDir: {
        type: "string",
        default: "top",
    },
    textColor: {
        type: "string",
    },
    textHoverColor: {
        type: "string",
    },
    backColor: {
        type: "string",
    },
    backHoverColor: {
        type: "string",
    },
    slideColor: {
        type: "string",
    },
    textSize: {
        type: "number",
    },
    textFontFamily: {
        type: "string",
    },
    textLetter: {
        type: "number",
    },
    textStyle: {
        type: "string",
    },
    textUpper: {
        type: "boolean",
    },
    textWeight: {
        type: "number",
        default: 500,
    },
    textLine: {
        type: "number",
    },
    borderType: {
        type: "string",
        default: "none",
    },
    borderWidth: {
        type: "number",
        default: "1",
    },
    borderRadius: {
        type: "number",
    },
    borderColor: {
        type: "string",
    },
    borderHoverColor: {
        type: "string",
    },
    padding: {
        type: "number",
    },
    paddingU: {
        type: "string",
    },
    shadowColor: {
        type: "string",
    },
    shadowBlur: {
        type: "number",
        default: "0",
    },
    shadowHorizontal: {
        type: "number",
        default: "0",
    },
    shadowVertical: {
        type: "number",
        default: "0",
    },
    btnShadowColor: {
        type: "string",
    },
    btnShadowBlur: {
        type: "number",
        default: "0",
    },
    btnShadowHorizontal: {
        type: "number",
        default: "0",
    },
    btnShadowVertical: {
        type: "number",
        default: "0",
    },
    btnShadowPosition: {
        type: "string",
        default: "",
    },
    id: {
        type: "string",
    },
};

const newAttributes_1_5_8 = {
    backOpacity: {
        type: "number",
        default: "1",
    },
    classMigrate: {
        type: "boolean",
        default:false
    },
    block_id: {
        type:"string"
    },
    textSizeUnit: {
        type: "string",
        default:"px"
    },
    textSizeTablet: {
        type:"number"
    },
    textSizeMobile: {
        type:"number"
    },
    hideDesktop: {
        type: 'boolean',
        default:false
    },
    hideTablet: {
        type: 'boolean',
        default:false
    },
    hideMobile: {
        type: 'boolean',
        default:false
    }
};

const buttonAttrs_1_5_8 = Object.assign(buttonAttrs_1_5_7, newAttributes_1_5_8);

const deprecatedContent = [
    {
        attributes: buttonAttrs_1_5_8,
        migrate: (attributes) => {
            let newAttributes = {
                backOpacity: "",
                classMigrate: false,
                block_id: "",
                textSizeUnit: "px",
                textSizeTablet: '',
                textSizeMobile: '',
                hideDesktop: false,
                hideTablet: false,
                hideMobile:false
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                btnText,
                btnSize,
                btnAlign,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                textColor,
                textHoverColor,
                backColor,
                backHoverColor,
                slideColor,
                textSize,
                textFontFamily,
                textWeight,
                textLine,
                textLetter,
                textStyle,
                textUpper,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                borderHoverColor,
                padding,
                paddingU,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition
            } = props.attributes;
  
            return (
                <div
                    id={`${className}-wrap-${id}`}
                    className={`${className}__wrap premium-button__${effect} premium-button__${effectDir}`}
                    style={{ textAlign: btnAlign }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-button-wrap-${id} .premium-button:hover {`,
                                `color: ${textHoverColor} !important;`,
                                `border-color: ${borderHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
                                `background-color: ${backHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
                                `background-color: ${slideColor}`,
                                "}"
                            ].join("\n")
                        }}
                    />
                    <RichText.Content
                        tagName="a"
                        value={btnText}
                        className={`premium-button premium-button__${btnSize}`}
                        href={btnLink}
                        rel="noopener noreferrer"
                        target={btnTarget ? "_blank" : "_self"}
                        style={{
                            color: textColor,
                            backgroundColor: backColor,
                            fontSize: textSize + "px",
                            fontFamily: textFontFamily,
                            letterSpacing: textLetter + "px",
                            textTransform: textUpper ? "uppercase" : "none",
                            fontStyle: textStyle,
                            lineHeight: textLine + "px",
                            fontWeight: textWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                            boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                            padding: padding + paddingU,
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor
                        }}
                    />
                </div>
            );
        }
    },
    {
        attributes: buttonAttrs_1_4_7,
        migrate: (attributes) => {
            return Object.assign(attributes, { paddingU: "" });
        },
        save: (props) => {
            const {
                id,
                btnText,
                btnSize,
                btnAlign,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                textColor,
                textHoverColor,
                backColor,
                backHoverColor,
                slideColor,
                textSize,
                textFontFamily,
                textWeight,
                textLine,
                textLetter,
                textStyle,
                textUpper,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                borderHoverColor,
                padding,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
            } = props.attributes;
            return (
                <div
                    id={`${className}-wrap-${id}`}
                    className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
                    style={{ textAlign: btnAlign }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-button-wrap-${id} .premium-button:hover {`,
                                `color: ${textHoverColor} !important;`,
                                `border-color: ${borderHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
                                `background-color: ${backHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
                                `background-color: ${slideColor}`,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <RichText.Content
                        tagName="a"
                        value={btnText}
                        className={`${className} ${className}__${btnSize}`}
                        href={btnLink}
                        rel="noopener noreferrer"
                        target={btnTarget ? "_blank" : "_self"}
                        style={{
                            color: textColor,
                            backgroundColor: backColor,
                            fontSize: textSize + "px",
                            fontFamily: textFontFamily,
                            letterSpacing: textLetter + "px",
                            textTransform: textUpper ? "uppercase" : "none",
                            fontStyle: textStyle,
                            lineHeight: textLine + "px",
                            fontWeight: textWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                            boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                            padding: padding + "px",
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    />
                </div>
            );
        },
    },
    {
        attributes: buttonAttrs_1_4_7,
        save: (props) => {
            const {
                id,
                btnText,
                btnSize,
                btnAlign,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                textColor,
                textHoverColor,
                backColor,
                backHoverColor,
                slideColor,
                textSize,
                textFontFamily,
                textWeight,
                textLine,
                textLetter,
                textStyle,
                textUpper,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                borderHoverColor,
                padding,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
            } = props.attributes;
            return (
                <div
                    id={`${className}-wrap-${id}`}
                    className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
                    style={{ textAlign: btnAlign }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-button-wrap-${id} .premium-button:hover {`,
                                `color: ${textHoverColor} !important;`,
                                `border-color: ${borderHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
                                `background-color: ${backHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
                                `background-color: ${slideColor}`,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <RichText.Content
                        tagName="a"
                        value={btnText}
                        className={`${className} ${className}__${btnSize}`}
                        href={btnLink}
                        target={btnTarget ? "_blank" : "_self"}
                        style={{
                            color: textColor,
                            backgroundColor: backColor,
                            fontSize: textSize + "px",
                            fontFamily: textFontFamily,
                            letterSpacing: textLetter + "px",
                            textTransform: textUpper ? "uppercase" : "none",
                            fontStyle: textStyle,
                            lineHeight: textLine + "px",
                            fontWeight: textWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                            boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                            padding: padding + "px",
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    />
                </div>
            );
        },
    },
    {
        attributes: buttonAttrs_1_3_4,
        migrate: (attributes) => {
            return Object.assign(attributes, { textFontFamily: "" });
        },
        save: (props) => {
            const {
                id,
                btnText,
                btnSize,
                btnAlign,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                textColor,
                textHoverColor,
                backColor,
                backHoverColor,
                slideColor,
                textSize,
                textWeight,
                textLine,
                textLetter,
                textStyle,
                textUpper,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                borderHoverColor,
                padding,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
            } = props.attributes;
            return (
                <div
                    id={`${className}-wrap-${id}`}
                    className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
                    style={{ textAlign: btnAlign }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-button-wrap-${id} .premium-button:hover {`,
                                `color: ${textHoverColor} !important;`,
                                `border-color: ${borderHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
                                `background-color: ${backHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
                                `background-color: ${slideColor}`,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <RichText.Content
                        tagName="a"
                        value={btnText}
                        className={`${className} ${className}__${btnSize}`}
                        href={btnLink}
                        target={btnTarget ? "_blank" : "_self"}
                        style={{
                            color: textColor,
                            backgroundColor: backColor,
                            fontSize: textSize + "px",
                            letterSpacing: textLetter + "px",
                            textTransform: textUpper ? "uppercase" : "none",
                            fontStyle: textStyle,
                            lineHeight: textLine + "px",
                            fontWeight: textWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                            boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                            padding: padding + "px",
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    />
                </div>
            );
        },
    },
    {
        attributes: buttonAttrs_1_0_1,
        migrate: (attributes) => {
            return Object.assign(attributes, { borderHoverColor: "" });
        },
        save: (props) => {
            const {
                id,
                btnText,
                btnSize,
                btnAlign,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                textColor,
                textHoverColor,
                backColor,
                backHoverColor,
                slideColor,
                textSize,
                textWeight,
                textLine,
                textLetter,
                textStyle,
                textUpper,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                padding,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
            } = props.attributes;
            return (
                <div
                    id={`${className}-wrap-${id}`}
                    className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
                    style={{ textAlign: btnAlign }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-button-wrap-${id} .premium-button:hover {`,
                                `color: ${textHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
                                `background-color: ${backHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
                                `background-color: ${slideColor}`,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <RichText.Content
                        tagName="a"
                        value={btnText}
                        className={`${className} ${className}__${btnSize}`}
                        href={btnLink}
                        target={btnTarget ? "_blank" : "_self"}
                        style={{
                            color: textColor,
                            backgroundColor: backColor,
                            fontSize: textSize + "px",
                            letterSpacing: textLetter + "px",
                            textTransform: textUpper ? "uppercase" : "none",
                            fontStyle: textStyle,
                            lineHeight: textLine + "px",
                            fontWeight: textWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                            boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                            padding: padding + "px",
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    />
                </div>
            );
        },
    },
    {
        attributes: buttonAttrs_1_0_0,
        migrate: (attributes) => {
            let newAttributes = {
                btnShadowColor: "",
                btnShadowBlur: "0",
                btnShadowHorizontal: "0",
                btnShadowVertical: "0",
                btnShadowPosition: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                btnText,
                btnSize,
                btnAlign,
                btnLink,
                btnTarget,
                effect,
                effectDir,
                textColor,
                textHoverColor,
                backColor,
                backHoverColor,
                slideColor,
                textSize,
                textWeight,
                textLine,
                textLetter,
                textStyle,
                textUpper,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                padding,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
            } = props.attributes;
            return (
                <div
                    id={`${className}-wrap-${id}`}
                    className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
                    style={{ textAlign: btnAlign }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-button-wrap-${id} .premium-button:hover {`,
                                `color: ${textHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
                                `background-color: ${backHoverColor} !important;`,
                                "}",
                                `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
                                `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
                                `background-color: ${slideColor}`,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <RichText.Content
                        tagName="a"
                        value={btnText}
                        className={`${className} ${className}__${btnSize}`}
                        href={btnLink}
                        target={btnTarget ? "_blank" : "_self"}
                        style={{
                            color: textColor,
                            backgroundColor: backColor,
                            fontSize: textSize + "px",
                            letterSpacing: textLetter + "px",
                            textTransform: textUpper ? "uppercase" : "none",
                            fontStyle: textStyle,
                            lineHeight: textLine + "px",
                            fontWeight: textWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                            padding: padding + "px",
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    />
                </div>
            );
        },
    },
];

export default deprecatedContent;
