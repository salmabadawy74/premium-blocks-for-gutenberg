import classnames from "classnames";

export default function save(props) {

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