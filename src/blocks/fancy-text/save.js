import classnames from "classnames"
import { filterJsCss } from '../../components/HelperFunction';

export default function save(props) {
    const { className } = props

    const {
        blockId,
        contentAlign,
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
        fancyalign,
        hideDesktop,
        hideTablet,
        hideMobile,
        fancyStyles,
        PreStyles,
        prefixTypography,
        fancyTextTypography,
        fancyTextShadow
    } = props.attributes;
    const mainClasses = classnames(className, 'premium-fancy-text');
    return (
        <div
        className={`${blockId} ${hideDesktop} ${hideTablet} ${hideMobile}`}
        >

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
                            letterSpacing: prefixTypography.letterSpacing,
                            textDecoration: prefixTypography.textDecoration,
                            textTransform: prefixTypography.textTransform,
                            lineHeight: `${prefixTypography.lineHeight}px`,
                        })}
                    >
                        {prefix}{" "}
                    </span>
                    <span
                        className={`premium-fancy-text-title premium-fancy-text-title-type`}
                        style={filterJsCss({
                            color: fancyStyles[0].fancyTextColor,
                            backgroundColor: `${fancyStyles[0].fancyTextBGColor}`,
                            textShadow: `${fancyTextShadow.horizontal}px ${fancyTextShadow.vertical}px ${fancyTextShadow.blur}px ${fancyTextShadow.color}`,
                            fontStyle: fancyTextTypography.fontStyle,
                            fontFamily: fancyTextTypography.fontFamily,
                            fontWeight: fancyTextTypography.fontWeight,
                            letterSpacing: fancyTextTypography.letterSpacing,
                            textDecoration: fancyTextTypography.textDecoration,
                            textTransform: fancyTextTypography.textTransform,
                            lineHeight: `${fancyTextTypography.lineHeight}px`,
                        })}
                        ref={(el) => {
                            this.el = el;
                        }}
                    >
                        {" "}
                    </span>
                    <span className={`premium-fancy-text-suffix-prefix premium-fancy-text-suffix-text`}
                        style={{
                            color: PreStyles[0].textColor,
                            backgroundColor: PreStyles[0].textBGColor,
                            fontStyle: prefixTypography?.fontStyle,
                            fontFamily: prefixTypography?.fontFamily,
                            fontWeight: prefixTypography?.fontWeight,
                            letterSpacing: prefixTypography?.letterSpacing,
                            textDecoration: prefixTypography?.textDecoration,
                            textTransform: prefixTypography?.textTransform,
                            lineHeight: `${prefixTypography?.lineHeight}px`,
                        }}
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
                        style={{
                            color: PreStyles[0].textColor,
                            backgroundColor: PreStyles[0].textBGColor,
                            fontStyle: prefixTypography?.fontStyle,
                            fontFamily: prefixTypography?.fontFamily,
                            fontWeight: prefixTypography?.fontWeight,
                            letterSpacing: prefixTypography?.letterSpacing,
                            textDecoration: prefixTypography?.textDecoration,
                            textTransform: prefixTypography?.textTransform,
                            lineHeight: `${prefixTypography?.lineHeight}px`,
                        }}
                    >
                        {prefix}{" "}
                    </span>
                    <div
                        className={`premium-fancy-text-title premium-fancy-text-title-slide`}
                        style={{
                            color: fancyStyles[0].fancyTextColor,
                            backgroundColor: `${fancyStyles[0].fancyTextBGColor}`,
                            textShadow: `${fancyTextShadow.horizontal}px ${fancyTextShadow.vertical}px ${fancyTextShadow.blur}px ${fancyTextShadow.color}`,
                            fontStyle: fancyTextTypography?.fontStyle,
                            fontFamily: fancyTextTypography?.fontFamily,
                            fontWeight: fancyTextTypography?.fontWeight,
                            letterSpacing: fancyTextTypography?.letterSpacing,
                            textDecoration: fancyTextTypography?.textDecoration,
                            textTransform: fancyTextTypography?.textTransform,
                            lineHeight: `${fancyTextTypography?.lineHeight}px`,
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
                        style={{
                            color: PreStyles[0].textColor,
                            backgroundColor: PreStyles[0].textBGColor,
                            fontStyle: prefixTypography?.fontStyle,
                            fontFamily: prefixTypography?.fontFamily,
                            fontWeight: prefixTypography?.fontWeight,
                            letterSpacing: prefixTypography?.letterSpacing,
                            textDecoration: prefixTypography?.textDecoration,
                            textTransform: prefixTypography?.textTransform,
                            lineHeight: `${prefixTypography?.lineHeight}px`
                        }}
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
