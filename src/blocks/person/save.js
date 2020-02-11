import classnames from 'classnames'
import DefaultImage from "../../components/default-image";


const save = props => {

    const { className } = props;

    const {
        id,
        personAlign,
        imgBorder,
        imgBorderColor,
        imgSize,
        nameColor,
        nameSize,
        nameWeight,
        nameV,
        titleColor,
        titleSize,
        titleWeight,
        titleV,
        descColor,
        descSize,
        descWeight,
        descV,
        descLine,
        descLetter,
        descStyle,
        descUpper,
        descshadowBlur,
        descshadowColor,
        descshadowHorizontal,
        descshadowVertical,
        iconSizeUnit,
        socialIconSize,
        socialIconColor,
        socialIconHoverColor,
        defaultIconColor,
        iconMarginT,
        iconMarginB,
        effect,
        effectDir,
        nameLine,
        nameLetter,
        titleLine,
        titleLetter,
        multiPersonChecked,
        nameStyle,
        nameUpper,
        titleStyle,
        titleUpper,
        borderTypeIcon,
        borderWidthIcon,
        borderRadiusIcon,
        borderColorIcon,
        borderHoverColor,
        nameshadowBlur,
        nameshadowColor,
        nameshadowHorizontal,
        nameshadowVertical,
        titleshadowBlur,
        titleshadowColor,
        titleshadowHorizontal,
        titleshadowVertical,
        hoverEffectPerson,
        effectPersonStyle,
        multiPersonContent,
        socialIconPadding,
        socialIconPaddingU,
        socialIconBackgroundColor
    } = props.attributes;


    const mainClasses = classnames(className, 'premium-person');

    const socialIconfn = (v) => {
        return <div>{(v).map((value) => (
            <i className={`premium-person__socialIcon ${defaultIconColor ? value.label : ""} ${value.label == "youtube" ? "fa fa-youtube-play" : `fa fa-${value.label}`} premium-person__${socialIconHoverColor}`}
                style={{
                    color: defaultIconColor ? "#ffffff" : socialIconColor,
                    background: defaultIconColor ? "" : socialIconBackgroundColor,
                    fontSize: (socialIconSize || 50) + iconSizeUnit,
                    border: borderTypeIcon,
                    borderWidth: borderWidthIcon + "px",
                    borderRadius: borderRadiusIcon || 100 + "px",
                    borderColor: borderColorIcon,
                    marginTop: iconMarginT,
                    marginBottom: iconMarginB,
                    padding: socialIconPadding + socialIconPaddingU,
                    height: `${socialIconPadding > 0 ? "auto" : "1.2em"}`,
                    width: `${socialIconPadding > 0 ? "auto" : "1.2em"}`,
                }}
            />
        ))}
        </div>
    }

    const content = () => {
        return <div className={`${multiPersonChecked > 1 ? `premium-person__multiPersonChecked` : ""}`}
        > {multiPersonContent.map((value) => (
            <div key={value.id} className={`premium-person__inner premium-persson__min premium-person__${effectPersonStyle} premium-person__${hoverEffectPerson}`}>
                <div
                    className={`premium-person__img_wrap`}
                >
                    {value.personImgUrl && (
                        <img
                            className={`premium-person__img`}
                            src={`${value.personImgUrl}`}
                            alt="Person"
                            style={{

                                borderWidth: imgBorder + "px",
                                borderColor: imgBorderColor,
                                width: imgSize + "px",
                                height: imgSize + "px",
                                filter: `brightness( ${value.bright}% ) contrast( ${value.contrast}% ) saturate( ${value.saturation}% ) blur( ${value.blur}px ) hue-rotate( ${value.hue}deg )`
                            }}
                        />
                    )}
                    {!value.personImgUrl && <DefaultImage className={className} />}
                </div>

                <div
                    className={`premium-person__info`}
                >
                    <div className={`premium-person__name_wrap`}>
                        {value.name && (
                            <span
                                className={`premium-person__name`}
                                style={{
                                    color: nameColor,
                                    fontSize: nameSize + "px",
                                    fontWeight: nameWeight,
                                    alignSelf: nameV,
                                    letterSpacing: nameLetter + "px",
                                    lineHeight: nameLine + "px",
                                    fontStyle: nameStyle,
                                    textTransform: nameUpper ? "uppercase" : "none",
                                    textShadow: `${nameshadowHorizontal}px ${nameshadowVertical}px ${nameshadowBlur}px ${nameshadowColor}`
                                }}
                            >
                                {value.name}
                            </span>
                        )}
                    </div>
                    <div className={`premium-person__title_wrap`}>
                        {value.title && (
                            <span
                                className={`premium-person__title`}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + "px",
                                    fontWeight: titleWeight,
                                    alignSelf: titleV,
                                    letterSpacing: titleLetter + "px",
                                    lineHeight: titleLine + "px",
                                    fontStyle: titleStyle,
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    textShadow: `${titleshadowHorizontal}px ${titleshadowVertical}px ${titleshadowBlur}px ${titleshadowColor}`,
                                }}
                            >
                                {value.title}
                            </span>
                        )}
                    </div>
                    <div className={`premium-person__desc_wrap`}>
                        {value.desc && (
                            <span
                                className={`premium-person__desc`}
                                style={{
                                    color: descColor,
                                    fontSize: descSize + "px",
                                    fontWeight: descWeight,
                                    alignSelf: descV,
                                    letterSpacing: descLetter + "px",
                                    lineHeight: descLine + "px",
                                    fontStyle: descStyle,
                                    textTransform: descUpper ? "uppercase" : "none",
                                    textShadow: `${descshadowHorizontal}px ${descshadowVertical}px ${descshadowBlur}px ${descshadowColor}`,
                                }}
                            >
                                {value.desc}
                            </span>
                        )}
                    </div>
                    {value.socialIcon && (
                        <div>
                            {socialIconfn(value.items)}
                        </div>
                    )}
                </div>
            </div>
        ))}

        </div>
    }

    return (
        <div>
            <div
                id={`premium-person-${id}`}
                className={`${mainClasses} premium-person__${effect} premium-person__${effectDir}`}
                style={{ textAlign: personAlign }}
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `#premium-person-${id} .premium-person:hover {`,
                            `border-color: ${borderHoverColor} !important;`,
                            "}",
                            `.premium-person__socialIcon:hover {`,
                            `color: ${defaultIconColor ? "" : `${socialIconHoverColor} !important;`}`,
                            "}"
                        ].join("\n")
                    }}
                />
                {content()}
            </div>
        </div>
    );
};

export default save;
