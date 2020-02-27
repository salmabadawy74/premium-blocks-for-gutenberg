import classnames from "classnames"

const {
    RichText
} = wp.blockEditor

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        align,
        firstLabel,
        secondLabel,
        showLabel
    } = attributes

    return (
        <div className={classnames(
            className,
            `premium-block-${block_id}`
        )}
            id={`premium-block-${block_id}`}
            style={{
                textAlign: align,
            }}>
            <div className={`premium-content-switcher`}
                style={{
                    textAlign: align,
                }}>
                <div className="premium-content-switcher-toggle">
                    {showLabel && (<div className="premium-content-switcher-first-label">
                        <h3>{firstLabel}</h3>
                    </div>
                    )}
                    <div className="premium-content-switcher-toggle-switch">
                        <label className="premium-content-switcher-toggle-switch-label">
                            <input type="checkbox" />
                            <span className="premium-content-switcher-toggle-switch-slider round"></span>
                        </label>
                    </div>
                    {showLabel && (<div className="premium-content-switcher-second-label">
                        <h3>{secondLabel}</h3>
                    </div>
                    )}
                </div>
                <div className="premium-content-switcher-list"></div>
            </div>
        </div>
    )
}