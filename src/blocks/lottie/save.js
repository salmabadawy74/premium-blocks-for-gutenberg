import classnames from "classnames";

export default function save(props) {

    const { attributes, className } = props

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
    )
}