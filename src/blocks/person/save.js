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
        nameV,
        titleStyles,
        socialIconStyles,
        socialIconBorderWidth,
        socialIconBorderTop,
        socialIconBorderRight,
        socialIconBorderBottom,
        socialIconBorderLeft,
        socialIconBorderUpdated,
        nameStyles,
        descStyles,
        titleV,
        descV,
        socialIconHoverColor,
        effect,
        effectDir,
        multiPersonChecked,
        borderHoverColor,
        hoverEffectPerson,
        effectPersonStyle,
        multiPersonContent,
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
                <a className={`premium-person__socialIcon__link_content ${socialIconStyles[0].defaultIconColor ? value.label : ""}`} href={`${value.value}`} style={{
                    borderStyle: socialIconStyles[0].borderTypeIcon,
                    borderWidth: socialIconBorderUpdated
                        ? `${socialIconBorderTop}px ${socialIconBorderRight}px ${socialIconBorderBottom}px ${socialIconBorderLeft}px`
                        : socialIconBorderWidth + "px",
                    borderRadius: socialIconStyles[0].borderRadiusIcon || 100 + "px",
                    borderColor: socialIconStyles[0].borderColorIcon,
                    background: socialIconStyles[0].socialIconBackgroundColor,
                }}>
                    <i className={`premium-person__socialIcon ${value.label == "youtube" ? "fa fa-youtube-play" : `fa fa-${value.label}`} premium-person__${socialIconHoverColor}`}
                        style={{
                            color: socialIconStyles[0].socialIconColor
                        }}
                    />
                </a>
            </li>
        ))}
        </ul>
    }
    const content = () => {
        return <div className={`premium-person-content ${id} ${multiPersonChecked > 1 ? `premium-person__${rowPerson}` : ""}`}
        > {multiPersonContent.map((value) => (
            <div key={value.id} className={`premium-person__inner premium-persson__min premium-person__${effectPersonStyle} premium-person__${hoverEffectPerson}`}>
                <div className={`premium-person__img__container`}>
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
                                    color: nameStyles[0].nameColor,
                                    fontWeight: nameStyles[0].nameWeight,
                                    alignSelf: nameV,
                                    letterSpacing: nameStyles[0].nameLetter + "px",
                                    lineHeight: nameStyles[0].nameLine + "px",
                                    fontStyle: nameStyles[0].nameStyle,
                                    textTransform: nameStyles[0].nameUpper ? "uppercase" : "none",
                                    textShadow: `${nameStyles[0].nameshadowHorizontal}px ${nameStyles[0].nameshadowVertical}px ${nameStyles[0].nameshadowBlur}px ${nameStyles[0].nameshadowColor}`
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
                                    color: titleStyles[0].titleColor,
                                    fontWeight: titleStyles[0].titleWeight,
                                    alignSelf: titleV,
                                    letterSpacing: titleStyles[0].titleLetter + "px",
                                    lineHeight: titleStyles[0].titleLine + "px",
                                    fontStyle: titleStyles[0].titleStyle,
                                    textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                    textShadow: `${titleStyles[0].titleshadowHorizontal}px ${titleStyles[0].titleshadowVertical}px ${titleStyles[0].titleshadowBlur}px ${titleStyles[0].titleshadowColor}`,
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
                                    color: descStyles[0].descColor,
                                    fontWeight: descStyles[0].descWeight,
                                    alignSelf: descV,
                                    letterSpacing: descStyles[0].descLetter + "px",
                                    lineHeight: descStyles[0].descLine + "px",
                                    fontStyle: descStyles[0].descStyle,
                                    textTransform: descStyles[0].descUpper ? "uppercase" : "none",
                                    textShadow: `${descStyles[0].descshadowHorizontal}px ${descStyles[0].descshadowVertical}px ${descStyles[0].descshadowBlur}px ${descStyles[0].descshadowColor}`,
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
                        `#premium-person-${id} .premium-person__social-List li:hover i{`,
                        `color: ${socialIconStyles[0].socialIconHoverColor} !important;`,
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