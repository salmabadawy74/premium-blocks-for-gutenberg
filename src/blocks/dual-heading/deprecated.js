import classnames from "classnames";
import hexToRgba from "hex-to-rgba";

const className = "premium-dheading-block";

const deprecated_attributes_1_3_0 = {
    contentAlign: {
        type: "string",
        default: "center",
    },
    firstHeading: {
        type: "array",
        source: "children",
        default: "Premium ",
        selector: ".premium-dheading-block__first",
    },
    secondHeading: {
        type: "array",
        source: "children",
        default: "Blocks",
        selector: ".premium-dheading-block__second",
    },
    titleTag: {
        type: "string",
        default: "h1",
    },
    display: {
        type: "string",
        default: "inline",
    },
    firstColor: {
        type: "string",
        default: "#6ec1e4",
    },
    firstSize: {
        type: "number",
        default: "20",
    },
    firstLetter: {
        type: "number",
    },
    firstStyle: {
        type: "string",
    },
    firstUpper: {
        type: "boolean",
    },
    firstWeight: {
        type: "number",
        default: 500,
    },
    firstBackground: {
        type: "string",
    },
    firstBorderType: {
        type: "string",
        default: "none",
    },
    firstBorderWidth: {
        type: "number",
        default: "1",
    },
    firstBorderRadius: {
        type: "number",
        default: "0",
    },
    firstBorderColor: {
        type: "string",
    },
    firstMarginR: {
        type: "number",
        default: "0",
    },
    firstMarginL: {
        type: "number",
        default: "0",
    },
    firstPadding: {
        type: "number",
        default: "0",
    },
    firstClip: {
        type: "boolean",
        default: false,
    },
    firstAnim: {
        type: "boolean",
        default: false,
    },
    firstClipColor: {
        type: "string",
        default: "#54595f",
    },
    firstShadowColor: {
        type: "string",
    },
    firstShadowBlur: {
        type: "number",
        default: "0",
    },
    firstShadowHorizontal: {
        type: "number",
        default: "0",
    },
    firstShadowVertical: {
        type: "number",
        default: "0",
    },
    secondColor: {
        type: "string",
        default: "#54595f",
    },
    secondSize: {
        type: "number",
        default: "20",
    },
    secondLetter: {
        type: "number",
    },
    secondStyle: {
        type: "string",
    },
    secondUpper: {
        type: "boolean",
    },
    secondWeight: {
        type: "number",
        default: 500,
    },
    secondBackground: {
        type: "string",
    },
    secondBorderType: {
        type: "string",
        default: "none",
    },
    secondBorderWidth: {
        type: "number",
        default: "1",
    },
    secondBorderRadius: {
        type: "number",
        default: "0",
    },
    secondBorderColor: {
        type: "string",
    },
    secondMarginR: {
        type: "number",
        default: "0",
    },
    secondMarginL: {
        type: "number",
        default: "0",
    },
    secondPadding: {
        type: "number",
        default: "0",
    },
    secondClip: {
        type: "boolean",
        default: false,
    },
    secondShadowColor: {
        type: "string",
    },
    secondShadowBlur: {
        type: "number",
        default: "0",
    },
    secondShadowHorizontal: {
        type: "number",
        default: "0",
    },
    secondShadowVertical: {
        type: "number",
        default: "0",
    },
    secondAnim: {
        type: "boolean",
        default: false,
    },
    secondClipColor: {
        type: "string",
        default: "#6ec1e4",
    },
    link: {
        type: "boolean",
        default: false,
    },
    target: {
        type: "boolean",
        default: false,
    },
    headingURL: {
        type: "string",
    },
    containerBack: {
        type: "string",
    },
};

