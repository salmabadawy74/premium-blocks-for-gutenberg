import classnames from 'classnames'
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
        hideTablet,
        hideMobile,
        btnStyles,
        border,
        typography,
        textShadow,
        boxShadow
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
                    backgroundColor: btnStyles[0].backColor,
                    fontStyle: typography?.fontStyle,
                    fontFamily: typography?.fontFamily,
                    fontWeight: typography?.fontWeight,
                    letterSpacing: typography?.letterSpacing,
                    textDecoration: typography?.textDecoration,
                    textTransform: typography?.textTransform,
                    lineHeight: `${typography?.lineHeight}px`,
                    textShadow: `${textShadow?.horizontal}px ${textShadow?.vertical}px ${textShadow?.blur}px ${textShadow?.color}`,
                    boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                    borderStyle: border?.borderType,
                    borderColor: border?.borderColor,
                }}
            />
        </div>
    );
};
export default save;
