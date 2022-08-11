import classnames from 'classnames'
import DefaultImage from "../../components/default-image";
import Social from "../../components/social-media";
import { filterJsCss, generateCss } from '../../components/HelperFunction'
const { __ } = wp.i18n;

const {
    RichText
} = wp.editor;

const save = props => {

    const { className } = props;

    const {
        blockId,
        nameV,
        socialIconStyles,
        titleV,
        descV,
        effect,
        effectDir,
        multiPersonChecked,
        borderHoverColor,
        hoverEffectPerson,
        effectPersonStyle,
        multiPersonContent,
        rowPerson,
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
        hideDesktop,
        hideMobile,
        hideTablet,
        nameColor,
        titleColor,
        descColor,
        imageFilter,
        imageBorder
    } = props.attributes;

    const iconsList = [
        {
            value: Social.facebook,
            label: __("facebook", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.twitter,
            label: __("twitter", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.instagram,
            label: __("instagram", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.youtube,
            label: __("youtube", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.linkedin,
            label: __("linkedin", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.flickr,
            label: __("flickr", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.github,
            label: __("github", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.googlePlus,
            label: __("google-plus", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.pinterest,
            label: __("pinterest", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.reddit,
            label: __("reddit", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.skype,
            label: __("skype", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.stack_overflow,
            label: __("stack-overflow", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.whatsapp,
            label: __("whatsapp", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.vimeo,
            label: __("vimeo", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.tumblr,
            label: __("tumblr", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.dribbble,
            label: __("dribbble", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.quora,
            label: __("quora", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.foursquare,
            label: __("foursquare", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.wordpress,
            label: __("wordpress", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.stumbleupon,
            label: __("stumbleupon", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.yahoo,
            label: __("yahoo", "premium-blocks-for-gutenberg"),
        },
        {
            value: Social.soundcloud,
            label: __("soundcloud", "premium-blocks-for-gutenberg"),
        },
    ];

    const loadStyles = () => {
        const styles = {};
        styles[` .${blockId} .premium-person:hover`] = {
            'border-color': `${borderHoverColor} !important`
        };
        styles[` .${blockId} .premium-person__social-List li:hover .premium-social-media-icon`] = {
            'fill': `${socialIconStyles[0].socialIconHoverColor} !important`,
            '-webkit-transition': `all .2s ease-in-out !important`,
            'transition': `all .2s ease-in-out !important`
        };
        styles[` .${blockId} .premium-person__img_wrap img`] = {
            'filter': `brightness( ${imageFilter.bright}% ) contrast( ${imageFilter.contrast}% ) saturate( ${imageFilter.saturation}% ) blur( ${imageFilter.blur}px ) hue-rotate( ${imageFilter.hue}deg ) !important`
        };
        styles[` .${blockId} .premium-social-media-icon`] = {
            'fill': `${socialIconStyles[0].socialIconColor} !important`
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
                    {(iconsList || []).map((list) => {
                        if (list.label == value.label) {
                            return list.value
                        }
                    })}
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
                        {effectPersonStyle === 'effect2' ? <div className={`premium-person__socialEffect2`}>{value.socialIcon && (
                            socialIconfn(value.items)
                        )}</div> : ""}
                        {value.personImgUrl && (
                            <img
                                className={`premium-person__img`}
                                src={`${value.personImgUrl}`}
                                alt="Person"
                                style={filterJsCss({
                                    borderStyle: imageBorder?.borderType,
                                    borderColor: imageBorder?.borderColor
                                })}
                            />
                        )}
                        {!value.personImgUrl && <DefaultImage className={className} />}
                    </div>

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

    console.log(imageBorder)

    return (
        <div
            className={classnames(className,
                "premium-person", `${blockId} premium-person__${effect} premium-person__${effectDir}`, {
                ' premium-desktop-hidden': hideDesktop,
                ' premium-tablet-hidden': hideTablet,
                ' premium-mobile-hidden': hideMobile,
            })}
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