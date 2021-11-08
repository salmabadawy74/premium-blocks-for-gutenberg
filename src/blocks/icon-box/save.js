import classnames from 'classnames'
import hexToRgba from 'hex-to-rgba'

const { RichText } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        block_id,
        borderIconBox,
        btnBorderIconBox,
        align,
        iconImage,
        iconImgId,
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
        classMigrate,
        hideDesktop,
        hideTablet,
        hideMobile,
        iconOpacity,
        titleStyles,
        descStyles,
        btnStyles,
        containerStyles
    } = props.attributes;

    const mainClasses = classnames(className, 'premium-icon-box');

    return (
        <div
            id={`premium-icon-box-${block_id}`}
            className={`${mainClasses} premium-icon-box-${iconPos} premium-icon-box-${iconHPos} premium-icon-box-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                textAlign: align,
                borderStyle: containerStyles[0].borderType,
                borderWidth: borderIconBox
                    ? `${containerStyles[0].borderTop}px ${containerStyles[0].borderRight}px ${containerStyles[0].borderBottom}px ${containerStyles[0].borderLeft}px`
                    : containerStyles[0].borderWidth + "px",
                borderRadius: containerStyles[0].borderRadius + "px",
                borderColor: containerStyles[0].borderColor,
                marginTop: containerStyles[0].marginT,
                marginRight: containerStyles[0].marginR,
                marginBottom: containerStyles[0].marginB,
                marginLeft: containerStyles[0].marginL,
                paddingTop: containerStyles[0].paddingT + containerStyles[0].paddingU,
                paddingRight: containerStyles[0].paddingR + containerStyles[0].paddingU,
                paddingBottom: containerStyles[0].paddingB + containerStyles[0].paddingU,
                paddingLeft: containerStyles[0].paddingL + containerStyles[0].paddingU,
                boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                backgroundColor: containerStyles[0].backColor
                    ? hexToRgba(containerStyles[0].backColor, containerStyles[0].backOpacity)
                    : "transparent",
                backgroundImage: containerStyles[0].imageURL ? `url('${containerStyles[0].imageURL}')` : 'none',
                backgroundRepeat: containerStyles[0].backgroundRepeat,
                backgroundPosition: containerStyles[0].backgroundPosition,
                backgroundSize: containerStyles[0].backgroundSize,
                backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset"
            }}
        >
            {btnChecked && btnText && (
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `#premium-icon-box-${block_id}:hover {`,
                            `box-shadow: ${containerStyles[0].hoverShadowHorizontal}px ${containerStyles[0].hoverShadowVertical}px ${containerStyles[0].hoverShadowBlur}px ${containerStyles[0].hoverShadowColor} ${containerStyles[0].hoverShadowPosition} !important`,
                            "}",
                            `#premium-icon-box-${block_id} .premium-icon-box__btn:hover {`,
                            `color: ${btnStyles[0].btnHoverColor} !important;`,
                            `border-color: ${btnHoverBorder} !important;`,
                            "}",
                            `#premium-icon-box-${block_id} .premium-button__none .premium-icon-box__btn:hover {`,
                            `background-color: ${btnStyles[0].btnHoverBack} !important;`,
                            "}",
                            `#premium-icon-box-${block_id} .premium-button__slide .premium-button::before {`,
                            `background-color: ${btnStyles[0].btnHoverBack} !important;`,
                            "}"
                        ].join("\n")
                    }}
                />
            )}
            {iconChecked && (
                <div
                    className={`premium-icon-box__icon_wrap premium-icon-box__icon_${iconVPos}`}
                >
                    {"icon" === iconImage && selectedIcon && (
                        <i
                            className={`${selectedIcon} premium-icon-box__icon premium-icon__${hoverEffect}`}
                            style={{
                                color: iconColor,
                                backgroundColor: iconBackColor
                                    ? hexToRgba(iconBackColor, iconOpacity)
                                    : "transparent",
                                fontSize: iconSize,
                            }}
                        />
                    )}
                    {"image" === iconImage && iconImgUrl && (
                        <img
                            className={`premium-icon-box__icon premium-icon__${hoverEffect}`}
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
            <div className={`premium-icon-box__content_wrap`}>
                {titleChecked && titleText && (
                    <div
                        className={`premium-icon-box__title_wrap`}
                        style={{
                            marginTop: titleStyles[0].titleMarginT,
                            marginBottom: titleStyles[0].titleMarginB
                        }}
                    >
                        <RichText.Content
                            tagName={titleTag.toLowerCase()}
                            className={`premium-icon-box__title`}
                            value={titleText}
                            style={{
                                color: titleStyles[0].titleColor,
                                fontFamily: titleStyles[0].titleFont,
                                letterSpacing: titleStyles[0].titleLetter + "px",
                                textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                fontStyle: titleStyles[0].titleStyle,
                                fontWeight: titleStyles[0].titleWeight,
                                textShadow: `${titleStyles[0].titleShadowHorizontal}px ${titleStyles[0].titleShadowVertical}px ${titleStyles[0].titleShadowBlur}px ${titleStyles[0].titleShadowColor}`,
                                lineHeight: titleStyles[0].titleLine + "px"
                            }}
                        />
                    </div>
                )}
                {descChecked && descText && (
                    <div
                        className={`premium-icon-box__desc_wrap`}
                        style={{
                            marginTop: descStyles[0].descMarginT,
                            marginBottom: descStyles[0].descMarginB
                        }}
                    >
                        <RichText.Content
                            tagName="p"
                            className={`premium-icon-box__desc`}
                            value={descText}
                            style={{
                                color: descStyles[0].descColor,
                                fontFamily: descStyles[0].descFont,
                                lineHeight: descStyles[0].descLine + "px",
                                fontWeight: descStyles[0].descWeight
                            }}
                        />
                    </div>
                )}
                {btnChecked && btnText && (
                    <div
                        className={`premium-icon-box__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                        style={{
                            marginTop: btnStyles[0].btnMarginT,
                            marginBottom: btnStyles[0].btnMarginB
                        }}
                    >
                        <RichText.Content
                            tagName="a"
                            className={`premium-icon-box__btn premium-button`}
                            href={btnLink}
                            rel="noopener noreferrer"
                            target={btnTarget ? "_blank" : "_self"}
                            value={btnText}
                            style={{
                                color: btnStyles[0].btnColor,
                                backgroundColor: btnStyles[0].btnBack
                                    ? hexToRgba(btnStyles[0].btnBack, btnStyles[0].btnOpacity)
                                    : "transparent",
                                letterSpacing: btnStyles[0].btnLetter + "px",
                                textTransform: btnStyles[0].btnUpper ? "uppercase" : "none",
                                fontStyle: btnStyles[0].btnStyle,
                                fontWeight: btnStyles[0].btnWeight,
                                borderStyle: btnStyles[0].btnBorderType,
                                borderWidth: btnBorderIconBox
                                    ? `${btnStyles[0].btnBorderTop}px ${btnStyles[0].btnBorderRight}px ${btnStyles[0].btnBorderBottom}px ${btnStyles[0].btnBorderLeft}px`
                                    : btnStyles[0].btnBorderWidth + "px",
                                borderRadius: btnStyles[0].btnBorderRadius + "px",
                                borderColor: btnStyles[0].btnBorderColor,
                                padding: btnStyles[0].btnPadding + btnStyles[0].btnPaddingU,
                                boxShadow: `${btnStyles[0].btnShadowHorizontal}px ${btnStyles[0].btnShadowVertical}px ${btnStyles[0].btnShadowBlur}px ${btnStyles[0].btnShadowColor} ${btnStyles[0].btnShadowPosition}`
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default save;