const newAttributes_1_4_1 = {
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

const deprecated_attributes_1_4_1 = Object.assign(
    deprecated_attributes_1_3_0,
    newAttributes_1_4_1
);

const newAttributes_1_4_8 = {
    firstFamily: {
        type: "string",
    },
    secondFamily: {
        type: "string",
    },
};

const newAttributes_1_7_2 = {
    containerBorderType: {
        type: "string",
        default: "none",
    },
    containerBorderWidth: {
        type: "number",
        default: "1",
    },
    containerBorderRadius: {
        type: "number",
        default: "0",
    },
    containerBorderColor: {
        type: "string",
    },
};

const deprecated_attributes_1_4_8 = Object.assign(
    deprecated_attributes_1_4_1,
    newAttributes_1_4_8
);

const deprecated_attributes_1_7_2 = Object.assign(
    deprecated_attributes_1_4_8,
    newAttributes_1_7_2
);

const deprecated_attributes_1_9_2 = {
    contentAlign: {
        type: "string",
        default: "center",
    },
    firstHeading: {
        type: "array",
        source: "children",
        default: "Premium ",
        selector: ".premium-dheading-block__first",
    },
    secondHeading: {
        type: "array",
        source: "children",
        default: "Blocks",
        selector: ".premium-dheading-block__second",
    },
    titleTag: {
        type: "string",
        default: "h1",
    },
    display: {
        type: "string",
        default: "inline",
    },
    firstColor: {
        type: "string",
        default: "#6ec1e4",
    },
    firstSize: {
        type: "number",
        default: "20",
    },
    firstFamily: {
        type: "string",
    },
    firstLetter: {
        type: "number",
    },
    firstStyle: {
        type: "string",
    },
    firstUpper: {
        type: "boolean",
    },
    firstWeight: {
        type: "number",
        default: 500,
    },
    firstBackground: {
        type: "string",
    },
    firstBorderType: {
        type: "string",
        default: "none",
    },
    firstBorderWidth: {
        type: "number",
        default: "1",
    },
    firstBorderRadius: {
        type: "number",
        default: "0",
    },
    firstBorderColor: {
        type: "string",
    },
    firstMarginR: {
        type: "number",
        default: "0",
    },
    firstMarginL: {
        type: "number",
        default: "0",
    },
    firstPadding: {
        type: "number",
        default: "0",
    },
    firstClip: {
        type: "boolean",
        default: false,
    },
    firstAnim: {
        type: "boolean",
        default: false,
    },
    firstStroke: {
        type: "boolean",
        default: false,
    },
    firstClipColor: {
        type: "string",
        default: "#54595f",
    },
    firstShadowColor: {
        type: "string",
    },
    firstShadowBlur: {
        type: "number",
        default: "0",
    },
    firstShadowHorizontal: {
        type: "number",
        default: "0",
    },
    firstShadowVertical: {
        type: "number",
        default: "0",
    },
    secondColor: {
        type: "string",
        default: "#54595f",
    },
    secondSize: {
        type: "number",
        default: "20",
    },
    secondFamily: {
        type: "string",
    },
    secondLetter: {
        type: "number",
    },
    secondStyle: {
        type: "string",
    },
    secondUpper: {
        type: "boolean",
    },
    secondWeight: {
        type: "number",
        default: 500,
    },
    secondBackground: {
        type: "string",
    },
    secondBorderType: {
        type: "string",
        default: "none",
    },
    secondBorderWidth: {
        type: "number",
        default: "1",
    },
    secondBorderRadius: {
        type: "number",
        default: "0",
    },
    secondBorderColor: {
        type: "string",
    },
    secondMarginR: {
        type: "number",
        default: "0",
    },
    secondMarginL: {
        type: "number",
        default: "0",
    },
    secondPadding: {
        type: "number",
        default: "0",
    },
    secondClip: {
        type: "boolean",
        default: false,
    },
    secondStroke: {
        type: "boolean",
        default: false,
    },
    secondShadowColor: {
        type: "string",
    },
    secondShadowBlur: {
        type: "number",
        default: "0",
    },
    secondShadowHorizontal: {
        type: "number",
        default: "0",
    },
    secondShadowVertical: {
        type: "number",
        default: "0",
    },
    secondAnim: {
        type: "boolean",
        default: false,
    },
    secondClipColor: {
        type: "string",
        default: "#6ec1e4",
    },
    link: {
        type: "boolean",
        default: false,
    },
    target: {
        type: "boolean",
        default: false,
    },
    headingURL: {
        type: "string",
    },
    containerBack: {
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
    containerBorderType: {
        type: "string",
        default: "none",
    },
    containerBorderWidth: {
        type: "number",
        default: "1",
    },
    containerBorderRadius: {
        type: "number",
        default: "0",
    },
    containerBorderColor: {
        type: "string",
    },
};

const newAttributes_1_9_5 = {
    firstBorder: {
        type: "boolean",
        default: false,
    },
    firstBorderTop: {
        type: "number",
    },
    firstBorderRight: {
        type: "number",
    },
    firstBorderBottom: {
        type: "number",
    },
    firstBorderLeft: {
        type: "number",
    },
    secondBorderTop: {
        type: "number",
    },
    secondBorderRight: {
        type: "number",
    },
    secondBorderBottom: {
        type: "number",
    },
    secondBorderLeft: {
        type: "number",
    },
    containerBorderTop: {
        type: "number",
    },
    containerBorderRight: {
        type: "number",
    },
    containerBorderBottom: {
        type: "number",
    },
    containerBorderLeft: {
        type: "number",
    },
    containerBorder: {
        type: "boolean",
    },
    secondBorder: {
        type: "boolean",
    },
    firstBorder: {
        type: "boolean",
    },
    block_id: {
        type: "string"
    },
    firstSizeUnit: {
        type: "string",
        default: 'px'
    },
    firstSizeTablet: {
        type: "number"
    },
    firstSizeMobile: {
        type: "number"
    },
    secondSizeUnit: {
        type: "string",
        default: 'px'
    },
    secondSizeTablet: {
        type: "number"
    },
    secondSizeMobile: {
        type: "number"
    },
    classMigrate: {
        type: "boolean",
        default: false
    }
};

const deprecated_attributes_1_9_5 = Object.assign(
    deprecated_attributes_1_9_2,
    newAttributes_1_9_5
);

const newAttributes_1_8_1 = {
    firstPaddingT: {
        type: "number",
        default: "0"
    },
    firstPaddingR: {
        type: "number",
        default: "0"
    },
    firstPaddingB: {
        type: "number",
        default: "0"
    },
    firstPaddingL: {
        type: "number",
        default: "0"
    },
    firstPaddingTTablet: {
        type: "number",
        default: "0"
    },
    firstPaddingRTablet: {
        type: "number",
        default: "0"
    },
    firstPaddingBTablet: {
        type: "number",
        default: "0"
    },
    firstPaddingLTablet: {
        type: "number",
        default: "0"
    },
    firstPaddingTMobile: {
        type: "number",
        default: "0"
    },
    firstPaddingRMobile: {
        type: "number",
        default: "0"
    },
    firstPaddingBMobile: {
        type: "number",
        default: "0"
    },
    firstPaddingLMobile: {
        type: "number",
        default: "0"
    },
    secondPaddingT: {
        type: "number",
        default: "0"
    },
    secondPaddingR: {
        type: "number",
        default: "0"
    },
    secondPaddingB: {
        type: "number",
        default: "0"
    },
    secondPaddingL: {
        type: "number",
        default: "0"
    },
    secondPaddingTTablet: {
        type: "number",
        default: "0"
    },
    secondPaddingRTablet: {
        type: "number",
        default: "0"
    },
    secondPaddingBTablet: {
        type: "number",
        default: "0"
    },
    secondPaddingLTablet: {
        type: "number",
        default: "0"
    },
    secondPaddingTMobile: {
        type: "number",
        default: "0"
    },
    secondPaddingRMobile: {
        type: "number",
        default: "0"
    },
    secondPaddingBMobile: {
        type: "number",
        default: "0"
    },
    secondPaddingLMobile: {
        type: "number",
        default: "0"
    },
    firstMarginRTablet: {
        type: "number",
        default: "0"
    },
    firstMarginLTablet: {
        type: "number",
        default: "0"
    },
    firstMarginRMobile: {
        type: "number",
        default: "0"
    },
    firstMarginLMobile: {
        type: "number",
        default: "0"
    },
    secondMarginRTablet: {
        type: "number",
        default: "0"
    },
    secondMarginLTablet: {
        type: "number",
        default: "0"
    },
    secondMarginRMobile: {
        type: "number",
        default: "0"
    },
    secondMarginLMobile: {
        type: "number",
        default: "0"
    },
}

const deprecated_attributes_1_8_1 = Object.assign(
    deprecated_attributes_1_9_5,
    newAttributes_1_8_1
);

const deprecatedContent = [
    {
        attributes: deprecated_attributes_1_8_1,
        migrate: attributes => {
            let newAttributes = {
                firstPaddingT: "",
                firstPaddingR: "",
                firstPaddingB: "",
                firstPaddingL: "",
                firstPaddingTTablet: "",
                firstPaddingRTablet: "",
                firstPaddingBTablet: "",
                firstPaddingLTablet: "",
                firstPaddingTMobile: "",
                firstPaddingRMobile: "",
                firstPaddingBMobile: "",
                firstPaddingLMobile: "",
                secondPaddingT: "",
                secondPaddingR: "",
                secondPaddingB: "",
                secondPaddingL: "",
                secondPaddingTTablet: "",
                secondPaddingRTablet: "",
                secondPaddingBTablet: "",
                secondPaddingLTablet: "",
                secondPaddingTMobile: "",
                secondPaddingRMobile: "",
                secondPaddingBMobile: "",
                secondPaddingLMobile: "",
                firstMarginRTablet: "",
                firstMarginLTablet: "",
                firstMarginRMobile: "",
                firstMarginLMobile: "",
                secondMarginRTablet: "",
                secondMarginLTablet: "",
                secondMarginRMobile: "",
                secondMarginLMobile: "",
            }
            return Object.assign(newAttributes, attributes)
        },
        save: props => {
            const {
                block_id,
                contentAlign,
                firstHeading,
                secondHeading,
                display,
                firstColor,
                firstBackground,
                firstFamily,
                firstStyle,
                firstUpper,
                firstLetter,
                firstWeight,
                firstBorderType,
                firstBorderWidth,
                firstBorderTop,
                firstBorderRight,
                firstBorderBottom,
                firstBorderLeft,
                firstBorderRadius,
                firstBorderColor,
                firstPadding,
                firstMargin,
                firstClip,
                firstAnim,
                firstStroke,
                firstClipColor,
                firstShadowBlur,
                firstShadowColor,
                firstShadowHorizontal,
                firstShadowVertical,
                secondColor,
                secondBackground,
                secondFamily,
                secondLetter,
                secondUpper,
                secondWeight,
                secondStyle,
                secondBorderType,
                secondBorderWidth,
                secondBorderTop,
                secondBorderRight,
                secondBorderBottom,
                secondBorderLeft,
                secondBorderRadius,
                secondBorderColor,
                secondPadding,
                secondMargin,
                secondClip,
                secondStroke,
                secondAnim,
                secondClipColor,
                secondShadowBlur,
                secondShadowColor,
                secondShadowHorizontal,
                secondShadowVertical,
                link,
                target,
                headingURL,
                containerBack,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                containerBorderType,
                containerBorderWidth,
                containerBorderTop,
                containerBorderRight,
                containerBorderBottom,
                containerBorderLeft,
                containerBorderRadius,
                containerBorderColor,
                firstBorder,
                secondBorder,
                containerBorder,
                firstOpacity,
                secondOpacity,
                containerOpacity,
                hideDesktop,
                hideTablet,
                hideMobile
            } = props.attributes;

            return (
                <div
                    id={`premium-dheading-block-${block_id}`}
                    className={`${className} premium-dheading-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        textAlign: contentAlign,
                        backgroundColor: containerBack
                            ? hexToRgba(containerBack, containerOpacity)
                            : "transparent",
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        borderStyle: containerBorderType,
                        borderWidth: containerBorder
                            ? `${containerBorderTop}px ${containerBorderRight}px ${containerBorderBottom}px ${containerBorderLeft}px`
                            : containerBorderWidth + "px",
                        borderRadius: containerBorderRadius + "px",
                        borderColor: containerBorderColor
                    }}
                >
                    <div className={`premium-dheading-block__wrap`}>
                        <h2 className={`premium-dheading-block__title`}>
                            <span
                                className={`premium-dheading-block__first premium-headingc-${firstClip} premium-headinga-${firstAnim} premium-headings-${firstStroke}`}
                                style={{
                                    display: display,
                                    color: firstColor,
                                    backgroundColor: firstClip
                                        ? "none"
                                        : firstBackground
                                            ? hexToRgba(firstBackground, firstOpacity)
                                            : "transparent",
                                    backgroundImage: firstClip
                                        ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                        : "none",
                                    fontFamily: firstFamily,
                                    letterSpacing: firstLetter + "px",
                                    textTransform: firstUpper ? "uppercase" : "none",
                                    fontStyle: firstStyle,
                                    fontWeight: firstWeight,
                                    borderStyle: firstBorderType,
                                    borderWidth: firstBorder
                                        ? `${firstBorderTop}px ${firstBorderRight}px ${firstBorderBottom}px ${firstBorderLeft}px`
                                        : firstBorderWidth + "px",
                                    borderRadius: firstBorderRadius + "px",
                                    borderColor: firstBorderColor,
                                    padding: firstPadding + "px",
                                    margin: firstMargin + "px",
                                    textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`
                                }}
                            >
                                {firstHeading}
                            </span>
                            <span
                                className={`premium-dheading-block__second premium-headingc-${secondClip} premium-headinga-${secondAnim} premium-headings-${secondStroke}`}
                                style={{
                                    display: display,
                                    color: secondColor,
                                    backgroundColor: secondClip
                                        ? "none"
                                        : secondBackground
                                            ? hexToRgba(secondBackground, secondOpacity)
                                            : "transparent",
                                    backgroundImage: secondClip
                                        ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                        : "none",
                                    fontFamily: secondFamily,
                                    letterSpacing: secondLetter + "px",
                                    textTransform: secondUpper ? "uppercase" : "none",
                                    fontStyle: secondStyle,
                                    fontWeight: secondWeight,
                                    borderStyle: secondBorderType,
                                    borderWidth: secondBorder
                                        ? `${secondBorderTop}px ${secondBorderRight}px ${secondBorderBottom}px ${secondBorderLeft}px`
                                        : secondBorderWidth + "px",
                                    borderRadius: secondBorderRadius + "px",
                                    borderColor: secondBorderColor,
                                    padding: secondPadding + "px",
                                    margin: secondMargin + "px",
                                    textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`
                                }}
                            >
                                {secondHeading}
                            </span>
                        </h2>
                        {link && headingURL && (
                            <a
                                className={`premium-dheading-block__link`}
                                href={link && headingURL}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        }
    },
    {
        attributes: deprecated_attributes_1_9_5,
        migrate: (attributes) => {
            let newAttributes = {
                firstBorder: "",
                secondBorder: "",
                containerBorder: "",
                containerBorderTop: "",
                containerBorderRight: "",
                containerBorderBottom: "",
                containerBorderLeft: "",
                firstBorderTop: "",
                firstBorderRight: "",
                firstBorderBottom: "",
                firstBorderLeft: "",
                secondBorderTop: "",
                secondBorderRight: "",
                secondBorderBottom: "",
                secondBorderLeft: "",
                classMigrate: false,
                block_id: '',
                secondSizeUnit: 'px',
                secondSizeTablet: '',
                secondSizeMobile: '',
                firstSizeUnit: 'px',
                firstSizeTablet: '',
                firstSizeMobile: '',
                firstOpacity: "",
                secondOpacity: "",
                containerOpacity: "",
                hideDesktop: false,
                hideTablet: false,
                hideMobile: false
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const { className } = props;
            const {
                contentAlign,
                firstHeading,
                secondHeading,
                display,
                firstColor,
                firstBackground,
                firstSize,
                firstFamily,
                firstStyle,
                firstUpper,
                firstLetter,
                firstWeight,
                firstBorderType,
                firstBorderWidth,
                firstBorderRadius,
                firstBorderColor,
                firstPadding,
                firstMargin,
                firstClip,
                firstAnim,
                firstStroke,
                firstClipColor,
                firstShadowBlur,
                firstShadowColor,
                firstShadowHorizontal,
                firstShadowVertical,
                secondColor,
                secondBackground,
                secondSize,
                secondFamily,
                secondLetter,
                secondUpper,
                secondWeight,
                secondStyle,
                secondBorderType,
                secondBorderWidth,
                secondBorderRadius,
                secondBorderColor,
                secondPadding,
                secondMargin,
                secondClip,
                secondStroke,
                secondAnim,
                secondClipColor,
                secondShadowBlur,
                secondShadowColor,
                secondShadowHorizontal,
                secondShadowVertical,
                link,
                target,
                headingURL,
                containerBack,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                containerBorderType,
                containerBorderWidth,
                containerBorderRadius,
                containerBorderColor,
            } = props.attributes;

            const mainClasses = classnames(
                className,
                "premium-dheading-block__container"
            );

            return (
                <div
                    className={`${mainClasses}`}
                    style={{
                        textAlign: contentAlign,
                        backgroundColor: containerBack,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        border: containerBorderType,
                        borderWidth: containerBorderWidth + "px",
                        borderRadius: containerBorderRadius + "px",
                        borderColor: containerBorderColor,
                    }}
                >
                    <div className={`premium-dheading-block__wrap`}>
                        <h2 className={`premium-dheading-block__title`}>
                            <span
                                className={`premium-dheading-block__first premium-headingc-${firstClip} premium-headinga-${firstAnim} premium-headings-${firstStroke}`}
                                style={{
                                    display: display,
                                    color: firstColor,
                                    backgroundColor: firstClip ? "none" : firstBackground,
                                    backgroundImage: firstClip
                                        ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                        : "none",
                                    fontSize: firstSize + "px",
                                    fontFamily: firstFamily,
                                    letterSpacing: firstLetter + "px",
                                    textTransform: firstUpper ? "uppercase" : "none",
                                    fontStyle: firstStyle,
                                    fontWeight: firstWeight,
                                    border: firstBorderType,
                                    borderWidth: firstBorderWidth + "px",
                                    borderRadius: firstBorderRadius + "px",
                                    borderColor: firstBorderColor,
                                    padding: firstPadding + "px",
                                    margin: firstMargin + "px",
                                    textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`,
                                }}
                            >
                                {firstHeading}
                            </span>
                            <span
                                className={`premium-dheading-block__second premium-headingc-${secondClip} premium-headinga-${secondAnim} premium-headings-${secondStroke}`}
                                style={{
                                    display: display,
                                    color: secondColor,
                                    backgroundColor: secondClip ? "none" : secondBackground,
                                    backgroundImage: secondClip
                                        ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                        : "none",
                                    fontSize: secondSize + "px",
                                    fontFamily: secondFamily,
                                    letterSpacing: secondLetter + "px",
                                    textTransform: secondUpper ? "uppercase" : "none",
                                    fontStyle: secondStyle,
                                    fontWeight: secondWeight,
                                    border: secondBorderType,
                                    borderWidth: secondBorderWidth + "px",
                                    borderRadius: secondBorderRadius + "px",
                                    borderColor: secondBorderColor,
                                    padding: secondPadding + "px",
                                    margin: secondMargin + "px",
                                    textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`,
                                }}
                            >
                                {secondHeading}
                            </span>
                        </h2>
                        {link && headingURL && (
                            <a
                                className={`premium-dheading-block__link`}
                                href={link && headingURL}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_7_2,
        migrate: (attributes) => {
            let newAttributes = {
                firstStroke: false,
                secondStroke: false,
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const { className } = props;

            const {
                contentAlign,
                firstHeading,
                secondHeading,
                display,
                firstColor,
                firstBackground,
                firstSize,
                firstFamily,
                firstStyle,
                firstUpper,
                firstLetter,
                firstWeight,
                firstBorderType,
                firstBorderWidth,
                firstBorderRadius,
                firstBorderColor,
                firstPadding,
                firstMargin,
                firstClip,
                firstAnim,
                firstClipColor,
                firstShadowBlur,
                firstShadowColor,
                firstShadowHorizontal,
                firstShadowVertical,
                secondColor,
                secondBackground,
                secondSize,
                secondFamily,
                secondLetter,
                secondUpper,
                secondWeight,
                secondStyle,
                secondBorderType,
                secondBorderWidth,
                secondBorderRadius,
                secondBorderColor,
                secondPadding,
                secondMargin,
                secondClip,
                secondAnim,
                secondClipColor,
                secondShadowBlur,
                secondShadowColor,
                secondShadowHorizontal,
                secondShadowVertical,
                link,
                target,
                headingURL,
                containerBack,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                containerBorderType,
                containerBorderWidth,
                containerBorderRadius,
                containerBorderColor,
            } = props.attributes;

            const mainClasses = classnames(
                className,
                "premium-dheading-block__container"
            );

            return (
                <div
                    className={`${mainClasses}`}
                    style={{
                        textAlign: contentAlign,
                        backgroundColor: containerBack,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        border: containerBorderType,
                        borderWidth: containerBorderWidth + "px",
                        borderRadius: containerBorderRadius + "px",
                        borderColor: containerBorderColor,
                    }}
                >
                    <div className={`premium-dheading-block__wrap`}>
                        <h2 className={`premium-dheading-block__title`}>
                            <span
                                className={`premium-dheading-block__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`}
                                style={{
                                    display: display,
                                    color: firstColor,
                                    backgroundColor: firstClip ? "none" : firstBackground,
                                    backgroundImage: firstClip
                                        ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                        : "none",
                                    fontSize: firstSize + "px",
                                    fontFamily: firstFamily,
                                    letterSpacing: firstLetter + "px",
                                    textTransform: firstUpper ? "uppercase" : "none",
                                    fontStyle: firstStyle,
                                    fontWeight: firstWeight,
                                    border: firstBorderType,
                                    borderWidth: firstBorderWidth + "px",
                                    borderRadius: firstBorderRadius + "px",
                                    borderColor: firstBorderColor,
                                    padding: firstPadding + "px",
                                    margin: firstMargin + "px",
                                    textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`,
                                }}
                            >
                                {firstHeading}
                            </span>
                            <span
                                className={`premium-dheading-block__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`}
                                style={{
                                    display: display,
                                    color: secondColor,
                                    backgroundColor: secondClip ? "none" : secondBackground,
                                    backgroundImage: secondClip
                                        ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                        : "none",
                                    fontSize: secondSize + "px",
                                    fontFamily: secondFamily,
                                    letterSpacing: secondLetter + "px",
                                    textTransform: secondUpper ? "uppercase" : "none",
                                    fontStyle: secondStyle,
                                    fontWeight: secondWeight,
                                    border: secondBorderType,
                                    borderWidth: secondBorderWidth + "px",
                                    borderRadius: secondBorderRadius + "px",
                                    borderColor: secondBorderColor,
                                    padding: secondPadding + "px",
                                    margin: secondMargin + "px",
                                    textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`,
                                }}
                            >
                                {secondHeading}
                            </span>
                        </h2>
                        {link && headingURL && (
                            <a
                                className={`premium-dheading-block__link`}
                                href={link && headingURL}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_4_8,
        migrate: (attributes) => {
            let newAttributes = {
                containerBorderType: "none",
                containerBorderWidth: "1",
                containerBorderRadius: "0",
                containerBorderColor: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                contentAlign,
                firstHeading,
                secondHeading,
                display,
                firstColor,
                firstBackground,
                firstSize,
                firstFamily,
                firstStyle,
                firstUpper,
                firstLetter,
                firstWeight,
                firstBorderType,
                firstBorderWidth,
                firstBorderRadius,
                firstBorderColor,
                firstPadding,
                firstMargin,
                firstClip,
                firstAnim,
                firstClipColor,
                firstShadowBlur,
                firstShadowColor,
                firstShadowHorizontal,
                firstShadowVertical,
                secondColor,
                secondBackground,
                secondSize,
                secondFamily,
                secondLetter,
                secondUpper,
                secondWeight,
                secondStyle,
                secondBorderType,
                secondBorderWidth,
                secondBorderRadius,
                secondBorderColor,
                secondPadding,
                secondMargin,
                secondClip,
                secondAnim,
                secondClipColor,
                secondShadowBlur,
                secondShadowColor,
                secondShadowHorizontal,
                secondShadowVertical,
                link,
                target,
                headingURL,
                containerBack,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
            } = props.attributes;

            return (
                <div
                    className={`${className}__container`}
                    style={{
                        textAlign: contentAlign,
                        backgroundColor: containerBack,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    <div className={`${className}__wrap`}>
                        <h2 className={`${className}__title`}>
                            <span
                                className={`${className}__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`}
                                style={{
                                    display: display,
                                    color: firstColor,
                                    backgroundColor: firstClip ? "none" : firstBackground,
                                    backgroundImage: firstClip
                                        ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                        : "none",
                                    fontSize: firstSize + "px",
                                    fontFamily: firstFamily,
                                    letterSpacing: firstLetter + "px",
                                    textTransform: firstUpper ? "uppercase" : "none",
                                    fontStyle: firstStyle,
                                    fontWeight: firstWeight,
                                    border: firstBorderType,
                                    borderWidth: firstBorderWidth + "px",
                                    borderRadius: firstBorderRadius + "px",
                                    borderColor: firstBorderColor,
                                    padding: firstPadding + "px",
                                    margin: firstMargin + "px",
                                    textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`,
                                }}
                            >
                                {firstHeading}
                            </span>
                            <span
                                className={`${className}__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`}
                                style={{
                                    display: display,
                                    color: secondColor,
                                    backgroundColor: secondClip ? "none" : secondBackground,
                                    backgroundImage: secondClip
                                        ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                        : "none",
                                    fontSize: secondSize + "px",
                                    fontFamily: secondFamily,
                                    letterSpacing: secondLetter + "px",
                                    textTransform: secondUpper ? "uppercase" : "none",
                                    fontStyle: secondStyle,
                                    fontWeight: secondWeight,
                                    border: secondBorderType,
                                    borderWidth: secondBorderWidth + "px",
                                    borderRadius: secondBorderRadius + "px",
                                    borderColor: secondBorderColor,
                                    padding: secondPadding + "px",
                                    margin: secondMargin + "px",
                                    textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`,
                                }}
                            >
                                {secondHeading}
                            </span>
                        </h2>
                        {link && headingURL && (
                            <a
                                className={`${className}__link`}
                                href={link && headingURL}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_4_1,
        migrate: (attributes) => {
            let newAttributes = {
                firstFamily: "",
                secondFamily: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                contentAlign,
                firstHeading,
                secondHeading,
                display,
                firstColor,
                firstBackground,
                firstSize,
                firstStyle,
                firstUpper,
                firstLetter,
                firstWeight,
                firstBorderType,
                firstBorderWidth,
                firstBorderRadius,
                firstBorderColor,
                firstPadding,
                firstMargin,
                firstClip,
                firstAnim,
                firstClipColor,
                firstShadowBlur,
                firstShadowColor,
                firstShadowHorizontal,
                firstShadowVertical,
                secondColor,
                secondBackground,
                secondSize,
                secondLetter,
                secondUpper,
                secondWeight,
                secondStyle,
                secondBorderType,
                secondBorderWidth,
                secondBorderRadius,
                secondBorderColor,
                secondPadding,
                secondMargin,
                secondClip,
                secondAnim,
                secondClipColor,
                secondShadowBlur,
                secondShadowColor,
                secondShadowHorizontal,
                secondShadowVertical,
                link,
                target,
                headingURL,
                containerBack,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
            } = props.attributes;

            return (
                <div
                    className={`${className}__container`}
                    style={{
                        textAlign: contentAlign,
                        backgroundColor: containerBack,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    <div className={`${className}__wrap`}>
                        <h2 className={`${className}__title`}>
                            <span
                                className={`${className}__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`}
                                style={{
                                    display: display,
                                    color: firstColor,
                                    backgroundColor: firstClip ? "none" : firstBackground,
                                    backgroundImage: firstClip
                                        ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                        : "none",
                                    fontSize: firstSize + "px",
                                    letterSpacing: firstLetter + "px",
                                    textTransform: firstUpper ? "uppercase" : "none",
                                    fontStyle: firstStyle,
                                    fontWeight: firstWeight,
                                    border: firstBorderType,
                                    borderWidth: firstBorderWidth + "px",
                                    borderRadius: firstBorderRadius + "px",
                                    borderColor: firstBorderColor,
                                    padding: firstPadding + "px",
                                    margin: firstMargin + "px",
                                    textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`,
                                }}
                            >
                                {firstHeading}
                            </span>
                            <span
                                className={`${className}__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`}
                                style={{
                                    display: display,
                                    color: secondColor,
                                    backgroundColor: secondClip ? "none" : secondBackground,
                                    backgroundImage: secondClip
                                        ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                        : "none",
                                    fontSize: secondSize + "px",
                                    letterSpacing: secondLetter + "px",
                                    textTransform: secondUpper ? "uppercase" : "none",
                                    fontStyle: secondStyle,
                                    fontWeight: secondWeight,
                                    border: secondBorderType,
                                    borderWidth: secondBorderWidth + "px",
                                    borderRadius: secondBorderRadius + "px",
                                    borderColor: secondBorderColor,
                                    padding: secondPadding + "px",
                                    margin: secondMargin + "px",
                                    textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`,
                                }}
                            >
                                {secondHeading}
                            </span>
                        </h2>
                        {link && headingURL && (
                            <a
                                className={`${className}__link`}
                                href={link && headingURL}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_3_0,
        migrate: (attributes) => {
            let newAttributes = {
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
                contentAlign,
                firstHeading,
                secondHeading,
                display,
                firstColor,
                firstBackground,
                firstSize,
                firstStyle,
                firstUpper,
                firstLetter,
                firstWeight,
                firstBorderType,
                firstBorderWidth,
                firstBorderRadius,
                firstBorderColor,
                firstPadding,
                firstMargin,
                firstClip,
                firstAnim,
                firstClipColor,
                firstShadowBlur,
                firstShadowColor,
                firstShadowHorizontal,
                firstShadowVertical,
                secondColor,
                secondBackground,
                secondSize,
                secondLetter,
                secondUpper,
                secondWeight,
                secondStyle,
                secondBorderType,
                secondBorderWidth,
                secondBorderRadius,
                secondBorderColor,
                secondPadding,
                secondMargin,
                secondClip,
                secondAnim,
                secondClipColor,
                secondShadowBlur,
                secondShadowColor,
                secondShadowHorizontal,
                secondShadowVertical,
                link,
                target,
                headingURL,
                containerBack,
            } = props.attributes;

            return (
                <div
                    className={`${className}__container`}
                    style={{
                        textAlign: contentAlign,
                        backgroundColor: containerBack,
                    }}
                >
                    <div className={`${className}__wrap`}>
                        <h2 className={`${className}__title`}>
                            <span
                                className={`${className}__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`}
                                style={{
                                    display: display,
                                    color: firstColor,
                                    backgroundColor: firstClip ? "none" : firstBackground,
                                    backgroundImage: firstClip
                                        ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                        : "none",
                                    fontSize: firstSize + "px",
                                    letterSpacing: firstLetter + "px",
                                    textTransform: firstUpper ? "uppercase" : "none",
                                    fontStyle: firstStyle,
                                    fontWeight: firstWeight,
                                    border: firstBorderType,
                                    borderWidth: firstBorderWidth + "px",
                                    borderRadius: firstBorderRadius + "px",
                                    borderColor: firstBorderColor,
                                    padding: firstPadding + "px",
                                    margin: firstMargin + "px",
                                    textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`,
                                }}
                            >
                                {firstHeading}
                            </span>
                            <span
                                className={`${className}__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`}
                                style={{
                                    display: display,
                                    color: secondColor,
                                    backgroundColor: secondClip ? "none" : secondBackground,
                                    backgroundImage: secondClip
                                        ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                        : "none",
                                    fontSize: secondSize + "px",
                                    letterSpacing: secondLetter + "px",
                                    textTransform: secondUpper ? "uppercase" : "none",
                                    fontStyle: secondStyle,
                                    fontWeight: secondWeight,
                                    border: secondBorderType,
                                    borderWidth: secondBorderWidth + "px",
                                    borderRadius: secondBorderRadius + "px",
                                    borderColor: secondBorderColor,
                                    padding: secondPadding + "px",
                                    margin: secondMargin + "px",
                                    textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`,
                                }}
                            >
                                {secondHeading}
                            </span>
                        </h2>
                        {link && headingURL && (
                            <a
                                className={`${className}__link`}
                                href={link && headingURL}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_3_0,
        save: (props) => {
            {
                const {
                    contentAlign,
                    firstHeading,
                    secondHeading,
                    display,
                    firstColor,
                    firstBackground,
                    firstSize,
                    firstStyle,
                    firstUpper,
                    firstLetter,
                    firstWeight,
                    firstBorderType,
                    firstBorderWidth,
                    firstBorderRadius,
                    firstBorderColor,
                    firstPadding,
                    firstMargin,
                    firstClip,
                    firstAnim,
                    firstClipColor,
                    firstShadowBlur,
                    firstShadowColor,
                    firstShadowHorizontal,
                    firstShadowVertical,
                    secondColor,
                    secondBackground,
                    secondSize,
                    secondLetter,
                    secondUpper,
                    secondWeight,
                    secondStyle,
                    secondBorderType,
                    secondBorderWidth,
                    secondBorderRadius,
                    secondBorderColor,
                    secondPadding,
                    secondMargin,
                    secondClip,
                    secondAnim,
                    secondClipColor,
                    secondShadowBlur,
                    secondShadowColor,
                    secondShadowHorizontal,
                    secondShadowVertical,
                    link,
                    target,
                    headingURL,
                    containerBack,
                } = props.attributes;

                return (
                    <a
                        className={`${className}__link`}
                        href={link && headingURL}
                        target={target && "_blank"}
                    >
                        <div
                            className={`${className}__container`}
                            style={{
                                textAlign: contentAlign,
                                backgroundColor: containerBack,
                            }}
                        >
                            <h2 className={`${className}__title`}>
                                <span
                                    className={`${className}__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`}
                                    style={{
                                        display: display,
                                        color: firstColor,
                                        backgroundColor: firstClip ? "none" : firstBackground,
                                        backgroundImage: firstClip
                                            ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                            : "none",
                                        fontSize: firstSize + "px",
                                        letterSpacing: firstLetter + "px",
                                        textTransform: firstUpper ? "uppercase" : "none",
                                        fontStyle: firstStyle,
                                        fontWeight: firstWeight,
                                        border: firstBorderType,
                                        borderWidth: firstBorderWidth + "px",
                                        borderRadius: firstBorderRadius + "px",
                                        borderColor: firstBorderColor,
                                        padding: firstPadding + "px",
                                        margin: firstMargin + "px",
                                        textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`,
                                    }}
                                >
                                    {firstHeading}
                                </span>
                                <span
                                    className={`${className}__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`}
                                    style={{
                                        display: display,
                                        color: secondColor,
                                        backgroundColor: secondClip ? "none" : secondBackground,
                                        backgroundImage: secondClip
                                            ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                            : "none",
                                        fontSize: secondSize + "px",
                                        letterSpacing: secondLetter + "px",
                                        textTransform: secondUpper ? "uppercase" : "none",
                                        fontStyle: secondStyle,
                                        fontWeight: secondWeight,
                                        border: secondBorderType,
                                        borderWidth: secondBorderWidth + "px",
                                        borderRadius: secondBorderRadius + "px",
                                        borderColor: secondBorderColor,
                                        padding: secondPadding + "px",
                                        margin: secondMargin + "px",
                                        textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`,
                                    }}
                                >
                                    {secondHeading}
                                </span>
                            </h2>
                        </div>
                    </a>
                );
            }
        },
    },
];

export default deprecatedContent;