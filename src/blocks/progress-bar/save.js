import classnames from "classnames"

const {
    RichText
} = wp.editor

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        align,
        multiStage,
        percentage,
        label,
    } = attributes

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
                {multiStage && (
                    <div className="premium-progress-bar-multiple-label">
                        <p className="premium-progress-bar-center-label">
                            {label}
                            <span className="premium-progress-bar-percentage">{percentage}</span>
                        </p>
                    </div>
                )}
                <div className="premium-progress-bar-clear"></div>
                <div className="premium-progress-bar-progress">
                    <div className="premium-progress-bar-progress-bar"></div>
                </div>
            </div>
        </div>
    )
}