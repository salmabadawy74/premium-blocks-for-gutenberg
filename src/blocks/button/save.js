import classnames from 'classnames'
import hexToRgba from "../../components/hex-to-rgba"

const { RichText } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        borderButton,
        btnText,
        btnSize,
        btnAlign,
        btnLink,
        btnTarget,
        effect,
        effectDir,
        slideColor,
        block_id,
        hideDesktop,
        classMigrate,
        hideTablet,
        hideMobile,
        textStyles,
        btnStyles,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
        borderWidth
    } = props.attributes;


    const mainClasses = classnames(className, 'premium-button');

    return (
        <div
            id={`${mainClasses}-wrap-${block_id}`}
            className={`${mainClasses}__wrap premium-button__${effect} premium-button__${effectDir} premium-button-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{ textAlign: btnAlign }}
        >
            <style
                dangerouslySetInnerHTML={{
                    __html: [
                        `#premium-button-wrap-${block_id} .premium-button:hover {`,
                        `color: ${btnStyles[0].textHoverColor} !important;`,
                        `border-color: ${btnStyles[0].borderHoverColor} !important;`,
                        "}",
                        `#premium-button-wrap-${block_id}.premium-button__none .premium-button:hover {`,
                        `background-color: ${btnStyles[0].backHoverColor} !important;`,
                        "}",
                        `#premium-button-wrap-${block_id}.premium-button__slide .premium-button::before,`,
                        `#premium-button-wrap-${block_id}.premium-button__shutter .premium-button::before,`,
                        `#premium-button-wrap-${block_id}.premium-button__radial .premium-button::before {`,
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
                    color: btnStyles[0].textColor,
                    backgroundColor: btnStyles[0].backColor
                        ? hexToRgba(btnStyles[0].backColor, btnStyles[0].backOpacity)
                        : "transparent",
                    fontFamily: textStyles[0].textFontFamily,
                    letterSpacing: textStyles[0].textLetter + "px",
                    textTransform: textStyles[0].textUpper ? "uppercase" : "none",
                    fontStyle: textStyles[0].textStyle,
                    lineHeight: textStyles[0].textLine + "px",
                    fontWeight: textStyles[0].textWeight,
                    textShadow: `${textStyles[0].shadowHorizontal}px ${textStyles[0].shadowVertical}px ${textStyles[0].shadowBlur}px ${textStyles[0].shadowColor}`,
                    boxShadow: `${btnStyles[0].btnShadowHorizontal}px ${btnStyles[0].btnShadowVertical}px ${btnStyles[0].btnShadowBlur}px ${btnStyles[0].btnShadowColor} ${btnStyles[0].btnShadowPosition}`,
                    padding: btnStyles[0].padding + btnStyles[0].paddingU,
                    borderStyle: btnStyles[0].borderType,
                    borderWidth: borderButton
                        ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                        : borderWidth + "px",
                    borderRadius: btnStyles[0].borderRadius + "px",
                    borderColor: btnStyles[0].borderColor
                }}
            />
        </div>
    );
};

export default save;
