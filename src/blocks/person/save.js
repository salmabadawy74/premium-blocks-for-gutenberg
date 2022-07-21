import classnames from 'classnames'
import DefaultImage from "../../components/default-image";
import { filterJsCss, generateCss } from '../../components/HelperFunction'

const {
    RichText
} = wp.editor;

const save = props => {

    const { className } = props;

    const {
        blockId,
        align,
        nameV,
        socialIconStyles,
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
        imgHeight,
        imgWidth,
        hideDesktop,
        hideMobile,
        hideTablet,
        nameColor,
        titleColor,
        descColor,
        imageFilter
    } = props.attributes;

    const loadStyles = () => {
        const styles = {};
        styles[` .${blockId} .premium-person:hover`] = {
            'border-color': `${borderHoverColor} !important`
        };
        styles[` .${blockId} .premium-person__social-List li:hover i`] = {
            'color': `${socialIconStyles[0].socialIconHoverColor} !important`,
            '-webkit-transition': `all .2s ease-in-out !important`,
            'transition': `all .2s ease-in-out !important`
        };
        styles[` .${blockId} .premium-person__img_wrap img`] = {
            // 'height': `${imgHeight[this.props.deviceType]} ${imgHeight.unit} !important`,
            // 'width': `${imgWidth[this.props.deviceType]} ${imgWidth.unit} !important`,
            'filter': `brightness( ${imageFilter.bright}% ) contrast( ${imageFilter.contrast}% ) saturate( ${imageFilter.saturation}% ) blur( ${imageFilter.blur}px ) hue-rotate( ${imageFilter.hue}deg ) !important`
        };
        return generateCss(styles);
    }

    const socialIconfn = (v) => {
        return <ul className="premium-person__social-List">{(v).map((value) => (
            <li>
                <a className={`premium-person__socialIcon__link_content ${socialIconStyles[0].defaultIconColor ? value.label : ""}`} href={`${value.value}`}
                    style={filterJsCss({
                        borderStyle: socialIconBorder.borderType,
                        borderColor: socialIconBorder.borderColor,
                        background: socialIconStyles[0].socialIconBackgroundColor,
                    })}>
                    <i className={`premium-person__socialIcon ${value.label == "youtube" ? "fa fa-youtube-play" : `fa fa-${value.label}`} premium-person__${socialIconHoverColor}`}
                        style={filterJsCss({
                            color: socialIconStyles[0].socialIconColor
                        })}
                    />
                </a>
            </li>
        ))}
        </ul>
    }
    const content = () => {
        return <div className={`premium-person-content ${multiPersonChecked > 1 ? `premium-person__${rowPerson}` : ""}`}
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
                    style={filterJsCss({
                        background: contentColor ? contentColor : "#f2f2f2",
                        bottom: effectPersonStyle === 'effect1' ? bottomInfo + "px" : ""
                    })}
                >
                    {value.name && (
                        <RichText.Content
                            tagName={nameTag.toLowerCase()}
                            className={`premium-person__name`}
                            value={value.name}
                            onChange={name => { this.save({ name: name }, index) }}
                            style={filterJsCss({
                                color: nameColor,
                                alignSelf: nameV,
                                fontStyle: nameTypography?.fontStyle,
                                fontFamily: nameTypography?.fontFamily,
                                fontWeight: nameTypography?.fontWeight,
                                textDecoration: nameTypography?.textDecoration,
                                textTransform: nameTypography?.textTransform,
                                // ...typographyCss(nameTypography, props.deviceType),
                                textShadow: `${nameShadow.horizontal}px ${nameShadow.vertical}px ${nameShadow.blur}px ${nameShadow.color}`
                            })}
                            keepPlaceholderOnFocus
                        />
                    )}
                    {value.title && (
                        <RichText.Content
                            tagName={titleTag.toLowerCase()}
                            className={`premium-person__title`}
                            value={value.title}
                            onChange={title => { this.save({ title: title }, index) }}
                            style={filterJsCss({
                                color: titleColor,
                                fontStyle: titleTypography?.fontStyle,
                                fontFamily: titleTypography?.fontFamily,
                                fontWeight: titleTypography?.fontWeight,
                                textDecoration: titleTypography?.textDecoration,
                                textTransform: titleTypography?.textTransform,
                                // ...typographyCss(titleTypography, props.deviceType),
                                alignSelf: titleV,
                                textShadow: `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color}`
                            })}
                            keepPlaceholderOnFocus
                        />
                    )}
                    {value.desc && (
                        <RichText.Content
                            tagName="span"
                            className={`premium-person__desc`}
                            value={value.desc}
                            onChange={desc => { this.save({ desc: desc }, index) }}
                            style={filterJsCss({
                                color: descColor,
                                fontStyle: descTypography?.fontStyle,
                                fontFamily: descTypography?.fontFamily,
                                fontWeight: descTypography?.fontWeight,
                                textDecoration: descTypography?.textDecoration,
                                textTransform: descTypography?.textTransform,
                                // ...typographyCss(descTypography, props.deviceType),
                                alignSelf: descV,
                                textShadow: `${descShadow.horizontal}px ${descShadow.vertical}px ${descShadow.blur}px ${descShadow.color}`
                            })}
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
            className={classnames(className,
                "premium-person", `premium-person__${effect} ${blockId} premium-person__${effectDir}`, {
                ' premium-desktop-hidden': hideDesktop,
                ' premium-tablet-hidden': hideTablet,
                ' premium-mobile-hidden': hideMobile,
            })}
        // style={{ textAlign: align[props.deviceType] || 'center' }}
        >
            <style
                dangerouslySetInnerHTML={{
                    __html: loadStyles(),
                }}
            />
            {content()}
        </div>
    );
};

export default save;