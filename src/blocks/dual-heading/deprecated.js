import classnames from "classnames";


const className = "premium-dheading-block";

const attributes = {
    block_id: {
        type: "string"
    },
    contentAlign: {
        type: "string",
        default: "center"
    },
    firstHeading: {
        type: "array",
        source: "children",
        default: "Premium ",
        selector: ".premium-dheading-block__first"
    },
    secondHeading: {
        type: "array",
        source: "children",
        default: "Blocks",
        selector: ".premium-dheading-block__second"
    },
    titleTag: {
        type: "string",
        default: "h1"
    },
    display: {
        type: "string",
        default: "inline"
    },
    firstColor: {
        type: "string",
        default: "#6ec1e4"
    },
    firstSize: {
        type: "number",
        default: "20"
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
    firstFamily: {
        type: "string"
    },
    firstLetter: {
        type: "number"
    },
    firstStyle: {
        type: "string"
    },
    firstUpper: {
        type: "boolean"
    },
    firstWeight: {
        type: "number",
        default: 500
    },
    firstBackground: {
        type: "string"
    },
    firstOpacity: {
        type: "number",
        default: "1"
    },
    firstBorderType: {
        type: "string",
        default: "none"
    },
    firstBorderWidth: {
        type: "number",
        default: "1"
    },
    firstBorder: {
        type: "boolean",
        default: false
    },
    firstBorderTop: {
        type: "number"
    },
    firstBorderRight: {
        type: "number"
    },
    firstBorderBottom: {
        type: "number"
    },
    firstBorderLeft: {
        type: "number"
    },
    firstBorderRadius: {
        type: "number",
        default: "0"
    },
    firstBorderColor: {
        type: "string"
    },
    firstMarginR: {
        type: "number",
        default: "0"
    },
    firstMarginL: {
        type: "number",
        default: "0"
    },
    firstPadding: {
        type: "number",
        default: "0"
    },
    firstClip: {
        type: "boolean",
        default: false
    },
    firstAnim: {
        type: "boolean",
        default: false
    },
    firstStroke: {
        type: "boolean",
        default: false
    },
    firstClipColor: {
        type: "string",
        default: "#54595f"
    },
    firstShadowColor: {
        type: "string"
    },
    firstShadowBlur: {
        type: "number",
        default: "0"
    },
    firstShadowHorizontal: {
        type: "number",
        default: "0"
    },
    firstShadowVertical: {
        type: "number",
        default: "0"
    },
    secondColor: {
        type: "string",
        default: "#54595f"
    },
    secondSize: {
        type: "number",
        default: "20"
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
    secondFamily: {
        type: "string"
    },
    secondLetter: {
        type: "number"
    },
    secondStyle: {
        type: "string"
    },
    secondUpper: {
        type: "boolean"
    },
    secondWeight: {
        type: "number",
        default: 500
    },
    secondBackground: {
        type: "string"
    },
    secondOpacity: {
        type: "number",
        default: "1"
    },
    secondBorderType: {
        type: "string",
        default: "none"
    },
    secondBorderWidth: {
        type: "number",
        default: "1"
    },
    secondBorder: {
        type: "boolean",
        default: false
    },
    secondBorderTop: {
        type: "number"
    },
    secondBorderRight: {
        type: "number"
    },
    secondBorderBottom: {
        type: "number"
    },
    secondBorderLeft: {
        type: "number"
    },
    secondBorderRadius: {
        type: "number",
        default: "0"
    },
    secondBorderColor: {
        type: "string"
    },
    secondMarginR: {
        type: "number",
        default: "0"
    },
    secondMarginL: {
        type: "number",
        default: "0"
    },
    secondPadding: {
        type: "number",
        default: "0"
    },
    secondClip: {
        type: "boolean",
        default: false
    },
    secondStroke: {
        type: "boolean",
        default: false
    },
    secondShadowColor: {
        type: "string"
    },
    secondShadowBlur: {
        type: "number",
        default: "0"
    },
    secondShadowHorizontal: {
        type: "number",
        default: "0"
    },
    secondShadowVertical: {
        type: "number",
        default: "0"
    },
    secondAnim: {
        type: "boolean",
        default: false
    },
    secondClipColor: {
        type: "string",
        default: "#6ec1e4"
    },
    link: {
        type: "boolean",
        default: false
    },
    target: {
        type: "boolean",
        default: false
    },
    headingURL: {
        type: "string"
    },
    containerBack: {
        type: "string"
    },
    containerOpacity: {
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
    containerBorderType: {
        type: "string",
        default: "none"
    },
    containerBorderWidth: {
        type: "number",
        default: "1"
    },
    containerBorder: {
        type: "boolean",
        default: false
    },
    containerBorderTop: {
        type: "number"
    },
    containerBorderRight: {
        type: "number"
    },
    containerBorderBottom: {
        type: "number",
    },
    containerBorderLeft: {
        type: "number"
    },
    containerBorderRadius: {
        type: "number",
        default: "0"
    },
    containerBorderColor: {
        type: "string"
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

const new_Attributes = {
    firstStyles: {
        type: "array",
        default: [
            {
                firstClip: false,
                firstAnim: false,
                firstStroke: false,
                firstFamily: __('Default'),
                firstSizeUnit: 'px',
                firstSize: '',
                firstSizeMobile: '',
                firstWeight: '',
                firstStyle: '',
                firstLetter: '',
                firstUpper: false,
                firstColor: '',
                firstBackground: '',
                firstOpacity: '1',
                firstClipColor: "#54595f",
                firstBorderType: 'none',
                firstBorderWidth: '',
                firstBorderColor: '',
                firstBorderRadius: '0',
                firstShadowColor: '',
                firstShadowBlur: '0',
                firstShadowHorizontal: '0',
                firstShadowVertical: '0',
                firstMarginL: '0',
                firstMarginR: '0',
                firstPadding: '0',
            }
        ]
    },
    secondStyles: {
        type: "array",
        default: [
            {
                secondClip: false,
                secondAnim: false,
                secondStroke: false,
                secondFamily: __('Default'),
                secondSizeUnit: 'px',
                secondSize: '20',
                secondSizeTablet: '',
                secondSizeMobile: '',
                secondWeight: '',
                secondStyle: '',
                secondLetter: '',
                secondUpper: false,
                secondColor: "#54595f",
                secondBackground: '',
                secondOpacity: '',
                secondClipColor: "#6ec1e4",
                secondBorderType: "none",
                secondBorderWidth: '1',
                secondBorderColor: '',
                secondBorderRadius: '0',
                secondShadowColor: '',
                secondShadowBlur: '0',
                secondShadowHorizontal: '0',
                secondShadowVertical: '0',
                secondMarginL: '0',
                secondMarginR: '0',
                secondPadding: '0',

            }
        ]
    },
    containerStyles: {
        type: 'array',
        default: [
            {
                backgroundImageID: '',
                backgroundImageURL: '',
                backgroundRepeat: 'no-reapet',
                backgroundPosition: 'top center',
                backgroundSize: 'auto',
                fixed: false,
                containerBorderType: "none",
                containerBorderWidth: "1",
                containerBorderColor: '',
                containerBorderRadius: '0',
                containerBack: '',
                containerOpacity: 1,
                gradientLocationOne: '0',
                gradientColorTwo: '',
                gradientLocationTwo: '100',
                gradientType: 'linear',
                gradientAngle: '180',
                gradientPosition: 'center center'
            }
        ]
    },
}

const new_deprecated_attributes = Object.assign(attributes, new_Attributes)

const deprecatedContent = [
    {
        attributes: new_deprecated_attributes,
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

            const mainClasses = classnames(
                className,
                "premium-dheading-block__container"
            );

            return (
                <div
                    id={`premium-dheading-block-${block_id}`}
                    className={`${mainClasses} premium-dheading-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
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
        attributes: attributes,
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
        attributes: attributes,
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
        attributes: attributes,
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
        attributes: attributes,
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
        attributes: attributes,
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
        attributes: attributes,
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