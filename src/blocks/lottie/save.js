import classnames from "classnames";
import { generateCss } from "../../components/HelperFunction";
import { useBlockProps } from "@wordpress/block-editor";
const { Fragment } = wp.element;

export default function save(props) {
    const { attributes, className } = props;

    const {
        blockId,
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
    
    const loadStyles = () => {
        const styles = {};
        styles[`#${blockId}  .premium-lottie-animation`] = {
            "background-color": `${lottieStyles[0].backColor}`,
            filter: ` brightness( ${filter?.bright}% ) contrast( ${filter?.contrast}% ) saturate( ${filter?.saturation}% ) blur( ${filter?.blur}px ) hue-rotate( ${filter?.hue}deg )`,
            "border-style": `${border?.borderType}`,
            "border-color": `${border?.borderColor}`,
            transform: `rotate(${rotate}deg) !important`,
        };
        styles[`#${blockId}  .premium-lottie-animation:hover`] =
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
                id={`${blockId}`}
                {...useBlockProps.save({
                    className: classnames(
                        className,
                        `premium-lottie-wrap ${blockId} `,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
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