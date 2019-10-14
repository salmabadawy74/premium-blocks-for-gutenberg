import classnames from "classnames";

const save = props => {

    const { className } = props;

    const {
        id,
        align,
        dateTime,
        timeZone,
        expiredDate,
        expiredUrl,
        monthsCheck,
        weeksCheck,
        daysCheck,
        hoursCheck,
        minutesCheck,
        secondsCheck,
        monthLabel,
        weekLabel,
        dayLabel,
        hourLabel,
        minuteLabel,
        secondLabel,
        contentDisplay,
        digitsColor,
        digitsBgColor,
        digitsSize,
        digitsWeight,
        digitsLetterSpacing,
        digitsLineHeight,
        borderType,
        borderWidth,
        borderColor,
        borderRadius,
        unitsColor,
        unitsSize,
        unitsWeight,
        unitsLetterSpacing,
        unitsLineHeight,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        unitsSpace

    } = props.attributes;

    const mainClasses = classnames(className, "premium-countdown");

    return (
        <div
            id={id}
            className={`${mainClasses}__wrap`}
            style={{ justifyContent: align || "center" }}
        >
            <div id={`container__${id}p`} className={`premium-countdown__container countdown down `} data-date={dateTime}>
                <span className={`premium-countdown__items `}>

                    {monthsCheck && (
                        <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                            <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount  premium-countdown__digits-months`} id={`months`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        fontSize: digitsSize || "0",
                                        fontWeight: digitsWeight || "normal",
                                        letterSpacing: digitsLetterSpacing || "0",
                                        lineHeight: digitsLineHeight || "inherit",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0",
                                        padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"

                                    }}
                                >
                                    00
                                </span>
                                <span className={`premium-countdown__period premium-countdown__units-months`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor || "#000",
                                        fontSize: unitsSize || "0",
                                        fontWeight: unitsWeight || "normal",
                                        letterSpacing: unitsLetterSpacing || "0",
                                        lineHeight: unitsLineHeight || "inherit",
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                        padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    {monthLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {weeksCheck && (
                        <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                            <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount  premium-countdown__digits-weeks`} id={`weeks`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        fontSize: digitsSize || "0",
                                        fontWeight: digitsWeight || "normal",
                                        letterSpacing: digitsLetterSpacing || "0",
                                        lineHeight: digitsLineHeight || "inherit",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0",
                                        padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    00
                                </span>
                                <span className={`premium-countdown__period premium-countdown__units-weeks`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor || "#000",
                                        fontSize: unitsSize || "0",
                                        fontWeight: unitsWeight || "normal",
                                        letterSpacing: unitsLetterSpacing || "0",
                                        lineHeight: unitsLineHeight || "inherit",
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                        padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    {weekLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {daysCheck && (
                        <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                            <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount  premium-countdown__digits-days`} id={`days`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        fontSize: digitsSize || "0",
                                        fontWeight: digitsWeight || "normal",
                                        letterSpacing: digitsLetterSpacing || "0",
                                        lineHeight: digitsLineHeight || "inherit",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0",
                                        padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    00
                                </span>
                                <span className={`premium-countdown__period premium-countdown__units-days`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor || "#000",
                                        fontSize: unitsSize || "0",
                                        fontWeight: unitsWeight || "normal",
                                        letterSpacing: unitsLetterSpacing || "0",
                                        lineHeight: unitsLineHeight || "inherit",
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                        padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    {dayLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {hoursCheck && (
                        <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                            <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount  premium-countdown__digits-hours`} id={`hours`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        fontSize: digitsSize || "0",
                                        fontWeight: digitsWeight || "normal",
                                        letterSpacing: digitsLetterSpacing || "0",
                                        lineHeight: digitsLineHeight || "inherit",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0",
                                        padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    00
                                </span>
                                <span className={`premium-countdown__period premium-countdown__units-hours`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor || "#000",
                                        fontSize: unitsSize || "0",
                                        fontWeight: unitsWeight || "normal",
                                        letterSpacing: unitsLetterSpacing || "0",
                                        lineHeight: unitsLineHeight || "inherit",
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                        padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    {hourLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {minutesCheck && (
                        <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                            <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount  premium-countdown__digits-minutes`} id={`minutes`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        fontSize: digitsSize || "0",
                                        fontWeight: digitsWeight || "normal",
                                        letterSpacing: digitsLetterSpacing || "0",
                                        lineHeight: digitsLineHeight || "inherit",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0",
                                        padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    00
                                </span>
                                <span className={`premium-countdown__period premium-countdown__units-minutes`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor || "#000",
                                        fontSize: unitsSize || "0",
                                        fontWeight: unitsWeight || "normal",
                                        letterSpacing: unitsLetterSpacing || "0",
                                        lineHeight: unitsLineHeight || "inherit",
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                        padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    {minuteLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {secondsCheck && (
                        <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                            <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount premium-countdown__digits-seconds`} id={`seconds`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        fontSize: digitsSize || "0",
                                        fontWeight: digitsWeight || "normal",
                                        letterSpacing: digitsLetterSpacing || "0",
                                        lineHeight: digitsLineHeight || "inherit",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0",
                                        padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    00
                                </span>
                                <span className={`premium-countdown__period premium-countdown__units-seconds`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor || "#000",
                                        fontSize: unitsSize || "0",
                                        fontWeight: unitsWeight || "normal",
                                        letterSpacing: unitsLetterSpacing || "0",
                                        lineHeight: unitsLineHeight || "inherit",
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
                                        padding: contentDisplay === "inline-block" ? "25px 30px" : "5px 40px"
                                    }}
                                >
                                    {secondLabel}
                                </span>
                            </span>
                        </span>
                    )}

                </span>
            </div>
        </div>
    )

};

export default save;