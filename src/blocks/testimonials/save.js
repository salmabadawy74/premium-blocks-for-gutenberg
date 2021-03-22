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
        align,
        authorImgUrl,
        imgRadius,
        imgBorder,
        imgBorderColor,
        imgSize,
        text,
        authorTag,
        authorColor,
        authorSize,
        authorLetter,
        authorStyle,
        authorUpper,
        authorWeight,
        author,
        authorComTag,
        authorComColor,
        authorComSize,
        authorCom,
        quotSize,
        quotColor,
        quotOpacity,
        bodyColor,
        bodySize,
        bodyLine,
        bodyTop,
        bodyBottom,
        dashColor,
        urlCheck,
        urlText,
        urlTarget,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowPosition,
        backColor,
        backOpacity,
        imageURL,
        fixed,
        backgroundRepeat,
        backgroundPosition,
        backgroundSize,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        paddingUnit,
        hideDesktop,
        hideTablet,
        hideMobile
    } = props.attributes;
    const mainClasses = classnames(className, 'premium-testimonial');
    return (
        <div
            id={`premium-testimonial-${block_id}`}
            className={`${mainClasses}__wrap premium-testimonial-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                backgroundColor: backColor
                    ? hexToRgba(backColor, backOpacity)
                    : "transparent",
                backgroundImage: `url('${imageURL}')`,
                backgroundRepeat: backgroundRepeat,
                backgroundPosition: backgroundPosition,
                backgroundSize: backgroundSize,
                backgroundAttachment: fixed ? "fixed" : "unset",
                paddingTop: paddingTop + paddingUnit,
                paddingBottom: paddingBottom + paddingUnit,
                paddingLeft: paddingLeft + paddingUnit,
                paddingRight: paddingRight + paddingUnit
            }}
        >
            <div className={`premium-testimonial__container`}>
                <span className={`premium-testimonial__upper`}>
                    <PremiumUpperQuote
                        size={quotSize}
                        color={quotColor}
                        opacity={quotOpacity}
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
                                    color: bodyColor,
                                    lineHeight: bodyLine + "px",
                                    marginTop: bodyTop + "px",
                                    marginBottom: bodyBottom + "px"
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
                                color: dashColor
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
                                    color: authorComColor,
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
                        color={quotColor}
                        size={quotSize}
                        opacity={quotOpacity}
                    />
                </span>
            </div>
        </div>
    );
};
export default save;