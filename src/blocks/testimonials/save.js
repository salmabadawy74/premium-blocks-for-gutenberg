import classnames from 'classnames'
import DefaultImage from "../../components/default-image";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";
import { filterJsCss, gradientBackground } from '../../components/HelperFunction';
const { RichText, useBlockProps } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        blockId,
        authorImgUrl,
        imgSize,
        imageBorder,
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
        background,
        boxShadow,
        authorTypography,
        bodyTypography,
        companyTypography,
    } = props.attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-testimonial ${blockId} premium-testimonial__wrap`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
            style={filterJsCss({
                boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                ...gradientBackground(background),
            })}
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
                >
                    <div className={`premium-testimonial__img_wrap`}>
                        {authorImgUrl && (
                            <img
                                className={`premium-testimonial__img`}
                                src={`${authorImgUrl}`}
                                alt="Author"
                                style={filterJsCss({
                                    borderStyle: imageBorder?.borderType,
                                    borderColor: imageBorder?.borderColor,
                                    width: imgSize + "px",
                                    height: imgSize + "px"
                                })}
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
                                style={filterJsCss({
                                    color: contentStyle[0].bodyColor,
                                    marginTop: contentStyle[0].bodyTop + "px",
                                    marginBottom: contentStyle[0].bodyBottom + "px",
                                    fontStyle: bodyTypography?.fontStyle,
                                    fontFamily: bodyTypography?.fontFamily,
                                    fontWeight: bodyTypography?.fontWeight,
                                    textDecoration: bodyTypography?.textDecoration,
                                    textTransform: bodyTypography?.textTransform,
                                })}
                            />
                        </div>
                    </div>
                    <div className={`premium-testimonial__info`}
                    >
                        <RichText.Content
                            tagName={authorStyles[0].authorTag.toLowerCase()}
                            className={`premium-testimonial__author`}
                            value={author}
                            style={filterJsCss({
                                color: authorStyles[0].authorColor,
                                fontStyle: authorTypography?.fontStyle,
                                fontFamily: authorTypography?.fontFamily,
                                fontWeight: authorTypography?.fontWeight,
                                textDecoration: authorTypography?.textDecoration,
                                textTransform: authorTypography?.textTransform,
                            })}
                        />
                        <span
                            className={`premium-testimonial__sep`}
                            style={filterJsCss({
                                color: companyStyles[0].dashColor
                            })}
                        >
                            &nbsp;-&nbsp;
                        </span>
                        <div className={`premium-testimonial__link_wrap`}>
                            <RichText.Content
                                tagName={authorStyles[0].authorComTag.toLowerCase()}
                                className={`premium-testimonial__author_comp`}
                                value={authorCom}
                                style={filterJsCss({
                                    color: companyStyles[0].authorComColor,
                                    fontStyle: companyTypography?.fontStyle,
                                    fontFamily: companyTypography?.fontFamily,
                                    fontWeight: companyTypography?.fontWeight,
                                    textDecoration: companyTypography?.textDecoration,
                                    textTransform: companyTypography?.textTransform,
                                })}
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