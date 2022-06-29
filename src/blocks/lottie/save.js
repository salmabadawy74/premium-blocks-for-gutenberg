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
        target,
        render,
        backColor,
        backOpacity,
        backHColor,
        backHOpacity,
        lottieFilter,
        lottieFilterHover,
        hideDesktop,
        hideTablet,
        hideMobile
    } = attributes
    const mainClasses = classnames(className, 'premium-lottie-wrap')


    return (

        <div id={`premium-lottie-${block_id}`} className={`premium-lottie-${block_id} ${mainClasses} ${hideDesktop} ${hideTablet} ${hideMobile}`}>
            <div className={`premium-lottie-animation premium-lottie-${render}`} data-lottieURl={lottieURl} data-trigger={trigger} data-start={bottom} data-end={top} data-speed={speed}
                data-loop={loop} data-render={render} data-reverse={reverse} data-scrollSpeed={scrollSpeed}>
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
                        `filter: brightness( ${lottieFilter.bright}% ) contrast( ${lottieFilter.contrast}% ) saturate( ${lottieFilter.saturation}% ) blur( ${lottieFilter.blur}px ) hue-rotate( ${lottieFilter.hue}deg );`,
                        `transform: rotate(${rotate}deg) !important;`,
                        "}",
                        `#premium-lottie-${block_id}  .premium-lottie-animation:hover {`,
                        `background-color:${backHColor};`,
                        `opacity:${backHOpacity};`,
                        `filter: brightness( ${lottieFilterHover.bright}% ) contrast( ${lottieFilterHover.contrast}% ) saturate( ${lottieFilterHover.saturation}% ) blur( ${lottieFilterHover.blur}px ) hue-rotate( ${lottieFilterHover.hue}deg ) !important;`,
                        "}",
                    ].join("\n"),
                }}
            />
        </div>
    )
}