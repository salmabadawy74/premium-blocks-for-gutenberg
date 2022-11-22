import classnames from "classnames";
import { generateCss, filterJsCss } from "@pbg/helpers";
const { RichText, useBlockProps } = wp.blockEditor;
const { Fragment } = wp.element;

const save = (props) => {
    const { className } = props;
    const {
        btnText,
        btnSize,
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
        boxShadow,
        blockId,
        showIcon,
        icon,
        iconPosition,
        iconColor,
        iconHoverColor,
        iconShadow,
    } = props.attributes;

    const loadStyles = () => {
        const styles = {};

        styles[`.${blockId}.premium-button__wrap:hover .premium-button-icon`] = {
            color: `${iconHoverColor}!important`,
        };
        styles[`.${blockId}.premium-button__wrap:hover .premium-button`] = {
            "background-color": `${btnStyles[0].backHoverColor}!important`,
            color: `${btnStyles[0].textHoverColor}!important`,
            "border-color": `${btnStyles[0].borderHoverColor}!important`,
        };
        styles[`.${blockId}.premium-button__wrap:hover .premium-button a`] = {
            color: `${btnStyles[0].textHoverColor}!important`,
        };

        styles[
            `.${blockId}.premium-button__slide .premium-button::before, .${blockId}.premium-button__shutter .premium-button::before, .${blockId}.premium-button__radial .premium-button::before`
        ] = {
            "background-color": `${slideColor}`,
        };

        return generateCss(styles);
    };

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-button__wrap ${blockId} premium-button__${effect} premium-button__${effectDir} `,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
        >
            <style>{loadStyles()}</style>
            {React.createElement(
                "div",
                {
                    className: `premium-button wp-block-button__link premium-button__${btnSize} premium-button__${iconPosition}`,
                    style: {
                        backgroundColor: btnStyles[0].backColor,
                        boxShadow: `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.color} ${boxShadow.position}`,
                        borderStyle: border?.borderType,
                        borderColor: border?.borderColor,
                    },
                },
                [
                    <Fragment>
                        {showIcon && iconPosition == "before" && (
                            <i
                                className={`premium-button-icon ${icon}`}
                                style={filterJsCss({
                                    color: iconColor,
                                    textShadow: `${iconShadow.horizontal}px ${iconShadow.vertical}px ${iconShadow.blur}px ${iconShadow.color}`,
                                })}
                            ></i>
                        )}
                        <RichText.Content
                            tagName="a"
                            value={btnText}
                            href={btnLink}
                            rel="noopener noreferrer"
                            target={btnTarget ? "_blank" : "_self"}
                            style={filterJsCss({
                                color: btnStyles[0].textColor,
                                fontStyle: typography?.fontStyle,
                                fontFamily: typography?.fontFamily,
                                fontWeight: typography?.fontWeight,
                                textDecoration: typography?.textDecoration,
                                textTransform: typography?.textTransform,
                                textShadow: `${textShadow?.horizontal}px ${textShadow?.vertical}px ${textShadow?.blur}px ${textShadow?.color}`,
                            })}
                        />
                        {showIcon && iconPosition == "after" && (
                            <i
                                className={`premium-button-icon ${icon}`}
                                style={filterJsCss({
                                    color: iconColor,
                                    textShadow: `${iconShadow.horizontal}px ${iconShadow.vertical}px ${iconShadow.blur}px ${iconShadow.color}`,
                                })}
                            ></i>
                        )}
                    </Fragment>,
                ]
            )}
        </div>
    );
};
export default save;
