import classnames from "classnames";

const LottieAttr = {
    lottieId: {
        type: "string",
    },
    block_id: {
        type: "string",
    },
    classMigrate: {
        type: "boolean",
        default: false,
    },
    lottieURl: {
        type: "string",
        default: "",
    },
    lottieJson: {
        type: "object",
    },
    loop: {
        type: "boolean",
        default: true,
    },
    reverse: {
        type: "boolean",
        default: false,
    },
    speed: {
        type: "number",
        default: "1",
    },
    trigger: {
        type: "string",
        default: "none",
    },
    bottom: {
        type: "number",
        default: "0",
    },
    top: {
        type: "number",
        default: "100",
    },
    scrollSpeed: {
        type: "number",
        default: "4",
    },
    size: {
        type: "number",
        default: "200",
    },
    sizeUnit: {
        type: "string",
        default: "px",
    },
    sizeMobile: {
        type: "number",
        default: "200",
    },
    sizeTablet: {
        type: "number",
        default: "200",
    },
    rotate: {
        type: "number",
        default: 0,
    },
    align: {
        type: "string",
        default: "center",
    },
    link: {
        type: "boolean",
        default: false,
    },
    url: {
        type: "string",
    },
    target: {
        type: "boolean",
        default: false,
    },
    render: {
        type: "string",
        default: "svg",
    },
    backColor: {
        type: "string",
    },
    backOpacity: {
        type: "number",
        default: "1",
    },
    backHColor: {
        type: "string",
    },
    backHOpacity: {
        type: "number",
        default: 1,
    },
    blur: {
        type: "number",
        default: "0",
    },
    bright: {
        type: "number",
        default: "100",
    },
    contrast: {
        type: "number",
        default: "100",
    },
    saturation: {
        type: "number",
        default: "100",
    },
    hue: {
        type: "number",
        default: "0",
    },
    blurH: {
        type: "number",
        default: "0",
    },
    brightH: {
        type: "number",
        default: "100",
    },
    contrastH: {
        type: "number",
        default: "100",
    },
    saturationH: {
        type: "number",
        default: "100",
    },
    hueH: {
        type: "number",
        default: "0",
    },
    borderType: {
        type: "string",
        default: "none",
    },
    borderTop: {
        type: "number",
        default: 0,
    },
    borderRight: {
        type: "number",
        default: 0,
    },
    borderBottom: {
        type: "number",
        default: 0,
    },
    borderLeft: {
        type: "number",
        default: 0,
    },
    borderColor: {
        type: "string",
    },
    borderRadius: {
        type: "number",
        default: "0",
    },
    paddingT: {
        type: "number",
        default: "0",
    },
    paddingR: {
        type: "number",
        default: "0",
    },
    paddingB: {
        type: "number",
        default: "0",
    },
    paddingL: {
        type: "number",
        default: "0",
    },
    paddingU: {
        type: "string",
        default: "px",
    },
    hideDesktop: {
        type: "boolean",
        default: false,
    },
    hideTablet: {
        type: "boolean",
        default: false,
    },
    hideMobile: {
        type: "boolean",
        default: false,
    },
};

let newAttributes = {
    lottieAlign: {
        type: "object",
        default: {
            Desktop: "center",
            Tablet: "center",
            Mobile: "center",
        },
    },

    padding: {
        type: "object",
        default: {
            Desktop: {
                top: "",
                right: "",
                bottom: "",
                left: "",
            },
            Tablet: {
                top: "",
                right: "",
                bottom: "",
                left: "",
            },
            Mobile: {
                top: "",
                right: "",
                bottom: "",
                left: "",
            },
            unit: "px",
        },
    },
    border: {
        type: "object",
        default: {
            borderType: "none",
            borderColor: "",
            borderWidth: {
                Desktop: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: "",
                },
                Tablet: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: "",
                },
                Mobile: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: "",
                },
            },
            borderRadius: {
                Desktop: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: "",
                },
                Tablet: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: "",
                },
                Mobile: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: "",
                },
            },
        },
    },
    filter: {
        type: "object",
        default: {
            contrast: "100",
            blur: "0",
            bright: "100",
            saturation: "100",
            hue: "0",
        },
    },
    filterHover: {
        type: "object",
        default: {
            contrast: "100",
            blur: "0",
            bright: "100",
            saturation: "100",
            hue: "0",
        },
    },
    size: {
        type: "object",
        default: {
            Desktop: "200",
            Tablet: "200",
            Mobile: "200",
            unit: "px",
        },
    },
};

