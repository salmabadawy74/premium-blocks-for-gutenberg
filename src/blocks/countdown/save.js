import classnames from "classnames";

const { __ } = wp.i18n;

const save = props => {
    const { className, clientId: blockId, attributes } = props;
    const {
        block_id,
        showMonths,
        showWeeks,
        showDays,
        showHours,
        showMinutes,
        showSeconds,
        dateTime,
        timeZone,
        expireType,
        expireTxt,
        expiredUrl,
        monthLabel,
        weekLabel,
        dayLabel,
        hourLabel,
        minuteLabel,
        secondLabel,
        contentStyle,
        align,
        digitColor,
        digitBgColor,
        digitWeight,
        digitStyle,
        digitLetter,
        digitUpper,
        digitLine,
        digitShadowColor,
        digitShadowBlur,
        digitShadowHorizontal,
        digitShadowVertical,
        digitShadowPosition,
        borderType,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
        digitBorderColor,
        borderRadius,
        unitColor,
        unitBgColor,
        unitWeight,
        unitStyle,
        unitLetter,
        unitUpper,
        unitLine,
        unitsSpace,
        separatorTxt,
        enableSeparator,
        valid
    } = attributes;

    const mainClasses = classnames(className, "premium-countdown");

    return (
        < div
            id={`premium-countdown-${block_id}`}
            className={`${mainClasses}   premium-countdown-${block_id}`}
            style={{ justifyContent: align || "center" }}
        >
            <div id={`countdown-${block_id}`} className={`premium-countdown-init countdown ${contentStyle} `} data-time={dateTime} data-expire={expireType} data-timezone={timeZone} data-expiretxt={expireTxt} data-expirelink={expiredUrl}>
                {(valid || expireType === "default") ? (<span className={`pre_countdown-row `}>
                    {showMonths && [
                        <span className={`pre_countdown-section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px`, boxShadow: `${digitShadowHorizontal}px ${digitShadowVertical}px ${digitShadowBlur}px ${digitShadowColor} ${digitShadowPosition}` }}>
                            <span className={`pre_time-mid `} >
                                <span className={`pre_countdown-amount  premium-countdown__digits-months`} id={`months`}
                                    style={{
                                        color: digitColor,
                                        backgroundColor: digitBgColor,
                                        fontWeight: digitWeight,
                                        fontStyle: digitStyle,
                                        letterSpacing: digitLetter,
                                        textTransform: digitUpper ? "uppercase" : "",
                                        lineHeight: digitLine,
                                        borderStyle: borderType,
                                        borderWidth: `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`,
                                        borderColor: digitBorderColor,
                                        borderRadius: borderRadius
                                    }}
                                >
                                </span>
                                <span className={`pre_countdown-period premium-countdown__units-months`}
                                    style={{
                                        color: unitColor,
                                        backgroundColor: unitBgColor,
                                        fontStyle: unitStyle,
                                        letterSpacing: unitLetter,
                                        lineHeight: unitLine + "px",
                                        textTransform: unitUpper ? "uppercase" : "none",
                                        fontWeight: unitWeight || "normal",
                                        padding: contentStyle === "side" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    {monthLabel}
                                </span>
                            </span>
                        </span>,
                        (enableSeparator && contentStyle === "down") && <span className="pre-countdown_separator">{separatorTxt}</span>
                    ]
                    }

                    {showWeeks && [
                        <span className={`pre_countdown-section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px`, boxShadow: `${digitShadowHorizontal}px ${digitShadowVertical}px ${digitShadowBlur}px ${digitShadowColor} ${digitShadowPosition}` }}>
                            <span className={`pre_time-mid `}

                            >
                                <span className={`pre_countdown-amount  premium-countdown__digits-weeks`} id={`weeks`}
                                    style={{
                                        color: digitColor,
                                        backgroundColor: digitBgColor,
                                        fontWeight: digitWeight,
                                        fontStyle: digitStyle,
                                        letterSpacing: digitLetter,
                                        textTransform: digitUpper ? "uppercase" : "",
                                        lineHeight: digitLine,
                                        borderStyle: borderType,
                                        borderWidth: `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`,
                                        borderColor: digitBorderColor,
                                        borderRadius: borderRadius
                                    }}
                                >

                                </span>
                                <span className={`pre_countdown-period premium-countdown__units-weeks`}
                                    style={{
                                        color: unitColor,
                                        backgroundColor: unitBgColor,
                                        fontStyle: unitStyle,
                                        letterSpacing: unitLetter,
                                        lineHeight: unitLine + "px",
                                        textTransform: unitUpper ? "uppercase" : "none",
                                        fontWeight: unitWeight || "normal",
                                        padding: contentStyle === "side" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    {weekLabel}
                                </span>
                            </span>
                        </span>,
                        (enableSeparator && contentStyle === "down") && <span className="pre-countdown_separator">{separatorTxt}</span>
                    ]}

                    {showDays && [
                        <span className={`pre_countdown-section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px`, boxShadow: `${digitShadowHorizontal}px ${digitShadowVertical}px ${digitShadowBlur}px ${digitShadowColor} ${digitShadowPosition}` }}>
                            <span className={`pre_time-mid `}

                            >
                                <span className={`pre_countdown-amount  premium-countdown__digits-days`} id={`days`}
                                    style={{
                                        color: digitColor,
                                        backgroundColor: digitBgColor,

                                        fontWeight: digitWeight,
                                        fontStyle: digitStyle,
                                        letterSpacing: digitLetter,
                                        textTransform: digitUpper ? "uppercase" : "",
                                        lineHeight: digitLine,
                                        borderStyle: borderType,
                                        borderWidth: `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`,
                                        borderColor: digitBorderColor,
                                        borderRadius: borderRadius
                                    }}
                                >

                                </span>
                                <span className={`pre_countdown-period premium-countdown__units-days`}
                                    style={{
                                        color: unitColor,
                                        backgroundColor: unitBgColor,
                                        fontStyle: unitStyle,
                                        letterSpacing: unitLetter,
                                        lineHeight: unitLine + "px",
                                        textTransform: unitUpper ? "uppercase" : "none",
                                        fontWeight: unitWeight || "normal",
                                        padding: contentStyle === "side" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    {dayLabel}
                                </span>
                            </span>
                        </span>,
                        (enableSeparator && contentStyle === "down") && <span className="pre-countdown_separator">{separatorTxt}</span>
                    ]}

                    {showHours && [
                        <span className={`pre_countdown-section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px`, boxShadow: `${digitShadowHorizontal}px ${digitShadowVertical}px ${digitShadowBlur}px ${digitShadowColor} ${digitShadowPosition}` }}>
                            <span className={`pre_time-mid `}

                            >
                                <span className={`pre_countdown-amount  premium-countdown__digits-hours`} id={`hours`}
                                    style={{
                                        color: digitColor,
                                        backgroundColor: digitBgColor,

                                        fontWeight: digitWeight,
                                        fontStyle: digitStyle,
                                        letterSpacing: digitLetter,
                                        textTransform: digitUpper ? "uppercase" : "",
                                        lineHeight: digitLine,
                                        borderStyle: borderType,
                                        borderWidth: `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`,
                                        borderColor: digitBorderColor,
                                        borderRadius: borderRadius,
                                    }}
                                >

                                </span>
                                <span className={`pre_countdown-period premium-countdown__units-hours`}
                                    style={{
                                        color: unitColor,
                                        backgroundColor: unitBgColor,
                                        fontStyle: unitStyle,
                                        letterSpacing: unitLetter,
                                        lineHeight: unitLine + "px",
                                        textTransform: unitUpper ? "uppercase" : "none",
                                        fontWeight: unitWeight || "normal",
                                        padding: contentStyle === "side" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    {hourLabel}
                                </span>
                            </span>
                        </span>,
                        (enableSeparator && contentStyle === "down") && <span className="pre-countdown_separator">{separatorTxt}</span>

                    ]}

                    {showMinutes && [
                        <span className={`pre_countdown-section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px`, boxShadow: `${digitShadowHorizontal}px ${digitShadowVertical}px ${digitShadowBlur}px ${digitShadowColor} ${digitShadowPosition}` }}>
                            <span className={`pre_time-mid `}
                            >
                                <span className={`pre_countdown-amount  premium-countdown__digits-minutes`} id={`minutes`}
                                    style={{
                                        color: digitColor,
                                        backgroundColor: digitBgColor,

                                        fontWeight: digitWeight,
                                        fontStyle: digitStyle,
                                        letterSpacing: digitLetter,
                                        textTransform: digitUpper ? "uppercase" : "",
                                        lineHeight: digitLine,
                                        borderStyle: borderType,
                                        borderWidth: `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`,
                                        borderColor: digitBorderColor,
                                        borderRadius: borderRadius,
                                    }}
                                >

                                </span>
                                <span className={`pre_countdown-period premium-countdown__units-minutes`}
                                    style={{
                                        color: unitColor,
                                        backgroundColor: unitBgColor,
                                        fontStyle: unitStyle,
                                        letterSpacing: unitLetter,
                                        lineHeight: unitLine + "px",
                                        textTransform: unitUpper ? "uppercase" : "none",
                                        fontWeight: unitWeight || "normal",
                                        padding: contentStyle === "side" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    {minuteLabel}
                                </span>
                            </span>
                        </span>,
                        (enableSeparator && contentStyle === "down") && <span className="pre-countdown_separator">{separatorTxt}</span>
                    ]}

                    {showSeconds && [
                        <span className={`pre_countdown-section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px`, boxShadow: `${digitShadowHorizontal}px ${digitShadowVertical}px ${digitShadowBlur}px ${digitShadowColor} ${digitShadowPosition}` }}>
                            <span className={`pre_time-mid `}

                            >
                                <span className={`pre_countdown-amount premium-countdown__digits-seconds`} id={`seconds`}
                                    style={{
                                        color: digitColor,
                                        backgroundColor: digitBgColor,

                                        fontWeight: digitWeight,
                                        fontStyle: digitStyle,
                                        letterSpacing: digitLetter,
                                        textTransform: digitUpper ? "uppercase" : "",
                                        lineHeight: digitLine,
                                        borderStyle: borderType,
                                        borderWidth: `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`,
                                        borderColor: digitBorderColor,
                                        borderRadius: borderRadius,

                                    }}
                                >

                                </span>
                                <span className={`pre_countdown-period premium-countdown__units-seconds`}
                                    style={{
                                        color: unitColor,
                                        backgroundColor: unitBgColor,
                                        fontStyle: unitStyle,
                                        letterSpacing: unitLetter,
                                        lineHeight: unitLine + "px",
                                        textTransform: unitUpper ? "uppercase" : "none",
                                        fontWeight: unitWeight || "normal",
                                        padding: contentStyle === "side" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    {secondLabel}
                                </span>
                            </span>
                        </span>
                    ]}

                </span>) : (<div className="premium-countdown-exp-message">{expireTxt}</div>)}
            </div>
        </ div>

    )
}
export default save;