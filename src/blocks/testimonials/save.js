import classnames from 'classnames'
import DefaultImage from "../../components/default-image";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";
import hexToRgba from "hex-to-rgba";

const { RichText } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        block_id,
        classMigrate,
        align,
        authorImgId,
        authorImgUrl,
        imgRadius,
        imgSize,
        imgBorder,
        imgBorderColor,
        author,
        authorTag,
        authorColor,
        authorSize,
        authorSizeUnit,
        authorSizeMobile,
        authorSizeTablet,
        authorLetter,
        authorStyle,
        authorUpper,
        authorWeight,
        authorComTag,
        text,
        authorCom,
        hideDesktop,
        hideTablet,
        hideMobile,
        contentStyle,
        companyStyles,
        quoteStyles,
        containerStyles
    } = props.attributes;

    const mainClasses = classnames(className, 'premium-testimonial');

    return (
        <div
            id={`premium-testimonial-${block_id}`}
            className={`${mainClasses}__wrap premium-testimonial-${block_id}`}
            style={{
                boxShadow: `${containerStyles[0].shadowHorizontal}px ${containerStyles[0].shadowVertical}px ${containerStyles[0].shadowBlur}px ${containerStyles[0].shadowColor} ${containerStyles[0].shadowPosition}`,
                backgroundColor: containerStyles[0].backColor
                    ? hexToRgba(containerStyles[0].backColor, containerStyles[0].backOpacity)
                    : "transparent",
                backgroundImage: containerStyles[0].imageURL ? `url('${containerStyles[0].imageURL}')` : 'none',
                backgroundRepeat: containerStyles[0].backgroundRepeat,
                backgroundPosition: containerStyles[0].backgroundPosition,
                backgroundSize: containerStyles[0].backgroundSize,
                backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                paddingTop: containerStyles[0].paddingTop + containerStyles[0].paddingUnit,
                paddingBottom: containerStyles[0].paddingBottom + containerStyles[0].paddingUnit,
                paddingLeft: containerStyles[0].paddingLeft + containerStyles[0].paddingUnit,
                paddingRight: containerStyles[0].paddingRight + containerStyles[0].paddingUnit
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
                    <div className={`premium-testimonial__info`}>
                        <RichText.Content
                            tagName={authorTag.toLowerCase()}
                            className={`premium-testimonial__author`}
                            value={author}
                            style={{
                                color: authorColor,
                                letterSpacing: authorLetter + "px",
                                textTransform: authorUpper ? "uppercase" : "none",
                                fontStyle: authorStyle,
                                fontWeight: authorWeight
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
                                tagName={authorComTag.toLowerCase()}
                                className={`premium-testimonial__author_comp`}
                                value={authorCom}
                                style={{
                                    color: companyStyles[0].authorComColor,
                                }}
                            />
                            {urlCheck && (
                                <a
                                    rel="noopener noreferrer"
                                    href={urlText}
                                    target={urlTarget ? "_blank" : ""}
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
