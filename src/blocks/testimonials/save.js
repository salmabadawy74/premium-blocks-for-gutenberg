import classnames from 'classnames'
import DefaultImage from "../../components/default-image";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";
import { gradientBackground, typographyCss } from '../../components/HelperFunction'

const { RichText } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        blockId,
        align,
        authorImgUrl,
        imgRadius,
        imgBorder,
        imgBorderColor,
        author,
        authorStyles,
        text,
        authorCom,
        hideDesktop,
        hideTablet,
        hideMobile,
        contentStyle,
        companyStyles,
        quoteStyles,
        contentTypography,
        companyTypography,
        quotSize,
        quotUnit,
        authorTypography,
        containerBackground,
        containerShadow
    } = props.attributes;

    const mainClasses = classnames(className, 'premium-testimonial', blockId);

    const renderCss = (
        <style>
            {`
                .${blockId} .premium-testimonial__img_wrap img {
                    border-width: ${imgBorder + "px"};
                    border-radius: ${imgRadius};
                    border-color: ${imgBorderColor};
                }
            `}
        </style>
    );

    return (
        <div
            className={`${mainClasses}__wrap ${blockId} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                ...gradientBackground(containerBackground),
                boxShadow: `${containerShadow.horizontal || 0}px ${containerShadow.vertical ||
                    0}px ${containerShadow.blur || 0}px ${containerShadow.color} ${containerShadow.position}`,
            }}
        >
            {renderCss}
            <div className={`premium-testimonial__container`}>
                <span className={`premium-testimonial__upper`}>
                    <PremiumUpperQuote
                        size={quotSize}
                        unit={quotUnit}
                        color={quoteStyles[0].quotColor}
                        opacity={quoteStyles[0].quotOpacity}
                    />
                </span>
                <div
                    className={`premium-testimonial__content`}
                    style={{
                        textAlign: align[props.deviceType] || 'center'
                    }}
                >
                    <div className={`premium-testimonial__img_wrap`}>
                        {authorImgUrl && (
                            <img
                                className={`premium-testimonial__img`}
                                src={`${authorImgUrl}`}
                                alt="Author"
                            />
                        )}
                        {!authorImgUrl && <DefaultImage className={className} />}
                    </div>
                    <div className={`premium-testimonial__text_wrap`}>
                        <div>
                            <RichText.Content
                                tagName="p"
                                className={`premium-testimonial__text`}
                                value={text}
                                style={{
                                    color: contentStyle[0].bodyColor,
                                    ...typographyCss(contentTypography, props.deviceType)
                                }}
                            />
                        </div>
                    </div>
                    <div className={`premium-testimonial__info`}
                        style={{ justifyContent: align[props.deviceType] || 'center' }}
                    >
                        <RichText.Content
                            tagName={authorStyles[0].authorTag.toLowerCase()}
                            className={`premium-testimonial__author`}
                            value={author}
                            style={{
                                ...typographyCss(authorTypography, props.deviceType),
                                color: authorStyles[0].authorColor
                            }}
                        />
                        <span
                            className={`premium-testimonial__sep`}
                            style={{
                                color: companyStyles[0].dashColor
                            }}
                        >
                            &nbsp;-&nbsp;
                        </span>
                        <a
                            className={`premium-icon__link`}
                            href={companyStyles[0].urlCheck && companyStyles[0].urlText}
                            rel="noopener noreferrer"
                            target={companyStyles[0].urlTarget ? "_blank" : "_self"}
                        >
                            <div className={`premium-testimonial__link_wrap`}>
                                <RichText.Content
                                    tagName={authorStyles[0].authorComTag.toLowerCase()}
                                    className={`premium-testimonial__author_comp`}
                                    value={authorCom}
                                    style={{
                                        ...typographyCss(companyTypography, props.deviceType),
                                        color: companyStyles[0].authorComColor
                                    }}
                                />
                            </div>
                        </a>
                    </div>
                </div>
                <span className={`premium-testimonial__lower`}>
                    <PremiumLowerQuote
                        size={quotSize}
                        unit={quotUnit}
                        color={quoteStyles[0].quotColor}
                        opacity={quoteStyles[0].quotOpacity}
                    />
                </span>
            </div>
        </div>
    );
};

export default save;