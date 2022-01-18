import classnames from "classnames";

const LottieAttr = {
    lottieId: {
        type: "string"
    },
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    lottieURl: {
        type: "string",
        default: ""
    },
    lottieJson: {
        type: "object"
    },
    loop: {
        type: 'boolean',
        default: true
    },
    reverse: {
        type: "boolean",
        default: false
    },
    speed: {
        type: "number",
        default: "1"
    },
    trigger: {
        type: 'string',
        default: 'none'
    },
    bottom: {
        type: "number",
        default: "0"
    },
    top: {
        type: "number",
        default: "100"
    },
    scrollSpeed: {
        type: "number",
        default: "4"
    },
    size: {
        type: "number",
        default: "200"
    },
    sizeUnit: {
        type: "string",
        default: 'px'
    },
    sizeMobile: {
        type: "number",
        default: "200"
    },
    sizeTablet: {
        type: "number",
        default: "200"
    },
    rotate: {
        type: "number",
        default: 0
    },
    align: {
        type: "string",
        default: "center"
    },
    link: {
        type: "boolean",
        default: false
    },
    url: {
        type: "string"
    },
    target: {
        type: "boolean",
        default: false
    },
    render: {
        type: 'string',
        default: 'svg'
    },
    backColor: {
        type: "string"
    },
    backOpacity: {
        type: "number",
        default: "1"
    },
    backHColor: {
        type: "string"
    },
    backHOpacity: {
        type: "number",
        default: 1
    },
    blur: {
        type: "number",
        default: "0"
    },
    bright: {
        type: "number",
        default: "100"
    },
    contrast: {
        type: "number",
        default: "100"
    },
    saturation: {
        type: "number",
        default: "100"
    },
    hue: {
        type: "number",
        default: "0"
    },
    blurH: {
        type: "number",
        default: "0"
    },
    brightH: {
        type: "number",
        default: "100"
    },
    contrastH: {
        type: "number",
        default: "100"
    },
    saturationH: {
        type: "number",
        default: "100"
    },
    hueH: {
        type: "number",
        default: "0"

    },
    borderType: {
        type: "string",
        default: 'none'
    },
    borderTop: {
        type: "number",
        default: 0
    },
    borderRight: {
        type: "number",
        default: 0
    },
    borderBottom: {
        type: "number",
        default: 0
    },
    borderLeft: {
        type: "number",
        default: 0
    },
    borderColor: {
        type: "string"
    },
    borderRadius: {
        type: "number",
        default: "0"
    },
    paddingT: {
        type: "number",
        default: "0"
    },
    paddingR: {
        type: "number",
        default: "0"
    },
    paddingB: {
        type: "number",
        default: "0"
    },
    paddingL: {
        type: "number",
        default: "0"
    },
    paddingU: {
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
const deprecated = [
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
                    }
                ]
            }
            return Object.assign(attributes, newAttributes)
        },
        save: (props) => {
            const { attributes, className } = props
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
                hideMobile
            } = attributes
            const mainClasses = classnames(className, 'premium-lottie-wrap')


            return (
                <div id={`premium-lottie-${block_id}`} className={`premium-lottie-${block_id} ${mainClasses} ${hideDesktop} ${hideTablet} ${hideMobile}`}

                >
                    <div className={`premium-lottie-animation premium-lottie-${render}`} data-lottieURl={lottieURl} data-trigger={trigger} data-start={bottom} data-end={top} data-speed={speed}
                        data-loop={loop} data-render={render} data-reverse={reverse} data-scrollSpeed={scrollSpeed}
                    >

                        {link && url !== ' ' && <a rel="noopener noreferrer" target={target ? "_blank" : "_self"} href={url} ></a>}
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
            )
        }
    }
]
export default deprecated