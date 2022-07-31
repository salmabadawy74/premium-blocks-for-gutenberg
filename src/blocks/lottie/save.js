import classnames from "classnames";
const { Fragment } = wp.element;
import { generateBlockId, generateCss } from "../../components/HelperFunction";

export default function save(props) {
    const { attributes, className } = props;

    const {
        lottieId,
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
        link,
        url,
        target,
        render,
        hideDesktop,
        hideTablet,
        hideMobile,
        lottieStyles,
        border,
        filter,
        filterHover,
    } = attributes;
    const mainClasses = classnames(className, "premium-lottie-wrap", {
        " premium-desktop-hidden": hideDesktop,
        " premium-tablet-hidden": hideTablet,
        " premium-mobile-hidden": hideMobile,
    });
    const loadStyles = () => {
        const styles = {};
        styles[`#premium-lottie-${block_id}  .premium-lottie-animation`] = {
            "background-color": `${lottieStyles[0].backColor}`,
            filter: ` brightness( ${filter?.bright}% ) contrast( ${filter?.contrast}% ) saturate( ${filter?.saturation}% ) blur( ${filter?.blur}px ) hue-rotate( ${filter?.hue}deg )`,
            "border-style": `${border?.borderType}`,
            "border-color": `${border?.borderColor}`,
            transform: `rotate(${rotate}deg) !important`,
        };
        styles[`#premium-lottie-${block_id}  .premium-lottie-animation:hover`] =
            {
                "background-color": `${lottieStyles[0].backHColor}`,
                filter: `brightness( ${filterHover?.bright}% ) contrast( ${filterHover?.contrast}% ) saturate( ${filterHover?.saturation}% ) blur( ${filterHover?.blur}px ) hue-rotate( ${filterHover?.hue}deg ) !important`,
            };
        return generateCss(styles);
    };

    return (
        <Fragment>
            <style dangerouslySetInnerHTML={{ __html: loadStyles() }} />
            <div
                id={`premium-lottie-${block_id}`}
                className={`premium-lottie-${block_id} ${mainClasses} `}
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
            </div>
        </Fragment>
    );
}
