import classnames from "classnames"

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        align,
        multiStage,
        percentage,
        label,
        repeaterItems,
        styleProgress,
        animate,
        speeds
    } = attributes

    const renderItems = repeaterItems.map((item, index) => {
        return (< div className="premium-progress-bar-multiple-label"
            style={
                {
                    left: item.percentage + "%"
                }
            } >
            <p className="premium-progress-bar-center-label" > {
                item.title
            }
                <span className="premium-progress-bar-percentage" > {
                    item.percentage
                }% </span>
            </p>
            <p className="premium-progress-bar-arrow"></p>
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
                {!multiStage && (
                    <p className="premium-progress-bar-left-label">
                        <span>{label}</span>
                    </p>
                )}
                {!multiStage && (
                    <p className="premium-progress-bar-right-label">
                        <span>{percentage}</span>
                    </p>
                )}
                {
                    multiStage && (<div>{renderItems}</div>)}
                <div className="premium-progress-bar-clear"></div>
                <div className="premium-progress-bar-progress">
                    < div className={
                        `premium-progress-bar-progress-bar ${styleProgress == 'stripe' ? "premium-progress-bar-progress-stripe" : ""} ${animate ? "premium-progress-bar-progress-active" : ""}`
                    }
                        style={{ transition: `width ${speeds}ms ease-in-out` }}
                    > </div>
                </div>
            </div>
        </div>
    )
}