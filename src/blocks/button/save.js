import classnames from "classnames";
import { generateCss, filterJsCss, gradientBackground } from "@pbg/helpers";
import {
    GenIcon,
    FaIco,
    Ico
} from "@pbg/components";
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
        backgroundOptions,
        iconType,
        icons
    } = props.attributes;

    const loadStyles = () => {
        const styles = {};

        styles[`.${blockId}.premium-button__wrap .premium-button:hover .premium-button-icon`] = {
            color: `${iconHoverColor}!important`,
        };
        styles[`.${blockId}.premium-button__wrap .premium-button .premium-button-icon`] = {
            color: `${iconColor}!important`,
        };
        styles[`.${blockId}.premium-button__wrap .premium-button:hover`] = {
            "background-color": `${btnStyles[0].backHoverColor}!important`,
            "border-color": `${btnStyles[0].borderHoverColor}!important`,
            color: `${btnStyles[0].textHoverColor}!important`,
        };
        styles[`.${blockId}.premium-button__wrap .premium-button:hover .premium-button-text-edit`] = {
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
                    style: filterJsCss({
                        boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                        borderStyle: border?.borderType,
                        borderColor: border?.borderColor,
                        ...gradientBackground(backgroundOptions),
                        color: btnStyles[0]?.textColor
                    })
                },
                [
                    <Fragment>
                        {showIcon && iconPosition == "before" && (
                            <GenIcon className={`premium-button-icon ${icon} ${iconType}`}
                                name={icon}
                                icon={('fa' === icon.substring(0, 2) ? FaIco[icon] : Ico[icon])}
                                strokeWidth={('fe' === icon.substring(0, 2) ? icons[0].width : undefined)}
                                style={filterJsCss({
                                    color: iconColor
                                })}
                            />
                        )}
                        <RichText.Content
                            className="premium-button-text-edit"
                            tagName="a"
                            value={btnText}
                            href={btnLink}
                            rel="noopener noreferrer"
                            target={btnTarget ? "_blank" : "_self"}
                            style={filterJsCss({
                                color: btnStyles[0]?.textColor,
                                fontStyle: typography?.fontStyle,
                                textDecoration: typography?.textDecoration,
                                textTransform: typography?.textTransform,
                                textShadow: `${textShadow?.horizontal}px ${textShadow?.vertical}px ${textShadow?.blur}px ${textShadow?.color}`,
                            })}
                        />
                        {showIcon && iconPosition == "after" && (
                            <GenIcon className={`premium-button-icon ${icon} ${iconType}`}
                                name={icon}
                                icon={('fa' === icon.substring(0, 2) ? FaIco[icon] : Ico[icon])}
                                strokeWidth={('fe' === icon.substring(0, 2) ? icons[0].width : undefined)}
                                style={filterJsCss({
                                    color: iconColor
                                })}
                            />
                        )}
                    </Fragment>,
                ]
            )}
        </div>
    );
};
export default save;
