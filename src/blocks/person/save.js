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
        iconMarginL,
        iconMarginR,
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
        socialIconBackgroundColor,
        rowPerson,
        change,
        blur,
        bright,
        contrast,
        saturation,
        hue,
        contentColor,
        bottomInfo
    } = props.attributes;


    const mainClasses = classnames(className, 'premium-person');

    const socialIconfn = (v) => {
        return <ul className="premium-person__social-List">{(v).map((value) => (
            <li>
                <a className={`premium-person__socialIcon__link_content ${defaultIconColor ? value.label : ""}`} href={`${value.value}`} style={{
                    padding: socialIconPadding + socialIconPaddingU,
                    borderStyle: borderTypeIcon,
                    borderWidth: borderWidthIcon + "px",
                    borderRadius: borderRadiusIcon || 100 + "px",
                    borderColor: borderColorIcon,
                    marginLeft: iconMarginL + "px",
                    marginRight: iconMarginR + "px",
                    background: socialIconBackgroundColor,
                }}>
                    <i className={`premium-person__socialIcon ${value.label == "youtube" ? "fa fa-youtube-play" : `fa fa-${value.label}`} premium-person__${socialIconHoverColor}`}
                        style={{
                            color: socialIconColor,
                            fontSize: (socialIconSize || 50) + iconSizeUnit,
                        }}
                    />
                </a>
            </li>
        ))}
        </ul>
    }
    const content = () => {
        return <div className={`${multiPersonChecked > 1 ? `premium-person__${rowPerson}` : ""} ${id}`}
        > {multiPersonContent.map((value) => (
            <div key={value.id} className={`premium-person__inner premium-persson__min premium-person__${effectPersonStyle} premium-person__${hoverEffectPerson}`}>
                <div className={`premium-person__img__container`}>
                    <div
                        className={`premium-person__img_wrap`}
                    >
                        {value.personImgUrl && (
                            <img
                                className={`premium-person__img`}
                                src={`${value.personImgUrl.url}`}
                                alt="Person"
                                style={{

                                    borderWidth: imgBorder + "px",
                                    borderColor: imgBorderColor,
                                    width: imgSize + "px",
                                    height: imgSize + "px",
                                    filter: `${change ? `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )` : ""}`
                                }}
                            />
                        )}
                        {!value.personImgUrl && <DefaultImage className={className} />}
                    </div>
                    {effectPersonStyle === 'effect2' ? <div className={`premium-person__socialEffect2`}>{value.socialIcon && (
                        socialIconfn(value.items)
                    )}</div> : ""}
                </div>
                <div
                    className={`premium-person__info`}
                    style={{
                        background: contentColor ? contentColor : "#f2f2f2",
                        bottom: effectPersonStyle === 'effect1' ? bottomInfo + "px" : ""
                    }}
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
                    {effectPersonStyle == 'effect1' ? <div>{value.socialIcon && (
                        socialIconfn(value.items)
                    )}</div> : ""}
                </div>
            </div>
        ))}
        </div>
    }

    return (
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
                        `.premium-person__social-List li:hover i{`,
                        `color: ${socialIconHoverColor} !important;`,
                        `-webkit-transition: all .2s ease-in-out;`,
                        `transition: all .2s ease-in-out;`,
                        "}"
                    ].join("\n")
                }}
            />
            {content()}
        </div>
    );
};

export default save;
