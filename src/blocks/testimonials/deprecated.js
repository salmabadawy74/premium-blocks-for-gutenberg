import DefaultImage from "../../components/default-image";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";
import hexToRgba from "hex-to-rgba";

const className = "premium-testimonial";

const { RichText } = wp.editor;

const newAttributes_1_6_5 = {
    backColor: {
        type: "string",
    },
    imageID: {
        type: "string",
    },
    imageURL: {
        type: "string",
    },
    backgroundRepeat: {
        type: "string",
        default: "no-repeat",
    },
    backgroundPosition: {
        type: "string",
        default: "top center",
    },
    backgroundSize: {
        type: "string",
        default: "auto",
    },
    fixed: {
        type: "boolean",
        default: false,
    },
};

const newAttributes_1_3_9 = {
    shadowColor: {
        type: "string",
    },
    shadowBlur: {
        type: "number",
    },
    shadowHorizontal: {
        type: "number",
    },
    shadowVertical: {
        type: "number",
    },
    shadowPosition: {
        type: "string",
    },
};

const testimonialsAttrs_1_0_1 = {
    align: {
        type: "string",
        default: "center",
    },
    authorImgId: {
        type: "string",
    },
    authorImgUrl: {
        type: "string",
    },
    imgRadius: {
        type: "string",
        default: "50%",
    },
    imgSize: {
        type: "number",
    },
    imgBorder: {
        type: "number",
        default: "1",
    },
    imgBorderColor: {
        type: "string",
    },
    author: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author",
        default: "John Doe",
    },
    authorTag: {
        type: "string",
        default: "H3",
    },
    authorColor: {
        type: "string",
    },
    authorSize: {
        type: "number",
    },
    authorLetter: {
        type: "number",
    },
    authorStyle: {
        type: "string",
    },
    authorUpper: {
        type: "boolean",
    },
    authorWeight: {
        type: "number",
        default: 500,
    },
    authorComTag: {
        type: "string",
        default: "H4",
    },
    text: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__text",
    },
    authorCom: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author_comp",
        default: "Leap13",
    },
    authorComColor: {
        type: "string",
    },
    authorComSize: {
        type: "number",
    },
    urlCheck: {
        type: "boolean",
        default: false,
    },
    urlText: {
        type: "string",
    },
    urlTarget: {
        type: "boolean",
        default: false,
    },
    quotSize: {
        type: "number",
    },
    quotColor: {
        type: "string",
    },
    quotOpacity: {
        type: "number",
    },
    bodyColor: {
        type: "string",
    },
    bodySize: {
        type: "number",
    },
    bodyLine: {
        type: "number",
    },
    bodyTop: {
        type: "number",
    },
    bodyBottom: {
        type: "number",
    },
    dashColor: {
        type: "string",
    },
};

const testimonialsAttrs_1_3_9 = Object.assign(
    testimonialsAttrs_1_0_1,
    newAttributes_1_3_9
);

const testimonialsAttrs_1_6_5 = Object.assign(
    testimonialsAttrs_1_3_9,
    newAttributes_1_6_5
);

