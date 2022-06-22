import classnames from 'classnames'
import { gradientBackground, typographyCss } from '../../components/HelperFunction'

const { RichText } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        blockId,
        align,
        iconImage,
        iconImgUrl,
        hoverEffect,
        iconChecked,
        iconPos,
        iconHPos,
        iconVPos,
        iconSize,
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

    const mainClasses = classnames(className, 'premium-icon-box', blockId);

    return (
        <div
            className={`${mainClasses} ${blockId} premium-icon-box-${iconPos} premium-icon-box-${iconHPos} ${hideDesktop} ${hideTablet} ${hideMobile}`}
        >
            <style>
                {`
                     .${blockId}:hover {
                        box-shadow: ${containerHoverShadow.horizontal}px ${containerHoverShadow.vertical}px ${containerHoverShadow.blur}px ${containerHoverShadow.color} ${containerHoverShadow.position} !important;
                     }
                    .${blockId} {
                        box-shadow: ${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position} !important;
                     }
                     .${blockId} .premium-icon-box__btn:hover {
                        color: ${btnStyles[0].btnHoverColor} !important;
                        border-color: ${btnHoverBorder} !important;
                    }
                    .${blockId} .premium-button__none .premium-icon-box__btn:hover {
                        background-color: ${btnStyles[0].btnHoverBack} !important;
                    }
                   .${blockId} .premium-button__slide .premium-button::before {
                        background-color: ${btnStyles[0].btnHoverBack} !important;
                    }
                 `}
            </style>
            <div
                className={`premium-icon-box-container`}
                style={{
                    textAlign: align[props.deviceType],
                    borderStyle: containerBorder.borderType,
                    borderColor: containerBorder.borderColor,
                    ...gradientBackground(containerBackground),
                }}
            >
                {iconChecked && (
                    <div
                        className={`premium-icon-box__icon_wrap premium-icon-box__icon_${iconVPos}`}
                    >
                        {"icon" === iconImage && selectedIcon && (
                            <i
                                className={`${selectedIcon} premium-icon-box__icon premium-icon__${hoverEffect}`}
                                style={{
                                    color: iconColor,
                                    backgroundColor: iconBackColor,
                                    fontSize: (iconSize[props.deviceType] || 40) + iconSize.unit,
                                }}
                            />
                        )}
                        {"image" === iconImage && iconImgUrl && (
                            <img
                                className={`premium-icon-box__icon premium-icon__${hoverEffect}`}
                                src={`${iconImgUrl}`}
                                alt="Image Icon"
                                style={{
                                    width: (iconSize[props.deviceType] || 40) + iconSize.unit,
                                    height: (iconSize[props.deviceType] || 40) + iconSize.unit,
                                    borderRadius: iconRadius + "px"
                                }}
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
                                style={{
                                    ...typographyCss(titleTypography, props.deviceType),
                                    color: titleStyles[0].titleColor,
                                    textShadow: `${titleShadow.horizontal || 0}px ${titleShadow.vertical ||
                                        0}px ${titleShadow.blur || 0}px ${titleShadow.color}`,
                                }}
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`premium-icon-box__desc_wrap`}
                        >
                            <RichText.Content
                                tagName="p"
                                className={`premium-icon-box__desc`}
                                value={descText}
                                style={{
                                    ...typographyCss(descTypography, props.deviceType),
                                    color: descStyles[0].descColor,
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`premium-icon-box__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                        >
                            <RichText.Content
                                tagName="a"
                                className={`premium-icon-box__btn premium-button`}
                                href={btnLink}
                                rel="noopener noreferrer"
                                target={btnTarget ? "_blank" : "_self"}
                                value={btnText}
                                style={{
                                    ...typographyCss(btnTypography, props.deviceType),
                                    color: btnStyles[0].btnColor,
                                    backgroundColor: btnStyles[0].btnBack,
                                    borderStyle: btnBorder.borderType,
                                    borderColor: btnBorder.borderColor,
                                    boxShadow: `${btnShadow.horizontal || 0}px ${btnShadow.vertical ||
                                        0}px ${btnShadow.blur || 0}px ${btnShadow.color} ${btnShadow.position}`
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default save;