import classnames from "classnames"

export default function save(props) {

    const { className } = props

    const {
        blockId,
        align,
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
        PreStyles
    } = props.attributes;

    console.log(blockId)
    return (
        <div
            className={classnames(className, `${hideDesktop} ${hideTablet} ${hideMobile}`)}
            style={{
                textAlign: 'center',
            }}
        >

            {effect === "typing" ? (
                <div
                    id={`premium-fancy-text-${blockId}`}
                    className={`premium-fancy-text`}
                    style={{
                        textAlign: "align",
                    }}
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
                    <span className={`premium-fancy-text-prefix-text`}
                        style={{
                            color: PreStyles[0].textColor,
                            fontWeight: PreStyles[0].textWeight,
                            letterSpacing: `${PreStyles[0].textLetter}px`,
                            textTransform: `${PreStyles[0].textUpper ? "uppercase" : "none"}`,
                            fontStyle: PreStyles[0].textStyle,
                            backgroundColor: PreStyles[0].textBGColor
                        }}
                    >
                        {prefix}{" "}
                    </span>
                    <span
                        className={`premium-fancy-text-title`}
                        style={{
                            color: fancyStyles[0].fancyTextColor,
                            fontWeight: fancyStyles[0].fancyTextWeight,
                            letterSpacing: `${fancyStyles[0].fancyTextLetter}px`,
                            textTransform: `${fancyStyles[0].fancyTextUpper ? "uppercase" : "none"}`,
                            fontStyle: `${fancyStyles[0].fancyTextStyle}`,
                            backgroundColor: `${fancyStyles[0].fancyTextBGColor}`,
                            textShadow: `${fancyStyles[0].shadowHorizontal}px ${fancyStyles[0].shadowVertical}px ${fancyStyles[0].shadowBlur}px ${fancyStyles[0].shadowColor}`
                        }}
                        ref={(el) => {
                            this.el = el;
                        }}
                    >
                        {" "}
                    </span>
                    <span className={`premium-fancy-text-suffix-text`}
                        style={{
                            color: PreStyles[0].textColor,
                            fontWeight: PreStyles[0].textWeight,
                            letterSpacing: `${PreStyles[0].textLetter}px`,
                            textTransform: `${PreStyles[0].textUpper ? "uppercase" : "none"}`,
                            fontStyle: PreStyles[0].textStyle,
                            backgroundColor: PreStyles[0].textBGColor
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
                    style={{
                        textAlign: 'center',

                    }}
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
                    <span className={`premium-fancy-text-prefix-text`}
                        style={{
                            color: PreStyles[0].textColor,
                            fontWeight: PreStyles[0].textWeight,
                            letterSpacing: `${PreStyles[0].textLetter}px`,
                            textTransform: `${PreStyles[0].textUpper ? "uppercase" : "none"}`,
                            fontStyle: PreStyles[0].textStyle,
                            backgroundColor: PreStyles[0].textBGColor
                        }}
                    >
                        {prefix}{" "}
                    </span>
                    <div
                        className={`premium-fancy-text-title-slide`}
                        style={{
                            textAlign: 'center',
                            color: fancyStyles[0].fancyTextColor,
                            fontWeight: fancyStyles[0].fancyTextWeight,
                            letterSpacing: `${fancyStyles[0].fancyTextLetter}px`,
                            textTransform: `${fancyStyles[0].fancyTextUpper ? "uppercase" : "none"}`,
                            fontStyle: `${fancyStyles[0].fancyTextStyle}`,
                            backgroundColor: `${fancyStyles[0].fancyTextBGColor}`,
                            textShadow: `${fancyStyles[0].shadowHorizontal}px ${fancyStyles[0].shadowVertical}px ${fancyStyles[0].shadowBlur}px ${fancyStyles[0].shadowColor}`
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
                    <span className={`premium-fancy-text-suffix-text`}
                        style={{
                            color: PreStyles[0].textColor,
                            fontWeight: PreStyles[0].textWeight,
                            letterSpacing: `${PreStyles[0].textLetter}px`,
                            textTransform: `${PreStyles[0].textUpper ? "uppercase" : "none"}`,
                            fontStyle: PreStyles[0].textStyle,
                            backgroundColor: PreStyles[0].textBGColor
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