const deprecated = [
    {
        attributes: Object.assign(LottieAttr, newAttributes),
        migrate: (attributes) => {
            let newAttributes = {
                lottieAlign: {
                    Desktop: attributes.align,
                    Tablet: attributes.align,
                    Mobile: attributes.align,
                },

                padding: {
                    Desktop: {
                        top: attributes.paddingT,
                        right: attributes.paddingR,
                        bottom: attributes.paddingB,
                        left: attributes.paddingL,
                    },
                    Tablet: {
                        top: attributes.paddingTTablet,
                        right: attributes.paddingRTablet,
                        bottom: attributes.paddingBTablet,
                        left: attributes.paddingLTablet,
                    },
                    Mobile: {
                        top: attributes.paddingTMobile,
                        right: attributes.paddingRMobile,
                        bottom: attributes.paddingBMobile,
                        left: attributes.paddingLMobile,
                    },
                    unit: attributes.paddingU,
                },
                border: {
                    borderType: attributes.lottieStyles[0].borderType,
                    borderColor: attributes.lottieStyles[0].borderColor,
                    borderWidth: {
                        Desktop: {
                            top: attributes.borderTop,
                            right: attributes.borderRight,
                            bottom: attributes.borderBottom,
                            left: attributes.borderLeft,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                    borderRadius: {
                        Desktop: {
                            top: attributes.lottieStyles[0].borderRadius,
                            right: attributes.lottieStyles[0].borderRadius,
                            bottom: attributes.lottieStyles[0].borderRadius,
                            left: attributes.lottieStyles[0].borderRadius,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                },
                filter: {
                    contrast: attributes.lottieStyles[0].contrast,
                    blur: attributes.lottieStyles[0].blur,
                    bright: attributes.lottieStyles[0].bright,
                    saturation: attributes.lottieStyles[0].saturation,
                    hue: attributes.lottieStyles[0].hue,
                },
                filterHover: {
                    contrast: attributes.lottieStyles[0].contrastH,
                    blur: attributes.lottieStyles[0].blurH,
                    bright: attributes.lottieStyles[0].brightH,
                    saturation: attributes.lottieStyles[0].saturationH,
                    hue: attributes.lottieStyles[0].hueH,
                },
                size: {
                    Desktop: attributes.lottieStyles[0].size,
                    Tablet: attributes.lottieStyles[0].sizeTablet,
                    Mobile: attributes.lottieStyles[0].sizeMobile,
                    unit: attributes.lottieStyles[0].sizeUnit,
                },
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const { attributes, className } = props;

            const {
                lottieId,
                block_id,
                lottieURl,
                lottieJson,
                loop,
                reverse,
                speed,
                trigger,
                bottom,
                top,
                scrollSpeed,
                rotate,
                align,
                link,
                url,
                target,
                render,
                hideDesktop,
                hideTablet,
                hideMobile,
                lottieStyles,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft,
            } = attributes;
            const mainClasses = classnames(className, "premium-lottie-wrap");

            return (
                <div
                    id={`premium-lottie-${block_id}`}
                    className={`premium-lottie-${block_id} ${mainClasses} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                >
                    <div
                        className={`premium-lottie-animation premium-lottie-${render}`}
                        data-lottieURl={lottieURl}
                        data-trigger={trigger}
                        data-start={bottom}
                        data-end={top}
                        data-speed={speed}
                        data-loop={loop}
                        data-render={render}
                        data-reverse={reverse}
                        data-scrollSpeed={scrollSpeed}
                    >
                        {link && url !== " " && (
                            <a
                                rel="noopener noreferrer"
                                target={target ? "_blank" : "_self"}
                                href={url}
                            ></a>
                        )}
                    </div>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-lottie-${block_id}{`,
                                `text-align:${align};`,
                                "}",
                                `#premium-lottie-${block_id}  .premium-lottie-animation  {`,
                                `background-color:${lottieStyles[0].backColor};`,
                                `opacity : ${lottieStyles[0].backOpacity};`,
                                `filter: brightness( ${lottieStyles[0].bright}% ) contrast( ${lottieStyles[0].contrast}% ) saturate( ${lottieStyles[0].saturation}% ) blur( ${lottieStyles[0].blur}px ) hue-rotate( ${lottieStyles[0].hue}deg );`,
                                `border-style : ${lottieStyles[0].borderType};`,
                                `border-width : ${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px ;`,
                                `border-radius : ${lottieStyles[0].borderRadius}px;`,
                                `border-color : ${lottieStyles[0].borderColor}; `,
                                `transform: rotate(${rotate}deg) !important;`,
                                "}",
                                `#premium-lottie-${block_id}  .premium-lottie-animation:hover {`,
                                `background-color:${lottieStyles[0].backHColor};`,
                                `opacity:${lottieStyles[0].backHOpacity};`,
                                `filter: brightness( ${lottieStyles[0].brightH}% ) contrast( ${lottieStyles[0].contrastH}% ) saturate( ${lottieStyles[0].saturationH}% ) blur( ${lottieStyles[0].blurH}px ) hue-rotate( ${lottieStyles[0].hueH}deg ) !important;`,
                                "}",
                            ].join("\n"),
                        }}
                    />
                </div>
            );
        },
    },
    {
        attributes: LottieAttr,
        migrate: (attributes) => {
            let newAttributes = {
                lottieStyles: [
                    {
                        size: attributes.size,
                        sizeUnit: attributes.sizeUnit,
                        sizeMobile: attributes.sizeMobile,
                        sizeTablet: attributes.sizeTablet,
                        backColor: attributes.backColor,
                        backOpacity: attributes.backOpacity,
                        backHColor: attributes.backHColor,
                        backHOpacity: attributes.backHOpacity,
                        blur: attributes.blur,
                        bright: attributes.bright,
                        contrast: attributes.contrast,
                        saturation: attributes.saturation,
                        hue: attributes.hue,
                        blurH: attributes.blurH,
                        brightH: attributes.brightH,
                        contrastH: attributes.contrastH,
                        saturationH: attributes.saturationH,
                        hueH: attributes.hueH,
                        borderType: attributes.borderType,
                        borderColor: attributes.borderColor,
                        borderRadius: attributes.borderRadius,
                        paddingU: attributes.paddingU,
                    },
                ],
                paddingTTablet: "",
                paddingRTablet: "",
                paddingBTablet: "",
                paddingLTablet: "",
                paddingTMobile: "",
                paddingRMobile: "",
                paddingBMobile: "",
                paddingLMobile: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const { attributes, className } = props;
            const {
                block_id,
                lottieURl,
                loop,
                reverse,
                speed,
                trigger,
                bottom,
                top,
                scrollSpeed,
                rotate,
                align,
                link,
                url,
                render,
                backColor,
                backOpacity,
                backHColor,
                backHOpacity,
                blur,
                hue,
                contrast,
                saturation,
                bright,
                blurH,
                hueH,
                target,
                contrastH,
                saturationH,
                brightH,
                borderType,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft,
                borderColor,
                borderRadius,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                paddingU,
                hideDesktop,
                hideTablet,
                hideMobile,
            } = attributes;
            const mainClasses = classnames(className, "premium-lottie-wrap");

            return (
                <div
                    id={`premium-lottie-${block_id}`}
                    className={`premium-lottie-${block_id} ${mainClasses} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                >
                    <div
                        className={`premium-lottie-animation premium-lottie-${render}`}
                        data-lottieURl={lottieURl}
                        data-trigger={trigger}
                        data-start={bottom}
                        data-end={top}
                        data-speed={speed}
                        data-loop={loop}
                        data-render={render}
                        data-reverse={reverse}
                        data-scrollSpeed={scrollSpeed}
                    >
                        {link && url !== " " && (
                            <a
                                rel="noopener noreferrer"
                                target={target ? "_blank" : "_self"}
                                href={url}
                            ></a>
                        )}
                    </div>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-lottie-${block_id}{`,
                                `text-align:${align};`,
                                "}",
                                `#premium-lottie-${block_id}  .premium-lottie-animation  {`,
                                `background-color:${backColor};`,
                                `opacity : ${backOpacity};`,
                                `filter: brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg );`,
                                `border-style : ${borderType};`,
                                `border-width : ${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px ;`,
                                `border-radius : ${borderRadius}px;`,
                                `border-color : ${borderColor}; `,
                                `padding-top : ${paddingT}${paddingU};`,
                                `padding-right : ${paddingR}${paddingU};`,
                                `padding-bottom : ${paddingB}${paddingU};`,
                                `padding-left : ${paddingL}${paddingU};`,
                                `transform: rotate(${rotate}deg) !important;`,
                                "}",
                                `#premium-lottie-${block_id}  .premium-lottie-animation:hover {`,
                                `background-color:${backHColor};`,
                                `opacity:${backHOpacity};`,
                                `filter: brightness( ${brightH}% ) contrast( ${contrastH}% ) saturate( ${saturationH}% ) blur( ${blurH}px ) hue-rotate( ${hueH}deg ) !important;`,
                                "}",
                            ].join("\n"),
                        }}
                    />
                </div>
            );
        },
    },
];
export default deprecated;
