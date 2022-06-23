import classnames from 'classnames'
import DefaultImage from "../../components/default-image";
import { typographyCss } from '../../components/HelperFunction'

const {
    RichText
} = wp.editor;

const save = props => {

    const { className } = props;

    const {
        blockId,
        personAlign,
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
        hideTablet
    } = props.attributes;


    const mainClasses = classnames(className, 'premium-person', blockId);

    const renderCss = (
        <style>
            {`
                .${blockId} .premium-person:hover {
                    border-color: ${borderHoverColor} !important;
                }
                .${blockId} .premium-person__social-List li:hover i{
                    color: ${socialIconStyles[0].socialIconHoverColor} !important;
                    -webkit-transition: all .2s ease-in-out;
                    transition: all .2s ease-in-out;
                }
                .${blockId} .premium-person__img_wrap img {
                    height: ${imgHeight[props.deviceType]}${imgHeight.unit} !important;
                    width: ${imgWidth[props.deviceType]}${imgWidth.unit} !important;
                    filter: ${`brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`} !important;
                }
            `}
        </style>
    );

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
                    style={{
                        background: contentColor ? contentColor : "#f2f2f2",
                        bottom: effectPersonStyle === 'effect1' ? bottomInfo + "px" : ""
                    }}
                >
                    {value.name && (
                        <RichText.Content
                            tagName={nameTag.toLowerCase()}
                            className={`premium-person__name`}
                            value={value.name}
                            onChange={value => { this.save({ name: value }, index) }}
                            style={{
                                color: nameStyles[0].nameColor,
                                alignSelf: nameV,
                                ...typographyCss(nameTypography, props.deviceType),
                                textShadow: `${nameShadow.horizontal}px ${nameShadow.vertical}px ${nameShadow.blur}px ${nameShadow.color}`
                            }}
                            keepPlaceholderOnFocus
                        />
                    )}
                    {value.title && (
                        <RichText.Content
                            tagName={titleTag.toLowerCase()}
                            className={`premium-person__title`}
                            value={value.title}
                            onChange={value => { this.save({ title: value }, index) }}
                            style={{
                                color: titleStyles[0].titleColor,
                                ...typographyCss(titleTypography, props.deviceType),
                                alignSelf: titleV,
                                textShadow: `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color}`
                            }}
                            keepPlaceholderOnFocus
                        />
                    )}
                    {value.desc && (
                        <RichText.Content
                            tagName="span"
                            className={`premium-person__desc`}
                            value={value.desc}
                            onChange={value => { this.save({ desc: value }, index) }}
                            style={{
                                color: descStyles[0].descColor,
                                ...typographyCss(descTypography, props.deviceType),
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
            className={`${mainClasses} ${blockId} premium-person__${effect} premium-person__${effectDir} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{ textAlign: personAlign[props.deviceType] || 'center' }}
        >
            {renderCss}
            {content()}
        </div>
    );
};

export default save;