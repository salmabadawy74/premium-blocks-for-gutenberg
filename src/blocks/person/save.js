import classnames from 'classnames'
import DefaultImage from "../../components/default-image";

const { RichText } = wp.editor;

const save = props => {

    const { className } = props;

    const {
        id,
        personText,
        newpersonText,
        personSize,
        personAlign,
        personLink,
        personTarget,
        personImgUrl,
        imgRadius,
        imgBorder,
        imgBorderColor,
        imgSize,
        name,
        nameColor,
        nameSize,
        nameWeight,
        nameV,
        title,
        titleColor,
        titleSize,
        titleWeight,
        titleV,
        titleTag,
        DescText,
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
        socialIcon,
        facebook,
        twitter,
        instagram,
        youtube,
        socialIconSize,
        blur,
        bright,
        contrast,
        saturation,
        hue,
        effect,
        effectDir,
        textColor,
        nameHoverColor,
        backColor,
        backHoverColor,
        slideColor,
        textFontFamily,
        nameLine,
        nameLetter,
        titleLine,
        titleLetter,
        multiPersonChecked,
        nameStyle,
        nameUpper,
        titleStyle,
        titleUpper,
        borderType,
        borderWidth,
        borderRadius,
        borderColor,
        borderHoverColor,
        padding,
        paddingU,
        nameshadowBlur,
        nameshadowColor,
        nameshadowHorizontal,
        nameshadowVertical,
        titleshadowBlur,
        titleshadowColor,
        titleshadowHorizontal,
        titleshadowVertical,
        personnameshadowBlur,
        personnameshadowColor,
        personnameshadowHorizontal,
        personnameshadowVertical,
        personShadowPosition
    } = props.attributes;

    const mainClasses = classnames(className, 'premium-person');

    return (
        <div>
            <div
                id={`${mainClasses}-wrap-${id}`}
                className={`${mainClasses}__wrap premium-person__${effect} premium-person__${effectDir}`}
                style={{ textAlign: personAlign }}
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `#premium-person-wrap-${id} .premium-person:hover {`,
                            `color: ${nameHoverColor} !important;`,
                            `border-color: ${borderHoverColor} !important;`,
                            "}",
                            `#premium-person-wrap-${id}.premium-person__none .premium-person:hover {`,
                            `background-color: ${backHoverColor} !important;`,
                            "}",
                            `#premium-person-wrap-${id}.premium-person__slide .premium-person::before,`,
                            `#premium-person-wrap-${id}.premium-person__shutter .premium-person::before,`,
                            `#premium-person-wrap-${id}.premium-person__radial .premium-person::before {`,
                            `background-color: ${slideColor}`,
                            "}"
                        ].join("\n")
                    }}
                />
                <div className={`premium-person__img_wrap`}>
                    {personImgUrl && (
                        <img
                            className={`premium-person__img`}
                            src={`${personImgUrl}`}
                            alt="Person"
                            style={{
                                borderWidth: imgBorder + "px",
                                borderRadius: imgRadius,
                                borderColor: imgBorderColor,
                                width: imgSize + "px",
                                height: imgSize + "px",
                                filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                            }}
                        />
                    )}
                    {!personImgUrl && <DefaultImage className={className} />}
                </div>
                <div
                    className={`premium-person__name_wrap`}
                >
                    <div>{name && (
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
                                textShadow: `${nameshadowHorizontal}px ${nameshadowVertical}px ${nameshadowBlur}px ${nameshadowColor}`,
                            }}
                        >
                            {name}
                        </span>
                    )}
                    </div>
                    <div>
                        {title && (
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
                                {title}
                            </span>
                        )}
                    </div>
                    <div>
                        {DescText && (
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
                                {DescText}
                            </span>
                        )}
                    </div>
                    {socialIcon && (
                        <div>
                            <div>{facebook}</div>
                            <div>{twitter}</div>
                            <div>{instagram}</div>
                            <div>{youtube}</div>
                        </div>
                    )}
                </div>

                {multiPersonChecked && (
                    <RichText.Content
                        tagName={titleTag.toLowerCase()}
                        titleue={multiPersonChecked ? personText : newpersonText}
                        className={`premium-person premium-person__${personSize}`}
                        href={personLink}
                        rel="noopener noreferrer"
                        target={personTarget ? "_blank" : "_self"}
                        style={{
                            color: descColor,
                            backgroundColor: backColor,
                            fontSize: nameSize + "px",
                            fontFamily: textFontFamily,
                            letterSpacing: nameLetter + "px",
                            textTransform: nameUpper ? "uppercase" : "none",
                            fontStyle: nameStyle,
                            lineHeight: nameLine + "px",
                            fontWeight: nameWeight,
                            textShadow: `${nameshadowHorizontal}px ${nameshadowVertical}px ${nameshadowBlur}px ${nameshadowColor}`,
                            boxShadow: `${personnameshadowHorizontal}px ${personnameshadowVertical}px ${personnameshadowBlur}px ${personnameshadowColor} ${personShadowPosition}`,
                            padding: padding + paddingU,
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default save;
