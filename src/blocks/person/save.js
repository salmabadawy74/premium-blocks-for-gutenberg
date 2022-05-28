import classnames from 'classnames'
import DefaultImage from "../../components/default-image";

const {
    RichText
} = wp.editor;

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
        bottomInfo,
        socialIconBorder,
        descTypography,
        titleTypography,
        nameTypography,
        nameShadow,
        titleShadow,
        descShadow,
        titleTag,
        nameTag,
    } = props.attributes;


    const mainClasses = classnames(className, 'premium-person');

    const socialIconfn = (v) => {
        return <ul className="premium-person__social-List">{(v).map((value) => (
            <li>
                <a className={`premium-person__socialIcon__link_content ${socialIconStyles[0].defaultIconColor ? value.label : ""}`} href={`${value.value}`} style={{
                    borderStyle: socialIconBorder.borderType,
                    borderColor: socialIconBorder.borderColor,
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
                    {value.name && (
                        <RichText.content
                            tagName={nameTag.toLowerCase()}
                            className={`premium-person__name`}
                            value={value.name}
                            isSelected={false}
                            onChange={value => { this.save({ name: value }, index) }}
                            style={{
                                color: nameStyles[0].nameColor,
                                alignSelf: nameV,
                                letterSpacing: nameTypography.letterSpacing + "px",
                                textTransform: nameTypography.textTransform ? "uppercase" : "none",
                                fontStyle: nameTypography.fontStyle,
                                fontWeight: nameTypography.fontWeight,
                                lineHeight: nameTypography.lineHeight + "px",
                                textShadow: `${nameShadow.horizontal}px ${nameShadow.vertical}px ${nameShadow.blur}px ${nameShadow.color}`
                            }}
                            keepPlaceholderOnFocus
                        />
                    )}
                    {value.title && (
                        <RichText.content
                            tagName={titleTag.toLowerCase()}
                            className={`premium-person__title`}
                            value={value.title}
                            isSelected={false}
                            onChange={value => { this.save({ title: value }, index) }}
                            style={{
                                color: titleStyles[0].titleColor,
                                letterSpacing: titleTypography.letterSpacing + "px",
                                textTransform: titleTypography.textTransform ? "uppercase" : "none",
                                fontStyle: titleTypography.fontStyle,
                                fontWeight: titleTypography.fontWeight,
                                lineHeight: titleTypography.lineHeight + "px",
                                alignSelf: titleV,
                                textShadow: `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color}`
                            }}
                            keepPlaceholderOnFocus
                        />
                    )}
                    {value.desc && (
                        <RichText.content
                            tagName="span"
                            className={`premium-person__desc`}
                            value={value.desc}
                            isSelected={false}
                            onChange={value => { this.save({ desc: value }, index) }}
                            style={{
                                color: descStyles[0].descColor,
                                letterSpacing: descTypography.letterSpacing + "px",
                                textTransform: descTypography.textTransform ? "uppercase" : "none",
                                fontStyle: descTypography.fontStyle,
                                fontWeight: descTypography.fontWeight,
                                lineHeight: descTypography.lineHeight + "px",
                                alignSelf: descV,
                                textShadow: `${descShadow.horizontal}px ${descShadow.vertical}px ${descShadow.blur}px ${descShadow.color}`
                            }}
                            keepPlaceholderOnFocus
                        />
                    )}
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