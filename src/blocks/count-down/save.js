import classnames from "classnames";

const save = props => {

    const { className } = props;

    const {
        id,
        align,
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
        borderType,
        borderWidth,
        borderColor,
        borderRadius,
        unitsColor,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft

    } = props.attributes;

    const mainClasses = classnames(className, "premium-countdown");

    return (
        <div
            id={`premium-countdown__${id}`}
            className={`${mainClasses}`}
            style={{ justifyContent: align || "center" }}
        >
            <div id={`countdown__${id}`} className={`premium-countdown__init countdown down is-pre_countdown`}>
                <span className={`premium-countdown__row premium-countdown__show4`}>

                    {monthsCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius : borderRadius || "0"
                                    }}
                                >
                                    00
                                </span>
                                <span className={`premium-countdown__period`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor,
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {monthLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {weeksCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius : borderRadius || "0"
                                    }}
                                >
                                    00
                                </span>
                                <span className={`premium-countdown__period`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor,
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {weekLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {daysCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius : borderRadius || "0"
                                    }}
                                >
                                    00
                                </span>
                                <span className={`premium-countdown__period`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor,
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {dayLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {hoursCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius : borderRadius || "0"
                                    }}
                                >
                                    23
                                </span>
                                <span className={`premium-countdown__period`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor,
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {hourLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {minutesCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius : borderRadius || "0"
                                    }}
                                >
                                    16
                                </span>
                                <span className={`premium-countdown__period`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor,
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {minuteLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {secondsCheck && (
                        <span className={`premium-countdown__section`}>
                            <span className={`premium-countdown__time-mid`}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius : borderRadius || "0"
                                    }}
                                >
                                    37
                                </span>
                                <span className={`premium-countdown__period`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor,
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
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