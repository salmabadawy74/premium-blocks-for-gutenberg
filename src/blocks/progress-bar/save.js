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
        parcentageStyles,
        indicatorStyles
    } = attributes

    const renderItems = repeaterItems.map((item, index) => {
        return (< div className="premium-progress-bar-multiple-label"
            style={
                {
                    left: item.percentage + "%"
                }
            } >
            <p className="premium-progress-bar-center-label" style={{ transform: align == "center" ? "translateX(-45%)" : align == "left" ? "translateX(-82%)" : "translateX(-10%)" }}> {
                item.title
            }
                {
                    item.percentage ? < span className="premium-progress-bar-percentage" > {
                        item.percentage
                    }% </span> : ""}
            </p>
            {
                (item.title || item.percentage) ? indicator == 'arrow' ? < p className="premium-progress-bar-arrow" > </p> : indicator == 'pin' ? <p className="premium-progress-bar-pin"></p> : "" : ""}
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
                            <p className="premium-progress-bar-left-label">
                                <span>{label}</span>
                            </p>
                            < p className="premium-progress-bar-right-label" >
                                <span > {
                                    percentage
                                } </span>
                            </p>
                        </div>
                    ) : "" : ""}
                {
                    multiStage && (<div>{renderItems}</div>)}
                <div className="premium-progress-bar-clear"></div>
                <div className="premium-progress-bar-progress">
                    < div className={
                        `premium-progress-bar-progress-bar ${block_id} ${styleProgress == 'stripe' ? "premium-progress-bar-progress-stripe" : ""} ${animate ? "premium-progress-bar-progress-active" : ""}`
                    }
                        data-score={`${progress}`}
                        data-speed={`${speeds}`}
                    > </div>
                </div>
            </div>
        </div>
    )
}