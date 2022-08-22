import classnames from 'classnames'
import { generateCss, filterJsCss } from '../../components/HelperFunction';
const { RichText, useBlockProps } = wp.blockEditor;

const save = props => {
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
        blockId
    } = props.attributes;

    const loadStyles = () => {
        const styles = {};

        styles[`.${blockId} .premium-button:hover`] = {
            'color': `${btnStyles[0].textHoverColor}!important`,
            'border-color': `${btnStyles[0].borderHoverColor}!important`
        };
        styles[`.${blockId}.premium-button__none .premium-button:hover`] = {
            'background-color': `${btnStyles[0].backHoverColor}!important`
        };
        styles[`.${blockId}.premium-button__slide .premium-button::before, .${blockId}.premium-button__shutter .premium-button::before, .${blockId}.premium-button__radial .premium-button::before`] = {
            'background-color': `${slideColor}`,
        };

        return generateCss(styles);
    }

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-button__wrap ${blockId} premium-button__${effect} premium-button__${effectDir} premium-button-${block_id}`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
        >
            <style>{loadStyles()}</style>
            <RichText.Content
                tagName="a"
                value={btnText}
                className={`premium-button premium-button__${btnSize}`}
                href={btnLink}
                rel="noopener noreferrer"
                target={btnTarget ? "_blank" : "_self"}
                style={filterJsCss({
                    color: btnStyles[0].textColor,
                    backgroundColor: btnStyles[0].backColor,
                    fontStyle: typography?.fontStyle,
                    fontFamily: typography?.fontFamily,
                    fontWeight: typography?.fontWeight,
                    textDecoration: typography?.textDecoration,
                    textTransform: typography?.textTransform,
                    textShadow: `${textShadow?.horizontal}px ${textShadow?.vertical}px ${textShadow?.blur}px ${textShadow?.color}`,
                    boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                    borderStyle: border?.borderType,
                    borderColor: border?.borderColor,
                })}
            />
        </div>
    );
};
export default save;