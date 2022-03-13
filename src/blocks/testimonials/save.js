import classnames from 'classnames'
import DefaultImage from "../../components/default-image";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";

const { RichText } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        block_id,
        align,
        authorImgId,
        authorImgUrl,
        imgRadius,
        imgSize,
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
        containerStyles,
        backgroundType
    } = props.attributes;

    const mainClasses = classnames(className, 'premium-testimonial');

    let btnGrad, btnGrad2, btnbg;
    if (undefined !== backgroundType && 'gradient' === backgroundType) {
        btnGrad = ('transparent' === containerStyles[0].containerBack || undefined === containerStyles[0].containerBack ? 'rgba(255,255,255,0)' : containerStyles[0].containerBack);
        btnGrad2 = (undefined !== containerStyles[0].gradientColorTwo && undefined !== containerStyles[0].gradientColorTwo && '' !== containerStyles[0].gradientColorTwo ? containerStyles[0].gradientColorTwo : '#777');
        if ('radial' === containerStyles[0].gradientType) {
            btnbg = `radial-gradient(at ${containerStyles[0].gradientPosition}, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
        } else if ('radial' !== containerStyles[0].gradientType) {
            btnbg = `linear-gradient(${containerStyles[0].gradientAngle}deg, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
        }
    } else {
        btnbg = containerStyles[0].backgroundImageURL ? `url('${containerStyles[0].backgroundImageURL}')` : 'none'
    }

    return (
        <div
            id={`premium-testimonial-${block_id}`}
            className={`${mainClasses}__wrap premium-testimonial-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                boxShadow: `${containerStyles[0].shadowHorizontal}px ${containerStyles[0].shadowVertical}px ${containerStyles[0].shadowBlur}px ${containerStyles[0].shadowColor} ${containerStyles[0].shadowPosition}`,
                backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
                backgroundImage: btnbg,
                backgroundRepeat: containerStyles[0].backgroundRepeat,
                backgroundPosition: containerStyles[0].backgroundPosition,
                backgroundSize: containerStyles[0].backgroundSize,
                backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
            }}
        >
            <div className={`premium-testimonial__container`}>
                <span className={`premium-testimonial__upper`}>
                    <PremiumUpperQuote
                        size={quoteStyles[0].quotSize}
                        color={quoteStyles[0].quotColor}
                        opacity={quoteStyles[0].quotOpacity}
                    />
                </span>
                <div
                    className={`premium-testimonial__content`}
                    style={{
                        textAlign: align
                    }}
                >
                    <div className={`premium-testimonial__img_wrap`}>
                        {authorImgUrl && (
                            <img
                                className={`premium-testimonial__img`}
                                src={`${authorImgUrl}`}
                                alt="Author"
                                style={{
                                    borderWidth: imgBorder + "px",
                                    borderRadius: imgRadius,
                                    borderColor: imgBorderColor,
                                    width: imgSize + "px",
                                    height: imgSize + "px"
                                }}
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
                                    lineHeight: contentStyle[0].bodyLine + "px",
                                    marginTop: contentStyle[0].bodyTop + "px",
                                    marginBottom: contentStyle[0].bodyBottom + "px"
                                }}
                            />
                        </div>
                    </div>
                    <div className={`premium-testimonial__info`}
                        style={{ justifyContent: align }}
                    >
                        <RichText.Content
                            tagName={authorStyles[0].authorTag.toLowerCase()}
                            className={`premium-testimonial__author`}
                            value={author}
                            style={{
                                color: authorStyles[0].authorColor,
                                letterSpacing: authorStyles[0].authorLetter + "px",
                                textTransform: authorStyles[0].authorUpper ? "uppercase" : "none",
                                fontStyle: authorStyles[0].authorStyle,
                                fontWeight: authorStyles[0].authorWeight
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
                        <div className={`premium-testimonial__link_wrap`}>
                            <RichText.Content
                                tagName={authorStyles[0].authorComTag.toLowerCase()}
                                className={`premium-testimonial__author_comp`}
                                value={authorCom}
                                style={{
                                    color: companyStyles[0].authorComColor,
                                }}
                            />
                            {companyStyles[0].urlCheck && (
                                <a
                                    rel="noopener noreferrer"
                                    href={companyStyles[0].urlText}
                                    target={companyStyles[0].urlTarget ? "_blank" : ""}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <span className={`premium-testimonial__lower`}>
                    <PremiumLowerQuote
                        size={quoteStyles[0].quotSize}
                        color={quoteStyles[0].quotColor}
                        opacity={quoteStyles[0].quotOpacity}
                    />
                </span>
            </div>
        </div>
    );
};

export default save;