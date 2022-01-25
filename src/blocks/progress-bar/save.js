import classnames from "classnames"

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        classMigrate,
        align,
        multiStage,
        percentage,
        label,
        progress,
        speeds,
        repeaterItems,
        editTitle,
        styleProgress,
        animate,
        indicator,
        progressBarStyles,
        labelStyles,
        percentageStyles,
        indicatorStyles
    } = attributes

    const renderItems = repeaterItems.map((item, index) => {
        return (< div className="premium-progress-bar-multiple-label"
            style={
                {
                    left: item.percentage + "%"
                }
            } >
            <p className="premium-progress-bar-center-label" style={{
                transform: align == "center" ? "translateX(-45%)" : align == "left" ? "translateX(-82%)" : "translateX(-10%)",
                color: labelStyles[0].labelColor,
                fontWeight: labelStyles[0].LabelWeight,
                letterSpacing: labelStyles[0].LabelLetter + "px",
                textTransform: labelStyles[0].LabelUpper ? "uppercase" : "none",
                fontStyle: labelStyles[0].LabelStyle,
            }}> {
                    item.title
                }
                {
                    item.percentage ? < span className="premium-progress-bar-percentage"
                        style={{
                            color: percentageStyles[0].percentageColor,
                            fontWeight: percentageStyles[0].percentageWeight,
                            letterSpacing: percentageStyles[0].percentageLetter + "px",
                            fontStyle: percentageStyles[0].percentageStyle,
                        }}
                    > {
                            item.percentage
                        }% </span> : ""}
            </p>
            {
                (item.title || item.percentage) ? indicator == 'arrow' ? < p className="premium-progress-bar-arrow" style={{
                    color: indicatorStyles[0].arrowColor,
                }} > </p> : indicator == 'pin' ? <p className="premium-progress-bar-pin" style={{
                    borderColor: indicatorStyles[0].pinColor,
                }}></p> : "" : ""}
        </div>
        )
    })

    return (
        <div className={classnames(
            className,
            `premium-block-${block_id}`
        )}
            style={{
                textAlign: align,
            }}>
            <div className={`premium-progress-bar`}
                style={{
                    textAlign: align,
                }}>
                {
                    !multiStage ? label ? (
                        < div className="premium-progress-bar-labels-wrap" >
                            <p className="premium-progress-bar-left-label"
                                style={{
                                    color: labelStyles[0].labelColor,
                                    fontWeight: labelStyles[0].LabelWeight,
                                    letterSpacing: labelStyles[0].LabelLetter + "px",
                                    textTransform: labelStyles[0].LabelUpper ? "uppercase" : "none",
                                    fontStyle: labelStyles[0].LabelStyle,
                                }}
                            >
                                <span>{label}</span>
                            </p>
                            < p className="premium-progress-bar-right-label" style={{
                                color: percentageStyles[0].percentageColor,
                                fontWeight: percentageStyles[0].percentageWeight,
                                letterSpacing: percentageStyles[0].percentageLetter + "px",
                                fontStyle: percentageStyles[0].percentageStyle,
                            }} >
                                <span > {
                                    percentage
                                } </span>
                            </p>
                        </div>
                    ) : "" : ""}
                {
                    multiStage && (<div>{renderItems}</div>)}
                <div className="premium-progress-bar-clear"></div>
                <div className="premium-progress-bar-progress"
                    style={{
                        backgroundColor: progressBarStyles[0].progressBarbgColor
                    }}
                >
                    < div className={
                        `premium-progress-bar-progress-bar ${block_id} ${styleProgress == 'stripe' ? "premium-progress-bar-progress-stripe" : ""} ${animate ? "premium-progress-bar-progress-active" : ""}`
                    }
                        style={{
                            transition: `width ${speeds}s ease-in-out`,
                            backgroundColor: progressBarStyles[0].progressBarColor,
                            width: `${progress}%`,

                        }}
                        data-score={`${progress}`}
                        data-speed={`${speeds}`}
                    > </div>
                </div>
            </div>
        </div>
    )
}