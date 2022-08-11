import classnames from 'classnames'
import { filterJsCss, gradientBackground, generateCss } from '../../components/HelperFunction'

const { RichText } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        blockId,
        iconImage,
        iconImgUrl,
        hoverEffect,
        iconChecked,
        iconPos,
        iconHPos,
        iconVPos,
        iconRadius,
        iconColor,
        iconBackColor,
        selectedIcon,
        titleChecked,
        titleText,
        descText,
        descChecked,
        btnChecked,
        btnEffect,
        effectDir,
        btnTarget,
        btnText,
        btnLink,
        btnHoverBorder,
        hideDesktop,
        hideTablet,
        hideMobile,
        titleStyles,
        descStyles,
        btnStyles,
        btnBorder,
        containerBorder,
        containerBackground,
        titleShadow,
        btnShadow,
        containerShadow,
        containerHoverShadow,
        titleTypography,
        descTypography,
        btnTypography,
        titleTag
    } = props.attributes;

    const mainClasses = classnames(className, 'premium-icon-box', {
        ' premium-desktop-hidden': hideDesktop,
        ' premium-tablet-hidden': hideTablet,
        ' premium-mobile-hidden': hideMobile,
    });

    const loadStyles = () => {
        const styles = {};
        styles[`.${blockId}:hover`] = {
            'box-shadow': `${containerHoverShadow.horizontal}px ${containerHoverShadow.vertical}px ${containerHoverShadow.blur}px ${containerHoverShadow.color} ${containerHoverShadow.position} !important`,
        };
        styles[`.${blockId}`] = {
            'box-shadow': `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position} !important`,
        };
        styles[`.${blockId} .premium-icon-box__btn:hover`] = {
            color: `${btnStyles[0].btnHoverColor} !important`,
            'border-color': `${btnHoverBorder} !important`
        };
        styles[`.${blockId} .premium-button__none .premium-icon-box__btn:hover`] = {
            'background-color': `${btnStyles[0].btnHoverBack} !important`,
        };
        styles[`.${blockId} .premium-button__slide .premium-button::before`] = {
            'background-color': `${btnStyles[0].btnHoverBack} !important`,
        }
        return generateCss(styles);

    }

    return (
        <div
            className={`${mainClasses} ${blockId} premium-icon-box-${iconPos} premium-icon-box-${iconHPos} `}
        >
            <style
                dangerouslySetInnerHTML={{
                    __html: loadStyles(),
                }}
            />
            <div
                className={`premium-icon-box-container`}
                style={filterJsCss({
                    borderStyle: containerBorder.borderType,
                    borderColor: containerBorder.borderColor,
                    ...gradientBackground(containerBackground),
                })}
            >
                {iconChecked && (
                    <div className={`premium-icon-box__icon_wrap premium-icon-box__icon_${iconVPos}`}>
                        {"icon" === iconImage && selectedIcon && (
                            <i
                                alt={`icon-box`}
                                className={`${selectedIcon} premium-icon-box__icon premium-icon__${hoverEffect}`}
                                style={filterJsCss({
                                    color: iconColor,
                                    backgroundColor: iconBackColor,
                                })}
                            />
                        )}
                        {"image" === iconImage && iconImgUrl && (
                            <img
                                className={`premium-icon-box__icon premium-icon__${hoverEffect}`}
                                src={`${iconImgUrl}`}
                                alt="Image Icon"
                                style={filterJsCss({
                                    borderRadius: iconRadius + "px"
                                })}
                            />
                        )}
                    </div>
                )}
                <div className={`premium-icon-box__content_wrap`}>
                    {titleChecked && titleText && (
                        <div
                            className={`premium-icon-box__title_wrap`}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`premium-icon-box__title`}
                                value={titleText}
                                style={filterJsCss({
                                    fontStyle: titleTypography?.fontStyle,
                                    fontFamily: titleTypography?.fontFamily,
                                    fontWeight: titleTypography?.fontWeight,
                                    textDecoration: titleTypography?.textDecoration,
                                    textTransform: titleTypography?.textTransform,
                                    color: titleStyles[0].titleColor,
                                    textShadow: `${titleShadow.horizontal || 0}px ${titleShadow.vertical || 0}px ${titleShadow.blur || 0}px ${titleShadow.color}`,
                                })}
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div className={`premium-icon-box__desc_wrap`}>
                            <RichText.Content
                                tagName="p"
                                className={`premium-icon-box__desc`}
                                value={descText}
                                style={filterJsCss({
                                    fontStyle: descTypography?.fontStyle,
                                    fontFamily: descTypography?.fontFamily,
                                    fontWeight: descTypography?.fontWeight,
                                    textDecoration: descTypography?.textDecoration,
                                    textTransform: descTypography?.textTransform,
                                    color: descStyles[0].descColor,
                                })}
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div className={`premium-icon-box__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}>
                            <RichText.Content
                                tagName="a"
                                className={`premium-icon-box__btn premium-button`}
                                href={btnLink}
                                rel="noopener noreferrer"
                                target={btnTarget ? "_blank" : "_self"}
                                value={btnText}
                                style={filterJsCss({
                                    fontStyle: btnTypography?.fontStyle,
                                    fontFamily: btnTypography?.fontFamily,
                                    fontWeight: btnTypography?.fontWeight,
                                    textDecoration: btnTypography?.textDecoration,
                                    textTransform: btnTypography?.textTransform,
                                    color: btnStyles[0].btnColor,
                                    backgroundColor: btnStyles[0].btnBack,
                                    borderStyle: btnBorder.borderType,
                                    borderColor: btnBorder.borderColor,
                                    boxShadow: `${btnShadow.horizontal || 0}px ${btnShadow.vertical || 0}px ${btnShadow.blur || 0}px ${btnShadow.color} ${btnShadow.position}`
                                })}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default save;