const testimonialsAttrs_2_0 = {
    align: {
        type: "string",
        default: "center"
    },
    authorImgId: {
        type: "string"
    },
    authorImgUrl: {
        type: "string"
    },
    imgRadius: {
        type: "string",
        default: "50%"
    },
    imgSize: {
        type: "number"
    },
    imgBorder: {
        type: "number",
        default: "1"
    },
    imgBorderColor: {
        type: "string"
    },
    author: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author",
        default: "John Doe"
    },
    authorTag: {
        type: "string",
        default: "H3"
    },
    authorColor: {
        type: "string"
    },
    authorSize: {
        type: "number"
    },
    authorLetter: {
        type: "number"
    },
    authorStyle: {
        type: "string"
    },
    authorUpper: {
        type: "boolean"
    },
    authorWeight: {
        type: "number",
        default: 500
    },
    authorComTag: {
        type: "string",
        default: "H4"
    },
    text: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__text"
    },
    authorCom: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author_comp",
        default: "Leap13"
    },
    authorComColor: {
        type: "string"
    },
    authorComSize: {
        type: "number"
    },
    urlCheck: {
        type: "boolean",
        default: false
    },
    urlText: {
        type: "string"
    },
    urlTarget: {
        type: "boolean",
        default: false
    },
    quotSize: {
        type: "number"
    },
    quotColor: {
        type: "string"
    },
    quotOpacity: {
        type: "number"
    },
    bodyColor: {
        type: "string"
    },
    bodySize: {
        type: "number"
    },
    bodyLine: {
        type: "number"
    },
    bodyTop: {
        type: "number"
    },
    bodyBottom: {
        type: "number"
    },
    dashColor: {
        type: "string"
    },
    shadowColor: {
        type: "string"
    },
    shadowBlur: {
        type: "number"
    },
    shadowHorizontal: {
        type: "number"
    },
    shadowVertical: {
        type: "number"
    },
    shadowPosition: {
        type: "string"
    },
    backColor: {
        type: "string"
    },
    imageID: {
        type: "string"
    },
    imageURL: {
        type: "string"
    },
    backgroundRepeat: {
        type: "string",
        default: "no-repeat"
    },
    backgroundPosition: {
        type: "string",
        default: "top center"
    },
    backgroundSize: {
        type: "string",
        default: "auto"
    },
    fixed: {
        type: "boolean",
        default: false
    },
    paddingTop: {
        type: "number"
    },
    paddingRight: {
        type: "number"
    },
    paddingBottom: {
        type: "number"
    },
    paddingLeft: {
        type: "number"
    },
    paddingUnit: {
        type: "string",
        default: "px"
    }
}
const newAttributes_2_2 = {
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    authorSizeUnit: {
        type: 'string',
        default: 'px'
    },
    authorSizeMobile: {
        type: "number"
    },
    authorSizeTablet: {
        type: "number"
    },
    authorComSizeUnit: {
        type: "string",
        default: 'px'
    },
    authorComSizeMobile: {
        type: 'number'
    },
    authorComSizeTablet: {
        type: 'number'
    },
    bodySizeUnit: {
        type: "string",
        default: 'px'
    },
    bodySizeMobile: {
        type: "number"
    },
    bodySizeTablet: {
        type: "string"
    },
    backOpacity: {
        type: "number"
    }
}
const testimonialsAttrs_2_2 = Object.assign(testimonialsAttrs_2_0, newAttributes_2_2);


const newAttributes_2_3 = {
    paddingTop: {
        type: "number"
    },
    paddingRight: {
        type: "number"
    },
    paddingBottom: {
        type: "number"
    },
    paddingLeft: {
        type: "number"
    },
    paddingTopTablet: {
        type: "number"
    },
    paddingRightTablet: {
        type: "number"
    },
    paddingBottomTablet: {
        type: "number"
    },
    paddingLeftTablet: {
        type: "number"
    },
    paddingTopMobile: {
        type: "number"
    },
    paddingRightMobile: {
        type: "number"
    },
    paddingBottomMobile: {
        type: "number"
    },
    paddingLeftMobile: {
        type: "number"
    },
    paddingUnit: {
        type: "string",
        default: "px"
    }
}

