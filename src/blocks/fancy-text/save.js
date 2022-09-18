import classnames from "classnames"
import { filterJsCss, generateCss } from '../../components/HelperFunction';
import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
    const { attributes, className } = props

    const {
        blockId,
        prefix,
        suffix,
        repeaterFancyText,
        effect,
        loop,
        cursorShow,
        cursorMark,
        typeSpeed,
        backdelay,
        startdelay,
        backSpeed,
        animationSpeed,
        pauseTime,
        hoverPause,
        hideDesktop,
        hideTablet,
        hideMobile,
        fancyStyles,
        PreStyles,
        prefixTypography,
        fancyTextTypography,
        fancyTextShadow
    } = attributes;

    const loadStyles = () => {
        const styles = {};
        styles[` .${blockId} .premium-fancy-text-title`] = {
            'color': `${fancyStyles[0].fancyTextColor} !important`,
            'background-color': `${fancyStyles[0].fancyTextBGColor} !important`
        };
        styles[` .${blockId} .typed-cursor`] = {
            'color': `${fancyStyles[0].cursorColor} !important`
        };
        styles[` .${blockId} .premium-fancy-text-suffix-prefix`] = {
            'color': `${PreStyles[0].textColor} !important`,
            'background-color': `${PreStyles[0].textBGColor} !important`
        };
        return generateCss(styles);
    }

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `${blockId}`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
        >
            <style
                dangerouslySetInnerHTML={{
                    __html: loadStyles()
                }}
            />

            {effect === "typing" ? (
                <div
                    id={`premium-fancy-text-${blockId}`}
                    className={`premium-fancy-text`}
                    data-effect={`${effect}`}
                    data-strings={`${repeaterFancyText.map(
                        (item, index) => {
                            return item.title;
                        }
                    )}`}
                    data-typespeed={`${typeSpeed}`}
                    data-backspeed={`${backSpeed}`}
                    data-startdelay={`${startdelay}`}
                    data-backdelay={`${backdelay}`}
                    data-loop={`${loop}`}
                    data-cursorshow={`${cursorShow}`}
                    data-cursormark={`${cursorMark}`}
                >
                    <span className={`premium-fancy-text-suffix-prefix premium-fancy-text-prefix-text`}
                        style={filterJsCss({
                            color: PreStyles[0].textColor,
                            backgroundColor: PreStyles[0].textBGColor,
                            fontStyle: prefixTypography.fontStyle,
                            fontFamily: prefixTypography.fontFamily,
                            fontWeight: prefixTypography.fontWeight,
                            textDecoration: prefixTypography.textDecoration,
                            textTransform: prefixTypography.textTransform,
                        })}
                    >
                        {prefix}{" "}
                    </span>
                    <span
                        id="text-fancy-text"
                        className={`premium-fancy-text-title-type premium-fancy-text-title`}
                        style={filterJsCss({
                            color: fancyStyles[0].fancyTextColor,
                            backgroundColor: fancyStyles[0].fancyTextBGColor,
                            fontStyle: fancyTextTypography.fontStyle,
                            fontFamily: fancyTextTypography.fontFamily,
                            fontWeight: fancyTextTypography.fontWeight,
                            textDecoration: fancyTextTypography.textDecoration,
                            textTransform: fancyTextTypography.textTransform,
                            textShadow: `${fancyTextShadow.horizontal}px ${fancyTextShadow.vertical}px ${fancyTextShadow.blur}px ${fancyTextShadow.color}`,

                        })}
                    >
                        {" "}
                    </span>
                    <span className={`premium-fancy-text-suffix-prefix premium-fancy-text-suffix-text`}
                        style={filterJsCss({
                            color: PreStyles[0].textColor,
                            backgroundColor: PreStyles[0].textBGColor,
                            fontStyle: prefixTypography.fontStyle,
                            fontFamily: prefixTypography.fontFamily,
                            fontWeight: prefixTypography.fontWeight,
                            textDecoration: prefixTypography.textDecoration,
                            textTransform: prefixTypography.textTransform,
                        })}
                    >
                        {" "}
                        {suffix}
                    </span>
                </div>
            ) : (
                <div
                    id={`premium-fancy-text-${blockId}`}
                    className={`premium-fancy-text premium-fancy-slide`}
                    data-effect={`${effect}`}
                    data-strings={`${repeaterFancyText.map(
                        (item, index) => {
                            return item.title;
                        }
                    )}`}
                    data-animationspeed={`${animationSpeed}`}
                    data-pausetime={`${pauseTime}`}
                    data-hoverpause={`${hoverPause}`}
                >
                    <span className={`premium-fancy-text-suffix-prefix premium-fancy-text-prefix-text`}
                        style={filterJsCss({
                            color: PreStyles[0].textColor,
                            backgroundColor: PreStyles[0].textBGColor,
                            fontStyle: prefixTypography.fontStyle,
                            fontFamily: prefixTypography.fontFamily,
                            fontWeight: prefixTypography.fontWeight,
                            textDecoration: prefixTypography.textDecoration,
                            textTransform: prefixTypography.textTransform,
                        })}
                    >
                        {prefix}{" "}
                    </span>
                    <div
                        className={`premium-fancy-text-title premium-fancy-text-title-slide`}
                        style={{
                            color: fancyStyles[0].fancyTextColor,
                            backgroundColor: `${fancyStyles[0].fancyTextBGColor}`,
                            fontStyle: fancyTextTypography.fontStyle,
                            fontFamily: fancyTextTypography.fontFamily,
                            fontWeight: fancyTextTypography.fontWeight,
                            textDecoration: fancyTextTypography.textDecoration,
                            textTransform: fancyTextTypography.textTransform,
                            textShadow: `${fancyTextShadow.horizontal}px ${fancyTextShadow.vertical}px ${fancyTextShadow.blur}px ${fancyTextShadow.color}`,

                        }}
                    >
                        <ul
                            className={`premium-fancy-text-title-slide-list`}
                        >
                            {repeaterFancyText.map((item, index) => {
                                return <li>{item.title}</li>;
                            })}
                        </ul>
                    </div>
                    <span className={`premium-fancy-text-suffix-prefix premium-fancy-text-suffix-text`}
                        style={filterJsCss({
                            color: PreStyles[0].textColor,
                            backgroundColor: PreStyles[0].textBGColor,
                            fontStyle: prefixTypography.fontStyle,
                            fontFamily: prefixTypography.fontFamily,
                            fontWeight: prefixTypography.fontWeight,
                            textDecoration: prefixTypography.textDecoration,
                            textTransform: prefixTypography.textTransform,
                        })}
                    >
                        {" "}
                        {suffix}
                    </span>
                </div>
            )
            }
        </div >
    )
}