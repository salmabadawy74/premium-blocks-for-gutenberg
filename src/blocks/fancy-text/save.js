import classnames from "classnames"

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        align,
        className,
        prefix,
        suffix,
        repeaterFancyText,
        effect,
    } = attributes

    return (
        <div className={classnames(
            className,
            `premium-block-${block_id}`
        )}
            style={{
                textAlign: align,
            }}>
            <div className={`premium-fancy-text ${effect == 'slide' ? 'premium-fancy-slide' : ""}`} style={{
                textAlign: align,
            }}>
                <span className={`premium-fancy-text-prefix-text`}>{prefix} </span>
                {effect == 'slide' ?
                    <div className={`premium-fancy-text-title-slide`}>
                        <ul className={`premium-fancy-text-title-slide-list`}>
                            {repeaterFancyText.map((item, index) => { return <li>{item.title}</li> })}
                        </ul>
                    </div>
                    : <span className={`premium-fancy-text-title`} ref={(el) => { this.el = el; }}> </span>}
                <span className={`premium-fancy-text-suffix-text`}> {suffix}</span>
            </div>
        </div>
    )
}