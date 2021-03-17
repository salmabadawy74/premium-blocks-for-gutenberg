import classnames from "classnames";
import hexToRgba from "hex-to-rgba";

const { RichText } = wp.blockEditor;

const save = ( props ) => {
    const { className } = props;

    const {
        block_id,
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
        textFontFamily,
        textWeight,
        textLine,
        textLetter,
        textStyle,
        backOpacity,
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
        btnShadowPosition,
        hideDesktop,
        hideTablet,
        hideMobile
    } = props.attributes;

    const mainClasses = classnames( className, "premium-button" );

    return (
        <div
            id={`${ mainClasses }-wrap-${ block_id }`}
            className={`${ mainClasses }__wrap premium-button__${ effect } premium-button__${ effectDir } premium-button-${ block_id } ${ hideDesktop } ${ hideTablet } ${ hideMobile }`}
            style={{ textAlign: btnAlign }}
        >
            <style
                dangerouslySetInnerHTML={{
                    __html: [
                        `#premium-button-wrap-${ block_id } .premium-button:hover {`,
                        `color: ${ textHoverColor } !important;`,
                        `border-color: ${ borderHoverColor } !important;`,
                        "}",
                        `#premium-button-wrap-${ block_id }.premium-button__none .premium-button:hover {`,
                        `background-color: ${ backHoverColor } !important;`,
                        "}",
                        `#premium-button-wrap-${ block_id }.premium-button__slide .premium-button::before,`,
                        `#premium-button-wrap-${ block_id }.premium-button__shutter .premium-button::before,`,
                        `#premium-button-wrap-${ block_id }.premium-button__radial .premium-button::before {`,
                        `background-color: ${ slideColor }`,
                        "}",
                    ].join( "\n" ),
                }}
            />
            <RichText.Content
                tagName="a"
                value={btnText}
                className={`premium-button premium-button__${ btnSize }`}
                href={btnLink}
                rel="noopener noreferrer"
                target={btnTarget ? "_blank" : "_self"}
                style={{
                    color: textColor,
                    backgroundColor: backColor
                        ? hexToRgba( backColor, backOpacity )
                        : "transparent",
                    fontFamily: textFontFamily,
                    letterSpacing: textLetter + "px",
                    textTransform: textUpper ? "uppercase" : "none",
                    fontStyle: textStyle,
                    lineHeight: textLine + "px",
                    fontWeight: textWeight,
                    textShadow: `${ shadowHorizontal }px ${ shadowVertical }px ${ shadowBlur }px ${ shadowColor }`,
                    boxShadow: `${ btnShadowHorizontal }px ${ btnShadowVertical }px ${ btnShadowBlur }px ${ btnShadowColor } ${ btnShadowPosition }`,
                    padding: padding + paddingU,
                    border: borderType,
                    borderWidth: borderWidth + "px",
                    borderRadius: borderRadius + "px",
                    borderColor: borderColor,
                }}
            />
        </div>
    );
};

export default save;