const testimonialAttributes = {
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    align: {
        type: "string",
        default: "center"
    },
    authorImgId: {
        type: "string"
    },
    authorImgUrl: {
        type: "string"
    },
    imgRadius: {
        type: "string",
        default: "50%"
    },
    imgSize: {
        type: "number"
    },
    imgBorder: {
        type: "number",
        default: "1"
    },
    imgBorderColor: {
        type: "string"
    },
    author: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author",
        default: "John Doe"
    },
    authorTag: {
        type: "string",
        default: "H3"
    },
    authorColor: {
        type: "string"
    },
    authorSize: {
        type: "number"
    },
    authorSizeUnit: {
        type: 'string',
        default: 'px'
    },
    authorSizeMobile: {
        type: "number"
    },
    authorSizeTablet: {
        type: "number"
    },
    authorLetter: {
        type: "number"
    },
    authorStyle: {
        type: "string"
    },
    authorUpper: {
        type: "boolean"
    },
    authorWeight: {
        type: "number",
        default: 500
    },
    authorComTag: {
        type: "string",
        default: "H4"
    },
    text: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__text"
    },
    authorCom: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author_comp",
        default: "Leap13"
    },
    authorComColor: {
        type: "string"
    },
    authorComSize: {
        type: "number"
    },
    authorComSizeUnit: {
        type: "string",
        default: 'px'
    },
    authorComSizeMobile: {
        type: 'number'
    },
    authorComSizeTablet: {
        type: 'number'
    },
    urlCheck: {
        type: "boolean",
        default: false
    },
    urlText: {
        type: "string"
    },
    urlTarget: {
        type: "boolean",
        default: false
    },
    quotSize: {
        type: "number"
    },
    quotColor: {
        type: "string"
    },
    quotOpacity: {
        type: "number"
    },
    bodyColor: {
        type: "string"
    },
    bodySize: {
        type: "number"
    },
    bodySizeUnit: {
        type: "string",
        default: 'px'
    },
    bodySizeMobile: {
        type: "number"
    },
    bodySizeTablet: {
        type: "string"
    },
    bodyLine: {
        type: "number"
    },
    bodyTop: {
        type: "number"
    },
    bodyBottom: {
        type: "number"
    },
    dashColor: {
        type: "string"
    },
    shadowColor: {
        type: "string"
    },
    shadowBlur: {
        type: "number"
    },
    shadowHorizontal: {
        type: "number"
    },
    shadowVertical: {
        type: "number"
    },
    shadowPosition: {
        type: "string"
    },
    backColor: {
        type: "string"
    },
    backOpacity: {
        type: "number",
        default: "1"
    },
    imageID: {
        type: "string"
    },
    imageURL: {
        type: "string"
    },
    backgroundRepeat: {
        type: "string",
        default: "no-repeat"
    },
    backgroundPosition: {
        type: "string",
        default: "top center"
    },
    backgroundSize: {
        type: "string",
        default: "auto"
    },
    fixed: {
        type: "boolean",
        default: false
    },
    paddingTop: {
        type: "number"
    },
    paddingRight: {
        type: "number"
    },
    paddingBottom: {
        type: "number"
    },
    paddingLeft: {
        type: "number"
    },
    paddingUnit: {
        type: "string",
        default: "px"
    },
    hideDesktop: {
        type: 'boolean',
        default: false
    },
    hideTablet: {
        type: 'boolean',
        default: false
    },
    hideMobile: {
        type: 'boolean',
        default: false
    }
}
const testimonialsAttrs_2_3 = Object.assign(testimonialAttributes, newAttributes_2_3)
const deprecatedContent = [
    {
        attributes: testimonialsAttrs_2_3,
        migrate: attributes => {
            let newAttributes = {
                paddingTopTablet: "",
                paddingRightTablet: "",
                paddingBottomTablet: "",
                paddingLeftTablet: "",
                paddingTopMobile: "",
                paddingRightMobile: "",
                paddingBottomMobile: "",
                paddingLeftMobile: "",

            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
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
                authorLetter,
                authorStyle,
                authorUpper,
                authorWeight,
                author,
                authorComTag,
                authorComColor,
                authorCom,
                quotSize,
                quotColor,
                quotOpacity,
                bodyColor,
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
            return (
                <div
                    id={`premium-testimonial-${block_id}`}
                    className={`${className}__wrap premium-testimonial-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
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
        }
    },

    {
        attributes: testimonialsAttrs_2_2,
        migrate: attributes => {
            let newAttributes = {
                classMigrate: false,
                block_id: '',
                bodySizeUnit: 'px',
                bodySizeTablet: '',
                bodySizeMobile: '',
                authorSizeUnit: 'px',
                authorComSizeTablet: '',
                authorSizeTablet: '',
                authorSizeMobile: '',
                authorComSizeMobile: '',
                authorComSizeUnit: 'px',
                backOpacity: "",
            }
            return Object.assign(attributes, newAttributes);
        },
        save: props => {
            const {
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
            } = props.attributes;

            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        paddingTop: paddingTop + paddingUnit,
                        paddingBottom: paddingBottom + paddingUnit,
                        paddingLeft: paddingLeft + paddingUnit,
                        paddingRight: paddingRight + paddingUnit,
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
                                textAlign: align,
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
                                            height: imgSize + "px",
                                        }}
                                    />
                                )}
                                {!authorImgUrl && (
                                    <DefaultImage className={className} />
                                )}
                            </div>
                            <div className={`premium-testimonial__text_wrap`}>
                                <div>
                                    <RichText.Content
                                        tagName="p"
                                        className={`premium-testimonial__text`}
                                        value={text}
                                        style={{
                                            color: bodyColor,
                                            fontSize: bodySize + "px",
                                            lineHeight: bodyLine + "px",
                                            marginTop: bodyTop + "px",
                                            marginBottom: bodyBottom + "px",
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
                                        fontSize: authorSize + "px",
                                        letterSpacing: authorLetter + "px",
                                        textTransform: authorUpper
                                            ? "uppercase"
                                            : "none",
                                        fontStyle: authorStyle,
                                        fontWeight: authorWeight,
                                    }}
                                />
                                <span
                                    className={`premium-testimonial__sep`}
                                    style={{
                                        color: dashColor,
                                    }}
                                >
                                    &nbsp;-&nbsp;
                                </span>
                                <div
                                    className={`premium-testimonial__link_wrap`}
                                >
                                    <RichText.Content
                                        tagName={authorComTag.toLowerCase()}
                                        className={`premium-testimonial__author_comp`}
                                        value={authorCom}
                                        style={{
                                            color: authorComColor,
                                            fontSize: authorComSize + "px",
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
        },
    },
    {
        attributes: testimonialsAttrs_1_6_5,
        migrate: (attributes) => {
            let newAttributes = {
                paddingTop: "",
                paddingRight: "",
                paddingBottom: "",
                paddingLeft: "",
                paddingUnit: "px",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
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
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
            } = props.attributes;

            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    <div className={`${className}__container`}>
                        <span className={`${className}__upper`}>
                            <PremiumUpperQuote
                                size={quotSize}
                                color={quotColor}
                                opacity={quotOpacity}
                            />
                        </span>
                        <div
                            className={`${className}__content`}
                            style={{
                                textAlign: align,
                            }}
                        >
                            <div className={`${className}__img_wrap`}>
                                {authorImgUrl && (
                                    <img
                                        className={`${className}__img`}
                                        src={`${authorImgUrl}`}
                                        alt="Author"
                                        style={{
                                            borderWidth: imgBorder + "px",
                                            borderRadius: imgRadius,
                                            borderColor: imgBorderColor,
                                            width: imgSize + "px",
                                            height: imgSize + "px",
                                        }}
                                    />
                                )}
                                {!authorImgUrl && (
                                    <DefaultImage className={className} />
                                )}
                            </div>
                            <div className={`${className}__text_wrap`}>
                                <div>
                                    <RichText.Content
                                        tagName="p"
                                        className={`${className}__text`}
                                        value={text}
                                        style={{
                                            color: bodyColor,
                                            fontSize: bodySize + "px",
                                            lineHeight: bodyLine + "px",
                                            marginTop: bodyTop + "px",
                                            marginBottom: bodyBottom + "px",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={`${className}__info`}>
                                <RichText.Content
                                    tagName={authorTag.toLowerCase()}
                                    className={`${className}__author`}
                                    value={author}
                                    style={{
                                        color: authorColor,
                                        fontSize: authorSize + "px",
                                        letterSpacing: authorLetter + "px",
                                        textTransform: authorUpper
                                            ? "uppercase"
                                            : "none",
                                        fontStyle: authorStyle,
                                        fontWeight: authorWeight,
                                    }}
                                />
                                <span
                                    className={`${className}__sep`}
                                    style={{
                                        color: dashColor,
                                    }}
                                >
                                    &nbsp;-&nbsp;
                                </span>
                                <div className={`${className}__link_wrap`}>
                                    <RichText.Content
                                        tagName={authorComTag.toLowerCase()}
                                        className={`${className}__author_comp`}
                                        value={authorCom}
                                        style={{
                                            color: authorComColor,
                                            fontSize: authorComSize + "px",
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
                        <span className={`${className}__lower`}>
                            <PremiumLowerQuote
                                color={quotColor}
                                size={quotSize}
                                opacity={quotOpacity}
                            />
                        </span>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: testimonialsAttrs_1_3_9,
        migrate: (attributes) => {
            let newAttributes = {
                backColor: "",
                imageID: "",
                imageURL: "",
                fixed: false,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "auto",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
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
            } = props.attributes;

            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    }}
                >
                    <div className={`${className}__container`}>
                        <span className={`${className}__upper`}>
                            <PremiumUpperQuote
                                size={quotSize}
                                color={quotColor}
                                opacity={quotOpacity}
                            />
                        </span>
                        <div
                            className={`${className}__content`}
                            style={{
                                textAlign: align,
                            }}
                        >
                            <div className={`${className}__img_wrap`}>
                                {authorImgUrl && (
                                    <img
                                        className={`${className}__img`}
                                        src={`${authorImgUrl}`}
                                        alt="Author"
                                        style={{
                                            borderWidth: imgBorder + "px",
                                            borderRadius: imgRadius,
                                            borderColor: imgBorderColor,
                                            width: imgSize + "px",
                                            height: imgSize + "px",
                                        }}
                                    />
                                )}
                                {!authorImgUrl && (
                                    <DefaultImage className={className} />
                                )}
                            </div>
                            <div className={`${className}__text_wrap`}>
                                <div>
                                    <RichText.Content
                                        tagName="p"
                                        className={`${className}__text`}
                                        value={text}
                                        style={{
                                            color: bodyColor,
                                            fontSize: bodySize + "px",
                                            lineHeight: bodyLine + "px",
                                            marginTop: bodyTop + "px",
                                            marginBottom: bodyBottom + "px",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={`${className}__info`}>
                                <RichText.Content
                                    tagName={authorTag.toLowerCase()}
                                    className={`${className}__author`}
                                    value={author}
                                    style={{
                                        color: authorColor,
                                        fontSize: authorSize + "px",
                                        letterSpacing: authorLetter + "px",
                                        textTransform: authorUpper
                                            ? "uppercase"
                                            : "none",
                                        fontStyle: authorStyle,
                                        fontWeight: authorWeight,
                                    }}
                                />
                                <span
                                    className={`${className}__sep`}
                                    style={{
                                        color: dashColor,
                                    }}
                                >
                                    &nbsp;-&nbsp;
                                </span>
                                <div className={`${className}__link_wrap`}>
                                    <RichText.Content
                                        tagName={authorComTag.toLowerCase()}
                                        className={`${className}__author_comp`}
                                        value={authorCom}
                                        style={{
                                            color: authorComColor,
                                            fontSize: authorComSize + "px",
                                        }}
                                    />
                                    {urlCheck && (
                                        <a
                                            href={urlText}
                                            target={urlTarget ? "_blank" : ""}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <span className={`${className}__lower`}>
                            <PremiumLowerQuote
                                color={quotColor}
                                size={quotSize}
                                opacity={quotOpacity}
                            />
                        </span>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: testimonialsAttrs_1_0_1,
        migrate: (attributes) => {
            let newAttributes = {
                shadowColor: "",
                shadowBlur: "",
                shadowHorizontal: "",
                shadowVertical: "",
                shadowPosition: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
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
            } = props.attributes;

            return (
                <div className={`${className}__wrap`}>
                    <div className={`${className}__container`}>
                        <span className={`${className}__upper`}>
                            <PremiumUpperQuote
                                size={quotSize}
                                color={quotColor}
                                opacity={quotOpacity}
                            />
                        </span>
                        <div
                            className={`${className}__content`}
                            style={{
                                textAlign: align,
                            }}
                        >
                            <div className={`${className}__img_wrap`}>
                                {authorImgUrl && (
                                    <img
                                        className={`${className}__img`}
                                        src={`${authorImgUrl}`}
                                        alt="Author"
                                        style={{
                                            borderWidth: imgBorder + "px",
                                            borderRadius: imgRadius,
                                            borderColor: imgBorderColor,
                                            width: imgSize + "px",
                                            height: imgSize + "px",
                                        }}
                                    />
                                )}
                                {!authorImgUrl && (
                                    <DefaultImage className={className} />
                                )}
                            </div>
                            <div className={`${className}__text_wrap`}>
                                <div>
                                    <RichText.Content
                                        tagName="p"
                                        className={`${className}__text`}
                                        value={text}
                                        style={{
                                            color: bodyColor,
                                            fontSize: bodySize + "px",
                                            lineHeight: bodyLine + "px",
                                            marginTop: bodyTop + "px",
                                            marginBottom: bodyBottom + "px",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={`${className}__info`}>
                                <RichText.Content
                                    tagName={authorTag.toLowerCase()}
                                    className={`${className}__author`}
                                    value={author}
                                    style={{
                                        color: authorColor,
                                        fontSize: authorSize + "px",
                                        letterSpacing: authorLetter + "px",
                                        textTransform: authorUpper
                                            ? "uppercase"
                                            : "none",
                                        fontStyle: authorStyle,
                                        fontWeight: authorWeight,
                                    }}
                                />
                                <span
                                    className={`${className}__sep`}
                                    style={{
                                        color: dashColor,
                                    }}
                                >
                                    &nbsp;-&nbsp;
                                </span>
                                <div className={`${className}__link_wrap`}>
                                    <RichText.Content
                                        tagName={authorComTag.toLowerCase()}
                                        className={`${className}__author_comp`}
                                        value={authorCom}
                                        style={{
                                            color: authorComColor,
                                            fontSize: authorComSize + "px",
                                        }}
                                    />
                                    {urlCheck && (
                                        <a
                                            href={urlText}
                                            target={urlTarget ? "_blank" : ""}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <span className={`${className}__lower`}>
                            <PremiumLowerQuote
                                color={quotColor}
                                size={quotSize}
                                opacity={quotOpacity}
                            />
                        </span>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: testimonialsAttrs_1_0_1,
        save: (props) => {
            const {
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
            } = props.attributes;

            return (
                <div className={`${className}__wrap`}>
                    <div className={`${className}__container`}>
                        <span className={`${className}__upper`}>
                            <PremiumUpperQuote
                                size={quotSize}
                                color={quotColor}
                                opacity={quotOpacity}
                            />
                        </span>
                        <div
                            className={`${className}__content`}
                            style={{
                                textAlign: align,
                            }}
                        >
                            <div className={`${className}__img_wrap`}>
                                {authorImgUrl && (
                                    <img
                                        className={`${className}__img`}
                                        src={`${authorImgUrl}`}
                                        alt="Author"
                                        style={{
                                            borderWidth: imgBorder + "px",
                                            borderRadius: imgRadius,
                                            borderColor: imgBorderColor,
                                            width: imgSize + "px",
                                            height: imgSize + "px",
                                        }}
                                    />
                                )}
                                {!authorImgUrl && (
                                    <DefaultImage className={className} />
                                )}
                            </div>
                            <div className={`${className}__text_wrap`}>
                                <div>
                                    <RichText.Content
                                        tagName="p"
                                        className={`${className}__text`}
                                        value={text}
                                        style={{
                                            color: bodyColor,
                                            fontSize: bodySize + "px",
                                            lineHeight: bodyLine + "px",
                                            marginTop: bodyTop + "px",
                                            marginBottom: bodyBottom + "px",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={`${className}__info`}>
                                <RichText.Content
                                    tagName={authorTag.toLowerCase()}
                                    className={`${className}__author`}
                                    value={author}
                                    style={{
                                        color: authorColor,
                                        fontSize: authorSize + "px",
                                    }}
                                />
                                <span
                                    className={`${className}__sep`}
                                    style={{
                                        color: dashColor,
                                    }}
                                >
                                    &nbsp;-&nbsp;
                                </span>
                                <div className={`${className}__link_wrap`}>
                                    <RichText.Content
                                        tagName={authorComTag.toLowerCase()}
                                        className={`${className}__author_comp`}
                                        value={authorCom}
                                        style={{
                                            color: authorComColor,
                                            fontSize: authorComSize + "px",
                                        }}
                                    />
                                    {urlCheck && (
                                        <a
                                            href={urlText}
                                            target={urlTarget ? "_blank" : ""}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <span className={`${className}__lower`}>
                            <PremiumLowerQuote
                                color={quotColor}
                                size={quotSize}
                                opacity={quotOpacity}
                            />
                        </span>
                    </div>
                </div>
            );
        },
    },
];

export default deprecatedContent;
